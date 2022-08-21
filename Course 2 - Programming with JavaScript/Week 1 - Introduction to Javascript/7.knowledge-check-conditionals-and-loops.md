# Knowledge check: Conditionals and loops

1. Based on the following code, what will print out when the variable `i` has the value `3`?
   ```javascript
    if(i < 5) {
        console.log("Hello");
    } else {
        console.log("Goodbye");
    }
   ```
   - Hello
   - Goodbye
   ```
   Answer: Hello
   Explanation: The code inside the if statement will execute because the condition  i < 5  is true.
   ```

2. Based on the following code, what will print out when the variable `i` has the value `1`?
   ```javascript
    if(i == 0 && i == 1) {
        console.log("Hello");
    } else {
        console.log("Goodbye");
    }
   ```
   - Hello
   - Goodbye
   ```
   Answer: Goodbye
   Explanation: The condition checks if i is equal to 0 AND 1. Since it is not possible for i to be both values at the same time, the result of this check is false. Therefore, the code inside the else statement will run.
   ```

3. How many times will the following code print the word 'Hello'?
   ```javascript
    for (i = 0; i < 2; i++) {
        console.log("Hello");
    }
   ```
   - 1
   - 2
   - 3
   - 4
   ```
   Answer: 2
   Explanation: The loop will run twice based on the condition  i < 2 .
   ```

4. How many times will the following code print the word 'Hello'?
   ```javascript
    var i = 0;
    while(i < 3) {
        console.log("Hello");
        i++;
    }
   ```
   - 1
   - 2
   - 3
   - 4
   ```
   Answer: 3
   Explanation: The loop will run 3 times based on the condition i < 3.
   ```

5. How many times will the following code print the word 'Hello'?
   ```javascript
    for (i = 0; i < 2; i++) {
        for (var j = 0; j < 3; j++) {
            console.log("Hello");
        }​
    }
   ```
   - 2
   - 3
   - 4
   - 6
   ```
   Answer: 6
   Explanation: The inner loop will be run twice by the outer loop. Since the inner loop runs 3 times, the  console.log will be called 6 times in total.
   ```

6. Based on the following code, what will print out when the variable `i` has the value `7`?
   ```javascript
    if(i <= 5) {
        console.log("Hello");
    } else if(i <= 10) {
        console.log("Goodnight");
    } else {
        console.log("Goodbye");
    }
   ```
   - Hello
   - Goodnight
   - Goodbye
   ```
   Answer: Goodnight
   Explanation: The code inside the else if statement will execute. The first condition fails because the value of i is greater than 5. The second condition succeeds because the value of i is less than 10.
   ```

7. Based on the following code, what will print out when the variable `i` has the value `3`?
   ```javascript
    switch(i) {
        case 1:
            console.log("Hello");
            break;
        case 2:
            console.log("Goodnight");
            break;
        case 3:
            console.log("Goodbye");
            break;
    }
   ```
   - Hello
   - Goodnight
   - Goodbye
   ```
   Answer: Goodbye
   Explanation: The code for case 3 will run.
   ```

8. Based on the following code, what will print out when the variable `i` has the value `3`?
   ```javascript
    if(i == 2 || i == 3) {
        console.log("Hello");
    } else {
        console.log("Goodbye");
    }
   ```
   - Hello
   - Goodbye
   ```
   Answer: Hello
   Explanation: The condition checks if i is equal to 2 OR 3. Since the value of i is 3, the code inside the if statement will run.
   ```