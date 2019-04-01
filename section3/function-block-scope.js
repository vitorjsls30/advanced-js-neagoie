// FUNCTION SCOPE X BLOCK SCOPE
// in the given example the function scope is reached 
// with the use of "var" keyword
function loop () {
  for(var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log('final', i);
}

// "5" gets printed by the code, but
// if we want to reach BLOCK SCOPE here, we could use "let" keyword
// and we would get a referenceError