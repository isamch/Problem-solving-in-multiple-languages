// Exercise: Palindrome Check

// Description: Check if a string is a palindrome.

function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}

// Test the function
console.log(isPalindrome('RaceCar')); // Output: true
