const date = new Date("January 01, 2025")
date.setFullYear(2020)
date.setFullYear(2020, 11, 3)
console.log(date)
date.setMonth(10)
date.setDate(15)
date.setDate(date.getDate()+50)
date.setHours(22)
date.setHours(22, 10, 10)
date.setMinutes(30)
date.setSeconds(33)
console.log(date)

// date compare
let text = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);
if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}
console.log(text)