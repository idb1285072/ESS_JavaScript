let userName = "Murad Hossen";
console.log(userName.charAt(0));
console.log("💩".charAt(0)); // "\uD83D"
console.log("💩".charAt(1)); // "\uDCA9"
console.log("💩".charAt(2)); // ""

console.log(userName.charAt(-1)); // ""
console.log(userName.charAt(100)); // ""
console.log(userName.charAt(NaN)); // M
console.log(userName.charAt("JFLDKj")); // M
