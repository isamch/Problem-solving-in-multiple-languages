// Exercise: Text Search Engine

// Description: Search word in a text document.

function search(text, word) {
  return text.includes(word);
}

// Test the function
console.log(search('hello world', 'world')); // Output: true
