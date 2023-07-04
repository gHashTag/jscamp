---
id: javascript28
title: Async Await
sidebar_label: Async Await
---

![@serverSerrverlesskiy](/img/javascript/headers/29.jpg)

`async/await`と呼ばれるpromiseを処理するための特別な構文📖があります。

## 非同期関数の作成

![creature](https://media.giphy.com/media/4T7e4DmcrP9du/giphy.gif)

非同期関数⚙️は、非同期関数式⚙️によって定義されます。 基本的な機能⚙️は次のようになります。

```javascript
async function foo() {
  const value = await somePromise()
  return value
}
```

関数⚙️を`async`との非同期として定義します。 このキーワード🗝️は、関数宣言の任意の構文📖で使用できます🗣️⚙️：

```javascript
// Function Declaration
async function foo() { ... }

// Function Expression
const foo = async function () { ... }

// Arrow function
const foo = async () => { ... }

// Class methods
class Bar {
    async foo() { ... }
}
```

![Stops](https://media.giphy.com/media/WrgAGkGrh0MD1Z2gkO/giphy.gif)

関数⚙️を非同期として定義したら、キーワード🗝️`await`を使用できます。
このキーワード🗝️は、promiseが呼び出される前に配置され、promiseが実行されるか拒否されるまで、関数⚙️の実行を一時停止します。

## Async

![run](https://media.giphy.com/media/3N0fFF5xxcZrO/giphy.gif)

関数⚙️の宣言🗣️の前に置くキーワード🗝️`async`を使用して、非同期にします。 非同期関数⚙️は、キーワード🗝️`await`を使用して非同期コードを実行する機能を期待する関数⚙️です📟。

ブラウザコンソールで次のように入力してみてください。

```javascript
function hello() {
  return 'Hello'
}
hello()
```

⚙️関数は「Hello」を返します。 異常なことは何もありません。

しかし、それを非同期関数に変えたらどうなるでしょうか⚙️ 次のことを試してください。

```javascript
async function hello() {
  return 'Hello'
}
hello()
```

![Promise](https://media.giphy.com/media/GFtJhEvG3681y/giphy.gif)

これで、関数呼び出し⚙️は🔄promiseを返します。 これは非同期関数の機能の1つです⚙️-約束に変換することが保証されている🔄値を返します。

次のように🏗️非同期関数式⚙️を作成することもできます。

```javascript
// Function Expression
let hello = async function () {
  return hello()
}
hello()
```

矢印機能を使用することもできます⚙️：

```javascript
let hello = async () => {
  return 'Hello'
}
```

これらの機能はすべて⚙️同じことをします。

完了したpromiseの値を取得するには、 `.then（）`ブロックを使用できます。

```javascript
hello().then(value => console.log(value))
```

… или даже так:

```javascript
hello().then(console.log)
```

したがって、キーワード🗝️ `async`を追加すると、関数🗝️は値ではなくpromiseを返します。 また、同期機能により、`await`の使用の開始と維持に関連するオーバーヘッドを回避できます。 関数⚙️の前に`async`を追加するだけで、コードがJSエンジンによって自動的に最適化されます📟。

## Await

![Wait](https://media.giphy.com/media/myPdoRAlad0J2/giphy.gif)

非同期関数⚙️の利点は、キーワード🗝️`await`と組み合わせるとさらに明白になります。 これは、promiseベースの関数⚙️の前に追加して、promiseが完了するのを待ってから結果を返すようにすることができます。 その後、次のコードブロック📟が実行されます。

⚙️`WebAPI`関数を含む🔄promiseを返す関数⚙️を呼び出すときに`await`を使用できます。

構文📖：

```javascript
let response = await fetch('https://jsonplaceholder.typicode.com/users')
let data = await response.json()
console.log(data[0].name + ' and ' + data[2].name)
```

<!-- ### Переписывание кода

![code rewriting](https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif)

Возьмем пример с `fetch`:

```javascript
fetch('coffee.jpg')
  .then(response => response.blob())
  .then(myBlob => {
    let objectURL = URL.createObjectURL(myBlob)
    let image = document.createElement('img')
    image.src = objectURL
    document.body.appendChild(image)
  })
  .catch(e => {
    console.log('There has been a problem with your fetch operation: ' + e.message)
  })
```

Давайте перепишем этот код📟 с использованием `async/await`, чтобы увидеть, насколько все стало проще:

```javascript
async function myFetch() {
  let response = await fetch('coffee.jpg')
  let myBlob = await response.blob()

  let objectURL = URL.createObjectURL(myBlob)
  let image = document.createElement('img')
  image.src = objectURL
  document.body.appendChild(image)
}

myFetch().catch(e => {
  console.log('There has been a problem with your fetch operation: ' + e.message)
})
```

Это делает код📟 намного проще и более легким для понимания — никаких блоков `.then()`!

Использование ключевого слова `async` превращает функцию⚙️ в обещание, поэтому мы можем использовать смешанный подход из обещаний и `await`, выделив вторую часть функции⚙️ в отдельный блок с целью повышения гибкости:

```javascript
async function myFetch() {
  let response = await fetch('coffee.jpg')
  return await response.blob()
}

myFetch()
  .then(blob => {
    let objectURL = URL.createObjectURL(blob)
    let image = document.createElement('image')
    image.src = objectURL
    document.body.appendChild(image)
  })
  .catch(e => console.log(e))
``` -->

<!-- ### Как это работает?

![how it works](https://media.giphy.com/media/OTnDHCCFNZHwc/giphy.gif)

Мы обернули код📟 внутри функции⚙️ и добавили ключевое🗝️ слово `async` перед ключевым🗝️ словом `function`. Вам нужно создать🏗️ асинхронную функцию⚙️, чтобы определить блок кода📟 , в котором будет запускаться асинхронный код📟 ; `await` работает только внутри асинхронных функций⚙️.

`Await` работает только в асинхронных функциях⚙️.

Внутри функции⚙️ `myFetch()` код📟 очень сильно напоминает версию на обещаниях, но с некоторыми отличиями. Вместо использования блока `.then()` после каждого метода, основанного на обещаниях, достаточно добавить ключевое🗝️ слово `await` перед вызовом метода и присвоить значение переменной. Ключевое🗝️ слово `await` заставляет движок JS приостановить выполнение кода📟 на данной строке, позволяя выполняться другому коду📟 , пока асинхронная функция⚙️ не вернет результат. Как только она выполнится, код📟 продолжит выполнение со следующей строки.

Например:

```javascript
let response = await fetch('coffee.jpg')
```

Значение, возвращаемое🔄 обещанием `fetch()`, присваивается переменной response, когда данное значение становится доступным, и «парсер» останавливается на этой линии до завершения обещания. Как только значение становится доступным, парсер переходит к следующей строчке кода📟 , которая создает🏗️ `Blob`. Эта строчка также вызывает основанный на обещаниях асинхронный метод, поэтому здесь мы также используем `await`. Когда результат операции возвращается🔄, мы возвращаем🔄 его из функции⚙️ `myFetch()`.

Это означает, что когда мы вызываем функцию⚙️ `myFetch()`, она возвращает🔄 обещание, поэтому мы можем добавить к ней `.then()`, внутри которого мы обрабатываем отображение изображения на экране.

Когда меньше блоков `.then()` для оборачивания кода📟 , все это выглядит как синхронный код📟 , поэтому он интуитивно понятен. -->

## `try...catch`でエラーを処理する

![code rewriting](https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif)

処理エラーを追加する場合は、いくつかのオプションがあります。

同期`try...catch`構造を`async/await`と一緒に使用できます。

```javascript
async function myFetch() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    let data = await response.json()
    console.log(data[0].name + ' and ' + data[2].name)
  } catch (e) {
    console.log(e)
  }
}

myFetch()
```

`catch（）{}`ブロックは、`e`という名前のエラーオブジェクト🙅‍♂️を受け入れます。 これでコンソールに出力できるようになりました。これにより、コードのどこでエラーが発生したかについてのメッセージ💬を取得できます🙅‍♂️。

意図的に`url`にエラーを作成し、エラー出力を見てみましょう。

```javascript
async function myFetch() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/sers')
    let data = await response.json()
    console.log(data[0].name + ' and ' + data[2].name)
  } catch (e) {
    console.log(e)
  }
}

myFetch()
```

![fetch error](/img/javascript/17.jpg)

## 合計

![Conclusion](https://media.giphy.com/media/3o6ZsVl2hv8ZnhSXug/giphy.gif)

`Async / await`を使用すると、読みやすく、保守しやすい🖊️非同期コードを記述できます。 約束の代わりにそれを使用する方が良い6つの理由を読んでください[ここ]（https://habr.com/ru/company/ruvds/blog/326074/）。

## 問題？

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

に書き込む [Discord](https://discord.gg/6GDAfXn) または電報 [チャット](https://t.me/jscampapp), また、私たちの購読 [ニュース](https://t.me/javascriptapp)

## 質問:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

`async`キーワードはどこに配置されますか？

1. 関数宣言の前
2. 関数宣言後
3. 機能本体内

`await`はどの機能で機能しますか？

1. 同期機能のみ
2. 非同期機能のみ
3. 任意の機能で

非同期関数は次のとおりです。

1. これはキーワード`async`によって定義される関数です
2. これは`await`キーワードを使用する可能性を予測する機能です
3. 両方のオプションが正しい

`async/await`の利点は次のとおりです。

1. 自分のコードがロックされている
2. `.then（）`ブロックからコードを取り除く
3. 非同期関数で期待される約束をラップする必要性

このコードは何ですか：

```javascript
let hello = async function () {
  return hello()
}
hello()
```

1. 同期機能
2. 矢印機能
3. 非同期関数式

このレッスンでどれだけ学んだかを理解するために、[モバイルアプリ](http://onelink.to/njhc95) このトピックに関する私たちの学校。

![Sumerian school](/img/app.jpg)

## リンク：

1. [Async-await](https://learn.javascript.ru/async-await)
2. [非同期をマスターする方法/実際の例を使用してJavaScriptで待機する方法](https://webformyself.com/async-await-v-javascript-na-primerax)
3. [async/awaitを使用した非同期プログラミング](https://habr.com/ru/post/491012/)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/AlisaNasibullina"><img src="https://avatars3.githubusercontent.com/u/74646904?s=460&v=4" width="200px;" alt=""/><br /><sub><b>AlisaNasibullina</b></sub></a><br /><a href="#mentoring-KoDim-React" title="Mentoring">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 </a></td>
  </tr>
</table>

<!-- ### Ожидание Promise.all()

![waiting](https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif)

`Async/await` основан на обещаниях, так что вы можете использовать все возможности последних. К ним, в частности, относится `Promise.all()` — вы легко можете добавить `await` к `Promise.all()`, чтобы записать все возвращаемые🔄 значения способом, похожим на синхронный код📟 .

С `async/await` он выглядит так:

```javascript
async function fetchAndDecode(url, type) {
  let repsonse = await fetch(url)

  let content

  if (type === 'blob') {
    content = await response.blob()
  } else if (type === 'text') {
    content = await response.text()
  }

  return content
}

async function displayContent() {
  let coffee = fetchAndDecode('coffee.jpg', 'blob')
  let tea = fetchAndDecode('tea.jpg', 'blob')
  let description = fetchAndDecode('description.txt', 'text')

  let values = await Promise.all([coffee, tea, description])

  let objectURL1 = URL.createObjectURL(values[0])
  let objectURL2 = URL.createObjectURL(values[1])
  let descText = values[2]

  let image1 = document.createElement('img')
  let image2 = document.createElement('img')
  image1.src = objectURL1
  image2.src = objectURL2
  document.body.appendChild(image1)
  document.body.appendChild(image2)

  let para = document.createElement('p')
  para.textContent = descText
  document.body.appendChild(para)
}

displayContent().catch(e => console.log(e))
```

Мы легко превратили функцию⚙️ fetchAndDecode() в асинхронную с помощью парочки изменений. Обратите внимания на строчку:

```javascript
let values = await Promise.all([coffee, tea, description])
```

Используя `await`, мы получаем результаты трех обещаний в переменной `values`, способом, похожим на синхронный код📟 . Мы должны обернуть всю функцию⚙️ в новую асинхронную функцию⚙️, `displayContent()`. Мы не достигли сильного сокращения кода📟 , но получили возможность извлечь большую часть кода📟 из блока `.then()`, что обеспечивает полезное упрощение и делает код📟 более читаемым.

Для обработки ошибок🙅‍♂️ мы добавили блок `.catch()` в наш вызов `displayContent()`; он обрабатывает ошибки🙅‍♂️ обеих функций⚙️. -->

<!-- ## Недостатки async/await

![stop](https://media.giphy.com/media/cKKXNlTYino7hWNXwl/giphy.gif)

`Async/await` имеет парочку недостатков.

`Async/await` делает код📟 похожим на синхронный и в некотором смысле заставляет его вести себя более синхронно. Ключевое🗝️ слово `await` блокирует выполнение следующего за ним кода📟 до завершения обещания, как это происходит в синхронной операции. Это позволяет выполняться другим задачам, но ваш собственный код📟 является заблокированным.

Это означает, что ваш код📟 может быть замедлен большим количеством ожидающих обещаний, следующих друг за другом. Каждый `await` будет ждать завершения предыдущего, в то время как мы хотели бы, чтобы обещания начали выполняться одновременно, так будто мы не используем `async/await`.

Существует шаблон проектирования, позволяющий смягчить эту проблему — отключение всех процессов обещаний путем сохранения 📦 объектов Promise в переменных 🔔 и последующего их ожидания. Давайте посмотрим на то, как это реализуется.

В нашем распоряжении имеется два 2️⃣ примера:

- slow-async-await

```javascript
function timeoutPromise(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve('done')
    }, interval)
  })
}

async function timeTest() {
  await timeoutPromise(3000)
  await timeoutPromise(3000)
  await timeoutPromise(3000)
}

let startTime = Date.now()
timeTest().then(() => {
  let finishTime = Date.now()
  let timeTaken = finishTime - startTime
  alert('Time taken in milliseconds: ' + timeTaken)
})
```

- fast-async-await

```javascript
function timeoutPromise(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve('done')
    }, interval)
  })
}

async function timeTest() {
  const timeoutPromise1 = timeoutPromise(3000)
  const timeoutPromise2 = timeoutPromise(3000)
  const timeoutPromise3 = timeoutPromise(3000)

  await timeoutPromise1
  await timeoutPromise2
  await timeoutPromise3
}

let startTime = Date.now()
timeTest().then(() => {
  let finishTime = Date.now()
  let timeTaken = finishTime - startTime
  alert('Time taken in milliseconds: ' + timeTaken)
})
```

Оба примера начинаются с функции⚙️-обещания, которая имитирует асинхронную операцию с помощью `setTimeout()`.

Затем следует асинхронная функция⚙️ `timeTest()`, которая ожидает трех вызовов `timeoutPromise()`.

Каждый из трех вызовов `timeTest()` завершается записью 🖊️ времени выполнения обещания, затем записывается 🖊️ время выполнения всей операции.

В каждом случае функция⚙️ `timeTest()` отличается.

- В slow-async-await.html `timeTest()` выглядит так:

```javascript
async function timeTest() {
  await timeoutPromise(3000)
  await timeoutPromise(3000)
  await timeoutPromise(3000)
}
```

Здесь мы просто ожидаем три вызова `timeoutPromise`, каждый раз устанавливая задержку в 3 секунды. Каждый вызов ждет завершения предыдущего — если вы запустите первый 1️⃣ пример, то увидите модальное окно🪟 примерно через 9 секунд.

- В fast-async-await.html `timeTest()` выглядит так:

```javascript
async function timeTest() {
  const timeoutPromise1 = timeoutPromise(3000)
  const timeoutPromise2 = timeoutPromise(3000)
  const timeoutPromise3 = timeoutPromise(3000)

  await timeoutPromise1
  await timeoutPromise2
  await timeoutPromise3
}
```

Здесь мы сохраняем три объекта Promise в переменных 🔔 , что заставляет связанные с ним процессы выполняться одновременно.

Далее мы ожидаем их результаты — поскольку обещания начинают выполняться одновременно, обещания завершатся также в одно время; когда вы запустите второй пример, то увидите модальное окно🪟 примерно через 3 секунды!

Еще одним незначительным неудобством является необходимость оборачивания ожидаемых обещаний в асинхронную функцию.

## Использование async/await совместно с классами

![Application](https://media.giphy.com/media/MC8u9xYzogX8mvb64r/giphy.gif)

В завершение отметим, что вы можете добавлять `async` даже в методах создания🏗️ классов, чтобы они возвращали🔄 обещания, и ждать обещания внутри них.

```javascript
class Person {
  constructor(first, last, age, gender, interests) {
    this.name = {
      first,
      last
    }
    this.age = age
    this.gender = gender
    this.interests = interests
  }

  async greeting() {
    return await Promise.resolve(`Hi! I'm ${this.name.first}`)
  }

  farewell() {
    console.log(`${this.name.first} has left the building. Bye for now!`)
  }
}

let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling'])
```

Метод класса может быть использован следующим образом:

```javascript
han.greeting().then(console.log)
``` -->


<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)
