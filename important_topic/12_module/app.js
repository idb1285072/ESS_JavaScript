import z, { PI, c } from "./modules/math.js";
import * as math from "./modules/math.js";
import * as user from "./modules/user.js";

console.log(PI);
console.log(c);
console.log(math.PI);
console.log(z);
console.log(user);
console.log(user.default);
console.log(user.fullName(user.firstName, user.lastName));

/*
Module - small file
  export default - only one, any name
  export name - more, must same name
*/