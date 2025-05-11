// Exercise: Flatten Array

// Description: Flatten a nested array.

function flatten(arr) {
  return arr.flat(Infinity);
}

// Test the function
console.log(flatten([1, [2, [3, 4]]])); // Output: [1, 2, 3, 4]
