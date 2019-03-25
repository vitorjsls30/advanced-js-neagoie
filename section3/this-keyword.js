// THIS KEYWORD
// 1: gives methods access to their objects
const obj = {
  name: 'Veronica',
  sing: function() {
    return 'lalala ' + this.name;
  },
  singAgain: function() {
    return this.sing() + '!';
  }
}

obj.sing();

// 2: execute same code for multiple objects
function importantPerson() {
  //  THIS is going to refer to window object
  console.log(this.name, '!');
}

const name = 'Sunny';
const obj1 = {
  name: 'Cassy',
  importantPerson: importantPerson
};

const obj2 = {
  name: 'Jacob',
  importantPerson: importantPerson
};

// What do you think we're gonna get here?
//  Answer: Sunny. 'Cause THIS referes to the "window" object
importantPerson();

