---
id: javascript28
title: Async في انتظار
sidebar_label: Async في انتظار
---

![@serverSerrverlesskiy](/img/javascript/headers/29.jpg)

هناك صيغة خاصة للعمل مع الوعود تسمى `async / await`.

## إنشاء وظيفة غير متزامنة

![creature](https://media.giphy.com/media/4T7e4DmcrP9du/giphy.gif)

يتم تعريف دالة غير متزامنة بواسطة تعبير دالة غير متزامن. تبدو الوظيفة الأساسية كما يلي:

```javascript
async function foo() {
  const value = await somePromise()
  return value
}
```

نحدد دالة لتكون غير متزامنة باستخدام`async`. يمكن استخدام هذه الكلمة الأساسية مع أي بناء جملة لإعلان الوظيفة:

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

بمجرد تعريف الوظيفة على أنها غير متزامنة ، يمكننا استخدام `await` كلمة رئيسية.
يتم وضع هذه الكلمة الرئيسية قبل مكالمة الوعد ، وتوقف الوظيفة مؤقتًا حتى يتم الوفاء بالوعد أو رفضه.

## غير متزامن

![run](https://media.giphy.com/media/3N0fFF5xxcZrO/giphy.gif)

لدينا الكلمة `async`, التي نضعها قبل إعلان الوظيفة لجعلها غير متزامنة. الوظيفة غير المتزامنة - هي وظيفة - تتوقع استخدام`await` الكلمة الأساسية لتشغيل التعليمات البرمجية غير المتزامنة.

حاول كتابة ما يلي في وحدة تحكم المستعرض الخاص بك:

```javascript
function hello() {
  return 'Hello'
}
hello()
```

ستعود الوظيفة `Hello`. لا شيء غير طبيعي.

ولكن ماذا لو قمنا بتحويلها إلى دالة غير متزامنة⚙️؟ حاول القيام بما يلي:

```javascript
async function hello() {
  return 'Hello'
}
hello()
```

![Promise](https://media.giphy.com/media/GFtJhEvG3681y/giphy.gif)

يعيد استدعاء الوظيفة الآن وعدًا. هذه إحدى ميزات الوظائف غير المتزامنة - تعود القيم التي يتم ضمان تحويلها إلى وعود.

يمكنك أيضًا إنشاء تعبير دالة غير متزامن ، مثل هذا:

```javascript
// Function Expression
let hello = async function () {
  return hello()
}
hello()
```

يمكنك أيضًا استخدام وظائف الأسهم⚙️:

```javascript
let hello = async () => {
  return 'Hello'
}
```

كل هذه الوظائف - تفعل نفس الشيء.

للحصول على قيمة الوعد المنجز ، يمكننا استخدام `.then()` منع:

```javascript
hello().then(value => console.log(value))
```

… أو حتى مثل هذا:

```javascript
hello().then(console.log)
```

وهكذا ، فإن إضافة الكلمة `async` يتسبب في قيام الدالة بإرجاع وعد بدلاً من قيمة. كما يسمح للوظائف المتزامنة بتجنب أي عبء مرتبط ببدء التشغيل والحفاظ عليه. ببساطة إضافة `async` قبل الوظيفة - تمكن محرك JS من تحسين الشفرة تلقائيًا.

## انتظر

![Wait](https://media.giphy.com/media/myPdoRAlad0J2/giphy.gif)

تصبح فوائد الوظائف غير المتزامنة أكثر وضوحًا عند دمجها مع الكلمة الأساسية انتظار. يمكن إضافتها قبل أي وظيفة قائمة على الوعد - لجعلها تنتظر اكتمال الوعد ثم إرجاع النتيجة. بعد ذلك ، يتم تنفيذ الكتلة التالية من التعليمات البرمجية.

يمكنك استخدام `await` عند استدعاء أي وظيفة تعود بوعد ، بما في ذلك`Web API` المهام.

بناء الجملة  :

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

## خطأ في التعامل مع `حاول ...`

![code rewriting](https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif)

إذا كنت تريد إضافة معالجة الأخطاء ، فلديك عدة خيارات.

يمكنك استخدام متزامن `try ... catch` هيكل مع`async / await`:

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

ال `catch () {}` block يأخذ كائن خطأ ، والذي أطلقنا عليه اسم `e`. الآن يمكننا إخراجها إلى وحدة التحكم ، وهذا سيسمح لنا بتلقي رسالة حول مكان في الكود حدث الخطأ.

دعونا ننشئ خطأ في عنوان url عن قصد وننظر إلى ناتج الخطأ.

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

## مجموع

![Conclusion](https://media.giphy.com/media/3o6ZsVl2hv8ZnhSXug/giphy.gif)

`Async / await` يسمح لك بالكتابة  رمز غير متزامن يسهل قراءته وصيانته. لستة أسباب لماذا من الأفضل استخدامه بدلاً من قراءة الوعود [here](https://habr.com/ru/company/ruvds/blog/326074/).

## مشاكل؟

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Write to [Discord](https://discord.gg/6GDAfXn) chat.

## أسئلة:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

أين `async` الكلمة الرئيسية تذهب؟

1. قبل إعلان الوظيفة
2. بعد إعلان الوظيفة
3. في جسم الوظيفة

ما هي الوظائف `await`العمل في؟

1. فقط في وظائف متزامنة
2. فقط في الوظائف غير المتزامنة
3. في أي وظيفة

الوظيفة غير المتزامنة هي:

1. هذه هي الوظيفة التي تحددها الكلمة الأساسية `async`
2. هذه وظيفة تتوقع استخدام `await` كلمة رئيسية
3. كلا الخيارين صحيحان

ميزة`async / await` هو:

1. الرمز الخاص مقفل
2. التخلص من الكود من `.then()` كتل
3. الحاجة إلى الوفاء بالوعود المتوقعة في وظيفة غير متزامنة

ما هذا الرمز:

```javascript
let hello = async function () {
  return hello()
}
hello()
```

1. وظيفة متزامنة
2. وظيفة السهم
3. تعبير دالة غير متزامن

لفهم مقدار ما تعلمته في هذا الدرس ، قم بإجراء الاختبار في[mobile application](http://onelink.to/njhc95) من مدرستنا في هذا الموضوع.

[![EnglishMoji!](/img/logo/englishmoji.png)](https://link-to.app/xvh7Ush9kl)

## الروابط:

1. [Async-await](https://learn.javascript.ru/async-await)
2. [How to master async / await in JavaScript with real examples](https://webformyself.com/async-await-v-javascript-na-primerax)
3. [Asynchronous programming with async / await](https://habr.com/ru/post/491012/)

## المساهمون ✨

الشكر يعود إلى هؤلاء الأشخاص الرائعين ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

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

[![EnglishMoji!](/img/logo/englishmoji.png)](https://link-to.app/xvh7Ush9kl)
