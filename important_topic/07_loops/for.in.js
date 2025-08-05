const student = {
  name: "Amina",
  age: 21,
  grade: "A"
};

for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}

const person = Object.create({ gender: "female" });
person.name = "Sara";
person.age = 28;

for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(`${key}: ${person[key]}`);
  }
}

const scores = {
  math: 80,
  science: 90,
  english: 70
};

for (let subject in scores) {
  scores[subject] += 5;
}

console.log(scores); // All scores increased by 5


const colors = ["red", "green", "blue"];

for (let index in colors) {
  console.log(`Index ${index}: ${colors[index]}`);
}

for (let color of colors) {
  console.log(`Color: ${color}`);
}