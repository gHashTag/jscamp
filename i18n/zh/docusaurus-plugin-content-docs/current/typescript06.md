---
id: typescript06
title: Type conversion
sidebar_label: Type conversion
---


Types belonging to the same category as well as different currencies can be converted to each other.
Type conversion (typecasting) is the process of converting (converting) a value of one type to a value of another type.

Type conversions are divided into explicit and implicit conversions.

## Implicit conversions

Implicit conversions do not require any language constructs and do not lead to data loss.
An example of an implicit conversion is converting a value of type `int` to type` double`. Being a 64-bit real type, `double` can store any value of a 32-bit integer type `int`.

![inttodouble](/img/typescript/06/int-to-double.png)

As shown in the image above, converting an int to a double does not result in data loss, since a 32-bit value fits into 64 bits.

## Explicit conversions

Explicit conversions, often referred to as typecasting for clarity, take place with developer input and require the specification of language constructs called cast operators. Typecasting is required when data may be lost during the conversion process or, for some reason, the process may end with an error.
The simplest example of an explicit conversion is the conversion of the double type, used to store 64-bit floating point values, to the integer type int.

![doubletoint](/img/typescript/06/double-to-int.png)

## Payment

Now you are on a stripped-down version of the site, after subscribing to [Patreon](https://www.patreon.com/javascriptcamp), you will get full access to the training course, as well as access to our server's private channels in [Discord](https://discord.gg/6GDAfXn).

Download our [mobile application](http://onelink.to/njhc95) or get tested in our [JavaScript telegram bot](https://t.me/javascriptcamp_bot), and also subscribe to [our news](https://t.me/javascriptapp).

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)


[![Sumerian school](/img/app.jpg)](http://onelink.to/njhc95)

 

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/FELiX-RN"><img src="https://avatars0.githubusercontent.com/u/72006627?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Philipp Dvinyaninov</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=FELiX-RN" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
