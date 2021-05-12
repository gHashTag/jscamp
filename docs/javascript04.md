---
id: javascript04
title: Data types
sidebar_label: Data types
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/04.jpg)

## Dynamic typing

JavaScript is a loosely typed or dynamic language. This means that you do not need to define the type of the variable 🔔 in advance.

![Dinamics](https://media.giphy.com/media/26uf759LlDftqZNVm/giphy.gif)

The type will be determined automatically during program execution. It also means that you can use one variable 🔔 to store 📦 different types of data 👇:

```jsx live
function learnJavaScript() {
  let foo = 42 // now foo is of type number
  foo = 'bar' //and now foo is of type string
  return typeof foo
}
```

<!-- ## Video

<YouTube videoId="1zXZCVbNbkQ" /> -->

## typeof

In order to understand the data type contained in a variable, the `typeof` operator is used. The `typeof` operator returns the type of the argument.
It has two syntaxes, with brackets and without:

- Operator syntax: `typeof x`

- Function syntax: `typeof (x)`

They work the same, but the first syntax is shorter.

The result of `typeof` is a string containing the type.

```jsx live
function learnJavaScript() {
  let num = 9
  return typeof num
}
```

## Data types

![Data types](https://media.giphy.com/media/NPXkCN2FutVO1Nt4P9/giphy.gif)

The JavaScript standard defines 9 data types. Get to know each of them by outputting to the console and then I will tell you about each of them in more detail.

```javascript
let one = { firstName: 'John', lastName: 'Smith' } // object

let two = () => {} // function

let three = 'bar' // string

let four = 42 // number

let five = 19241924124n // bigint

let six = true // boolean

let seven = null // null

let eight // undefined

let nine = Symbol() // symbol
```

## Payment

Now you are on a stripped-down version of the site, after subscribing to [Patreon](https://www.patreon.com/javascriptcamp), you will get full access to the training course, as well as access to our server's private channels in [Discord](https://discord.gg/6GDAfXn).

Download our [mobile application](http://onelink.to/njhc95) or get tested in our [JavaScript telegram bot](https://t.me/javascriptcamp_bot), and also subscribe to [our news](https://t.me/javascriptapp).

[![Become a Patron!](/Img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)


[![Sumerian school](/img/app.jpg)](http://onelink.to/njhc95)

![JavaScript Camp](/img/bandlink.png)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>
  
</table>

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
