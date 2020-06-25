const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    return `✅✅✅Assertion Passed: ${arrayOne} === ${arrayTwo}`;
  }
  return `🛑🛑🛑Assertion Failed: ${arrayOne} === ${arrayTwo}`;
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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} === ${expected}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else
      results[sentence[i]] = [i];
    }
  }
  return results;
};

console.log(letterPositions('hello'));
console.log(assertArraysEqual(letterPositions('hello')['h'], [0]));
console.log(assertArraysEqual(letterPositions('hello')['e'], [1]));
console.log(assertArraysEqual(letterPositions('hello')['l'], [2, 3]));
console.log(assertArraysEqual(letterPositions('hello')['o'], [4]));