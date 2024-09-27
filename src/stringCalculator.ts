export function add(numbers: string): number {
  if (!numbers) return 0;

  const { delimiter, cleanNumbers } = parseInput(numbers);
  const numArray = splitNumbers(cleanNumbers, delimiter);
  checkForNegatives(numArray);

  return sumNumbers(numArray);
}

// Parse the input string to extract delimiter and clean number string
function parseInput(numbers: string): {
  delimiter: string;
  cleanNumbers: string;
} {
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    const delimiter = parts[0].substring(2);
    return { delimiter, cleanNumbers: parts[1] };
  }
  return { delimiter: ",", cleanNumbers: numbers };
}

// Split the clean number string using the specified delimiter
function splitNumbers(numbers: string, delimiter: string): number[] {
  return numbers
    .replace(/\n/g, delimiter)
    .split(delimiter)
    .map((num) => parseInt(num, 10));
}

// Check if any negative numbers are present and throw an error if so
function checkForNegatives(numArray: number[]): void {
  const negatives = numArray.filter((num) => num < 0);
  if (negatives.length) {
    throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
  }
}

// Sum all the numbers in the array
function sumNumbers(numArray: number[]): number {
  return numArray.reduce((sum, num) => sum + num, 0);
}
