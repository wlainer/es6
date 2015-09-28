// ES5
function Car() {
  this.fuel = 0;
  this.distance = 0;
}

Car.prototype.move = function () {
  if (this.fuel < 1){
    throw new RangeError('Fuel tank is depleted');
  }
  this.fuel--
  this.distance += 2
}

Car.prototype.addFuel = function () {
  if (this.fuel >= 60) {
    throw new RangeError('Fuel tank is full');
  }
  this.fuel++
}

var car = new Car()
car.addFuel()
car.move()
car.move()


// ES6
// class Car {
//   constructor() {
//     this.fuel = 0
//     this.distance = 0
//   }

//   move() {
//     if (this.fuel < 1) {
//       throw new RangeError('Fuel tank is depleted')
//     }
//     this.fuel--
//     this.distance += 2
//   }

//   addFuel() {
//     if (this.fuel >= 60) {
//       throw new RangeError('Fuel tank is full')
//     }
//     this.fuel ++
//   }
// }


// var car = new Car()
// car.addFuel()
// car.move()
// car.move()