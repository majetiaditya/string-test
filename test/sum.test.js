import { expect } from "chai";
import sum from "../src/sum.js";

describe("Sum Function", () => {
  it("should throw an error if input is an array", () => {
    expect(sum([])).to.equal("Input must be a string");
  });

  it("should return 0 for an empty string", () => {
    expect(sum("")).to.equal(0);
  });

  it("should return the number itself if the array has one number", () => {
    expect(sum("5")).to.equal(5);
  });

  it("should return the correct sum for multiple numbers", () => {
    expect(sum("1,2,3,4")).to.equal(10);
  });

  it("should return the correct sum for multiple numbers with new line", () => {
    expect(sum("1\n2,3")).to.equal(6);
  });

  it("should return the correct sum for multiple numbers with new delimiter", () => {
    expect(sum("//;\n1;2")).to.equal(3);
  });

  it("should return an error message when string contains negative number", () => {
    expect(sum("-1,5")).to.equal('negative numbers not allowed -1');
  });

  it("should return an error message when string contains negative numbers", () => {
    expect(sum("-1,5,-7")).to.equal('negative numbers not allowed -1, -7');
  }); 
});
