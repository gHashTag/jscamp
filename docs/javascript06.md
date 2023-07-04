---
id: javascript06
title: Strings
sidebar_label: Strings
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/06.jpg)

In JavaScript, any text data is strings. However, do not forget that numbers can also be written in a string. Of all the data types, you will probably use strings the most. Let's analyze all the options for creating a new line.

<!-- ## Video

<YouTube videoId="ocQTm9K2vdo" /> -->

## Single or double quotes

![quotation marks](https://media.giphy.com/media/7cSTvZ4hI6ABZkcTwk/giphy.gif)

Either ‘single’ or “double” quotes are used to create strings.

```jsx
let single = 'Hello World'
let double = "Hello World" // prettier-ignore
```

You can use both of them, the main thing is that if you start a line with a single one, although there may be doubles inside, it must also be completed with a single one. And, accordingly, with double quotes.

```jsx
let double = "Don't you think so, d'Artagnan?"
let single = '"I think so, indeed!" - cried he.'
```

## Backslash

![shielding](https://media.giphy.com/media/3og0IPizf4zPR6VMt2/giphy.gif)

If the same quotes are used inside the string as outside, then they must be escaped with a backslash - the so-called "escape character". It is appended ➕ before the enclosing quotation mark `\ '' so that it does not indicate the end of the line.

```jsx live
// prettier-ignore
function learnJavaScript() {
  let backticks = 'It\'s not complicated'
  return backticks
}
```

Note that the backslash `\` is only used to correctly read the string by the interpreter, but it is not written  to the string after it has been read. When a string is saved to main memory, the `\` character is not added to it. You can clearly see this in the findings.

## Back quotes

![Dollar](https://media.giphy.com/media/26BoCwvDEWXnGlLyM/giphy.gif)

In writing a string, you can do without a backslash by using \ `back \` quotes.

Single and double quotes work essentially the same way, and if you use back quotes, we can insert arbitrary JavaScript expressions into such a string by wrapping them in a dollar sign with curly braces `$ {...}` :

```jsx live
function learnJavaScript() {
  const sum = (a, b) => a + b // this is a function, we'll get to know it later in the course
  return `1 + 2 = ${sum(1, 2)}`
}
```

Another advantage of backticks is that they can span more than one line.

```jsx live
function learnJavaScript() {
  let guestList = `Guests:
    * John
    * Pete
    * Mary
   `
  return guestList
}
```

Multiline strings can also be created with single and double quotation marks, using the so-called "line feed" character, which is written as `\ n`. All special characters, in JavaScript, begin with a backslash `\` True, we can check this in the browser console (`LIVE EDITOR` does not display correctly).

```jsx
let guestList = 'Guests:\n * John\n * Pete\n * Mary'

guestList // multi-line guest list
```

![console](/img/javascript/12.png)

## Strings are immutable

![Tree](https://media.giphy.com/media/YxlUxrYGw2w9y/giphy.gif)

The content of a string in JavaScript cannot be changed. You cannot take the symbol in the middle and replace it. Once a string is created - it is like that forever.
You can create a new string and write it to the same variable instead of the old one.

```jsx live
function learnJavaScript() {
  let str = 'Hi'
  str = 'P' + str[1] // replace string
  return str
}
```

## Popular string methods

### String length

![Length](https://media.giphy.com/media/Y1GK5MEiRa3OSVsxHK/giphy.gif)

The `length` property returns the number of code values in the string.

```jsx live
function learnJavaScript() {
  let str = 'My\n'.length
  return str
}
```

Please note that `\ n` is one special character, so everything is correct here: the length of the string is 3.

### Access to symbols

![Door](https://media.giphy.com/media/xUA7aLpVxPVEoEPXji/giphy.gif)

There are two 2️⃣ ways to get to a specific character in a string. The first method uses the `charAt ()` method. The first 1️⃣ character is at position zero:

```jsx live
function learnJavaScript() {
  let str = 'cat'.charAt(2)
  return str
}
```

You can also get a symbol using square brackets:

```jsx live
function learnJavaScript() {
  let str = 'cat'[2]
  return str
}
```

Square brackets are the modern way to get a character, while `charAt` exists mainly for historical reasons.

### Change case of characters

![Capital letter](https://media.giphy.com/media/3orifcBbnezczHmU8g/giphy.gif)

To convert the letters of a string to uppercase, use the `toUpperCase ()` method.

```jsx live
function learnJavaScript() {
  let str = 'Interface'.toUpperCase()
  return str
}
```

to lowercase `toLowerCase ()`

```jsx live
function learnJavaScript() {
  let str = 'Interface'.toLowerCase()
  return str
}
```

### Concatenate (concatenate) a string

![Chain](https://media.giphy.com/media/l3q2EOu4nu1D8uJKU/giphy.gif)

To construct a string from existing strings, use the plus sign `+` to concatenate the strings.

```jsx
let name = 'Mary '
let activity = 'drink tea'
let bio = 'Our guest ' + name + activity + '.'
bio // Our guest Mary drink tea.
```

<!-- Теперь попробуйте построить строку сами.

```jsx live
function learnJavaScript() {
  let name = 'John'
  let age = '15'
  let country = 'USA'
  let enjoyment = 'trevel'
  let slogan = '"Don\'t worry, be happy!"'
  let bio =
    'My name is ' +
    name +
    '. I am ' +
    age +
    " years old. I'm from " +
    country +
    '. I like ' +
    enjoyment +
    ', and my slogan for life: ' +
    slogan +
    '.'
  bio
  return bio
}
```

И `+=` for assignment with union.

```jsx live
function learnJavaScript() {
  let str = '123'
  str += 456
  return str
}
``` -->

So we got acquainted with the most popular data type in JavaScript and the most commonly used methods for it.

 [![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

## Problems?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Write to [Discord](https://discord.gg/6GDAfXn) chat.

## Questions:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

How strings are not written in JavaScript?

1. In single quotes
2. In backslashes
3. In back quotes

Why isn't a backslash used in a string?

1. For shielding
2. To write special characters
3. To end the line

Find the line with the error

1. let str = \ `It's not complicated \`
2. let str = "'I think so, indeed!' - cried he. "
3. let str = 'My slogan: "Don't worry, be happy!"'

Select "line feed character"

1. `\ n`
2. `\`
3. `\ *`

What letter will `'sport' [3]` return?

1. `o`
2. `r`
3. Will not return anything

How do I change a character in a JavaScript string?

1. Change the line
2. Get to the symbol and replace it
3. Create a new line and write it to the same variable instead of the old one

What method is used to capitalize letters?

1. `'Interface'.toUpperCase()`
2. `'Interface' [0] .toLowerCase()`
3. `'Interface'.toLowerCase()`

What character is used to concatenate strings?

1. `=`
2. `+`
3. `+ =`

In order to understand how much you learned this lesson, take the test in the [mobile application](http://onelink.to/njhc95) of our school on this topic or in our [telegram bot](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

## Links

1. [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Data_structures)
2. [Code for Teens: The Perfect Beginner's Guide to Programming, Volume 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)
3. [JavaScript.ru](https://learn.javascript.ru/types)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/Alena-Maitri"><img src="https://avatars1.githubusercontent.com/u/72432063?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Alena Yanbukhtina</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=Alena-Maitri" title="Documentation">  </a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

