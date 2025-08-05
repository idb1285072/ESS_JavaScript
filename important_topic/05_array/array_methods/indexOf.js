const input = ['js', 'js', 'css', 'html', 'css'];
const unique = input.filter((item, i, arr) => arr.indexOf(item) === i);
// ['js', 'css', 'html']

const sentence = "JavaScript is awesome!";
const isFirst = sentence.indexOf("JavaScript") === 0;

const allowed = ['dashboard', 'home', 'profile'];
const redirectTo = 'admin';
if (allowed.indexOf(redirectTo) === -1) {
  throw new Error('Unsafe redirect blocked!');
}

