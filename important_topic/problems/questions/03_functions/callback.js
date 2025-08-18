function process(num, callback) {
  return callback(num);
}
console.log(
  process(5, function (n) {
    return n * n;
  })
);

function multiply(a, b, cb) {
  return cb(a * b);
}
console.log(multiply(2, 3, (x) => x + 10));

function executor(cb) {
  return cb("Hi");
}
console.log(
  executor(function (msg) {
    return msg + " there";
  })
);

function compute(a, b, callback) {
  return callback(a, b);
}
console.log(compute(10, 5, (x, y) => x - y));

function doSomething(x, cb1, cb2) {
  return cb2(cb1(x));
}
console.log(doSomething(4, n => n + 2, m => m * 3));


function async(cb) {
  setTimeout(() => cb("Hello"), 100);
}
async(msg => console.log(msg + " World"));

function delayed(x, cb) {
  setTimeout(() => cb(x * 2), 50);
}
delayed(5, result => console.log(result + 1));

function compute(x, cb) {
  return cb(x) + cb(x);
}
console.log(compute(3, n => n + 2));

function tricky(a, cb) {
  return cb(() => a * 2);
}
console.log(tricky(5, fn => fn() + 1));
