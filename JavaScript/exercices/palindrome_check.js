// Exercise: Palindrome Check

// Description: Check if a string is a palindrome.

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return str === str.split('').reverse().join('');
}

// Test the function
console.log(isPalindrome('A man, a plan, a canal: Panama')); // Output: true
