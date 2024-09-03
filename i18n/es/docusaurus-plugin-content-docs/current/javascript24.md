---
id: javascript24
title: Prohibición de "esto"
sidebar_label: Prohibición de "esto"
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/24.jpg)

¡Eliminar la palabra clave `this`🗝️ de JavaScript hace que el lenguaje  sea mejor!

La razón es que 'esto' depende de cómo se llamó a la función⚙️, no de dónde se definió. Por lo tanto, `this` en JavaScript es una fuente de gran confusión en el lenguaje .

El uso de `this` asegura que la función opera en el objeto exacto en el contexto en el que se llama.
A través del método `this`, no solo puede acceder a cualquier propiedad del objeto, sino también pasar a algún lugar una referencia al objeto completo (reduciendo la seguridad de la aplicación).

El valor de `this` se denomina contexto de la llamada y se determinará en el momento en que se llame a la función. Por ejemplo, una función como esta, declarada sin objeto, es perfectamente válida:

```javascript
functionsay Hi() {
  console.log(this.firstName)
}
```

Esta función aún no sabe qué será `this`. Esto quedará claro cuando se ejecute el programa.

Si la misma función se ejecuta en el contexto de diferentes objetos, recibirá un `this` diferente:

```javascript
var user = { firstName: 'Joni' }
var admin = { firstName: 'administración' }

function funcName() {
  console.log(this.firstName)
}
user.f = funcName
admin.g = funcName

//this es igual al objeto antes del punto:
user.f() // Joni
admin.g() // administración
admin['g']() //Admin (el acceso al objeto se implementa entre corchetes)
```

Entonces, el valor de `this` no depende de cómo se creó la función, se determina únicamente en el momento de la llamada.

## Video

<YouTube videoId="/BS9zo9wVoTk" /> 

## `this` y sus desventajas

Los métodos son funciones⚙️ que se almacenan en objetos. Para que la función⚙️ sepa en qué objeto trabajar, use `this.`

