// Exercise: Class Inheritance

// Description: Create a class Dog that extends Animal and adds bark().

class Animal {
  constructor(name) {
    this.name = name;
  }
}
class Dog extends Animal {
  bark() {
    return `${this.name} says woof!`;
  }
}

// Test the function
const d = new Dog('Rex');
console.log(d.bark()); // Output: 'Rex says woof!'
