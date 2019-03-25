// The scope chain is a away to define wich "variable environment"
// is accessible to a given function

var x = 'x';

function findName() {
  var b = 'b';
  return printName();
}

function printName() {
  var c = 'c';
  return 'Andrei Neagoie';
}

function sayMyName() {
  var a = 'a';
  return findName();
}

sayMyName();

// ex: var x is accessible to all the given functions
// thats because all of them relates to the parent scopes
// wich is GLOBAL SCOPE in this case