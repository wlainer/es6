// Another convenient aspect of destructuring is the ability to pull keys using computed property names.

var key = 'such_dynamic'
var { [key]: foo } = { such_dynamic: 'bar'}

console.log(foo);