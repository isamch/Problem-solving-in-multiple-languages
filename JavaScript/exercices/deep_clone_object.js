// Exercise: Deep Clone Object

// Description: Deeply clone a JavaScript object.

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// Test the function
console.log(deepClone({ a: 1, b: { c: 2 } }));
