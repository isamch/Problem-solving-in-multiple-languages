// Exercise: Check Prime

// Description: Check if a number is a prime number.

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Test the function
console.log(isPrime(7)); // Output: true
