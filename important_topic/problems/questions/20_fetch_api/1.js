fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => console.log(data.id));

fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) =>
  console.log(response.status)
);

async function getData() {
  let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let data = await res.json();
  console.log(data.title);
}
getData();

fetch("https://jsonplaceholder.typicode.com/invalid-url")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log("Error:", err));

async function fetchData() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await res.json();
    console.log(data.userId);
  } catch (err) {
    console.log("Fetch failed");
  }
}
fetchData();

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => res.text())
  .then(console.log);

async function getData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log(response.ok, response.status);
  if (response.ok && response.status) {
    let data = await response.json();
    console.log(data);
  }
}
getData();

async function fetchData() {
  let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let data = await res.json();
  return data.id;
}
fetchData().then(console.log);

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => res.json())
  .then((data) => data.id)
  .then((id) => console.log("ID is", id));

async function fetchMultiple() {
  let urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
  ];
  let results = await Promise.all(
    urls.map((url) => fetch(url).then((r) => r.json()))
  );
  console.log(results.map((d) => d.title));
}
fetchMultiple();
