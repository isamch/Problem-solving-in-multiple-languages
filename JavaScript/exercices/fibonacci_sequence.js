// Exercise: Fibonacci Sequence

// Description: Return the nth Fibonacci number.

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Test the function
console.log(fibonacci(6)); // Output: 8
