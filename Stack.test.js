const{Stack, Queue, Array} = require("./Stack");


test("test that stack is empty",()=>{
    let stack = new Stack();
    expect(stack.isEmpty).toBe(false);

})

 test("test that stack pushes a number into a stack",()=>{
     let stack = new Stack();
     stack.push(1);
     stack.push(2);
    expect(stack.getArray().length).toEqual(2);

 })

test("test that stack returns result after a number is popped",()=>{
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.getArray().length).toEqual(3);
    stack.pop()
    expect(stack.getArray().length).toEqual(2);
})

test("test that stack returns peek value",()=>{
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.peek();
    expect(stack.getNumber()).toEqual(2);

})

test("test that an error message is throw when stack is full",()=>{
    let stack = new Stack();
})

test("test that queue returns empty array",()=>{
    let queue = new Queue();
    expect(queue.isEmpty).toBe(false);
})

test("test that queue enqueues items in a queue",()=>{
    let queue = new Queue();
    queue.enqueue(3);
    queue.enqueue(4);
    expect(queue.getItems().length).toEqual(2);
})

test("test that queue dequeues first item from a queue",()=>{
    let queue = new Queue();
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    queue.dequeue();
    expect(queue.getItems().length).toEqual(2);

})

test("test that queue enqueues items from a queue",()=>{
    let queue = new Queue();
    queue.enqueue(4);
    queue.enqueue(5);
    queue.enqueue(6);
    expect(queue.front()).toEqual(4);
})

test("test that function filters unqualified people",()=>{

    const people = [
        {name : "John", age : 16, voterID : false},
        {name : "Peter", age : 18, voterID : true},
        {name : "Caleb", age : 22, voterID : false},
    ]
    const array = new Array();
    let result = array.filterUnqualifiedPeople(people)
    let answer = [{name : "John", age : 16, voterID : false}, {name: "Caleb", age : 22, voterID : false}];
    expect(result).toEqual(answer);
})

test("test that function filters out jobs that have salaries less than 50k and are located in new york",()=>{

    const jobs =[
        {title : "Software Engineer", salary: 60000, location: "New York"},
        {title : "Software Engineer", salary: 40000, location: "California"},
        {title : "Software Engineer", salary: 30000, location: "New York"},
    ]
    const array = new Array();
    let result = array.filterJobs(jobs);
    let answer = [{title : "Software Engineer", salary: 40000, location: "California"}, {title : "Software Engineer", salary: 30000, location: "New York"}];
    expect(result).toEqual(answer);

});

test("test that function returns the total of books borrowed",()=>{

    const array = new Array();
    let listOfNumberOfBooksBorrowed = [2,4,5,6];
    let result = array.sumOfNumberOfBooksBorrowed(listOfNumberOfBooksBorrowed);
    let answer = 17;
    expect(result).toBe(answer);
});

test("test that function returns total expenses",()=>{
    const array = new Array();
    let listOfExpenses = [{category: "food", amount: 100}, {category: "transport", amount: 500}, {category: "data", amount: 1000}];
    let result = array.calculateTotalExpenses(listOfExpenses);
    let answer = 1600;
    expect(result).toBe(answer);
});