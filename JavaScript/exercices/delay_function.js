// Exercise: Delay Function

// Description: Wait for a specific time (in ms) before continuing.

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Test the function
delay(1000).then(() => console.log('Done after 1 second'));
