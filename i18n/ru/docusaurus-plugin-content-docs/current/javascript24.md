---
id: javascript24
title: Запрет на "this"
sidebar_label: Запрет на "this"
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/24.jpg)

Удаление ключевого🗝️ слова `this` из JavaScript делает язык  лучше!

Причина в том, что `this` зависит от того, как была вызвана функция⚙️, а не от того, где она была определена. Поэтому `this` в JavaScript является источником большой путаницы в языке .

Использование `this` гарантирует, что функция работает именно с тем объектом, в контексте которого вызвана.
Через `this` метод можно не только обратиться к любому свойству объекта, но и передать куда-то ссылку на сам объект целиком (снижая безопасность приложения).

Значение `this` называется контекстом вызова и будет определено в момент вызова функции. Например, такая функция, объявленная без объекта, вполне допустима:

```javascript
functionsay Hi() {
  console.log(this.firstName)
}
```

Эта функция ещё не знает, каким будет `this`. Это выяснится при выполнении программы.

Если одну и ту же функцию запускать в контексте разных объектов, она будет получать разный `this`:

```javascript
var user = { firstName: 'Джони' }
var admin = { firstName: 'Админ' }

function funcName() {
  console.log(this.firstName)
}
user.f = funcName
admin.g = funcName

//this равен объекту перед точкой:
user.f() //Джони
admin.g() //Админ
admin['g']() //Админ (доступ к объект реализован через квадратные скобки)
```

Итак, значение `this` не зависит от того, как функция была создана, оно определяется исключительно в момент вызова.

## Видео

<YouTube videoId="/BS9zo9wVoTk" /> 

## `this` и его недостатки

Методы — это функции⚙️, которые хранятся в объектах. Для того, чтобы функция⚙️ знала, над каким объектом работать, используется `this.`

![Poor](https://media.giphy.com/media/fQJbwrRJdHyMOP7RPH/giphy.gif)

Но `this` теряет контекст во многих ситуациях (неизвестно возвращаемое значение):

- теряет контекст внутри вложенных функций
- теряет контекст в обратных вызовах (callback)
- `this` теряет контекст, когда метод используется в качестве обработчика события.

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

## Лучший язык

![The_best](https://media.giphy.com/media/ZBn3ZRvCbWz2PS3Rbg/giphy.gif)

JavaScript — это и функциональный язык программирования, и язык на основе прототипов. Если мы избавимся от `this`, у нас останется JavaScript как функциональный⚙️ язык  программирования. Это даже лучше!

В то же время, без `this` JavaScript предлагает    новый, уникальный способ выполнения объектно-ориентированного программирования без классов и наследования.

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

## Отказ от this

![remember](https://media.giphy.com/media/S52I9r5QfB4fIBS6WV/giphy.gif)

Лучший способ избежать связанных с `this` проблем — вообще не использовать `this`!

:::note JavaScript
JavaScript без this выглядит как лучший функциональный⚙️ язык  программирования!
:::

Мы можем создавать инкапсулированные объекты без использования `this` в качестве коллекций закрытий. С помощью [React Hooks](https://ru.reactjs.org/docs/hooks-intro.html) мы можем создавать без `this` компоненты с сохранением состояния.

Ключевое слово `this` не может быть удалено из JavaScript, без разрушения всех существующих приложений. Однако что можно сделать? Мы можем написать  собственный код без `this` и позволить его использовать только в библиотеках. Тем временем вводятся [новые правила](https://ru.reactjs.org/docs/hooks-rules.html#eslint-plugin) `ESLint,` запрещающие использование `this`.

Так как в прошлом уроке мы отказались от [классов](https://jscamp.app/docs/javascript25#отказ-от-классов), то и вместе с ними прощаемся и с `this`.

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Проблемы?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Пишите в [Discord](https://discord.gg/6GDAfXn) или телеграмм [чат](https://t.me/jscampapp), а также подписывайтесь на наши [новости](https://t.me/javascriptapp)

<!-- ![JavaScript Camp](/img/bandlink.png) -->

## Вопросы

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

Можно ли обойтись без `this`:

1. Можно, и лучше вообще не использовать
2. Можно, но не целесообразно
3. Нельзя, т.к. `this` не может быть удален из JavaScript

<!-- Использование `this`:

1. Понижает безопасность кода
2. Повышает безопасность кода
3. Не влияет на безопасность -->

JavaScript без `this` выглядит как лучший:

1. Функциональный язык программирования
2. Процедурный язык программирования
3. Логический язык программирования

Для того чтобы понять, на сколько вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме или в нашем [телеграм боте](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Ссылки

1. [Статья "Удаление ключевого слова «this» из JavaScript делает язык лучше"](https://webformyself.com/udalenie-klyuchevogo-slova-this-iz-javascript/)
2. [Статья "Ключевое слово this в JavaScript"](https://habr.com/ru/post/464163/)
3. [MDN web doc. Статья "this"](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this)

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

