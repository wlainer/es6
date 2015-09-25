// There are many situations where destructuring comes in handy. Here’s some of the most common ones. Whenever you have a method that returns an object, destructuring makes it much terser to interact with.

function getCoords () {
  return {
    x: 10,
    y: 22
  }
}

var {x, y} = getCoords()

console.log(x);
console.log(y);