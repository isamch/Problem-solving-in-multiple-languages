// Exercise: Auth System

// Description: Simulate a basic user login check.

function authenticate(user, pass) {
  return user === 'admin' && pass === '1234';
}

// Test the function
console.log(authenticate('admin', '1234')); // Output: true
