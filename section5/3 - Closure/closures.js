// Closures
// It's possible due to Functions() and Lexical Scope

function a() {
  let grandpa = 'grandpa';
  return function b() {
    let father = 'father';
    return function c() {
      let son = 'son';
      return `${grandpa} ${father} ${son}`;
    }
  }
}
// After executing it, even after a() and b() are pop-off the stack
// we manage to retrieve 'grandpa' and 'father' from the 'closure box'
a()()();

// High Order function Example
function boo(string) {
  return function(name) {
    return function(name2) {
      return `${string} ${name} ${name2}`;
    }
  }
}

const boo2 = (string) => (name) => (name2) => `${string} ${name} ${name2}`;

boo('hi')('Vitor')('Jose');

const booString = boo2('hi');
const booName = booString('Vitor');
const booName2 = booName('Jose');
