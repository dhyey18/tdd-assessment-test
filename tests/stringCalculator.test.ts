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
