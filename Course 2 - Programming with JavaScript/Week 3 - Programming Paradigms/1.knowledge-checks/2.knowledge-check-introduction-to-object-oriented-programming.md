# Knowledge check: Introduction to Object-Oriented Programming

1. What will print out when the following code runs?
   ```javascript
    class Cake {
        constructor(lyr) {
            this.layers = lyr + 1;
        }
    }

    var result = new Cake(1);
    console.log(result.layers);
   ```
   - 1
   - 2
   - 3
   - 4
   ```
   Answer: 2
   Explanation: The Cake object stores its layers  property as the value of the constructor parameter  lyr plus one. Therefore, the value of the layers  property is 2.
   ```

2. When a class  extends  another class, this is called ____________.
   - Inheritance
   - Extension
   ```
   Answer: Inheritance
   Explanation: A class inherits from another class using the extends keyword. This is called Inheritance.
   ```

3. What will print out when the following code runs?
   ```javascript
    class Animal {
        constructor(lg) {
            this.legs = lg;
        }
    }

    class Dog extends Animal {
        constructor() {
            super(4);
        }
    }

    var result = new Dog();
    console.log(result.legs);
   ```
   - 0
   - undefined
   - null
   - 4
   ```
   Answer: 4
   Explanation: The Dog constructor passes the value of  4 to the super constructor of Animal. Therefore, the value of the legs property is 4 .
   ```

4. What will print out when the following code runs?
   ```javascript
    class Animal {

    }

    class Cat extends Animal {
        constructor() {
            super();
            this.noise = "meow";
        }
    }

    var result = new Animal();
    console.log(result.noise);
   ```
   - undefined
   - null
   - ""
   - meow
   ```
   Answer: undefined
   Explanation: The noise property does not exist within the scope of the Animal class. Therefore, undefined  will print.
   ```

5. What will print out when the following code runs?
   ```javascript
    class Person {
        sayHello() {
            console.log("Hello");
        }
    }
    
    class Friend extends Person {
        sayHello() {
            console.log("Hey");
        }
    }
    
    var result = new Friend();
    result.sayHello();
   ```
   - Hello
   - Hey
   ```
   Answer: Hey
   Explanation: The Friend class overrides the sayHello method. Therefore, Hey is printed out instead of  Hello when sayHello is called.
   ```