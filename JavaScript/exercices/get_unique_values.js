// Exercise: Get Unique Values

// Description: Return an array with only the unique values.

function uniqueValues(arr) {
  return [...new Set(arr)];
}

// Test the function
console.log(uniqueValues([1, 2, 2, 3, 3, 3])); // Output: [1, 2, 3]
