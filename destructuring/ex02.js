// It makes it very quick to pull out a specific property from an object. You’re also allowed to map properties into aliases as well.

var foo = { bar: 'pony', baz: 3 }
var {bar: a, baz: b} = foo


console.log(a);

console.log(b);