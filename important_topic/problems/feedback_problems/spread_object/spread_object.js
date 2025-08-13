// Spread all from first object and some properties with the second object 
const obj1 = {
  id: 1,
  name: "Object 1",
  role: "admin",
};
const obj2 = {
  id: 2,
  name: "Object 2",
  role: "user",
  status: "active",
  age: 30,
  location: "USA",
};
const obj3 = { ...obj1, ...obj2, status: "inactive" };
console.log(obj3);
const obj4 = { ...obj1, status: obj2.status, location: obj2.location}
console.log(obj4);
