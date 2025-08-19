let a = {valueOf: ()=> 10};
let b = {toString: ()=> "20"};
console.log(a + b); // 1020

// Symbol.toPrimitive 
let obj = {
  [Symbol.toPrimitive](hint) {
    if (hint === "number") {
      return 42;
    }
    if (hint === "string") {
      return "hello";
    }
    return "default";
  }
};

console.log(+obj);       // 42   (number context)
console.log(`${obj}`);   // "hello" (string context)
console.log(obj + 10);   // "default10" (default context → string concatenation)
