---
id: javascript04
title: Tipos de datos
sidebar_label: Tipos de datos
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/04.jpg)

## Dinámicamente típico

JavaScript es un lenguaje poco escrito o rico. Esto significa que no necesita definir el tipo de instalación 🔔 de antemano.

![Dinamics](https://media.giphy.com/media/26uf759LlDftqZNVm/giphy.gif)

El tipo se determinará automáticamente durante la ejecución del programa. También significa que puede usar una variable 🔔 para almacenar 📦 diferentes tipos de datos 👇:

```jsx live
function learnJavaScript() {
  let foo = 42 // ahora foo es de tipo número
  foo = 'bar' // y ahora foo es de tipo string
  return typeof foo
}
```

## Video

<YouTube videoId="1zXZCVbNbkQ" />

## typeof

Para comprender el tipo de datos contenidos en una variable, se utiliza el operador `typeof`. El operador `typeof` devuelve el tipo del argumento.
Tiene dos sintaxis: con y sin corchetes:

- Sintaxis del operador: `typeof x`

- Sintaxis de la función: `typeof(x)`

Funcionan igual, pero la primera sintaxis es más corta.

El resultado de `typeof` es una cadena que contiene el tipo.

```jsx live
function learnJavaScript() {
  let num = 9
  return typeof num
}
```

## Tipos de datos

![Data types](https://media.giphy.com/media/NPXkCN2FutVO1Nt4P9/giphy.gif)

El estándar JavaScript define 9 tipos de datos. Familiarícese con cada uno de ellos saliendo a la consola y luego le contaré 🗣️ sobre cada uno de ellos con más detalle.

```javascript
let one = { firstName: 'John', lastName: 'Smith' } // object

let two = () => {} // function

let three = 'bar' // string

let four = 42 // number

let five = 19241924124n // bigint

let six = true // boolean

let seven = null // null

let eight // undefined

let nine = Symbol() // symbol
```

## Objetos

![cupboard](https://media.giphy.com/media/l2Sq0NFJlJC5Dqb7y/giphy.gif)

En la terminología informática, el tipo de "objeto" es un valor en la memoria al que se puede hacer referencia mediante un identificador. En JavaScript, un objeto puede considerarse como un conjunto de propiedades. Es como un armario 🗄️ para almacenar 📦 otros tipos de datos.

## Funciones

![Function](https://media.giphy.com/media/FuSJ5C7SSHlZCxjC6q/giphy.gif)

Las funciones⚙️ `función` son objetos ordinarios que tienen la capacidad adicional de ser llamados para su ejecución.

## Valores primitivos

![Primitivo](https://media.giphy.com/media/rBdWc61BPFVYc/giphy.gif)

Todos los tipos de datos en JavaScript, excepto los objetos, son inmutables (los valores no se pueden modificar, solo se sobrescriben con un nuevo valor completo). Por ejemplo, a diferencia del lenguaje 👅 C, donde la cadena se puede ajustar carácter por carácter, en JavaScript las cadenas se recrean 🏗️ solo por completo. Los valores de este tipo se denominan "valores primitivos".

## Cadenas de texto

![texto](https://media.giphy.com/media/26n6AaCcCajAyZx04/giphy.gif)

JavaScript usa el tipo `string` para representar datos de texto 📜.

## Números

![Números](https://media.giphy.com/media/xT5LMMneIRG1UJquOI/giphy.gif)

El tipo de datos numérico `number` representa tanto valores enteros como de punto flotante.

## BigInt

![gigante](https://media.giphy.com/media/LZGipmRpX6uwE/giphy.gif)

En JavaScript, el tipo `number` no puede contener números mayores que (253-1) (es decir, 9007199254740991), o menores que -(253-1) para números negativos. Esta limitación técnica se debe a su representación interna.

Para la mayoría de los casos esto es suficiente. Pero a veces necesitamos números realmente gigantescos, por ejemplo, en criptografía o cuando usamos una marca de tiempo ("timestamp") con microsegundos.

El tipo `bigInt` se agregó a JavaScript para que sea posible trabajar con números enteros de longitud arbitraria.

## tipo de datos booleano

El tipo booleano `booleano` representa una entidad booleana y tiene dos valores 2️⃣: `true` ✅ (verdadero)

![true](https://media.giphy.com/media/ap6wcjRyi8HoA/giphy.gif)

y `false` ❎ (falso).

![False](https://media.giphy.com/media/HNOVuT5AvCK1fgvp1m/giphy.gif)

Este tipo se usa típicamente para almacenar valores de 📦 sí/no: verdadero ✅ significa "sí, correcto" y falso ❎ significa "no, incorrecto".

## Null

![Null](https://media.giphy.com/media/26hkhPJ5hmdD87HYA/giphy.gif)

Este tipo de datos tiene un solo valor: `null`. Es un valor etiquetado específicamente como primitivo, ya que en realidad se comporta como un primitivo visible. Pero al mismo tiempo, todos los demás Objetos se heredan de `null`, por lo que, a pesar de que `null` devuelve un valor primitivo, su tipo es un objeto.
Por ejemplo, puede asignarle un valor predeterminado.

## Undefined

![Unndefined](https://media.giphy.com/media/PkKzNQjwPy7GvxZbfe/giphy.gif)

Una variable 🔔 a la que no se le haya asignado un valor tendrá el valor `indefinido`.

### Diferencias entre null e undefined

![Spiderman](https://media.giphy.com/media/l36kU80xPf0ojG0Erg/giphy.gif)

`null` es el valor definido de la ausencia de un objeto, mientras que `undefined` significa indefinido. Por ejemplo, puede verificar esto en la consola del navegador:

```javascript
let TestVar
console.log(TestVar) // undefined
console.log(typeof TestVar) // undefined
```

`null` es el valor de asignación. Se puede asignar a una variable 🔔 como una representación sin valor:

```javascript
let TestVar = null
console.log(TestVar) // null
console.log(typeof TestVar) // object
```

De los ejemplos anteriores queda claro que `undefined` y `null` son dos 2️⃣ tipos diferentes: `undefined` es el tipo en sí mismo (undefined) y `null` es un objeto.

```javascript
null === undefined // false
null == undefined // true
null === null // true
```

## Tipo de datos Símbolo (Symbol)

![Symbol](https://media.giphy.com/media/QvSGhHq8CrVzq/giphy.gif)

El tipo de símbolo `Symbol` es un valor primitivo único e inmutable que se puede utilizar como clave para una propiedad de objeto. Este tipo se usa tan raramente en el trabajo real que ni siquiera lo consideraremos en el marco de este curso.

## ¿Problemas?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Escribe en [Discord](https://discord.gg/6GDAfXn) o Telegram [chat](https://t.me/jscampapp) y suscríbete a nuestras [noticias](https://t.me/javascriptapp)

![JavaScript Camp](/img/bandlink.png)

## Preguntas:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

¿Para qué se utiliza el operador `typeof`?

1. Para definir el tipo de datos
2. Para enviar el tipo de datos a la consola
3. Para ingresar una nueva variable

¿Cuántos tipos de datos define el estándar de JavaScript?

1. `7`
2. `9`
3. `5`

¿Qué tipo de datos contiene un conjunto de propiedades?

1. `function`
2. `string`
3. `object`

¿Es posible editar una cadena carácter por carácter en JavaScript?

1. Sí
2. Posiblemente en casos especiales
3. No, las líneas solo se recrean por completo

¿Qué tipo de datos hace posible trabajar con números enteros de longitud arbitraria?

1. `number`
2. `string`
3. `bigInt`

¿Qué valor no tiene el tipo booleano `boolean`?

1. `false`
2. `null`
3. `true`

¿Qué tipo de datos tiene un valor que se puede usar como clave para una propiedad de objeto?

1. `undefined`
2. `symbol`
3. `null`

¿Cuál es el tipo de datos de la variable `whatTypeAmI` después de ejecutar esta instrucción? \n `let whatTypeAmI = 5`

1. `integer`
2. `number`
3. `string`

¿Qué tipo de datos es posiblemente el tipo de datos más utilizado en JavaScript?

1. `integer`
2. `number`
3. `string`

¿Cuál es el nombre del tipo de datos primitivo, lo que significa que no se ha asignado ningún otro valor?

1. `undefined`
2. `symbol`
3. `null`

¿Cuál es el nombre de un tipo de datos primitivo que básicamente no significa nada (ni nulo, ni cadena vacía, ni indefinido, ni falso, etc.)?

1. `undefined`
2. `boolean`
3. `null`

¿Cuántos valores posibles para el tipo de datos nulo?

1. `1 возможное значение (null)`
2. `2 возможных значения (null, undefined)`

¿Cuál es el significado de `myMessage` después de esta línea? \n `let myMessage`

1. `undefined`
2. `SyntaxError`
3. `null`

Para comprender cuánto ha aprendido esta lección, realice una prueba en la [aplicación móvil](http://onelink.to/njhc95) de nuestra escuela sobre este tema o en nuestro [bot de Telegram](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

## Enlaces:

1. [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Data_structures)
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
