# Exercise: Practice conditional statements

## Introduction
In this exercise, you will practice working with `if else` statements. By the end of this exercise, you will be able to write an `if else` statement that determines your source of income based on your age. You will also be able to write a `switch` statement that determines your evening routine based on the day of the week.

## Complete the following steps to create: Are You Old Enough? 
1. Declare a variable `age` using the `var` keyword and set it to the number `10`.

2. Add an `if` statement that checks if the value of the `age` variable is greater than or equal to the number `65`. Inside the `if` block, `console.log` the sentence: `"You get your income from your pension"`.

3. Add an `else if`,  where you'll check if the value of the `age` is less than `65` and greater than or equal to `18`. Inside this `else if` block, type `console.log` and then `"Each month you get a salary"`.

4. Add another `else if`, and this time check if the value of the `age` is under `18`. Inside the `else if` block, type `console.log` and then `"You get an allowance"`.

5. Add an `else` statement to capture any other value. Inside the block, type `console.log` and then `"The value of the age variable is not numerical"`.

T​ry adjusting the age and executing the program to see ho​w it will affect the output.

## Code the days of the week program as a switch statement
1. On the next line, define a new variable, name it `day`, and set its value to `"Sunday"`.

2. Start coding a `switch` statement, passing the `day` variable as the expression to evaluate.

3. Inside the `switch`, add cases for every day of the week, starting with `'Monday'`, and ending with `'Sunday'`. Make sure to use string values for days. Inside each case, for now, just add a `console.log('Do something')`, and add a `break;` on the line below.

4. At the very bottom of the `switch` statement, add the `default` case and add a `console.log('There is no such day')`.

5. Finally, update the `console.log` calls for each case, based on whatever activity you have on each of the days.

## Tips
- If you need to make sure that multiple conditions are true in an if statement, you can do so using the `&&` operator

- In JavaScript, the correct syntax of the "greater than or equal to" operator is: `>=`.

- Don't forget to add a break at the very end of each case in a switch statement.