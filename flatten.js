const flatten = function(arrayElements) {
  let outputArray = [];
  for (let arrayElement of arrayElements) {
    if (Array.isArray(arrayElement) === true) {
      for (let element of arrayElement) {
        outputArray.push(element);
      }
    } else {
      outputArray.push(arrayElement);
    }
  }
  return outputArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(flatten(['a', 'b', ['a', 'm'], 'x', ['o']]))

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