// function foo() {
//   console.log(x);
// }
// let x = 10;
// foo();

// let x = 1;
// function test() {
//   console.log(x);
//   let x = 2;
// }
// try {
//   test();
// } catch(e) {
//   console.log("Error:", e.message);
// }

// var x = 100;
// function a() {
//   var x = 200;
//   function b() {
//     console.log(x);
//   }
//   return b;
// }
// let fn = a();
// fn();

let count = 0;
function increment() {
  count++;
  return function() {
    count++;
    return count;
  };
}
let inc1 = increment();
console.log(inc1());
console.log(inc1());

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
