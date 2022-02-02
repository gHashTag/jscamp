---
id: javascript24
title: 禁止“此”
sidebar_label: Ban on "this"
---

![@serverSerrverlesskiy](/img/javascript/headers/24.jpg)

卸下 `this` JavaScript中的關鍵字可以使語言更好！

這是因為 `this` 取決於函數的調用方式，而不是定義位置。 因此，JavaScript `this` 是造成語言混亂пут的根源。

使用此選項可確保函數在調用它的上下文中對確切的對象起作用。
通過 `this` 方法，您不僅可以引用對象的任何屬性，還可以在某個地方傳遞對整個對象本身的引用（降低應用程序的安全性）。

的價值 `this` 稱為調用上下文，將在調用函數時確定。 例如，沒有對象聲明的類似這樣的函數是完全有效的：

```javascript
functionsay Hi() {
  console.log(this.firstName)
}
```

此功能尚不知道會是什麼。 程序執行時將顯示出來。

如果在不同對象的上下文中運行相同的函數，它將收到不同的結果 `this`:

```javascript
var user = { firstName: 'John' }
var admin = { firstName: 'Admin' }

function funcName() {
  console.log(this.firstName)
}
user.f = funcName
admin.g = funcName

// this is equal to the object before point:
user.f() // Joni
admin.g() // Admin
admin['g']() // Admin (access to the object is implemented through square brackets)
```

因此， `this` 不依賴於函數的創建方式，它是在調用時唯一確定的。

## `this` 及其缺點

方法是存儲在對像中的函數。 為了使功能⚙️知道要處理的對象，請使用 `this`.

