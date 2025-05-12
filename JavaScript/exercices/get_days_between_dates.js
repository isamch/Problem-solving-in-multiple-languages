// Exercise: Get Days Between Dates

// Description: Calculate number of days between two dates.

function daysBetween(date1, date2) {
  const diff = Math.abs(new Date(date1) - new Date(date2));
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

// Test the function
console.log(daysBetween('2025-01-01', '2025-01-10')); // Output: 9
