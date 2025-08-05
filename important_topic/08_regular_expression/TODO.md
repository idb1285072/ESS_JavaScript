# **Mastering Regular Expressions in JavaScript — Complete Learning Path**

---

## **1. Basics of Regular Expressions**

| Concept                           | Description                                                |
| --------------------------------- | ---------------------------------------------------------- |
| **What is a Regular Expression?** | A pattern used to match character combinations in strings. |
| **Literal Syntax**                | `/pattern/flags`  (e.g., `/abc/i`)                         |
| **RegExp Constructor**            | `new RegExp('abc', 'i')`                                   |

---

## **2. Fundamental RegEx Patterns**

| Concept               | Example    | Meaning                               |
| --------------------- | ---------- | ------------------------------------- |
| Literal Characters    | `/cat/`    | Matches 'cat'                         |
| Dot `.`               | `/c.t/`    | Any character between 'c' and 't'     |
| Character Set `[abc]` | `/[abc]/`  | Matches 'a', 'b', or 'c'              |
| Negated Set `[^abc]`  | `/[^abc]/` | Matches any char except 'a', 'b', 'c' |
| Ranges `[a-z]`        | `/[a-z]/`  | Matches any lowercase letter          |

---

## **3. Quantifiers (Repetition)**

| Quantifier | Meaning                |
| ---------- | ---------------------- |
| `*`        | 0 or more times        |
| `+`        | 1 or more times        |
| `?`        | 0 or 1 time (optional) |
| `{n}`      | Exactly n times        |
| `{n,}`     | At least n times       |
| `{n,m}`    | Between n and m times  |

---

## **4. Anchors (Position Matching)**

| Anchor | Meaning             |
| ------ | ------------------- |
| `^`    | Start of string     |
| `$`    | End of string       |
| `\b`   | Word boundary       |
| `\B`   | Not a word boundary |

---

## **5. Predefined Character Classes**

| Class | Meaning                            |
| ----- | ---------------------------------- |
| `\d`  | Digit (0-9)                        |
| `\D`  | Non-digit                          |
| `\w`  | Word character (a-z, A-Z, 0-9, \_) |
| `\W`  | Non-word character                 |
| `\s`  | Whitespace                         |
| `\S`  | Non-whitespace                     |

---

## **6. Grouping & Capturing**

| Concept                   | Syntax                                |
| ------------------------- | ------------------------------------- |
| **Capturing Group**       | `(abc)`                               |
| **Non-Capturing Group**   | `(?:abc)`                             |
| **Named Capturing Group** | `(?<name>abc)`                        |
| **Backreferences**        | `\1`, `\2` (refer to captured groups) |

---

## **7. Lookaheads & Lookbehinds (Advanced Assertions)**

| Type                | Syntax    | Meaning                      |
| ------------------- | --------- | ---------------------------- |
| Positive Lookahead  | `X(?=Y)`  | Match X if followed by Y     |
| Negative Lookahead  | `X(?!Y)`  | Match X if not followed by Y |
| Positive Lookbehind | `(?<=Y)X` | Match X if preceded by Y     |
| Negative Lookbehind | `(?<!Y)X` | Match X if not preceded by Y |

---

## **8. Flags (Modifiers)**

| Flag | Description                               |
| ---- | ----------------------------------------- |
| `g`  | Global search (don’t stop at first match) |
| `i`  | Case-insensitive match                    |
| `m`  | Multi-line mode                           |
| `s`  | Dotall mode (dot matches newline)         |
| `u`  | Unicode support                           |
| `y`  | Sticky mode (match from lastIndex only)   |

---

## **9. RegExp Methods in JS**

| Method                               | Use                                       |
| ------------------------------------ | ----------------------------------------- |
| `test(string)`                       | Returns `true`/`false` if pattern matches |
| `exec(string)`                       | Returns match object or `null`            |
| `String.match(regex)`                | Returns array of matches                  |
| `String.matchAll(regex)`             | Returns iterator of all matches           |
| `String.replace(regex, replacement)` | Replace matches with new value            |
| `String.split(regex)`                | Split string by regex pattern             |
| `String.search(regex)`               | Returns index of first match              |

---

## **10. Real-World Patterns to Practice**

| Use Case                | Pattern                                 |
| ----------------------- | --------------------------------------- |
| Validate Email          | `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`          |
| Validate Phone Number   | `/^\+?[0-9]{10,13}$/`                   |
| Extract Numbers         | `/\d+/g`                                |
| Validate URL            | Complex — involves lookaheads           |
| Extract Hashtags        | `/#[\w]+/g`                             |
| Password Strength Check | `/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/` |

---

## **11. Performance Optimization Techniques**

* Lazy Quantifiers `*?`, `+?`
* Avoid catastrophic backtracking (careful with nested quantifiers)
* Use anchors to limit scope.
* Use lookaheads/behind instead of capturing when not needed.

---

## **12. Tools You Must Use**

| Tool                                 | Purpose                              |
| ------------------------------------ | ------------------------------------ |
| [regex101.com](https://regex101.com) | Live testing, explanation, debugging |
| [RegExr](https://regexr.com/)        | Interactive RegEx editor             |
| JS Console + `RegExp`                | Practice directly in browser         |

---

## **13. Advanced Mastery**

| Concept                                            | Importance                                  |
| -------------------------------------------------- | ------------------------------------------- |
| Building dynamic RegExp in code                    | Using `new RegExp()` with variables         |
| Mastering Named Groups                             | Cleaner code with `matchAll`                |
| Complex Assertions (lookahead+lookbehind together) | Very powerful                               |
| Writing efficient patterns                         | Avoiding overmatching & backtracking        |
| Creating RegEx Engines/Libraries                   | (optional) For deep internals understanding |

---

## **14. Real-World Project Ideas**

* RegEx-based Form Validator (custom)
* Log file parser (extracting IPs, URLs, etc.)
* RegEx-powered Search/Filter (live search in frontend)
* Markdown Parser (basic to advanced)
* Syntax Highlighter using Regex patterns

---

## **Summary — To Master RegEx in JS:**

1. Know **Basic Patterns, Quantifiers, Anchors, Classes**.
2. Understand **Capturing Groups, Backreferences**.
3. Master **Lookaheads / Lookbehinds**.
4. Be fluent with **JS RegEx Methods (test, exec, match, replace, etc.)**.
5. Practice building **Real-World Patterns**.
6. Use tools like **regex101.com** for interactive learning.
7. Optimize for performance to avoid **RegEx bottlenecks**.