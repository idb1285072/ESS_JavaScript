const myIterator1 = Iterator.from([32, 33, 16, 40]);
const skipFirst2Elements = myIterator1.drop(2);
skipFirst2Elements.forEach((x) => console.log(x));

const myIterator6 = Iterator.from([32, 33, 16, 40]);
const takeFirst2Elements = myIterator6.take(2);
takeFirst2Elements.forEach((x) => console.log(x));

const myIterator2 = Iterator.from([32, 33, 16, 40]);
console.log(myIterator2.every((x) => x > 18));

const myIterator3 = Iterator.from([32, 33, 16, 40]);
console.log(myIterator3.some((x) => x > 18));

const myIterator4 = Iterator.from([32, 33, 16, 40]);
let filteredResult = myIterator4.filter((x) => x > 18);
filteredResult.forEach((x) => console.log(x));

const myIterator5 = Iterator.from([32, 33, 16, 40]);
let findedResult = myIterator5.find((x) => x > 18);
console.log(findedResult);

const myIterator7 = Iterator.from([32, 33, 16, 40]);
let reducedResult = myIterator7.reduce((total, item) => total + item, 100);
console.log(reducedResult);

const myIterator8 = Iterator.from([32, 33, 16, 40]);
let mapResult = myIterator8.map((x) => x * 10);
mapResult.forEach((x) => console.log(x));

const myIterator9 = Iterator.from([32, 33, 16, 40]);
let flatMapResult = myIterator9.flatMap((x) => [x, x * 10]);
flatMapResult.forEach((x) => console.log(x));
