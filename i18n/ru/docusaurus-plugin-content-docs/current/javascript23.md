---
id: javascript23
title: Классы
sidebar_label: Классы
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/23.jpg)

В JavaScript используется модель прототипного наследования: каждый объект наследует поля (свойства) и методы объекта-прототипа.

## class

Для определения класса используется ключевое🗝️ слово `class`:

```jsx
class MyClass {
  // методы класса
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}
```

Такой синтаксис📖 называется объявлением🗣️ класса.

![Class](https://media.giphy.com/media/cYaBD8kxE4PZudHBRA/giphy.gif)

:::note Методы в классе не разделяются запятой
Синтаксис📖 классов отличается от литералов объектов. Внутри классов запятые не требуются.
:::

Класс может не иметь названия. С помощью выражения класса можно присвоить класс переменной 🔔 :

```jsx
const UserClass = class {
  // тело класса
}
```

Классы можно экспортировать в виде модулей. Вот пример экспорта по умолчанию:

```jsx
export default class User {
  // тело класса
}
```

А вот пример именованного экспорта:

```jsx
export class User {
  // тело класса
}
```

Класс становится полезным, когда вы создаете экземпляр класса. Экземпляр — это объект, содержащий данные и поведение, описанные 🖊️
классом.

Оператор `new` создает🏗️ экземпляр класса в JavaScript таким образом: `instance = new Class()`.

Например, вы можете создать🏗️ экземпляр класса User 👤 с помощью оператора `new`:

```jsx
const myUser = new User()
```

`new User()` создает🏗️ экземпляр класса `User` 👤.

## Видео

<YouTube videoId="QIZRfgsIF04" />

<!-- ## Инициализация: constructor()

![spangeBob](https://media.giphy.com/media/3oriNZoNvn73MZaFYk/giphy.gif)

`constructor(…)` это специальный метод в теле класса, который инициализирует экземпляр. Это место, где вы можете установить начальные значения для полей или выполнить любые настройки объектов.

В следующем примере конструктор устанавливает начальное значение поля `name`:

```jsx
class User {
  constructor(name) {
    this.name = name
  }
}
```

`constructor` класса `User` использует один параметр `name`, который используется для установки начального значения поля `this.name`.

Внутри конструктора значение `this` равно вновь созданному🏗️ экземпляру.

Аргументы, используемые для создания экземпляра класса, становятся параметрами конструктора 👇 :

```jsx live
function learnJavaScript() {
  class User {
    constructor(name) {
      name // => 'Jon Snow'
      this.name = name
    }
  }

  const user = new User('Jon Snow') //Здесь можно менять значение
  return user.name
}
```

Параметр `name` внутри конструктора имеет значение `Jon Snow`.

Если вы не определяете конструктор для класса, создается🏗️ конструктор по умолчанию. Конструктор по умолчанию является пустой функцией⚙️, которая не изменяет экземпляр.

В классе может быть только один метод с именем `constructor`.

## Отказ от классов

![rejection](https://media.giphy.com/media/l2SpUoAPo0CBOkyxq/giphy.gif)

Так как в курсе нашей школы мы учим разрабатывать мобильные приложения с помощью библиотеки [React](https://ru.reactjs.org), где нововведение [React Hooks](https://ru.reactjs.org/docs/hooks-intro.html) позволяет использовать состояние и другие возможности [React](https://ru.reactjs.org) без написания классов. Поэтому рассказывать о классах больше нет смысла, так как мы от них отказались.

## Проблемы?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Пишите в [Discord](https://discord.gg/6GDAfXn) или телеграмм [чат](https://t.me/jscampapp), а также подписывайтесь на наши [новости](https://t.me/javascriptapp)

![JavaScript Camp](/img/bandlink.png)

## Вопросы:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

Какое ключевое🗝️ слово для определения класса?

1. `constructor()`
2. `class`
3. `this`

Методы внутри класса разделяются ли запятой.

1. `true`
2. `false`

Сколько методов `constructor()` может находится в одном классе?

1. Неограниченно
2. До десяти
3. Только один


Для того чтобы понять, на сколько вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме или в нашем [телеграм боте](https://t.me/javascriptcamp_bot).

![Sumerian school](/img/app.jpg) 

## Ссылки:

1.  [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes)
2.  [Learn JavaScript](https://learn.javascript.ru/class)
-->




## Оплата

Сейчас ты находишся на урезанной версии сайта, после оформления подписки на [Patreon](https://www.patreon.com/javascriptcamp), ты получишь полный доступ к обучающему курсу, а также доступ к серетным каналам нашего сервера в [Discord](https://discord.gg/6GDAfXn).  

Качай наше [мобильное приложение](http://onelink.to/njhc95) или пройди тестирование в нашем [JavaScript телеграм боте](https://t.me/javascriptcamp_bot), а также подпишитесь на [наши новости](https://t.me/javascriptapp).

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)


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
