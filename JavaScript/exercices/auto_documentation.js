// Exercise: Auto Documentation

// Description: Generate docs from function comments.

function generateDocs(fn) {
  return fn.toString().match(/\/\*\*(.*?)\*\//s)?.[1].trim();
}

// Test the function
/** Adds numbers */
function add(a, b) { return a + b; }
console.log(generateDocs(add));
