import { add } from '../src/stringCalculator';


// First Test: Handle Empty String
describe('String Calculator', () => {
  it('should return 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });
});
