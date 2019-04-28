// new binding THIS
function Person(name, age) {
  this.name = name;
  this.age = age;
}
// person1 will be the THIS keyword
const person1 = new Person('Vitor', 31);

// implicit binding
const person2 = {
  name: 'Vitor',
  age: 31,
  hi() {
    console.log(`hi ${this.name}!!`);
  }
}

// explicit binding
const person3 = {
  name: 'Vitor',
  age: 31,
  hi: function() {
    console.log(`hi ${this.setTimeout}!!`);
  }.bind(window)
};

// Arrow functions
const person4 = {
  name: 'Vitor',
  age: 31,
  hi: function() {
    var inner = () => {
      console.log(`hi ${this.name}`);
    };
    inner();
  }
};

person4.hi();