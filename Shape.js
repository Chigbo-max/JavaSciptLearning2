class Shape {
    #side1;
    #side2;
    name;

    constructor(side1, side2, name) {
        this.side1 = side1;
        this.side2 = side2;
        this.name = name;
    };

    get side1() {
        return this.#side1;
    };

    set side1(side1) {
        if(side1 < 0){
            throw new Error("Side value cannot be less than 0")
        }
        else{
        this.#side1 = side1;
        }
    };

    get side2() {
        return this.#side2;
    };

    set side2(side2) {
        if(side2 < 0){
            throw new Error("Side value cannot be less than 0")
        }
        else{
        this.#side2 = side2;
        }
    };

    get name() {
        return this.name;
    };


};

module.exports = Shape;

