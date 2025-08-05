const user = {
  firstName: "Murad",
  lastName: "Hossen",
  age: 28,
  family: ["Raja", "Rahim"],
};

// shallow copy
const userCopy = { ...user };
userCopy.lastName = "Khan";
userCopy.family.push("Billah");
userCopy.family.push("Helal");

console.log(`Before: ${user.family}`);
console.log(`After: ${userCopy.family}`);

// deep copy
const userClone = structuredClone(user);
userClone.lastName = "Khan";
userClone.family.push("Billah");
userClone.family.push("Helal");

console.log(`Before: ${user.family}`);
console.log(`After: ${userClone.family}`);

/**
A shallow copy creates a new object or array, but it only copies the references of nested objects—not the actual nested values themselves. 
*/