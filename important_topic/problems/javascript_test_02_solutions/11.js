let p = Promise.resolve(1);
p.then((x) => x + 1)
  .then((x) => {
    throw x;
  })
  .catch((x) => x + 1)
  .then(console.log); // 3
