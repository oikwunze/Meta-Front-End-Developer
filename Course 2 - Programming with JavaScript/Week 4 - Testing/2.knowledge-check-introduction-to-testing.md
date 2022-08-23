# Knowledge check: Introduction to testing

1. What is the correct way to export the `timesTwo` function as a module so that Jest can use it in testing files?
   - export module(timesTwo)
   - module(exported(timesTwo))
   - document.module.export = timesTwo
   - module.exports = timesTwo
   ```
   Answer: module.exports = timesTwo
   Explanation: This is the correct way to export the function.
   ```

2. Testing is a way to verify the expectations you have regarding the behavior of your code.
   - true
   - false
   ```
   Answer: true
   Explanation: Testing is good practice as a software engineer for verifying expectations.
   ```

3. Node.js can be used to build multiple types of applications. Select all that apply.
   - Command line applications
   - Desktop applications
   - Web application backends
   ```
   Answer: Command line applications, Desktop applications, Web application backends
   Explanation: Command line applications can be built with using Node.js.
                Desktop applications can be built with using Node.js.
                Backends can be built with using Node.js.
   ```

4. When the following test executes, what will the test result be?
   ```javascript
    function add(a, b) {
        return a + b;
    }

    expect(add(10, 5)).toBe(16);
   ```
   - Success.
   - Fail.
   ```
   Answer: Fail.
   Explanation: The expectation will fail as the function will return 15 which does not equal 16.
   ```

5. Which of the following is the slowest and most expensive form of testing?
   - Unit testing
   - Integration testing
   - End-to-end testing (e2e)
   ```
   Answer: End-to-end testing (e2e)
   Explanation: End-to-end testing (e2e) is the most expensive as these tests take the most time to set up and run.
   ```

6. Mocking allows you to separate the code that you are testing from its related dependencies.
   - true
   - false
   ```
   Answer: true
   Explanation: Mocking allows you to isolate the code being tested in your unit tests.
   ```