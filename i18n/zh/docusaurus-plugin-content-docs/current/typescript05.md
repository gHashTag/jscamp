---
id: typescript05
title: Классы
sidebar_label: Классы
---

TypeScript реализует объектно-ориентированный подход, в нем есть полноценная поддержка классов. Класс представляет шаблон для создания объектов и инкапсулирует функциональность, которую должен иметь объект. Класс определяет состояние и поведение, которыми обладает объект.

## Классы

Рассмотрим простой пример работы с классами:

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

Объявлен новый класс Greeter. Этот класс имеет три пункта: свойство greeting, конструктор, и метод greet. В последней строке создается экземпляр класса Greeter, используя new. Он вызывает конструктор, что определен ранее, создает новый объект, и запускает конструктор для его инициализации.

## Наследование

В TypeScript используются привычные подходы объектно-ориентированного программирования. Одним из самых фундаментальных подходов в области программирования на основе классов является создание новых классов с помощью наследования.

Пример:

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

Здесь, ключевое слово `extends`, используется для создания подкласса. Классы Horse и Snake основаны на классе Animal и они получают доступ к его возможностям.
Классы Snake и Horse создают метод move, который переопределяет метод move из класса Animal, придавая ему функциональность, специфичную для каждого из классов.

Это только основы работы с классами. Но в нашем курсе мы только ознокамливаемся с классами, так как `JavaScript` библиотека `React Native` учит нас функцианальному программированию.

## Ссылки:

1.  [Metanit](https://metanit.com/web/typescript/3.1.php)
2.  [TypeScript-lang руководство TypeScript](http://typescript-lang.ru/docs/Classes.html)

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

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)
