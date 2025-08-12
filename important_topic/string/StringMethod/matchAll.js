const userName = "Murad Hossen Murad";
const matched = userName.matchAll(/rad/g);
for (const m of matched) {
  console.log(m);
}

// get all matched indexes
const str = "abc abc abc";
const regex = /abc/g;
const indexes = [...str.matchAll(regex)].map(m => m.index);
console.log(indexes); // [0, 4, 8]
