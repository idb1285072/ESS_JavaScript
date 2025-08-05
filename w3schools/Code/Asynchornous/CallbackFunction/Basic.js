const greet = (userName, callBack) => {
  console.log(`Hello, ${userName}!`);
  callBack();
};
greet("Murad", () => console.log("Goodbye!"));

// Asyncronous
console.log("Start");
setTimeout(() => {
  console.log(`This runs after 5 seconds`);
}, 5000);
console.log("End");

// Syncronous
function sleepSync(milliseconds) {
  const start = Date.now();
  while (Date.now() - start < milliseconds) {
    // just looping...
  }
}
console.log("Before delay");
sleepSync(3000); // blocks for 3 seconds
console.log("After delay");

// Syncronous Callback
const setTimeoutSync = (callBack, milliseconds) => {
  const start = Date.now();
  while (Date.now() - start < milliseconds) {
    // just looping...
  }
  callBack();
};
console.log("Start");
setTimeoutSync(() => {
  console.log("This runs after 5 seconds");
}, 5000);
console.log("End");

// Asyncronous Callback function
const downloadFile = (url, callBack) => {
  console.log(`Downloading file from ${url} ...`);
  setTimeout(() => {
    console.log("Download completed!");
    callBack();
  }, 5000);
};
const processFile = () => {
  console.log("Processing downloaded file...");
};
downloadFile("http://example.com/file.txt", processFile);

// Callback parameter
const addTwoNumbers = (num1, num2, callBack) => {
  let result = num1 + num2;
  callBack(result);
};
addTwoNumbers(10, 20, (sum) => console.log(sum));

/*
Write a function called doHomework(subject, callback) that logs "Starting my [subject] homework...", then runs a callback that says "Finished my homework!".
*/

const doHomework = (subject, callBack) => {
  console.log(`Starting my ${subject} homework...`);
  setTimeout(callBack, 3000);
};
doHomework("Math", () => console.log("Finished my homework!"));
// const finishedDisplay = () => console.log("Finished my homework!");
// doHomework("Math", finishedDisplay);
