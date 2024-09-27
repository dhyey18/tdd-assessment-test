// implementing the minimal code to pass the test cases
export function add(numbers: string): number {
  if (!numbers) return 0;

  let delimiter = ",";
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = parts[0].substring(2);
    numbers = parts[1];
  }

  const numArray = numbers
    .replace(/\n/g, delimiter)
    .split(delimiter)
    .map((num) => parseInt(num, 10));
  return numArray.reduce((sum, num) => sum + num, 0);
}
