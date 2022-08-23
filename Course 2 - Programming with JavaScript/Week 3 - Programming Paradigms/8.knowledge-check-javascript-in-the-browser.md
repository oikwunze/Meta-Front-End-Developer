# Knowledge Check: JavaScript in the browser

1. In the following code, the  type  attribute can be omitted.
   ```html
    <script type="text/javascript">
        //Comment
    </script>
   ```
   - true
   - false
   ```
   Answer: true
   Explanation: type="text/javascript" is the implicit value of the script tag when it is omitted.
   ```

2. What does the  document  variable return in JavaScript?
   ```javascript
    console.log(document);
   ```
   - The entire body tag of the webpage in the browser's memory, as a JavaScript object.
   - The entire webpage in the browser's memory, as a JavaScript object.
   - The HTML code of the downloaded webpage, as a JavaScript string.
   ```
   Answer: The entire webpage in the browser's memory, as a JavaScript object.
   Explanation: The  document  object holds the entire structure of the active webpage in the browser's memory.
   ```

3. What does the following function return?
   ```javascript
    getElementById('main-heading')
   ```
   - It doesn't return anything.
   - All elements that have the  class  attribute with a value  main-heading
   - The first element that has the  id  attribute with a value  main-heading
   - The last element that has the  id  attribute with a value  main-heading
   ```
   Answer: The first element that has the id attribute with a value main-heading
   Explanation: The first element with the attribute  id="main-header" is returned.
   ```

4. After the following code is run, what will happen when the user clicks on a  p  element in the browser?
   ```javascript
    document.querySelector('h1').addEventListener('click', function() { 
        console.log('clicked');
    });
   ```
   - 'clicked' is printed to the console log.
   - Nothing.
   ```
   Answer: Nothing.
   Explanation: The click event listener is registered on h1 elements.
   ```

5. What will be printed when the following code runs?
   ```javascript
    var result = {
        value: 7
    };
    console.log(JSON.stringify(result));
   ```
   - {}
   - {value: 7}
   - {"value": 7}
   ```
   Answer: {"value": 7}
   Explanation: JSON.stringify will turn the object into a string representation.The property name is wrapped in double quotes in the representation.
   ```