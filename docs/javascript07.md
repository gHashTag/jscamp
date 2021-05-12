---
id: javascript07
title: Numbers
sidebar_label: Numbers
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/07.jpg)

There are two 2️⃣ types of numbers in modern JavaScript:

### `number`

Ordinary numbers in JavaScript are stored in the 64-bit IEEE-754 format, also called double precision floating point numbers. These are the numbers we will use most often. Integers are not considered a separate type of numbers. In addition to floating point numbers, the numeric data type also includes three character values: `Infinity`,` -Infinity`, and `NaN` (non-number).

![Numbers](https://media.giphy.com/media/JtBZm3Getg3dqxK0zP/giphy.gif)

### `bigInt`

Numbers make it possible to work with integers of arbitrary length. They are rarely needed and are used in cases where you need to work with values ​​outside the maximum safe integer value `Number`.

Any number, even a decimal fraction with a lot of decimal places, is never quoted.

You can use four types of numeric literals: decimal, binary, octal, and hexadecimal. Since the last three are used quite rarely, we will omit their detailed description 🖊️, but the curious can get acquainted with them [here](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Numbers_and_dates).

:::caution
Be careful when using leading zeros! This means you don't need to put zero before the decimal number.
:::

```jsx
1234567890
42

0888 // 888 is treated as decimal
0777 // treated as non-strict octal (511 decimal)
```

## Payment

Now you are on a stripped-down version of the site, after subscribing to [Patreon](https://www.patreon.com/javascriptcamp), you will get full access to the training course, as well as access to our server's private channels in [Discord](https://discord.gg/6GDAfXn).

Download our [mobile application](http://onelink.to/njhc95) or get tested in our [JavaScript telegram bot](https://t.me/javascriptcamp_bot), and also subscribe to [our news](https://t.me/javascriptapp).

[![Become a Patron!](/Img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)


[![Sumerian school](/img/app.jpg)](http://onelink.to/njhc95)

![JavaScript Camp](/img/bandlink.png)

## Links

1. [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Numbers_and_dates)
2. [Code for Teens: The Perfect Beginner's Guide to Programming, Volume 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)
3. [JavaScript.ru](https://learn.javascript.ru/number)
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
