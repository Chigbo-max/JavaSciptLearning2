const {determineUsersAboveAge28, findMostExpensiveItem, calculateTotalSpent, returnNameAndTotalSpent} = require("./UserArrayTask");

test("return names of uses above the age of 28 in an array",()=>{
    const users = [
        {
            id: 1,
            name: 'Alice',
            age: 25,
            purchases: [ { item: 'Laptop', price: 1200 },{ item: 'Phone', price: 800 } ]
        },
        {
            id: 2,
            name: 'Bob',
            age: 30,
            purchases: [ { item: 'Tablet', price: 600 }, { item: 'Headphones', price: 200 } ]
        },
        {
            id: 3,
            name: 'Charlie',
            age: 35,
            purchases: [{ item: 'Monitor', price: 300 }, { item: 'Keyboard', price: 100 }, { item: 'Mouse', price: 50 } ]
        },
    ]

    let result = determineUsersAboveAge28(users);
    let answers = ['Bob','Charlie'];
    expect(result).toEqual(answers)
});

test("return most expensive purchased item",()=>{
    const users = [
        {
            id: 1,
            name: 'Alice',
            age: 25,
            purchases: [ { item: 'Laptop', price: 1200 },{ item: 'Phone', price: 800 } ]
        },
        {
            id: 2,
            name: 'Bob',
            age: 30,
            purchases: [ { item: 'Tablet', price: 600 }, { item: 'Headphones', price: 200 } ]
        },
        {
            id: 3,
            name: 'Charlie',
            age: 35,
            purchases: [{ item: 'Monitor', price: 300 }, { item: 'Keyboard', price: 100 }, { item: 'Mouse', price: 50 } ]
        },
    ]

    let result = findMostExpensiveItem(users);
    let answers = 'Laptop';
    expect(result).toEqual(answers)
});

test("return new property totalSpent for each user",()=>{
    const users = [
        {
            id: 1,
            name: 'Alice',
            age: 25,
            purchases: [ { item: 'Laptop', price: 1200 },{ item: 'Phone', price: 800 } ]
        },

    ]

    let result = calculateTotalSpent(users);
    let answers =  [{
        id: 1,
        name: 'Alice',
        age: 25,
        purchases: [{item: 'Laptop', price: 1200}, {item: 'Phone', price: 800}],
        totalSpent: 2000
    }]

expect(result).toEqual(answers)

});

test("return an array of objects containing only name and totalSpent",()=> {
    const users = [{
        id: 1,
        name: 'Alice',
        age: 25,
        purchases: [{item: 'Laptop', price: 1200}, {item: 'Phone', price: 800}],
        totalSpent: 2000
    }];

    let result = calculateTotalSpent(users);
    let answers =  [{
        name:'Alice',
        totalSpent: 2000
    }]
    expect(result).toEqual(answers)
});