// We define a function that accepts a parameter
// and returns another function
const multiply = function(num1) {
  return function(num2) {
    return num1 * num2;
  };
}

// We pass the first parameter...
const multiplyByTwo = multiply(2);
const multiplyByTen = multiply(10);
const multiplyByFive = multiply(5);

// and later on we pass the second one...
console.log(multiplyByTwo(4));
console.log(multiplyByTen(10));
console.log(multiplyByFive(5));