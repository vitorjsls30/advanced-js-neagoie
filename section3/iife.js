// IIFE - Immediatelly Invoekd Function Expression

// We create a function expression with an anonymous function
// every variable declared inside the anonymous function
// gets a local scope
var iifeFunc = (function() {
  var a = 'IIFE is cool';

  return {
    a: a
  }
})();

// we would get a referenceError here
console.log(a);
// but here, we get 'IIFE is cool' string
console.log(iifeFunc.a);