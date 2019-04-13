// How to fix the following issue:
// the console.log prints 4,4,4,4
// how to correct the index exibition?
// ORIGINAL
const array = [1,2,3,4];
for(var i=0; i < array.length; i++) {
  setTimeout(function() {
    console.log('Im at index ', i, 'wich the value is', array[i]);
  },3000);
}


// FIRST SOLUTION: Using 'let' keyword
// 'let' is blocked scoped so 'i' index valur gets preserved
// to the next iteration
// SECOND SOLUTION: Use an IIFE to wrap setTimeout call
// passing 'i' as a parameter
const array = [1,2,3,4];
for(let i=0; i < array.length; i++) {
  (function(closureI) {
      setTimeout(function() {
        console.log('Im at index ', closureI, 'wich the value is', array[closureI]);
      },3000);
    })(i);
}

