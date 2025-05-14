// Exercise: Apply Function with Arguments

// Description: Use `apply` to call a function with an array of arguments.

function sum(a, b, c) {
  return a + b + c;
}

// Test the function
console.log(sum.apply(null, [1, 2, 3])); // Output: 6
