// Exercise: Merge Arrays

// Description: Merge two arrays and remove duplicates.

function mergeArrays(a, b) {
  return [...new Set([...a, ...b])];
}

// Test the function
console.log(mergeArrays([1, 2], [2, 3])); // Output: [1, 2, 3]
