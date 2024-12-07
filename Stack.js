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
        this.firstNumber = 0;

    }

    enqueue(item){
        this.items[this.count++] = item;
    }

    dequeue(){
     for(let  i = 0; i < this.items.length - 1; i++){
         this.items[i] = this.items[i + 1];
     }
     this.items.length--;
     return this.item;
    }

    getItems(){
        return this.items;
    }

    front(){
        this.item = this.items[this.firstNumber];
        return this.item;
    }

    isEmpty(){
        return this.isEmpty;
    }

    getItem(){
        return this.item;
    }

}

class Array{

    filterUnqualifiedPeople(people){
        let unqualifiedCandidates = []
        people.filter((elements)=>{
            if (elements.age < 18 || elements.voterID === false){
                unqualifiedCandidates.push(elements);
            }
        })
        return unqualifiedCandidates;
    }

    filterJobs(jobs) {
        let filteredJobs = [];
        jobs.filter((elements)=>{
            if (elements.salary < 60000 || elements.location !== "New York"){
                filteredJobs.push(elements);
            }
        })
        return filteredJobs;
    }

    sumOfNumberOfBooksBorrowed(listOfNumberOfBooksBorrowed) {
        let initialValue = 0;
        return listOfNumberOfBooksBorrowed.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue
        );
    }

    calculateTotalExpenses(listOfExpenses) {
        let listOfAmount = [];
        listOfExpenses.filter((element)=>{
            if(element.amount >= 0){
                listOfAmount.push(element.amount);
            }
        })
        let initialValue = 0;
        return listOfAmount.reduce((accumulator, currentValue)=>accumulator + currentValue, initialValue)
    }
}
module.exports = {Stack, Queue, Array};