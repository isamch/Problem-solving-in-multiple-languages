// Exercise: Digital Signature

// Description: Create a basic digital signature with hashing.

function sign(data, secret) {
  return CryptoJS.HmacSHA256(data, secret).toString();
}

// Test the function
// Requires CryptoJS
// console.log(sign('data', 'secret'));
