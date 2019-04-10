const { expect } = require("chai");
const persistance = require("./multiplicativePersistance.js");

describe("persistance", () => {
  it("returns 0 when given a single digit number", () => {
    expect(persistance(8)).to.equal(0);
  });
  it("returns 1 when given a number with 1 in like 51", () => {
    expect(persistance(51)).to.equal(1);
  });
  it("returns 3 when the number is 39", () => {
    expect(persistance(39)).to.equal(3);
  });
});
