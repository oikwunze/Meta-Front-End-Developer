# Module quiz: Programming Paradigms

1. Variables declared using  'let' can be reassigned.
   - true
   - false
   ```
   Answer: true
   Explanation: Variables declared using  let cannot be redeclared but can be reassigned.
   ```

2. What will print out when the following code runs?
   ```javascript
    function scopeTest() {
        var y = 44;
        
        console.log(x);
    }

    var x = 33;
    scopeTest();
   ```
   - null
   - undefined
   - 33
   - 44
   ```
   Answer: 33
   Explanation: x is defined in the global scope before the console.log is called.
   ```

3. What will print out when the following code runs?
   ```javascript
    class Cake {
        constructor(lyr) {
            this.layers = lyr;
        }

        getLayers() {
            return this.layers;
        }
    }

    class WeddingCake extends Cake {
        constructor() {
            super(2);
        }

        getLayers() {
            return super.getLayers() * 5;
        }
    }

    var result = new WeddingCake();
    console.log(result.getLayers());
   ```
   - 0
   - 2
   - 5
   - 10
   ```
   Answer: 10
   Explanation: The WeddingCake constructor stores the amount of layers as 2. However, WeddingCake overrides the  getLayers() function to multiple the result by 5. Therefore, 10 is outcome.
   ```

4. What will print out when the following code runs?
   ```javascript
    class Animal {

    }

    class Dog extends Animal {
        constructor() {
            this.noise = "bark";
        }

        makeNoise() {
          return this.noise;
        }
    }

    class Wolf extends Dog {
        constructor() {
            super();
            this.noise = "growl";
        }
    }

    var result = new Wolf();
    console.log(result.makeNoise());
   ```
   - bark
   - growl
   - undefined
   ```
   Answer: growl
   Explanation: The noise property is overridden when the Wolf constructor is called.
   ```

5. Consider this code snippet:
   ```javascript
   const [a, b] = [1,2,3,4]
   ```
   What is the value of b?
   - undefined
   - 1
   - 2
   - [1,2,3,4]
   ```
   Answer: 2
   Explanation: The value b is assigned the second item value of the array through de-structuring.
   ```

6. What value will be printed out when the following code runs?
   ```javascript
    function count(...food) {
        console.log(food.length)
    }

    count("Burgers", "Fries", null);
   ```
   - 2
   - 3
   - "Burgers", "Fries", null
   - "Burgers", "Fries", undefined
   ```
   Answer: 3
   Explanation: The rest operator ...  allows a function to accept an indefinite amount of parameters. The length property of the food variable will return 3 because there were 3 parameters passed to the method call. The value  null  counts as a parameter. Therefore, 3 will be printed out.
   ```

7. Which of the following are JavaScript methods for querying the Document Object Model? Select all that apply.
   - getElementsByClassName
   - getElementsById
   - getElementById
   - getElementByClassName
   - queryAllSelectors
   - querySelector
   ```
   Answer: getElementsByClassName, getElementById, querySelector
   Explanation: getElementsByClassName will return all elements with the specified class.
                getElementById will return the first matching element with the specified ID.
                querySelector will return all elements matching the specified CSS selector.
   ```

8. Which of the following methods convert a JavaScript object to and from a JSON string?
   - JSON.parse
   - JSON.stringify
   - JSON.fromString
   - JSON.toString
   ```
   Answer: JSON.parse, JSON.stringify
   Explanation: JSON.parse will convert a JSON string to a JavaScript object.
            JSON.stringify will convert a JavaScript object to a JSON string.
   ```

9. What will be the result of running this code?
   ```javascript
    const letter = "a"
    letter = "b"
   ```
   - Uncaught TypeError: Assignment to constant variable   
   - b
   - a
   - Uncaught SyntaxError: Invalid or unexpected token
   ```
   Answer: Uncaught TypeError: Assignment to constant variable   
   Explanation: You cannot reassign a variable assigned using the const keyword.
   ```

10. What is a constructor?
    - A function that is called to create an instance of an object.  
    - An instance of a class.
    - A specific object that has been created using the class name.
    - An object literal  
    ```
    Answer: A function that is called to create an instance of an object.
    Explanation: A constructor function details how an object will be built using the keyword new.
    ```