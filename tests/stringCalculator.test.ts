import { add } from "../src/stringCalculator";

// First Test: Handle Empty String
describe("String Calculator", () => {
  it("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });
});

// Second Test: Handle Single Number
it("should return the number itself when one number is passed", () => {
  expect(add("1")).toBe(1);
});

// Third Test: Handle Two Numbers (Comma Separated)
it("should return the sum of two numbers separated by a comma", () => {
  expect(add("1,2")).toBe(3);
});

// Fourth Test: Handle Unknown Number of Numbers
it("should return the sum of an unknown amount of numbers", () => {
  expect(add("1,2,3,4,5")).toBe(15);
});

// Fifth Test: Handle Newline Separators
it("should handle new lines between numbers", () => {
  expect(add("1\n2,3")).toBe(6);
});
