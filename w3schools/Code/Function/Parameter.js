// Default Parameter
function sendEmail(to, subject = "No Subject", body = "No content provided") {
  console.log(`Sending email to: ${to}`);
  console.log(`Subject: ${subject}`);
  console.log(`Body: ${body}`);
}
sendEmail("user@example.com");
console.log();
sendEmail("user@example.com", "Welcome!", "Thanks for signing up.");

// rest parameter
function logActivity(user, ...activities) {
  console.log(`User: ${user}`);

  if (activities.length === 0) {
    console.log("No activities logged.");
    return;
  }

  console.log("Activities:");
  for (const activity of activities) {
    console.log(`- ${activity}`);
  }
}
logActivity("Alice", "Login", "Viewed Dashboard", "Logged Out");
console.log();
logActivity("Bob");

// Arguments Object
function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
console.log(findMax(1, 123, 500, 115, 44, 88));
console.log(findMax(1, 123, 50));
