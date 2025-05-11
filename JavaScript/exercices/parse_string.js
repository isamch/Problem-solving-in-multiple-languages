// Exercise: Parse String

// Description: Parse a comma-separated string into an array.

function parseCSV(str) {
  return str.split(',').map(s => s.trim());
}

// Test the function
console.log(parseCSV('apple, banana, cherry')); // Output: ['apple', 'banana', 'cherry']
