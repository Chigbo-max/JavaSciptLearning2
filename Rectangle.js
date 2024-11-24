const Shape = require("./Shape");

class Rectangle extends Shape {

    constructor(side1, side2, name) {
        super(side1, side2, name);
    };

    isSquare(){
        return this.side1 === this.side2;
    }

    displayArea(){
        return `The area of a ${this.name} is ${this.side1 * this.side2}`
};
}
module.exports = Rectangle;