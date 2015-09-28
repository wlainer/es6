var developers = [
  { name: 'Joe', age: 23},
  { name: 'Sue', age: 28},
  { name: 'Jon', age: 32},
  { name: 'Bob', age: 24}
], age = 0;

// ES5
age = developers.reduce(function(memo, developer) {
  return memo  + developer.age; // return previous total plus current age
}, 0) // initialize age with 0 that will be passed as memo

// ES6
age = developers.reduce((memo, developer) => {return memo + developer.age}, 0)

console.log("Sum of all developer age is " + age);