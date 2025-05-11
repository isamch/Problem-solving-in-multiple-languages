// Exercise: Object to Array

// Description: Convert an object into an array of key-value pairs.

function objectToArray(obj) {
  return Object.entries(obj);
}

// Test the function
console.log(objectToArray({a: 1, b: 2})); // Output: [['a', 1], ['b', 2]]
