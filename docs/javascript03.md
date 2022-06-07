---
id: javascript03
title: Variables
sidebar_label: Variables
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/03.jpg)

## Variables

Variables 🔔 (Variables, abbreviated as `var`) are a container, for values such as numbers used in addition ➕, or a string that we could use as part of a sentence, and other data types that we'll get to know later.

![Container](https://media.giphy.com/media/0T0FUiZl51VPCLsqLR/giphy.gif)

<!-- ## Video

<YouTube videoId="gCqxA_JOtmw" /> -->

## Variable declaration

![Announcement](https://media.giphy.com/media/cYaBD8kxE4PZudHBRA/giphy.gif)

To use a variable, you must first create it, or, more precisely, declare a variable. To do this, we introduce the keyword `var` followed by the name you want to give your variable. The instruction below creates (in other words: declares or defines) a variable named "message":

```jsx live
function learnJavaScript() {
  var message = ''

  return message
}
```

Here we create a variable 🔔 `message`. Currently ⏱️ it does not contain a value, to be more precise, the variable contains an empty string.

## Assigning a value to a variable

![Memory](https://media.giphy.com/media/3o6ZtafpgSpvIaKhMI/giphy.gif)

Once the variable 🔔 is declared, it can be assigned a value. To do this, write 🖊️ variable name 🔔, followed by an equal sign `=`, followed by the value you want to assign. For example 👇:

```jsx live
function learnJavaScript() {
  var message
  message = 'My name is ...'
  // We can access it using the variable name
  return message
}
```

In `RESULT`, the value that you assigned to the variable 🔔 returned in the console. Play around 🎮 with the values of a variable 🔔, for example, complete the expression with your name.

For brevity, you can combine the declaration of a variable 🔔 and writing 🖊️ in one line 👇:

```jsx live
function learnJavaScript() {
  var message = 'Hello!' // define a variable and assign a value to it
  return message
}
```

## Variable update

![Update](https://media.giphy.com/media/FP47IFqWyXfdKYU6VG/giphy.gif)

One of the peculiarities of variables 🔔 is that their meaning can change.
When a value is assigned to a variable 🔔, you can change (update) that value simply by specifying a different value. Let's take a look at a simple example 👇:

```jsx live
function learnJavaScript() {
  var message = 'Bob' // now message Bob
  message = true // and now the message is true
  message = 35 // and as a result message 35

  return message
}
```

Another feature of variables 🔔 is that they can contain almost anything, not just strings and numbers. Variables 🔔 can also contain complex data and even entire functions. You will learn more about this as you study the course further.

::: tip Note!
We say that variables contain values. This is an important distinction. Variables are not the values themselves! They are containers for values. Imagine that they are like little cardboard boxes📦 in which you can store things.
:::

![Variables](https://mdn.mozillademos.org/files/13506/boxes.png)

![Hello World](https://media.giphy.com/media/26his8ERHOSxKuWw8/giphy.gif)

## Variable naming rules

![Rules](https://media.giphy.com/media/XK8I8Am1gSe17MiJ2m/giphy.gif)

You can name the variable 🔔 whatever you like, but there are limitations. Generally, you should only stick to Latin characters (0-9, a-z, A-Z) and the underscore character.

- The use of other symbols is not recommended because they may cause errors or be incomprehensible to an international audience.
- Do not use underscores at the beginning of variable names 🔔 - this is used in some JavaScript constructs to denote specific things.
- Do not use numbers at the beginning of variables 🔔. This is invalid and will result in an error.
- It is generally accepted to stick to the so-called "lower camel case" (camelCase - so called because of the "humps" that form the first letters of words), where you glue several words, using lowercase letters for the entire first word, and then capital letters of subsequent words. We have used this for our variable names 🔔 in this article.
- Make variable names 🔔 intuitive about what data they contain. Do not use only single letters / numbers or large long phrases.
- Variables 🔔 are case sensitive, so `myage` and` myAge` are different variables 🔔.
- Last but not least - you also need to avoid using JavaScript reserved words as variable names 🔔 - by that we mean the words that make up the actual JavaScript syntax! Thus, you cannot use words like var, function, let, and for for variable names 🔔. Browsers recognize them as different pieces of code and therefore errors occur.

## List of reserved words

![Reserved](https://media.giphy.com/media/3o6Mb3eci7bVDKBR2o/giphy.gif)

We cannot call variables 🔔 with these words, since they are reserved in the JavaScript language.
`break`, `case`, `catch`, `class`, `const`, `continue`, `debugger`, `default`, `delete`, `do`, `else`, `export`, `extends`, `finally`, `for`, `function`, `if`, `import`, `in`, `instanceof`, `new`, `return`, `super`, `switch`, `this`, `throw`, `try`, `typeof`, `var`, `void`, `while`, `with`, `yield`

## Loose typing

![Freedom](https://media.giphy.com/media/6901DbEbbm4o0/giphy.gif)

JavaScript is a “freely typed language👅” which means that unlike some other languages👅 you do not need to specify what type of data the variable will contain (eg numbers, strings, arrays, etc.).

For example, if you declare a variable 🔔 and assign a quoted value to it, the browser will treat the variable 🔔 as a string 👇:

```jsx live
function learnJavaScript() {
  var myString = 'Hello'
  // It will still be a string, even if it contains numbers, so be careful:
  var myNumber = '500' // oops, it's still a string

  myNumber = 500 // that's better, now it's number. Remove this line and look at the data type.

  return typeof myNumber
}
```

## Deprecated "var" keyword

![Old](https://media.giphy.com/media/3orieJI3IdkKWIsAGA/giphy.gif)

Usually `var` is not used in modern scripts, but it can still be hidden in old ones. This is due to the fact that it does not behave unambiguously, so instead of `var` we will use` let` for variables 🔔, and `const` for constants - constants.

🔔 The break is over, let's run to the next lesson!

## Problems?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Write to [Discord](https://discord.gg/6GDAfXn) chat.

## Questions:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

For whom does the `console.log` command contain information?

1. User
2. Developer
3. JavaScript interpreter

What are variables?

1. Containers for values
2. Variable values
3. Latin letters

What can variables contain?

1. Only strings and numbers
2. Numbers, strings, complex data, functions
3. Only complex data and functions

How to write a command to assign a variable?

1. `var`
2. `var` [variable name] =
3. `var` [variable name]

How do I update a variable?

1. The variable cannot be updated
2. Specify a different value for the variable
3. Set a custom command

What is missing in the variable naming rules?

1. Don't use numbers at the beginning of variables
2. Don't use reserved words
3. Stick to Latin characters

How do I write the value of a variable so that the browser treats the variable as a string?

1. Without quotes
2. In quotes
3. In brackets

Which keyword don't we use to define variables?

1. `let`
2. `const`
3. `var`

In order to understand how much you learned this lesson, take the test in the [mobile application](http://onelink.to/njhc95) of our school on this topic or in our [telegram bot](https://t.me/javascriptcamp_bot).

![JS Camp](/img/app.jpg)

## Links

1. [MDN web docs](https://developer.mozilla.org/ru/docs/Learn/JavaScript/Первые_шаги/Variables)
2. [Code for Teens: The Perfect Beginner's Guide to Programming, Volume 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)
3. [JavaScript.ru](https://learn.javascript.ru/types)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>
  
</table>

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
