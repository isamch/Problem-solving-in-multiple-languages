// Exercise: Validation Library

// Description: Validate email format.

function isValidEmail(email) {
  return /^[\w.-]+@[\w.-]+\.\w+$/.test(email);
}

// Test the function
console.log(isValidEmail('test@example.com'));
