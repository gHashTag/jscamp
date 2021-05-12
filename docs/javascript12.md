---
id: javascript12
title: Block Scope
sidebar_label: Block Scope
---

![@serverSerrverlesskiy](/img/javascript/headers/12.jpg)

Scope is a part of a program within which a variable is available for use. When creating🏗️ `.js` file, we create🏗️ the scope of the whole file to create🏗️ the internal scope , you must declare it with curly braces `{...}`.

![file](https://media.giphy.com/media/3o6Ztk7NosfLVRqcpy/giphy.gif)

```jsx
// First scope
let fruit = 'Banana'
{
  // Second scope
  let fruit = 'Apple'
  {
    // Third scope
    let fruit = 'Lime'
  }
}
```

In this example, we have created🏗️ three variables in different scopes, which have their own version of the `fruit` variable, so no errors🙅‍♂️ occur, but if you try to create🏗️ two variables with the same name in the same scope, an error will occur🙅 ‍♂️.

```jsx
// First scope
let fruit = 'Banana'
{
  // Second scope
  let fruit = 'Apple'
  let fruit = 'Lime' // An error will occur here
}
```

When creating🏗️ various constructs, you also create a scope for that construct, since you use a block of curly braces `{...}`.

```jsx
if (true) {
  // Scope of the conditional operator
}

for (let i = 0; i > 5; i++) {
  // Scope of the cycle
}

function test() {
  // Function scope
}
```

In these examples, each construct has its own scope.

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
    <td align="center"><a href="https://github.com/IIo3iTiv"><img src="https://avatars1.githubusercontent.com/u/72025062?v=4?s=200" width="200px;" alt=""/><br /><sub><b>IIo3iTiv</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=IIo3iTiv" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
