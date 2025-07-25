// Exercise: Capitalize First Letters

// Description: Capitalize the first letter of each word in a sentence.

function capitalize(sentence) {
  return sentence
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Test the function
console.log(capitalize('hello world')); // Output: 'Hello World'
