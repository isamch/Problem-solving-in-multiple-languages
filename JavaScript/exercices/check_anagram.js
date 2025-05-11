// Exercise: Check Anagram

// Description: Check if two strings are anagrams.

function isAnagram(str1, str2) {
  const format = s => s.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');
  return format(str1) === format(str2);
}

// Test the function
console.log(isAnagram('listen', 'silent')); // Output: true
