// Destructuring

// This is easily one of the features I’ve been using the most. It’s also one of the simplest. It binds properties to as many variables as you need and it works with both Arrays and Objects.

var foo = { bar: 'pony', baz: 3 }
var {bar, baz} = foo

console.log(bar);

console.log(baz);