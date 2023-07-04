---
id: javascript02
title: Comentarios
sidebar_label: Comentarios
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/02.jpg)

## ¿Qué son los comentarios?

JavaScript tiene varias formas de indicar comentarios en el código 📟

A veces, al escribir código 🖊️, deberá proporcionarle explicaciones destinadas solo a personas 👨 y no a una computadora. Tal vez sea algún tipo de mensaje del pasado (¡para el yo del futuro!) sobre esto o aquello en el código del programa. O tal vez solo sea una indicación de que solo se debe ejecutar tal o cual parte del código, y el resto debe omitirse. En una palabra, en tal caso, deberá recurrir a la ayuda de los comentarios.
Los comentarios 🗣️ se utilizan para agregar ➕ pistas, notas 🔖, sugerencias o advertencias. Pueden hacer que el código 💡 sea más fácil de leer y comprender. También se pueden usar para evitar que se ejecute el código 🛑 (esta técnica se practica al depurar código).

En JavaScript, hay varias formas de incluir comentarios 🗣️ en tu código.

## Video

<YouTube videoId="zCvKMw5QHRw" /> 

## Comentario de una sola línea

![Barra oblicua](https://media.giphy.com/media/bKXMS0NjXoyaY/giphy.gif)

La primera 1️⃣ manera `//comentario` 🗣️ en este caso, todo el texto 📜 en la línea después de la doble barra inclinada será un comentario 🗣️. Cuando el intérprete ve dos barras diagonales de 2️⃣ seguidas `//`, inmediatamente entiende que todo lo que viene más allá del final de la línea se puede ignorar de manera segura. Ignora la sintaxis del código 📖 por ahora, lo veremos en detalle un poco más tarde.

```jsx live
function learnJavaScript() {
  // Este es un comentario de línea
  var hello = 'Hello world!!!'

  return hello
}
```
## Comentario de varias líneas

![Comentarios](https://media.giphy.com/media/UevalSWg5twQeqpc8Q/giphy.gif)

La segunda forma 2️⃣ es `/* */`, que es más flexible que la primera 1️⃣. Tan pronto como el intérprete ve `/*`, piensa: "Sí, así que hasta que vea `*/`, ¡puedo ignorar cualquier cosa aquí!"
Por ejemplo, puedes usarlo en una línea 1️⃣ 👇:

```jsx live
function learnJavaScript() {
  /* este es un comentario de una sola linea */
  var hello = 'Hello world!!!'

  return hello
}
```

O puedes hacer un comentario de varias líneas 🗣️ como se muestra aquí 👇:

```jsx live
function learnJavaScript() {
  /* Este comentario ocupa varias líneas.
     Tenga en cuenta que no tiene que romper un comentario hasta que lo haya terminado. */
  var hello = 'Hello world!!!'
  /* Escribe tu comentario aqui */
  return hello
}
```

## Comentar en medio del código.

![Entre](https://media.giphy.com/media/fnjIiBNo38IHS/giphy.gif)

Además, si lo deseas, puedes usar este comentario 🗣️ en medio de una línea de código. Aunque esto puede empeorar la legibilidad del código 👇:

```jsx live
function learnJavaScript() {
  var x = ''
  var hello = 'Hello ' + x /* вставьте значение x */ + '!'

  return hello
}
```

Sin embargo, hay maneras de reducir la necesidad de comentarios. Podemos usar ciertas técnicas de codificación para refinar nuestro código simplemente aprovechando el lenguaje de programación a nuestro favor.

¡Esto no solo hace que nuestro código sea más fácil de entender, sino que también ayuda a mejorar el diseño general del programa!

Este tipo de código a menudo se denomina autodocumentado.

Esto significa que el código debe estar escrito de tal manera que, en primer lugar, sea conveniente que otros programadores trabajen con él en el futuro, incluido su autor, y en segundo lugar, teniendo en cuenta la posibilidad de expandir este código.

Al comentar el código, todo estaba llamado a cambiar🔔.

![Comments](https://media.giphy.com/media/SvuRLwWT0EoeErwPvB/giphy.gif)

## React Native

Un ejemplo de dónde más podemos usar comentarios en un proyecto `React Native` real. De repente necesitaremos esconder algún código. Para hacer esto, necesitamos envolverlo en un comentario. Tenga en cuenta que el bloque con comentarios funcionó, debe estar entre llaves, de lo contrario, la biblioteca `React` no entenderá que esta es una expresión de JavaScript; esta es una especificidad de la sintaxis `JSX`, que estudiaremos en el curso más tarde. Intente descomentar el código y luego vuelva a comentarlo.

```SnackPlayer name=index.js
import * as React from 'react'
import { Text } from 'react-native'

const App = () => (
  <>
    <Text>Hello world!</Text>
    {/* <Text>Здесь был Вася!</Text> */}
  </>
)

export default App
```

## ¿Problemas?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Escribe en [Discord](https://discord.gg/6GDAfXn) o Telegram [chat](https://t.me/jscampapp) y suscríbete a nuestras [noticias](https://t.me/javascriptapp)

![JavaScript Camp](/img/bandlink.png)


## Preguntas:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

¿Para quién son los comentarios?

1. persona
2. Consola
3. Intérprete de JavaScript

¿Para qué sirven los comentarios?

1. Agrega pistas, notas, sugerencias
2. Para cumplir con las solicitudes
3. Para evitar la ejecución de código

¿Qué forma de especificar un comentario en código JavaScript no existe?

1. `(' ')`
2. `//`
3. `/* */`

¿Cómo deshabilitar cualquier número de líneas de código?

1. Escribe un comentario en medio del código.
2. Envuelve el código en un comentario
3. Usa el comando `console.log`

Intérprete de JavaScript \_\_\_\_ cualquier comentario encontrado.

1. Realiza
2. Ignora
3. Compila

¿Cuál es el símbolo para un comentario de una sola línea?

1. `//`
2. `\\`
3. `||`

¿Qué caracteres se deben ingresar para iniciar un comentario de bloque?

1. `/*`
2. `*\\`
3. `//`

¿Qué término se refiere al código que tiene nombres útiles de variables y nombres de funciones descriptivos para que sea fácil para el desarrollador comprender el propósito del código cuando lo lee (sin mucha necesidad de comentarios explicativos)?

1. Autodocumentación
2. Documentación
3. Manuscrito

Para comprender cuánto ha aprendido esta lección, realice una prueba en la [aplicación móvil](http://onelink.to/njhc95) de nuestra escuela sobre este tema o en nuestro [bot de Telegram](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

## Enlaces:

1. [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Lexical_grammar)
2. [Código para adolescentes: la gran guía de programación para principiantes Volumen 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)
3. [JavaScript.ru](https://learn.javascript.ru/types)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>
  
</table>

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)
