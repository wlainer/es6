// Here’s how the syntax looks like if we have a single argument and just want to return the results for an expression.

// ES6
[1, 2, 3].map(num => console.log(num * 2))

// ES5
[1, 2, 3].map(function(num) {return num * 2 })

// If we need to declare more arguments (or no arguments), we’ll have to use parenthesis.
[1, 2, 3, 4].map((num, index) => num * 2 + index)

// You might want to have some other statements and not just an expression to return. In this case you’ll have to use bracket notation.
[1, 2, 3, 4].map(num => {
  var multiplier = 2 + num
  return num * multiplier
})