// Exercise: Sum Even Numbers

// Description: Return the sum of all even numbers in an array.

function sumEven(arr) {
  return arr.filter(n => n % 2 === 0).reduce((a, b) => a + b, 0);
}

// Test the function
console.log(sumEven([1, 2, 3, 4, 5])); // Output: 6
