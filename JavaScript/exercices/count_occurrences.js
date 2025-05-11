// Exercise: Count Occurrences

// Description: Count how many times a value appears in an array.

function countOccurrences(arr, value) {
  return arr.filter(x => x === value).length;
}

// Test the function
console.log(countOccurrences([1, 2, 2, 3, 2], 2)); // Output: 3
