// Exercise: Simple Hash

// Description: Generate a simple hash from a string.

function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash += str.charCodeAt(i);
  }
  return hash;
}

// Test the function
console.log(simpleHash('abc')); // Output: 294
