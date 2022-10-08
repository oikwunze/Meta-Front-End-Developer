# Knowledge check: Metadata

1. What are some of the main characteristics of meta tags? Select all that apply.
    - They are very important for SEO
    - They don’t have a visual representation in your pages
    - They define metadata about an HTML document, namely information about data
    - They are placed inside the `<body>` element
    ```
    Answer: They are very important for SEO,
            They don’t have a visual representation in your pages,
            They define metadata about an HTML document, namely information about data.
    Explanation: They define and influence how search engines rank your pages,
                 They will not be displayed on the page,
                 They are contextual information for browsers.
    ```

2. What are some of the most important Meta tags you should use for good SEO? Select all that apply.
    - Keywords
    - Image alt attributes
    - Title
    - Description
    ```
    Answer: Image alt attributes,
            Title,
            Description.
    Explanation: They help search engines understand what the images are about,
                 Search engines use them as clickable headlines and titles are given high weight in the ranking factor,
                 Although it is not a ranking factor, search engines tend to display descriptions as accompanied snippets.
    ```
    
3. Which meta tag is used to specify the character encoding for the HTML document?  
    - charset   
    - language  
    - lang   
    - content   
    ```
    Answer: charset
    Explanation: You should use charset to tell the browser the encoding used in your HTML pages, like UTF-8, for example.
    ```
    
4. Which meta tag and properties do you need to set to make your pages responsive in desktop and mobile viewports?
    -   ```html
        <meta name="viewport" content="width=window-width, initial-scale=1" />
        ```
    -   ```html
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        ```
    -   ```html
        <meta name="viewport" content =" width = device-width, initial-scale = 0" />
        ```
    -   ```html
        <meta name="viewport" content="height=device-height, initial-scale=1" />
        ```
    ```
    Answer: <meta name="viewport" content="width=device-width, initial-scale=1" />
    Explanation: It’ll establish a 1:1 relationship between CSS pixels and device-independent pixels, taking screen orientation into account.
    ```
    
5. How do you tell Google you don’t want to provide an automatic translation for your page if the user uses a different language?
    -   ```html
        <meta name="googlebot" content="english" />
        ```
    -   ```html
        <meta name="googlebot" content="notranslate" />
        ```
    -   ```html
        <meta name="language" content="english" />
        ```
    ```
    Answer: <meta name="googlebot" content="notranslate" />
    Explanation: This is how you instruct Google to skip an automatic translation.
    ```
    
6. Which of the following statements are true about HTTP-equiv tags? Select all that apply.
    - They are useful if you don’t have access to the server configuration 
    - They can simulate HTTP response headers
    - They are the recommended way to set HTTP response headers
    ```
    Answer: They are useful if you don’t have access to the server configuration,
            They can simulate HTTP response headers.
    Explanation: This is true if you are using a shared hosting where it’s up to the hosting company how to respond to the requests,
                 The server can attach http-equiv meta tags for additional instructions to the browser.
    ```