---
id: javascript18
title: Operadores de Rest y Spread
sidebar_label: Operadores de Rest y Spread
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/19.jpg)

Muchas funciones integradas de ⚙️ JavaScript admiten una cantidad arbitraria de argumentos.

Por ejemplo:

`Math.max(arg1, arg2, ..., argN)` - Calcula el número máximo de los argumentos dados.

`Math.min(arg1, arg2, ..., argN)` - devuelve el valor mínimo de los argumentos pasados.

En este artículo, aprenderemos cómo hacer lo mismo con nuestras propias funciones⚙️ y cómo pasar parámetros de matriz a dichas funciones⚙️.

## Video

<YouTube videoId="9Qt7c5lEF_4" />

## Parámetros residuales `(...rest)`

![Parametrs](https://media.giphy.com/media/3osxYoufeOGOA7xiX6/giphy.gif)

Puede llamar a una función⚙️ con cualquier cantidad de argumentos, independientemente de cómo se haya definido.

Por ejemplo :

```jsx live
function learnJavaScript() {
  let summa = (a, b, c) => {
    return a + b + c
  } // Suma de 3 números

  return summa(1, 2, 3, 4, 5, 6, 7)
}
```

Los argumentos adicionales no generarán un error, pero, por supuesto, solo se contarán los tres primeros.

### Concepto ES6

![Idea](https://media.giphy.com/media/3o6Mbj2w67HnPQKgcE/giphy.gif)

Desde el estándar ES6, ha aparecido el concepto de cómo `...rest` son parámetros de descanso.

```jsx
let goFun = (...rest) => {
  // Algoritmo
}
```

Los parámetros libres se pueden indicar con tres puntos `...`. Literalmente, esto significa: "reunir los parámetros restantes y colocarlos en una matriz".

Por ejemplo, recopilemos todos los argumentos en una matriz `args`:

```jsx live
function learnJavaScript() {
  let sumAll = (...args) => {
    // args es el nombre de la matriz de argumentos pasados
    let sum = 0
    for (let arg of args) if (typeof arg === 'number') sum += arg // sum: se recopilará la suma de todos los argumentos numéricos
    return sum
  }
  return sumAll(1, 2, 3, 4, 5, 6, 7, 'React', 'Native')
}
```

La respuesta ya es 28 y sin errores ! Detalle para cambiar los argumentos o la dimensión de la matriz.

### Múltiples opciones

Podemos poner los primeros parámetros en variables  y recopilar el resto en una matriz.
Esto significa que simplemente puede insertar `...rest`, pero solo en lugar del último parámetro de función.

![paste](https://media.giphy.com/media/3o6ZtafpgSpvIaKhMI/giphy.gif)

```jsx
let goFun = (first, second, ...rest) => {
  // Algoritmo
}
```

En el siguiente ejemplo, los dos primeros argumentos de la función 2️⃣ se convertirán en el nombre y el apellido, y el tercer argumento y los subsiguientes se convertirán en la matriz `titles[i]` :

```jsx live
function learnJavaScript() {
  let free = ''
  let showName = (firstName, lastName, ...titles) => {
    free = firstName + ' ' + lastName // Nombre + Apellido
    return titles[0] + ' ' + titles[1]
  }
  // Los parámetros restantes irán a una matriz. titles = ["React", "Native"]
  // titles[0]  // React
  // titles[1]  // Native

  let result = showName('Юлий', 'Цезарь', 'React', 'Native')

  return free + ' или ' + result
}
```

### Posibles errores

![error](https://media.giphy.com/media/xTiN0L7EW5trfOvEk0/giphy.gif)

Los parámetros residuales deben colocarse al final, por lo que no puede escribir  nada después de ellos.
Esto arrojará un `error`:

```jsx
function f(arg1, ...rest, arg2) {   // arg2 después...rest ?
  // ¡Error!
}
```

:::note Recuerda
`...descanso` siempre debe ser lo último.
:::

<!-- ### Опасный "arguments"

![dangerous](https://media.giphy.com/media/xT5LMAvRY92qUXj7dC/giphy.gif)

Все аргументы функции⚙️ находятся в псевдомассиве `arguments` под своими порядковыми номерами.

Но доступ через массив `arguments[]` можно найти только в старом коде . Не применяйте его!

:::note Внимание
Cтрелочные функции⚙️ не имеют `arguments[]` как и собственного `this.`
:::

Если мы обратимся к `arguments` из стрелочной функции⚙️, то получим аргументы внешней "классической" функции⚙️. Соответственно, для более удобной работы с аргументами лучше использовать только остаточные параметры `...rest`. -->

## Operador de propagación `...spread`

![operators](https://media.giphy.com/media/3o6Mbfd5fQszubehmE/giphy.gif)

Aprendimos cómo obtener una matriz a partir de una lista de parámetros, pero a veces es necesario hacer lo contrario: insertar la matriz en una función llamada⚙️.

Por ejemplo, hay una función integrada ⚙️ `Math.max`. Devuelve  el número más grande de la lista:

```jsx live
function learnJavaScript() {
  return Math.max(3, 5, 1, 17, 14, 8, 2, 11)
}
```

### No es tan simple

![Index_finger](https://media.giphy.com/media/4ZcYCubFNk8AUHcZVw/giphy.gif)

Digamos que tenemos una matriz de números `[3, 5, 1]`. ¿Cómo llamar a `Math.max` para ello?

No puede simplemente insertarlos así: `Math.max` espera obtener una lista de números, no una sola matriz.

```jsx live
function learnJavaScript() {
  let arr = [3, 5, 1, 17, 14, 8, 2, 11]
  return Math.max(arr) // NaN - el valor será indefinido
}
```

Por supuesto, podemos ingresar números manualmente: `Math.max(arr[0], arr[1], arr[2]).`

Pero, en primer lugar, se ve mal y, en segundo lugar, no siempre sabemos cuántos argumentos habrá. Puede haber muchos de ellos, o ninguno.

### Ocurrencia de parámetro

![Transform](https://media.giphy.com/media/xT4uQr9H3EDL7Ha2hq/giphy.gif)

Aquí es donde el operador de propagación `...spread` resulta útil. Es similar a los parámetros residuales: también usa `...`, pero hace exactamente lo contrario.

Cuando la función ⚙️ `...spread` se usa en una llamada de función⚙️, convertirá el objeto de matriz `arr` en una lista de argumentos.

Para `Math.max` :

```jsx live
function learnJavaScript() {
  let arr = [3, 5, 1, 17, 14, 8, 2, 11]

  return Math.max(...arr) // el operador ...arr convierte la matriz `arr` en una lista de argumentos
}
```

De la misma manera, podemos pasar múltiples iterables :

```jsx live
function learnJavaScript() {
  let arr1 = [1, 2, 34, 41]
  let arr2 = [8, 3, 18, 17]
  let arr3 = [2, 4, 16, 38]

  return 'Max = ' + Math.max(...arr1, ...arr2, ...arr3)
}
```

¡Enfriar! Un enfoque muy flexible de la programación. También puede combinar el operador de propagación con valores regulares.

### Fusiones de matriz

![Merger](https://media.giphy.com/media/rytLWOErAX1F6/giphy.gif)

El operador de propagación `...spread` también se puede usar para fusionar matrices :

```jsx live
function learnJavaScript() {
  let arr1 = [3, 5, 7]
  let arr2 = [4, 2, 8]

  let merged = [100, ...arr1, 500, ...arr2]
  let str = 'Formación: ' + merged

  return <b>{str}</b>
}
```

### Convertir a cadena

![Transform](https://media.giphy.com/media/RLVHPJJv7jY1q/giphy.gif)

La funcionalidad ⚙️ del operador de propagación `...spread` funciona en cualquier objeto iterable.

Por ejemplo, el operador de expansión es adecuado para convertir una cadena en una matriz de caracteres :

```javascript
let str = '¡Oye Alex!'
let result = [...str]
```

![spread](/img/javascript/13.jpg)

Veamos qué pasa. Debajo del capó, el operador de propagación usa iteradores para iterar sobre los elementos. Tal como lo hace `for..of`.

El bucle `for..of` itera sobre la cadena como una secuencia de caracteres, por lo que `...str` produce "Q", "y", "e"...
Los caracteres resultantes se recopilan en una matriz utilizando la declaración de matriz  estándar `[...str]`.

También podemos usar `Array.from` para esta tarea. También convierte el objeto iterable (como una cadena) en una matriz :

```javascript
let str = 'Oye'
Array.from(str) // "Q", "y", "e"
// Array.from convierte el objeto iterable en una matriz
```

![spread](/img/javascript/14.jpg)

El resultado es similar a `[...str].` Pero hay una diferencia entre `Array.from(obj)` y `[...obj]`:

- `Array.from` funciona tanto con pseudo-matrices como con iterables.
- El operador de propagación `...spread` funciona `solo` con iterables.

Por lo tanto, `Array.from` es un método más general.

## Total

![Elipsis](https://media.giphy.com/media/UWXLULrP5KGDC/giphy.gif)

Cuando vemos `"..."` en el código , puede ser `...rest` parámetros residuales o `...spread` operador de propagación.

Cómo distinguirlos:

- Si `...` está ubicado al final de la lista de argumentos de la función, entonces estos son "parámetros residuales". Recopila los argumentos no especificados restantes y crea una matriz a partir de ellos.
- Si `...` ocurre en una llamada de función o en otro lugar, entonces es un "operador de extensión". Recupera elementos de la matriz para inicializar la función.

Bueno para recordar:

- Los parámetros residuales se utilizan para crear nuevas funciones con un número indefinido de argumentos.
- Con el operador de propagación, puede insertar una matriz en una función que, de forma predeterminada, funciona con una lista de argumentos regulares.
- Juntas, estas construcciones facilitan la conversión de conjuntos de valores en matrices y viceversa.

## ¿Problemas?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Escribe en [Discord](https://discord.gg/6GDAfXn) o Telegram [chat](https://t.me/jscampapp) y suscríbete a nuestras [noticias](https://t.me/javascriptapp)

![JavaScript Camp](/img/bandlink.png)

## Preguntas

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

Si `...` está ubicado al final de la lista de argumentos de la función, entonces estamos tratando con:

1. Parámetro residual
2. Operador de extensión
3. Indicadores aleatorios

Para crear una función con un número indefinido de argumentos, utilice:

1. Parámetros residuales `...rest`
2. Operador de propagación `...spread`
3. Funciones de llamadas externas

Puede fusionar dos matrices en una usando:

1. El operador de expansión `...rest`
2. Operador de propagación `...spread`

Para comprender cuánto ha aprendido esta lección, realice una prueba en la [aplicación móvil](http://onelink.to/njhc95) de nuestra escuela sobre este tema o en nuestro [bot de Telegram](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

## Enlaces

1. [Documento web de MDN. Artículo "sintaxis extendida"](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/spread_syntax)
2. [Artículo "Parámetros residuales y operador de extensión"](https://learn.javascript.ru/rest-parameters-spread-operator)
3. [Artículo "Operador de Spread y Rest"](https://medium.com/@stasonmars/%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80-spread-%D0%B8-rest-%D0%BF%D0%B0%D1%80%D0%B0%D0%BC%D0%B5%D1%82%D1%80%D1%8B-%D0%B2-javascript-22eb33cb0825)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/KoDim-React"><img src="https://avatars1.githubusercontent.com/u/72087863?v=4?s=200" width="200px " alt=""/><br /><sub><b>Dmitriy K.</b></sub></a><br /><a href="#mentoring-KoDim-React" title="Mentoring">  </a></td>
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
Например:
```jsx
function showName() {
  console.log( arguments.length )
  console.log( arguments[0] )
  console.log( arguments[1] )

  // Объект arguments можно перебирать
  // for (let arg of arguments) console.log(arg)
}

// Вывод: 2, Юлий, Цезарь
showName("Юлий", "Цезарь")

// Вывод: 1, Илья, undefined (второго аргумента нет)
showName("Илья")
```
Раньше в языке не было остаточных параметров, и получить все аргументы функции можно было только с помощью arguments. Этот способ всё ещё работает, мы можем найти его в старом коде.
Но у него есть один недостаток. Хотя arguments похож на массив, и его тоже можно перебирать, это всё же не массив. Он не поддерживает методы массивов, поэтому мы не можем, например, вызвать arguments.map(...).
К тому же, arguments всегда содержит все аргументы функции — мы не можем получить их часть. А остаточные параметры позволяют это сделать.
Соответственно, для более удобной работы с аргументами лучше использовать остаточные параметры.
-->
