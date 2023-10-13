const inquirer = require('inquirer');
const fs = require('fs');
// const {Triangle, Square, Circle} = require("./lib/shapes");

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
];

// Create logo
function createSVG(response) {
    const {characters, textColor} = response;
    return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
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