// Inheritance
// We can create a base class Character and extend 
// it in different classes.
// In JS we actually have objects inheriting from objects
class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return `attack with ${this.weapon}`;
  }
}

class Elf extends Character{
  constructor(name, weapon, type) {
    super(name, weapon);
    this.type = type;
  }
}

class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon);
    this.color = color;
  }
  makeFort() {
    return `strongest fort in the world made`;
  }
}

const dolby = new Elf('Dolby', 'cloth', 'house');
dolby.attack();
const shrek = new Ogre('Shrek', 'club', 'green');
shrek.attack();
shrek.makeFort();

// Checking objects links
console.log(dolby instanceof(Elf));
console.log(shrek instanceof(Ogre));