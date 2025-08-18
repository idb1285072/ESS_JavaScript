function mystery(a, b) {
  return arguments.length;
}
console.log(mystery(1, 2, 3));

function foo(a, b, ...rest) {
  return rest.length;
}
console.log(foo(1, 2, 3, 4, 5));

(function(x) {
  return (function(y) {
    // console.log(x+y);
    return x + y;
  })(2);
})(3);
