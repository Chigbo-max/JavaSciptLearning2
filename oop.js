let animal = {
    name : "unknown",
    color : "",
    age : 0,
    sound : function(){
        return `${this.name} with skin color ${this.color} and age ${this.age} makes a sound `
    }
};

let cat = Object.create(animal);
cat.name = "pussycat";
cat.color = "black";
cat.age = 4;
console.log(cat.sound());
 
let newCat = Object.create(cat);
newCat.name = "pussinboots";
newCat.color = "red";
newCat.age = 2;
console.log(newCat)


let dog = {};
Object.setPrototypeOf(dog, animal);
dog.name = "bulldog";
dog.color ="brown";
dog.age = 28;
console.log(dog);

let newDog = {};

Object.setPrototypeOf(dog, newDog);
newDog.name = "Rotwiler";
newDog.color = "black";
newDog.age = 6;
console.log(newDog);
console.log(Object.getPrototypeOf(animal))

let human ={
_proto_ : animal
};
console.log(human);

//CONSTRUCTOR FUNCTION
function Human(name, age){
    this.name = name;
    this.age = age;

    this.profile = ()=>{
        return `Hello I am ${this.name} and I am ${this.age} years old`
    };
};

let personOne = new Human("Williams", 28);
console.log(personOne.profile());
Human.prototype.sense = false;
console.log(personOne.sense);