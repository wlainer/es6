[1, 2, 3].map(n => {number: n })
// [undefined, undefined, undefined]

[1, 2, 3].map(n => {number:n, something: 'else' })
// <- SynaxError

[1, 2, 3].map(n => ({number: n }))
// <- [{number:1}, {number:2}, {number:3}]

[1, 2, 3].map(n => ({number:n, something: 'else' }))
/* <- [
   { number: 1, something: 'else' },
   { number: 2, something: 'else' },
   { number: 3, something: 'else' }
]
*/