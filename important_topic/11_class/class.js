// instance property and method
class Person {
  constructor(name, age) {
    this.name = name; // Instance property
    this.age = age;
  }
  greet() {
    console.log(`Hello, I am ${this.name}`);
  }
}
const p1 = new Person("Murad", 30);
console.log(p1.name); // Murad

// static property and method
class MathUtil {
  static square(x) {
    return x * x;
  }
}
console.log(MathUtil.square(5)); // 25
const m = new MathUtil();
// m.square(5); // Error: not an instance method
class Config {
  static defaultLanguage = "en";
}
console.log(Config.defaultLanguage); // en

// getters and setters
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  get area() {
    return this.width * this.height;
  }
  set area(value) {
    // Adjust width and height proportionally based on new area
    this.width = Math.sqrt(value);
    this.height = Math.sqrt(value);
  }
}
const rect = new Rectangle(4, 5);
console.log(rect.area); // 20 (getter)
rect.area = 16; // setter updates width and height
console.log(rect.width); // 4
console.log(rect.height); // 4

// this inside class
class Counter {
  constructor() {
    this.count = 0;
  }
  increment() {
    this.count++;
    console.log(this.count);
  }
}
const c = new Counter();
c.increment(); // 1
c.increment(); // 2

// class fields (public and private)
class User {
  name = "Anonymous"; // public field with default value
  constructor(age) {
    this.age = age;
  }
}
const u = new User(25);
console.log(u.name); // Anonymous
console.log(u.age); // 25

class BankAccount {
  #balance = 0; // private field
  constructor(initialBalance) {
    this.#balance = initialBalance;
  }
  deposit(amount) {
    this.#balance += amount;
  }
  getBalance() {
    return this.#balance;
  }
}
const account = new BankAccount(1000);
console.log(account.getBalance()); // 1000
// console.log(account.#balance);   // SyntaxError: Private field '#balance' must be declared in an enclosing class
