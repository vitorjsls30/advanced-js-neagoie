// Factory Functions
// Instead of repeating ourselves
// declaring multiple elves with the same properties
// we can just create a function that creates an elf
// Problem: Each object created carries along with it the properties and methods declared
// ex: 1000 elfs -> 1000 attack functions in memory
function createElf(name, weapon) {
  return {
    name,
    weapon,
    attack() {
      return `attack with ${weapon}`;
    }
  }
}

const peter = createElf('Peter', 'stones');
const sam = createElf('Sam', 'fire');

peter.attack();
sam.attack();