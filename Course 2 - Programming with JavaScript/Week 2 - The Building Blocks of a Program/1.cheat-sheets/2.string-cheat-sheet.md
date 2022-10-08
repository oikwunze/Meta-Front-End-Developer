# String cheat sheet

In this cheat sheet, I'll list some of the most common and most useful properties and methods available on strings.

For all the examples, I'll be using either one or both of the following variables:
```javascript
var greet = "Hello, ";
var place = "World"
```

Note that whatever string properties and methods I demo in the following examples, I could have ran it on those strings directly, without saving them to a variable such as the ones I named `greet` and `place`.

In some of the examples that follow, for the sake of clarity, instead of using a variable name, I'll use the string itself.

All strings have at their disposal several built-in properties, but there's a single property that is really useful: the `length` property, which is used like this:
```javascript
greet.length; // 7
```

| Method | Purpose | Example |
|--------|---------|---------|
| __`charAt()`__   | Read each individual character at a specific index in a string, starting from zero. | `greet.charAt(0); // 'H'` |
| __`concat() `__  | Join 2 strings | `"Wo".concat("rl").concat("d"); // 'World'` |
| __`indexOf() `__ | Return the location of the first position that matches a character | `"ho-ho-ho".indexOf('h'); // 0` |
|                  |                                                                    | `"ho-ho-ho".indexOf('o'); // 1` |
|                  |                                                                    | `"ho-ho-ho".indexOf('-'); // 2` |
| __`lastIndexOf() `__ | Find the last match, otherwise it works the same as __`indexOf`__ |  |
| __`split() `__ | Chop up the string into an array of sub-strings | `"ho-ho-ho".split("-"); // ['ho', 'ho', 'ho']` |
| __`toUpperCase() `__ | Change the casing of strings to upper case | `greet.toUpperCase(); // "HELLO, "` |
| __`toLowerCase()  `__ | Change the casing of strings to lower case | `greet.toLowerCase(); // "hello, "` |