# Module quiz: Introduction to JavaScript

1. You can run JavaScript in a web browser's devtools console.
   - true
   - false
   ```
   Answer: true
   Explanation: The devtools console is useful for running JavaScript code.
   ```

2. Which of the following are valid comments in JavaScript? Select all that apply.
   - ```
     \ Comment 1
     ```
   - ```
     // Comment 2
     ```
   - ```
     ## 
     ## Comment 3
     ##
     ```
   - ```
     /*
      * Comment 4
      */
     ```
   ```
   Answer: // Comment 2,
           /*
            * Comment 4
            */
   Explanation: // is used for inline comments.
                /* and */ are define the beginning and end of multi-line comments.
   ```

3. Which of the following are valid data types in JavaScript? Select all that apply.
   - string
   - numbers
   - booleans
   - null
   ```
   Answer: string, numbers, booleans, null
   Explanation: The string data type represents a sequence of characters in JavaScript.
                Numbers represent both integer and decimal point numeric values.
                The boolean data type has one of two values; true or false.
                The null data type represents the absense of a value.
   ```

4. Which of the following is the logical AND operator in JavaScript?
   - `&`
   - `&&`
   - `||`
   - `|\`
   ```
   Answer: &&
   Explanation: && is the logical AND operator used for condition checks.
   ```

5. Which of the following is the assignment operator in JavaScript?
   - `=`
   - `==`
   - `===`
   ```
   Answer: =
   Explanation: The = symbol is used to assign to variables in JavaScript.
   ```

6. How many times will the following code print the word 'Hello'?
   ```javascript
    for(var i = 0; i <= 5; i++) {
        console.log("Hello");
    }
   ```
   - 4
   - 5
   - 6
   ```
   Answer: 6
   Explanation: 'i' starts with the value '0'. The condition checks if 'i' is less than or equal to '5'. Each loop increments 'i' by '1'. This means that the loop will run 6 times.
   ```

7. What will print out when the following code runs?
   ```javascript
    var i = 3;
    var j = 5;
    
    if(i == 3 && j < 5) {
        console.log("Hello");
    } else {
        console.log("Goodbye");
    }
   ```
   - Hello
   - Goodbye
   ```
   Answer: Goodbye
   Explanation: The condition checks if 'i' is equal to '3' AND if 'j' is less than '5'. Since the result of this condition is false, the code inside the else statement will run.
   ```

8. What will print out when the following code runs?
   ```javascript
    var i = 7;
    var j = 2;
    
    if(i < 7 || j < 5) {
        console.log("Hello");
    } else {
        console.log("Goodbye");
    }
   ```
   - Hello
   - Goodbye
   ```
   Answer: Hello
   Explanation: The condition checks if 'i' is less than '7' OR if 'j' is less than '5'. Since the result of this condition is true, the code inside the if statement will run.
   ```

9. T​he result of `!false` is:
   - t​rue
   - u​ndefined
   ```
   Answer: t​rue
   Explanation: When you add the NOT operator before a boolean value, the returned value is the opposite of the bo
   ```

10. What does the operator symbol `||` represent in JavaScript?
    - The logical OR operator
    - The logical AND operator
    - The logical NOT operator
   ```
   Answer: The logical OR operator
   Explanation: In JavaScript, the || is the logical OR operator.
   ```