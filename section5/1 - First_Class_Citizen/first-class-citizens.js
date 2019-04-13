// Functions are firat class citizens
// 1 - It can be assingned to a variable
var stuff = function() {};

// 2 - It can be passed as a parameter to another function
function a(fn) {
  fn();
}

a(function() { console.log('yo!!') });

// 3 - it can return another function
function b() {
  return function c() {
    console.log('ahoy pirate!!');
  }
}

var d = b();
d();