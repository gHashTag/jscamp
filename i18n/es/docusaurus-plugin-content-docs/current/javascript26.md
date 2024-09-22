---
id: javascript26
title: Promise – cálculos diferidos y asíncronos
sidebar_label: Promise
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/27.jpg)

Promise es un objeto que contiene el valor futuro de una operación asíncrona. Por ejemplo, si solicita algunos datos del servidor, la promesa nos promete obtener estos datos, que podemos usar en el futuro.

![math](https://media.giphy.com/media/4JVTF9zR9BicshFAb7/giphy.gif)

Al principio, la promesa tiene el estado `pending`, luego uno de: `fulfilled` (exitoso) o `rejected`(fracaso).

![estados de promesa](/img/javascript/23/promise.png)

1. `Pending` - La promesa está pendiente si el resultado no está listo. Es decir, esperar a que se complete algo (por ejemplo, que se complete una operación asincrónica).
2. `Fulfilled` - La promesa se resuelve si el resultado está disponible. Es decir, algo completó su ejecución (por ejemplo, una operación asíncrona) y todo fue exitoso.
3. `Rejected` - Promesa rechazada si ocurrió un error durante la ejecución.

## Video

<YouTube videoId="gwauVA2cIVo" />

## Creación de promesas

![Más](https://media.giphy.com/media/Yqo5mjWTLGlVOIP8Dc/giphy.gif)

El objeto `Promise` se crea usando la nueva palabra clave🗝️ y su constructor.
El constructor Promise toma un argumento, una devolución de llamada, también conocida como función ejecutor⚙️, que toma 2 devoluciones de llamada, `resolve` y `reject`.

La función ejecutiva⚙️ se ejecuta inmediatamente después de la creación de la promesa. Se hace una promesa para ser cumplida con una llamada a `resolve()` y rechazada con `reject()`.

```jsx
const promise = new Promise((resolve, reject) => {
  if (allWentWell) {
    resolve('¡Todo salió a la perfección!')
  } else {
    reject('Algo salió mal')
  }
})
```

`resolve()` y `reject()` toman un argumento, que puede ser una cadena, un número, un booleano, una matriz o un objeto.

Para proporcionar una función⚙️ con la funcionalidad⚙️ de las promesas, solo necesita devolver un objeto `Promise` en ella:

```jsx
function myAsyncFunction(url) {
  return new Promise((resolve, reject) => {
    // Código de función
  })
}
```

## Promesa de uso

![Ayuda](https://media.giphy.com/media/iigqhSTOKmb6wDObGb/giphy.gif)

Las promesas se usan con los métodos `then()` y `catch()`.

###después

El método `then` se usa para ejecutar funciones ⚙️ en un resultado positivo y negativo de una promesa.

![Lanzamiento](https://media.giphy.com/media/1n4FT4KRQkDvK0IO4X/giphy.gif)

Sintaxis   del método `then`:

```jsx
promise.then(
  function (result) {
    /*manejar el éxito*/
  },
  function (error) {
    /* manejará el error */
  }
)
```

El primer argumento 1️⃣ del método `then` es una función⚙️ que se ejecuta cuando la promesa pasa al estado "éxito" y obtiene el resultado.

El segundo argumento `then` es una función⚙️ que se ejecuta cuando la promesa pasa al estado "fallido" y recibe un error.

![Error](https://media.giphy.com/media/iJCo9daAP0xugHhhfb/giphy.gif)

Un ejemplo del método `then`:

```jsx
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve('done!'), 1000)
})

// resolve ejecutará la primera función pasada a .then
promise.then(
  result => alert(result), // mostrará "hecho!" en un segundo
  error => alert(error) // No comenzará
)
```

А в случае ошибки в промисе – выполнится вторая:

```jsx
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error('Whoops!')), 1000)
})

// reject ejecutará la segunda función pasada a .then
promise.then(
  result => alert(result), // No comenzará
  error => alert(error) // mostrará "Error: ¡Ups!" después de un segundo
)
```

Si necesita mostrar solo el resultado de una ejecución exitosa, entonces solo se puede pasar una función a `then`⚙️:

```jsx
let promise = new Promise(resolve => {
  setTimeout(() => resolve('done!'), 1000)
})

promise.then(alert) // mostrará "done!" después de un segundo
```

### catch

![Catch](https://media.giphy.com/media/fxeeuml8GaESfmuE4z/giphy.gif)

El método `catch` se utiliza para detectar errores. Se puede usar en lugar del método `then` para mostrar mensajes de error sobre errores.

Sintaxis   del método catch:

```jsx
let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('¡Error!')), 1000)
})

promise.catch(alert) // mostrará "Error: ¡Error!" después de un segundo
```

### promise.all

Este método toma una matriz de promesas y devuelve     una nueva promesa, que se cumplirá cuando todas las promesas dentro de la matriz se cumplan o se rechacen tan pronto como se cumpla una promesa que se rechace.

![Regresar](https://media.giphy.com/media/Y08bx6Fea1BafzTlvc/giphy.gif)

Por ejemplo:

```jsx
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise1 cumplida')
  }, 2000)
})
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise2 cumplida')
  }, 1500)
})
Promise.all([promise1, promise2])
  .then(data => console.log(data[0], data[1]))
  .catch(error => console.log(error))
```

Aquí, el argumento dentro de `then()` es una matriz que contiene los valores prometidos en el mismo orden en que se pasaron a `Promise.all()`.

<!-- ### promise.race

![Bomerang](https://media.giphy.com/media/g0yLXvb7Ffn9rilMIm/giphy.gif)

Этот метод принимает массив промисов и возвращает один    новый промис, который будет выполненным, как только встретится выполненный промис в массиве или же отклоняется, если отклоненный промис встречается раньше.

Например:

```jsx
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise1 выполнен')
  }, 1000)
})
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise2 отклонен')
  }, 1500)
})
Promise.race([promise1, promise2])
  .then(data => console.log(data)) // Promise1 выполнен
  .catch(error => console.log(error))
```

Тут мы имеем два промиса, где один выполняется через `1` секунду, а другой отклоняется через `1.5` секунды. Как только первый 1️⃣ промис выполнен, возвращенный из `Promise.race()` промис будет иметь статус выполненного не дожидаясь статуса второго промиса.

Здесь data, которая передается в `then()` является значением первого, выполненного, промиса.

По итогу, `Promise.race()` дожидается первого промиса и берет его статус как статус возвращаемого промиса. -->

## ¿Problemas?

![Problema](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Escribe en [Discord](https://discord.gg/6GDAfXn) o Telegram [chat](https://t.me/jscampapp) y suscríbete a nuestras [noticias](https://t.me/javascriptapp)

![Campamento JavaScript](/img/bandlink.png)

## Preguntas:

![Pregunta](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

¿Cuál es el nombre del método que se llama cuando la promesa es exitosa?

1. `reject`
2. `resolve`

¿Qué método se puede usar para verificar el cumplimiento de todas las promesas en una matriz?

1. `promise.all`
2. `promise.race`

<!-- Каким методом можно проверить выполнение всех промисов в массиве?

1. `promise.all`
2. `promise.race`

Каким методом можно проверить какой промис выполниться первее?

1. `promise.all`
2. `promise.race` -->

¿Qué método se utiliza para detectar errores en las promesas?

1. `then`
2. `catch`

Para comprender cuánto ha aprendido esta lección, realice una prueba en la [aplicación móvil](http://onelink.to/njhc95) de nuestra escuela sobre este tema o en nuestro [bot de Telegram](https://t.me/javascriptcamp_bot).

![Campamento JS](/img/app.jpg)

## Enlaces:

1. [Documentos web de MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise)
2. [Aprender JavaScript](https://learn.javascript.ru/promise)
3. [Comprender las promesas](https://blog.bitsrc.io/understanding-promises-in-javascript-c5248de9ff8f?gi=1e459ca846d9)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/FELiX-RN"><img src="https://avatars0.githubusercontent.com/u/72006627?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Philipp Dvinyaninov</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=FELiX-RN" title="Documentation">  </a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)
