// Exercise: Calculate Average

// Description: Calculate the average of an array of numbers.

function average(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

// Test the function
console.log(average([10, 20, 30])); // Output: 20
