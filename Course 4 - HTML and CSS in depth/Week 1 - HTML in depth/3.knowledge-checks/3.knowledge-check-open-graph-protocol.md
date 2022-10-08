# Knowledge check: Open Graph Protocol

1. How does the Open Graph Protocol (OGP) name the meta tags?
    - using id attribute
    - using name attribute
    - using property attribute
    ```
    Answer: using property attribute
    Explanation: Naming OGP meta tags inside the property attribute won't enable social media to properly identify OGP properties.
    ```

2. Each property in the Open Graph Protocol starts with 'ogp:' 
    - True
    - False
    ```
    Answer: False
    Explanation: The property value starts with 'og:' instead of 'ogp:'
    ```
    
3. Which property should be used to define a URL of an image that must display when the website is shared on social media?
    - src
    - og:image
    - href
    - og:url
    ```
    Answer: og:image
    Explanation: The image property declares the url of the image that must be shared.
    ```
    
4. Which property is used to define the language of the content being shared?
    - og:locale
    - og:lang
    - og:type
    - og:description
    ```
    Answer: og:locale
    Explanation: The locale contains abbreviated information regarding the language.
    ```
    
5. The type property defines the type of the content. For example:
    ```html
    <meta property="og:type" content="website" />
    ```
    Which property would mention the name of the website?
    - og:title
    - og:description
    - og:name
    - og:site_name
    ```
    Answer: og:site_name
    Explanation: The name of the website is mentioned through this property.
    ```
    
6. When sharing your blog post, which property would you use to provide the link to the actual post?
    - og:url
    - og:description
    - og: image
    ```
    Answer: og:url
    Explanation: The post url is defined with the og:url property.
    ```