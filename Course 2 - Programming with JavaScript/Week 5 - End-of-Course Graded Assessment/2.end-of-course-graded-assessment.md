# End-of-Course Graded Assessment

1. What will be the output of the following JavaScript?
   ```javascript
    const a = 2;
    const b = 4;
    if(a == 2 && b == 8) {
        console.log("Green");
    } else {
        console.log("Blue");
    }
   ```
   - Green
   - Blue
   ```
   Answer: Blue
   Explanation: The AND operator requires both conditions to be true to result in a true value. Since b is equal to 4, the condition fails and the code inside the else statement will execute. Therefore, Blue will be output.
   ```

2. What will be the output of the following JavaScript?
   ```javascript
    var x = 2;
    x += 5;
    console.log(x);
   ```
   - 2
   - 3
   - 5
   - 7
   ```
   Answer: 7
   Explanation: The x variable is initially assigned the value 2. Then 5 is added to the variable and the result is stored in the variable. Therefore, 7 is output by the code.
   ```

3. What is the data type of the x variable in the following code?
   ```javascript
    var x = 23.2;
   ```
   - Number
   - BigInt
   - String
   - Boolean
   ```
   Answer: Number
   Explanation: Numbers can store whole numbers such as 23 and decimal numbers such as 23.2.
   ```

4. What will the following JavaScript code output?
   ```javascript
    var x = 20;

    if(x < 5) {
        console.log("Apple");
    } else if(x > 10 && x < 20) {
        console.log("Pear");
    } else {
        console.log("Orange");
    }
   ```
   - Apple
   - Pear
   - Orange
   ```
   Answer: Orange
   Explanation: All conditions will fail because x is equal to 20. Therefore, the code inside the else statement will run and output Orange.
   ```

5. What will the following JavaScript code output?
   ```javascript
    var result = 0;
    
    var i = 4;
    while(i > 0) {
        result += 2;
        i--;
    }
    console.log(result);
   ```
   - 0
   - 2
   - 4
   - 8
   ```
   Answer: 8
   Explanation: The loop will run 4 times and each time add 2 to the result variable. Therefore, 8 will be output.
   ```

6. What will the following JavaScript code output?
   ```javascript
    var result;
    console.log(result);
    result = 7;
   ```
   - null
   - undefined
   - 7
   ```
   Answer: 
   Explanation: 
   ```

7. What's missing from this JavaScript function declaration?
   ```javascript
    function(a,b) {
        return a + b
    }
   ```
   - The function name.
   - The assignment operator.
   - The dot notation.
   ```
   Answer: The function name.
   Explanation: When coding function declarations, you need to give them a name.
   ```

8. What is the output of the code below?
   ```javascript
    var cat = {}
    cat["sound"] = "meow"
    var catSound = "purr"
    console.log(cat.sound)
   ```
   - meow
   - purr
   - {}
   - catSound
   ```
   Answer: meow
   Explanation: Console logging the sound property on the cat object will output the string "meow".
   ```

9. What is the output of the code below?
   ```javascript
    var veggies = []
    veggies.push('parsley')
    veggies.push('carrot')
    console.log(veggies[2])
   ```
   - undefined
   - 2
   - 1
   - 3
   ```
   Answer: undefined
   Explanation: Trying to output the third item in the veggies array, using the syntax veggies [2]  will console log undefined because the veggies array has only 2 items, "parsley" and "carrot".
   ```

10. Which of the following HTML attributes is used to handle a click event?
    - onclick
    - addEventListener('click')
    - 'click'
    ```
    Answer: onclick
    Explanation: The onlick HTML attribute is used to handle click events.
    ```

11. How can you add an HTML attribute to an HTML element using JavaScript?
    - By invoking the setAttribute method on a given element.
    - By invoking the getAttribute method on a given element.
    - By invoking the createAttribute method on a given element.
    ```
    Answer: By invoking the setAttribute method on a given element.
    Explanation: For example, to add an id attribute to an element, you can run setAttribute('id', 'sub-heading')
    ```

12. True or false? Using the  npm init -y  command you can initialize a new project with npm with all the prompts answered with a 'yes'.
    - true
    - false
    ```
    Answer: true
    Explanation: Using  npm init -y  is handy way to save time setting up a new project.
    ```

13. What will be the output of the following JavaScript?
    ```javascript
    const a = true;
    if(!a) {
        console.log("Green");
    } else {
        console.log("Blue");
    }
    ```
    - Green
    - Blue
    ```
    Answer: Blue
    Explanation: The NOT operator results in the condition being false. Therefore, the code inside the else statement will execute and Blue will be output.
    ```

14. What is the data type of the x variable in the following code?
    ```javascript
    var x = 0 != 1;
    ```
    - Number
    - BigInt
    - String
    - Boolean
    ```
    Answer: Boolean
    Explanation: 0 != 1 will result in a true value which is a boolean.
    ```

