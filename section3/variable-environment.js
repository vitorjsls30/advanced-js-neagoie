// Variable Environment
// Besides the global() execution context, each function has it's
// own variable environment

function two() {
  var isValid;
}

function one() {
  var isValid = true;
  two();
}

var isValid = false;
one();

// The Execution Context Stack stay like this:
// two() -- isValid = undefined;
// one() -- isValid = true;
// global() -- isValid = false;
