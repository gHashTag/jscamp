---
id: javascript06
title: Líneas
sidebar_label: Líneas
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/06.jpg)

En JavaScript, cualquier dato de texto  es una cadena. Sin embargo, no olvide que los números también se pueden escribir en una cadena. De todos los tipos de datos, probablemente usará más cadenas. Analicemos todas las opciones para crear una nueva línea.

## Video

<YouTube videoId="ocQTm9K2vdo"/>

## Comillas simples o dobles

![quotation marks](https://media.giphy.com/media/7cSTvZ4hI6ABZkcTwk/giphy.gif)

Para crear una cadena , se utilizan comillas "simples" o "dobles".

```jsx
let single = 'Hello World'
let double = "Hello World" // prettier-ignore
```

Puedes usar ambos, lo más importante, si comienzas una sola línea, aunque puede haber dobles dentro, también debe completarse con una sola. Y, en consecuencia, con comillas dobles.

```jsx
let double = "Don't you think so, d'Artagnan?"
let single = '"I think so, indeed!" - cried he.'
```

## barra invertida

![shielding](https://media.giphy.com/media/3og0IPizf4zPR6VMt2/giphy.gif)

Si se usan las mismas comillas dentro de la cadena que afuera, entonces deben escaparse con una barra invertida, el llamado "carácter de escape". Se añade ➕ antes de las comillas `\'` en la cadena para que no indique el final de la línea.

```jsx live
// prettier-ignore
function learnJavaScript() {
  let backticks = 'It\'s not complicated'
  return backticks
}
```

Tenga en cuenta que la barra invertida `\` solo sirve para que el intérprete lea correctamente la cadena, pero no escribe  en la cadena después de haberla leído. Cuando una cadena se guarda en la RAM, no se le agrega ningún carácter `\`. Esto se puede ver claramente en la salida.

## comillas back

![Dollar](https://media.giphy.com/media/26BoCwvDEWXnGlLyM/giphy.gif)

Al escribir una cadena, también puede prescindir de una barra invertida si usa comillas \`back\`.

Las comillas simples y dobles funcionan esencialmente de la misma manera, y si usa comillas inversas, podemos insertar expresiones JavaScript arbitrarias en dicha cadena envolviéndolas en un carácter de dólar con llaves `${…}` :

```jsx live
function learnJavaScript() {
  let name = 'Marcos'
  return `Hola, ${name}!`
}
```

La interpolación de cadenas es una forma conveniente de sustituir valores de variables en cadenas. La cadena de plantilla es lo mismo que la interpolación. La cadena de plantilla en ES6 reemplazó a la cadena normal. La interpolación solo funciona con acentos graves. Veamos en la práctica qué reglas existen al usar interpolaciones.

Otra ventaja de los acentos graves es que pueden abarcar más de una línea.

```jsx live
function learnJavaScript() {
  let guestList = `Guests:
    * John
    * Pete
    * Mary
   `
  return guestList
}
```

También se pueden crear cadenas de varias líneas usando comillas simples y dobles, usando el llamado "carácter de nueva línea", que se escribe como `\n`. Todos los caracteres especiales en JavaScript comienzan con una barra invertida `\` Cierto, podemos verificar esto en la consola del navegador (`LIVE EDITOR` no se muestra correctamente).

```jsx
let guestList = 'Guests:\n * John\n * Pete\n * Mary'

guestList // lista de invitados de varias líneas
```

![console](/img/javascript/12.png)

## Las cadenas son inmutables

![Tree](https://media.giphy.com/media/YxlUxrYGw2w9y/giphy.gif)

El contenido de una cadena en JavaScript no se puede cambiar. No puede tomar el símbolo en el medio y reemplazarlo. Tan pronto como se crea la línea, es así para siempre.
Puede crear una nueva cadena y escribirla en la misma variable en lugar de la anterior.

```jsx live
function learnJavaScript() {
  let str = 'Hi'
  str = 'P' + str[1] // reemplazar cadena
  return str
}
```

## Métodos de cadenas populares

### Longitud de la línea

![Length](https://media.giphy.com/media/Y1GK5MEiRa3OSVsxHK/giphy.gif)

La propiedad `longitud` devuelve  el número de valores de código  en la cadena.

```jsx live
function learnJavaScript() {
  let str = 'My\n'.length
  return str
}
```

Tenga en cuenta que `\n` es un carácter especial, por lo que todo es correcto aquí: la longitud de la cadena es 3.

### Acceso de personajes

![Door](https://media.giphy.com/media/xUA7aLpVxPVEoEPXji/giphy.gif)

Hay dos 2️⃣ formas de llegar a un carácter específico en una cadena. El primer método usa el método `charAt()`. El primer carácter 1️⃣ ocupa la posición cero:

```jsx live
function learnJavaScript() {
  let str = 'cat'.charAt(2)
  return str
}
```

También puede obtener un carácter usando corchetes:

```jsx live
function learnJavaScript() {
  let str = 'cat'[2]
  return str
}
```

Los corchetes son la forma moderna de obtener un carácter, mientras que `charAt` existe principalmente por razones históricas.

### Cambiando el caso de los caracteres

![Capital letter](https://media.giphy.com/media/3orifcBbnezczHmU8g/giphy.gif)

Para convertir las letras de una cadena a mayúsculas, utilice el método `toUpperCase()`.

```jsx live
function learnJavaScript() {
  let str = 'Interface'.toUpperCase()
  return str
}
```

a minúsculas `toLowerCase()`

```jsx live
function learnJavaScript() {
  let str = 'Interface'.toLowerCase()
  return str
}
```

### Concatenación de cadenas

![Chain](https://media.giphy.com/media/l3q2EOu4nu1D8uJKU/giphy.gif)

Para construir una cadena a partir de cadenas existentes, use el signo más `+` para concatenar cadenas.

```jsx
let name = 'Mary '
let activity = 'drink tea'
let bio = 'Our guest ' + name + activity + '.'
bio // Our guest Mary drink tea.
```

<!-- Теперь попробуйте построить строку сами.

```jsx live
function learnJavaScript() {
  let name = 'John'
  let age = '15'
  let country = 'USA'
  let enjoyment = 'trevel'
  let slogan = '"Don\'t worry, be happy!"'
  let bio =
    'My name is ' +
    name +
    '. I am ' +
    age +
    " years old. I'm from " +
    country +
    '. I like ' +
    enjoyment +
    ', and my slogan for life: ' +
    slogan +
    '.'
  bio
  return bio
}
```

И `+=` для присвоения с объединением.

```jsx live
function learnJavaScript() {
  let str = '123'
  str += 456
  return str
}
``` -->

Así que nos familiarizamos con el tipo de datos más popular en JavaScript y los métodos más utilizados para ello.

## Reaсt Native

Veamos un ejemplo práctico de cómo podemos usar cadenas al crear una aplicación móvil. Aquí creamos una constante `str` y le asignamos el valor `Hello world`. Permítame recordarle que para insertar expresiones de JavaScript en la sintaxis JSX, debe usar llaves.

```SnackPlayer name=index.js
import * as React from 'react'
import { Text } from 'react-native'

const App = () => {
  const str = 'Hello world'
  return (
    <Text>{str}</Text>
)}


export default App
```

## ¿Problemas?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Escribe en [Discord](https://discord.gg/6GDAfXn) o Telegram [chat](https://t.me/jscampapp) y suscríbete a nuestras [noticias](https://t.me/javascriptapp)

![JavaScript Camp](/img/bandlink.png)

## Preguntas:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

¿Cómo JavaScript no escribe cadenas \_\_\_?

1. entre comillas simples
2. en barras invertidas
3. entre comillas posteriores

¿Por qué no se usa una barra invertida en una cadena?

1. Para blindaje
2. Para escribir caracteres especiales
3. Para terminar una línea

Seleccione "carácter de nueva línea"

1. `\n`
2. `\`
3. `\*`

¿Qué letra devolverá `'sport'[3]`?

1. `o`
2. `r`
3. No devolverá nada

¿Cómo cambiar un carácter en una cadena de JavaScript?

1. Cambiar línea
2. Ve al símbolo y reemplázalo
3. Cree una nueva cadena y escríbala en la misma variable en lugar de la anterior

¿Qué método se utiliza para escribir en mayúsculas?

1. `toUpperCase()`
2. `toLowerCase()`
3. `toLowercase()`

¿Qué carácter se usa para concatenar cadenas?

1. `=`
2. `+`
3. `+=`

Cada vez que tenga una apertura \_\_\_\_, siempre necesita tener un cierre \_\_\_\_.

1. punto
2. cita
3. cambiando

Una línea consta de uno o más \_\_\_ separados.

1. personajes
2. argumentos
3. Opciones

Para comprender cuánto ha aprendido esta lección, realice una prueba en la [aplicación móvil](http://onelink.to/njhc95) de nuestra escuela sobre este tema o en nuestro [bot de Telegram](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/englishmoji.png)](https://link-to.app/xvh7Ush9kl)

## Enlaces:

1. [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Data_structures)
2. [Código para adolescentes: la gran guía de programación para principiantes Volumen 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)
3. [JavaScript.ru](https://learn.javascript.ru/types)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/Alena-Maitri"><img src="https://avatars1.githubusercontent.com/u/72432063?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Alena Yanbukhtina</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=Alena-Maitri" title="Documentation">  </a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![EnglishMoji!](/img/logo/englishmoji.png)](https://link-to.app/xvh7Ush9kl)
