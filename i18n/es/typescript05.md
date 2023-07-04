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

## Inheritance

TypeScript uses familiar object-oriented programming approaches. One of the most fundamental approaches in class-based programming is the creation of new classes using inheritance.

Example:

```typescript
class Animal {
  name: string
  constructor(theName: string) {
    this.name = theName
  }
  move(distanceInMeters: number = 0) {
    return this.name + ' moved ' + distanceInMeters + ' m.'
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name)
  }
  move(distanceInMeters = 5) {
    super.move(distanceInMeters)
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name)
  }
  move(distanceInMeters = 45) {
    super.move(distanceInMeters)
  }
}

let sam = new Snake('Sammy the Python')
let tom = new Horse('Tommy the Palomino')

sam.move()
tom.move(34)
```

Here, the `extends` keyword is used to create a subclass. The Horse and Snake classes are based on the Animal class and they access its capabilities.
The Snake and Horse classes create a move method that overrides the move method from the Animal class, giving it functionality specific to each class.

These are just the basics of working with classes. But in our course we are only getting to know the classes, since the `JavaScript` library` React Native` teaches us functional programming.

## Links:

1.  [Metanit](https://metanit.com/web/typescript/3.1.php)
2.  [TypeScript-lang leadership TypeScript](http://typescript-lang.ru/docs/Classes.html)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/FELiX-RN"><img src="https://avatars0.githubusercontent.com/u/72006627?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Philipp Dvinyaninov</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=FELiX-RN" title="Documentation">  </a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)
