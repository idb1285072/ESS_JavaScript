function emphasize(strings, ...values) {
  const upperCaseValues = values.map(value=>String(value).toUpperCase());
  return strings.reduce((acc, string, i)=>{
    const val = upperCaseValues[i]??"";
    return acc+string+val;
  }, "")
}

const level = "system overload";
const percent = 98;

const message = emphasize`Warning: ${level} at ${percent}%!`;
console.log(message);