// Higher Order Function with Callback
const performTask = (taskName, callBack) => {
  console.log(`Starting task: ${taskName}`);
  callBack();
  console.log(`Finished task: ${taskName}`);
};

const logTime = () =>
  console.log(`Timestamp: ${new Date().toLocaleDateString()}`);

performTask("Database Backup", logTime);

// Asynchronous API call with Callback
const fetchUserData = (userId, callBack) => {
  console.log(`Fetching data for user ID: ${userId}`);
  setTimeout(() => {
    const data = { id: userId, name: "Murad Hossen", age: 28 };
    console.log("Data fetched successfully");
    callBack(data);
  }, 3000);
};

const handleUserData = (user) => {
  console.log(`User Name: ${user.name}, Age: ${user.age}`);
};
fetchUserData(20, handleUserData);

// Array Methods using callback function
const scores = [85, 97, 86, 84, 33, 75];
const passingScores = scores.filter((score) => score >= 70);
console.log(`Passing scores: ${passingScores}`);
const adjustedScores = scores.map((score) => {
  if (score + 5 > 100) return 100;
  return score + 5;
});
console.log(`Adjusted scores: ${adjustedScores}`);

// event listener with Callback
// document.getElementById("button").addEventListener("click", function () {
//   console.log("Button Clicked!");
// });

// Middleware-like pattern
const validate = (data, onSuccess, onError) => {
  if (data.isValid) {
    onSuccess("Validation passed");
  } else {
    onError("Validation failed");
  }
};
const input = { isValid: true };
validate(
  input,
  (message) => console.log(`Success: ${message}`),
  (error) => console.log(`Error: ${error}`)
);

// AJAX
const getRequest = (url, callBack) => {
  const xhr = new XMLHttpRequest();
  xhr.open("get", url);
  xhr.onreadystatechange = (e) => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let respose = JSON.parse(xhr.response);
        callBack(null, respose);
      }
    }
  };
  xhr.send();
};
const BASE_URL = 'https://jsonplaceholder.typicode.com'
getRequest(`${BASE_URL}/posts/1`, (err, res)=>{
  if(err){
    throw new Error("Error occurred")
  }
})
