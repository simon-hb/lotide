const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it('returns empty array for empty array', () => {
    assert.deepEqual(middle([]), []);
  });

  it('returns empty array for one element array', () => {
    assert.deepEqual(middle(['hi']), []);
  });

  it('returns empty array for two element array', () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it('returns middle 2 elements for array with even number of elements', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it('returns middle element for array with odd number of elements', () => {
    assert.deepEqual(middle(['a', 'b', 'c', 'd', 'e']), ['c']);
  });
});