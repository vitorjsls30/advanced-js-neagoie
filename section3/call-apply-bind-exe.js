// My Solution:
const array = [1, 2, 3];

function getMaxNumber(array) {
  var maxNumber = array[0];
  for (var i=0; i < array.length; i++) {
    if(array[i] > maxNumber) {
      maxNumber = array[i];
    }
  }
  return maxNumber;
}

getMaxNumber(array); // should return 3

// The Course Answer
const array = [1, 2, 3];

function getMaxNumber(array) {
  return Math.max.apply(null, array);
}

getMaxNumber(array); // should return 3