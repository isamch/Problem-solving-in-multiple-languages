// Exercise: AES Encryption

// Description: Encrypt text using AES (with CryptoJS).

function encrypt(text, key) {
  return CryptoJS.AES.encrypt(text, key).toString();
}

// Test the function
// Requires CryptoJS
// console.log(encrypt('secret', 'key'));
