// RangeError
try {
  let num = 1;
  num.toPrecision(500);
} catch (err) {
  console.log(err.name, err.message);
}

// ReferenceError
try {
  let num = 10;
  console.log(number);
} catch (err) {
  console.log(err.name, err.message);
}

// SyntaxError
try {
  eval("12*43'45");
} catch (err) {
  console.log(err.name, err.message);
}

// TypeError
try {
  let num = 1;
  num.toUpperCase();
} catch (err) {
  console.log(err.name, err.message);
}

// URIError
try {
  decodeURI("%%%");
} catch (err) {
  console.log(err.name, err.message);
}
