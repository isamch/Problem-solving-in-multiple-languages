// Exercise: Reverse String

// Description: Reverse a given string.

function reverseString(str) {
  return str.split('').reverse().join('');
}

// Test the function
console.log(reverseString('hello')); // Output: 'olleh'
