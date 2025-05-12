// Exercise: Group by Property

// Description: Group an array of objects by a given property.

function groupBy(arr, key) {
  return arr.reduce((acc, obj) => {
    const group = obj[key];
    if (!acc[group]) acc[group] = [];
    acc[group].push(obj);
    return acc;
  }, {});
}

// Test the function
console.log(groupBy([{ type: 'fruit', name: 'apple' }, { type: 'vegetable', name: 'carrot' }, { type: 'fruit', name: 'banana' }], 'type'));
// Output: { fruit: [...], vegetable: [...] }
