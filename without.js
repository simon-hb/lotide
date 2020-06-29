const without = function(source, itemsToRemove) {
  return source.filter(item => !itemsToRemove.includes(item));
};

module.exports = without;
  /* Another way of doing it
  let filteredArray = [...source];
  let removeCount = 0;
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        filteredArray.splice(i - removeCount, 1);
        removeCount++;
      }
    }
  }
  return filteredArray;
  */

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

console.log(without([1,2,3], [3]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without([1, 2], [1, 2, 3, 4]));
console.log(without(['a', 'b', 'c'], [1, 2, 3]));

assertArraysEqual(without([1, 2, 3], [3]), [1, 2]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ['1', '2']);
assertArraysEqual(without([1, 2], [1, 2, 3, 4]), []);
assertArraysEqual(without(['a', 'b', 'c'], [1, 2, 3]), ['a', 'b', 'c']);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);