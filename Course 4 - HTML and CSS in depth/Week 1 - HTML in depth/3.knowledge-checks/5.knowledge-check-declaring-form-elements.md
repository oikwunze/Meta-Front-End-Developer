# Knowledge check: Declaring form elements

1. You are building a calendar web application; which of the following input types can be used? Select all that apply.
    -   ```html
        <input type="week">
        ```
    -   ```html
        <input type="date">
        ```
    -   ```html
        <input type="year">
        ```
    -   ```html
        <input type="month">
        ```
    ```
    Answer: <input type="week">
            <input type="date">
            <input type="month">
    Explanation: These are valid input values for type
    ```

2. You want to define a dropdown of selectable options. However, you also want users to be able to input their responses as well. Which of the following is the most suitable form element to wrap available options?
    - datalist
    - fieldset
    - select
    - output
    ```
    Answer: datalist
    Explanation: Using datalist, you provide suggestions that users may or may not select. With the input filed, they are free to add their response.
    ```
    
3. For the following code block, what is the most suitable input type that will ensure that only a single option is selected?
    ```html
    <form>
        <input type="----" id="alpha" name="letters" value="Alpha">
        <label for="html">Alpha</label><br>
        <input type="----" id="beta" name="letters" value="Beta">
        <label for="css">Beta</label><br>
        <input type="----" id="gamma" name="letters" value="Gamma">
        <label for="javascript">Gamma</label>
    </form>
    ```
    - radio
    - checkbox
    - button
    - submit
    ```
    Answer: radio
    Explanation: Radio is used to select a single option.
    ```
    
4. When defining a form, which element is almost always defined?
    -   ```html
        <legend>
        ```
    -   ```html
        <output>
        ```
    -   ```html
        <option>
        ```
    -   ```html
        <input>
        ```
    ```
    Answer: <input>
    Explanation: In almost any form, some element is required to get user input.
    ```
    
5. True or false. The following form element will clear the form validation errors.
    ```html
    <input type="reset">
    ```
    - True
    - False
    ```
    Answer: False
    Explanation: The reset value will reset the form contents to default values.
    ```
    
6. A developer has added the following input element to a HTML form. What client-side validation is applied? Select all that apply.
    ```html
    <input type="email" required minlength="4">
    ```
    - The user input must be in an email address format
    - The user must provide a value to the input field
    - The maximum length of the user input must be 1024 characters
    - The minimum length of the user input must be 4 chararacters.
    ```
    Answer: The user input must be in an email address format,
            The user must provide a value to the input field,
            The minimum length of the user input must be 4 chararacters.
    Explanation: The type attribute is set to email which will validate that the input is a valid email address format,
                 The required attribute will ensure that the user provides a value to the input field,
                 The minlength attribute is applied to the element and its value is set to 4.
    ```