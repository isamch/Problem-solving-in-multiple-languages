// Exercise: Check Anagram

// Description: Check if two strings are anagrams.

function isAnagram(a, b) {
  const normalize = str => str.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');
  return normalize(a) === normalize(b);
}

// Test the function
console.log(isAnagram('listen', 'silent')); // Output: true
