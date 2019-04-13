// Prototype Inheritance with THIS
// How would you be able to create your own .bind() method
// using call or apply

// #1 - First Attempt
Function.prototype.bind = function(object) {
  if(object) {
    console.log('with object...');
    const new_func = object[this.name];
    return function() {
      return new_func.call(object);
    }
  } else {
    console.log('no object...');
    return this;
  }
}

// #2 - With the Solution Code
Function.prototype.bind = function(whoIsCallingMe) {
  const self = this;
  return function() {
    console.log('using self...');
    return self.call(whoIsCallingMe, arguments);
  }
}

const dragon = {
  type: 'fire',
  attack: function() {
    return `${this.type} attack!!!`;
  }
}

const dragonAttack = dragon.attack.bind(dragon);
dragonAttack();