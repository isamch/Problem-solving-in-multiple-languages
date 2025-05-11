// Exercise: Get Day of Week

// Description: Return the day of the week from a date string.

function getDayName(dateStr) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[new Date(dateStr).getDay()];
}

// Test the function
console.log(getDayName('2025-05-11')); // Output: 'Sunday'
