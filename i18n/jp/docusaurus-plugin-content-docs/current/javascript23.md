---
id: javascript23
title: クラス
sidebar_label: クラス
---

![@serverSerrverlesskiy](/img/javascript/headers/23.jpg)

JavaScriptはプロトタイプ継承モデルを使用します。各オブジェクトはプロトタイプオブジェクトのフィールド（プロパティ）とメソッドを継承します。

## クラス

キーワード`class`は、クラスを定義するために使用されます。

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

この構文📖はクラス宣言🗣️と呼ばれます。

![Class](https://media.giphy.com/media/cYaBD8kxE4PZudHBRA/giphy.gif)

:::note クラス内のメソッドはコンマで区切られていません
📖クラスの構文は、オブジェクトリテラルとは異なります。 クラス内ではカンマは必要ありません。
:::

クラスに名前がない場合があります。 クラス式を使用すると、クラスを変数に割り当てることができます🔔：

```jsx
const UserClass = class {
  // クラス本体
}
```

クラスはモジュールとしてエクスポートできます。 デフォルトのエクスポートの例を次に示します。

```jsx
export default class User {
  // クラス本体
}
```

そして、これが名前付きエクスポートの例です：

```jsx
export class User {
  // クラス本体
}
```

クラスは、クラスのインスタンスを作成するときに役立ちます。 インスタンスは、説明されているデータと動作を含むオブジェクトです🖊️
クラス。

`new`演算子は、次のようにJavaScriptでクラスのインスタンスを作成します🏗️：` instance = new Class（）`。

たとえば、 `new`演算子を使用して、User👤クラスの🏗️インスタンスを作成できます。

```jsx
const myUser = new User()
```

`new User（）`は`User`クラスのインスタンスを作成します🏗️👤。

## 初期化：constructor()

![spangeBob](https://media.giphy.com/media/3oriNZoNvn73MZaFYk/giphy.gif)

`constructor（...）`は、インスタンスを初期化するクラス本体の特別なメソッドです。 これは、フィールドの初期値を設定したり、オブジェクトを調整したりできる場所です。

次の例では、コンストラクターが`name`フィールドの初期値を設定します。

```jsx
class User {
  constructor(name) {
    this.name = name
  }
}
```

`User`クラスの`constructor`は、`this.name`フィールドの初期値を設定するために使用される1つの`name`パラメータを取ります。

コンストラクター内では、`this`の値は新しく作成された🏗️インスタンスと同じです。

クラスをインスタンス化するために使用される引数は、コンストラクターパラメーターになります👇：

```jsx live
function learnJavaScript() {
  class User {
    constructor(name) {
      name // => 'Jon Snow'
      this.name = name
    }
  }

  const user = new User('Jon Snow') // ここで値を変更できます
  return user.name
}
```

コンストラクター内の`name`パラメーターは`JonSnow`に設定されています。

クラスのコンストラクターを定義しない場合は、🏗️デフォルトのコンストラクターが作成されます。 デフォルトのコンストラクターは、インスタンスを変更しない空の関数⚙️です。

クラスは`constructor`という名前のメソッドを1つだけ持つことができます。

## クラスの拒否

私たちの学校では、[React](https://ru.reactjs.org) を使用してモバイルアプリケーションを開発する方法を教えています。ここで、イノベーションは [React Hooks](https://ru.reactjs.org/docs/hooks-intro.html) です。を使用すると、クラスを記述せずに [React](https://ru.reactjs.org) の状態やその他の機能を使用できます。 したがって、クラスを放棄したので、クラスについて話すことはもう意味がありません。

## 問題

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

に書き込む [Discord](https://discord.gg/6GDAfXn) または電報 [チャット](https://t.me/jscampapp), また、私たちの購読 [ニュース](https://t.me/javascriptapp)

## 質問：

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

クラスを定義するためのキーワード🗝️は何ですか？

1. `constructor（）`
2. クラス
3. `this`

クラス内のメソッドはコンマで区切られていますか？

1. はい
2. いいえ

1つのクラスにいくつの`constructor（）`メソッドを含めることができますか？

1. 無制限
2. 最大10
3. 1つだけ

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

このレッスンでどれだけ学んだかを理解するために、[モバイルアプリ](http://onelink.to/njhc95) このトピックに関する私たちの学校。

![Sumerian school](/img/app.jpg)

<!--
## Геттеры и сеттеры

![Math](https://media.giphy.com/media/uWzbH8xJGIwOBPfzhc/giphy.gif)

Геттеры и сеттеры — это вычисляемые свойства. Это методы, имитирующие поля, но позволяющие читать и записывать 🖊️ данные.

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

Создадим🏗️ дочерний класс `ContentWriter`, расширяющий родительский класс `User` 👤:

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

Пусть конструктор `ContentWriter` вызывает родительский конструктор и инициализирует поле `posts` 👇 :

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

## リンク：

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
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
