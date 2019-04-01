var user1 = {name: 'vitor', age: 31};
var user2 = {name: 'vitor', age: 31};

var eq = user1 == user2 // this gives us false
console.log(eq);

eq = JSON.stringify(user1) == JSON.stringify(user2);
console.log(eq); //this gives us true