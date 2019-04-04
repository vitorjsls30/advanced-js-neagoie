// Encapsulation
// we can use CLOSURE to define these functions
// and allow through the result wich methods
// will be avaiable

function makeNuclearButton() {
  let timeWithoutDestruction = 0;
  const passTime = () => timeWithoutDestruction++;
  const totalPeaceTime = () => timeWithoutDestruction;
  const launch = () => {
    timeWithoutDestruction = -1;
    return 'Boommm!!';
  }
  setInterval(passTime, 1000);
  return {
    launch: launch,
    totalPeaceTime: totalPeaceTime
  }
}

const ohno = makeNuclearButton();

