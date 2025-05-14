// Exercise: Count Word Frequency

// Description: Return word frequencies in a sentence.

function wordCount(text) {
  return text.split(' ').reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});
}

// Test the function
console.log(wordCount('hi hi hello')); // Output: { hi: 2, hello: 1 }
