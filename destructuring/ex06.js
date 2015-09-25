// You can also define default values, for the case where the pulled property evaluates to undefined.

var {foo=3} = { foo: 2 }
console.log(foo)

var {foo=3} = { foo: undefined }
console.log(foo)

var {foo=3} = { bar: 2 }
console.log(foo)
