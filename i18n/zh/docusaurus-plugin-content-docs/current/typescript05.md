---
id: typescript05
title: Classes
sidebar_label: Classes
---


TypeScript takes an object-oriented approach and has full class support. The class represents a template for creating objects and encapsulates the functionality that an object must have. A class defines the state and behavior that an object has.

## Classes

Let's look at a simple example of working with classes:

```typescript
class Greeter {
  greeting: string // Свойство greeting, тип строка
  constructor(message: string) {
    // Конструктор класса Greeter
    this.greeting = message
  }
  greet() {
    // Метод класса Greeter
    return 'Hello, ' + this.greeting
  }
}

let greeter = new Greeter('world')

greeter.greet() // Вернет строчку Hello world
```

A new class Greeter has been declared. This class has three items: a greeting property, a constructor, and a greet method. The last line instantiates the Greeter class using new. It calls the constructor defined earlier, creates a new object, and runs the constructor to initialize it.

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
