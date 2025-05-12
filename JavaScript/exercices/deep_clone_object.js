// Exercise: Deep Clone Object

// Description: Clone an object deeply using JSON methods.

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// Test the function
const original = { a: { b: 1 } };
const copy = deepClone(original);
console.log(copy); // Output: { a: { b: 1 } }
