// Exercise: Multiplication Table

// Description: Print multiplication table for a number.

function multiplicationTable(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n*i}`);
  }
}

// Test the function
multiplicationTable(5);
