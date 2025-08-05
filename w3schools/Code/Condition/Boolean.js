console.log(Boolean(3==3))
console.log(Boolean(-10))
console.log(Boolean(" "))
console.log(Boolean("false"))

// false 
console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(NaN))
console.log(Boolean(false))

let x;
console.log(Boolean(x)) // x is undefined

let booleanValue1 = false;
let booleanValue2 = new Boolean(false);
console.log(typeof booleanValue1)
console.log(typeof booleanValue2)