15. What will the following JavaScript code output?
    ```javascript
    console.log(result);
    var result = 7;
    ```
    - null
    - undefined
    - 7
    ```
    Answer: undefined
    Explanation: Since result is not yet defined when it is output, the value undefined is output.
    ```

16. What will be the result of running the following JavaScript code snippet?
    ```javascript
    function addTwo(a,b) {
        return a
    }
    addTwo(5,10)
    ```
    - 5
    - 10
    - undefined
    ```
    Answer: 5
    Explanation: The function is coded so that it only returns the first passed-in argument.
    ```

17. What is the output of the code below?
    ```javascript
    var car = { mileage: 200 }
    var carMileage = 100
    console.log(car.mileage)
    ```
    - 200
    - 100
    - 300
    ```
    Answer: 200
    Explanation: You can access the mileage property on the car object using the dot notation.
    ```

18. What is the output of the code below?
    ```javascript
    var veggies = ['parsley', 'carrot']
    console.log(veggies[2])
    ```
    - undefined
    - 2
    - 1
    - 3
    ```
    Answer: undefined
    Explanation: Trying to output the third item in the veggies array, using the syntax veggies [2]  will console log undefined because the veggies array has only 2 items, "parsley" and "carrot".
    ```

19. True or False. The second argument passed to the addEventListener function is the actual function that will handle the event, when it gets triggered.
    - True
    - False
    ```
    Answer: True
    Explanation: The second argument passed to the addEventListener handles the event.
    ```

20. What does this line of code do?
    ```javascript
    document.createElement('h2').innerText = "Heading Level 2"
    ```
    - It creates an h2 element without adding it to the page.
    - This syntax is invalid.
    - It adds an  inner-text  HTML attribute to the h2 element.
    ```
    Answer: It creates an h2 element without adding it to the page.
    Explanation: Using innerText adds a piece of text inside a targeted element, in this case, inside an h2 element.
    ```

21. What will be the output of the following JavaScript?
    ```javascript
    var x = true;
    x = 23;
    console.log(x);
    ```
    - true
    - 23
    ```
    Answer: 
    Explanation: 
    ```

22. What is the data type of the x variable in the following code?
    ```javascript
    var x = "Hello";
    ```
    - Number
    - BigInt
    - String
    - Boolean
    ```
    Answer: String
    Explanation: Text wrapped in double quotes represents a string data type.
    ```

23. What will the following JavaScript code output?
    ```javascript
    var x = 10;
    
    if(x > 10) {
        console.log("Apple");
    } else if(x > 5) {
        console.log("Pear");
    } else {
        console.log("Orange");
    }
    ```
    - Apple
    - Pear
    - Orange
    ```
    Answer: Pear
    Explanation: The x variable is equal to 10 so the first condition fails but the second condition succeeds. Therefore, the code inside the else if statement executes and Pear is output.
    ```

24. What will the following JavaScript code output?
    ```javascript
    var result = 0;
    
    var i = 0;
    var limit = 3;
    while(i < limit) {
        result += 2;
        i++;
    }
    
    console.log(result);
    ```
    - 0
    - 2
    - 3
    - 6
    ```
    Answer: 6
    Explanation: The loop will run 3 times and each time add 2 to the result variable. Therefore, 6 will be output.
    ```

25. In the following following JavaScript code snippet, what is missing for the code to return the value 15?
    ```javascript
    function addTwo(a,b) {
        return a
    }
    addTwo(5,10)
    ```
    - b after a in the return statement
    - +b after a in the return statement
    - Attribute
    ```
    Answer: +b after a in the return statement
    Explanation: The missing code is "+ b".
    ```

27. When the following code runs, what will print out?
    ```javascript
    try {
        throw new Error();
        console.log('Square');
    } catch(err) {
        console.log('Circle');
    }
    ```
    - Square
    - Circle
    ```
    Answer: Circle
    Explanation: When the error is thrown, the catch block will execute and output Circle.
    ```

28. What will be the output of this JavaScript code snippet?
    ```javascript
    function addTwo(a,b) {
        return a + b
    }
    addTwo(5,"10")
    ```
    - 510
    - 5
    - 10
    ```
    Answer: 510
    Explanation: When using the + operator on a number and a string, the number gets coerced to a string and the result is two strings joined together.
    ```

29. What is the output of the code below?
    ```javascript
    var cat = {}
    cat.sound = "meow"
    var catSound = "purr"
    console.log(cat.sound)
    ```
    - meow
    - purr
    - {}
    - catSound
    ```
    Answer: meow
    Explanation: 
    ```

30. True or False. You use the pop method on an array to remove the last item from it.
    - True
    - False
    ```
    Answer: True
    Explanation: The pop method removes the last item from an array.
    ```

31. Is the code below missing a `.js`  after the `./addFive`?
    ```javascript
    const addFive = require('./addFive')
    ```
    - false
    - true
    ```
    Answer: false
    Explanation: There's no need to add .js when importing files using the require syntax.
    ```