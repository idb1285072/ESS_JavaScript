function printFirstNTermsByLoop(n) {
  let a = 0, b = 1;

  for (let i = 1; i <= n; i++) {
    console.log(a);
    let temp = a + b;
    a = b;
    b = temp;
  }
}

printFirstNTermsByLoop(100);