# Exercise: Practicing with functions

Your task in this exercise is to code a function which will be able to take a word and locate the position of a chosen letter in that given word.  

## Task 1:
Write a function named _`letterFinder`_ that accepts two parameters: _`word`_ and _`match`_.

## Task 2:
Code a 'for' loop inside the function's body. The for loop's counter should start at zero, increment by 1 on each iteration and exit when the counter variable's value is equal to the length of the _`word`_ parameter.

## Task 3:
Add an if statement inside the for loop whose condition works as follows:

1. Access each of the letters inside the passed in _`word`_ using the counter variable, with _`word[i]`_. 

2. Check if the current _`word[i]`_ is equal to the value of _`match`_.

## Task 4:
console.log the following inside the body of the if statement: _`console.log('Found the', match, 'at', i)`_.

## Task 5:
Write the else condition. Here you'll just console log the following: _`console.log('---No match found at', i)`_.

## Task 6:
Call the _`letterFinder`_ and pass it as its first argument as the string _`"test"`_ and as its second argument, the string _`"t"`_.

Your output should be the following:

```
Found the t at 0
---No match found at 1
---No match found at 2
Found the t at 3
```