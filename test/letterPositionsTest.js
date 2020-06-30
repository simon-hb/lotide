const assert = require('chai').assert;
const letterPositions   = require('../letterPositions');

describe("#letterPositions", () => {
  it('returns proper results one test WOO!', () => {
    
    assert.deepEqual(letterPositions('hello'), { h: [0], e: [1], l: [2, 3], o: [4] });
  });
});
