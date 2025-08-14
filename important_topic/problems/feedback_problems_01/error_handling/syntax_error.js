if(true{
  console.log("Hello, World!");
}

let x = 10, 20;

function sum(a, b,) { return a + b; } // SyntaxError in old environments

class Person {
  constructor(name) { this.name = name; }
  constructor(age) { this.age = age; } // SyntaxError: A class may only have one constructor
}

let {a, a} = {a: 1, b: 2}; // SyntaxError: Identifier 'a' has already been declared
