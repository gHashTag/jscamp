---
id: javascript28
title: Async Await
sidebar_label: Async Await
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/29.jpg)

Hay una sintaxis especial    para tratar con promesas llamada `async/await`.

## Crear una función asíncrona

![criatura](https://media.giphy.com/media/4T7e4DmcrP9du/giphy.gif)

Una función asincrónica⚙️ se define mediante una expresión de función asincrónica⚙️. La función básica⚙️ se ve así:

```javascript
async function foo() {
  const value = await somePromise()
  return value
}
```

Definimos una función⚙️ como asíncrona con `async`. Esta palabra clave🗝️ se puede usar con cualquier sintaxis   de declaración de función⚙️:

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

Una vez que hemos definido una función⚙️ como asíncrona, podemos usar la palabra clave 🗝️ `await`.
Esta palabra clave 🗝️ se coloca antes de llamar a la promesa, suspende la ejecución de la función ⚙️ hasta que se cumpla o rechace la promesa.

## Video

<YouTube videoId="5KVQ4pcJOrU" />

## Async

![run](https://media.giphy.com/media/3N0fFF5xxcZrO/giphy.gif)

Tenemos la palabra clave `async` que ponemos antes de la declaración  de la función⚙️ para que sea asíncrona. Una función asincrónica⚙️ es una función⚙️ que anticipa la capacidad de usar la palabra clave `await`🗝️ para ejecutar código asincrónico.

Intente escribir lo siguiente en la consola de su navegador:

```javascript
function hello() {
  return 'Hello'
}
hello()
```

La función ⚙️ devolverá 'Hello'. Nada inusual.

Pero, ¿y si lo convertimos en una función asíncrona⚙️? Intenta hacer lo siguiente:

```javascript
async function hello() {
  return 'Hello'
}
hello()
```

![Promise](https://media.giphy.com/media/GFtJhEvG3681y/giphy.gif)

Ahora llamar a la función⚙️ devuelve una promesa. Esta es una de las características de las funciones asincrónicas⚙️: devuelven valores que se garantiza que se convertirán en promesas.

También puede crear una  expresión de función asincrónica ⚙️ así:

```javascript
// Function Expression
let hello = async function () {
  return hello()
}
hello()
```

También puedes usar funciones de flecha⚙️:

```javascript
let hello = async () => {
  return 'Hello'
}
```

Todas estas funciones⚙️ hacen lo mismo.

Para obtener el valor de la promesa completada, podemos usar el bloque `.then()`:

```javascript
hello().then(value => console.log(value))
```

... o incluso así:

```javascript
hello().then(console.log)
```

Entonces, agregar la palabra clave `async` hace que la función 🗝️ devuelva una promesa en lugar de un valor. También permite funciones sincrónicas para evitar cualquier sobrecarga asociada con el inicio y el mantenimiento del uso de `await`. Simplemente agregar `async` delante de una función⚙️ garantiza que el motor JS optimice automáticamente el código.

## Await

![Wait](https://media.giphy.com/media/myPdoRAlad0J2/giphy.gif)

Los beneficios de las funciones asincrónicas⚙️ se vuelven aún más evidentes cuando las combina con la palabra clave🗝️ `esperar`. Se puede agregar antes de cualquier función basada en promesas⚙️ para que espere a que se complete la promesa y luego devuelva el resultado. Después de eso, se ejecuta el siguiente bloque de código.

Puede usar `await` al llamar a cualquier función⚙️ que devuelva una promesa, incluidas las funciones de `Web API`⚙️.

Sintaxis  :

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

## Manejo de errores con `try...catch`

![reescritura de código](https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif)

Si desea agregar el manejo de errores, tiene varias opciones.

Puede usar una estructura `try...catch` sincrónica junto con `async/await`:

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

El bloque `catch(){}` acepta un objeto de error al que llamamos `e`. Ahora podemos imprimirlo en la consola, esto nos permitirá recibir un mensaje  sobre en qué parte del código  ocurrió el error .

Vamos a crear deliberadamente un error en la `url` y mirar el resultado del error.

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

## Total

![Conclusión](https://media.giphy.com/media/3o6ZsVl2hv8ZnhSXug/giphy.gif)

`Async/await` te permite escribir  código asíncrono que es fácil de leer y mantener. Lea seis razones por las que es mejor usarlo en lugar de promesas [aquí](https://habr.com/ru/company/ruvds/blog/326074/).

## ¿Problemas?

![Problema](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Escribe en [Discord](https://discord.gg/6GDAfXn) o Telegram [chat](https://t.me/jscampapp) y suscríbete a nuestras [noticias](https://t.me/javascriptapp)

![JavaScript Camp](/img/bandlink.png)

## Preguntas:

![Pregunta](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

¿Dónde se coloca la palabra clave `async`?

1. Antes de la declaración de la función
2. Después de la declaración de la función
3. En el cuerpo de la función

¿En qué funciones funciona `await`?

1. Solo en funciones síncronas
2. Solo en funciones asíncronas
3. En cualquier función

Una función asíncrona es:

1. Esta es una función definida por la palabra clave `async`
2. Esta es una característica que anticipa la posibilidad de usar la palabra clave `await`
3. Ambas opciones son correctas

La ventaja de `async/await` es:

1. El código propio está bloqueado
2. Código conciso y limpio

Para comprender cuánto ha aprendido esta lección, realice una prueba en la [aplicación móvil](http://onelink.to/njhc95) de nuestra escuela sobre este tema o en nuestro [bot de Telegram](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Enlaces:

1. [Async-await](https://learn.javascript.ru/async-await)
2. [Cómo dominar Async/Await en JavaScript con ejemplos reales](https://webformyself.com/async-await-v-javascript-na-primerax)
3. [Programación asíncrona con async/await](https://habr.com/en/post/491012/)

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

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)
