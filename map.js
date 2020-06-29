const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map;

const results1 = map(words, word => word[0]);
console.log(results1);

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} === ${expected}`);
  }
};

const eqArrays = function(arrayOne, arrayTwo) {
  if (Array.isArray(arrayOne) === false || Array.isArray(arrayTwo) === false) {
    return false;
  }
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (Array.isArray(arrayOne[i])) {
      if (!eqArrays(arrayOne[i], arrayTwo[i])) {
        return false;
      }
    } else if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

const resultsTwo = map(words, word => word[2]);
const resultsThree = map(words, word => word.toUpperCase());
const resultsFour = map(words, word => word.length);
assertArraysEqual(resultsTwo, ['o', 'n',, 'j', 'm']);
assertArraysEqual(resultsThree, ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM']);
assertArraysEqual(resultsFour, [6, 7, 2, 5, 3]);