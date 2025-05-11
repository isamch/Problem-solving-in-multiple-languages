// Exercise: Date Difference

// Description: Calculate the difference in days between two dates.

function dateDiff(d1, d2) {
  const diff = Math.abs(new Date(d2) - new Date(d1));
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

// Test the function
console.log(dateDiff('2024-01-01', '2024-01-10')); // Output: 9
