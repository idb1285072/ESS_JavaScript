async function myFunction() {
  return "Hello";
}

myFunction().then(
  (data) => console.log(data),
  (error) => console.log(error)
);

myFunction()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// ?
async function sayHello() {
  return "Hello";
}
sayHello().then(console.log); // Hello

const fetchData = async () => "Hello";
fetchData().then((data) => console.log(data));
fetchData().then(console.log);
console.log(fetchData instanceof Promise)
console.log(fetchData instanceof Function)