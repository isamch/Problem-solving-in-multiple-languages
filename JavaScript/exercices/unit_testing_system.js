// Exercise: Unit Testing System

// Description: Simple assertion-based testing.

function test(name, fn) {
  try { fn(); console.log(name + ' passed'); }
  catch (e) { console.error(name + ' failed', e); }
}

// Test the function
test('Addition', () => { if (1 + 1 !== 2) throw 'Fail'; });
