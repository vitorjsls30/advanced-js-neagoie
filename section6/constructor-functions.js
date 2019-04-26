// Constructor functions
// 1 - The "new" keyword automatically returns the object
// EC - With the "new" keyword the "this" refers to the object itself
function Elf(name, weapon) {
  this.name = name;
  this.weapon = weapon;
}

Elf.prototype.attack = function() {
  return `attack with ${this.weapon}`;
}

const peter = new Elf('Peter', 'stones');
peter.attack();
const sam = new Elf('Sam', 'fire');
sam.attack();
// sam.name;

// 2 - Create an Elf object using Function creator function.
const Elf1 = new Function('name', 'weapon', 
`this.name = name;
this.weapon = weapon`);

const sarah = new Elf1('Sarah', 'Fireworks');
// sarah;