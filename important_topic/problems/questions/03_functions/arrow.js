let sum = (a, b) => a + b;
console.log(sum(3, 4));

let nums = [1, 2, 3, 4];
let result = nums.filter((n) => n % 2 === 0);
console.log(result);

let f = () => ({ name: "Alice" });
console.log(f());

let compose = (f, g) => (x) => f(g(x));
let add1 = (x) => x + 1;
let mul2 = (x) => x * 2;
let h = compose(add1, mul2);
console.log(h(3));

let obj = {
  x: 10,
  regular: function () {
    return this.x;
  },
  arrow: () => this.x,
};
console.log(obj.regular(), obj.arrow());


let f1 = () => "A";
let f2 = () => "B";
let arr = [f1, f2];
console.log(arr.map(fn => fn()).join(""));


let numbers = [1, 2, 3, 4];
let output = numbers.filter(n => n % 2).map(n => n * n);
console.log(output);

// ?
let calc = (x, y = x * 2) => x + y;
console.log(calc(5));

let add = (a, b) => a + b;
let apply = (fn, val) => fn(val, val);
console.log(apply(add, 7));
