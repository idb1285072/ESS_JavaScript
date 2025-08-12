- Always use the same coding conventions for all your JavaScript projects.
- Naming and declaration rules for variables and functions.
- Rules for the use of white space, indentation, and comments.
- Programming practices and principles.
- Improve code readability

- Variable and Function Name should be camelCase
- Global Variable and Constants shoule be UPPERCASE
- Use Lower Case File Names
- Spaces Around Operators
- Always use 2 spaces for indentation of code blocks
- Always end a simple statement with a semicolon.
- For readability, avoid lines longer than 80 characters.

- Avoid Global Variables
- Always declare local variable. Local variables must be declared with the var, the let, or the const keyword, otherwise they will become global variables. Strict mode does not allow undeclared variables.
- It is a good coding practice to put all declarations at the top of each script or function.
- It is a good coding practice to initialize variables when you declare them.
- Declare Objects, Array with const
- Don't use new Object()
  - Use "" instead of new String()
  - Use 0 instead of new Number()
  - Use false instead of new Boolean()
  - Use {} instead of new Object()
  - Use [] instead of new Array()
  - Use /()/ instead of new RegExp()
  - Use function (){} instead of new Function()
- Beware of Automatic Type Conversions. JS is loosely typed.
- Use `===` Comparison
- Use Parameter Defaults
- End Your Switches with Defaults

## Mistakes
- An assignment always returns the value of the assignment
- `switch` statements use strict comparison
- Confusing addition and concatenation
- You must use a "backslash" if you must break a statement in a string
```js
let x = "Hello \
World!";
```
- Never break a `return` statement.
```js
function myFunction(a) {
  let
  power = 10; 
  return
  a * power;
}
```
- Accessing Arrays with Named Indexes
```js
const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
person.length;      // person.length will return 0
person[0];          // person[0] will return undefined
```
- `undefined` is not `null`

```js
if (typeof myObj !== "undefined" && myObj !== null)
{

}
```