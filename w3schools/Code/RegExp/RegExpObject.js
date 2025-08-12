console.log(/e/.test("The best things in life are free!")); // true
console.log(/e/.exec("The best things in life are free!")); // ['e', index: 2, input: 'The best things in life are free!', groups: undefined] or null

const safe = RegExp.escape("[*]");
const regex = new RegExp(safe);
const oldText = "[*] is a web school.";
const newText = oldText.match(regex, "W3Schools");
console.log(newText)
