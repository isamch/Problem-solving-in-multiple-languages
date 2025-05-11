// Exercise: Remove Duplicates

// Description: Remove duplicate values from an array.

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Test the function
console.log(removeDuplicates([1, 2, 2, 3])); // Output: [1, 2, 3]
