# Knowledge check: Debugging

1. In a CSS selector such as 'div .alpha>p', what will be the element or class that will be read first by the CSS compiler?
    - div
    - .alpha
    - p
    - the entire selector is read and interpreted
    ```
    Answer: p
    Explanation: The CSS compiler starts reading from the right.
    ```

2. What is the default behavior of CSS when it encounters an incomplete rule with missing values?
    - It will stop further compilation altogether after reporting the error
    - It will ignore the specific property-value pair and continue compilation
    - It will stop further compilation altogether without reporting the error
    - It will set default values for the property and continue compilation
    ```
    Answer: It will ignore the specific property-value pair and continue compilation
    Explanation: CSS continues execution ignoring the specific property-value pair.
    ```

3. A styling issue is occurring with an element on your web page. You can  skip the missing delimiter for the last property but it is not a good practice. 
    - True
    - False
    ```
    Answer: True
    Explanation: The missing delimiter can be skipped for the last property but it is not a good practice.
    ```

4. Which of the following are ideal coding practices to reduce errors in CSS? Choose all that apply.
    - Shorthand properties
    - Overspecificity
    - Universal selectors
    ```
    Answer: Shorthand properties,
            Universal selectors.
    Explanation: Shorthand properties help in writing clean code with less errors,
                 Universal selectors help perform browser resets.

    ```

5. Modernizer, reset.css and normalize.css are types of: ​
    - CSS libraries for help in browser compatibility 
    - CSS libraries for live previews 
    - CSS linters 
    - CSS validators
    ```
    Answer: CSS libraries for help in browser compatibility
    Explanation: These are forms of stylesheets that help reset and normalize browser settings for CSS.
    ```

6. Which of the following types is the stylesheet created by the browser to render CSS?
    - Author stylesheet
    - User stylesheet
    - User-agent stylesheet
    - Syntactically Awesome stylesheet
    ```
    Answer: User-agent stylesheet
    Explanation: These are default stylesheets for browsers.
    ```