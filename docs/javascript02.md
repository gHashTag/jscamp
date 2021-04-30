---
id: javascript02
title: Comments
sidebar_label: Comments
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/02.jpg)

## What are comments?

JavaScript has several ways to specify comments in code 📟

Sometimes, when writing 🖊️ the code, you will need to provide explanations that are intended only for humans а and not for the computer. Perhaps it will be some kind of message to yourself from the past (to the Future Me!) About this or that thing in the program code. Or maybe it will just be an indication that you need to run only such and such a part of the code, and the rest should be omitted. In short, in any such case, you will need to resort to the help of comments.
Comments 🗣️ are used to add ➕ hints, notes 🔖, suggestions or warnings. They can make the code easier to read and understand. They can also be used to prevent 🛑 code execution (this is a common practice when debugging code).

JavaScript has several ways to specify comments 🗣️ in code.

<!-- ## Video

<YouTube videoId="zCvKMw5QHRw" /> -->

## Single line comment

![Slash](https://media.giphy.com/media/bKXMS0NjXoyaY/giphy.gif)

The first 1️⃣ way is `// comment` 🗣️ in this case all text 📜 in the line after the double slash will be a comment 🗣️. When the interpreter sees two 2️⃣ slashes in a row `//`, it immediately understands that everything that goes further to the end of the line can be safely ignored. For now, ignore the syntax 📖 of the code, we will get to know it in detail a little later.

```jsx live
function learnJavaScript() {
  // This is a comment on the line
  var hello = 'Hello world!!!'

  return hello
}
```

## Multi-line comment

![Coments](https://media.giphy.com/media/UevalSWg5twQeqpc8Q/giphy.gif)

The second 2️⃣ way is `/ * * /`, which is more flexible than the first 1️⃣. As soon as the interpreter sees `/ *`, it thinks: "Yeah, so until I see`* /`, I can not pay any attention to anything here!"
For example, you can use it in one 1️⃣ line 👇:

```jsx live
function learnJavaScript() {
  /* This is a one-line comment */
  var hello = 'Hello world!!!'

  return hello
}
```

Alternatively, you can make a multi-line comment 🗣️ as shown here 👇:

```jsx live
function learnJavaScript() {
  /* This comment spans multiple lines.
      Please note that you do not need to terminate the comment until you have finished */
  var hello = 'Hello world!!!'
  /* Write your comment here */
  return hello
}
```

## Comment in the middle of the code

![Among](https://media.giphy.com/media/fnjIiBNo38IHS/giphy.gif)

Also, if you wish, you can use this commenting 🗣️ in the middle of a line of code. Although this may impair the readability of the code👇:

```jsx live
function learnJavaScript() {
  var x = ''
  var hello = 'Hello ' + x /* insert the value x */ + '!'

  return hello
}
```

With the commenting on the code, that's all and the call for a break sounded.

![Comments](https://media.giphy.com/media/SvuRLwWT0EoeErwPvB/giphy.gif)

## Problems?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Write to [Discord](https://discord.gg/6GDAfXn) chat.

## Questions:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

Who are the comments for?

1. person
2. Console
3. JavaScript interpreter

What are comments not used for?

1. Adding tips, notes, suggestions
2. As part of the program code
3. To prevent code execution

Which way of specifying a comment in JavaScript code does not exist?

1. `('')`
2. `//`
3. `/ * * /`

How do I disable any number of lines of code?

1. Write a comment in the middle of the code
2. Wrap the code in a comment
3. Use the command `console.log`

In order to understand how much you learned this lesson, take the test in the [mobile application](http://onelink.to/njhc95) of our school on this topic or in our [telegram bot](https://t.me/javascriptcamp_bot).

![Sumerian school](/img/app.jpg)

## Links

1. [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Lexical_grammar)
2. [Код для подростков: прекрасное руководство по программированию для начинающих, том 1: Javascript - Jeremy Moritz ](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)
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
