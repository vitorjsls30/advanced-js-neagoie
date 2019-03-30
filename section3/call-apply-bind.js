// CALL / APPLY / BIND
// CALL and APPLY do the same, the only difference is that APPLY accepts a list of parameters
// .call(object, param1, param2);
// .apply(object, [param1, param2]);

const wizard = {
  name: 'merlin',
  health: 50,
  heal(num1, num2) {
    return this.health += num1 + num2;
  }
};

const archer = {
  name: 'robin hood',
  health: 30
};

// CALL/APPLY function call example
// wizard.heal.call(archer, 50, 10);

// BIND - Save ou current function for later execution preserving the this scope
console.log('1', archer);
const healArcher = wizard.heal.bind(archer, 50, 10);
healArcher();
console.log('2', archer);