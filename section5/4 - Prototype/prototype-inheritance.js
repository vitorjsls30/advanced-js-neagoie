const dragon = {
  name: 'Tiamat',
  fire: true,
  fight() {
    return 5;
  },
  sing() {
    return `Im ${this.name} the fire breather!!`;
  }
};

const lizard = {
  name: 'Kiki',
  fight() {
    return 1;
  }
};

// We can borrow sing method fro dragon like this...
// const singLizard = dragon.sing.bind(lizard);
// singLizard();

// Another way to do it is to make lizard inherite dragon methods
// NOTE: We should never use this. It out performs the JS engine
lizard.__proto__ = dragon;
lizard.sing();

// we can also check if dragon is lizard's prototype like this...
dragon.isPrototypeOf(lizard);

// A way to check the object properties is the one that follows
for(let prop in lizard) {
  if(lizard.hasOwnProperty(prop)) {
    console.log(prop);
  }
}