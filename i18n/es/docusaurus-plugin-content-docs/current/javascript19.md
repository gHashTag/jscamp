---
id: javascript19
title: Métodos de iteración de matriz (map, filter, reduce)
sidebar_label: Métodos de iteración de matriz (map, filter, reduce)
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/22.jpg)

El lenguaje JavaScript tiene una clara preferencia por las matrices sobre otras estructuras de datos. Tienen muchas características específicas convenientes, por ejemplo, un conjunto completo de métodos de iteración: `map`, `filter`, `reduce`.

## map

![Create](https://media.giphy.com/media/ffd0F6WNcRJMQ/giphy.gif)

El método `map()` crea una nueva   matriz con el resultado de llamar a la función especificada⚙️ para cada elemento de la matriz.

## Video

<YouTube videoId="lEBJ5bqRrg8" />

### Sintaxis

![Book](https://media.giphy.com/media/s6OiiampNcye4/giphy.gif)

```javascript
let new_array = arr.map(function callback( currentValue[, index[, array]]) {
    // Devuelve el elemento para new_array
}[, thisArg])
```
El método `map` llama a la función `callback` pasada ⚙️ una vez para cada elemento, en el orden en que aparecen, y construye    una nueva matriz a partir de los resultados de su llamada. La función ⚙️ `callback` solo se llama para índices de matriz que tienen valores asignados, incluido `undefined`. No se llama para elementos de matriz faltantes (es decir, índices que nunca se establecieron, eliminaron o nunca se les asignó un valor).

La función ⚙️ `callback` se llama con tres argumentos:

- valor del elemento,
- índice de elementos
- y la matriz a través de la cual se realiza el paso.

Si el parámetro `thisArg` se pasó al método `map`, se usará como el valor de `this` al llamar a `callback`. De lo contrario, `undefined` se usará como el valor de `this`. En última instancia, el valor de `this` visto desde la función `callback`⚙️ se determina de acuerdo con las reglas habituales para definir `this` visto desde la función⚙️.

El método `map` no cambia la matriz a la que se llamó (¡aunque la función ⚙️ puede hacerlo!).

El rango de elementos procesados ​​por el método `map` se establece antes de la primera llamada a la función ⚙️ `devolución de llamada`. Los elementos agregados a la matriz después de que el método `map` haya comenzado a ejecutarse no serán visitados por la función ⚙️ `callback`. Si los elementos de matriz existentes son modificados por la función ⚙️ `callback`, sus valores pasados ​​a la función⚙️ serán los valores en el momento en que el método `map` los visite. Los elementos eliminados no serán visitados.

### Ejemplos:

![Math](https://media.giphy.com/media/xT1Ra5h24Eliux3UVq/giphy.gif)

#### ejemplo sencillo

Tienes una matriz con muchos objetos, cada uno representando a una persona diferente. Puede haber una gran cantidad de datos aquí: nombre, edad, color de cabello y personaje de película favorito, pero por el momento todo esto no es obligatorio; solo desea obtener una serie de números de pasaporte de estas personas para darles una conferencia. pasa

```jsx live
function learnJavaScript() {
  const friends = [
    { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
    { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
    { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
    { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
    { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
    { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' }
  ]
  let passports = friends.map(friend => friend.passport + ' ')
  return passports
}
```

#### En ciertos casos, es posible que deba mostrar una matriz de objetos con teclas seleccionadas como una cadena :

```jsx live
function learnJavaScript() {
  const users = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
  ]

  let result = users.map(({ id, age, group }) => `\n${id} ${age} ${group}`).join('')

  return result
}
```

#### Crear una matriz de valores Fahrenheit a partir de una matriz de valores Celsius:

![Thermometer](https://media.giphy.com/media/W23dJLsAW5knUU27Fv/giphy.gif)

Un ejemplo con el procesamiento de cada elemento de la matriz con una fórmula dada :

```jsx live
function learnJavaScript() {
  let celsius = [-15, -5, 0, 10, 16, 20, 24, 32]

  let fahrenheit = celsius.map(t => t * 1.8 + 32 + ' ')

  return fahrenheit
}
```

<!-- ### Отображение массива чисел на массив квадратных корней

Отображение таблицы пользователей в виде читаемой строки только с указанными ключами
Следующий код берёт массив чисел и создаёт    новый массив, содержащий квадратные корни чисел из первого массива.

```jsx live
function learnJavaScript() {
  var numbers = [1, 4, 9]
  var roots = numbers.map(Math.sqrt) + ' '
  return roots
}
``` -->

#### Mostrando una matriz de números usando una función que contiene un argumento :

```jsx live
function learnJavaScript() {
  const numbers = [1, 4, 9]

  const doubles = numbers.map(num => num * 2 + ' ')

  return doubles
}
```

<!-- ![Wow](https://media.giphy.com/media/1ym5LJ17vp77BL8X5O/giphy.gif)

#### Обобщённое использование `map`

Этот пример показывает, как использовать `map` на объекте строки `String` для получения массива байт в кодировке `ASCII`, представляющего значения символов  :

```jsx live
function learnJavaScript() {
  var map = Array.prototype.map
  var a =
    map.call('Hello World', function (x) {
      return x.charCodeAt(0)
    }) + ' '
  return a
}
```

#### Использование `map` для переворачивания строки

```jsx live
function learnJavaScript() {
  var str = '12345'
  result = [].map
    .call(str, function (x) {
      return x
    })
    .reverse()
    .join('')
  return result
}
``` -->

## filter

![filter](https://media.giphy.com/media/xT5LMGupUKCHb7DnFu/giphy.gif)

El método `filter()` crea    una nueva matriz con todos los elementos que pasan la prueba especificada en la función pasada⚙️.

El resultado de `filter` es siempre una matriz. Si la función ⚙️ para un elemento devuelve  `true`  (o cualquier valor "verdadero"), ese elemento se incluye en el resultado; de lo contrario, no.

### Sintaxis

![write](https://media.giphy.com/media/6Do13TV1OfOF2/giphy.gif)

```javascript
let newArray = arr.filter(function callback(element[, index, [array]])[, thisArg])
```

### Descripción

![m](https://media.giphy.com/media/DQaeCdCqhHWx3n4dvH/giphy.gif)

El método `filter()` llama a la función pasada⚙️ `callback` una vez por cada elemento presente en la matriz y construye una nueva matriz con todos los valores para los que la⚙️ función `callback` devolvió `true`  o un valor que se convierte en `true`  cuando se convierte en `boolean`. La función ⚙️ `callback` se llama solo para índices de matriz que tienen valores asignados; no se llama para índices que se han descartado o nunca se les ha asignado un valor. Los elementos de la matriz que fallan en la función ⚙️ `callback` simplemente se omiten y no se incluyen en la    nueva matriz.

La función ⚙️ `callback` se llama con tres argumentos:

- valor del elemento;
- índice de elementos;
- la matriz a través de la cual se realiza el paso.

Si se pasó un parámetro `thisArg` al método `filter()`, se usará como el valor de `this` al llamar a la función⚙️. De lo contrario, `undefined` se usará como el valor de `this`. En última instancia, el valor de `this` visto desde una función⚙️ se determina de acuerdo con las reglas habituales para definir `this` visto desde una función⚙️.

El método `filter()` no cambia la matriz a la que fue llamado.

El rango de elementos procesados ​​por el método `filter()` se establece antes de la primera llamada a la función ⚙️ `callback`. Los elementos agregados a la matriz después de que el método `filter()` haya comenzado a ejecutarse no serán visitados por la función ⚙️ `callback`. Si los elementos existentes de la matriz cambian, los valores pasados ​​a la función ⚙️ `callback` serán los valores en el momento en que el método `filter()` los visite. Los elementos eliminados no serán visitados.

### Ejemplo

![math](https://media.giphy.com/media/3orieN7HEHI0tw8x5C/giphy.gif)

#### Filtrado de todos los valores pequeños

El siguiente ejemplo usa `filter()` para crear una matriz filtrada  con todos los elementos mayores o iguales a `value` y todos los menores que `value` eliminados.

```jsx live
function learnJavaScript() {
  const isBigEnough = value => value >= 10

  let filtered = [12, 5, 8, 130, 44].filter(isBigEnough) + ' '

  return filtered
}
```

![Wow](https://media.giphy.com/media/M33UV4NDvkTHa/giphy.gif)

## reduce

![count](https://media.giphy.com/media/xUPGcqaVH1cDeKZTBS/giphy.gif)

El método `reduce` también se ejecuta en el contexto de una matriz y llama a la función ⚙️ para cada elemento, pero además, acumula los resultados de todas las llamadas en un solo valor. Este comportamiento se puede controlar.

`reduce` no pretende cambiar los elementos de una colección como lo hace `map`. Su tarea es calcular la "suma" de todos los elementos de una forma u otra y devolverla.

El valor resultante puede ser cualquier cosa: un número, una cadena, un objeto, una matriz; todo depende de la tarea que esté resolviendo el desarrollador de JavaScript.

El método `reduce` toma 2 parámetros:

- una función, como `map`, que se llamará secuencialmente para cada elemento de la colección;
- el valor inicial del acumulador.

La función ⚙️ también tiene 2 argumentos:

- el primero es el valor acumulado (acumulador);
- elemento de matriz directamente.

### Sintaxis

```javascript
array.reduce(function callback[, initialValue])
```

### Descripción

![describir](https://media.giphy.com/media/3orieVr84udUl4wbQs/giphy.gif)

El método `reduce()` ejecuta la función ⚙️ `callback` una vez para cada elemento presente en el arreglo, excepto los vacíos, tomando cuatro argumentos: el valor inicial (o el valor de la anterior llamada `callback`), el valor de el elemento actual, el índice actual y la matriz para iterar.

Cuando se llama a la función por primera vez⚙️, los parámetros `accumulator` y `currentValue` pueden tomar uno de dos valores. Si se pasa el argumento `valorinicial` al llamar a `reduce()`, entonces el valor de `accumulator` será igual al valor de `initialValue`, y el valor de `currentValue` será igual al primer valor en el formación. Si no se proporciona el argumento `initialValue`, entonces el valor de `acumulador` será igual al primer valor de la matriz, y el valor de `currentValue` será igual al segundo valor de la matriz.

Si la matriz está vacía y no se proporciona ningún argumento `initialValue`, se lanzará una excepción `TypeError`. Si la matriz consta de un solo elemento (independientemente de su posición en la matriz) y no se especifica el argumento `initialValue`, o si se especifica el argumento `initialValue`, pero la matriz está vacía, entonces se devolverá este valor sin llamar a la función⚙️ `callback`.

### Valor inicial del acumulador

![hatchng](https://media.giphy.com/media/xT1R9Qy80qNb8oQGGc/giphy.gif)

Echemos un vistazo al valor inicial. En el ejemplo, es igual a `0`, ya que estamos contando un valor numérico: la suma de las edades. En lugar de cero, puede haber cualquier otro número/cadena (vacía o no)/objeto/matriz: cualquier valor desde el que comience la acumulación. Por ejemplo, combinemos los nombres de todos los amigos en una línea :

```jsx live
function learnJavaScript() {
  const Amigos = [
    { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
    { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
    { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
    { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
    { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
    { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' }
  ]

  const names = friends.reduce((accumulator, friend) => `${accumulator} ${friend.name}, `, 'Friends: ')

  return names
}
```

Aquí, el valor inicial fue la cadena `"Amigos:"`, a la que se agregaron gradualmente los nombres de todos los amigos.

Si no especifica explícitamente un valor de origen, implícitamente se convierte en el primer elemento 1️⃣ de la matriz. En este caso, ya no se llama a la función ⚙️.

### Ejemplo

#### Suma de todos los valores en una matriz:

```jsx live
function learnJavaScript() {
  const initialValue = 0

  const sum = [1, 2, 3].reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  }, initialValue)

  return sum
}
```

Y lo mismo en una línea de código:

```jsx live
function learnJavaScript() {
  const sum = [1, 2, 3].reduce((x, y) => x + y)

  return sum
}
```

<!-- #### Сглаживание массива массивов:

![transform](https://media.giphy.com/media/dVleMgtOlPE6Q/giphy.gif)

Код решает задачу преобразования массива массивов в один плоский массив. Результат первой итерации будет равен: `[…[], …[1, 2, 3]]` что означает, что он преобразуется в `[1, 2, 3]` — это значение мы предоставляем как `acc` на второй итерации и так далее.

```jsx live
function learnJavaScript() {
  const nested = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]

  const flat = nested.reduce((acc, it) => [...acc, ...it], [])

  return flat + ' '
}
```

#### Разворачивание массива массивов:

```jsx live
function learnJavaScript() {
  const flattened = [
    [0, 1],
    [2, 3],
    [4, 5]
  ].reduce(function (a, b) {
    return a.concat(b) + ' '
  })

  return flattened
}
``` -->

## chaining

![unity](https://media.giphy.com/media/jTf2Io0LtBXGZddOVE/giphy.gif)

La programación de JavaScript admite un patrón conveniente de "encadenamiento": combina varias funciones ⚙️ en una cadena con transferencia secuencial del resultado.

Los tres métodos analizados se llaman en el contexto de una matriz, y dos 2️⃣ de ellos también devuelven una matriz. Por lo tanto, son muy fáciles de combinar.

Por ejemplo, calculemos la edad total de todos los niños :

```jsx live
function learnJavaScript() {
  const friends = [
    { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
    { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
    { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
    { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
    { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
    { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' }
  ]
  let totalBoysYears = friends
    .filter(friend => friend.sex === 'm')
    .reduce((accumulator, friend) => accumulator + friend.age, 0)
  return totalBoysYears
}
```

O recopilemos los números de pasaporte de las niñas para comprarles boletos de avión a Las Vegas :

```jsx live
function learnJavaScript() {
  const friends = [
    { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
    { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
    { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
    { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
    { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
    { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' }
  ]
  let girlsPassports = friends.filter(friend => friend.sex === 'f').map(friend => friend.passport) + ' '
  return girlsPassports
}
```

## Conclusión

Con el uso de estas maravillosas funciones⚙️ el código se ha vuelto más legible. Entonces, a continuación hay una lista de artículos que cubren este tema con más detalle.

## ¿Problemas?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Escribe en [Discord](https://discord.gg/6GDAfXn) o Telegram [chat](https://t.me/jscampapp) y suscríbete a nuestras [noticias](https://t.me/javascriptapp)

<!-- ![JavaScript Camp](/img/bandlink.png) -->

## Preguntas:

![Pregunta](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

¿Función llamada para cada elemento de la matriz?

1. `currentValue`
2. `array`
3. `callback`

Un método que crea una nueva matriz con el resultado de llamar a la función especificada para cada elemento de la matriz:

1. `map`
2. `filter`
3. `reduce`

El valor del resultado del método `reduce` puede ser:

1. Número
2. matriz
3. Cualquier cosa

La suma de todos los valores en una matriz se logra mediante el método:

1. `map`
2. `filter`
3. `reduce`

Un método que crea una nueva matriz con todos los elementos que pasaron la prueba especificada en la función aprobada:

1. `map`
2. `filter`
3. `reduce`

Combinación de varias funciones en una cadena con transferencia secuencial del resultado:

1. unity
2. chaining
3. merger

Para comprender cuánto ha aprendido esta lección, realice una prueba en la [aplicación móvil](http://onelink.to/njhc95) de nuestra escuela sobre este tema o en nuestro [bot de Telegram](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Enlaces:

1. [Simplifique su JavaScript: use mapa, reduzca y filtre](https://proglib.io/p/javascript-map-reduce-filter)
2. [15 ejemplos útiles de javascript de map(), reduce() y filter()](https://webdevblog.ru/15-poleznyh-javascript-primerov-map-reduce-i-filter)
3. [Array.prototype.map()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
4. [Array.prototype.filter()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
5. [Array.prototype.reduce()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/AlisaNasibullina"><img src="https://avatars3.githubusercontent.com/u/74646904?s=460&v=4" width="200px;" alt=""/><br /><sub><b>AlisaNasibullina</b></sub></a><br /><a href="#mentoring-KoDim-React" title="Mentoring">  </a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)
