// Exercise: Find Intersection

// Description: Find common elements between two arrays.

function intersection(arr1, arr2) {
  return arr1.filter(x => arr2.includes(x));
}

// Test the function
console.log(intersection([1, 2, 3], [2, 3, 4])); // Output: [2, 3]
