// Exercise: Remove Falsy Values

// Description: Remove falsy values from an array.

function removeFalsy(arr) {
  return arr.filter(Boolean);
}

// Test the function
console.log(removeFalsy([0, 1, false, 2, '', 3])); // Output: [1, 2, 3]
