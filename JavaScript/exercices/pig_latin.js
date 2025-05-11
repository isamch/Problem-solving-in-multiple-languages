// Exercise: Pig Latin

// Description: Convert a word to Pig Latin.

function toPigLatin(word) {
  return word.slice(1) + word[0] + 'ay';
}

// Test the function
console.log(toPigLatin('hello')); // Output: 'ellohay'
