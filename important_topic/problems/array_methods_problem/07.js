const str = "JavaScript";
const vowels = "aeiou";
const lowerStr = str.toLowerCase();
const len = str.length;
let countVowel = 0

for(let i=0; i<len; i++){
  if(vowels.includes(lowerStr[i])) countVowel++;
}
console.log(countVowel)

