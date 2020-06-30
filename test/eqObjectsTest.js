const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it("returns true when objects same", () => {
    const ab = { a: "1", b: "2" };
    const ba = { a: "1", b: "2" };
    assert.strictEqual(eqObjects(ab, ba), true);
  });
  
  it("returns true when objects same but keys listed in different order", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.strictEqual(eqObjects(ab, ba), true);
  });

  it("returns false when objects same but one has an extra key", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1", c: "3" };
    assert.strictEqual(eqObjects(ab, ba), false);
  });

  it("returns false when objects are different", () => {
    const ab = { a: "1", b: "2" };
    const ba = { a: "2", b: "1" };
    assert.strictEqual(eqObjects(ab, ba), false);
  });

  it("returns false when objects are same but type of is different (string/ number)", () => {
    const ab = { a: "1", b: "2" };
    const ba = { a: "1", b: 2 };
    assert.strictEqual(eqObjects(ab, ba), false);
  });

  it("returns true when there are arrays as values", () => {
    const ab = { c: "1", d: ["2", 3] };
    const ba = { c: "1", d: ["2", 3] };
    assert.strictEqual(eqObjects(ab, ba), true);
  });

  it("returns true when there are nested objects", () => {
    const ab = { a: { z: 1 }, b: 2 };
    const ba = { a: { z: 1 }, b: 2 };
    assert.strictEqual(eqObjects(ab, ba), true);
  });

  it("returns true when there are nested nested objects", () => {
    const ab = { a: { k: { y: 0, z: 1 }, j: 23}, b: 2 };
    const ba = { a: { k: { y: 0, z: 1 }, j: 23}, b: 2 };
    assert.strictEqual(eqObjects(ab, ba), true);
  });
});