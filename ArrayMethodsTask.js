const numbersGreaterThan70 = (testScores)=>{
    let result = testScores.filter((scores)=> scores >= 70);
    return result;
}

const increaseStudentScoreBy5 =(studentsGrades)=>{
    let result =studentsGrades.map((grades)=> grades + 5);
    return result;
}

const squareNumbers = function(numbers){
    let result = numbers.map((number)=>number * number);
    return result;
}

const distributedBooks = (members)=>{
    members = ["Emily", "Jack", "Sophia", "Daniel"];
    let books = ["tales by moonlight", "tales by sunlight", "tales by greenlight", "tales by redlight"];
    const newArray = [];
    for(let index = 0; index < members.length; index++){
        bookClubMembers = {name: members[index],
                            book: books[index]
        }
         newArray.push(bookClubMembers);
    }
    return newArray;
}

function identifyClasses(classTimings){
    const array = [];
    classTimings.map((elements)=>{
        let splittedTime = elements.slice(5);
        if(splittedTime === "PM"){
            array.push(elements)
    }
})
return array;

}

const totalExpenses = (expenses)=>{
    let sum = 0;
    for(elements in expenses){
        sum+=expenses[elements]
    }
return sum;

}

const returnStudentGrades = (array)=>{
    let grades = [];
    array.map((scores)=>{
        if(scores >= 90 && scores <= 100){
            grades.push("A");
        }
        if(scores >= 80 && scores <= 89){
            grades.push("B");
        }
        if(scores >= 70 && scores <= 79){
            grades.push("C");
        }
        if(scores >= 60 && scores <= 69){
            grades.push("D");
        }
        if(scores <= 59){
            grades.push("F");
        }

    })
    return grades;

}

const returnArrayOfHealthyItems = (shoppingList)=>{
    let healthyItems = []
    shoppingList.filter((lists)=>{
    if(lists.isHealthy == true){
        healthyItems.push(lists.name)

         }
    })
    healthyItems.forEach(()=>{
        return healthyItems;
    })
}

const determineBuyingPatterns = (orders)=>{
    orders = [
        { id: 1, items: [{ price: 25, quantity: 2 }, { price: 15, quantity: 3 }] },
        { id: 2, items: [{ price: 100, quantity: 1 }, { price: 25, quantity: 2 }] },
        { id: 3, items: [{ price: 30, quantity: 1 }] },
        ];
    filteredOrders = [];
orders.filter((lists)=>{
    //if(lists.items.price < 100){
        filteredOrders.push(lists)
   // }
   

})
return filteredOrders;
}
console.log(determineBuyingPatterns())


module.exports = {determineBuyingPatterns,returnArrayOfHealthyItems,returnStudentGrades,totalExpenses, numbersGreaterThan70, increaseStudentScoreBy5, squareNumbers, distributedBooks, identifyClasses};
