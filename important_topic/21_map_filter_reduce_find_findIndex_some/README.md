# map

- transform/modify each element of an array and return a new array of the same length
- don't mutate the original array

```js
const teams = [
  {
    name: "Team Alpha",
    members: [
      { id: 1, name: "Murad", role: "admin", score: 95 },
      { id: 2, name: "Araf", role: "user", score: 60 },
    ],
  },
  {
    name: "Team Beta",
    members: [
      { id: 3, name: "Nayeem", role: "user", score: 85 },
      { id: 4, name: "Rafi", role: "admin", score: 40 },
    ],
  },
];

const memberNames = teams.flatMap((team) =>
  team.members.map((member) => member.name)
);
// ["Murad", "Araf", "Nayeem", "Rafi"]
```

# filter

- return a new array with elements that match a condition
- if no match return empty array
- don't mutate the original array

```js
const teams = [
  {
    name: "Team Alpha",
    members: [
      { id: 1, name: "Murad", role: "admin", score: 95 },
      { id: 2, name: "Araf", role: "user", score: 60 },
    ],
  },
  {
    name: "Team Beta",
    members: [
      { id: 3, name: "Nayeem", role: "user", score: 85 },
      { id: 4, name: "Rafi", role: "admin", score: 40 },
    ],
  },
];

const topAdmins = teams.flatMap((team) =>
  team.members.filter((m) => m.role === "admin" && m.score >= 80)
);
// [{ id: 1, name: "Murad", ... }]
```

# reduce

- accumulate/aggregate an array to a single value
- first argument is reducer callback function and second argument optional initial accumulator value
- return final accumulated result
- don't mutate the original array

```js
const teams = [
  {
    name: "Team Alpha",
    members: [
      { id: 1, name: "Murad", role: "admin", score: 95 },
      { id: 2, name: "Araf", role: "user", score: 60 },
    ],
  },
  {
    name: "Team Beta",
    members: [
      { id: 3, name: "Nayeem", role: "user", score: 85 },
      { id: 4, name: "Rafi", role: "admin", score: 40 },
    ],
  },
];

const totalScore = teams.reduce(
  (acc, team) => acc + team.members.reduce((sum, m) => sum + m.score, 0),
  0
);
// 280
```

# find

- return the first element that match a condition
- stop after finding the first match. return `undefined` if no match
- short-circuits on first match - faster than `filter()` for single lookup
- don't mutate the original array

```js
const teams = [
  {
    name: "Team Alpha",
    members: [
      { id: 1, name: "Murad", role: "admin", score: 95 },
      { id: 2, name: "Araf", role: "user", score: 60 },
    ],
  },
  {
    name: "Team Beta",
    members: [
      { id: 3, name: "Nayeem", role: "user", score: 85 },
      { id: 4, name: "Rafi", role: "admin", score: 40 },
    ],
  },
];

const lowScorer = teams.flatMap((t) => t.members).find((m) => m.score < 50);
// { id: 4, name: "Rafi", ... }
```

# findIndex

- return the index of the first element that satisfy a given condition
- stop after finding the first match. return `-1` if no match
- don't mutate the original array
- prefer `findIndex()` over `indexOf()` when matching by condition

```js
const teams = [
  {
    name: "Team Alpha",
    members: [
      { id: 1, name: "Murad", role: "admin", score: 95 },
      { id: 2, name: "Araf", role: "user", score: 60 },
    ],
  },
  {
    name: "Team Beta",
    members: [
      { id: 3, name: "Nayeem", role: "user", score: 85 },
      { id: 4, name: "Rafi", role: "admin", score: 40 },
    ],
  },
];

const allMembers = teams.flatMap((t) => t.members);
const index = allMembers.findIndex((m) => m.name === "Araf");
// 1
```

# some

- check if at least one element satisfies a condition
- return `true` if any element satisfy the condition, otherwise return `false`
- stop at the first truthy result, short circuit on first match
- don't mutate the original array

```js
const teams = [
  {
    name: "Team Alpha",
    members: [
      { id: 1, name: "Murad", role: "admin", score: 95 },
      { id: 2, name: "Araf", role: "user", score: 60 },
    ],
  },
  {
    name: "Team Beta",
    members: [
      { id: 3, name: "Nayeem", role: "user", score: 85 },
      { id: 4, name: "Rafi", role: "admin", score: 40 },
    ],
  },
];

const hasWeakAdmin = teams.some((team) =>
  team.members.some((m) => m.role === "admin" && m.score < 50)
);
// true
```
