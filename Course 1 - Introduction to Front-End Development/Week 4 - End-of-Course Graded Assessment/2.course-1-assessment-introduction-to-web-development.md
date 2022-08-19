# Course 1 Assessment: Introduction to Web Development

1. The code that runs on the web server is commonly known as _____________.
   - Hardware
   - Software
   ```
   Answer: Software
   Explanation: The code is the software and the physical components are the hardware.
   ```

2. In the web browser, what is the role of JavaScript?
   - To describe the content of the web page
   - To provide interactivity and data processing
   - To describe the visual look and layout
   ```
   Answer: To provide interactivity and data processing
   Explanation: JavaScript allows developers to process user interaction and data.
   ```

3. Which protocol is used to transfer HTML documents to the web browser when browsing the World Wide Web?
   - HyperText Transfer Protocol (HTTP)
   - File Transfer Protocol (FTP)
   - Dynamic Host Configuration Protocol (DHCP)
   ```
   Answer: HyperText Transfer Protocol (HTTP)
   Explanation: HTTP and HTTPS are used to transfer HTML documents when browsing the World Wide Web.
   ```

4. What will display in the web browser tab for the following HTML document?
   ```
    <!DOCTYPE html>
    <html>
    <head>
        <title>Little Lemon</title>
    </head>
    <body>
        <p>Our Menu</p>
    </body>
    </html>
   ```
   - Little Lemon
   - Our Menu
   ```
   Answer: Little Lemon
   Explanation: The content inside the title element will display as the web page name in the browser tab.
   ```

5. Which HTML tag is used to link to other HTML documents?
   - The image tag `<img>`
   - The anchor tag `<a>`
   - The link tag `<link>`
   ```
   Answer: The anchor tag `<a>`
   Explanation: 
   ```

6. In the following CSS rule, what part of the rule is represented by div?
   ```
    div {
        width: 50%;
    }
   ```
   - Property
   - Selector
   - Attribute
   ```
   Answer: Selector
   Explanation: The CSS selector is the part of the rule represented by div.
   ```

7. What is the padding-box width for the following CSS rule?
   ```
    div {
        width: 10px;
        padding: 5px;
        margin-left: 10px;
        margin-right: 10px;
    }
   ```
   - 10 pixels
   - 15 pixels
   - 20 pixels
   - 40 pixels
   ```
   Answer: 20 pixels
   Explanation: The padding-box width is the content width + padding width.
   ```

8. True or False. The libraries which our application depends on can be combined into a single file using code bundling.
   - True
   - False
   ```
   Answer: True
   Explanation: Code bundling helps to optimise the delivery of libraries to the web browser.
   ```

9. True or False. The following div element will fill 6 columns of the Bootstrap grid on desktop devices.
   ```
    <div class="col-12 col-lg-6">
   
    </div>
   ```
   - True
   - False
   ```
   Answer: True
   Explanation: 
   ```

10. React stores a representation of the browser DOM in memory. What is this representation called?
    - The Virtual DOM
    - The Memory DOM
    - The Copy DOM
   ```
   Answer: The Virtual DOM
   Explanation: The virtual DOM is used to represent the browser DOM in memory.
   ```

11. True or False. In the request/response cycle, the web browser sends the request.
    - True
    - False
    ```
    Answer: True
    Explanation: The web browser sends a request and receives a response from the web server.
    ```

12. In the web browser, what is the role of CSS?
    - To describe the content of the web page
    - To provide interactivity and data processing
    - To describe the visual look and layout
    ```
    Answer: To describe the visual look and layout
    Explanation: CSS describes how the content is presented in the web browser.
    ```

13. What type of selector is used for the following CSS rule?
    ```
     #header {
        width: 50%;
     }
    ```
    - ID selector
    - Element selector
    - Class selector
    ```
    Answer: ID selector
    Explanation: The ID selector is prefixed with a # character.
    ```

14. A responsive web page adapts its layout to provide the best user experience based on a user's device. The point at which it adapts is known as the _________________.
    - Design Point
    - Breakpoint
    - Box Point
    ```
    Answer: Breakpoint
    Explanation: The responsive breakpoint is the point at which the web page will adapt its layout to provide the best user experience.
    ```

