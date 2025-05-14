// Exercise: Remove Duplicates from Array

// Description: Return a new array without duplicates.

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Test the function
console.log(removeDuplicates([1, 2, 2, 3])); // Output: [1, 2, 3]
