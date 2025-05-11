// Exercise: Quick Sort

// Description: Sort an array using quicksort.

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[0];
  const left = arr.slice(1).filter(x => x < pivot);
  const right = arr.slice(1).filter(x => x >= pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Test the function
console.log(quickSort([3,6,1,5]));
