/* 
If the object before ?. is null or undefined, the whole expression short-circuits and returns undefined instead of throwing an error.
*/
"use strict";

const user = {
  profile: {
    name: "Murad",
  },
};
console.log(user.profile?.name); // Murad
console.log(user.address?.city); // undefined


const logger = {
  info: () => console.log("Info log")
};
logger.info?.();        // Info log
logger.debug?.();       // Safe – does nothing

const arr = [10, 20, 30];

console.log(arr?.[1]);  // 20
console.log(arr?.[5]);  // undefined

const obj = null;
console.log(obj?.['someKey']); // undefined
