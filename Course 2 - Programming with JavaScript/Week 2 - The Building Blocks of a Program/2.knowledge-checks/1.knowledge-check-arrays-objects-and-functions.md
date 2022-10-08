# Knowledge check: Arrays, Objects and Functions

1. What data type is the variable  item ?
   ```javascript
   var item = [];
   ```
   - Boolean
   - Function
   - Array
   ```
   Answer: Array
   Explanation: []  is the array literal.
   ```

2. What is the value of  result  for the following code?
   ```javascript
   var result = "Hello".indexOf('l');
   ```
   - 1
   - 2
   - 3
   - 4
   ```
   Answer: 2
   Explanation: Indices start at 0. Therefore the first index of l is 2.
   ```

3. What is the length of the  clothes  array after this code runs?
   ```javascript
   var clothes = [];
   clothes.push('gray t-shirt');
   clothes.push('green scarf');
   clothes.pop();
   clothes.push('slippers');
   clothes.pop();
   clothes.push('boots');
   clothes.push('old jeans');
   ```
   - 1
   - 2
   - 3
   - 4
   ```
   Answer: 3
   Explanation: 5 items are added (push) to the array and 2 items are removed (pop). The result is 3 items in the array.
   ```

4. What value is printed out by the following code?
   ```javascript
   var food = [];
   food.push('Chocolate');
   food.push('Ice cream');
   food.push('Donut');
   
   console.log(food[1])
   ```
   - Chocolate
   - Ice cream
   - Donut
   ```
   Answer: Ice cream
   Explanation: Array indices start at 0, so the value at index 1 is Ice cream.
   ```

5. How many properties does the  dog  object have after the following code is run?
   ```javascript
    var dog = {
        color: "brown",
        height: 30,
        length: 60
    };
    
    dog["type"] = "corgi";
   ```
   - 1
   - 2
   - 3
   - 4
   ```
   Answer: 4
   Explanation: Additional properties can be assigned after an object is created. In this code, the object is created with three properties (color, height, length) and then a fourth property is assigned.
   ```

6. In the following function, the variables  a  and  b  are known as _______________.
   ```javascript
    function add(a, b) {
        return a + b;
    }
   ```
   - Parameters
   - Return Values
   ```
   Answer: Parameters
   Explanation: Parameters are the inputs to a function.
   ```

7. Which of the following are functions of the Math object?
   - `random()`
   - `round()`
   - `sqrt()`
   ```
   Answer: random(), round(), sqrt()
   Explanation: Math.random() returns a random value between 0.0 and 1.0.
                Math.round() rounds a decimal value up to the closest integer.
                Math.sqrt() returns the mathematical square root of a number.
   ```