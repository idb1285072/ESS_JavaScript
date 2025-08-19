let x = {a:1};
let y = x;
y.a = 5;
console.log(x.a); // 5
console.log(x===y); // true