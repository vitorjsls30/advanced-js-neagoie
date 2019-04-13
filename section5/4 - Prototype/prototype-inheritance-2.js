// Another way of creating an Object and Inherite
// the prototype from another one is the one that follows
const human = {
  mortal: true
};

const socrates = Object.create(human);
socrates.age = 25;

console.log(human.isPrototypeOf(socrates));