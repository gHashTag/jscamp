---
id: javascript23
title: Clases
sidebar_label: Clases
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/23.jpg)

JavaScript usa un modelo de herencia de prototipo: cada objeto hereda los campos (propiedades) y métodos del objeto prototipo.

## class

La palabra clave `class` se utiliza para definir una clase:

```jsx
class MyClass {
  // métodos de clase
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}
```

Esta sintaxis   se llama declaración de clase.

![Class](https://media.giphy.com/media/cYaBD8kxE4PZudHBRA/giphy.gif)

:::note Los métodos en una clase no están separados por una coma
La sintaxis   de las clases es diferente de los objetos literales. No se requieren comas dentro de las clases.
:::

La clase puede no tener un nombre. Con una expresión de clase, puede asignar una clase a una variable :

```jsx
const UserClass = class {
  // cuerpo de clase
}
```

Las clases se pueden exportar como módulos. Este es un ejemplo de una exportación predeterminada:

```jsx
export default class User {
  // cuerpo de clase
}
```

Y aquí hay un ejemplo de una exportación con nombre:

```jsx
export class User {
  // cuerpo de clase
}
```

Una clase se vuelve útil cuando crea una instancia de la clase. Una instancia es un objeto que contiene los datos y el comportamiento descrito 
clase.

El operador `new` crea una instancia de una clase en JavaScript como esta: `instance = new Class()`.

Por ejemplo, puede crear una instancia  de la clase Usuario 👤 usando el operador `new`:

```jsx
const myUser = new User()
```

`new User()` crea una instancia de la clase  `User` 👤.

## Video

<YouTube videoId="rR_ZHhkx_O0" />

## Inicialización: constructor()

![spangeBob](https://media.giphy.com/media/3oriNZoNvn73MZaFYk/giphy.gif)

`constructor(...)` es un método especial en el cuerpo de una clase que inicializa una instancia. Este es el lugar donde puede establecer los valores iniciales de los campos o realizar cualquier ajuste en los objetos.

En el siguiente ejemplo, el constructor establece el valor inicial del campo `name`:

```jsx
class User {
  constructor(name) {
    this.name = name
  }
}
```

El `constructor` de la clase `User` toma un parámetro `name`, que se usa para establecer el valor inicial del campo 'este.nombre'.

Dentro del constructor, el valor de `this` es igual a la instancia  recién creada.

Los argumentos utilizados para instanciar la clase se convierten en parámetros del constructor :

```jsx live
function learnJavaScript() {
  class User {
    constructor(name) {
      name // => 'Jon Snow'
      this.name = name
    }
  }

  const user = new User('Jon Snow') // Aquí puedes cambiar el valor
  return user.name
}
```

El parámetro `name` dentro del constructor se establece en `Jon Snow`.

Si no define un constructor para una clase, se crea un constructor  predeterminado. El constructor predeterminado es una función vacía⚙️ que no modifica la instancia.

Una clase solo puede tener un método llamado `constructor`.

## Clases de rechazo

![rejection](https://media.giphy.com/media/l2SpUoAPo0CBOkyxq/giphy.gif)

Ya que en el curso de nuestra escuela enseñamos a desarrollar aplicaciones móviles utilizando la biblioteca [React] (https://ru.reactjs.org), donde la innovación es [React Hooks](https://ru.reactjs.org/docs/hooks-intro.html) te permite usar el estado y otras características de [React](https://ru.reactjs.org) sin escribir clases. Por lo tanto, ya no tiene sentido hablar de clases, ya que las hemos abandonado.

## ¿Problemas?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Escribe en [Discord](https://discord.gg/6GDAfXn) o Telegram [chat](https://t.me/jscampapp) y suscríbete a nuestras [noticias](https://t.me/javascriptapp)

![JavaScript Camp](/img/bandlink.png)

## Preguntas:

![Pregunta](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

¿Cuál es la palabra clave para definir una clase?

1. `constructor()`
2. `class`
3. `this`

Si los métodos dentro de una clase están separados por una coma.

1. `true`
2. `false`

¿Cuántos métodos `constructor()` pueden estar en una clase?

1. Ilimitado
2. Hasta diez
3. Solo uno

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

Para comprender cuánto ha aprendido esta lección, realice una prueba en la [aplicación móvil](http://onelink.to/njhc95) de nuestra escuela sobre este tema o en nuestro [bot de Telegram](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

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

Для того чтобы понять, на сколько вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме или в нашем [телеграм боте](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder) -->

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

## Enlaces:

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

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)
