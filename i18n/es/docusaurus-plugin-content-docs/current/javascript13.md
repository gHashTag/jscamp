---
id: javascript13
title: Opciones predeterminadas
sidebar_label: Opciones predeterminadas
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/25.jpg)

Los parámetros predeterminados permiten que los parámetros de la función⚙️ se establezcan en valores predeterminados si la función⚙️ se llama sin argumentos, o si al parámetro se le pasa explícitamente el valor `undefined`.

![Teacher](https://media.giphy.com/media/3ohc10nduj1irsuzgA/giphy.gif)

En JavaScript, los parámetros de función⚙️ a los que no se les pasa un valor cuando se les llama, por defecto son `undefined`. Sin embargo, en algunos casos puede ser útil establecer un valor predeterminado diferente. Esto es exactamente para lo que son los ajustes predeterminados.

## Sintaxis

![book](https://media.giphy.com/media/l0HlOBZcl7sbV6LnO/giphy.gif)

```jsx live
function learnJavaScript() {
  const multiply = (a, b = 1) => {
    // El valor predeterminado de b es 1
    return a * b
  }
  // Si b no está definido, se le asignará un valor predeterminado.
  return multiply(5, 2) // elimine la coma, el segundo argumento y obtenga 5 * 1
}
```

## Video

<VideoId de YouTube="J89Qcz0cunw" />

### Pasar otros valores "falsos"

![basketball](https://media.giphy.com/media/3oEdv5e5Zd2gsczAhG/giphy.gif)

Si se pasa cualquier valor que no sea `undefined` al parámetro formal cuando se llama, incluido uno de los valores "falsos" como false  , `0`, `""`, `''`, `null`, `NaN `, en este caso, el valor predeterminado no se asignará al parámetro. En este caso, debe escribir  el código usted mismo que detectará estos "valores falsos".

## Ejemplos

![Math](https://media.giphy.com/media/xT1Ra5h24Eliux3UVq/giphy.gif)

En los parámetros predeterminados, puede usar los valores de los parámetros anteriores (ubicados a la izquierda en la lista):

```jsx live
function learnJavaScript() {
  const greet = (name, greeting, message = greeting + ' ' + name) => {
    return [name, greeting, message]
  }

  return greet('David ', 'Hi ')
}
```

Un ejemplo de una función con y sin parámetros predeterminados :

```jsx live
function learnJavaScript() {
  const withDefaults = (a = 1, b = 3, c = 2) => {
    // Función con parámetros por defecto
    return [a, b, c]
  }
  const withoutDefaults = (a, b, c) => {
    // Función sin parámetros predeterminados
    if (a == undefined) {
      a = 1
    }
    if (b == undefined) {
      b = 3
    }
    if (c == undefined) {
      c = 2
    }
    return [a, b, c]
  }

  return withDefaults()
}
```

Результат будет тот же, но без параметров по умолчанию код может стать заметно больше.

## React Native

Большинство компонентов можно настроить при их создании с различными параметрами. Эти параметры создания называются - `props`. Обратите внимание на то, что в третий компонент `HelloWorld` мы не передаем `name` поэтому распечатывается имя `john`

```SnackPlayer name=index.js
import * as React from 'react'
import { Text } from 'react-native'

const HelloWorld = ({ name = 'Вася' }) => (
  <Text>Hello {name}!</Text>
)

const App = () => (
  <>
    <HelloWorld name='Luk' />
    <HelloWorld name='John' />
    <HelloWorld /> 
  </>
)

export default App
```

El uso de `name` como `props` nos permite personalizar el componente de saludo para que podamos reutilizar ese componente para cada uno de nuestros saludos. Este ejemplo también usa el componente `HelloWorld` en JSX. La capacidad de hacer esto es lo que hace que React sea tan genial.

## ¿Problemas?

![Problema](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Escribe en [Discord](https://discord.gg/6GDAfXn) o Telegram [chat](https://t.me/jscampapp) y suscríbete a nuestras [noticias](https://t.me/javascriptapp)

![Campamento JavaScript](/img/bandlink.png)

## Preguntas:

![Pregunta](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

Si no se pasa ningún valor a los parámetros de la función⚙️, ¿qué valor toman por defecto?

1. `null`
2. `undefined`
3. `NaN`

¿Los parámetros predeterminados "capturan" valores falsos?

1. `true`
2. `false`

¿Es posible utilizar los valores de los parámetros ubicados a la izquierda en la lista en los parámetros predeterminados?

1. `true`
2. `false`

Para comprender cuánto ha aprendido esta lección, realice una prueba en la [aplicación móvil](http://onelink.to/njhc95) de nuestra escuela sobre este tema o en nuestro [bot de Telegram](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

## Enlaces:

1. [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Default_parameters)

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

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)
