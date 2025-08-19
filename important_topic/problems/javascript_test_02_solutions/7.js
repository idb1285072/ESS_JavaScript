let obj = {a:1};
Object.defineProperty(obj, 'b', {value:2, enumerable: false});
console.log(Object.keys(obj)); // ["a"]