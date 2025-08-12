const employees = [
  { name: "Alice", department: "HR" },
  { name: "Bob", department: "IT" },
  { name: "Charlie", department: "HR" },
];

const formattedEmployees = employees.reduce((format, employee) => {
  if (!Object.keys(format).includes(employee.department))
    format[employee.department] = [employee.name];
  else format[employee.department].push(employee.name);
  return format;
}, {});

console.log(formattedEmployees);
