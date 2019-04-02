const number = 100
const string = "Jay"
let obj1 = {
  value: "a"
}
let obj2 = {
  value: "b"
}
let obj3 = obj2;

function change(number, string, obj1, obj2) {
  // In the creation phase, variables here are hoisted
  // they do not refer to the outside variable, they're actually
  // passed by reference in the parameters
  number = number * 10;
  string = "Pete";
  obj1 = obj2;
  obj2.value = "c";
}

change(number, string, obj1, obj2);

//Guess the outputs here before you run the code: 
console.log(number); // guess: 100
console.log(string); // guess: Jay
console.log(obj1.value); //guess: c

// Solution:
// 100 and 'Jay' are correct, but obj1.value is 'a' instead