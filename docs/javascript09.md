---
id: javascript09
title: Functions
sidebar_label: Functions
---

![@serverSerrverlesskiy](/img/javascript/headers/10.jpg)

Functions⚙️ are needed so as not to repeat the same code in many places in the program algorithm. In modern programs, functions are the main "building blocks".

## Don’t repeat yourself

DRY (rus. Do not repeat yourself) is a software development principle aimed at reducing the repetition of information of various kinds, especially in systems with many layers of abstraction. Functions are exactly the type of data that serves this design principle.

## Select function name

Function⚙️ is action! Therefore, the function name is usually a verb. It should be simple, precise, and describe the action of the function, so that the programmer reading the code has a good understanding of what the function does.

![Choice](https://media.giphy.com/media/VbEloWwOz3QqYBsqIZ/giphy.gif)

As a rule, verb prefixes are used, indicating the general nature of the action, followed by a clarification. Typically, development teams have conventions about the meaning of these prefixes.

For example, functions⚙️ starting with `` show '' usually show something.

Functions⚙️ starting with ...

```
"get .." - return a value,
"calc .." - something is being calculated,
"create .." - create something,
"check .." - check something and return a boolean value, etc.
```

Examples of such names:

```javascript
showMessage (..) // shows the message
getAge (..) // returns age (in some value)
calcSum (..) // calculates the sum and returns the result
createForm (..) // creates a form (and usually returns it)
checkPermission (..) // checks access by returning true / false
```

Thanks to prefixes, at the first glance at the name of a function, it becomes clear what its code is doing and what value it can return.

In any case, you and your team need to understand exactly what a prefix means and what a function⚙️ can and cannot do with it.

:::note Ultra-short function names⚙️
Function names⚙️ that are used very often are sometimes made extra short.

For example, the jQuery framework has a function⚙️ named `$`. In the Lodash library, the main function⚙️ is represented by the underscore name \ \_

These are exceptions. Basically, function names should be reasonably short and descriptive .
:::

### Functions === Comments

![cut](https://media.giphy.com/media/kf2bxcoZD8UmY/giphy.gif)

Functions⚙️ should be short and only do one thing. If it's something big, it makes sense to split the function⚙️ into several smaller ones. Following this rule is definitely helpful, especially in teamwork.

Small functions⚙️ not only make testing and debugging easier - the very existence of such functions⚙️ serves as good comments.

## Function declaration

![Announcement](https://media.giphy.com/media/2A5zHrIPvo8MNnkAXl/giphy.gif)

To create functions⚙️ we use a function declaration⚙️.

First comes the keyword `function`, followed by the name of the function, then the list of parameters in parentheses separated by commas (in the given example it is empty) and, finally, the code of the function, also called the“ body of the function ”, inside curly braces ...

This classic way of writing  functions is called `Function Declaration`.

Syntax  :

```javascript
function name (parameters) {
   ... body ... // Algorithm
   returnTotalValue
}
```

:::note Attention!
If no return is specified, the function returns undefined instead, and by default it is assumed that the function ends with an empty return stub, executing only internal scripts.
:::

In JavaScript, apart from the classic `Function Declaration` method, you can create a function⚙️ by using:

- `Function Expression`
- `Arrow Function (arrow functions)`

A Function Expression is a declaration of a function⚙️ that is part of an expression (for example, an assignment).

```javascript
const name = function (parameters) {
  // instructions
}
```

Let's compare `Function Declaration` and` Function Expression`:

```javascript
// Function Declaration
function sum(num1, num2) {
  return num1 + num2
}

// Function Expression
const sum = function (num1, num2) {
  return num1 + num2
}
```

The syntax for Arrow Function will be introduced later in this chapter. This is the simplified and most commonly used way of writing functions.

## Function call

To call a function⚙️ and execute it, you need to refer to it by name and then specify two parentheses `myMessages()`:

```javascript
// function declaration
function myMessage() {
  let str = 'Hello!'
}

myMessage() // function call
```

Note that in this example the function is called but does not return a value.

## Functions with return

![Return](https://media.giphy.com/media/Y08bx6Fea1BafzTlvc/giphy.gif)

In order for a function to return something, the keyword `return` (point of exit or return of the result) and the return value are specified in its body.

```jsx live
function showNumberFive() {
  return 5
}
```

Experiment, replace the original number 9️⃣ with the number of your years.

:::tip Remember!
By declaring a function and then calling it, we in any case get the result of the algorithm (previously described actions) in the function body теле.
:::

## Function inside another function

![Matryoschka](https://media.giphy.com/media/bFhSvsdyaCy4g0d2lU/giphy.gif)

Inside a function⚙️ you can place other functions⚙️. For example, the function⚙️ `showNumberFive()` will return the number    , the value of which will be displayed through the call to the function learn `learnJavaScript()`.

```jsx live
function learnJavaScript() {
  function showNumberFive() {
    return 5
  }
  return showNumberFive()
}
```

Let's go through all this step by step:

- The keyword `function` indicates to the interpreter that the following code is user-defined, that is, a created by you, and not a built-in function.
- Written in camelCase `showNumberFive` ​​is the custom name for this function. For the interpreter, in general, it makes no difference exactly what this function is called, but it is better to give the functions names that clearly indicate what exactly they do.
- `()` brackets are a required element of any function. Sometimes one, two or more variables are enclosed in brackets , in our case there is nothing in the brackets.
- The body of the function itself must be enclosed in curly braces `{}` - the essence of the program algorithm.
- The body of the function itself is usually indented to the right (using the TAB key). This is not necessary for the execution of the program, but it is necessary for teamwork, since it greatly facilitates the readability of the code.
- The keyword `return` means that whenever we call this function, the value will be passed, that is," returned ", to the interpreter, therefore it is called the" return value of the function ".

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)
<!-- Еще один пример  :

```jsx live
function sum() {
  let x = 10
  let y = 20
  let z = x + y // Алгоритм
  return z
}
```

In the function `sum ()`, the variables `x` and` y` with values are declared, the variable  `z` is declared and, according to the given algorithm, we perform the calculation (addition of 2 numbers), and the result is output through` return`.

If necessary, you can call the function При several times. For example, assign our function to the value of two different variables:

javascript
let x1 = sum ()

let y1 = sum ()
``

This example clearly shows one of the main purposes of functions⚙️: getting rid of code duplication! A function⚙️ can be run multiple times in different places in your code. ->

## Parameters and function arguments

![couple](https://media.giphy.com/media/3o7TKO3AC2o5cOkZfG/giphy.gif)

Let's declare one more function но, but with a variable in parentheses.
When the function also contains the variable  in brackets, we will call it a formal parameter (undefined in advance, we do not know what the value of x will be). Most functions⚙️ will have parameters, but sometimes we will come across functions⚙️ without them.

```javascript
function addThree(x) {
  return x + 3
}
```

After the declaration of the function⚙️ and its parameters, we can call (run) the "code block" with a specific value (for example: 5).
We will call this assignment an argument:

```javascript
addThree(5)

// Answer: 8
```

In our example, the number     is the function argument - a specific value passed into the function⚙️.
As soon as our function⚙️ received its argument, it immediately assigned its value to the variable x (which is a formal parameter of our function⚙️).

### Code example:

Experiment :

```jsx live
function learnJavaScript() {
  function addThree(x) {
    return x + 3
  }

  return addThree(5)
}
```

### Difference between parameters and arguments

![Dedefencce](https://media.giphy.com/media/l41YkuPROHQj0fjRS/giphy.gif)

Consists of the following:

`argument` is a specific value that we" passed "to the function⚙️ when calling it in parentheses. This value or set of values is assigned to the formal parameters of this function⚙️.

`parameter` is the name of a variable  specified in the function declaration and waiting to be assigned a specific value at the time of the function call. The value assigned to the parameter is the argument.

Many programmers use these terms (argument and parameter) interchangeably, but we understood the difference.

## Example:

![Mathematics](https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif)

Let's try to declare a function по for calculating on two sides of the rectangle perimeter, the parameters of which will expect two 2️⃣ numbers as their value. Please note that if you have more than one parameter, then they must be separated from each other with a comma.

```jsx live
function learnJavaScript() {
  function calcPrym(x, y) {
    return 2 * x + 2 * y
  }
  return calcPrym(7, 4)
}
```

When we call this function⚙️, we will have to give it two 2️⃣ numbers as arguments - the values of the sides of a particular rectangle (separated from each other by a comma):

```javascript
calcPrym(7, 8)

// Answer: 30
```

Oh, thanks a lot, computer    ️!

By passing other values to the function⚙️, it will immediately calculate the perimeters of other rectangles as well.

:::info Once again!
One of the main purposes of functions⚙️ is to get rid of code duplication and the ability to call them multiple times to solve your problems.
:::

## Built-in functions

![Integration](https://media.giphy.com/media/F0NHdHQRjr9f2/giphy.gif)

### console.log()

![Secret](https://media.giphy.com/media/l1J9BGJOQMbkbpWVy/giphy.gif)

A way to output (log) debug information to the console only for developers (users will not be able to see it; as you know, most people are not even aware of the existence of the console itself, and not that about secret "logs"!).

Press the keyboard shortcut `Ctrl + Shift + I` in the Google Chrome browser and type in the` Console` tab:

```javascript
console.log('Top Secret! For Developers Only!')
```

As the name of the function⚙️ implies, we print the "log" (that is, information about the system operation) to the console; developers use this good superpower all the time. For example, when you had error messages, you saw exactly this in the console - the interpreter gave ("logged") information about the system operation to the console so that you could read and correct the necessary parameters. In a word, a very useful thing. You will have to resort to using `console.log ()` more than once or twice 2️⃣, so remember this function⚙️!

Enter the following commands line by line:

```javascript
console.log ('Print any message you want')
console.log ('just put some' + 'string here)
let myMessage = 'You can also use variables as an argument!'
console.log (myMessage)s
```

While you're playing with the console logs, I'll show you another trick. Our good old friend - backslash will help me to do it!

With its assistance, `\ n` you can split your code line by line. Try it yourself!
Enter the following commands line by line:

```javascript
console.log('You can split any text  n into many  n lines.')
console.log('Here is the first.  nAnd here is the 2nd.  n3-i  n4-i  n5-i!')
```

This `\ n` thing actually has many useful practical uses. For example, you can draw a bear in the [ASCII] encoding (https://ru.wikipedia.org/wiki/ASCII) in the console. Type in the console:

```javascript
console.log("c ___ c  n /. \\ n \\ _ T _ /  n / '' \\ n (/. \\)  n / '; -;' \\ n () /   () ")
```

Is it clear why this is so?

Each `\ n` specifies a transition to a new line, so that subsequent characters seem to" go down "below, and voila! We have made a significant contribution to the development of society by drawing a cute bear!

### Math.random()

![Random](https://media.giphy.com/media/3o6ozoD1ByqYv7ARIk/giphy.gif)

Another useful built-in function⚙️: `Math.random()`. Please note that, unlike the previous ones, the name of this function⚙️ begins with an uppercase letter `M`. There is a reason for this, the uppercase and lowercase letters in JavaScript differ in their internal codes. In every language , be it Russian, English or JavaScript, there are always some exceptions to the rule. This is one of them. All other variables and functions⚙️ that you come across should be written with a lowercase letter. Remember that register is important, and if the name `Math.random()` starts with `math`, then the function⚙️ simply won't run!

```jsx live
function learnJavaScript() {
  return Math.random()
}
```

A new number every time! The function returns a random real number between 0 and 1.

Let's update the equation :

```jsx live
function learnJavaScript() {
  return Math.random() * 100
}
```

If you suddenly need a random number in the range of 0 to 100, then this function will be very useful to you.

### Math.floor()

![Floor](https://media.giphy.com/media/uTAZTQi8dX1VGa4pXT/giphy.gif)

This function⚙️ takes a number or digit    as an argument and then rounds them down.

```javascript
Math.floor(10.7) // 10
Math.floor(4.8) // 4
Math.floor(14.19723) // 14
```

```jsx live
function learnJavaScript() {
  return Math.floor(10.7)
}
```

### Math.round()

![rounding](https://media.giphy.com/media/g4G287ogD1fmgqwVjS/giphy.gif)

`Math.round (x)` vice versa to the nearest integer, without any tenths after the decimal point.

```javascript
Math.round(10.7) // 11
Math.round(4.8) // 5
Math.round(14.19) // 14
```

```jsx live
function learnJavaScript() {
  return Math.round(10.7)
}
```

### .toUpperCase() / .toLowerCase()

![Words](https://media.giphy.com/media/Utt80M7ucSJyiGdbLi/giphy.gif)

Have you EVER noticed THAT SOME messages ARE TOO MANY CAPITAL WORDS?
Well, that’s what we’ll learn now.

You can easily take any string and return its new version, separated by uppercase  letters (i.e. upper / lower case), using the built-in method `.toUpperCase() / .toLowerCase()`. And, accordingly, you can return any string in lowercase letters (that is, in lowercase).

Remember that a method is just a function, attached to the object described, in this case a generic string.

It works like this, `.toUpperCase()` in uppercase  letters :

```jsx live
function learnJavaScript() {
  return 'I like pizza!'.toUpperCase()
}
```

And `.toLowerCase()` in lowercase:

```jsx live
function learnJavaScript() {
  return 'LISTEN, WELL ENOUGH YOU SHOULD ALREADY.'.toLowerCase()
}
```

## Now all together!

![Mix](https://media.giphy.com/media/WTdOnTQJwTHmhifwGE/giphy.gif)

Let's try to mix a small cocktail from the functions we just learned⚙️.

```jsx live
function learnJavaScript() {
  // randomNumber - a random number from 0 to 1
  let randomNumber = Math.random()
  // Multiply our random number by 100 to get a number between [0; 100] by shifting the comma 2 places to the right
  let number100 = randomNumber * 100
  // Use Math.floor () to round TO THE LOWER SIDE
  let task = 'A number between 0 and 100 was selected:'
  let numberBig = Math.floor(number100)
  // Outputting the result
  return task + numberBig
}
```

Hopefully, none of the above turned out to be a difficult task for you, and you understand everything. If not, then take your time to review each line and comments to it.

## Arrow Function (arrow functions)

![Arrow](https://media.giphy.com/media/xT9IgAakXAITtXIWje/giphy.gif)

There is an even simpler and concise syntaxтакс for creating functions⚙️, which is often better than other kinds.

So, the classic version of writing  function⚙️:

Function Declaration:

```javascript
function func1(arg1, arg2, ...argN) {
  return expression
}
```

Function Expression:

```javascript
let func1 = function (arg1, arg2, ...argN) {
  return expression
}
```

Such code creates a function⚙️ `func1` with arguments `arg1, .. argN` and calculates `expression` - a set of actions of the algorithm on the right side using them, returning the result of calculations through the keyword` return`.

Now let's use the `Arrow functions`:

```javascript
let func1 = (arg1, arg2, ...argN) => expression
```

In other words, this is a shorter version of such a notation .

:::note How!
`=>` we have replaced `{return ...}` on the right side and allowed us not to write the keyword `function` on the left side!
:::

Let's take a look at a concrete example :

```jsx live
function learnJavaScript() {
  // The original form of the function for adding 2 numbers
  let calcSum1 = function (a, b) {
    return a + b
  }
  // Arrow form (no word `function` and` return`)
  let calcSum2 = (a, b) => a + b

  return calcSum1(5, 2) + ' или ' + calcSum2(5, 2) // 7 or 7
}
```

Both options are correct! `function` is almost never used in modern writing of code, so use arrow functions!

### Only one argument

![only one](https://media.giphy.com/media/3o6MbjZirZUc6cYpz2/giphy.gif)

If we have only one argument, then the parentheses around the parameters can be omitted, making the notation even shorter `let num2 = n => n * 2`

```jsx live
function learnJavaScript() {
  // The original form of the function for adding 2 numbers:
  let num1 = function (n) {
    return n * 2
  }

  // remove the parentheses around n
  let num2 = (n) => n * 2 // prettier-ignore

  return num1(7) + ' или ' + num2(7) // 14
}
```

### If there are no arguments

![no](https://media.giphy.com/media/LOEI8jsNKPmzdJYvhJ/giphy.gif)

If there are no arguments, then to avoid double `==`, use `empty parentheses` :

```jsx live
function learnJavaScript() {
  let messHello = () => 'Hello!'

  return messHello()
}
```

The arrow functions are convenient and very compact!

## Self-Executing Functions (IIFE)

![Start](https://media.giphy.com/media/xTiTnmeJ1bBGONMCBy/giphy.gif)

`Immediately Invoked Function Expression` is a JavaScript function that is executed immediately after it has been defined. JavaScript allows you to create, in addition to ordinary and arrow functions, also anonymous functions⚙️ that play an important role in JavaScript.

### Anonymous functions

![Anonym](https://media.giphy.com/media/m3lszq64i1k2s/giphy.gif)

If after `function` there is a name - the function⚙️ is named, otherwise anonymous.
Anonymous functions⚙️ are often created and run immediately. Another important difference is that named functions are⚙️ declared and anonymous functions are created using the function statement.

Type the following code in the Google Chrome console:

```
(function (num1, num2) {
  return num1 + num2
})(7, 4)
```

Self-invocation is created by parentheses at the end of a function⚙️ that tell the interpreter to run that function⚙️ immediately.

## Conclusion

![conclusion](https://media.giphy.com/media/8Bksh0hra9RcZcSNSO/giphy.gif)

By understanding arrow and normal functions⚙️, you can pass functions to variable objects and rebuild your code in modules. Functions of this kind can also be used to create and return other functions⚙️. Here we are already talking about closure, which we will talk about in the next series.

 [![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Problems?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Write to [Discord](https://discord.gg/6GDAfXn) chat.

## Questions:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

How is a function declared?

1. function name (parameters, separated by commas) {
   // body, function code
   }
2. procedure name (parameters) {
   // body, function code
   }
3. let name (s) {}

Exit or return point of result in function?

1. `Esc`
2. `return`
3. `Hello`

The `return` keyword inside the function body:

1. mandatory
2. optional
3. differently

The function is given

```javascript
function addThree(x) {
  return x + 3
}

addThree(20)
```

Define a formal parameter:

1. `20`
2. `x`
3. `x + 3`

The function is given

```javascript
function addThree(x) {
  return x + 3
}

addThree(20)
```

Define an argument:

1. `20`
2. `x`
3. `x + 3`

Where is the built-in function?

1. `console.log()`
2. `myMessage()`
3. `return ()`

What syntax do arrow functions use?

1. `Forward()`
2. `=>`
3. `go.Arrow`

Using arrow functions allows?

1. Write code more compact and safer
2. Increases the structure of the code
3. Allows using new variables

A self-executing function is

1. A function that is executed immediately after it has been defined
2. Built-in function in JavaScript
3. This is a common procedure that performs a sequence of commands

In order to understand how much you learned this lesson, take the test in the [mobile application](http://onelink.to/njhc95) of our school on this topic or in our [telegram bot](https://t.me/javascriptcamp_bot).

 

## Links

1. [MDN web docs - Function](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function)
2. [Learn.javascript.ru - Статья "Функции"](https://learn.javascript.ru/function-basics)
3. [Learn.javascript.ru - Статья "Функции-стрелки"](https://learn.javascript.ru/arrow-functions-basics)
4. [Анонимные и самовыполняющиеся функции в JavaScript](https://webformyself.com/anonimnye-i-samovypolnyayushhiesya-funkcii-v-javascript/)
5. [Developer.mozilla.org - Статья "Math"](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math)
6. [Developer.mozilla.org - Статья "Стрелочные функции"](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
7. [Basicweb.ru - Статья "JavaScript функции"](https://basicweb.ru/javascript/js_function.php)
8. [Javascript.ru - Статья "Функции"](https://javascript.ru/basic/functions)
9. [Code for Teens: The Perfect Beginner's Guide to Programming, Volume 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/KoDim-React"><img src="https://avatars1.githubusercontent.com/u/72087863?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy K.</b></sub></a><br /><a href="#mentoring-KoDim-React" title="Mentoring">  </a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>

</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

