// Exercise: Binary Search

// Description: Perform binary search on sorted array.

function binarySearch(arr, x) {
  let l = 0, r = arr.length - 1;
  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (arr[m] === x) return m;
    x < arr[m] ? r = m - 1 : l = m + 1;
  }
  return -1;
}

// Test the function
console.log(binarySearch([1,2,3,4,5], 3));
