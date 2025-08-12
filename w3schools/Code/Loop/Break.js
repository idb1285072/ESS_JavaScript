let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    break;
  }
  text += "The number is " + i + "\n";
}
console.log(text);

text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text += "The number is " + i + "\n";
}
console.log(text);

text = "";
const cars = ["BMW", "Volvo", "Saab", "Ford"];
list: {
  text += cars[0] + "\n";
  text += cars[1] + "\n";
  break list;
  text += cars[2] + "\n";
  text += cars[3] + "\n";
}
console.log(text)

/*
label:
statements
-----------------
continue labelName
break labelName
*/
outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      console.log('Breaking out of both loops');
      break outerLoop;
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}

outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) {
      continue outerLoop; // skips rest of i loop iteration
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}
