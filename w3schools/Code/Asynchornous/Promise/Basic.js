// Simple
const myPromise = new Promise((resolve, reject) => {
  const success = false;
  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Operation failed.");
  }
});
myPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

console.log(typeof myPromise); // object
console.log(typeof Promise); // function
console.log(myPromise instanceof Promise); // true

// Async Task
const downloadFile = (url) =>
  new Promise((resolve, reject) => {
    console.log(`Starting download from ${url}...`);
    setTimeout(() => {
      const isSuccess = true;
      if (isSuccess) {
        resolve("File download successfully.");
      } else {
        reject("Failed to download file.");
      }
    }, 3000);
  });

downloadFile("http://example.com/file.zip")
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
console.log("End");

// Chaining Promises
const step1 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1 complete");
      resolve("Data from step 1");
    }, 1000);
  });

const step2 = (data) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = true;
      if (isSuccess) {
        console.log(`Step 2 complete with: ${data}`);
        resolve("Data from step 2");
      } else {
        reject("Error from Step 2");
      }
    }, 1000);
  });

step1()
  .then((result1) => step2(result1))
  .then((result2) => console.log(`All steps complete: ${result2}`))
  .catch((error) => console.log(error))
  .finally(() => console.log("Done. Thanks"));

console.log("End");

const getIPhone = (isPassed) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isPassed) {
        resolve("You have got an I Phone");
      } else {
        reject(new Error("You have failed."));
      }
    }, 3000);
  });
getIPhone(false)
  .then((respose) => console.log(respose))
  .catch((error) => console.log(error.message));
