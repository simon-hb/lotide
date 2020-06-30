const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
assertObjectsEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
assertObjectsEqual(ab, abc);

const abd = { a: "2", b: "1" };
assertObjectsEqual(ab, abd); // false

const bcd = { a: "1", b: 2 };
assertObjectsEqual(ab, bcd); //false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
assertObjectsEqual(cd, dc); 

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
assertObjectsEqual(cd, cd2); 

const cd3 = { d: ["2", 3], c: 1 };
assertObjectsEqual(cd, cd3); //false