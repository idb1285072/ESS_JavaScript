// Syntax Error
try {
  eval("var a = ");
} catch (e) {
  console.error("Syntax Error:", e.message);
}

// Reference Error
try {
  console.log(nonExistentVariable);
} catch (e) {
  console.error("Reference Error:", e.message);
}

// Type Error
try {
  null.f();
} catch (e) {
  console.error("Type Error:", e.message);
}

// Range Error
try {
  let arr = new Array(-1);
} catch (e) {
  console.error("Range Error:", e.message);
}

// URI Error
try {
  decodeURIComponent("%");
} catch (e) {
  console.error("URI Error:", e.message);
}
// Eval Error
try {
  eval("var a = 1; var a = 2;");
} catch (e) {
  console.error("Eval Error:", e.message);
}
// Aggregate Error
try {
  throw new AggregateError(
    [new Error("First error"), new Error("Second error")],
    "Multiple errors occurred"
  );
} catch (e) {
  console.error("Aggregate Error:", e.message);
  e.errors.forEach((err, index) => {
    console.error(`Error ${index + 1}:`, err.message);
  });
}
