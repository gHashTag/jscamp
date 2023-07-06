---
id: javascript23
title: Classes
sidebar_label: Classes
---

![@serverSerrverlesskiy](/img/javascript/headers/23.jpg)

JavaScript uses the prototypal inheritance model: each object inherits the fields (properties) and methods of the prototype object.

## class

The keyword `class` is used to define a class:

```jsx
class MyClass {
  // class methods
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}
```

This syntax is called a class declaration.

![Class](https://media.giphy.com/media/cYaBD8kxE4PZudHBRA/giphy.gif)

:::note Methods in the class are not comma separated
Class syntax differs from object literals. No commas are required inside classes.

:::

The class may not have a name. A class expression can be used to assign a class to a variable :

```jsx
const UserClass = class {
  // class body
}
```

Classes can be exported as modules. Here's an example of the default export:

```jsx
export default class User {
  // class body
}
```

And here's an example of a named export:

```jsx
export class User {
  // class body
}
```

The class becomes useful when you instantiate the class. An instance is an object that contains the data and behavior described by 
class.

The `new` operator creates an instance of a class in JavaScript like this: `instance = new Class()`.

For example, you can create an instance of the User class👤 using the `new` operator:

```jsx
const myUser = new User()
```

`new User()` creates an instance of the `User` class 👤.

## Initialization: constructor ()

![spangeBob](https://media.giphy.com/media/3oriNZoNvn73MZaFYk/giphy.gif)

`constructor (...)` is a special method in the body of the class that initializes an instance. This is the place where you can set initial values for the fields or make any adjustments to the objects.

In the following example, the constructor sets the initial value of the `name` field:

```jsx
class User {
  constructor(name) {
    this.name = name
  }
}
```

The `constructor` of the `User` class takes one parameter, `name`, which is used to set the initial value of the `this.name` field.

Inside the constructor, the value of `this` is equal to the newly created instance.

The arguments used to instantiate the class become parameters to the constructor :

```jsx live
function learnJavaScript() {
  class User {
    constructor(name) {
      name // => 'Jon Snow'
      this.name = name
    }
  }

  const user = new User('Jon Snow') // Here you can change the value
  return user.name
}
```

The `name` parameter inside the constructor is `Jon Snow`.

If you do not define a constructor for a class, a default constructor is created. The default constructor is an empty function⚙️ that does not modify the instance.

There can be only one method named `constructor` in a class.

## Discarding classes

![rejection](https://media.giphy.com/media/l2SpUoAPo0CBOkyxq/giphy.gif)

Since in the course of our school we teach to develop mobile applications using the library [React](https://reactjs.org), where is the innovation [React Hooks](https://en.reactjs.org/docs/hooks-intro.html) allows you to use state and other React features without writing classes. Therefore, it makes no sense to talk about classes anymore, since we have abandoned them.

 [![EnglishMoji!](/img/logo/englishmoji.png)](https://link-to.app/xvh7Ush9kl)

## Problems?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Write to [Discord](https://discord.gg/6GDAfXn) chat.

## Questions:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

What is the keyword for class definition?

1. `constructor()`
2. `class`
3. `this`

Are methods inside a class comma separated?

1. Yes
2. No

How many `constructor()` methods can there be in one class?

1. Unlimited
2. Up to ten
3. Only one

<!-- Что такое геттеры и сеттеры?

1. Это поля
2. Это методы имитирующие поля
3. Это свойства поля

Наследуются ли частные поля и методы родительского класса, дочерним классом?

1. Да
2. Нет

Когда вызывается родительскй конструктор в дочернем классе?

1. Перед this
2. После this -->

In order to understand how much you learned this lesson, take the test on the [mobile application](http://onelink.to/njhc95) of our school on this topic.

![Sumerian school](/img/app.jpg)

<!--
## Геттеры и сеттеры

![Math](https://media.giphy.com/media/uWzbH8xJGIwOBPfzhc/giphy.gif)

Геттеры и сеттеры — это вычисляемые свойства. Это методы, имитирующие поля, но позволяющие читать и записывать  данные.

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

![Throne](https://media.giphy.com/media/l1KVcMMxJJpks23cs/giphy.gif)

Классы в JavaScript поддерживают наследование с помощью ключевого🗝️ слова `extends`.

В выражении `class Child extends Parent { }` класс `Child` наследует от класса `Parent` конструктор, поля и методы.

Создадим дочерний класс `ContentWriter`, расширяющий родительский класс `User` 👤:

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

`ContentWriter` наследует от `User` конструктор, метод `getName()` и поле `name`. В самом `ContentWriter` определяется новое поле `posts`.

Обратите внимание, что частные поля и методы родительского класса не наследуются дочерними классами.

### Родительский конструктор: super() в constructor()

![parents](https://media.giphy.com/media/QWMjLXYuRpl5cvCQ9r/giphy.gif)

Для того, чтобы вызвать конструктор родительского класса в дочернем классе, следует использовать специальную функцию⚙️ `super()`, доступную в конструкторе дочернего класса.

Пусть конструктор `ContentWriter` вызывает родительский конструктор и инициализирует поле `posts`  :

```jsx live
function learnJavaScript() {
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

  return writer.name //name можно заменить на posts и посмотреть результат
}
```

`super(name)` в дочернем классе `ContentWriter` вызывает конструктор родительского класса `User`.

Обратите внимание, что в дочернем конструкторе перед использованием ключевого🗝️ слова `this` вызывается `super()`. Вызов `super()` "привязывает" родительский конструктор к экземпляру.

![super](https://media.giphy.com/media/10mTnPIEHNZpAs/giphy.gif)

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

![math](https://media.giphy.com/media/3orieN7HEHI0tw8x5C/giphy.gif)

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

![Wow](https://media.giphy.com/media/3oriO13KTkzPwTykp2/giphy.gif) -->

<!-- ## Вопросы:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

Для того чтобы понять, на сколько вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме.

![Sumerian school](/img/app.jpg) -->

<!-- Сколько методов constructor() может находится в одном классе?

1. Неограниченно
2. До десяти
3. Только один

Что такое геттеры и сеттеры?

1. Это поля
2. Это методы имитирующие поля
3. Это свойства поля

Наследуются ли частные поля и методы родительского класса, дочерним классом?

1. Да
2. Нет

Когда вызывается родительскй конструктор в дочернем классе?

1. Перед this
2. После this -->

## Links:

1.  [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes)
2.  [Learn JavaScript](https://learn.javascript.ru/class)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/FELiX-RN"><img src="https://avatars0.githubusercontent.com/u/72006627?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Philipp Dvinyaninov</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=FELiX-RN" title="Documentation">  </a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![EnglishMoji!](/img/logo/englishmoji.png)](https://link-to.app/xvh7Ush9kl)