![Poor](https://media.giphy.com/media/fQJbwrRJdHyMOP7RPH/giphy.gif)

但 `this` 在許多情況下會丟失上下文（返回值未知）：

-在嵌套函數中丟失上下文
-在回調中丟失上下文
- `this` 當該方法用作事件處理程序時會丟失上下文。

<!-- Давайте возьмем случай компонента `React`, который создает🏗️ поисковый запрос. В обоих методах, используемых в качестве обработчиков событий, при исползовании `this` теряется контекст:

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

`this` создает🏗️ проблемы безопасности. Все объявленные🗣️ элементы `this` являются публичными.

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

## Best language

![The_best](https://media.giphy.com/media/ZBn3ZRvCbWz2PS3Rbg/giphy.gif)

JavaScript既是一種功能編程語言，又是一種基於原型的語言。 如果我們擺脫了這一點，我們將剩下JavaScript作為一種功能性編程語言。 這樣更好！

同時，沒有 `this` JavaScript提供了一種新的獨特方法，無需類和繼承即可進行面向對象的編程。

<!-- ### Объектно-ориентированное программирование без this

Вопрос в том, как строить объекты без `this`. У нас будут два 2️⃣ вида объектов:

![question](https://media.giphy.com/media/cMVgEhDeKzPwI/giphy.gif)

- чистые объекты данных
- объекты поведения. -->

<!-- ### Чистые объекты данных

![Brains](https://media.giphy.com/media/xThuWl1CsJUCg2qEDu/giphy.gif)

Чистые объекты данных содержат только данные и не имеют поведения. Любое вычисленное поле будет заполнено при создании🏗️. Чистые объекты данных должны быть неизменными. Нам нужен `Object.freeze()` при их создании🏗️. -->

<!-- ### Объекты поведения

Объекты поведения будут представлять собой коллекциями закрытий, имеющих одно и то же частное состояние. Давайте создадим🏗️ объект `Timer` без использования `this`.

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

Система прототипов лучше в плане использования памяти. Все методы создаются🏗️ только один раз в объекте-прототипе и используются всеми экземплярами.

Затраты памяти на создание🏗️ объектов поведения с использованием закрытий при создании🏗️ тысяч одинаковых объектов значительны. Но чаще всего в приложении создается🏗️ несколько объектов поведения. Если мы возьмем, например, объект поведения хранилища, в приложении будет только один его экземпляр, поэтому при использовании закрытий для его создания🏗️ не требуется никаких дополнительных затрат памяти.

В приложении могут быть сотни или тысячи чистых объектов данных. Чистые объекты данных не используют закрытия, поэтому нет затрат памяти.

### Компоненты без this

`this` может потребоваться для многих компонентов, например, в `React` или `Vue`. В `React` мы можем создавать🏗️ функциональные компоненты без сохранения 📦 состояния `thi`s`, как чистые функции.

```javascript
function ListItem({ todo }){
  return (
    <li>
        <div>{ todo.title }</div>
        <div>{ todo.userName }</div>
    </li>
  );
```

Можно создавать🏗️ компоненты с сохранением состояния без использования `this` с помощью `React Hooks`. Рассмотрим следующий пример:

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

Избавиться от этого `arguments[]` довольно легко. Мы просто используем 🆕 новый синтаксис📖 параметра `...rest`. На этот раз параметр `...rest` является объектом массива:

```jsx live
function learnJavaScript() {
  let addNumber = (total, value) => total + value

  let sum = (...args) => args.reduce(addNumber, 0)

  return sum(1, 2, 3, 4, 5, 6, 7) // 28
}
```

В данном примере метод `reduce` запускается в контексте массива и вызывает функцию⚙️ для каждого элемента. Но помимо этого, он аккумулирует результаты всех вызовов в одно значение. Его задача – подсчитать "сумму" всех элементов и вернуть ее. -->

## 放棄這個

![remember](https://media.giphy.com/media/S52I9r5QfB4fIBS6WV/giphy.gif)

避免的最佳方法 `this` 相關問題是不使用 `this` 都！

:::note JavaScript
JavaScript 沒有這種語言，看起來像是最好的函數式編程語言！

:::

我們可以創建封裝的對象，而無需將其用作閉包的集合。 在...的幫助下 [React Hooks](https://reactjs.org/docs/hooks-intro.html) 我們可以創建有狀態的組件 🏗️ 而無需 `this`.

`this` 在不破壞所有現有應用程序的情況下，無法從JavaScript中刪除關鍵字。 但是，該怎麼辦？ 我們可以不用自己編寫🖊️我們的代碼 `this` 並且僅允許在庫中使用。 同時， [new rules](https://ru.reactjs.org/docs/hooks-rules.html#eslint-plugin) `ESLint` 被引入，禁止使用 `this`.

從上一課開始 [classes](https://jscamp.app/docs/javascript25#refused-classes), 我們告別 `this` 跟他們。

## 問題？

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

寫給 [Discord](https://discord.gg/6GDAfXn)聊天。

## 問題：

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

`this` 關鍵字是 -

1.方法所屬的對象
2.函數中的第一個參數
3.屬性集

是否可以不這樣做：

1.可以，最好不要使用
2.有可能，但不建議
3.這是不可能的，因為 `this` 無法從JavaScript中刪除

沒有 JavaScript `this` 看起來最好：

1.函數式編程語言
2.程序語言
3.邏輯編程語言

為了了解您學到了多少本課程，請對 [mobile application](http://onelink.to/njhc95) of our school on this topic.

![JS Camp](/img/app.jpg)

## 鏈接

1. [Removing the 'this' keyword from JavaScript makes the language better](https://webformyself.com/udalenie-klyuchevogo-slova-this-iz-javascript/)
2. [The article "The this keyword in JavaScript"](https://habr.com/ru/post/464163/)
3. [MDN web doc. Article "this"](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this)

## 貢獻者 ✨

感謝這些好人 ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/KoDim-React"><img src="https://avatars1.githubusercontent.com/u/72087863?v=4?s=200" width="200px " alt=""/><br /><sub><b>Dmitriy K.</b></sub></a><br /><a href="#mentoring-KoDim-React" title="Mentoring">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px " alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
