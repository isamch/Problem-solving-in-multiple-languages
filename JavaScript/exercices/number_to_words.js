// Exercise: Number to Words

// Description: Convert a number to words (basic).

function numberToWords(n) {
  const words = ['zero','one','two','three','four','five','six','seven','eight','nine'];
  return n.toString().split('').map(d => words[+d]).join(' ');
}

// Test the function
console.log(numberToWords(123)); // Output: 'one two three'
