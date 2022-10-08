# Module Quiz: Introduction to HTML and CSS

1. Which two elements should be added to the html element to make the structure of an HTML document?
   ```
   <!DOCTYPE html>
   <html>
   </html>
   ```
   - `<body>`
   - `<p>`
   - `<head>`
   - `<div>`
   ```
   Answer: <body>, <head>
   Explanation: The body element is added to the html element.
                The head element is added to the html element.
   ```

2. When using the anchor tag `<a>`, which attribute determines where the hyperlink links to? 
   - link
   - src
   - href
   ```
   Answer: href
   Explanation: The href attribute specifies where the hyperlink links to. <a href="index.html">Link</a>
   ```

3. When adding an image to a web page, which of the following is the correct HTML tag?
   - `<link>`
   - `<image>`
   - `<img>`
   ```
   Answer: <img>
   Explanation: The img tag adds an image to a web page. <img src="image.jpg">
   ```

4. How many columns exist on the following HTML table?
   ```
    <table>
        <tr>
            <td>Falafel</td>
            <td>$10.00</td>
        </tr>
        <tr>
            <td>Pasta Salad</td>
            <td>$12.00</td>
        </tr>
        <tr>
            <td>Dessert</td>
            <td>$8.00</td>
        </tr>
    </table>
   ```
   - 1 column
   - 2 columns
   - 3 columns
   ```
   Answer: 2 columns
   Explanation: There are 2 columns and 3 rows in this HTML table.
   ```

5. When an HTML form is submitted to a web server, which HTTP methods can be used? Select all that apply.
   - POST
   - PUT
   - DELETE
   - GET
   ```
   Answer: POST, GET
   Explanation: A POST method can be used for the form submission. <form method="post">
                A GET method can be used for the form submission. <form method="get">
   ```

6. For the following HTML code, which CSS selectors can be used to select the h1 element? Select all that apply.
   ```
   <h1 id="title">Welcome</h1>
   ```
   - Element Selector
   - ID selector
   - Class Selector
   - Descendant Selector
   ```
   Answer: Element Selector, ID selector
   Explanation: The element selector can be used to select the h1 element based on its h1 tag.
                h1 {

                }
                The ID selector can be used to select the h1 element based on its ID attribute.
                #title {

                }
   ```

7. In the following CSS code, what is the color: purple; part known as?
   ```
    h1 {
        color: purple;
    }
   ```
   - CSS Property
   - CSS Selector
   - CSS Attribute
   - CSS Rule
   ```
   Answer: CSS Property
   Explanation: The CSS properties are defined inside the curly brackets in a CSS rule.
   ```

8. Based on the following CSS, what will be the margin-box width for div elements?
   ```
    div {
        width: 10px;
        padding-left: 5px;
        padding-right: 5px;
        margin-left: 5px;
        margin-right: 5px;
    }
   ```
   - 10 pixels
   - 20 pixels
   - 30 pixels
   - 40 pixels
   ```
   Answer: 30 pixels
   Explanation: The margin-box width = content width + padding width + border width + margin width. In this scenario, the margin-box width is 30 pixels.
   ```

9. True or false. In document flow, block-level elements always start on a new line.
   - True
   - False
   ```
   Answer: True
   Explanation: Block-level elements always start on a new line.
   ```

10. Based on the following CSS code, how will the text be aligned for the p element?
    ```
     p {
        text-align: justify;
     }
    ```
    - The text will be aligned to the left of the `p` element.
    - The text will be aligned to the right of the `p` element.
    - The text will be centered inside the `p` element.
    - The text will be spread out so that every line of the text has the same width within the `p` element.
    ```
    Answer: The text will be spread out so that every line of the text has the same width within the p element.
    Explanation: The justify value will spread out the text within the p element so that every line has the same width.
    ```