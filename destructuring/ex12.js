function random({ min=1, max=300 }) {
  return Math.floor(Math.random() * (max - min)) + min
}

console.log(random({}));

console.log(random({max: 24}));