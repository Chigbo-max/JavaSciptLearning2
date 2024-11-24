class Human{
    #name;
    #age;
    #sex;
    constructor(name,age, sex){
        this.#name = name; //# is for private but with the #, it becomes public
        this.age = age;
        this.sex = sex;
    };

    constructor(name,age){
        this.#name = name; 
        this.age = age;
    };

    set name(newName){
        this.#name = newName;
    };

    set age(age){
        if(age < 0){
            throw new Error("Age should not be less than 0");
            } 
        else{
        this.#age = age;
        }  
    };

    set sex(sex){
        this.#sex = sex;
    };

    get name(){
        return this.#name;
    };

    get age(){
        return this.#age;
    };

    get sex(){
        return this.sex;
    };

    //to declare a function in a javascript class, use "descrie" instead of "function"
    describe = ()=>{
        return `My name is ${this.#name} and I am ${this.#age} years old.`
    };
}

const personOne = new Human("Chigbo", 28, "Male");
console.log(personOne.describe());

let array = new Array();

class Man extends Human{
    #sex;
    constructor(name,age){
        super(name,age);
        this.#sex = "male";
    }
}

module.exports = Human;
