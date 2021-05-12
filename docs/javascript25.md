---
id: javascript25
title: Asynchronous Event loop
sidebar_label: Event loop
---

![@serverSerrverlesskiy](/img/javascript/headers/26.jpg)

## Asynchronous

In JavaScript, asynchrony is the main tool that processes requests in parallel with the loading of a web page. Now it is impossible to imagine the Internet, where all requests to the server would be sent with a page reload.

Any data from the server is requested asynchronously: a request is sent (XMLHttpRequest or XHR), and the code📟 does not wait for its return🔄, continuing to execute. When the server responds, the XHR object is notified of this and runs the callback function that was passed to it before sending the request.

If you use the language tools correctly👅, then the execution of a request, which occurs sequentially and in one thread, does not interfere in any way with the reception of events and the reaction to them - a person👨 calmly works with the interface, not noticing lags, crashes and freezes.

## Event loop

![Queue](https://media.giphy.com/media/5YuhLwDgrgtRVwI7OY/giphy.gif)

The JavaScript `Event loop` is an asynchronous call manager.

To make this tricky process work smoothly, JavaScript implements a mechanism to control the sequence of code execution📟. Since it is a single-threaded language👅, it became necessary to "wedge" into the current execution context. This mechanism is called an event loop.

From English, `loop` translates as" loop ", which perfectly reflects the meaning: we are dealing with a loopback queue.

`Event loop` regulates the sequence of execution of contexts - the stack. It is generated when an event was triggered or a function was called. The response to the event is placed in the execution queue, in the `event loop`, which sequentially, with each loop, executes the code that gets into it📟. In this case, the function bound to the event is called next after the current execution context.

In JavaScript, synchronous and asynchronous execution queues are constantly running. Synchronous - `stack` - forms a queue and forwards to asynchronous - `event loop` - function calls⚙️ that will be executed after the currently scheduled executable context.

For data to be in a consistent state, each function must be completed. This is due to the single-threading of JavaScript and some other features, such as closures characteristic of functional "languages" of programming. Therefore, a single thread is represented as a queue of execution contexts, in which functions that have passed through the event loop are "wedged".

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
    <td align="center"><a href="https://github.com/AlisaNasibullina"><img src="https://avatars3.githubusercontent.com/u/74646904?s=460&v=4" width="200px;" alt=""/><br /><sub><b>AlisaNasibullina</b></sub></a><br /><a href="#mentoring-KoDim-React" title="Mentoring">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
  <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 </a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
