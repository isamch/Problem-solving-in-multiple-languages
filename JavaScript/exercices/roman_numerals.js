// Exercise: Roman Numerals

// Description: Convert integer to Roman numeral.

function toRoman(num) {
  const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const sym = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  let res = '';
  for (let i = 0; i < val.length; i++) {
    while (num >= val[i]) {
      num -= val[i];
      res += sym[i];
    }
  }
  return res;
}

// Test the function
console.log(toRoman(1994)); // Output: 'MCMXCIV'
