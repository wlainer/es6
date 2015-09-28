// ES5
function concat() {
  return Array.prototype.slice.call(arguments).join(' ')
}

var result = concat('this', 'was', 'no', 'fun')
console.log(result)


// ES6
function concat(...words) {
  return words.join(' ')
}

var result = concat('this', 'is', 'okay')
console.log(result);