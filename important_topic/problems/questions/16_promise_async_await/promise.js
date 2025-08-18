Promise.allSettled([Promise.resolve("Yes"), Promise.reject("No")]).then(
  (results) => console.log(results)
);

let p = new Promise((res, rej) => {
  res("One");
  rej("Two");
});
p.then(console.log).catch(console.log);

Promise.resolve(1)
  .then((x) => x + 1)
  .then((x) => Promise.resolve(x + 1))
  .then(console.log);

Promise.resolve("Start")
  .then((v) => {
    console.log(v);
    return "Next";
  })
  .then((v) => {
    console.log(v);
  });

new Promise((res, rej) => {
  setTimeout(() => res("Done"), 0);
}).then(console.log);
console.log("After promise");

async function foo() {
  return "Hello";
}
foo().then(console.log);

async function bar() {
  throw "Error!";
}
bar().catch(console.log);

Promise.resolve().then(() => console.log("then"));
console.log("sync");

setTimeout(() => console.log("timeout"), 0);
Promise.resolve().then(() => console.log("promise"));
console.log("sync");

async function foo() {
  return 42;
}
foo().then(console.log);

async function foo() {
  return Promise.resolve("Hello");
}
foo().then(console.log);

async function foo() {
  throw new Error("Boom");
}
foo().catch((e) => console.log(e.message));

async function foo() {
  try {
    await Promise.reject("Fail");
  } catch (e) {
    return "Caught " + e;
  }
}
foo().then(console.log);

async function foo() {
  let p1 = Promise.resolve(10);
  let p2 = Promise.resolve(20);
  return (await p1) + (await p2);
}
foo().then(console.log);

async function foo() {
  let p1 = Promise.resolve(1);
  let p2 = Promise.resolve(2);
  return Promise.all([p1, p2]);
}
foo().then(console.log);

Promise.resolve("A")
  .then((v) => {
    console.log(v);
    return "B";
  })
  .finally(() => console.log("Finally"))
  .then(console.log);

Promise.reject("X")
  .finally(() => console.log("Cleanup"))
  .catch(console.log);

async function foo() {
  return await 53;
}
async function bar() {
  return 5;
}
foo().then(console.log);
bar().then(console.log);

async function foo() {
  let p = new Promise((res) => setTimeout(() => res("Done"), 50));
  console.log("Before await");
  console.log(await p);
  console.log("After await");
}
foo();

async function foo() {
  return await new Promise((res) => res("X"));
}
foo().then(console.log);

Promise.all([Promise.resolve(1), Promise.reject("Oops"), Promise.resolve(3)])
  .then(console.log)
  .catch(console.log);

Promise.race([
  new Promise((res) => setTimeout(() => res("One"), 30)),
  new Promise((res) => setTimeout(() => res("Two"), 10)),
]).then(console.log);

Promise.any([
  Promise.reject("Fail1"),
  Promise.reject("Fail2"),
  Promise.reject("Fail3"),
]).catch((e) => console.log(e.errors));

async function foo() {
  return "A";
}
async function bar() {
  return await foo();
}
bar().then(console.log);

async function foo() {
  console.log(1);
  await Promise.resolve();
  console.log(2);
}
console.log(0);
foo();
console.log(3);

async function foo() {
  let p = new Promise((res) => setTimeout(() => res("X"), 50));
  console.log(await p);
}
foo();

async function foo() {
  let p1 = Promise.resolve(1);
  let p2 = Promise.resolve(2);
  return p1 + p2;
}
foo().then(console.log);

async function foo() {
  let res = await Promise.all([Promise.resolve(1), Promise.resolve(2)]);
  console.log(res);
}
foo();

async function foo() {
  let res = await Promise.race([
    new Promise(r => setTimeout(() => r("First"), 50)),
    new Promise(r => setTimeout(() => r("Second"), 10))
  ]);
  console.log(res);
}
foo();
