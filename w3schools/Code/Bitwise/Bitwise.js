// Decimal to Binary
const decimalToBinary = (num) => (num >>> 0).toString(2);
console.log(decimalToBinary(10))
console.log(decimalToBinary(-10))
console.log(decimalToBinary(-8))

// Binary to Decimal
const binaryToDecimal = (num) => parseInt(num, 2)<<0;
console.log(binaryToDecimal("11111111111111111111111111111000"))