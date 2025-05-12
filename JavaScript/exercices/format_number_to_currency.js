// Exercise: Format Number to Currency

// Description: Format a number to currency format (e.g., $1,234.56).

function formatCurrency(num) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num);
}

// Test the function
console.log(formatCurrency(1234.56)); // Output: '$1,234.56'
