# Module quiz: HTML deep dive

1. You are including a blog post on your web page. You decide to place the content inside an `<article>` tag. What are the advantages of using an `<article>` tag instead of a `<div>` tag in the scenario? Select all that apply.
    - It allows search engines to better rank your pages.
    - It allows the browser to render the element faster.
    - It better describes the meaning of the element to accessibility software
    ```
    Answer: It allows search engines to better rank your pages,
            It better describes the meaning of the element to accessibility software.
    Explanation: Using semantic tags helps search engines understand the content of your web page better,
                 Semantic tags help accessibility software understand the meaning of the HTML document.
    ```
    
2. Which tag is most suited to describe the navigation menu of your web page?
    - `<div>`
    - `<main>`
    - `<nav>`
    ```
    Answer: <nav>
    Explanation: The nav element is most suited to describe the navigation section of your HTML document.
    ```
    
3. Which of the following meta tags are recommended for modern web pages? Select all that apply.
    - Keywords
    - Author
    - Viewport
    - Description
    ```
    Answer: Author,
            Viewport,
            Description.
    Explanation: The author meta tag informs search engines of who created the web page,
                 The viewport meta tag helps inform mobile devices how the web page’s viewport should display on the device,
                 Description is often used by search engines to display a summary of the web page.
    ```
    
4. Your web page's web address is appearing incorrectly on social media platforms. Which of the following Open Graph Protocol tags should be added to your web page to fix this?
    - URL
    - Title
    - Description
    ```
    Answer: URL
    Explanation: The URL OGP meta tag will define the permanent web address of the web page.
    ```
    
5. What is the benefit of adding the required attribute to an input element?
    - It will ensure that the form data submitted is valid.
    - It will ensure that the user provides a value to the form field.
    - It will ensure that the form data is sent securely.
    ```
    Answer: It will ensure that the user provides a value to the form field.
    Explanation: The web browser will ensure that the user has provided a value when the form is submitted.
    ```
    
6. You've added a form element to your HTML document and set the value of the method attribute to POST. What is the other valid HTTP method for form submission?
    - DELETE
    - GET
    - PUT
    ```
    Answer: GET
    Explanation: GET is the default HTTP method when the form attribute is not specified. It can be explicitly specified using the method attribute, for example: method="get".
    ```
    
7. Your web browser is currently at the URL https://meta.com/hello

    What address will the following form submit to?
    ```html
    <form action="/login">
    ```
    - https://meta.com/login
    - https://meta.com/
    - https://meta.com/hello/login
    - https://meta.com/hello
    ```
    Answer: https://meta.com/login
    Explanation: The absolute path will be combined with the domain of the website.
    ```
    
8. You are creating a landing page for a local business that includes a audio player. The specification is that the audio automatically plays and can be paused. What are the correct statements for this implementation? Select all that apply.
    - Set several source elements with distinct types
    - Setting the autoplay attribute
    - Setting the controls attribute
    - Setting the loop attribute
    ```
    Answer: Set several source elements with distinct types,
            Setting the autoplay attribute,
            Setting the controls attribute.
    Explanation: This allows the browser to pick the audio format that it supports,
                 The audio will automatically start playing as soon as possible,
                 The controls attribute will allow the user to pause the audio.
    ```
    
9. Which of the below statements are best practices when adding iframes to your pages? Select all that apply.
    - Skip the allow attribute
    - Add a title attribute
    - Use the lazy loading attribute
    - Use the sandbox attribute to define which privileges are granted to the iframe
    ```
    Answer: Add a title attribute,
            Use the lazy loading attribute,
            Use the sandbox attribute to define which privileges are granted to the iframe.
    Explanation: It gives accessibility software more context for what the iframe is about,
                 This prevents your iframes from slowing down your pages,
                 This enables you to tailor the needed permissions for the iframe and avoid unexpected behavior.
    ```
    
10. Which of the following are possible using the canvas HTML element?
    - Manipulating HTML elements
    - 2D graphics rendering
    - 3D graphics rendering
    ```
    Answer: 2D graphics rendering,
            3D graphics rendering.
    Explanation: Canvas supports 2D graphics rendering,
                 Canvas supports 3D graphics rendering.
    ```
    
11. Which of the following HTTP methods can be used to submit a HTML form? Select all that apply.
    - GET
    - DELETE
    - POST
    - PUT
    ```
    Answer: GET, POST
    Explanation: GET is the default HTTP method when the form attribute is not specified. It can be explicitly specified using the method attribute, for example: method="get",
                 POST can be used by explicitly specifying it, using the method attribute, for example: method="get".
    ```
    
12. Your web browser is currently at the URL https://meta.com/hello

    What address will the following form submit to?
    ```html
    <form action="login">
    ```
    - https://meta.com/hello/login
    - https://meta.com/
    - https://meta.com/login
    - https://meta.com/hello
    ```
    Answer: https://meta.com/hello/login
    Explanation: The relative path will be appended to the current URL.
    ```

13. You've been asked to embed another web page within your web page using an iframe. Which of the following tasks should be done to maintain security?
    - Validate that the web page is a trusted source
    - Apply the allow attribute to the iframe
    - Apply sandboxing to the iframe
    ```
    Answer: Validate that the web page is a trusted source,
            Apply the allow attribute to the iframe,
            Apply sandboxing to the iframe.
    Explanation: You should not embed sources which you do not trust,
                 The allow attribute will limit the web browser features that the iframe can access,
                 Sandboxing will limit the capabilities of the iframe.
    ```

14. What are the main advantages of using the canvas element to draw content on your pages?
    - It requires less code than HTML sectional tags
    - It provides a good experience for rendering HTML elements.
    - It’s better for thousands of objects and precise manipulation
    - It’s well suited for graphic intensive games.
    ```
    Answer: It’s better for thousands of objects and precise manipulation,
            It’s well suited for graphic intensive games.
    Explanation: HTML sectional tags are not suited for that purpose and do not scale that well,
                 The canvas eleement is optimized for highly interactive 2D and 3D rendering.
    ```

15. What are the tags that define the basic structure of an HTML page and which order is semantically correct?
    - `<header>`, `<details>`, `<footer>`
    - `<header>`, `<body>`, `<main>`
    - `<h1>`, `<body>`, `<footer>`
    - `<header>`, `<main>`, `<footer>`
    ```
    Answer: <header>, <main>, <footer>
    Explanation: These are the correct tags and order. 
    ```

16. You are tasked with building a login form for a website. The project manager has asked what type of validation you recommend implementing for both security and a good user experience: client-side validation or server-side validation. Which do you recommend?
    - Recommend both client-side and server-side validation
    - Recommend only client-side validation
    - Recommend only server-side validation
    ```
    Answer: Recommend both client-side and server-side validation
    Explanation: Using both helps provide both good user experience and ensure security and integrity of data.
    ```