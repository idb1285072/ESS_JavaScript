const escaped = `\n\t\"Hello\"`;
const rawTag = (strings) => {
  console.log(strings.raw);
};
rawTag`Line 1\nLine 2`;