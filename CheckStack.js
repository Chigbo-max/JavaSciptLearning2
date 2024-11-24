
let i = 0;
let arr = []
let numbers = [2,3,4]
// arr[i++] = 3
// arr[i++] = 4
// arr[i++] = 6
// console.log(arr[--i]);
let j = 0;
    for (j = 0; j < numbers.length; j++) {
        arr[j] = numbers[j];
    }

elements=()=> {
    let poppedElement = arr[--j];
    console.log(poppedElement);
}
    let elements1 = arr.peek();
    conole.log(elements1);







