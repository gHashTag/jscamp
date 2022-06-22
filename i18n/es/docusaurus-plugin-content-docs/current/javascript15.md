---
id: javascript15
title: Diseño switch case
sidebar_label: Diseño switch case
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/14.jpg)

La construcción `switch` se utiliza para comparar un valor de igualdad con diferentes opciones.

En este caso, la igualdad está implícita en el sentido del operador de igualdad estricta `===`, `switch` no puede compararse con una expresión regular o de otra manera. Es decir, los valores deben ser del mismo tipo para que se mantenga la igualdad.

![comparison](https://media.giphy.com/media/icJA0VF7ntoEL18Jez/giphy.gif)

Si la condición coincide, se ejecuta el bloque de código 📟 asociado con el `case` correspondiente. Si ninguna de las condiciones coincide, entonces se ejecuta el código 📟 especificado en el bloque "predeterminado", si corresponde. El comando `break` se usa para salir de la construcción. Si no se especifica, automáticamente se ejecutará el bloque de código 📟 del siguiente `case`, y así sucesivamente. Por lo tanto, usamos `break` en nuestros scripts, para no conducir al intérprete a través de todos los `case`, lo que reduce el rendimiento del script.

## Video

<YouTube videoId="s2fLXDgA1wQ" />

## Sintaxis

![Syntax](https://media.giphy.com/media/yR4xZagT71AAM/giphy.gif)

La construcción `switch` tiene uno o más bloques `case` y un bloque `default` opcional.

Se parece a esto:

```jsx
switch (n) {
  case 1:
    // bloque de código 1;
    break
  case 2:
    // bloque de código 2;
    break
  // .......
  // otras opciones de case
  // .......
  default:
  // bloque de código si ninguna de las condiciones coincide;
}
```

`n` es la condición booleana [boolean](https://jscamp.app/docs/javascript08).

## Ejemplos

![Math](https://media.giphy.com/media/xT1Ra5h24Eliux3UVq/giphy.gif)

Considere el ejemplo más simple 👇:

```jsx live
function learnJavaScript() {
  let a = 4
  let str
  switch (a) {
    case 3:
      str = 'No es suficiente'
      break
    case 4:
      str = '¡Exactamente!'
      break
    case 5:
      str = 'reventar'
      break
    default:
      str = 'No conozco tales significados'
  }
  return str
}
```

Aquí, el operador `switch` comparará secuencialmente `a` con todas las opciones de `case`.
Primero `3`, luego, dado que no hay coincidencia, `4`. Si se encuentra una coincidencia, esta opción se ejecutará, desde la línea `str = '¡Al punto!'` y más allá, hasta el `break` más cercano, que interrumpirá la ejecución.

![Wow](https://media.giphy.com/media/3oriO13KTkzPwTykp2/giphy.gif)

Considere este ejemplo 👇:

```jsx live
function learnJavaScript() {
  let a = 'Apples'
  let str
  switch (a) {
    case 'Apples':
      str = 'I love ' + a
      break
    case 'Oranges':
      str = 'I love ' + a
      break
    case 'Bananas':
      str = 'I love ' + a
      break
    default:
      str = 'I like other fruits'
  }
  return str
}
```

Aquí, el operador `switch` comparará secuencialmente `a` con todas las opciones de `case`. Pero aquí hay una comparación no de números, sino de cadenas. Esto se puede hacer con cualquier tipo de datos, lo principal es que se comparan los mismos tipos de datos.

## Reemplazando `if`

También `Switch` se usa para reemplazar múltiples `if`.

Por ejemplo, puede reemplazar este código con 👇:

```jsx live
function learnJavaScript() {
  let number = 2
  let str
  if (number === 0) {
    str = 'Ingresaste el número 0'
  }

  if (number === 1) {
    str = 'Ingresaste el número 1'
  }

  if (number === 2 || number === 3) {
    str = 'Ingresaste el número 2, o tal vez 3'
  }
  return str
}
```

На этот 👇 :

```jsx live
function learnJavaScript() {
  let number = 2
  let str
  switch (number) {
    case 0:
      str = 'Ingresaste el número 0'
      break

    case 1:
      str = 'Ingresaste el número 1'
      break

    case 2:
    case 3:
      str = 'Ingresaste el número 2, o tal vez 3'
      break
  }
  return str
}
```

El resultado será el mismo, pero el código 📟 será más legible y fácil de trabajar.

## Reaccionar nativo

Un ejemplo de uso en aplicaciones `React Native`.

```SnackPlayer name=index.js
import * as React from 'react'
import { Text } from 'react-native'

const App = () => {
  const userType = 'Admin'
  
  return (
    <>
      {(() => {
           switch (userType) {
              case 'Admin':
                  return (
                    <Text>You are a Admin.</Text>
                  )
              case 'Manager':
                  return (
                    <Text>You are a Manager.</Text>
                  )
              default:
                  return (
                    <Text>You are a User.</Text>
                  )
           }
        })()}
    </>
  )
}

export default App
```

## ¿Problemas?

![Problema](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Escribe en [Discord](https://discord.gg/6GDAfXn) o Telegram [chat](https://t.me/jscampapp) y suscríbete a nuestras [noticias](https://t.me/javascriptapp)

![JavaScript Camp](/img/bandlink.png)

## Preguntas:

![Pregunta](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

¿Es posible usar `switch` para comparar algo con expresiones regulares?

1. 'true'
2. 'false'

¿Qué operador de comparación usa `switch`?

1. `=`
2. `===`
3. `==`

¿Qué palabra clave detiene el proceso de comparación en `switch`?

1. `break`
2. `stop`
3. `default`

Para comprender cuánto ha aprendido esta lección, realice una prueba en la [aplicación móvil](http://onelink.to/njhc95) de nuestra escuela sobre este tema o en nuestro [bot de Telegram](https://t.me/javascriptcamp_bot).

![JS Camp](/img/app.jpg)

## Enlaces:

1.  [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/switch)
2.  [Learn JavaScript](https://learn.javascript.ru/switch)
3.  [Referencia de JavaScript](https://javascript.ru/switch)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/FELiX-RN"><img src="https://avatars0.githubusercontent.com/u/72006627?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Philipp Dvinyaninov</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=FELiX-RN" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
