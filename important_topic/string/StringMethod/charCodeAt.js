console.log("ABC".charCodeAt(0)); // 65 (Unicode for "A")
console.log("💩".charCodeAt(0)); // 55357 (0xD83D) — high surrogate
console.log("💩".charCodeAt(1)); // 56489 (0xDCA9) — low surrogate
console.log("💩".charCodeAt(2)); // NaN
console.log("ABC".charCodeAt(-1));
console.log("ABC".charCodeAt(100));
