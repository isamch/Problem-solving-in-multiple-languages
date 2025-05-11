// Exercise: Compress String

// Description: Compress repeated characters (basic).

function compress(str) {
  return str.replace(/(.)\1+/g, (m, c) => c + m.length);
}

// Test the function
console.log(compress('aaabbbcc')); // Output: 'a3b3c2'
