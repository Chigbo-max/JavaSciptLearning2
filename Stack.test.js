const{Stack, Queue} = require("./Stack");


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

test("test that queue dequeues items from a queue",()=>{
    let queue = new Queue();
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    queue.dequeue();
    expect(queue.getItems()).toEqual(6);

})




