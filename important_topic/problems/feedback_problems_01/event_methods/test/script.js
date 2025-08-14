const inner = document.getElementById("inner");
const outer = document.getElementById("outer");
const btn = document.getElementById("btn");

// outer.addEventListener("click", (event) => {
//   console.log(event.currentTarget.id);
// });
// inner.addEventListener("click", (event) => {
//   console.log(event.currentTarget.id);
// }, {capture: true});

btn.addEventListener("click", (event) => {
  console.log("Thanks");
});
btn.addEventListener("click", (event) => {
  console.log("Ok");
});

const menu = document.getElementById("menu");
menu.addEventListener("click", (event) => {
  console.log(event.target.innerText);
});