# Nullish coalescing operator `??`

- Only returns the right-hand side if the left-hand side is `null` or `undefined`
- Unlike `||`, it does not treat `0`, `''`, `NaN` or `false` as falsy

## ?? vs ||

> - Falsy values are `null`, `undefined`, `0`, `""`, `NaN`, `false`
> - `null` and `undefined` are considered **nullish**

- The `??` operator only checks for **nullish** values, not all falsy values
- The `||` operator checks all **falsy** values

## Short-circuit

- Nullish operator short-cuircits like `||` and `&&`
- Right-hand side is not evaluated if the left is not `null` or `undefined`

## Pitfalls

- misuse `??` with `||` without parenthese

```js
const result = a || b ?? c; // SyntaxError
const result = (a || b) ?? c; // Currect
```

## Use Cases

- avoid fallback
- default values
- user input handling
- configuration management (default)
