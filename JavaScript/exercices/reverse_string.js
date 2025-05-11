// Exercise: Reverse String

// Description: Return the reversed version of a given string.

function reverseString(str) {
  return str.split('').reverse().join('');
}

// Test the function
console.log(reverseString('openai')); // Output: 'ianepo'
