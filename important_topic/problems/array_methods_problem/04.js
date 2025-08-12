const users = [
  {id: 1, name: "Name1"},
  {id: 2, name: "Name2"},
  {id: 1, name: "Name3"},
  {id: 4, name: "Name4"},
  {id: 1, name: "Name1"}
];
// console.log([...new Set(numbers)]);

const removeDuplicate = users.reduce((acc, user) => {
  console.log(acc.find(u=>u.id==user.id))
  if (!acc.some(u=>u.id==user.id)) acc.push(user);
  return acc;
}, []);
console.log(removeDuplicate);
// console.log(users.find(user=>user.id==1))