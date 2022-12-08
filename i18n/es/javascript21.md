---
id: javascript21
title: 'cierre'
sidebar_label: cierre
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/20.jpg)

Un cierre es una función⚙️ que tiene acceso a una función externa⚙️ incluso después de que la función externa haya terminado. El cierre es necesario para brindar acceso de la función interna al alcance de la función externa️, pero al mismo tiempo cerrar el acceso desde el entorno externo a las variables de la función interna⚙️.

![Snake](https://media.giphy.com/media/3oFzmdjqH15YebLQ52/giphy.gif)

Requisitos para crear un 🏗️ Cierre:

1. Una función externa que se llama en el código.
2. Hay una función interior en la función exterior.
3. Como resultado, la función externa devuelve la interna.

Considere crear un cierre 🏗️ usando un ejemplo:

```jsx live
function learnJavaScript() {
  const getFruit = () => {
    let fruit = 'Banana',
      show = () => {
        return fruit
      }
    return show
  }
  let showFruit = getFruit()
  return showFruit()
}
```

1. En el ejemplo, hemos creado una función externa `getFruit`;
2. Dentro de `getFruit` se creó una función interna `show`.
3. La función `getFruit` devuelve la función `show` como resultado.
4. A continuación en el código, asignamos el resultado de la función `getFruit` a la variable `showFruit`.
5. Porque el resultado de `getFruit` es una función, entonces `showFruit` no se convierte en una variable🔔, sino en una función.
6. El resultado de toda la construcción fue la variable 🔔 `fruit` ubicada dentro de la función `getFruit`, se cerró. Ahora solo podemos averiguar el valor de esta variable 🔔, no se puede cambiar.

## Video

<YouTube videoId="bsWqPzc4g-8" />

## Ejemplos

![Math](https://media.giphy.com/media/xT1Ra5h24Eliux3UVq/giphy.gif)

Considere más ejemplos para comprender.

### Encimera

El mostrador, el ejemplo más sencillo sobre el que se puede considerar el trabajo del cierre.

<!-- ![Counter](https://media.giphy.com/media/QSNvClMu5zWJW/giphy.gif) -->

```jsx live
function learnJavaScript() {
  const makeCounter = () => {
    let x = 0
    return () => {
      return ++x
    }
  }
  const counter = makeCounter()
  return counter()
}
```

### Contador mejorado

![Contador](https://media.giphy.com/media/3o6Zt6fzS6qEbLhKWQ/giphy.gif)

Como resultado, no tendremos una función⚙️, sino varias a la vez.

```jsx live
function learnJavaScipt() {
  let makeCounter = () => {
    let x = 0
    return {
      inc: () => {
        return ++x
      },
      dec: () => {
        return --x
      },
      val: () => {
        return x
      }
    }
  }

  let counter = makeCounter()
  counter.inc() // 1
  counter.inc() // 2
  counter.inc() // 3
  counter.inc() // 4
  counter.dec() // 3
  return counter.val()
}
```

### Cerrando en un bucle

![circle](https://media.giphy.com/media/u5s2ezDicmyuA/giphy.gif)

```jsx live
function learnJavaScript() {
  let res = []
  for (let i = 0; i < 5; i++) {
    res[i] = () => {
      return i
    }
  }
  return res[2]()
}
```

### Recordamos la frase

![l](https://media.giphy.com/media/l4pTfqyI6TCjUW4Yo/giphy.gif)

```jsx live
function learnJavaScript() {
  let phrase = x => {
    return y => {
      return x + ' ' + y
    }
  }

  hello = phrase('Hello')
  return hello('World')
}
```

## Total

Los cierres son uno de los conceptos fundamentales más importantes en JavaScript y deben ser entendidos por todos los desarrolladores de JS. Comprender los cierres 💡 es uno de los pasos para escribir aplicaciones 🖊️ eficientes y de alta calidad.

## ¿Problemas?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Escribe en [Discord](https://discord.gg/6GDAfXn) o Telegram [chat](https://t.me/jscampapp) y suscríbete a nuestras [noticias](https://t.me/ aplicación javascript )

![JavaScript Camp](/img/bandlink.png)

## preguntas

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

¿Qué es un cierre?

1. Construcción
2. Una función que tiene acceso a una función externa
3. Concepto

En un cierre, ¿qué está cerrado a qué?

1. Función en el alcance
2. Variables en funciones

¿Qué hay que hacer para acceder a una variable cerrada?

1. Lo describiré y lo usaré.
2. Está disponible
3. La variable solo se puede ver

Para comprender cuánto ha aprendido esta lección, realice una prueba en la [aplicación móvil](http://onelink.to/njhc95) de nuestra escuela sobre este tema o en nuestro [bot de Telegram](https://t.me/javascriptcamp_bot).

![JS Camp](/img/app.jpg)

## Enlaces

1. [Learn JavaScript](https://learn.javascript.ru/closures)
2. [MDN Web Docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures)
3. [Cierres de JavaScript](https://medium.com/@stasonmars/понимаем-замыкания-в-javascript-раз-и-навсегда-c211805b6898)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr> 
    <td align="center"><a href="https://github.com/IIo3iTiv"><img src="https://avatars1.githubusercontent.com/u/72025062?v=4?s=200" width="200px;" alt=""/><br /><sub><b>IIo3iTiv</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=IIo3iTiv" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
