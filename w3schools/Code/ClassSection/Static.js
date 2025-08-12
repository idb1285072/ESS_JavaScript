// static methods belong to the class, not instances.
// You cannot call a static method on an object.
// To access instance data, pass the object as an argument.

class Car {
  constructor(brand) {
    this.brand = brand;
  }

  static compare(carA, carB) {
    return carA.brand === carB.brand;
  }
}

const car1 = new Car("Toyota");
const car2 = new Car("Honda");
const car3 = new Car("Toyota");

console.log(Car.compare(car1, car2)); // false
console.log(Car.compare(car1, car3)); // true
