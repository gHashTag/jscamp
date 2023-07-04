---
id: javascript28
title: 異步等待
sidebar_label: 異步等待
---

![@serverSerrverlesskiy](/img/javascript/headers/29.jpg)

有一種特殊的語法可以處理諾言 `async / await`.

## 創建一個異步函數

![creature](https://media.giphy.com/media/4T7e4DmcrP9du/giphy.gif)

異步函數⚙️由異步函數表達式⚙️定義。 基本功能⚙️看起來像這樣：

```javascript
async function foo() {
  const value = await somePromise()
  return value
}
```

我們定義一個函數⚙️使用 `async`. 此關鍵字可以與函數聲明的任何語法一起使用：

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

將函數定義為異步後，我們可以使用 `await` keyword.
該關鍵字放在 promise 調用之前，它將暫停功能，直到 promise 被實現或拒絕。

## 異步

![run](https://media.giphy.com/media/3N0fFF5xxcZrO/giphy.gif)

我們有關鍵字 `async`, 我們將其放在函數聲明之前以使其異步。 異步功能⚙️是一種功能⚙️，可以預期使用 `await` 關鍵字以運行異步代碼 

嘗試在瀏覽器控制台中鍵入以下內容：

```javascript
function hello() {
  return 'Hello'
}
hello()
```

該函數將返回 `Hello`. 沒什麼不尋常的。

但是，如果我們將其轉換為異步函數⚙️呢？ 請嘗試以下操作：

```javascript
async function hello() {
  return 'Hello'
}
hello()
```

![Promise](https://media.giphy.com/media/GFtJhEvG3681y/giphy.gif)

現在，函數調用將返回一個Promise。 這是異步函數的功能之一⚙️-它們返回  保證可以轉換為承諾的值。

您還可以創建一個異步函數表達式，如下所示：

```javascript
// Function Expression
let hello = async function () {
  return hello()
}
hello()
```

您還可以使用箭頭功能 ⚙️：

```javascript
let hello = async () => {
  return 'Hello'
}
```

所有這些功能⚙️做相同的事情。

要獲得已兌現承諾的價值，我們可以使用 `.then()` 堵塞：

```javascript
hello().then(value => console.log(value))
```

… or even like this:

```javascript
hello().then(console.log)
```

因此，添加關鍵字 `async` 使函數返回一個 promise，而不是一個值。 它還允許同步功能避免與啟動和維護等待相關的任何開銷。 只需添加 `async` 在功能⚙️使JS引擎自動優化代碼之前。

## 等待

![Wait](https://media.giphy.com/media/myPdoRAlad0J2/giphy.gif)

當您將異步功能與await關鍵字結合使用時，異步功能的好處變得更加明顯。 可以在任何基於promise的函數之前添加它⚙️，以使其等待promise完成，然後返回結果。 之後，執行下一個代碼塊

您可以使用 `await` 當調用任何返回諾言的函數時，包括 `Web API` 功能。

句法   :

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

Давайте перепишем этот код с использованием `async/await`, чтобы увидеть, насколько все стало проще:

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

Это делает код намного проще и более легким для понимания — никаких блоков `.then()`!

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

Мы обернули код внутри функции⚙️ и добавили ключевое🗝️ слово `async` перед ключевым🗝️ словом `function`. Вам нужно создать асинхронную функцию⚙️, чтобы определить блок кода , в котором будет запускаться асинхронный код ; `await` работает только внутри асинхронных функций⚙️.

`Await` работает только в асинхронных функциях⚙️.

Внутри функции⚙️ `myFetch()` код очень сильно напоминает версию на обещаниях, но с некоторыми отличиями. Вместо использования блока `.then()` после каждого метода, основанного на обещаниях, достаточно добавить ключевое🗝️ слово `await` перед вызовом метода и присвоить значение переменной. Ключевое🗝️ слово `await` заставляет движок JS приостановить выполнение кода на данной строке, позволяя выполняться другому коду , пока асинхронная функция⚙️ не вернет результат. Как только она выполнится, код продолжит выполнение со следующей строки.

Например:

```javascript
let response = await fetch('coffee.jpg')
```

Значение, возвращаемое обещанием `fetch()`, присваивается переменной response, когда данное значение становится доступным, и «парсер» останавливается на этой линии до завершения обещания. Как только значение становится доступным, парсер переходит к следующей строчке кода , которая создает `Blob`. Эта строчка также вызывает основанный на обещаниях асинхронный метод, поэтому здесь мы также используем `await`. Когда результат операции возвращается, мы возвращаем его из функции⚙️ `myFetch()`.

Это означает, что когда мы вызываем функцию⚙️ `myFetch()`, она возвращает обещание, поэтому мы можем добавить к ней `.then()`, внутри которого мы обрабатываем отображение изображения на экране.

Когда меньше блоков `.then()` для оборачивания кода , все это выглядит как синхронный код , поэтому он интуитивно понятен. -->

## 錯誤處理 `try ... catch`

![code rewriting](https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif)

如果要添加錯誤處理，則有幾種選擇。

您可以使用同步 `try ... catch` s與結構 `async / await`:

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

`catch () {}` 塊接受一個錯誤對象，我們將其命名為 `e`. 現在我們可以將其輸出到控制台，這將使我們能夠獲得消息  有關代碼在何處發生錯誤的信息 

讓我們有目的地在url中創建一個錯誤並查看錯誤輸出。

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

## 全部的

![Conclusion](https://media.giphy.com/media/3o6ZsVl2hv8ZnhSXug/giphy.gif)

`Async / await` 允許您編寫易於閱讀和維護的異步代碼。 出於六個原因，為什麼最好使用它而不是應許閱讀 [here](https://habr.com/ru/company/ruvds/blog/326074/).

## 問題?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

寫給 [Discord](https://discord.gg/6GDAfXn) chat.

## 問題:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

在哪裡 `async` 關鍵字去嗎？

1.函數聲明前
2.函數聲明後
3.在功能主體中

有什麼功能 `await`上班嗎

1.僅在同步功能中
2.僅在異步功能中
3.任何功能

異步函數是：

1.這是由關鍵字定義的功能 `async`
2.此功能可預期使用 `await` 關鍵詞
3.兩種選擇都是正確的

的優勢 `async / await` 是：

1.自己的代碼被鎖定
2.擺脫代碼 `.then()` 塊
3.需要將期望的承諾包裝在異步函數中

這段代碼是什麼：

```javascript
let hello = async function () {
  return hello()
}
hello()
```

1.同步功能
2.箭頭功能
3.異步函數表達式

為了了解您學到了多少本課程，請對 [mobile application](http://onelink.to/njhc95) 我們學校就這個話題。

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

## 鏈接:

1. [Async-await](https://learn.javascript.ru/async-await)
2. [How to master async / await in JavaScript with real examples](https://webformyself.com/async-await-v-javascript-na-primerax)
3. [Asynchronous programming with async / await](https://habr.com/ru/post/491012/)

## 貢獻者 ✨

感謝這些好人 ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/AlisaNasibullina"><img src="https://avatars3.githubusercontent.com/u/74646904?s=460&v=4" width="200px;" alt=""/><br /><sub><b>AlisaNasibullina</b></sub></a><br /><a href="#mentoring-KoDim-React" title="Mentoring">  </a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 </a></td>
  </tr>
</table>

<!-- ### Ожидание Promise.all()

![waiting](https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif)

`Async/await` основан на обещаниях, так что вы можете использовать все возможности последних. К ним, в частности, относится `Promise.all()` — вы легко можете добавить `await` к `Promise.all()`, чтобы записать все возвращаемые значения способом, похожим на синхронный код .

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

Используя `await`, мы получаем результаты трех обещаний в переменной `values`, способом, похожим на синхронный код . Мы должны обернуть всю функцию⚙️ в новую асинхронную функцию⚙️, `displayContent()`. Мы не достигли сильного сокращения кода , но получили возможность извлечь большую часть кода из блока `.then()`, что обеспечивает полезное упрощение и делает код более читаемым.

Для обработки ошибок мы добавили блок `.catch()` в наш вызов `displayContent()`; он обрабатывает ошибки обеих функций⚙️. -->

<!-- ## Недостатки async/await

![stop](https://media.giphy.com/media/cKKXNlTYino7hWNXwl/giphy.gif)

`Async/await` имеет парочку недостатков.

`Async/await` делает код похожим на синхронный и в некотором смысле заставляет его вести себя более синхронно. Ключевое🗝️ слово `await` блокирует выполнение следующего за ним кода до завершения обещания, как это происходит в синхронной операции. Это позволяет выполняться другим задачам, но ваш собственный код является заблокированным.

Это означает, что ваш код может быть замедлен большим количеством ожидающих обещаний, следующих друг за другом. Каждый `await` будет ждать завершения предыдущего, в то время как мы хотели бы, чтобы обещания начали выполняться одновременно, так будто мы не используем `async/await`.

Существует шаблон проектирования, позволяющий смягчить эту проблему — отключение всех процессов обещаний путем сохранения  объектов Promise в переменных  и последующего их ожидания. Давайте посмотрим на то, как это реализуется.

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

Каждый из трех вызовов `timeTest()` завершается записью  времени выполнения обещания, затем записывается  время выполнения всей операции.

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

Здесь мы сохраняем три объекта Promise в переменных  , что заставляет связанные с ним процессы выполняться одновременно.

Далее мы ожидаем их результаты — поскольку обещания начинают выполняться одновременно, обещания завершатся также в одно время; когда вы запустите второй пример, то увидите модальное окно🪟 примерно через 3 секунды!

Еще одним незначительным неудобством является необходимость оборачивания ожидаемых обещаний в асинхронную функцию.

## Использование async/await совместно с классами

![Application](https://media.giphy.com/media/MC8u9xYzogX8mvb64r/giphy.gif)

В завершение отметим, что вы можете добавлять `async` даже в методах создания классов, чтобы они возвращали обещания, и ждать обещания внутри них.

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
