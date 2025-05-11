// Exercise: Notification System

// Description: Show browser notification.

function notify(msg) {
  if (Notification.permission === 'granted') {
    new Notification(msg);
  }
}

// Test the function
// notify('You have a new message!');
