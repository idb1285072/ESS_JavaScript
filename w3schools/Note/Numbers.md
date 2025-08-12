# Numbers in JavaScript
JavaScript Numbers are Always 64-bit Floating Point.
- Value/Fraction(mantissa) 52 bits
- Exponent 11 bits
- Sign 1 bit

Integers (numbers without a period or exponent notation) are accurate up to 15 digits. But how to 
- Fraction(mantissa) 52 bits + Implicit leading 1 bit = 53 bits
- Up to $9007199254740991$ or $+(2^{53}-1)$
- Down to $-9007199254740991$ or $-(2^{53}-1)$