// Memory Efficiency
// How does CLOSURE helps us with memory efficiency?
function heavyDuty(index) {
  const bigArray = new Array(7000).fill(':)');
  console.log('created!!');
  return bigArray[index];
}
// Each time it gets called it creates a new array...
heavyDuty(3);
heavyDuty(4);
heavyDuty(5);

// But...what if I wanna use less memory? without pollute
// the global namespace?
function heavyDuty2() {
  const bigArray = new Array(7000).fill(':)');
  console.log('created again!!');
  return function(index) {
    return bigArray[index];
  }
}

const getHeavyDuty2 = heavyDuty2();

getHeavyDuty2(6);
getHeavyDuty2(7);
getHeavyDuty2(8);