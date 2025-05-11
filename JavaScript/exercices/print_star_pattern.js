// Exercise: Print Star Pattern

// Description: Print a right triangle star pattern.

function starPattern(n) {
  for (let i = 1; i <= n; i++) {
    console.log('*'.repeat(i));
  }
}

// Test the function
starPattern(5);
