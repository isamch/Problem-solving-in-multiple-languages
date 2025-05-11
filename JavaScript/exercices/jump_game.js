// Exercise: Jump Game

// Description: Check if you can reach the last index from the first index in the array.

function canJump(nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > max) return false;
    max = Math.max(max, i + nums[i]);
  }
  return true;
}

// Test the function
console.log(canJump([2,3,1,1,4])); // Output: true
