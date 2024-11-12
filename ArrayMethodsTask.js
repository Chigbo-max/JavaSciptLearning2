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
module.exports = {numbersGreaterThan70, increaseStudentScoreBy5, squareNumbers};
