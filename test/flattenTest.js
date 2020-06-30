const assert = require('chai').assert;
const flatten   = require('../flatten');

describe("#flatten", () => {
  it('returns same array if no nested arrays', () => {
    assert.deepEqual(flatten([1]), [1]);
  });

  it('returns same array for nested array but nested array removed. everything else same', () => {
    assert.deepEqual(flatten(['a', 'b', ['a', 'm'], 'x', ['o']]), ['a', 'b', 'a', 'm', 'x', 'o']);
  });

  it('returns same array for nested array but nested array removed. everything else same dbl check', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [ 1, 2, 3, 4, 5, 6 ]);
  });
});