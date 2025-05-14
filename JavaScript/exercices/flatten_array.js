// Exercise: Flatten Array

// Description: Flatten a nested array like [1, [2, [3]]] → [1, 2, 3]

function flatten(arr) {
  return arr.flat(Infinity);
}

// Test the function
console.log(flatten([1, [2, [3]]])); // Output: [1, 2, 3]
