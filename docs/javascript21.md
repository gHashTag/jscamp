---
id: javascript21
title: Классы
sidebar_label: Классы
---

В JavaScript используется модель прототипного наследования: каждый объект наследует поля (свойства) и методы объекта-прототипа.

Классы создаются для более удобной работы с объектами, но так как JavaScript библиотека React Native учит нас функцианальному программированию, то в рамках этого курса по JavaScript мы рассмотрим классы словно мы пришли в музей истории поглядеть на мамонта, так как мы полностью отказались от использования классов в наших мобильных приложениях!

## Определение: ключевое слово class

Для определения класса используется ключевое слово `class`:

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

Такой синтаксис называется объявлением класса.

:::note Методы в классе не разделяются запятой
Синтаксис классов отличается от литералов объектов. Внутри классов запятые не требуются.
:::

Класс может не иметь названия. С помощью выражения класса можно присвоить класс переменной:

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

Класс становится полезным, когда вы создаете экземпляр класса. `Экземпляр` — это объект, содержащий данные и поведение, описанные классом.

Оператор new создает экземпляр класса в JavaScript таким образом: instance = new Class().

Например, вы можете создать экземпляр класса User с помощью оператора new:

```jsx
const myUser = new User()
```

new User() создает экземпляр класса User.

## Инициализация: constructor()

`constructor(…)` это специальный метод в теле класса, который инициализирует экземпляр. Это место, где вы можете установить начальные значения для полей или выполнить любые настройки объектов.

В следующем примере конструктор устанавливает начальное значение поля `name`:

```jsx
class User {
  constructor(name) {
    this.name = name
  }
}
```

`constructor` класса `User` использует один параметр name, который используется для установки начального значения поля `this.name`.

Внутри конструктора значение `this` равно вновь созданному экземпляру.

Аргументы, используемые для создания экземпляра класса, становятся параметрами конструктора:

```jsx
class User {
  constructor(name) {
    name // => 'Jon Snow'
    this.name = name
  }
}

const user = new User('Jon Snow')
```

Параметр `name` внутри конструктора имеет значение ‘Jon Snow’.

Если вы не определяете конструктор для класса, создается конструктор по умолчанию. Конструктор по умолчанию является пустой функцией, которая не изменяет экземпляр.

В классе может быть только один метод с именем constructor.

## Геттеры и сеттеры

Геттеры и сеттеры — это вычисляемые свойства. Это методы, имитирующие поля, но позволяющие читать и записывать данные.

Геттеры используются для получения данных, а сеттеры — для их изменения.

Пример:

```jsx
class User {
  #nameValue

  constructor(name) {
    this.name = name
  }

  get name() {
    return this.#nameValue
  }

  set name(name) {
    if (name === '') {
      throw new Error('Имя пользователя не может быть пустым')
    }
    this.#nameValue = name
  }
}

const user = new User('Печорин')
user.name // вызывается геттер, Печорин
user.name = 'Бэла' // вызывается сеттер

user.name = '' // Имя пользователя не может быть пустым
```

## Наследование: extends

Классы в JavaScript поддерживают наследование с помощью ключевого слова extends.

В выражении class Child extends Parent { } класс Child наследует от класса Parent конструктор, поля и методы.

Создадим дочерний класс ContentWriter, расширяющий родительский класс User:

```jsx
class User {
  name

  constructor(name) {
    this.name = name
  }

  getName() {
    return this.name
  }
}

class ContentWriter extends User {
  posts = []
}

const writer = new ContentWriter('Лермонтов')

writer.name // Лермонтов
writer.getName() // Лермонтов
writer.posts // []
```

ContentWriter наследует от User конструктор, метод getName() и поле name. В самом ContentWriter определяется новое поле posts.

Обратите внимание, что частные поля и методы родительского класса не наследуются дочерними классами.

### Родительский конструктор: super() в constructor()

Для того, чтобы вызвать конструктор родительского класса в дочернем классе, следует использовать специальную функцию super(), доступную в конструкторе дочернего класса.

Пусть конструктор ContentWriter вызывает родительский конструктор и инициализирует поле posts:

```jsx
class User {
  name

  constructor(name) {
    this.name = name
  }

  getName() {
    return this.name
  }
}

class ContentWriter extends User {
  posts = []

  constructor(name, posts) {
    super(name)
    this.posts = posts
  }
}

const writer = new ContentWriter('Лермонтов', ['Герой нашего времени'])
writer.name // Лермонтов
writer.posts // ['Герой нашего времени']
```

super(name) в дочернем классе ContentWriter вызывает конструктор родительского класса User.

Обратите внимание, что в дочернем конструкторе перед использованием ключевого слова this вызывается super(). Вызов super() «привязывает» родительский конструктор к экземпляру.

```jsx
class Child extends Parent {
  constructor(value1, value2) {
    // не работает!
    this.prop2 = value2
    super(value1)
  }
}
```

## Пример

```jsx
class Animal { //Создание класса Animal. Классы называют с большой буквы

static type = 'ANIMAL' //При помощи ключевого слова static можно объявлять переменные внутри класса. Их можно вызвать только самим классом, т.е. Animal.type

  constructor(options) { //Конструктор принимает объект options
    this.name = options.name // Инициализация полей класса
    this.age = options.age
    this.hasTail = options.hasTail
  }

  voice() { //Метод для класса Animal. Можно вызвать у объекта cat как cat.voice()
    alert('I am Animal!')
  }
}

get ageInfo(){ //Создание геттера ageInfo
  return this.age * 7 //Если вызвать геттер у объекта cat, то получиться 5 * 7 = 35
}

set ageInfo(newAge) { //Создание сеттера ageInfo.
  this.age = newAge // Если выполнить у объекта cat команду cat.ageInfo = 8, то полю age присвоится значение 8
}

const cat = new Animal({ //Создание объекта при помощи класса Animal
  name: 'Cat',
  age: 5,
  hasTail: true
})
```

## Вопросы:

Для того чтобы понять, на сколько вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме.

![Sumerian school](/img/app.png)

## Ссылки:

1.  [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes)
2.  [Learn JavaScript](https://learn.javascript.ru/class)

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

[![Become a Patron!](/img/logo/patreon.png)](https://www.patreon.com/bePatron?u=31769291)
