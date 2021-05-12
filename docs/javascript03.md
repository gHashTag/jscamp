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

## Payment

Now you are on a stripped-down version of the site, after subscribing to [Patreon](https://www.patreon.com/javascriptcamp), you will get full access to the training course, as well as access to our server's private channels in [Discord](https://discord.gg/6GDAfXn).

Download our [mobile application](http://onelink.to/njhc95) or get tested in our [JavaScript telegram bot](https://t.me/javascriptcamp_bot), and also subscribe to [our news](https://t.me/javascriptapp).

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)


[![Sumerian school](/img/app.jpg)](http://onelink.to/njhc95)

 

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>
  
</table>

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
