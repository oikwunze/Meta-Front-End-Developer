# Knowledge check: Error handling

1. What will be printed when the following code runs?
   ```javascript
   var result = null;
   console.log(result);
   ```
   - undefined
   - null
   - 0
   ```
   Answer: null
   Explanation: Since the value is initialised with null, null will be output.
   ```

2. When the following code runs, what will print out?
   ```javascript
    try {​
        console.log('Hello');
    } catch(err) {​
        console.log('Goodbye');
    }​
   ```
   - Hello
   - Goodbye
   ```
   Answer: Hello
   Explanation: Since there is no error thrown inside the  try  block, the catch  block  will not run. Therefore, "Hello" will print out.
   ```

3. If you pass an unsupported data type to a function, what error will be thrown?
   - RangeError
   - SyntaxErrror
   - TypeError
   ```
   Answer: TypeError
   Explanation: TypeError will be thrown when an incorrect data type is passed to a function.
   ```

4. What will print out when the following code runs?
   ```javascript
    var x;
    
    if(x === null) {
        console.log("null");
    } else if(x === undefined) {
        console.log("undefined");
    } else {
        console.log("ok");
    }
   ```
   - null
   - undefined
   - ok
   ```
   Answer: undefined
   Explanation: Since the value is not initialised, it will have the undefined data type.
   ```

5. What will print out when the following code runs?
   ```javascript
    throw new Error();
    console.log("Hello");
   ```
   - Hello
   - Nothing will print out.
   ```
   Answer: Nothing will print out.
   Explanation: Throwing an error will stop the execution of the code.
   ```