// Exercise: Check Palindrome

// Description: Check if a string is a palindrome.

function isPalindrome(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return clean === clean.split('').reverse().join('');
}

// Test the function
console.log(isPalindrome('Racecar')); // Output: true
