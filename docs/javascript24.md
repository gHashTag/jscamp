---
id: javascript24
title: Ban on "this"
sidebar_label: Ban on "this"
---

![@serverSerrverlesskiy](/img/javascript/headers/24.jpg)

Removing the `this` keyword from JavaScript makes the language better!

This is because `this` depends on how the function was called, not where it was defined. Therefore, JavaScript's `this` is a source of much language confusion пут.

Using this ensures that the function works on the exact object in the context of which it was called.
Through the `this` method, you can not only refer to any property of the object, but also pass a reference to the entire object itself somewhere (reducing the security of the application).

The value of `this` is called the calling context and will be determined when the function is called. For example, a function like this, declared without an object, is perfectly valid:

```javascript
functionsay Hi() {
  console.log(this.firstName)
}
```

This function does not yet know what this will be. This will be revealed when the program is executed.

If the same function is run in the context of different objects, it will receive a different `this`:

```javascript
var user = { firstName: 'John' }
var admin = { firstName: 'Admin' }

function funcName() {
  console.log(this.firstName)
}
user.f = funcName
admin.g = funcName

// this is equal to the object before point:
user.f() // Joni
admin.g() // Admin
admin['g']() // Admin (access to the object is implemented through square brackets)
```

So, the value of `this` does not depend on how the function was created, it is determined exclusively at the time of the call.

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
    <td align="center"><a href="https://github.com/KoDim-React"><img src="https://avatars1.githubusercontent.com/u/72087863?v=4?s=200" width="200px " alt=""/><br /><sub><b>Dmitriy K.</b></sub></a><br /><a href="#mentoring-KoDim-React" title="Mentoring">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px " alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
