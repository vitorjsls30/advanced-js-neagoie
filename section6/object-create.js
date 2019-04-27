// Object.create()
// #1 - First Attempt - We can share an object with the
// elf's functions and manually assign it to the objects
// like peter.attack = elfFunctions.attack;
// #2 - Use Object.create like so
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
// #1 - First Attempt
// peter.attack = elfFunctions.attack();
peter.attack();
const sam = createElf('Sam', 'fire');
// #1 - First Attempt
// sam.attack = elfFunctions.attack();
sam.attack();