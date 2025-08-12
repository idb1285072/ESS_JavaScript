# Error Handling

- `throw`: create and throw an error manually
- `try`: wrap code that might throw errors
- `catch`: catch and handle thrown error
- `finally`: run cleanup code regaredless of error or success

Great question! Here’s why **manually throwing errors** with `throw` is useful and often necessary in JavaScript:

---

## Error subclasses

```js
// RangeError
try {
  let num = 1;
  num.toPrecision(500);
} catch (err) {
  console.log(err.name, err.message);
}

// ReferenceError
try {
  let num = 10;
  console.log(number);
} catch (err) {
  console.log(err.name, err.message);
}

// SyntaxError
try {
  eval("12*43'45");
} catch (err) {
  console.log(err.name, err.message);
}

// TypeError
try {
  let num = 1;
  num.toUpperCase();
} catch (err) {
  console.log(err.name, err.message);
}

// URIError
try {
  decodeURI("%%%");
} catch (err) {
  console.log(err.name, err.message);
}
```

---

## Why do we need to manually throw errors?

### 1. **To enforce rules and validate input**

You can use `throw` to signal that some input or condition is invalid and shouldn’t be processed further. This helps catch mistakes early.

Example:

```js
function setAge(age) {
  if (age < 0) {
    throw new Error("Age cannot be negative");
  }
  // continue processing...
}
```

Without throwing, your program might continue with invalid data and cause subtle bugs later.

### 2. **To create clear, custom error messages**

JavaScript built-in errors (like `TypeError` or `ReferenceError`) don’t cover all your app-specific rules.

By throwing your own errors, you can provide meaningful, specific messages that help debugging and user feedback.

Example:

```js
if (!user.isAdmin) {
  throw new Error("Access denied: Admins only");
}
```

### 3. **To stop execution immediately when something goes wrong**

`throw` immediately interrupts the current function execution and bubbles the error up the call stack, forcing error handling.

This prevents the program from continuing in an invalid state.

### 4. **To allow centralized error handling**

### 5. **To improve debugging and maintenance**

---

## Example

```js
function fetchUserData(userId) {
  if (!userId) {
    throw new Error("User ID is required");
  }
  const fakeApiResponse = {
    id: userId,
    name: "Alice",
    age: 30,
    email: "alice@example.com",
  };
  if (fakeApiResponse.age < 0) {
    throw new RangeError("Age cannot be negative");
  }
  return fakeApiResponse;
}

function getUserInfo(userId) {
  try {
    console.log("Starting to fetch user data...");
    const user = fetchUserData(userId);
    console.log("User fetched:", user);
    if (!user.email.includes("@")) {
      throw new Error("Invalid email address");
    }
    console.log("User data is valid!");
    return user;
  } catch (error) {
    console.error("Error occurred:", error.message);
  } finally {
    console.log("Finished fetching user data.");
  }
}

getUserInfo("123"); // Successful case
getUserInfo(""); // Throws error for missing ID
```
