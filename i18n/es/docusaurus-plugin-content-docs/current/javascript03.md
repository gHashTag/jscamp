---
id: javascript03
title: Variables
sidebar_label: Variables
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/03.jpg)

## Variables

Las variables  (Variables, abreviadas como `var`) son un contenedor  de valores como números usados ​​además ➕ o una cadena que podríamos usar como parte de una oración, así como otros tipos de datos a los que llegaremos saber más tarde.

![Container](https://media.giphy.com/media/0T0FUiZl51VPCLsqLR/giphy.gif)

## Video

<YouTube videoId="gCqxA_JOtmw" />

## Declaración de variables

![Announcement](https://media.giphy.com/media/cYaBD8kxE4PZudHBRA/giphy.gif)

Para usar una variable, primero debe crearla , o para ser más precisos, declarar  la variable. Para ello ingresamos la 🗝️ palabra clave `var` seguida del nombre que le quieres dar a tu variable. La siguiente declaración crea  (en otras palabras: declara  o define) una variable llamada "message":

```jsx live
function learnJavaScript() {
  var message = ''

  return message
}
```

Aquí creamos una variable  `message`. Actualmente ⏱️ no contiene un valor, para ser más precisos, la variable contiene una cadena vacía.

## Asignar un valor a una variable

![Memory](https://media.giphy.com/media/3o6ZtafpgSpvIaKhMI/giphy.gif)

Una vez que se declara una variable , se le puede asignar un valor. Para ello, escribe  el nombre de la variable , seguido de un signo de igual `=` seguido del valor que deseas asignar. Por ejemplo :

```jsx live
function learnJavaScript() {
  var message
  message = 'My name is ...'
  // Podemos acceder a ella usando el nombre de la variable
  return message
}
```

En `RESULT` el valor que le asignaste a la variable  devolvió en la consola. Juega 🎮 con los valores de la variable , por ejemplo, completa la expresión con tu propio nombre.

Para abreviar, puede combinar la declaración de variable  y la entrada  en una sola línea :

```jsx live
function learnJavaScript() {
  var message = 'Hello!' // definir una variable y asignarle un valor
  return message
}
```

## Actualización de variables

![Update](https://media.giphy.com/media/FP47IFqWyXfdKYU6VG/giphy.gif)

Una de las características de las variables  es que su valor puede cambiar.
Cuando a una variable  se le asigna un valor, puede cambiar (actualizar) ese valor simplemente especificando un valor diferente. Echemos un vistazo a un ejemplo simple :

```jsx live
function learnJavaScript() {
  var message = 'Bob' // ahora envíale un message a Bob
  message = true // y ahora el message es verdadero
  message = 35 // y finalmente message 35

  return message
}
```

Otra característica de las variables  es que pueden contener casi cualquier cosa, no solo cadenas y números. Las variables  también pueden contener datos complejos e incluso funciones completas. Aprenderá más sobre esto a medida que avance en el curso.

:::tip ¡En una nota!
Decimos que las variables contienen valores. Esta es una distinción importante. ¡Las variables no son valores en sí mismas! Son contenedores  de valores. Imagina que son como cajitas de cartón  en las que puedes guardar cosas.
:::

![Variables](https://mdn.mozillademos.org/files/13506/boxes.png)

![Hello World](https://media.giphy.com/media/26his8ERHOSxKuWw8/giphy.gif)

## Convenciones de nomenclatura de variables

![Rules](https://media.giphy.com/media/XK8I8Am1gSe17MiJ2m/giphy.gif)

Puedes nombrar la variable  como quieras, pero hay limitaciones. Como regla general, solo debe ceñirse a los caracteres latinos (0-9, a-z, A-Z) y el guión bajo.

- No se recomienda el uso de otros caracteres porque pueden causar errores o ser incomprensibles para una audiencia internacional.
- No use guiones bajos al principio de los nombres de las variables  - esto se usa en algunas construcciones de JavaScript para indicar cosas específicas.
- No utilice números al principio de las variables  . Esto no está permitido y dará como resultado un error.
- Es común apegarse a las llamadas "minúsculas de camello" (camel case - llamado así por las "jorobas" que forman las primeras letras de las palabras), donde se unen varias palabras, usando letras minúsculas para toda la primera palabra, y luego las letras mayúsculas de las palabras subsiguientes. Usamos esto para nuestros nombres de variables  en este artículo.
- Haz nombres de variables  para que sea intuitivamente claro qué datos contienen. No use solo letras/números individuales o frases grandes y largas.
- Las variables  distinguen entre mayúsculas y minúsculas, por lo que `myage` y `myAge` son variables diferentes .
- Y una última cosa: también debe evitar el uso de palabras reservadas de JavaScript como nombres de variables  - ¡Con eso nos referimos a las palabras que componen la sintaxis de JavaScript real! Por lo tanto, no puede usar palabras como var, function, let y for para nombres de variables . Los navegadores los reconocen como piezas de código diferentes y, por lo tanto, se producen errores.

## Lista de palabras reservadas

![Reserved](https://media.giphy.com/media/3o6Mb3eci7bVDKBR2o/giphy.gif)

No podemos llamar a las variables  con estas palabras, ya que están reservadas en el lenguaje JavaScript.

`break`, `case`, `catch`, `class`, `const`, `continue`, `debugger`, `default`, `delete`, `do`, `else`, `export`, `extends`, `finally`, `for`, `function`, `if`, `import`, `in`, `instanceof`, `new`, `return`, `super`, `switch`, `this`, `throw`, `try`, `typeof`, `var`, `void`, `while`, `with`, `yield`

## Mecanografía gratis

![Freedom](https://media.giphy.com/media/6901DbEbbm4o0/giphy.gif)

JavaScript es un "lenguaje de escritura libre ", lo que significa que, a diferencia de otros idiomas , no es necesario especificar qué tipo de datos contendrá la variable  (como números, cadenas, matrices, etc.).

Por ejemplo, si declara una variable  y le asigna un valor entre comillas, el navegador tratará la variable  como una cadena :

```jsx live
function learnJavaScript() {
  var myString = 'Hello'
  // Seguirá siendo una cadena incluso si contiene números, así que tenga cuidado:
  var myNumber = '500' // Vaya, sigue siendo una cadena (string)

  myNumber = 500 // así que algo mejor, ahora este número (number). Elimine esta línea y observe el tipo de datos.

  return typeof myNumber
}
```

## Palabra clave "var" en desuso

![Old](https://media.giphy.com/media/3orieJI3IdkKWIsAGA/giphy.gif)

`var` normalmente no se usa en los scripts modernos, pero aún puede estar oculto en los más antiguos. Esto se debe al hecho de que se comporta de manera ambigua, por lo que en lugar de `var` usaremos `let` para variables  y `const` para constantes - constantes.

 ¡Se acabó el descanso, corre a la siguiente lección!

## React Native

El ejemplo básico `Hola mundo` discutido en la primera lección contiene la constante `App`, que contiene una función de flecha, que conoceremos con más detalle en la lección sobre funciones.

```SnackPlayer name=index.js
import * as React from 'react'
import { Text } from 'react-native'

const App = () => (
  <Text>Hello world!</Text>
)

export default App
```

## ¿Problemas?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Escribe en [Discord](https://discord.gg/6GDAfXn) o Telegram [chat](https://t.me/jscampapp) y suscríbete a nuestras [noticias](https://t.me/javascriptapp)

![JavaScript Camp](/img/bandlink.png)

## Preguntas:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

¿Qué son las variables?

1. Contenedores de valores
2. Valores variables
3. letras latinas

¿Qué pueden contener las variables?

1. Solo cadenas y números
2. Todo tipo de datos
3. Solo datos y funciones complejas

¿Cómo escribir un comando de asignación de variables?

1. `var`
2. `var` [nombre de la variable] =
3. `var` [nombre de la variable]

¿Cómo actualizar una variable?

1. La variable no se puede actualizar
2. Especifique un valor diferente para la variable
3. Establecer un comando especial

¿Qué no está en las reglas para nombrar variables?

1. Números al principio de las variables
2. No uses palabras reservadas
3. Cíñete a los caracteres latinos

¿Cómo establecer el valor de una variable para que el navegador trate la variable como una cadena?

1. Sin comillas
2. citado
3. Entre paréntesis

¿Qué palabra clave no usamos para definir variables?

1. `let`
2. `const`
3. `var`

¿Qué tipo de mayúsculas (es decir, mayúsculas y minúsculas) se deben usar en los nombres de variables en JavaScript?

1. case
2. camel
3. camelCase

¿Es esta sintaxis de JavaScript válida? ¿Si no, porque no?

```jsx
let myMood = \"Curious about JavaScript\" \n let myMood = \"Excited to use my new superpowers\"\n myMood
```

1. Segunda variable sin `let`
2. Realmente
3 error de sintaxis

¿Qué significa un solo signo igual en una declaración?

1. Compara
2. Se asigna valor a una variable
3. Igualdad

¿Qué palabra clave debe usarse para crear cualquier variable que sepa que no se cambiará?

1. `let`
2. `const`
3. `var`

¿Cuándo debería usar la palabra clave `var` en su propio código?

1. Nunca
2. Siempre
3. A menudo

Para comprender cuánto ha aprendido esta lección, realice una prueba en la [aplicación móvil](http://onelink.to/njhc95) de nuestra escuela sobre este tema o en nuestro [bot de Telegram](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Enlaces:

1. [MDN web docs](https://developer.mozilla.org/ru/docs/Learn/JavaScript/Первые_шаги/Variables)
2. [Código para adolescentes: la gran guía de programación para principiantes Volumen 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)
3. [JavaScript.ru](https://learn.javascript.ru/types)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">  </a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>

</table>

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

<!-- ## Супер команда console.log()

Перед тем как продолжить, я познакомлю вас с супер секретной и супер полезной командой `console.log()`, которую вы будете очень и очень часто использовать во время разработки программ.
Так вот, чтобы вывести в консоль отладочную информацию только для разработчиков (пользователи её увидеть не смогут; как вы знаете, большинство людей не подозревает даже о существовании самой консоли, а не то что о секретных «логах»!), напишите:

```javascript
console.log('Совершенно секретно! Только для разработчиков!')
````

Как видно из названия функции, мы выводим в консоль «лог» (то есть информацию о работе системы). Этой доброй суперспособностью разработчики пользуются постоянно. Скажем, когда у вас были сообщения об ошибках, вы видели в консоли именно это — интерпретатор выдавал («логгировал») в консоль информацию о работе системы, чтобы вы могли прочесть и исправить нужные параметры. Словом, очень полезная штука. Вам не раз и не два придётся прибегнуть к помощи console.log, так что запомните эту функцию!

```javascript
console.log('Выведите любое сообщение, какое пожелаете')
console.log('просто введите сюда какую-нибудь ' + 'строку')
var сообщение = 'А ещё в качестве аргумента можно использовать переменные!'
console.log(сообщение)
var чтоНужноИзучить = 'JavaScript'
console.log('Я изучу ' + чтоНужноИзучить) -->

```

```
