---
id: javascript09
title: Functions
sidebar_label: Functions
---

![@serverSerrverlesskiy](/img/javascript/headers/10.jpg)

Functions⚙️ are needed so as not to repeat the same code📟 in many places in the program algorithm. In modern programs, functions are the main "building blocks".

## Don’t repeat yourself

DRY (rus. Do not repeat yourself) is a software development principle aimed at reducing the repetition of information of various kinds, especially in systems with many layers of abstraction. Functions are exactly the type of data that serves this design principle.

## Select function name

Function⚙️ is action! Therefore, the function name is usually a verb. It should be simple, precise, and describe the action of the function, so that the programmer reading the code📟 has a good understanding of what the function does.

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

Thanks to prefixes, at the first glance at the name of a function, it becomes clear what its code is doing and what value it can return🔄.

In any case, you and your team need to understand exactly what a prefix means and what a function⚙️ can and cannot do with it.

:::note Ultra-short function names⚙️
Function names⚙️ that are used very often are sometimes made extra short.

For example, the jQuery framework has a function⚙️ named `$`. In the Lodash library, the main function⚙️ is represented by the underscore name \ \_

These are exceptions. Basically, function names should be reasonably short and descriptive 🖊️.
:::

## Payment

Now you are on a stripped-down version of the site, after subscribing to [Patreon](https://www.patreon.com/javascriptcamp), you will get full access to the training course, as well as access to our server's private channels in [Discord](https://discord.gg/6GDAfXn).

Download our [mobile application](http://onelink.to/njhc95) or get tested in our [JavaScript telegram bot](https://t.me/javascriptcamp_bot), and also subscribe to [our news](https://t.me/javascriptapp).

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)


[![Sumerian school](/img/app.jpg)](http://onelink.to/njhc95)

 

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section 
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/KoDim-React"><img src="https://avatars1.githubusercontent.com/u/72087863?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy K.</b></sub></a><br /><a href="#mentoring-KoDim-React" title="Mentoring">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>

</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)

```

```
