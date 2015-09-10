// // sample 1
// var foo = { bar: 'pony', baz: 3 }
// var {bar, baz} = foo

// console.log(bar)
// console.log(baz)

// //sample 2
// var foo = {bar:'pony', baz:3}
// var {bar:a, baz:b} = foo

// console.log(a)
// console.log(b)

// // sample 3
// var foo = {bar: {deep: 'pony', dangerouslySetInInnerHtml: 'lol'}}
// var {bar: {deep, dangerouslySetInInnerHtml: sure}} = foo

// console.log(deep)
// console.log(sure)

// // sample4
// function es5() {
//   var left = 10
//   var right = 20
//   var aux
//   if (right > left) {
//     aux = right
//     right = left
//     left = aux
//   }
//   console.log(left)
//   console.log(right)
// }

// es5()

// function es6() {
//   var left = 10
//   var right = 20
//   if (right > left) {
//     [left, right] = [right, left]
//   }
//   console.log(left)
//   console.log(right)
// }

// es6()

// //sample5
// var key = 'such_dynamic'
// var { [key] : foo } = {such_dynamic: 'bar'}
// console.log(foo)

// function greet ({age, name:greeting='she'}) {
//   console.log(`${greeting} is ${age} years old`)
// }

// greet({name:'nico', age: 27})

// let[previous, current, result] = [0,1]

// console.log(previous)
// console.log(current)
// console.log(result)

// let myObj = {
//   foo: 'foo',
//   bar: 'bar'
// }

// let {foo, bar} = myObj
// console.log(foo)
// console.log(bar)