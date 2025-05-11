// Exercise: State Management

// Description: Simple store to manage state.

class Store {
  constructor(state) { this.state = state; }
  get(key) { return this.state[key]; }
  set(key, val) { this.state[key] = val; }
}

// Test the function
const store = new Store({ count: 0 });
store.set('count', 5);
console.log(store.get('count'));
