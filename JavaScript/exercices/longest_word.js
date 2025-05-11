// Exercise: Longest Word

// Description: Find the longest word in a sentence.

function longestWord(text) {
  const words = text.split(' ');
  let longest = '';
  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

// Test the function
console.log(longestWord('The quick brown fox')); // Output: 'quick'
