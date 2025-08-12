/* 
a ?? b
  Return a if a is not null or undefined
  Return b(fallback) if a is null or undefined
*/

const count = 0; // 0, '', false, NaN
const result1 = count || 10; // 10
const result2 = count ?? 10; // 0
console.log(result1, result2);

// Usage Case
// Fallback default value
const name = null;
const displayName = name ?? "Guest";
console.log(displayName);

// Safe function parameter defaults
const greet = (userName) => {
  const name = userName ?? "Anonymous";
  console.log(`Hello, ${name}`);
};

greet(null);
greet("Murad");
