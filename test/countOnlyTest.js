const assert = require('chai').assert;
const countOnly   = require('../countOnly');

describe("#countOnly", () => {
  it('returns proper results one test WOO!', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    assert.deepEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true }), { "Jason": 1, "Fang": 2 });
  });
});