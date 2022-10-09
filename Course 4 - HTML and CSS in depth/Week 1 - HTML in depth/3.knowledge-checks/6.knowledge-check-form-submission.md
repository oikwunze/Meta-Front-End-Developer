# Knowledge check: Form submission

1. Which form attribute is used to specify the address to which the form data will be submitted to?
    - method
    - action
    - src
    ```
    Answer: action
    Explanation: The action attribute specifies the URL to submit the data to.
    ```

2. Which HTTP method will be used to send data for the following form?
    ```html
    <form>
        <button type="submit">Submit</button>
    </form>
    ```
    - PUT
    - GET
    - DELETE
    - POST
    ```
    Answer: GET
    Explanation: When the method attribute is not specified, GET is the default HTTP method used.
    ```

3. When using the HTTP POST method to submit form data, how is the data transmitted to the server? 
    - Via the address in the URL bar of the web browser    
    - Via the body of the HTTP request
    ```
    Answer: Via the body of the HTTP request
    Explanation: The form data is encoded as part of the request body.
    ```

4. Your web browser is currently at the address https://meta.com/profile. When the following form is submitted, what address will it submit to?
    ```html
    <form>
        <button type="submit">Submit</button>
    </form>
    ```
    - https://meta.com/login
    - https://meta.com
    - https://meta.com/profile
    ```
    Answer: https://meta.com/profile
    Explanation: When the action attribute is not specified, the form will default to the same URL, in this case, https://meta.com/profile.
    ```

5. Your web browser is currently at the address https://meta.com/profile. When the following form is submitted, what address will it submit to?
    ```html
    <form action="/login">
        <button type="submit">Submit</button>
    </form>
    ```
    - https://meta.com
    - https://meta.com/profile
    - https://meta.com/login
    - https://meta.com/profile/login
    ```
    Answer: https://meta.com/login
    Explanation: The action attribute starts with a forward slash so it is an absolute path. Therefore, /login is appended to https://meta.com.
    ```

6. Your web browser is currently at the address https://meta.com/profile. When the following form is submitted, what address will it submit to?
    ```html
    <form action="login">
        <button type="submit">Submit</button>
    </form>
    ```
    - https://meta.com/login
    - https://meta.com
    - https://meta.com/profile/login
    - https://meta.com/profile
    ```
    Answer: https://meta.com/profile/login
    Explanation: The action attribute does not start with a forward slash, so it is a relative path. Therefore, login is appended to the current url.
    ```

7. The HTTP DELETE method can be used for form submission.    
    - True
    - False
    ```
    Answer: False
    Explanation: Only HTTP GET and POST methods can be used for form submission.
    ```

8. There are several ways to secure transmitting form data to the web server. Which of the following will help secure the data? Select all that apply.
    - Send the data using HTTPS
    - Send the data using the HTTP GET method
    - Send the data using the HTTP POST method
    ```
    Answer: Send the data using HTTPS,
            Send the data using the HTTP POST method.
    Explanation: HTTPS will encrypt the data before sending,
                 The form data will be sent as part of the request body which means it will be more secure than HTTP GET but still obtainable by a malicious third party.
    ```