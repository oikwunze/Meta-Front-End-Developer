# Knowledge check: Introduction to Functional Programming

1. What will print out when the following code runs?
   ```javascript
    var globalVar = 77;
    
    function scopeTest() {
        var localVar = 88;
    }
    
    console.log(localVar);
   ```
   - 77
   - 88
   - null
   - undefined
   ```
   Answer: undefined
   Explanation: localVar is scoped to the function so therefore it is undefined in the global scope.
   ```

2. Variables declared using const can be reassigned.
   - true
   - false
   ```
   Answer: false
   Explanation: Variables declared using const cannot be redeclared or reassigned.
   ```

3. When a function calls itself, this is known as _____________.
   - Recursion
   - Looping
   - Higher-order Function
   ```
   Answer: Recursion
   Explanation: Recursion is when a function calls itself.
   ```

4. What will print out when the following code runs?
   ```javascript
    function meal(animal) {
        animal.food = animal.food + 10;
    }
    
    var dog = {
        food: 10
    };
    meal(dog);
    meal(dog);

    console.log(dog.food);
   ```
   - 10
   - 20
   - 30
   - 40
   ```
   Answer: 30
   Explanation: The food value starts at 10. The meal function is called twice which adds 10 to the food value each time. Therefore, 30 is printed.
   ```

5. What value will print out when the following code runs?
   ```javascript
    function two() {
        return 2;
    }

    function one() {
        return 1;
    }

    function calculate(initialValue, incrementValue) {
        return initialValue() + incrementValue() + incrementValue();
    }

    console.log(calculate(two, one));
   ```
   - 1
   - 2
   - 3
   - 4
   ```
   Answer: 4
   Explanation: The two function is passed as the first parameter to the calculate function and the one function is passed as the second parameter. Therefore, when the calculate  function runs, it will call two() + one() + one(). The result is then 4.
   ```