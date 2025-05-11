// Exercise: Chunk Array

// Description: Split array into chunks of specified size.

function chunkArray(arr, size) {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

// Test the function
console.log(chunkArray([1, 2, 3, 4, 5], 2)); // Output: [[1,2],[3,4],[5]]
