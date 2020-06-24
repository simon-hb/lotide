const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (Array.isArray(arrayOne) === false || Array.isArray(arrayTwo) === false) {
    return `🛑🛑🛑Assertion Failed: ${arrayOne} === ${arrayTwo}`;
  }
  if (arrayOne.length !== arrayTwo.length) {
    return `🛑🛑🛑Assertion Failed: ${arrayOne} === ${arrayTwo}`;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return `🛑🛑🛑Assertion Failed: ${arrayOne} === ${arrayTwo}`;
    }
  }
  return `✅✅✅Assertion Passed: ${arrayOne} === ${arrayTwo}`;
};

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual([1, 2, 3], [1, 2, '3']));
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1]));
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3, 4]));
console.log(assertArraysEqual(['a', 'b', 'c'], 'abc'));