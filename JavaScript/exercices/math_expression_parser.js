// Exercise: Math Expression Parser

// Description: Evaluate simple math expressions as strings.

function parseExpression(expr) {
  return Function(`return ${expr}`)();
}

// Test the function
console.log(parseExpression('2 + 3 * 4')); // Output: 14
