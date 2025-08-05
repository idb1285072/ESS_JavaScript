const date = new Date()
const hours = date.getHours();
let greeting;
// console.log(hours)
if(hours<10){
  greeting = "Good Morning"
}
else if(hours<20)
{
  greeting = "Good Day"
}
else{
  greeting = "Good Evening"
}
console.log(`${greeting}`)

