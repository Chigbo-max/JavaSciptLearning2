 const Rectangle = require("./Rectangle");

test("check if function returns square",()=>{
    let side1 = 4;
    let side2 = 4;
    let name = "rectangle"
    let rectangle = new Rectangle(side1, side2, name);
    let answer = rectangle.displayArea();
    let result = "The area of a rectangle is 16";
    expect(answer).toBe(result);

})

test("check if function returns boolean", ()=>{
    let side1 = 4;
    let side2 = 4;
    let name = "rectangle"
    let rectangle = new Rectangle(side1, side2, name);
    let booleanValue = rectangle.isSquare();
    let result = true;
    expect(booleanValue).toBe(result);
    });

    test("throw exception for negative value",()=>{
        let side1 = -1;
        let side2 = 2;
        let name = "rectangle";
        let rectangle =()=> new Rectangle(side1, side2, name);
        let errorMessage = "Side value cannot be less than 0";
        expect(rectangle).toThrowError(errorMessage);
    });