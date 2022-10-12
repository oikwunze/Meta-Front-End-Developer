# Knowledge check: CSS selectors

1. While specifying the ideal logical order of the four link-states added as rules in CSS code, what pseudo-class will you add second?
    - Hover
    - Active
    - Link
    - Visited
    ```
    Answer: Visited
    Explanation: Visited should be placed in the second position.
    ```

2. For a given `<div>` tag and `<p>` tag, which of the following will be the correct syntax for use of adjacent sibling combinator?
    - div p
    - div ~ p
    - div > p
    - div + p
    ```
    Answer: div + p
    Explanation: This is the syntax for an adjacent sibling combinator.
    ```

3. Calculate the specificity of the following selector: `ul#alpha li.visited`
    - 103 
    - 112
    - 13
    - 22
    ```
    Answer: 112
    Explanation: #alpha ID selector will add 100, .visited class selector will add 10. ul and li element selectors will add 2. 100 + 10 + 2 = 112.
    ```

4. `nth-last-of-type` is a pseudo element that matches the last sibling from a list of siblings of specific type inside a parent.
    - TRUE
    - FALSE
    ```
    Answer: TRUE
    Explanation: For example, div: nth-last-of-type(2) will target second last div element inside some parent.
    ```

5. For the given HTML code, irrespective of the effect on other list elements, which of the following will be a valid selector to ensure “Little” is coloured “red”?  Select all that apply.
    ```html
    <body>
        <ul>
            <li class="red">Little</li>
            <li>Lemon</li>
            <li>Restaurant</li>
        </ul>
    </body>
    ```
    -   ```css
        #red { color: red; }
        ```
    -   ```css
        .red{ color: red; }
        ```
    -   ```css
        li { color: red; }
        ```
    -   ```css
        li > red { color: red; }
        ```
    -   ```css
        ul > .red{ color: red; }
        ```
    ```
    Answer: .red{ color: red; }
            li { color: red; }
            ul > .red{ color: red; }
    Explanation: .red{ color: red; } will apply to class .red directly,
                 li { color: red; } will apply to all list elements which also includes one that has the text “Little”,
                 ul > .red{ color: red; } will apply to 'red' class descendant of <ul> tag.
    ```

6. Which of the selectors below will select `<div>` tags with a title attribute in CSS?
    - div.title
    - div#title
    - #title
    - div[title]
    ```
    Answer: div[title]
    Explanation: This will address title attribute inside the div tag.
    ```