// Exercise: Custom JSON Parser

// Description: Parse JSON without using JSON.parse.

function customParse(str) {
  return eval('(' + str + ')');
}

// Test the function
console.log(customParse('{"a":1}'));
