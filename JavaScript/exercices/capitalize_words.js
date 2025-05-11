// Exercise: Capitalize Words

// Description: Capitalize the first letter of each word in a string.

function capitalizeWords(str) {
  return str.split(' ').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
}

// Test the function
console.log(capitalizeWords('hello world')); // Output: 'Hello World'
