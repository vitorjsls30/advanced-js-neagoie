// What would be console logged in this example?
var favouriteFood = 'grapes';

var foodThoughts = function () {
  console.log('Original favourite food: ', favouriteFood);
  
  var favouriteFood = 'sushi';
  
  console.log('New favourite food: ', favouriteFood);
};

foodThoughts();

// Answer:
// Original favourite food: undefined
// New favourite food: shushi
// Explanation
// Each function declaration creates a new execution context for it
// so, in the execution phase, favouriteFood inside foodThoughts gets hoisted
// and get "undefined" assigned to it