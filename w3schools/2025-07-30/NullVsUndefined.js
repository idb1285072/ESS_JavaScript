// undefined
let userName;
console.log(userName);

const printUserName = (userName) => console.log(userName);
printUserName();

const user = {
  firstName: "Murad",
  lastName: "Hossen",
};
console.log(user.fullName);

const addTwoNumber = (a, b) => {
  let sum = a + b;
};
console.log(addTwoNumber(50, 4));


/**
null -> developer assign intensionally
Resetting Object References
Explicitly clearing data
Placeholder for future assignment 
You want to explicitly clear or mark as empty
*/
console.log(typeof undefined);
console.log(typeof null);
console.log(undefined == null);
console.log(undefined === null);
