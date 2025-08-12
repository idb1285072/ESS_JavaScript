console.log(typeof true + false); // booleanfalse
console.log(typeof class MyClass {}); // function

let a = 10;
function test() {
  // console.log(a);
  let a = 5;
}
test();

// function length property
function foo(a, b, c) {}
const arrow = (x, y) => {};
console.log(foo.length, arrow.length);
console.log(foo.name);

function repeat(msg, count = 1) {
  console.log(msg);
  if (count < 3) repeat(msg, count + 1);
}
repeat("Hi");

const result = [1, 2, 3].map(
  function (n) {
    return n * this.multiplier;
  },
  { multiplier: 3 }
);
console.log(result);

function Person() {
  this.age = 0;

  setInterval(function() {
    this.age++;
    console.log(this.age);
  }, 1000);
}
new Person();

// lexical scope and closure
// function outer() {
//   let x = 5;
//   function inner() {
//     console.log(typeof x); // "number"
//   }
//   inner();
// }
// outer();

function outer(callback){
  let x = 5;
  callback();
}
outer(function inner(){
  console.log(typeof x); // undefined
})


x = 10;
console.log(global.x)


// arrow function and this
function Timer() {
  this.seconds = 0;
  setInterval(() => {
    this.seconds++; // ✅ Works fine
  }, 1000);
}

const person = {
  name: "Alice",
  greet: () => {
    console.log(`Hello, my name is ${this.name}`);
  }
};
person.greet(); // ❌ Undefined or unexpected output

