// Exercise: Count Vowels

// Description: Count the number of vowels in a string.

function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

// Test the function
console.log(countVowels('hello world')); // Output: 3
