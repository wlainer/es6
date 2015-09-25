// Here, again, we can use the default values and follow the same rules.

var [a] = []
console.log(a);

var [b=10] = [undefined]
console.log(b);

var [c=10] = []
console.log(c);