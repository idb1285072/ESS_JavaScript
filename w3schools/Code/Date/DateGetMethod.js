const date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay()); // weekday - sunday(0)
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.getTime()); // time in milliseconds
console.log(Date.now()); // time in milliseconds

console.log(date.getUTCFullYear());
console.log(date.getUTCMonth());
console.log(date.getUTCDate());
console.log(date.getUTCDay());
console.log(date.getUTCHours());
console.log(date.getUTCMinutes());
console.log(date.getUTCSeconds());
console.log(date.getUTCMilliseconds());
// UTC (Coordinated Universal Time) => GMT (Greenwich Mean Time)

console.log(date.getTimezoneOffset()); // difference (in minutes) between local time and UTC time
