const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require("./lib/shapes");

const questions = [
    {
        type: 'input',
        name: 'characters',
        message: 'Please choose up to 3 characters for your logo.',
        validate: (input) => input.length <= 3,
    },

    {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color.',
    },

    {
        type: 'list',
        name: 'svgShape',
        message: 'What shape do you want your logo to be?',
        choices: [Circle, Triangle, Square],
    },

    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color.',
    },
];

// Create logo
function createSVG(response) {
    const {characters, textColor, svgShape, shapeColor} = response;
    let shapeSVG = '';

    // Render shape and shape color
    switch (svgShape) {
        case 'Circle':
          const circle = new Circle();
          circle.setColor(shapeColor);
          shapeSVG = circle.render();
          break;

        case 'Square':
          const square = new Square();
          square.setColor(shapeColor);
          shapeSVG = square.render();
          break;

        case 'Triangle':
          const triangle = new Triangle();
          triangle.setColor(shapeColor);
          shapeSVG = triangle.render();
          break;
        default:
          break;
      }

    //   Return text and text color with shape
    return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">  
        ${shapeSVG}
        <text x="20" y="50" fill="${textColor}" font-size="24">${characters}</text>
    </svg>`;
    };
    


function writeToFile(logo, outputPath) {
    fs.writeFileSync(outputPath, logo);
    console.log('SVG file saved');
};

function init() {
    inquirer.prompt(questions)
    .then((response) => {
        console.log("creating SVG file");
        const logo = createSVG(response);
        writeToFile(logo, "./dist/logo.svg");
    });
};

init();