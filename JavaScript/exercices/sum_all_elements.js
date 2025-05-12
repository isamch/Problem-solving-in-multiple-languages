// Exercise: Sum All Elements

// Description: Return the sum of all elements in an array.

function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// Test the function
console.log(sumArray([1, 2, 3])); // Output: 6
