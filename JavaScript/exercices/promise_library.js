// Exercise: Promise Library

// Description: Create a minimal Promise wrapper.

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Test the function
delay(1000).then(() => console.log('Done'));
