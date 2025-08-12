// all
const all = Promise.all([
  Promise.resolve("Promise 1"),
  Promise.reject("Promise 2"),
  Promise.resolve("Promise 3"),
]);
all.then((result) => console.log(result)).catch((error) => console.log(error));

/*
- Waits for all Promises to resolve
- If any Promise rejects, Promise.all immediately rejects with that reason (doesn't wait for others to settle)
- Returns a promise with an array of results if all succeed.
*/

// allSettled
const allSettled = Promise.allSettled([
  Promise.resolve("Promise 1"),
  Promise.reject("Promise 2"),
  Promise.resolve("Promise 3"),
]);
console.log(allSettled);
allSettled
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
/*
- Waits for all Promises to settle (either fulfilled or rejected)
- Never rejects (always resolves)
- Returns a promise with an array of objects describing each Promise's outcome
[
  { status: 'fulfilled', value: 'Promise 1' },
  { status: 'rejected', reason: 'Promise 2' },
  { status: 'fulfilled', value: 'Promise 3' }
  ]
  */

// any
const any = Promise.any([
  Promise.reject("Promise 1"),
  Promise.reject("Promise 2"),
  Promise.resolve("Promise 3"),
]);
any.then((result) => console.log(result)).catch((error) => console.log(error));
/*
- Waits for first Promises to fulfilled
- Ignores rejected Promises until one fulfills
- If all Promise rejected, rejects with an AggregateError containing all reasons
*/

// race
const race = Promise.race([
  Promise.reject("Promise 1"),
  Promise.reject("Promise 2"),
  Promise.resolve("Promise 3"),
]);
race.then((result) => console.log(result)).catch((error) => console.log(error));
/*
- Resolves or rejects as soon as any Promise settles (fulfills or rejects)
- Result/value is from the first settled Promise (no waiting for others)
*/
