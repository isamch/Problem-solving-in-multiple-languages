// Exercise: Filter Active Users

// Description: Filter out users where 'active' is false.

function getActiveUsers(users) {
  return users.filter(user => user.active);
}

// Test the function
console.log(getActiveUsers([{ active: true }, { active: false }])); // Output: [{ active: true }]
