// Exercise: Array Intersection

// Description: Find the intersection of two arrays.

function arrayIntersection(a, b) {
  return a.filter(item => b.includes(item));
}

// Test the function
console.log(arrayIntersection([1, 2, 3], [2, 3, 4])); // Output: [2, 3]
