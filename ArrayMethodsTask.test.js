const{numbersGreaterThan70, increaseStudentScoreBy5, squareNumbers} = require("./ArrayMethodsTask");

test("scores greater than or equal to 70", ()=>{
let testScores = [20,80,50,70,40,30,90,75,35,95];
let result = numbersGreaterThan70(testScores);
let answer = [80,70,90,75,95];
expect(result).toEqual(answer);
})

test("increase students scores by 5 points", ()=>{
let examGrades = [85,92,78,88,95];
let result = increaseStudentScoreBy5(examGrades);
let answer = [90,97,83,93,100];
expect(result).toEqual(answer);
})

test("find squares of numbers in a list", ()=>{
let numbers = [2,4,6,8,10];
let result = squareNumbers(numbers);
let answer = [4,16,36,64,100];
expect(result).toEqual(answer);
})