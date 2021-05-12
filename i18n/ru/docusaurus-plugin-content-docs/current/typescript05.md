---
id: typescript05
title: Классы
sidebar_label: Классы
---

TypeScript реализует объектно-ориентированный подход, в нем есть полноценная поддержка классов. Класс представляет шаблон для создания объектов и инкапсулирует функциональность, которую должен иметь объект. Класс определяет состояние и поведение, которыми обладает объект.

## Классы

Рассмотрим простой пример работы с классами:

[Пример](https://www.typescriptlang.org/play?ssl=15&ssc=59&pln=1&pc=1#code/MYGwhgzhAEDiBOBTRAXR9oG8BQ1oHMlUBLAO3wC5oIV4z9oB6R6QQhBAmEED4QQThBBBEECEQLgSIp6AGmj9AHCCB+EGgDAAiCdAXCCAGEFzRgAe1I14AV2Aot8ABQBbRFDD5EVPfQCUWDXmbRAWCCdAvCCLAwiDK-JwK0MqA3CCqvLyqcCLortAoABbEEAB0hMii5NAAvNCW1rYaAL4amaimzjh4biyAOCCArCBBgCwgoRFRMQhZ8bXQSCj68KTQAOQAEoggIFoSo9AA1Ikp6RXZ+KXYZdggqMI9GPmkiADusQemoycmIAAmo47Y2Nq6WrtpM-ima+gZIlXQRzuQBIII0FN5mvJ+EpAOIgyj80Em0y00Gu8DuQA)

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

console.log(greeter.greet()) // Вернет строчку Hello world
```

Объявлен новый класс `Greeter`. Этот класс имеет три пункта: свойство `greeting`, конструктор, и метод `greet`. В последней строке создается экземпляр класса `Greeter`, используя new. Он вызывает конструктор, что определен ранее, создает новый объект, и запускает конструктор для его инициализации.

<!-- ## Наследование

В TypeScript используются привычные подходы объектно-ориентированного программирования. Одним из самых фундаментальных подходов в области программирования на основе классов является создание новых классов с помощью наследования.

Пример

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

Здесь, ключевое слово `extends`, используется для создания подкласса. Классы `Horse` и `Snake` основаны на классе `Animal` и они получают доступ к его возможностям.
Классы `Snake` и `Horse` создают метод `move`, который переопределяет метод `move` из класса `Animal`, придавая ему функциональность, специфичную для каждого из классов.

## Отказ от классов

Так как в курсе нашей школы мы учим разрабатывать мобильные приложения с помощью библиотеки [React](https://ru.reactjs.org), где нововведение [React Hooks](https://ru.reactjs.org/docs/hooks-intro.html) позволяет использовать состояние и другие возможности [React](https://ru.reactjs.org) без написания классов. Поэтому рассказывать о классах больше нет смысла, так как мы от них отказались.

## Вопросы

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

Для чего используют классы?

1. Для создания процедур
2. Для создания объектов и инкапсулировния функциональности
3. Для создания процедур и функций

Один из самых фундоментальных подходов в объектно-ориентированном программировании на основе классов.

1. Наследование
2. Объекты
3. Функции

## Ссылки:

1.  [Metanit](https://metanit.com/web/typescript/3.1.php)
2.  [TypeScript-lang руководство TypeScript](http://typescript-lang.ru/docs/Classes.html) -->

## Оплата

Сейчас ты находишся на урезанной версии сайта, после оформления подписки на [Patreon](https://www.patreon.com/javascriptcamp), ты получишь полный доступ к обучающему курсу, а также доступ к серетным каналам нашего сервера в [Discord](https://discord.gg/6GDAfXn).  

Качай наше [мобильное приложение](http://onelink.to/njhc95) или пройди тестирование в нашем [JavaScript телеграм боте](https://t.me/javascriptcamp_bot), а также подпишись на [наши новости](https://t.me/javascriptapp).


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


[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)