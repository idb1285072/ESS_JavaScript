function* g(){
  yield 1;
  yield* [2, 3];
  return 4;
}
console.log([...g()]); // [1, 2, 3]