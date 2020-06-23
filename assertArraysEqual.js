const eqArrays = function(arrayOne, arrayTwo) {
  if (typeof(arrayOne) !== 'object' || typeof(arrayTwo) !== 'object') {
    return `🛑🛑🛑Assertion Failed: ${arrayOne} ==== ${arrayTwo}`;
  }
  if (arrayOne.length !== arrayTwo.length) {
    return `🛑🛑🛑Assertion Failed: ${arrayOne} ==== ${arrayTwo}`;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return `🛑🛑🛑Assertion Failed: ${arrayOne} ==== ${arrayTwo}`;
    }
  }
  return `✅✅✅Assertion Passed: ${arrayOne} ==== ${arrayTwo}`;
};

console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 3], [1, 2, '3']));
console.log(eqArrays([1, 2, 3], [3, 2, 1]));
console.log(eqArrays([1, 2, 3], [1, 2, 3, 4]));
console.log(eqArrays(['a', 'b', 'c'], 'abc'));