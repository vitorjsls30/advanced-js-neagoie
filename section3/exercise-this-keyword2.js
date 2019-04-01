// How to fix this code?
const character = {
  name: 'Simon',
  getCharacter() {
    return this.name;
  }
};

// the solution is to use .bind(character), this way, THIS keyword will be lexically
// scoped to "character object"
const giveMeTheCharacterNOW = character.getCharacter.bind(character); // the solution

// How Would you fix this?
console.log('?', giveMeTheCharacterNOW()); // this should print '? Simon'