// setTimeout()

// setInterval
console.log("Start");
setInterval(() => {
  const date = new Date();
  console.clear();
  console.log(
    `\x1b[31m ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  );
  // console.log(
  //   `%c${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
  //   "color: red; font-weight: bold;"
  // );
}, 1000);

console.log("End");
// console.log("%c GeeksforGeeks", "color:green;");
