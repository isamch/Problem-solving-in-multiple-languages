// Exercise: Access Nested Object

// Description: Safely access a deeply nested object property.

function getUserCity(user) {
  return user?.address?.location?.city || 'Unknown';
}

// Test the function
console.log(getUserCity({ address: { location: { city: 'Paris' } } })); // Output: 'Paris'
