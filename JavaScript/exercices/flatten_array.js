// Exercise: Flatten Array

// Description: Flatten a nested array one level deep.

function flatten(arr) {
  return arr.reduce((flat, next) => flat.concat(next), []);
}

// Test the function
console.log(flatten([[1, 2], [3, 4]])); // Output: [1, 2, 3, 4]
