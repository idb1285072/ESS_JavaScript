# Regular Expression

A regular expression is a sequence of characters that defines a search pattern.

## Why Regular Expression?

- Form Validation
- Syntax Highlighting
- Extract hashtags or mentions from tweets

## Common Methods that use RegEx

- `match()`, `matchAll()`
- `replace()`, `replaceAll()`
- `search()`
- `split()`
- `test()` ?

## Syntax

```js
// Literal form
const regex = /pattern/flags;

// Constructor form
const regex = new RegExp("pattern", "flags");
```

- **`pattern`**: The actual expression you're trying to match.
- **`flags`**: Optional modifiers that tweak how the regex behaves.

---

## flags

| Flag | Name         | Description                                                                |
| ---- | ------------ | -------------------------------------------------------------------------- |
| `g`  | Global       | Finds **all** matches, not just the first one.                             |
| `i`  | Ignore Case  | Makes the match **case-insensitive**.                                      |
| `m`  | Multiline    | Treats `^` and `$` as the start/end of **each line**, not just the string. |
| `s`  | DotAll       | Allows `.` to match **newline characters**.                                |
| `u`  | Unicode      | Enables full **Unicode support**, including emojis and special symbols.    |
| `y`  | Sticky       | Matches only from the **last index**, without skipping ahead.              |
| `d`  | Has Indices  | Returns **start and end positions** of matches (newer feature).            |
| `v`  | Unicode Sets | Enhanced Unicode matching (new in 2025).                                   |

```javascript
const regex = /hello/gi; // global + case-insensitive
const str = "Hello hello HELLO";

console.log(str.match(regex)); // ["Hello", "hello", "HELLO"]
```

```javascript
const regex = new RegExp("hello", "gi");
```

---

## Pattern Element

| Symbol | Meaning                              | Example                                  |
| ------ | ------------------------------------ | ---------------------------------------- |
| `.`    | Any character except newline         | `/a.b/` matches `acb`                    |
| `\d`   | Digit (0-9)                          | `/\d+/` matches `123`                    |
| `\w`   | Word character (letters, digits, \_) | `/\w+/` matches `user_42`                |
| `\s`   | Whitespace                           | `/\s+/` matches spaces, tabs             |
| `^`    | Start of string                      | `/^Hi/` matches `Hi there`               |
| `$`    | End of string                        | `/end$/` matches `the end`               |
| `*`    | 0 or more                            | `/a*/` matches `aaa` or empty            |
| `+`    | 1 or more                            | `/a+/` matches `aaa`                     |
| `?`    | Optional                             | `/colou?r/` matches `color` or `colour`  |
| `[]`   | Character set                        | `/[aeiou]/` matches any vowel            |
| `()`   | Grouping                             | `/(\d{3})-(\d{4})/` captures phone parts |

---

### Usage with String Methods

```javascript
const str = "Hello123";

// Test if pattern matches
console.log(/\d+/.test(str)); // true

// Get matches
console.log(str.match(/\d+/)); // ["123"]

// Replace pattern
console.log(str.replace(/\d+/, "ABC")); // "HelloABC"
```
