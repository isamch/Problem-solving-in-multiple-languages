// Exercise: Caesar Cipher

// Description: Encrypt a string using Caesar cipher.

function caesarCipher(str, shift) {
  return str.replace(/[a-z]/gi, c =>
    String.fromCharCode((c.toLowerCase().charCodeAt(0) - 97 + shift) % 26 + 97));
}

// Test the function
console.log(caesarCipher('abc', 3)); // Output: def
