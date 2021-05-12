---
id: javascript11
title: Type conversion and casting
sidebar_label: Type conversion and casting
---

![@serverSerrverlesskiy](/img/javascript/headers/09.jpg)

## Type coercion (type coercion)

It is an automatic or implicit conversion of values from one data type to another (for example, a string to a number). Type conversions are similar to type conversions because they both convert values from one data type to another, with one key difference - type conversion is implicit, while type conversion can be implicit or explicit.

![transformation](https://media.giphy.com/media/xT4uQr9H3EDL7Ha2hq/giphy.gif)

Examples 👇:

```jsx live
function learnJavaScript() {
  const value1 = '5'
  const value2 = 9
  let sum = value1 + value2

  return sum
}
```

In the example above, JavaScript casts the number `9` into a string, and then concatenates the two 2️⃣ values together, resulting in the string `59`. JavaScript had a choice between string or number and chose to use string.

The compiler could convert the string `5` to a number and return the sum of `14`, but it did not. To get this result, you need to explicitly convert the string `5` to a number using the` Number()` 👇 method:

```jsx live
function learnJavaScript() {
  const value1 = '5'
  const value2 = 9
  let sum = Number(value1) + value2

  return sum
}
```

## Type conversion

![Transformation](https://media.giphy.com/media/l2SpMMVivErM0Q7jG/giphy.gif)

Means the transfer of data from one data type to another. Implicit conversion occurs when the compiler automatically assigns (assigns) data types, but the source code may also explicitly require the conversion to complete.

## Payment

Now you are on a stripped-down version of the site, after subscribing to [Patreon](https://www.patreon.com/javascriptcamp), you will get full access to the training course, as well as access to our server's private channels in [Discord](https://discord.gg/6GDAfXn).

Download our [mobile application](http://onelink.to/njhc95) or get tested in our [JavaScript telegram bot](https://t.me/javascriptcamp_bot), and also subscribe to [our news](https://t.me/javascriptapp).

[![Become a Patron!](/Img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)


[![Sumerian school](/img/app.jpg)](http://onelink.to/njhc95)

![JavaScript Camp](/img/bandlink.png)

## Links

1. [MDN web docs - Typecasting](https://developer.mozilla.org/en/docs/Словарь/Type_coercion)
2. [Code for Teens: The Perfect Beginner's Guide to Programming, Volume 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)
3. [JavaScript.ru](https://learn.javascript.ru/ifelse#blok-else)
4. [Integer arithmetic](https://maths-public.ru/arithmetic/actions)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">📖</a><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>
  
</table>

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
