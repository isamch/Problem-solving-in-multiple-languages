// Exercise: Sort Numbers

// Description: Sort an array of numbers.

function sortNumbers(arr) {
  return arr.sort((a, b) => a - b);
}

// Test the function
console.log(sortNumbers([3, 1, 4, 2])); // Output: [1, 2, 3, 4]
