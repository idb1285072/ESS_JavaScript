console.log(!!"false" == !!"true"); // true
console.log("false" == true); // false

// NaN == 1 -> false
/*
Rules of loose equality (==):
if type same -> compare directly
null == undefined -> true
one is boolean -> convert to number
if one is string and other is number -> convert to number
object to primitive -> Symbol.toPrimitive or valueOf or toString
*/