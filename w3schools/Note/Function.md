# Function
- function declaration or function expression (anonymous function)
- Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope
- Hoisting applies to variable declarations and to function declarations
- Functions defined using an expression are not hoisted
- Functions defined using a function declaration cannot be self-invoked (anonymous self-invoking function)
- The typeof operator in JavaScript returns "function" for functions. But, JavaScript functions can best be described as objects.
- Arrow functions do not have their own `this`. Instead, they inherit `this` from their surrounding (parent) scope. They are not well suited for defining object methods.
- Arrow functions are not hoisted. They must be defined before they are used.
- In JavaScript all functions are object methods. If a function is not a method of a JavaScript object, it is a function of the global object.
---

## Parameter vs Argument
- Function parameters are the names listed in the function definition.
- Function arguments are the real values passed to (and received by) the function.

---

### **Pass-by-Value vs Pass-by-Reference**

#### **1. Primitives are passed by value**
* The function gets a **copy** of the value.
* Changes do **not affect** the original variable.

```javascript
function updateValue(x) {
  x = 100;
}

let a = 50;
updateValue(a);
console.log(a); //  50 (unchanged)
```

#### **2. Objects are passed by reference (sort of)**
* The reference (memory address) is passed **by value**.
* Modifying object **properties** affects the original object.
* Reassigning the object **itself** does **not** affect the original.

```javascript
function updatePerson(person) {
  person.name = "Updated"; // Affects original
}

const user = { name: "John" };
updatePerson(user);
console.log(user.name); // "Updated"
```



#### **Important Distinction: Reassignment doesn't affect original**

```javascript
function replacePerson(person) {
  person = { name: "New" }; //  No effect outside
}

replacePerson(user);
console.log(user.name); //  "Updated" (not "New")
```


#### Summary

| Data Type | Passed by            | Can modify original?    |
| --------- | -------------------- | ----------------------- |
| Primitive | Value                |  No                    |
| Object    | Reference (by value) |  Yes (properties only) |

---



## Arrow Function

#### **Use Arrow Functions When:**

|  Use Case                                             |  Why Arrow is Ideal                  |
| ------------------------------------------------------ | -------------------------------------- |
| **Short, inline callbacks**                            | Cleaner syntax, less noise             |
| **Array methods** (`map`, `filter`, etc.)              | No need for a separate `this` binding  |
| **Functional utilities**                               | Promotes immutability & pure functions |
| **Closures / Lexical Scoping**                         | Inherits `this`, `arguments`, `super`  |
| **No need for `this`, `arguments`, `super`, or `new`** | Safer and more predictable             |



### Examples

```javascript
// Array methods
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);

// Callbacks
setTimeout(() => console.log("Done!"), 1000);

// Functional utility
const add = (a, b) => a + b;
```



####  Avoid Arrow Functions When:

|  Situation                     |  Reason                                          |
| ------------------------------- | -------------------------------------------------- |
| **Object methods**              | Arrow `this` does NOT refer to the object          |
| **Constructor functions**       | Arrow functions cannot be constructors             |
| **When you need `arguments`**   | Arrow functions do **not** have `arguments` object |
| **Dynamic `this` is important** | Like in event handlers, class methods, etc.        |



```javascript
const user = {
  name: "Alice",
  greet: () => {
    console.log(`Hi, I'm ${this.name}`); //  this is NOT `user`
  }
};
```

 Use regular function if you need access to the object:

```javascript
greet() {
  console.log(`Hi, I'm ${this.name}`); //  works as expected
}
```
