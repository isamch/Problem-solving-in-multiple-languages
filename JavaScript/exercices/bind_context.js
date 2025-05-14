// Exercise: Bind Context

// Description: Bind a function to a custom object.

function greet() {
  return `Hello, ${this.name}`;
}

// Test the function
const person = { name: 'Ali' };
const boundGreet = greet.bind(person);
console.log(boundGreet()); // Output: 'Hello, Ali'
