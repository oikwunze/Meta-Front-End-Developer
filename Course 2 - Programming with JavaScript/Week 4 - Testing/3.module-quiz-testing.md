# Module quiz: Testing

1. What is unit testing?
   - Unit testing revolves around the idea of having separate, small pieces of code that are easy to test.
   - Unit testing tries to imitate how a user might interact with your app.
   - Unit testing is testing how parts of your system interact with other parts of our system.
   ```
   Answer: Unit testing revolves around the idea of having separate, small pieces of code that are easy to test.
   Explanation: Unit testing is focused on testing small, specific "units" of code.
   ```

2. When the following test executes, what will the test result be?
   ```javascript
    function subtract(a, b) {
        return a - b;
    }

    expect(subtract(10, 4)).toBe(6);
   ```
   - Success.
   - Fail.
   ```
   Answer: Success.
   Explanation: The function will return  6  and the expectation will succeed.
   ```

3. What is End-to-end testing (e2e)?
   - End-to-end testing revolves around the idea of having separate, small pieces of code that are easy to test.
   - End-to-end testing tries to imitate how a user might interact with your application.
   - End-to-end testing is testing how parts of your system interact with other parts of our system.
   ```
   Answer: End-to-end testing tries to imitate how a user might interact with your application.
   Explanation: End-to-end testing mimics how users will interact with your application.
   ```

4. What is Code Coverage?
   - A measure of what percentage of your code has failing tests
   - A measure of what percentage of your code is covered by tests.
   ```
   Answer: A measure of what percentage of your code is covered by tests.
   Explanation: Code coverage shows what percentage of your code is covered by tests and where more testing may be required.
   ```

5. Node.js can be used to build web application backends.
   - true
   - false
   ```
   Answer: true
   Explanation: Node.js is a popular JavaScript runtime for building backends.
   ```

6. When the following test executes, what will the test result be?
   ```javascript
    function multiply(a, b) {
        return a;
    }

    expect(multiply(2, 2)).toBe(4);
   ```
   - Success.
   - Fail.
   ```
   Answer: Fail.
   Explanation: The function will fail because it has a bug which returns only the  a  variable. Therefore,  2  is returned from the function which does not match the expectation.
   ```

7. Which command is used to install a Node package?
   - package
   - pkg
   - node
   - npm
   ```
   Answer: npm
   Explanation: The Node Package Manager (npm) is used to install packages.
   ```

8. Which file lists all your application's required node packages?
   - node.json
   - npm.json
   - package.json
   - pkg.json
   ```
   Answer: package.json
   Explanation: package.json will store all the dependencies required for application.
   ```

9. A person on your team wants to help with testing. However, they are not a developer and cannot write code. What type of testing is most suited for them?
   - Unit testing
   - Integration testing
   - End-to-end testing
   ```
   Answer: End-to-end testing
   Explanation: End-to-end tests can be performed in a web browser without writing code. This is because the tests mimic how a user will interact with the application.
   ```

10. What is the recommended way to separate the code that you are testing from its related dependencies?
   - Mocking
   - module.exports
   - End-to-end testing
   ```
   Answer: Mocking
   Explanation: Mocking allows developers to simulate the behaviour of dependent code during tests.
   ```