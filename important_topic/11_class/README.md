# Class in JavaScript

## Why Class?

- Cleaner & More Readable Syntax for OOP
- Improved Maintainability & Scalability
- Syntactic Sugar Over Prototypes

Without class (prototype)

```js
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, ${this.name}`);
};
```

With class

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, ${this.name}`);
  }
}
```

Classes make JavaScript OOP easier, cleaner, and more maintainable while still leveraging prototypes under the hood.

## Syntax


### Class Declaration

The most common way to define a class:

```js
class Person {
  // class body
}
```

- `Person` is the class name.
- Class declarations are **not hoisted**, so you must declare before use.

### Class Expression

Classes can also be defined as expressions and assigned to variables:

```js
const Animal = class {
  // class body
};

const Dog = class DogName {
  // Named class expression (DogName only visible inside class)
};
```

---

## Constructor Method and Initialization

- The `constructor` method runs **automatically** when creating a new instance via `new`.
- It is used to **initialize instance properties**.

```js
class Person {
  constructor(name, age) {
    this.name = name; // Instance property
    this.age = age;
  }
}

const p1 = new Person("Alice", 30);
console.log(p1.name); // Alice
```

- Only **one constructor per class** is allowed.
- If omitted, a default empty constructor exists.

---

## Instance Methods

- Methods declared inside the class **without `function` keyword** become **instance methods**.
- They are shared on the class prototype, so memory-efficient.

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, I am ${this.name}`);
  }
}

const p = new Person("Bob");
p.greet(); // Hello, I am Bob
```

- Instance methods can access instance properties via `this`.

---

## Static Methods and Properties

- `static` keyword defines methods or properties on the **class itself**, not instances.
- Useful for utility functions or constants related to the class.

```js
class MathUtil {
  static square(x) {
    return x * x;
  }
}

console.log(MathUtil.square(5)); // 25

const m = new MathUtil();
// m.square(5); // Error: not an instance method
```

- Static properties are supported natively in newer JS:

```js
class Config {
  static defaultLanguage = "en";
}

console.log(Config.defaultLanguage); // en
```

---

## Getters and Setters

- Use `get` and `set` keywords to create **computed properties** or **property accessors**.

```js
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
```

- They make class instances feel more like objects with dynamic properties.

---

## Using `this` Inside Classes

- `this` refers to the **current instance** of the class.
- Inside constructor, methods, getters, setters, `this` allows you to access instance properties or other methods.

```js
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
```

- **Important:** Be careful with `this` inside callbacks — it might lose context (use arrow functions or `.bind()` to fix).

---

## Class Fields (Public and Private)

### Public Fields

- Declared directly inside the class body (not inside constructor).
- Supported in modern JS.

```js
class User {
  name = "Anonymous"; // public field with default value

  constructor(age) {
    this.age = age;
  }
}

const u = new User(25);
console.log(u.name); // Anonymous
console.log(u.age); // 25
```

### Private Fields (`#`)

- Private fields are prefixed with `#` and **cannot be accessed outside the class**.
- Provides true data encapsulation.

```js
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
```

- Private fields can only be accessed inside the class body.