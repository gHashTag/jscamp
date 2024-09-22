---
id: javascript28
title: Async Await
sidebar_label: Async Await
---

![@serverSerrverlesskiy](/img/javascript/headers/29.jpg)

Существует специальный синтаксис    для работы с промисами, который называется `async/await`.

## Создание асинхронной функции

![creature](https://media.giphy.com/media/4T7e4DmcrP9du/giphy.gif)

Асинхронная функция⚙️ определяется выражением асинхронной функции⚙️. Базовая функция⚙️ выглядит так:

```javascript
async function foo() {
  const value = await somePromise()
  return value
}
```

Мы определяем функцию⚙️ как асинхронную с помощью `async`. Это ключевое🗝️ слово может использоваться с любым синтаксисом   объявления функции⚙️:

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

Как только мы определили функцию⚙️ как асинхронную, мы можем использовать ключевое🗝️ слово `await`.
Это ключевое🗝️ слово помещается перед вызовом промиса, оно приостанавливает выполнение функции⚙️ до тех пор, пока промис не будет выполнен или отклонён.

## Async

![run](https://media.giphy.com/media/3N0fFF5xxcZrO/giphy.gif)

У нас есть ключевое🗝️ слово `async`, которое мы помещаем перед объявлением функции⚙️, чтобы сделать ее асинхронной. Асинхронная функция⚙️ — это функция⚙️, которая предвосхищает возможность использования ключевого🗝️ слова `await` для запуска асинхронного кода .

Попробуйте набрать в консоли браузера следующее:

```javascript
function hello() {
  return 'Hello'
}
hello()
```

Функция⚙️ вернет 'Hello'. Ничего необычного.

Но что если мы превратим ее в асинхронную функцию⚙️? Попробуйте сделать следующее:

```javascript
async function hello() {
  return 'Hello'
}
hello()
```

![Promise](https://media.giphy.com/media/GFtJhEvG3681y/giphy.gif)

Теперь вызов функции⚙️ возвращает обещание. Это одна из особенностей асинхронных функций⚙️ — они возвращают значения, которые гарантировано преобразуются в обещания.

Вы также можете создать асинхронное функциональное⚙️ выражение, например, так:

```javascript
// Function Expression
let hello = async function () {
  return hello()
}
hello()
```

Также можно использовать стрелочные функции⚙️:

```javascript
let hello = async () => {
  return 'Hello'
}
```

Все эти функции⚙️ делают одно и тоже.

Для того, чтобы получить значение завершенного обещания, мы можем использовать блок `.then()`:

```javascript
hello().then(value => console.log(value))
```

… или даже так:

```javascript
hello().then(console.log)
```

Таким образом, добавление ключевого🗝️ слова `async` заставляет функцию⚙️ возвращать обещание вместо значения. Кроме того, это позволяет синхронным функциям избегать любых накладных расходов, связанных с запуском и поддержкой использования `await`. Простое добавление `async` перед функцией⚙️ обеспечивает автоматическую оптимизацию кода движком JS.

## Await

![Wait](https://media.giphy.com/media/myPdoRAlad0J2/giphy.gif)

Преимущества асинхронных функций⚙️ становятся еще более очевидными, когда вы комбинируете их с ключевым🗝️ словом `await`. Оно может быть добавлено перед любой основанной на обещаниях функцией⚙️, чтобы заставить ее дожидаться завершения обещания, а затем вернуть результат. После этого выполняется следующий блок кода .

Вы можете использовать `await` при вызове любой функции⚙️, возвращающей обещание, включая функции⚙️ `Web API`.

Синтаксис  :

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

## Обработка ошибок с `try...catch`

![code rewriting](https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif)

Если вы хотите добавить обработку ошибок, у вас есть несколько вариантов.

Вы можете использовать синхронную структуру `try...catch` вместе с `async/await`:

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

Блок `catch(){}` принимает объект ошибки, который мы назвали `e`. Теперь мы можем вывести его в консоль, это позволит нам получить сообщение о том, в каком месте кода произошла ошибка.

Целенаправленно создадим ошибку в `url` и посмотрим на вывод ошибки.

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

## Итого

![Conclusion](https://media.giphy.com/media/3o6ZsVl2hv8ZnhSXug/giphy.gif)

`Async/await` позволяет писать  асинхронный код, который легко читать и поддерживать. Шесть причин почему его лучше использовать вместо промисов читайте [здесь](https://habr.com/ru/company/ruvds/blog/326074/).

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Проблемы?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Пишите в [Telegram](https://t.me/neuro_coder_group) или [ВКонтакте](https://vk.com/neurocoder), а также подписывайтесь на наши [новости](https://t.me/neuro_coder_ai)

## Вопросы:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

Где помещается ключевое слово `async`?

1. Перед объявлением функции
2. После объявления функции
3. В теле функции

В каких функциях работает `await`?

1. Только в синхронных функциях
2. Только в асинхронных функциях
3. В любых функциях

Асинхронная функция - это:

1. Это функция, которая определяется ключевым словом `async`
2. Это функция, которая предвосхищает возможность использования ключевого слова `await`
3. Оба варианта верны

Преимуществом `async/await` является:

1. Собственный код является заблокированным
2. Избавление кода от блоков `.then()`
3. Необходимость оборачивания ожидаемых обещаний в асинхронную функцию

Чем является этот код:

```javascript
let hello = async function () {
  return hello()
}
hello()
```

1. Синхронная функция
2. Стрелочная функция
3. Асинхронное функциональное выражение

Для того чтобы понять, на сколько вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме.

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Ссылки:

1. [Async-await](https://learn.javascript.ru/async-await)
2. [Как освоить Async / Await в JavaScript на реальных примерах](https://webformyself.com/async-await-v-javascript-na-primerax)
3. [Асинхронное программирование с async/await](https://habr.com/ru/post/491012/)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

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
