---
id: javascript26
title: Promise - deferred and asynchronous computation
sidebar_label: Promise
---

![@serverSerrverlesskiy](/img/javascript/headers/27.jpg)

A Promise is an object that contains the future value of an asynchronous operation. For example, if you request some data from a server, a promise promises us to receive this data that we can use in the future.

![math](https://media.giphy.com/media/4JVTF9zR9BicshFAb7/giphy.gif)

At first, the promise has the status `pending`, then it has one of: `fulfilled` ("successfully completed") or `rejected` (" completed with an error🙅‍♂️ ").

![promise states](/img/javascript/23/promise.png)

1. `Pending` - The promise is pending if the result is not ready. That is, it is waiting for something to complete (for example, the completion of an asynchronous operation).
2. `Fulfilled` - Promise resolved if result is available. That is, something completed its execution (for example, an asynchronous operation) and everything went well.
3. `Rejected` - Promise was rejected if an error occurred during execution.

## Create a promise

![Plus](https://media.giphy.com/media/Yqo5mjWTLGlVOIP8Dc/giphy.gif)

A `Promise` object is created using the new keyword and its own constructor.
The Promise constructor takes one argument, a callback, also known as an execution function⚙️, which takes 2 callbacks, `resolve` and` reject`.

The executive function is executed immediately after the promise is created. A promise is made fulfilled by calling `resolve` and rejected by calling `reject`.

```jsx
const promise = new Promise((resolve, reject) => {
  if (allWentWell) {
    resolve('Everything went great!')
  } else {
    reject('Something went wrong')
  }
})
```

`resolve` and `reject` take one argument, which can be a string, number, boolean expression, array, or object.

To provide a function with promises functionality, you just need to return a `Promise` object in it:

```jsx
function myAsyncFunction(url) {
  return new Promise((resolve, reject) => {
    // function code
  })
}
```

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
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
