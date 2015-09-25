// You can also pull properties as deep as you want, and you could also alias those deep bindings.

var foo = { bar: { deep: 'pony', dangerousSetInnetHtml: 'lol' } }
var {bar: { deep, dangerousSetInnetHtml: sure } } = foo

console.log(deep);
console.log(sure);