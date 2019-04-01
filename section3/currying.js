// function currying 
// CURRYING refers to only partially
// giving a function a parameter

function multiply(a, b) {
  return a*b;
}

let multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4)); // returns 8

let multiplyByTen = multiply.bind(this, 10);
console.log(multiplyByTen(4)); // returns 40