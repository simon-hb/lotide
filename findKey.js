const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} === ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;

console.log(
  findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)
);

assertEqual(
findKey({
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  }, x => x.includes('Wire')), 'drama');

  const bootcampFriends = {
    neighbour: "Julianna",
    chessBud: "Kaushik",
    researchPartner:  "Will",
    teacher: 'Janelle',
    sameInterview: 'Natalie'
  };

  assertEqual(findKey(bootcampFriends, x => x[0] === 'J'), 'neighbour');