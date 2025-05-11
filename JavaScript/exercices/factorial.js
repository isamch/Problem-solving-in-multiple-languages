// Exercise: Factorial

// Description: Calculate the factorial of a number.

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

// Test the function
console.log(factorial(5)); // Output: 120
