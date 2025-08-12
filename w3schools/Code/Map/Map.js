const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);

const persons = new Map();
persons.set("Raj", 27);
persons.set("Rana", 19);
persons.set("Murad", 53);
console.log(persons.get("Murad"));
persons.set("Murad", 28);
console.log(persons.get("Murad"));
console.log(typeof persons);
console.log(persons instanceof Map);
console.log(persons);
persons.forEach((value, key)=>{
  console.log(`${key}: ${value}`)
})
for(const x of persons.values()){
  console.log(x)
}
for(const x of persons.keys()){
  console.log(x)
}
for(const x of persons.entries()){
  console.log(x)
}
console.log(persons.size);
console.log(persons.has("Murad"))
persons.delete("Murad")
console.log(persons)
persons.clear()
console.log(persons)