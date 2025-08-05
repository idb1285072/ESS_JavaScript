// Validate all form fields are filled
const fields = [
  { name: 'email', value: 'user@example.com' },
  { name: 'password', value: 'secure123' },
];
const allFilled = fields.every(field => field.value.trim() !== '');
console.log(allFilled); // true

// Validate all products are in stock
const products = [
  { name: 'Mouse', inStock: true },
  { name: 'Keyboard', inStock: true },
  { name: 'Monitor', inStock: false },
];
const canShip = products.every(p => p.inStock);
console.log(canShip); // false

// Role Based Access Control - Check User Permissions
const required = ['read', 'write', 'delete'];
const userPermissions = ['read', 'write', 'delete', 'export'];
const hasAllPermissions = required.every(p => userPermissions.includes(p));
console.log(hasAllPermissions); // true

