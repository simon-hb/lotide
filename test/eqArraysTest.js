const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });

  it('assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);', () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });

  it('assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);', () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });

  it('assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);', () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });

  it('assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);', () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
  });
});