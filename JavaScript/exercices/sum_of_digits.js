// Exercise: Sum of Digits

// Description: Calculate the sum of digits of a number.

function sumDigits(num) {
  return num.toString().split('').reduce((acc, d) => acc + +d, 0);
}

// Test the function
console.log(sumDigits(1234)); // Output: 10
