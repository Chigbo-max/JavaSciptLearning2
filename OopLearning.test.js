const Human = require("./OopLearning");

test("throw exception when the age is less than zero",()=>{
    let name = "williams";
    let age = -5;
    let human= ()=> new Human(name,age); 
    let errorMessage = "Age should not be less than 0" 
    expect(human).toThrowError(errorMessage);
});

