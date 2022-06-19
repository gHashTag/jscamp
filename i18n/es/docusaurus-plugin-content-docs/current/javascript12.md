---
id: javascript12
title: Ámbito de bloque
sidebar_label: Ámbito de bloque
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/12.jpg)

Alcance (alcance en inglés): una parte del programa dentro de la cual la variable está disponible para su uso. <!--Para una variable, el alcance será la parte del programa en la que es "visible" y puede ser utilizada por el programador.--> Al crear🏗️ el archivo `.js`, creamos🏗️ el alcance de todo el archivo, para crear🏗️ alcance interno, debe declararlo🗣️ usando corchetes `{ ... }`.

![file](https://media.giphy.com/media/3o6Ztk7NosfLVRqcpy/giphy.gif)

```jsx
// primer alcance
let fruit = 'Banana'
{
  // Segundo alcance
  let fruit = 'Apple'
  {
    // Tercer alcance
    let fruit = 'Lime'
  }
}
```

En este ejemplo, creamos 🏗️ tres variables en diferentes ámbitos, que contienen su propia versión de la variable `fruta`, por lo que no se producen errores 🙅‍♂️, pero si intenta crear 🏗️ dos variables con el mismo nombre en el mismo ámbito , entonces ocurrirá un error 🙅.

```jsx
// primer alcance
let fruit = 'Banana'
{
  // Segundo alcance
  let fruit = 'Apple'
  let fruit = 'Lime' // Aquí se producirá un error.
}
```

Cuando crea 🏗️ varias construcciones, también crea 🏗️ el alcance de esta construcción, porque usa un bloque de corchetes `{ ... }`.

```jsx
if (true) {
  // Alcance de una declaración condicional
}

for (let i = 0; i > 5; i++) {
  // Alcance de bucle
}

function test() {
  // Alcance de la función
}
```

En estos ejemplos, cada construcción tiene su propio alcance.

## Video

<YouTube videoId="p-wmzCW_2C8" />

## Alcance global

![Global](https://media.giphy.com/media/l0MYPsBLOYyFqSDte/giphy.gif)

Cuando decimos alcance global, queremos decir que todos los demás alcances son hijos de este. El alcance global contiene variables declaradas🗣️ fuera de todas las funciones⚙️ y bloques.

```jsx
// Alcance global
let fruit = 'Banana'
```

Una variable 🔔 creada en el ámbito global se denomina `variable global` 🔔. La variable global 🔔 se puede utilizar en todos los ámbitos secundarios.

```jsx live
function learnJavaScript() {
  // La variable fruts es global.
  let fruit = 'Banana'
  function showFruit() {
    // Entonces podemos usarlo dentro de una función.
    return fruit
  }
  return showFruit()
}
```

## Ámbito local

![Local](https://media.giphy.com/media/VFwRCi6WKBUk08fliV/giphy.gif)

El alcance local contiene variables declaradas🗣️ en una determinada parte del código📟. Por ejemplo, las variables creadas 🏗️ dentro del bucle serán locales.

```jsx
for (let i = 0; i > 5; i++) {
  // La variable i es local
}
```

Las variables locales 🔔 solo pueden usarse dentro del bloque en el que fueron declaradas.

```jsx
function learnJavaScript() {
  function showFruit() {
    // La variable fruit es local.
    let fruit = 'Banana'
  }
  // Por lo tanto, no podemos usarlo fuera de una función.
  return fruit
}

// ReferenceError: fruit is not defined
```

## Ejemplos

![Math](https://media.giphy.com/media/xT1Ra5h24Eliux3UVq/giphy.gif)

Usamos dos variables 🔔 con el mismo nombre en diferentes ámbitos. La función `otherFruit()` devuelve la variable 🔔 `fruts` desde el ámbito en el que se inicializa como `Lime`

```jsx live
function learnJavaScript() {
  let fruit = 'Banana'
  function otherFruit() {
    let fruit = 'Lime'
    return fruit
  }
  return otherFruit() + ' and ' + fruit
}
```

Si eliminamos `let` de la función `otherFruit()`, en lugar de crear una variable 🔔 la sobrescribimos 🖊️.

```jsx live
function learnJavaScript() {
  let fruit = 'Banana'
  function otherFruit() {
    fruit = 'Lime'
    return fruit
  }
  return otherFruit() + ' and ' + fruit
}
```

¿Qué sucede si tratamos de llamar a una variable local 🔔 en el ámbito principal? Ocurre un error porque estamos tratando de llamar a una variable 🔔 en el alcance global, que no creamos.

```javascript
function learnJavaScript() {
  let num
  for (let i = 0; i != 5; i++) {
    num += i
  }
  return i
}

//ReferenceError: i is not defined
```

![Primer](https://media.giphy.com/media/M33UV4NDvkTHa/giphy.gif)

## Prohibición de var

![eye](https://media.giphy.com/media/PKl9JTqnoiKtO/giphy.gif)

En el artículo [Variable](https://jscamp.app/docs/javascript03) le dijimos que no usaremos `var`, está conectado solo con el alcance.

1. Si crea dos variables 🔔 con el mismo nombre en el mismo ámbito utilizando la palabra clave `let` o `const`, el intérprete nos advierte sobre esto mostrando un error.

```jsx
function learnJavaScript() {
  let fruit = 'Banana'
  let fruit = 'Lime'
  return fruit
  // SyntaxError: Identifier 'fruit' has already been declared
}
```

Pero, si usando `var` creas variables 🔔 con el mismo nombre, entonces las reasignará.

```jsx live
function learnJavaScript() {
  var fruit = 'Banana'
  var fruit = 'Lime'
  return fruit
}
```

El error 🙅‍♂️ no ocurre porque `var` sobrescribió la variable `fruit`

2. Habiendo creado una variable global 🔔 usando `var`, podemos cambiarla desde el alcance local creando otra variable 🔔 con el mismo nombre usando `var`. El alcance de `var` está limitado a una función o un script.

```jsx live
function learnJavaScript() {
  var fruit = 'Lime'
  {
    var fruit = 'Banana'
  }
  return fruit
}
```

3. Las variables 🔔 creadas con `var` se consideran declaradas desde el comienzo de la ejecución del script, independientemente de dónde se encuentre la declaración.

```jsx live
function learnJavaScript() {
  fruit = 'Banana'
  var fruit
  return fruit
}
```

4. Antes de ES6, JavaScript no tenía alcances de bloque. Aquellos. cualquier variable creada con la palabra clave `var` dentro del bloque también será visible fuera del bloque.

```javascript
if (true) {
  var fruit = 'Apple' // la variable será visible fuera de este bloque
}
console.log(fruit) // "Apple"
```

![javascript](/img/javascript/28.jpg)

```javascript
if (true) {
  let fruit = 'Apple' // la variable no será visible fuera de este bloque
}
console.log(fruit) // "Apple"
```

![javascript](/img/javascript/29.jpg)

Debido a las razones anteriores, los desarrolladores han abandonado el uso de `var`

## ¿Problemas?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Escribe en [Discord](https://discord.gg/6GDAfXn) o Telegram [chat](https://t.me/jscampapp) y suscríbete a nuestras [noticias](https://t.me/javascriptapp)

![JavaScript Camp](/img/bandlink.png)

## Preguntas

![Pregunta](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

¿Cuándo creamos el primer alcance?

1. Al crear un bucle
2. Al crear un archivo
3. Al crear un bloque

Al crear una declaración condicional, ¿se crea un nuevo alcance?

1. `true`
2. `false`

¿Dónde se crea la variable local?

1. Dentro del bloque en el que se declara
2. Fuera de todos los bloques

Para comprender cuánto ha aprendido en esta lección, realice la prueba en [aplicación móvil](http://onelink.to/njhc95) en nuestra escuela sobre este tema.

![JS Camp](/img/app.jpg)

## Enlaces

1. [JavaScript Scope](https://css-tricks.com/javascript-scope-closures/)
2. [Learn JavaScript](https://learn.javascript.ru/closure)
3. [MDN Web Docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)

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
