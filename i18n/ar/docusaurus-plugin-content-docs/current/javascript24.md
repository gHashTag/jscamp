---
id: javascript24
title: حظر على "هذا"
sidebar_label: حظر على "هذا"
---

![@serverSerrverlesskiy](/img/javascript/headers/24.jpg)

إزالة `this` الكلمة الأساسية من JavaScript تجعل اللغة أفضل!

هذا بسبب `this` يعتمد على كيفية استدعاء الوظيفة ، وليس مكان تعريفها. لذلك ، جافا سكريبت`this` مصدر الكثير من الارتباك اللغويوضع.

يضمن استخدام هذا أن الوظيفة تعمل على الكائن المحدد في سياقه الذي تم استدعاؤه.
من خلال `this`طريقة ، لا يمكنك فقط الرجوع إلى أي خاصية من خصائص الكائن ، ولكن يمكنك أيضًا تمرير مرجع إلى الكائن بأكمله في مكان ما (تقليل أمان التطبيق).

قيمة ال`this` يسمى سياق الاستدعاء وسيتم تحديده عند استدعاء الوظيفة. على سبيل المثال ، دالة مثل هذه ، تم إعلانها بدون كائن ، صالحة تمامًا:

```javascript
functionsay Hi() {
  console.log(this.firstName)
}
```

هذه الوظيفة لا تعرف حتى الآن ما سيكون هذا. سيتم الكشف عن هذا عند تنفيذ البرنامج.

إذا تم تشغيل نفس الوظيفة في سياق كائنات مختلفة ، فستتلقى ملفًا مختلفًا`this`:

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

لذا ، فإن قيمة `this` لا تعتمد على كيفية إنشاء الوظيفة ، يتم تحديدها حصريًا وقت المكالمة.

## "هذا" وعيوبه

الأساليب هي الوظائف التي يتم تخزينها في الكائنات. لكي تعرف الوظيفة أي كائن تعمل عليه ، استخدم `this`.

![Poor](https://media.giphy.com/media/fQJbwrRJdHyMOP7RPH/giphy.gif)

لكن `this` يفقد السياق في العديد من المواقف (القيمة المرجعة غير معروفة):

- يفقد السياق داخل الوظائف المتداخلة
- يفقد السياق في عمليات الاسترجاعات
- `this` يفقد السياق عند استخدام الطريقة كمعالج للأحداث.

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

## أفضل لغة

![The_best](https://media.giphy.com/media/ZBn3ZRvCbWz2PS3Rbg/giphy.gif)

JavaScript هي لغة برمجة وظيفية ولغة قائمة على النموذج الأولي. إذا تخلصنا من هذا ، فسيتبقى لنا JavaScript كلغة برمجة وظيفية. هذا أفضل!

في نفس الوقت ، بدون`this` تقدم JavaScript طريقة جديدة وفريدة للقيام بالبرمجة الموجهة للكائنات بدون فئات أو وراثة.

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

## التخلي عن هذا

![remember](https://media.giphy.com/media/S52I9r5QfB4fIBS6WV/giphy.gif)

أفضل طريقة لتجنب `this` المشاكل ذات الصلة ليست للاستخدام `this` على الاطلاق!

::: لاحظ جافا سكريبت
تبدو JavaScript بدون هذا أفضل لغة برمجة وظيفية!

:::

يمكننا إنشاء كائنات مغلفة دون استخدام هذا كمجموعة من الإغلاق. بمساعدة [React Hooks](https://reactjs.org/docs/hooks-intro.html) يمكننا إنشاء مكونات ذات حالة🏗️ بدون `this`.

The `this` keyword cannot be removed from JavaScript without destroying all existing applications. However, what can be done? We can write 🖊️ our own code without `this` and only allow it to be used in libraries. In the meantime, [new rules](https://ru.reactjs.org/docs/hooks-rules.html#eslint-plugin) `ESLint` are being introduced, prohibiting the use of `this`.

Since in the last lesson we abandoned [classes](https://react-native-village.github.io/docs/javascript25#refused-classes), we say goodbye to `this` with them.

## Problems?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Write to [Discord](https://discord.gg/6GDAfXn) chat.

## Questions:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

The `this` keyword is -

1. The object to which the method belongs
2. First argument in the function
3. Set of properties

Is it possible to do without this:

1. You can, and it is better not to use at all
2. It is possible, but not advisable
3. It is impossible, because `this` cannot be removed from JavaScript

JavaScript without `this` looks like the best:

1. Functional programming language
2. Procedural programming language
3. Logical programming language

In order to understand how much you learned this lesson, take the test on the [mobile application](http://onelink.to/njhc95) of our school on this topic.

![Sumerian school](/img/app.jpg)

## Links

1. [Removing the 'this' keyword from JavaScript makes the language better](https://webformyself.com/udalenie-klyuchevogo-slova-this-iz-javascript/)
2. [The article "The this keyword in JavaScript"](https://habr.com/ru/post/464163/)
3. [MDN web doc. Article "this"](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

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
