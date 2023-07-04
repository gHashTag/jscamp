---
id: javascript17
title: arreglos
sidebar_label: arreglos
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/18.jpg)

Para almacenar 📦 colecciones ordenadas, existe una estructura de datos especial llamada `Array`.

![Storage](https://media.giphy.com/media/3orif6FORJ98Z11xzq/giphy.gif)

`Array` - una colección ordenada de datos, que contiene los elementos 1, 2, 3, etc. Por ejemplo, lo necesitamos para almacenar una 📦 lista de algo: usuarios, productos, elementos del sitio, etc.

## Video

<YouTube videoId="4NS5yxWNulQ" />

## Creación

![create](https://media.giphy.com/media/3oEduXdm2gjnrsJBOo/giphy.gif)

Hay dos 2️⃣ opciones para crear una matriz vacía🏗️:

```javascript
let arr = new Array(5)
// new Array(5) - crea una matriz sin elementos (a la que no se puede acceder así), pero con una longitud dada.
let arr = []
```

Casi siempre se usa la segunda variante de la sintaxis 2️⃣📖. Entre paréntesis, podemos especificar los valores iniciales de los elementos:

```jsx live
function learnJavaScript() {
  let fruits = ['Manzana', 'Naranja', 'Ciruela']

  return fruits.toString()
}
```

Los elementos de la matriz se numeran a partir de cero 0️⃣.

Podemos obtener un elemento dando su número entre corchetes 👇:

```jsx live
function learnJavaScript() {
  let fruits = ['Manzana', 'Naranja', 'Ciruela']

  return fruits[0]
}
```

Podemos reemplazar el elemento 🖊️:

```javascript
fruits[2] = 'Pera' // ahora ["Manzana", "Naranja", "Pera"]
```

…O agregue un nuevo 🆕 a una matriz existente 👇:

```jsx live
function learnJavaScript() {
  let fruits = ['Manzana', 'Naranja', 'Ciruela']
  fruits[2] = 'Pera'
  fruits[3] = 'Limón' // ahora ["Manzana", "Naranja", "Pera", "Limón"]

  return fruits
}
```

## length

El número total de elementos de la matriz está contenido en su propiedad `.length`:

```jsx live
function learnJavaScript() {
  let fruits = ['Manzana', 'Naranja', 'Ciruela'']

  return fruits.length
}
```

La propiedad `longitud` se actualiza automáticamente cuando cambia la matriz. Para ser precisos, este no es el número de elementos de la matriz, sino el índice digital más grande más uno.

![Update](https://media.giphy.com/media/FP47IFqWyXfdKYU6VG/giphy.gif)

Por ejemplo, el único elemento real que tiene un índice grande le da la mayor longitud posible a la matriz 👇:

```jsx live
function learnJavaScript() {
  let fruits = []
  fruits[155] = 'Яблоко'

  return fruits.length // 156
}
```

Tenga en cuenta que normalmente no usamos matrices de esta manera.

Otro hecho interesante sobre la propiedad `length` es que se puede sobrescribir.

Si lo aumentamos manualmente ➕, no pasará nada interesante. Por otro lado, si lo reducimos➖, la matriz se hará más corta. Este proceso es irreversible, como podemos entender del ejemplo 👇:

```jsx live
function learnJavaScript() {
  let arr = [1, 2, 3, 4, 5]

  arr.length = 2 // acortar a dos elementos
   //consola.log(arr) // [1, 2]

  arr.length = 5 // devuelve la longitud tal como estaba
   //console.log( arr[3] ) // undefined: ¡no se recuperaron valores!
  
  return 'Matriz real acortada:' + arr
}
```

Entonces, la forma más fácil de borrar una matriz es `arr.length = 0`.

## Tipos de elementos

![Storage](https://media.giphy.com/media/2sYaePC3iVWYBNxaVj/giphy.gif)

Una matriz puede almacenar 📦 elementos de cualquier tipo: número, valor booleano, cadenas, objetos o funciones completas⚙️:

Por ejemplo 👇:

```jsx live
function learnJavaScript() {
  let arr = [
    'Manzana',
    { name: 'Nikita' },
    true,
    function () {
      return 'Hola'
    }
  ]
  // obtenga el elemento en el índice 1 {objeto} y luego lea su propiedad
  let x = arr[1].name // nombre nikita
  // obtener el elemento en el índice 3 (función) y ejecutarlo
  let result1 = arr[3] // La función en sí
  let result2 = arr[3]() // 'Hola'

  return 'Valor del 4to elemento con 3er índice: ' + result2
  // + '. La función en sí: ' + result1
}
```

Tenga en cuenta que `result1 = arr[3]` contiene el texto 📜 de la función⚙️, y `result2 = arr[3]()` es el resultado de la función ejecutada⚙️ - `()` lo ejecutamos.

## Métodos `push/pop`

![binarycode](https://media.giphy.com/media/fV0oSDsZ4UgdW/giphy.gif)

`Stack` es una variante del uso de matrices como estructuras de datos.

Admite dos 2️⃣ tipos de operaciones:

- `pop` elimina ➖ el último elemento.

![Eliminar](https://media.giphy.com/media/VD4Bt6FyYWcWj0LzDK/giphy.gif)

Por lo tanto, siempre se agregan o eliminan nuevos elementos del "final".

Un ejemplo de una pila suele ser una pirámide: los anillos nuevos se colocan en la parte superior y también se toman desde arriba.

`Queue` es uno de los usos más comunes para una matriz. En informática🖥️, este es el nombre de una colección ordenada de elementos

## Métodos para trabajar con el final de una matriz:

### push

![Add to](https://media.giphy.com/media/21ODeWspDCgZNAoCIp/giphy.gif)

Agrega ➕ un elemento al final de la matriz 👇:

```jsx live
function learnJavaScript() {
  let fruits = ['Manzana naranja']

  fruits.push(' Pera')

  return 'Formación: ' + fruits // manzana, naranja, pera
}
```

### pop

![Delete](https://media.giphy.com/media/26ybwwiZmci3DJdYs/giphy.gif)

Elimina ➖ el último elemento de una matriz y lo devuelve 👇:

```jsx live
function learnJavaScript() {
  let fruits = [' Manzana', 'Naranja', 'Pera']

  let delFruits = fruits.pop() // eliminar "Pear" y devolverlo a la variable delFruits
  
  return 'Elemento eliminado = ' + delFruits + '. Matriz restante: ' + fruits // Manzana naranja
}
```

## Métodos para trabajar con el comienzo de una matriz:

![start](https://media.giphy.com/media/QJvwBSGaoc4eI/giphy.gif)

### shift

Elimina el primer ➖ de la matriz y lo devuelve 🔄:

![delete](https://media.giphy.com/media/4Z1XJumqDgvI9b1VZJ/giphy.gif)

```jsx live
function learnJavaScript() {
  let fruits = ['Manzana ', 'Naranja', 'Pera']
  fruits.shift() // eliminar manzana

  return fruits
}
```

### unshift

Agrega un elemento ➕ al comienzo de la matriz:

![Plus](https://media.giphy.com/media/LgC9OQ53v5mFi/giphy.gif)

```jsx live
function learnJavaScript() {
  let fruits = ['Manzana ', 'Naranja', 'Pera']
  fruits.unshift('Albaricoque')

  return fruits
}
```

Los métodos `push` y `unshift` pueden agregar ➕ varios elementos a la vez 👇:

```jsx live
function learnJavaScript() {
  let fruits = ['Manzana']

  fruits.push('naranja', 'pera')
  fruits.unshift('Piña', 'Limón')

  return 'en matriz ' + fruits.length + ' elementos. ' + ' Formación: ' + fruits // ["Piña", "Limón", "Manzana", "Naranja", "Pera"]
}
```

## Arreglo interno

![cupboard](https://media.giphy.com/media/b90TnygrKqYqk/giphy.gif)

Una matriz es un subconjunto especial de objetos. Los corchetes que se usan para acceder a la propiedad `arr[0]` son básicamente la sintaxis normal📖 del acceso de clave, como `obj[key]`, donde tenemos `arr` como `obj` y como clave: un índice numérico .

Las matrices amplían los objetos, ya que proporcionan métodos especiales para trabajar con colecciones ordenadas de datos, así como una propiedad `length`, pero el objeto sigue estando en el centro.

Tenga en cuenta que en JavaScript una matriz es un objeto y, por lo tanto, se comporta como un objeto.

Por ejemplo, una matriz se copia por referencia 👇:

```jsx live
function learnJavaScript() {
  let fruits = [' Limón']

  let copy = fruits // copiado por referencia (dos variables se refieren a la misma matriz)

  copy.push(' Груша') // las matrices se cambian por referencia con un comando

  return '1 matriz: ' + fruits + ' 2 matriz: ' + copy // Limón, Pera - ahora dos elementos
}
```

Lo que realmente hace que las matrices sean especiales es su representación interna. El motor de JavaScript intenta almacenar los elementos de una matriz en un área de memoria contigua, uno tras otro. Hay otras optimizaciones que hacen que las matrices sean muy rápidas.

Pero todos ellos pierden su eficacia si dejamos de trabajar con una matriz como una "colección ordenada de datos" y comenzamos a utilizarla como un objeto normal.

Por ejemplo, técnicamente podemos hacer lo siguiente:

```javascript
let fruits = [] // crear una matriz vacía

fruits[99999] = 5 // cree una propiedad con un exceso de índice que sea mucho más grande que la longitud requerida de la matriz

fruits.age = 25 // crear una propiedad con un nombre arbitrario
```

Esto es posible porque una matriz se basa en un objeto. Podemos asignarle cualquier propiedad.

::: nota ¡Uso incorrecto de una matriz!

- Agregar una propiedad no numérica (prueba de índice), por ejemplo: arr.test = 5
- Crear "agujeros", por ejemplo: agregar arr[0] luego arr[1000] (nada en el medio)
- Llenar la matriz en orden inverso, por ejemplo: arr[1000], arr[999], etc.

:::

Una matriz debe considerarse una estructura especial que le permite trabajar con datos ordenados. Si necesita claves arbitrarias, un objeto simple {} podría ser mejor.

## Eficiencia

![Fast](https://media.giphy.com/media/3oriNYQX2lC6dfW2Ji/giphy.gif)

Los métodos `push/pop` son rápidos, mientras que los métodos `shift/unshift` son lentos.

¿Por qué es más rápido trabajar con el final de una matriz que con su comienzo? Veamos qué sucede en tiempo de ejecución:

```javascript
fruits.shift() // quitar el primer elemento del principio
```

No basta con tomar y eliminar el elemento con el número 0. También necesita volver a numerar el resto de los elementos.

La operación `shift` debe hacer 3 cosas:

- Eliminar elemento en el índice 0

![Delete](https://media.giphy.com/media/VIzs0jgs8KmgVeTknN/giphy.gif)

- Desplace todos los elementos a la izquierda, vuelva a numerarlos, reemplazando `1` con `0`, `2` con `1`, etc.

![Move](https://media.giphy.com/media/jSQcEjcwG53WooptHz/giphy.gif)

- Actualizar la propiedad `length`

Cuantos más elementos contenga la matriz, más tiempo llevará moverlos, más operaciones de memoria.

¿Qué pasa con la eliminación de `pop`? No necesita mover nada. Para eliminar un elemento al final de una matriz, el método `pop` borra el índice y disminuye el valor de `length`. Los elementos restantes permanecen en los mismos índices.

```javascript
fruits.pop() // eliminar un elemento del final
```

El método `pop` no requiere un movimiento. Por eso corre muy rápido.

El método `push` funciona de manera similar.

## Iterar sobre elementos

![Object](https://media.giphy.com/media/26gs9kSN6d5PxSsQU/giphy.gif)

Una de las formas más antiguas de iterar sobre los elementos de una matriz es el bucle `for()` sobre índices numéricos 👇:

```jsx live
// prettier-ignore
function learnJavaScript() {
  let result = ''
  let arr = ['Manzana', 'Naranja', 'Kiwi']
  
  for (let i = 0; i < arr.length; i++) // itera sobre los elementos con for()
  result += arr[i] + ' '

  return result // manzana, naranja, kiwi
}
```

Pero para matrices, también es posible otra versión del ciclo, `for..of` 👇 :

```jsx live
function learnJavaScript() {
  let result = ''
  let fruits = ['Manzana', 'Naranja', 'Ciruela']

  for (let fruit of fruits) {
    // itera sobre los valores a través de `for..of`
    result += fruit + ' '
  }
  return result // manzana, naranja, ciruela
}
```

El bucle `for..of` no proporciona acceso al número del elemento actual, solo a su valor, pero en la mayoría de los casos esto es más que suficiente, y también es más corto.

<!-- ## Псевдомассивы

![Spiderman](https://media.giphy.com/media/l36kU80xPf0ojG0Erg/giphy.gif)

В браузере и других программных средах также существуют так называемые "псевдомассивы" – объекты, которые выглядят, как массив. То есть, у них есть свойство `length` и индексы, но они также могут иметь дополнительные нечисловые свойства и методы, которые нам обычно не нужны. Тем не менее, цикл `for..in` выведет и их. Поэтому, если нам приходится иметь дело с объектами, похожими на массив, такие "лишние" свойства могут стать проблемой.

Технически, так как массив является объектом, можно использовать и вариант `for..in` для правильного массива 👇 :

```jsx live
function learnJavaScript() {
  let result = ''
  let arr = ['Яблоко', 'Апельсин', 'Груша', 'Лимон']

  for (let key in arr) {
    // проходит по элементам через `for..in`
    result += arr[key] + ' '
  }
  return result // Яблоко, Апельсин, Груша, Лимон
}
```

Цикл `for..in` оптимизирован под произвольные объекты, не массивы, и поэтому в 10-100 раз медленнее. Увеличение ➕ скорости выполнения может стать проблемой.

В целом, не следует использовать цикл `for..in` для массивов. Так же существуют скрытые недостатки этого способа:

- цикл `for..in` выполняет перебор всех свойств объекта, а не только цифровых. -->

## Matrices multidimensionales

![Matryoschka](https://media.giphy.com/media/XuPaGVKyJ6eyI/giphy.gif)

Los arreglos pueden contener elementos que también son arreglos. Esto se puede usar para crear 🏗️ matrices multidimensionales, por ejemplo, para almacenar 📦 matrices:

```jsx live
function learnJavaScript() {
  let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]

  return matrix[1][1] // 5, elemento central
}
```

## Total

![remember](https://media.giphy.com/media/l4pTfqyI6TCjUW4Yo/giphy.gif)

Una matriz es un tipo especial de objeto diseñado para trabajar con un conjunto ordenado de elementos.

Anuncio🗣️:

```javascript
// corchetes (normalmente)
let arr = [item1, item2...]

// nueva matriz (muy rara)
let arr = new Array(item1, item2...)
```

Llamar a `nueva matriz (número)` crea🏗️ una matriz con la longitud dada pero sin elementos.

La propiedad `longitud` refleja la longitud de la matriz.

Podemos usar una matriz como un deque usando las siguientes operaciones:

- `push(...items)` agrega ➕ elementos al final de la matriz.
- `pop()` elimina el elemento ➖ al final de la matriz y lo devuelve.
- `shift()` elimina ➖ el elemento al principio de la matriz y lo devuelve.
- `unshift(...items)` agrega ➕ elementos al comienzo de la matriz.

Para iterar sobre los elementos de una matriz:

- `for (let i=0 i<arr.length i++)` - funciona más rápido, compatible con navegadores más antiguos.
- `for (let item of arr)` - sintaxis moderna📖 solo para valores de elementos (sin acceso a índices).
- `for (let i in arr)` - ¡nunca lo use para arreglos!

## React Native

React Native proporciona un conjunto de componentes para representar listas de datos. Por lo general, debe usar `FlatList` o `SectionList`. Los conoceremos con más detalle más adelante, lo principal ahora es entender que toman una matriz como entrada, que se representa en la pantalla.

```SnackPlayer name=index.js
import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'


const arr = [
  {key: 'Devin'},
  {key: 'Dan'},
  {key: 'Dominic'},
  {key: 'Jackson'},
  {key: 'James'},
  {key: 'Joel'},
  {key: 'John'},
  {key: 'Jillian'},
  {key: 'Jimmy'},
  {key: 'Julie'}
]

const FlatListBasics = () => {
  return (
    <FlatList
       data={arr}
       renderItem={({item}) => <Text>{item.key}</Text>}
    />
  )
}

export default FlatListBasics
```


## ¿Problemas?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Escribe en [Discord](https://discord.gg/6GDAfXn) o Telegram [chat](https://t.me/jscampapp) y suscríbete a nuestras [noticias](https://t.me/javascriptapp)

![JavaScript Camp](/img/bandlink.png)

## Preguntas

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

La matriz es...

1. Subtipo de objetos con una "colección ordenada de datos"
2. Función interna
3. Subtipo de objetos con "recopilación desordenada de datos"

Se crea una matriz vacía:

1. `let arr2 = { }`
2. `let arr1 = [ ]`
3. `let arr3 = ( )`

La longitud de una matriz se puede determinar mediante una propiedad:

1. `pop`
2. `push`
3. `length`

Una matriz puede almacenar elementos:

1. Cualquier tipo
2. numérico
3. Cuerda

Agregar un elemento al final de una matriz:

1. `push`
2. `pop`
3. `shift`

Eliminando un elemento al comienzo de una matriz:

1. `pop`
2. `shift`
3. `unshift`'

\_\_\_\_ en una matriz es un número que representa la posición de cualquier elemento dado en la matriz.

1. índice
2. longitud
3. función

¿Qué valor debe colocarse entre corchetes para obtener el primer elemento de la matriz? \n `miArray[]`

1. `0`
2. `1`
3. `2`

Usar el método `.pop()` en una matriz será \_\_\_ y \_\_\_ el último elemento de la matriz.

1. "eliminar / devolver"
2. "devolver/borrar"

Para comprender cuánto ha aprendido esta lección, realice una prueba en la [aplicación móvil](http://onelink.to/njhc95) de nuestra escuela sobre este tema o en nuestro [bot de Telegram](https://t.me/javascriptcamp_bot).

![Campamento JS](/img/app.jpg)

## Enlaces

1. [Artículo "Matrices"](https://learn.javascript.ru/array)
2. [Documento web de MDN. Artículo "Matrices"](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array)
3. [Artículo "Arreglos de JavaScript"](https://basicweb.ru/javascript/js_array.php)
4. [Código para adolescentes: la gran guía de programación para principiantes Volumen 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/KoDim-React"><img src="https://avatars1.githubusercontent.com/u/72087863?v=4?s=200" width="200px " alt=""/><br /><sub><b>Dmitriy K.</b></sub></a><br /><a href="#mentoring-KoDim-React" title="Mentoring">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px " alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

<!--
### toString
Массивы по-своему реализуют метод toString, который возвращает список элементов, разделённых запятыми.

Например:
```javascript
let arr = [1, 2, 3]

console.log( arr )  // 1,2,3
console.log( String(arr) === '1,2,3' )  // true
```

Давайте теперь попробуем следующее:
```javascript
console.log( [] + 1 )  // "1"
console.log( [1] + 1 )  // "11"
console.log( [1,2] + 1 )  // "1,21"
```

Массивы не имеют ни Symbol.toPrimitive, ни функционирующего valueOf, они реализуют только преобразование toString, таким образом, здесь [] становится пустой строкой, [1] становится "1", а [1,2] становится "1,2".

Когда бинарный оператор плюс "+" добавляет что-либо к строке, он тоже преобразует это в строку, таким образом:
```javascript
console.log( "" + 1 )  // "1"
console.log( "1" + 1 )  // "11"
console.log( "1,2" + 1 )  // "1,21"
```
-->