![Poor](https://media.giphy.com/media/fQJbwrRJdHyMOP7RPH/giphy.gif)

Pero `this` pierde contexto en muchas situaciones (se desconoce el valor de retorno):

- pierde contexto dentro de funciones anidadas
- pierde contexto en las devoluciones de llamada
- `this` pierde contexto cuando el método se usa como controlador de eventos.

<!-- Давайте возьмем случай компонента `React`, который создает поисковый запрос. В обоих методах, используемых в качестве обработчиков событий, при исползовании `this` теряется контекст:

```SnackPlayer
import React, { Component } from 'react'

class SearchForm extends Component {
  state = {
    text: ''
  }

  handleChange(event) {
    const newQuery = Object.freeze({ text: event.target.value })
    this.setState(newQuery)
  }

  search() {
    const newQuery = Object.freeze({ text: this.state.text })
    if (this.props.onSearch) this.props.onSearch(newQuery)
  }

  render() {
    return (
      <form>
        <input onChange={this.handleChange} value={this.state.text} />
        <button onClick={this.search} type="button">
          Search
        </button>
      </form>
    )
  }
}

export default SearchForm
```

Существует множество решений этих `проблем:`

- метод `bind()`
- шаблон `that/self`
- `стрелочные функции.` -->

<!-- ### this не имеет инкапсуляции

![No](https://media.giphy.com/media/d2ZcfODrNWlA5Gg0/giphy.gif)

`this` создает проблемы безопасности. Все объявленные элементы `this` являются публичными.

```javascript
class Timer {
  constructor(callback, interval) {
    this.timerId = 'secret'
  }
}

const timer = new Timer()
timer.timerId // secret не такой уже секретный
```

### Нет this, нет пользовательских прототипов

![no](https://media.giphy.com/media/fsPcMdeXPxSP6zKxCA/giphy.gif)

Что, если вместо того, чтобы пытаться исправить утраченный контекст `this` и проблемы с безопасностью, мы избавимся от всего этого разом?

Удаление `this` имеет множество последствий. Отсутствие this в основном означает отсутствие `class`, отсутствие конструктора функции, отсутствие `new`, отсутствие `Object.create().`

Удаление `this` означает отсутствие пользовательских прототипов в целом. -->

## Mejor idioma

![Lo_mejor](https://media.giphy.com/media/ZBn3ZRvCbWz2PS3Rbg/giphy.gif)

JavaScript es tanto un lenguaje de programación funcional como un lenguaje basado en prototipos. Si nos deshacemos de `this`, nos quedamos con JavaScript como un lenguaje de programación funcional⚙️ . ¡Es aún mejor!

Al mismo tiempo, sin `this`, JavaScript ofrece    una forma nueva y única de hacer programación orientada a objetos sin clases ni herencia.

<!-- ### Объектно-ориентированное программирование без this

Вопрос в том, как строить объекты без `this`. У нас будут два 2️⃣ вида объектов:

![question](https://media.giphy.com/media/cMVgEhDeKzPwI/giphy.gif)

- чистые объекты данных
- объекты поведения. -->

<!-- ### Чистые объекты данных

![Brains](https://media.giphy.com/media/xThuWl1CsJUCg2qEDu/giphy.gif)

Чистые объекты данных содержат только данные и не имеют поведения. Любое вычисленное поле будет заполнено при создании. Чистые объекты данных должны быть неизменными. Нам нужен `Object.freeze()` при их создании. -->

<!-- ### Объекты поведения

Объекты поведения будут представлять собой коллекциями закрытий, имеющих одно и то же частное состояние. Давайте создадим объект `Timer` без использования `this`.

![Twins](https://media.giphy.com/media/YpwwoFKZJrE4g/giphy.gif) -->

<!--```jsx live -->

<!-- ```javascript
function learnJavaScript() {
  let Timer = (callback, interval) => {
    let timerId

    let executeAndStartTimer = () => {
      callback().then(function makeNewCall() {
        timerId = setTimeout(executeAndStartTimer, interval)
      })
    }

    let stop = () => {
      if (timerId) {
        clearTimeout(timerId)
        timerId = 0
      }
    }

    let start = () => {
      if (!timerId) {
        executeAndStartTimer()
      }
    }

    return Object.freeze({
      start,
      stop
    })
  }

  let getTodos = () => {
    console.log('call')
    return fetch('https://jsonplaceholder.typicode.com/todos')
  }

  const timer = Timer(getTodos, 2000)

  return timer.start()
}
```

У объекта timer есть два 2️⃣ открытых метода: `start` и `stop.` Все остальное закрыто. Нет проблем с потерей `this` контекста, так как нет `this`. -->

<!-- ### Память

![Memory](https://media.giphy.com/media/3o6ZtafpgSpvIaKhMI/giphy.gif)

Система прототипов лучше в плане использования памяти. Все методы создаются только один раз в объекте-прототипе и используются всеми экземплярами.

Затраты памяти на создание объектов поведения с использованием закрытий при создании тысяч одинаковых объектов значительны. Но чаще всего в приложении создается несколько объектов поведения. Если мы возьмем, например, объект поведения хранилища, в приложении будет только один его экземпляр, поэтому при использовании закрытий для его создания не требуется никаких дополнительных затрат памяти.

В приложении могут быть сотни или тысячи чистых объектов данных. Чистые объекты данных не используют закрытия, поэтому нет затрат памяти.

### Компоненты без this

`this` может потребоваться для многих компонентов, например, в `React` или `Vue`. В `React` мы можем создавать функциональные компоненты без сохранения  состояния `thi`s`, как чистые функции.

```javascript
function ListItem({ todo }){
  return (
    <li>
        <div>{ todo.title }</div>
        <div>{ todo.userName }</div>
    </li>
  );
```

Можно создавать компоненты с сохранением состояния без использования `this` с помощью `React Hooks`. Рассмотрим следующий пример:

```javascript
import React, { useState } from 'react'

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState({ text: '' })

  function handleChange(event) {
    const newQuery = Object.freeze({ text: event.target.value })
    setQuery(newQuery)
  }

  function search() {
    const newQuery = Object.freeze({ text: query.text })
    if (onSearch) onSearch(newQuery)
  }

  return (
    <form>
      <input type="text" onChange={handleChange} />
      <button onClick={search} type="button">
        Search
      </button>
    </form>
  )
}
```

### Удаление arguments

![vanish](https://media.giphy.com/media/kelU5SPX69mnvlKts2/giphy.gif)

Если мы избавимся от `this`, мы также должны избавиться от `arguments[]`, поскольку у них одинаковое поведение динамического связывания.

Избавиться от этого `arguments[]` довольно легко. Мы просто используем    новый синтаксис   параметра `...rest`. На этот раз параметр `...rest` является объектом массива:

```jsx live
function learnJavaScript() {
  let addNumber = (total, value) => total + value

  let sum = (...args) => args.reduce(addNumber, 0)

  return sum(1, 2, 3, 4, 5, 6, 7) // 28
}
```

В данном примере метод `reduce` запускается в контексте массива и вызывает функцию⚙️ для каждого элемента. Но помимо этого, он аккумулирует результаты всех вызовов в одно значение. Его задача – подсчитать "сумму" всех элементов и вернуть ее. -->

## Rechazar this

![recordar](https://media.giphy.com/media/S52I9r5QfB4fIBS6WV/giphy.gif)

¡La mejor manera de evitar problemas con `this` es no usar `this` en absoluto!

:::note JavaScript
¡JavaScript sin esto parece el mejor lenguaje de programación funcional⚙️ !
:::

Podemos crear  objetos encapsulados sin usar `this` como colecciones de cierre. Con [React Hooks](https://ru.reactjs.org/docs/hooks-intro.html) podemos crear  sin "este" componentes con estado.

La palabra clave `this` no se puede eliminar de JavaScript sin romper todas las aplicaciones existentes. Sin embargo, ¿qué se puede hacer? Podemos escribir  nuestro propio código sin `this` y permitir que se use solo en bibliotecas. Mientras tanto, se están introduciendo [nuevas reglas](https://ru.reactjs.org/docs/hooks-rules.html#eslint-plugin) `ESLint` para prohibir el uso de `this`.

Como abandonamos en la última lección [classes](https://jscamp.app/docs/javascript25#classes-rejection), también nos despedimos de `this`.

## ¿Problemas?

![Problema](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Escribe en [Discord](https://discord.gg/6GDAfXn) o Telegram [chat](https://t.me/jscampapp) y suscríbete a nuestras [noticias](https://t.me/javascriptapp)

![Campamento JavaScript](/img/bandlink.png)

## Preguntas

![Pregunta](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

¿Es posible prescindir de `this`:

1. Puedes, y es mejor no usarlo en absoluto
2. Posible, pero no aconsejable
3. Es imposible, porque `this` no se puede eliminar de JavaScript

<!-- Использование `this`:

1. Понижает безопасность кода
2. Повышает безопасность кода
3. Не влияет на безопасность -->

JavaScript sin `this` se ve mejor:

1. Lenguaje de programación funcional
2. Lenguaje de programación procedimental
3. Lenguaje de programación lógica

Para comprender cuánto ha aprendido esta lección, realice una prueba en la [aplicación móvil](http://onelink.to/njhc95) de nuestra escuela sobre este tema o en nuestro [bot de Telegram](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Enlaces

1. [Artículo "Eliminar la palabra clave 'esto' de JavaScript mejora el lenguaje"](https://webformyself.com/udalenie-klyuchevogo-slova-this-iz-javascript/)
2. [Artículo "La palabra clave this en JavaScript"](https://habr.com/es/post/464163/)
3. [Documento web de MDN. Artículo "esto"](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/this)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/KoDim-React"><img src="https://avatars1.githubusercontent.com/u/72087863?v=4?s=200" width="200px " alt=""/><br /><sub><b>Dmitriy K.</b></sub></a><br /><a href="#mentoring-KoDim-React" title="Mentoring">  </a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px " alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)
