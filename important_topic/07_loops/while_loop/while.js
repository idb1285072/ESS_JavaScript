var isRunning = true;

while (isRunning) {
  const rand = Math.floor(Math.random() * 10 + 1);
  if (rand === 9) {
    console.log("Winner");
    isRunning = false;
  } else {
    console.log("You have got " + rand);
  }
}


