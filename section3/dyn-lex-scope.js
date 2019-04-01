// Exercise - Dynamic Scope X Lexical Scope
// Example 1
const a = function() {
  console.log('a', this);
  const b = function() {
    console.log('b', this);
    const c = {
      hi: function() {
        console.log('c', this);
      }
    };
    c.hi();
  }
  b();
}

a();

// Example 2
const obj = {
  name: 'Billy',
  sing() {
    console.log('a', this);
    var anotherFunc = function() {
      console.log('b', this);
    }
    anotherFunc();
  }
}