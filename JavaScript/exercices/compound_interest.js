// Exercise: Compound Interest

// Description: Calculate compound interest.

function compoundInterest(p, r, t, n) {
  return p * Math.pow((1 + r/n), n*t);
}

// Test the function
console.log(compoundInterest(1000, 0.05, 1, 12));
