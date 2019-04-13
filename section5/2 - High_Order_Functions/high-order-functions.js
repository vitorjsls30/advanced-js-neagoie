// HIGH ORDER FUNCTIONS - Returns a function 
// or receives it as a parameter

function giveAccessTo(name) {
  return 'Access Granted to ' + name;
}

function authenticate(person) {
  var array = [];
  for(let i = 0; i < person.verify; i++) {
    array.push(i);
  }
  return giveAccessTo(person.name);
}

function sing(person) {
  return 'la la la la la ' + person.name;
}

// letPerson is a more generic function
// and therefore can accept different functions
function letPerson(person, fn) {
  return fn(person);
}

const user = {
  name: 'Tim',
  level: 'user',
  verify: 1000000
};

const admin = {
  name: 'Vitor',
  level: 'admin',
  verify: 50000000
};

// We need to log the results
// otherwise it gets lost during the execution
// and you only see the last of it
console.log(letPerson(user, sing));
console.log(letPerson(admin, sing));
