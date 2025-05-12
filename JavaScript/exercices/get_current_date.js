// Exercise: Get Current Date

// Description: Return the current date in YYYY-MM-DD format.

function getCurrentDate() {
  const d = new Date();
  return d.toISOString().split('T')[0];
}

// Test the function
console.log(getCurrentDate()); // Output: e.g., '2025-05-11'
