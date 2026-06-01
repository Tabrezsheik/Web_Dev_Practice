const person = {
  name: 'John',
  age: 30,
  greet: function() {
    console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old`);
  }
};

person.greet();