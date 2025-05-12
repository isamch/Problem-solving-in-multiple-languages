// Exercise: Sort by Age

// Description: Sort an array of objects by the 'age' property ascending.

function sortByAge(users) {
  return users.sort((a, b) => a.age - b.age);
}

// Test the function
console.log(sortByAge([{ name: 'Ali', age: 30 }, { name: 'Sara', age: 25 }])); // Output: [{name: 'Sara',...}, {name: 'Ali',...}]
