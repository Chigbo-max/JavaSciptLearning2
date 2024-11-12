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

const distributedBooks = ()=>{
    const newArray = [];
    let answer = ["tales by moonlight", "tales by sunlight", "tales by greenlight", "tales by redlight"];
    for (const members of answer){
         newArray.push(members);
    }
    return newArray;
}

function identifyClasses(classTimings){
    const array = [];
    for(let elements of classTimings){
        let splittedTime = elements.slice(5);
        if(splittedTime === "PM"){
            array.push(elements)
    }
 //classTimings.filter((timings)=>timings > );

}
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

module.exports = {returnStudentGrades,totalExpenses, numbersGreaterThan70, increaseStudentScoreBy5, squareNumbers, distributedBooks, identifyClasses};
