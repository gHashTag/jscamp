---
id: javascript05
title: Errors
sidebar_label: Errors
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/05.jpg)

You will definitely, like the rest of us, make mistakes🙅‍♂️ in the code📟. Software bugs🙅‍♂️ are called bugs. Bug - means an error🙅‍♂️ in the program💾 or in the system, due to which the program produces unexpected behavior and, as a result, the result. Most software errors🙅‍♂️ arise from errors🙅‍♂️ made by program developers in its source code📟 or in its design.

![error](https://media.giphy.com/media/1VT3UNeWdijUSMpRL4/giphy.gif)

In the meaning of "elusive technical error", the word "bug" was used long before the advent of computers by the staff of telegraph and telephone companies in relation to problems with electrical equipment and radio equipment. In 1878, Thomas Edison wrote:

> “This was the case with all my inventions. 1️⃣ The first step is intuition, which comes like a flash, then difficulties arise - the device refuses to work, and that's when the bugs appear - as these small mistakes and difficulties are called - and it takes months of close observation, research and effort before it comes to commercial success or failure. "

Debugging is the process of finding and fixing errors🙅‍♂️ in a script.

[Wikipedia](https://ru.wikipedia.org/wiki/Программная_ошибка🙅‍♂️)

<!-- ## Video

<YouTube videoId="xJtVop2fAxg" /> -->

## The most common mistakes

![Teacher](https://media.giphy.com/media/27c3zdaY6eeIAwp7Qi/giphy.gif)

I hope you have already encountered your first mistakes🙅‍♂️ in the process of writing code. Why hope? Because mistakes🙅‍♂️ are our teachers who show us what we do wrong in our code📟 and a computer🖥️, or rather a code interpreter📟, simply cannot understand us. Mistakes🙅‍♂️ when writing code📟 happen almost every day. The trick is to be able to read the error message💬 that the machine will give you in order to quickly find and fix a defect in the written code📟. The more you learn JavaScript, the more you appreciate the error messages💬 - they often show very accurately where you went wrong.

A couple of the most common error types🙅‍♂️ in code код:

## SyntaxError

![Error](https://media.giphy.com/media/TqiwHbFBaZ4ti/giphy.gif)

`Syntax Error` - violation of language rules правил. For example, enter nine plus a semicolon `9 +;` 👇:

```jsx live
function learnJavaScript() {
  var error = 9

  return error
}
```

Reply: `SyntaxError: Unexpected token;`

A syntax error🙅‍♂️ simply means that there is an error in the body of your sentence🙅‍♂️. In other words, what you wrote is not correct in terms of JavaScript. The interpreter cannot read your sentence and does not know what to do with it. `Unexpected token;` means that the interpreter has read something that it did not expect to read at all: in our case, a semicolon `;`.

Let's make a mistake again🙅‍♂️!
Let's enter five plus three in the console and a parenthesis at the end of `5 + 3)`.

```jsx live
function learnJavaScript() {
  var error = 5

  return error
}
```

You have a closing parenthesis `)`, but there is no opening parenthesis `(`! But the parentheses always go in pairs - it cannot be that there is a closing, but there is no opening parenthesis, and vice versa.

## ReferenceError

![Error](https://media.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif)

`ReferenceError` is an invalid name! The `ReferenceError` object represents an error🙅‍♂️ that occurs when accessing a variable that does not exist. For example, enter five plus alternating `5 + alternating`:

```jsx live
function learnJavaScript() {
  var error = 5

  return error
}
```

Now we have before us an error of the reference `ReferenceError`. Perhaps you have already noticed what is the matter here? Let's read the error message 💬 carefully (after all, that's why it is displayed!). It says: `variable 🔔 is not defined` - the variable is not set, this is where our problem lies! First, we have to declare the variable-in some way, say this way:

```jsx live
function learnJavaScript() {
  var test = 5
  var error = 5 + test

  return error
}
```

## TypeError

A TypeError object represents an error that is thrown when a value is not of the expected type. We apply the `toUpperCase` method, which we will learn more about later, to the undefined type, and this is not allowed since this method converts the string to uppercase. Check this error in the browser console, it doesn't work in `LIVE EDITOR`.

```javascript
var foo = undefined
foo.toUpperCase()
```

![TypeError](/img/javascript/25.jpg)

## Open source

We can also make mistakes, so if you find an error on the site or incorrect translation, you can easily help fix the error on the site. To do this, click on the `Edit this page` button at the very bottom of each page.

 [![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

## Problems?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Write to [Discord](https://discord.gg/6GDAfXn) chat.

## Questions:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

What does `Syntax Error` mean?

1. Wrong order of signs
2. Violation of the rules of the language
3. Inappropriate parentheses

What does `Reference Error` mean?

1. Undeclared variable
2. Syntax error
3. Wrong name

In order to understand how much you learned this lesson, take the test on the [mobile application](http://onelink.to/njhc95) of our school on this topic.

![Sumerian school](/img/app.jpg)

## Links

1. [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Data_structures)
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

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)
