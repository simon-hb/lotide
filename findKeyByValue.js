const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} === ${expected}`);
  }
};

const findKeyByValue = function(inputObject, searchValue) {
  for (let key in inputObject) {
    if (inputObject[key] === searchValue) {
      return key;
    }
  }
};

module.exports = findKeyByValue;

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const bootcampFriends = {
  neighbour: "Julianna",
  chessBud: "Kaushik",
  researchPartner:  "Will"
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bootcampFriends, "Julianna"), "neighbour");
assertEqual(findKeyByValue(bootcampFriends, "Moses"), undefined);