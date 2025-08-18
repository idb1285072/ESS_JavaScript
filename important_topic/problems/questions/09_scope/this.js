// const obj = {
//   value: 42,
//   getValue: function () {
//     return () => this.value;
//   },
// };
// const getVal = obj.getValue();
// console.log(getVal());

// ("use strict");
// x = 10;
// console.log(x);

// let obj = {
//   value: 40,
//   arrow: () => this.value,
//   regular: function () {
//     return this.value;
//   },
// };
// let reg = obj.regular;
// let arr = obj.arrow;
// console.log(reg(), arr());

// function Person(name) {
//   this.name = name;
//   this.arrow = () => this.name;
//   this.regular = function() { return this.name; };
// }
// let p = new Person("Alice");
// let reg = p.regular;
// let arr = p.arrow;
// console.log(reg(), arr());



// let obj = {
//   value: 100,
//   print: function() {
//     setTimeout(function() {
//       console.log("Regular:", this.value);
//     }, 50);
//     setTimeout(() => {
//       console.log("Arrow:", this.value);
//     }, 50);
//   }
// };
// obj.print();

/*
global this => window
global regular function => window but undefined in strict mode
global array function => window
object method regular => object
object method arrow => window

*/



let obj = {
  val: 50,
  outer: function() {
    function inner() {
      return this.val;
    }
    return inner();
  }
};
console.log(obj.outer());
