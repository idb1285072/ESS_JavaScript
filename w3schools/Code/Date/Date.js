const d1 = new Date()
const d2 = new Date("October 13, 2014 11:13:00");
const d3 = new Date("2022-03-25");
const d4 = new Date(2018, 11, 24, 10, 33, 30, 0);
const d5 = new Date(2018, 15, 24, 10, 33, 30);
const d6 = new Date(2018, 11); // year, month
const d7 = new Date(2018); // not year. It's milliseconds
const d8 = new Date(99, 11, 24) // 1999
const d9 = new Date(9, 11, 24) // 1909
const d10 = new Date(24 * 60 * 60 * 1000); // January 01 1970 plus 24 hours
console.log(d1)
console.log(d2)
console.log(d3)
console.log(d4)
console.log(d5)
console.log(d6)
console.log(d7)
console.log(d8.toString())
console.log(d9.toDateString())
console.log(d9.toUTCString())
console.log(d9.toISOString())
// JavaScript counts months from 0 to 11. Specifying a month higher than 11, will not result in an error but add the overflow to the next year.
// You cannot omit month. If you supply only one parameter it will be treated as milliseconds
// One and two digit years will be interpreted as 19xx
// JavaScript stores dates as number of milliseconds since January 01, 1970. Zero time is January 01, 1970 00:00:00 UTC. One day (24 hours) is 86 400 000 milliseconds.
