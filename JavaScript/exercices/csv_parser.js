// Exercise: CSV Parser

// Description: Parse CSV data into an array.

function parseCSV(csv) {
  return csv.trim().split('\n').map(row => row.split(','));
}

// Test the function
console.log(parseCSV('a,b,c\n1,2,3'));
