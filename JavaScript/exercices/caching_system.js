// Exercise: Caching System

// Description: Create a simple in-memory cache.

class Cache {
  constructor() { this.store = {}; }
  set(key, val) { this.store[key] = val; }
  get(key) { return this.store[key]; }
}

// Test the function
const c = new Cache();
c.set('x', 5);
console.log(c.get('x'));
