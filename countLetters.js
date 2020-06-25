const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} === ${expected}`);
  }
};

const countLetters = function (stringInput) {
  results = {};
  for (let input of stringInput) {
    if (input !== ' ') {
      if (results[input]) {
        results[input] ++
      } else
      results[input] = 1
    }
  }
  return results;
};

console.log(countLetters('hi my name is simon'));
assertEqual(countLetters('hahaha')['h'], 3);