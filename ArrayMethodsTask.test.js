const{returnStudentGrades,numbersGreaterThan70, increaseStudentScoreBy5, squareNumbers, distributedBooks, identifyClasses, totalExpenses} = require("./ArrayMethodsTask");

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

test("distribute a different book to each member", ()=>{
let members = ["Emily", "Jack", "Sophia", "Daniel"];
let result = distributedBooks(members);
let answer = ["tales by moonlight", "tales by sunlight", "tales by greenlight", "tales by redlight"];
expect(result).toEqual(answer);
})

test("identify the classes offered in the afternoon", ()=>{
let classTimings = ["9:00 AM", "11:00 AM", "1:00 PM","3:00 PM", "5:00 PM"];
let result = identifyClasses(classTimings);
let answer = ["1:00 PM", "3:00 PM","5:00 PM"];
expect(result).toEqual(answer);
})

test("total amount spent on expenses",()=>{
    const expenses = {"groceries": 150,
                "dining out":100,
                "transportation":50,
                "entertainment": 80
    };
    let result = totalExpenses(expenses);
    let answer = 380;
    expect(result).toBe(answer);
})

test("return studen grades", ()=>{
    const studentScores = [95, 78, 85, 60, 45, 92];
    let result = returnStudentGrades(studentScores);
    let answer = ["A","C","B","D","F","A"];
    expect(result).toEqual(answer);
})