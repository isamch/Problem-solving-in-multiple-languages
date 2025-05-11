// Exercise: Capitalize First Letter

// Description: Capitalize the first letter of a given string.

function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Test the function
console.log(capitalizeFirst('hello')); // Output: 'Hello'
