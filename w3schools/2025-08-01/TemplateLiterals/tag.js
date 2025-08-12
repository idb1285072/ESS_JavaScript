function tag(strings, ...values) {
  console.log(strings); // Array of string literals
  console.log(values); // Array of interpolated values
  return "Processed output";
}
const name = "Murad";
const result = tag`Hello ${name}, today is ${new Date().toDateString()}.`;
console.log(result);

function safeSQL(strings, ...values) {
  return {
    query: strings.join("?"),
    params: values,
  };
}
const userId = 123;
const sql = safeSQL`SELECT * FROM users WHERE id = ${userId}`;
console.log(sql);

