const{determineBuyingPatterns,returnArrayOfHealthyItems,returnStudentGrades,numbersGreaterThan70, increaseStudentScoreBy5, squareNumbers, distributedBooks, identifyClasses, totalExpenses} = require("./ArrayMethodsTask");

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
let answer =    [
    { name: 'Emily', book: 'tales by moonlight' },
    { name: 'Jack', book: 'tales by sunlight' },
    { name: 'Sophia', book: 'tales by greenlight' },
    { name: 'Daniel', book: 'tales by redlight' }
  ]
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

test("return an array of healthy items",()=>{
    const shoppingList = [
        { name: 'Apples', category: 'Fruits', isHealthy: true },
        { name: 'Potato Chips', category: 'Snacks', isHealthy: false },
        { name: 'Carrots', category: 'Vegetables', isHealthy: true },
        { name: 'Chocolate Bars', category: 'Sweets', isHealthy: false },
        { name: 'Greek Yogurt', category: 'Dairy', isHealthy: true },
        { name: 'Soda', category: 'Beverages', isHealthy: false }
        ]
let result = returnArrayOfHealthyItems(shoppingList);
let answer = ['Apples', 'Carrots', 'Greek Yoghurt']
})

test("buying patterns of customers",()=>{
    const orders = [
        { id: 1, items: [{ price: 25, quantity: 2 }, { price: 15, quantity: 3 }] },
        { id: 2, items: [{ price: 100, quantity: 1 }, { price: 25, quantity: 2 }] },
        { id: 3, items: [{ price: 30, quantity: 1 }] },
        ];
        let result = determineBuyingPatterns(orders);
        let answer = [{id: 1, items: [{totalPrice: 95}]}, {id: 2, items: [{totalPrice: 150}]}, {id: 3, items: [{totalPrice: 30}]}];
        expect(result).toEqual(answer);


    


})