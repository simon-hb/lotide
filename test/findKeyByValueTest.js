const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {
  it("returns correct value when value is string", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
  });

  it("returns undefined when key does not exist", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, 'Friends'), undefined);
  });

  it("returns correct value test 2", () => {
    const bootcampFriends = {
      neighbour: "Julianna",
      chessBud: "Kaushik",
      researchPartner:  "Will"
    };
    assert.deepEqual(findKeyByValue(bootcampFriends, 'Julianna'), 'neighbour');
  });
});