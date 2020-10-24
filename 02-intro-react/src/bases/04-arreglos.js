// const array = new Array(100);
const array = [1, 2, 3, 4]
// array.push(1);
// array.push(2);
// array.push(3);
// array.push(4);
//let array2 = array;

//array2.push(5)

const array2 = [...array, 5];

const array3 = array2.map((number, index, array) => array[index] * 2)

console.log("array ", array);
console.log("array2 ", array2);
console.log("array3 ", array3);
