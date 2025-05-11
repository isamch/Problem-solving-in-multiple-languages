// Exercise: Event System

// Description: Create a simple event emitter.

class EventEmitter {
  constructor() { this.events = {}; }
  on(event, listener) {
    (this.events[event] ||= []).push(listener);
  }
  emit(event, ...args) {
    (this.events[event] || []).forEach(fn => fn(...args));
  }
}

// Test the function
const ee = new EventEmitter();
ee.on('log', msg => console.log(msg));
ee.emit('log', 'Hello');