15. In the following HTML, Bootstrap grid CSS class col-xl-6 is applied to the div element. What is the xl part of the class known as?
    ```
    <div class="col-xl-6">

    </div>
    ```
    - Infix
    - Modifier
    - Component
    ```
    Answer: Infix
    Explanation: Infixes represent the responsive breakpoints in the Bootstrap grid.
    ```

16. React applications are built using reusable pieces of code. What are these pieces known as?
    - Elements
    - Components
    - Snippets
    ```
    Answer: Components
    Explanation: React applications are built using reusable pieces of code called Components.
    ```

17. In the web browser, what is the role of HTML?
    - To describe the content of the web page
    - To provide interactivity and data processing
    - To describe the visual look and layout
    ```
    Answer: To describe the content of the web page
    Explanation: HTML describes the content of the web page.
    ```

18. Which of the following issues does UDP solve? Select all that apply.
    - Out of order data
    - Corrupted data
    - Lost data
    ```
    Answer: Corrupted data
    Explanation: UDP prevents data corruption but data can still arrive out of order or not arrive at all.
    ```

19. Which of the following image elements is correct?
    ```
    <image src="dog.png">
    <img href="cat.png">
    <img src="mouse.png">
    ```
    - `<image src="dog.png">`
    - `<img href="cat.png">`
    - `<img src="mouse.png">`
    ```
    Answer: <img src="mouse.png">
    Explanation: The image element is defined using the img tag and src attribute.
    ```

20. Which of the following is TCP suitable for transmitting? Select all that apply.
    - Text
    - Video Streaming
    - Voice Calls
    - Images
    ```
    Answer: Text, Images
    Explanation: TCP's reliable delivery is suitable for text content such as HTML documents.
                 TCP's reliable delivery is suitable for image content such as photos.
    ```

21. What type of selector is used for the following CSS rule?
    ```
    .header {
        width: 50%;
    }
    ```
    - ID selector
    - Element selector
    - Class selector
    ```
    Answer: Class selector
    Explanation: The class selector is prefixed with a . character.
    ```

22. What is the margin-box width for the following CSS rule?
    ```
    div {
        width: 20px;
        padding-left: 10px;
        padding-right: 10px;
        margin-left: 10px;
        margin-right: 10px;
    }
    ```
    - 20 pixels
    - 40 pixels
    - 60 pixels
    ```
    Answer: 60 pixels
    Explanation: The margin-box width is the content width + padding width + border width + margin width.
    ```

23. In the following HTML, the btn-primary CSS class is applied to the button element. What is this CSS class known as in Bootstrap?
    ```
    <button class="btn btn-primary">Submit</button>
    ```
    - Infix
    - Modifier
    - Component
    ```
    Answer: Modifier
    Explanation: Modifiers adjust the style of Bootstrap components.
    ```

24. In the client/server model, is the web browser a client or a server?
    - Client
    - Server
    ```
    Answer: Client
    Explanation: In the client/server model, the web browser is a client.
    ```

25. True or False. Little Lemon will display in the web browser's main window.
    ```
    <!DOCTYPE html>
    <html>
    <head>
        <title>Little Lemon</title>
    </head>
    <body>
        <p>Our Menu</p>
    </body>
    </html>
    ```
    - True
    - False
    ```
    Answer: False
    Explanation: The content inside the body element displays on the web page.
    ```

26. A hyperlink is used to link to other documents and content. Which of the following is the correct way to use a hyperlink?
    ```
    <anchor src="dog.htm">My Dog</anchor>
    <a href="cat.html">My Cat</a>
    <a src="mouse.html">My Mouse</a>
    ```
    - `<anchor src="dog.htm">`
    - `<a href="cat.html">`
    - `<a src="mouse.html">`
    ```
    Answer: <a href="cat.html">
    Explanation: A hyperlink is defined using the anchor (a) tag and the href attribute.
    ```

27. True or False. Dynamic content is generated by an Application Server.
    - True
    - False
    ```
    Answer: True
    Explanation: Static content are files sent directly by the web server whereas dynamic content is generated by an application server.
    ```