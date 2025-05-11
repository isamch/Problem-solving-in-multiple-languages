// Exercise: Random Code Generator

// Description: Generate a random alphanumeric code.

function randomCode(length) {
  return [...Array(length)].map(() => Math.random().toString(36)[2]).join('');
}

// Test the function
console.log(randomCode(8));
