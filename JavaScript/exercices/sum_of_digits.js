// Exercise: Sum of Digits

// Description: Return the sum of the digits in a number.

function sumDigits(num) {
  return num.toString().split('').reduce((acc, d) => acc + parseInt(d), 0);
}

// Test the function
console.log(sumDigits(123)); // Output: 6
