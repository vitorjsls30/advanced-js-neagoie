// Object.create()
// #1 - First Attempt - We can share an object with the
// elf's functions and manually assign it to the objects
// like peter.attack = elfFunctions.attack;
// #2 - Use Object.create lke so
const elfFunctions = {
  attack() {
    return `attack with ${this.weapon}`
  }
}

function createElf(name, weapon) {
  // Object.create creates __proto__ link
  let newElf = Object.create(elfFunctions);
  newElf.name = name;
  newElf.weapon = weapon;
  return newElf;
}

const peter = createElf('Peter', 'stones');
peter.attack();
const sam = createElf('Sam', 'fire');
sam.attack();