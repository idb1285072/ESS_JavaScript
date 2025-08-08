// execuit top to bottom
console.log("line 1");
console.log("line 2");
console.log("line 3");

// blocking
const delay = (second) => {
  const start = Date.now();
  while (Date.now() - start < second * 1000) {}
};
console.log("start");
delay(5);
console.log("end");
