// You can also use destructuring in a function‘s parameter list.

function greet ({ age, name:greeting='she' }) {
  console.log(`${greeting} is ${age} years old`);
}

greet({ name: 'nico', age: 27 })
greet({ age: 24 })