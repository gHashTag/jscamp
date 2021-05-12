---
id: javascript15
title: Switch case construct
sidebar_label: Switch case construct
---

![@serverSerrverlesskiy](/img/javascript/headers/14.jpg)

The switch construction is used to compare a value for equality with different options.

In this case, equality is implied in the sense of the operator strict equality `===`, it cannot compare with a regular expression or somehow else. That is, the values must be of the same type for equality to hold.

![comparison](https://media.giphy.com/media/icJA0VF7ntoEL18Jez/giphy.gif)

If the condition matches, then the code block📟 associated with the corresponding `case` is executed. If none of the conditions match, then the code specified in the `default` block, if any, is executed. To exit the construction, use the `break` command. If you do not specify it, the code block is automatically executed in the next `case`, etc. Therefore, we use `break` in our scripts, so as not to run the interpreter over all `cases`, thereby reducing the performance of the script.

## Syntax

![Syntax](https://media.giphy.com/media/yR4xZagT71AAM/giphy.gif)

A `switch` construct has one or more` case` blocks and an optional `default` block.

It looks like this:

```jsx
switch (n) {
  case 1:
    // code block 1;
    break
  case 2:
    // code block 2;
    break
  // .......
  // other case options
  // .......
  default:
  // code block if none of the conditions match;
}
```

`n` - this is [boolean](https://react-native-village.github.io/docs/javascript08) condition.

## Payment

Now you are on a stripped-down version of the site, after subscribing to [Patreon](https://www.patreon.com/javascriptcamp), you will get full access to the training course, as well as access to our server's private channels in [Discord](https://discord.gg/6GDAfXn).

Download our [mobile application](http://onelink.to/njhc95) or get tested in our [JavaScript telegram bot](https://t.me/javascriptcamp_bot), and also subscribe to [our news](https://t.me/javascriptapp).

[![Become a Patron!](/Img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)


[![Sumerian school](/img/app.jpg)](http://onelink.to/njhc95)

![JavaScript Camp](/img/bandlink.png)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/FELiX-RN"><img src="https://avatars0.githubusercontent.com/u/72006627?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Philipp Dvinyaninov</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=FELiX-RN" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
