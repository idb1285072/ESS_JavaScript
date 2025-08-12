// falsy values: 0, "", undefined, null, NaN, false
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(false));
console.log(Boolean({})); // true
console.log(Boolean(-100)); // true
console.log(Boolean([])); // true

const money = 0;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job!");
}

let height;
if (height) {
  console.log("Heigth is defined");
} else {
  console.log("Height is undefined");
}

console.log(Boolean(" \t\r\n "));

console.log(" \t\r\n " == 0); // true ?
console.log([] == false); // true ?
console.log([] != []); // true ?
