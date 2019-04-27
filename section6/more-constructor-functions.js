// Constructor functions
// 1 - The "new" keyword automatically returns the object
// EC - With the "new" keyword the "this" refers to the object itself
// PLUS
// Watch the "this" keyword behavior
function Elf(name, weapon) {
  this.name = name;
  this.weapon = weapon;
}

Elf.prototype.attack = function() {
  return `attack with ${this.weapon}`;
}

Elf.prototype.build = function() {
  // Works wuite well, but look at the next example
  // return `${this.name} built a House`;

  // Just like that it wont work..so we have to use a workaround...
  // function buildHouse() {
  //   return `${this.name} built a House`;
  // }

  // #1 - Use Bind()
  // function buildHouse() {
  //   return `${this.name} built a House`;
  // }
  // return buildHouse.bind(this)();

  // #2 - Save "this" into a variable
  var self = this;
  function buildHouse() {
    return `${self.name} built a House`;
  }
  return buildHouse();
}

const peter = new Elf('Peter', 'stones');
peter.build();