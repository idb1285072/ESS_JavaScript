function foo(){
  console.log(this);
}
foo.call(5); // [Number: 5]