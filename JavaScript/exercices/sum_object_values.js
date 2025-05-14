// Exercise: Sum Object Values

// Description: Sum all values of an object like { a: 1, b: 2, c: 3 } → 6

function sumValues(obj) {
  return Object.values(obj).reduce((sum, val) => sum + val, 0);
}

// Test the function
console.log(sumValues({ a: 1, b: 2, c: 3 })); // Output: 6
