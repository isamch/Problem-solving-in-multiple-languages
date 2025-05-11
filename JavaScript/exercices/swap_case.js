// Exercise: Swap Case

// Description: Swap the case of each character in a string.

function swapCase(str) {
  return str.split('').map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join('');
}

// Test the function
console.log(swapCase('Hello')); // Output: 'hELLO'
