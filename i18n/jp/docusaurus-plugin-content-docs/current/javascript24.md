---
id: javascript24
title: 禁止 "this"
sidebar_label: 禁止 "this"
---

![@serverSerrverlesskiy](/img/javascript/headers/24.jpg)

JavaScriptからキーワード🗝️`this`を削除すると、言語がより良くなります ！

その理由は、 `this`は、関数が定義された場所ではなく、関数が⚙️と呼ばれた方法に依存するためです。したがって、JavaScriptの `this`は、言語の多くの混乱の原因です 。

`this`を使用すると、関数が呼び出されたコンテキスト内の正確なオブジェクトで動作することが保証されます。
`this`メソッドを使用すると、オブジェクトの任意のプロパティにアクセスできるだけでなく、オブジェクト自体への参照をどこかに渡すこともできます（アプリケーションのセキュリティが低下します）。

`this`の値は呼び出しのコンテキストと呼ばれ、関数が呼び出されたときに決定されます。たとえば、オブジェクトなしで宣言されたこのような関数は、完全に有効です。

```javascript
functionsay Hi() {
  console.log(this.firstName)
}
```

この関数は、`this`が何になるかをまだ知りません。 これは、プログラムの実行時に明らかになります。

同じ関数が異なるオブジェクトのコンテキストで実行される場合、異なる`this`を受け取ります。

```javascript
var user = { firstName: 'ジョニ' }
var admin = { firstName: '管理者' }

function funcName() {
  console.log(this.firstName)
}
user.f = funcName
admin.g = funcName

// this ドットの前のオブジェクトに等しい：:
user.f() // ジョニ
admin.g() // 管理者
admin['g']() // 管理者 (オブジェクトへのアクセスは角括弧を介して実装されます)
```

したがって、 `this`の値は、関数がどのように作成されたかに依存せず、呼び出し時にのみ決定されます。

## `this`とその欠点

メソッドは、オブジェクトに格納される関数⚙️です。 関数⚙️がどのオブジェクトで作業するかを知るためには、`this.`を使用します。

![Poor](https://media.giphy.com/media/fQJbwrRJdHyMOP7RPH/giphy.gif)

しかし、 `this`は多くの状況でコンテキストを失います（戻り値は不明です）：

- ネストされた関数内のコンテキストを失います
- コールバックでコンテキストを失います
- メソッドがイベントハンドラーとして使用されると、`this`はコンテキストを失います。

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

## 最高の言語

![The_best](https://media.giphy.com/media/ZBn3ZRvCbWz2PS3Rbg/giphy.gif)

JavaScriptは、関数型プログラミング言語であると同時にプロトタイプベースの言語でもあります。 `this`を取り除くと、関数型⚙️プログラミング言語としてJavaScriptが残ります 。 それはさらに良いです！

同時に、`this`なしでJavaScriptは  クラスや継承なしでオブジェクト指向プログラミングを行うための新しいユニークな方法を提供します。

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

## 拒絶 this

![remember](https://media.giphy.com/media/S52I9r5QfB4fIBS6WV/giphy.gif)

`this`の問題を回避する最善の方法は、`this`をまったく使用しないことです。

:::note JavaScript
これがないJavaScriptは、最高の関数型⚙️プログラミング言語のように見えます ！
:::

`this`をクロージャーコレクションとして使用せずに、カプセル化されたオブジェクトを作成できます。 経由 [React Hooks](https://ru.reactjs.org/docs/hooks-intro.html) `this`ステートフルコンポーネントなしでを作成できます。

`this`キーワードは、既存のすべてのアプリケーションを壊さずにJavaScriptから削除することはできません。 しかし、何ができるでしょうか？ `this`なしで独自のコードを記述し、ライブラリでのみ使用できるようにすることができます。 一方、紹介 [新しいルール](https://ru.reactjs.org/docs/hooks-rules.html#eslint-plugin) `ESLint、`は`this`の使用を禁止します。

前回のレッスンで放棄したので [クラス](https://react-native-village.github.io/docs/javascript25#отказ-от-классов), それから彼らと一緒に私たちは`this`に別れを告げます。

## 問題？

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

に書き込む [Discord](https://discord.gg/6GDAfXn) または電報 [チャット](https://t.me/jscampapp), また、私たちの購読 [ニュース](https://t.me/javascriptapp)

## 質問

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

キーワード`this`は-

1. メソッドを所有するオブジェクト
2. 関数の最初の引数
3. プロパティのセット

`this`なしで行うことは可能ですか？

1. できますが、まったく使用しない方がよいです
2. 可能ですが、お勧めできません
3. それは不可能です。 `this`はJavaScriptから削除できません

<!-- Использование `this`:

1. Понижает безопасность кода
2. Повышает безопасность кода
3. Не влияет на безопасность -->

`this`のないJavaScriptは最高のように見えます：

1. 関数型プログラミング言語
2. 手続き型プログラミング言語
3. 論理プログラミング言語

このレッスンでどれだけ学んだかを理解するために、[モバイルアプリ](http://onelink.to/njhc95) このトピックに関する私たちの学校。

![Sumerian school](/img/app.jpg)

## リンク

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

[![EnglishMoji!](/img/logo/englishmoji.png)](https://link-to.app/xvh7Ush9kl)
