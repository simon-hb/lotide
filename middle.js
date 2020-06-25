const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    return `✅✅✅Assertion Passed: ${actual} === ${expected}`;
  }
  return `🛑🛑🛑Assertion Failed: ${actual} === ${expected}`;
};

const eqArrays = function(arrayOne, arrayTwo) {
  if (Array.isArray(arrayOne) === false || Array.isArray(arrayTwo) === false) {
    return false;
  }
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

const isEven  = function(num) {
  return num % 2 === 0;
};

const middle = function (inputArray) {
  let middleArray = [];
  if (inputArray.length < 3) {
    return middleArray;
  } else if (isEven(inputArray.length)) {
    middleArray.push(inputArray[inputArray.length / 2 - 1]);
    middleArray.push(inputArray[inputArray.length / 2]);
  } else {
    middleArray.push(inputArray[(inputArray.length - 1) / 2]);
  }
  return middleArray;
};

console.log(assertArraysEqual(middle([]), []));
console.log(assertArraysEqual(middle([1]), []));
console.log(assertArraysEqual(middle([1, 2]), []));
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));
console.log(assertArraysEqual(middle(['a', 'b', 'c', 'd', 'e']), ['c']));