const scores = [40, 55, 78, 91];
const hasPassed = scores.some(score => score >= 50);
console.log(hasPassed); // true

const users = [
  { id: 1, role: 'user' },
  { id: 2, role: 'admin' },
  { id: 3, role: 'user' },
];
const isAdminPresent = users.some(user => user.role === 'admin');
console.log(isAdminPresent); // true

const tasks = [
  { name: 'Design', status: 'done' },
  { name: 'Dev', status: 'pending' },
  { name: 'Test', status: 'done' },
];
const hasPending = tasks.some(task => task.status === 'pending');
console.log(hasPending); // true
