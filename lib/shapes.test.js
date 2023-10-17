const {Circle, Square, Triangle} = require("./shapes");

describe('Circle', () => {
    it('should render a blue circle', () => {
        const circle = new Circle();
        circle.setColor("blue");
        expect(circle.render()).toEqual('<circle cx="50" cy="50" r="40" fill="blue" />');
    });
});

describe('Square', () => {
    it('should render a red square', () => {
        const square = new Square();
        square.setColor("red");
        expect(square.render()).toEqual('<rect x="10" y="10" width="80" height="80" fill="red" />');
    });
});

describe('Triangle', () => {
    it('should render a yellow triangle', () => {
        const triangle = new Triangle();
        triangle.setColor("yellow");
        expect(triangle.render()).toEqual('<polygon points="50,10 90,90 10,90" fill="yellow" />');
    });
});