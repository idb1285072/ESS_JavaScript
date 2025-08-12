console.log(Math.random())
console.log(Math.floor(Math.random()*10)) // 0 to 9

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
console.log(getRndInteger(30, 50)); // 30 to 50