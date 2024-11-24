class Stack {


    constructor(value){
        this.array = []
        this.count = 0;
        this.isEmpty = false;
    }

    getArray(){
        return this.array;
    }


    isEmpty() {
            return this.isEmpty;
    }

    push(number){
      this.array[this.count++] = number;
    }

    validate(){
        if(this.array === 0)
        this.isEmpty = true;
    }

    pop(){
        this.validate();
       this.value = this.array[this.count- 1];
       this.count--;
       this.array.length = this.count;
       return this.value;
    }

    peek(){
        this.validate();
        this.value = this.array[this.count - 1];
    }

    getNumber() {
        return this.value;
    }
}

class Queue {


    // Write a class Queue that uses an array to implement the queue data structure.
    // Implement the following methods: enqueue, dequeue, front, and isEmpty.

    constructor(){
        this.items = [];
        this.isEmpty = false;
        this.count = 0;
        this.item = 0;
    }

    enqueue(item){
        this.items[this.count++] = item;
    }

    dequeue(){
     this.item = this.items[this.count - 1];
     this.count++;
     this.items[this.items.length] = this.count;
     return this.items;
    }

    getItems(){
        return this.items;
    }

    front(){

    }

    isEmpty(){
        return this.isEmpty;
    }

    getItem(){
        return this.item;
    }

}
module.exports = {Stack, Queue};