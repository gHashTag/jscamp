---
id: javascript22
title: Funciones de orden superior
sidebar_label: Funciones de orden superior
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/21.jpg)

Las funciones de orden superior⚙️ permiten que JavaScript sea adecuado para la programación [funcional⚙️](https://ru.wikipedia.org/wiki/Functional_programming).
Tales funciones⚙️ son ampliamente utilizadas en JavaScript. Si ha realizado alguna programación de JavaScript, probablemente los haya utilizado, tal vez sin siquiera darse cuenta.

Para comprender completamente este concepto, primero debe comprender la programación funcional⚙️ y el concepto de funciones de primera clase⚙️.

## Video

<YouTube videoId="-VqRjaxoKJs" />

## ¿Qué es la programación funcional?

> La programación funcional es una sección de las matemáticas discretas y un paradigma de programación en el que el proceso de cálculo se interpreta como el cálculo de los valores de las funciones en la comprensión matemática de estas últimas (en contraposición a las funciones como subrutinas en la programación procedimental). [Wikipedia]

### Funciones de primera clase

![First_class](https://media.giphy.com/media/l2Jecm1l0wnJ2kQDu/giphy.gif)

Si ya está aprendiendo JavaScript, es posible que haya escuchado que JavaScript trata las funciones⚙️ como objetos de primera clase. En JavaScript, las funciones⚙️ son objetos, al igual que en otros lenguajes de programación funcional ⚙️.
En JavaScript, las funciones⚙️ son un tipo especial de objeto. Estos son objetos `Function`. Por ejemplo:

```jsx live
function learnJavaScript() {
  let greeting = () => 'Hello, World !'

  return greeting()
}
```

Ahora sabemos qué son las funciones de primera clase⚙️. Puede pasar a funciones de orden superior.

## Funciones de orden superior

![Higher](https://media.giphy.com/media/WS4yajVBkb3lIwDIKd/giphy.gif)

Estas son funciones⚙️ que toman una función⚙️ como argumento o devuelven una función⚙️ como salida.

Por ejemplo, estas funciones⚙️ de orden superior están integradas en el lenguaje : `map()` `filter()` y `reduce()`

### Ejemplo 1. Cambiar números `.push`

![Edit_number](https://media.giphy.com/media/xT5LMMneIRG1UJquOI/giphy.gif)

Digamos que tenemos una matriz de números. Queremos crear una nueva   matriz que contendrá los valores duplicados de la primera. Veamos cómo podemos resolver este problema con y sin una función de orden superior⚙️.

#### Sin función de orden superior:

```jsx live
function learnJavaScript() {
  const arr1 = [1, 2, 3, 4]
  const arr2 = []

  for (let i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i] * 2) // array arr2 crece en un bucle
  }

  return arr2 // 2, 4, 6, 8 solo sin espacios
}
```

Con la versión de consola ⚙️ función de orden superior `mapa`:

```jsx live
function learnJavaScript() {
  const arr1 = [1, 2, 3, 4]
  const arr2 = arr1.map(function (item) {
    // versión antigua
    return item * 2 + ' '
  })
  return arr2
}
```

Podemos escribirlo aún más corto usando la sintaxis de "función de flecha":

```jsx live
function learnJavaScript() {
  const arr1 = [1, 2, 3, 4, 5]
  const multTwo = item => item * 2 + ' '

  const arr2 = arr1.map(multTwo) // Algoritmo en 1 línea

  return arr2
}
```

### Ejemplo #2. Valores calculados `.map`

![Math](https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif)

Digamos que tenemos una matriz que contiene los años de nacimiento de diferentes personas. Necesitamos crear una matriz  que almacene su edad.

Por ejemplo: sin una función de orden superior⚙️ (clásico: a través de un bucle `for()` y `push()`)

```jsx live
function learnJavaScript() {
  const birthYear = [1975, 1997, 2002, 1995, 1985]
  const ages = []
  for (let i = 0; i < birthYear.length; i++) {
    let ageNew = 2020 - birthYear[i] + ' ' // El valor actual de la nueva matriz.
    ages.push(ageNew) // poner el nuevo valor en la matriz edades[]
  }

  return ages // [ 45, 23, 18, 25, 35 ] solo sin espacios
}
```

С функцией высшего порядка `map`:

```jsx live
function learnJavaScript() {
  const birthYear = [1975, 1997, 2002, 1995, 1985]
  let ages = birthYear.map(year => 2020 - year + ' ') // Algoritmo en 1 línea a través de una función de flecha
  return ages // [ 45, 23, 18, 25, 35 ]
}
```

Parpadeando    una nueva matriz en una línea de código.

### Ejemplo #3. Con verificación de condición `.filter()`

![Check](https://media.giphy.com/media/Rd6sn03ncIklmprvy6/giphy.gif)

Tenemos una matriz que contiene objetos con propiedades: nombre y edad. Necesitamos crear una matriz que contenga solo adultos (es decir, edad mayor o igual a 18).

Sin una función de orden superior (clásica - a través de un bucle `for()` y `push()`):

```jsx live
function learnJavaScript() {
  const persons = [
    { name: 'Niki', age: 16 },
    { name: 'Mark', age: 18 },
    { name: 'John', age: 27 },
    { name: 'Jane', age: 14 },
    { name: 'Tony', age: 24 }
  ]

  const fullAge = []
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].age >= 18) {
      fullAge.push(persons[i])
    }
  }

  return fullAge.length // número de personas mayores de 18 años
}
```

Con una función de 'filtro' de orden superior con una condición en línea:

```jsx live
function learnJavaScript() {
  const persons = [
    { name: 'Niki', age: 34 },
    { name: 'Mark', age: 18 },
    { name: 'John', age: 27 },
    { name: 'Jane', age: 14 },
    { name: 'Tony', age: 24 }
  ]
  const fullAge = persons.filter(person => person.age >= 18) // Algoritmo con una condición en 1 línea

  return fullAge.length // número de personas mayores de 18 años
}
```

## Crear su propia función de orden superior

![Create](https://media.giphy.com/media/3ohzdWsUVRcZC2L7Ms/giphy.gif)

Hasta ahora, hemos estado analizando funciones de orden superior⚙️ que están integradas en el lenguaje . Ahora vamos a crear esa función nosotros mismos⚙️.
Imagina que JavaScript no tiene un método `map` integrado. Podemos escribirlo nosotros mismos creando una función⚙️ de orden superior.

Digamos que tenemos una matriz de cadenas y queremos convertirla en una matriz de números, donde cada elemento representa la longitud de los elementos de la matriz original.

```jsx live
function learnJavaScript() {
  // matriz de origen
  const strArray = ['English', 'JavaScript', 'React', 'TypeScript', 'AWS']
  // la función de orden superior mapForEach() toma una función formal (hipotética) fn y una matriz formal arr
  let mapFor = (arr, fn) => {
    const newArray = []
    for (let i = 0; i < arr.length; i++) {
      newArray.push(fn(arr[i])) // Aplicar una función fn() oculta a cada elemento
    }
    return newArray // Devolver una nueva matriz
  }
  // El código de transformación principal - mapForEach() se llama con valores de parámetros específicos
  const lenArray = mapFor(strArray, item => item.length + ' ')

  return 'Длина слов: ' + lenArray // [ 7, 10, 5, 10, 3 ]
}
```

En el ejemplo anterior, creamos nuestra propia función de orden superior `mapFor()`, que toma una matriz `arr` y una función de devolución de llamada `fn`. Esta función recorre la matriz dada y llama a la función de devolución de llamada `fn` dentro la `newArray.push()` para cada iteración, calculando el número de caracteres en las palabras de la matriz, cuyo algoritmo de cálculo se describe  como una segunda variable .

:::nota devolución de llamada
Una función de devolución de llamada⚙️ es una función⚙️ que se pasa a otra función⚙️ como argumento, que luego se llama cuando se completa alguna acción.
:::

La función `Callback`⚙️ `fn` toma el elemento de matriz actual y devuelve la longitud del elemento actual, que ahora está almacenado en `newArray`. Después de que se complete el bucle `For()`, `newArray` devuelve la longitud de los elementos en `lenArray`.

<!-- Поэксперементируйте, используя стрелочные функции:

```jsx
function learnJavaScript() {
  let name = ''
  // Для наглядности функцию преобразования вынесем в отдельную переменную
  let say = secret => 'Hello, ' + secret + ' !' // Основной расчетный алгорим (можно сортировку встроить и многое другое)
  // userInput() - функция высшего порядка
  let userInput = fn => {
    // в качестве параметра функция, пока еще не известно какая (неизведанный алгоритм)
    name = 'Jane' // какое-либо действие
    return fn(name) // только теперь запускаем callback-функцию переданную в параметре с конкретным значением `name`
  }
  return userInput(say) // say - функция callback (обратного вызова), становиться ясно какая функция передается в качестве параметра без скобок
}
```

Обратите внимание на синтаксис  :

при передаче функции⚙️ say в качестве параметра скобки `()` не указываются, т.к. в параметре функция⚙️ не вызывается, а передается целиком. Функция⚙️ `say` является аргументом функции⚙️ `userInput().` -->

Помните, любой сколь угодно малый алгоритм состоит из 3-х этапов:

- 1 этап - Инициализация переменных  и функций
- 2 этап - Функция высшего порядка (логика)
- 3 этап - Вывод ответа.

<!-- Модернизированный пример:

```jsx live
function learnJavaScript() {
  // 1 этап - Инициализация переменных и функций
  let name = ''
  let say = secret => 'Твое имя содержит ' + secret.length + ' символа.'
  // 2 этап - Функция высшего порядка
  let userInput = fn => {
    name = 'Jane'
    return fn(name)
  }
  return userInput(say) // 3 этап - Ответ
}
``` -->

## Conclusión

<!-- ![El y](https://media.giphy.com/media/xT1XH3yj7ujmm2h40o/giphy.gif) -->

Aprendimos qué son las funciones de orden superior y desmantelamos varias de ellas ya integradas en el lenguaje . Aprendió a crear los suyos.

Sin entrar en detalles, sobre funciones⚙️ de orden superior, podemos decir esto: son funciones⚙️ que pueden tomar una función⚙️ como argumento e incluso devolver una función⚙️.

## ¿Problemas?

![Problema](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Escribe en [Discord](https://discord.gg/6GDAfXn) o Telegram [chat](https://t.me/jscampapp) y suscríbete a nuestras [noticias](https://t.me/javascriptapp)

![JavaScript Camp](/img/bandlink.png)

## Preguntas:

![Pregunta](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

Funciones de primera clase:

1. Objetos de primera clase
2. Objetos de quinta clase
3. Objetos de la clase más alta

Función de orden superior:

1. Acepta una función como argumento o devuelve una función como salida
2. Solo toma una función como argumento
3. Solo función de retorno como salida

Función de orden superior:

1. Es imposible crearte a ti mismo
2. Solo se puede usar a través del método incorporado
3. Puedes crear el tuyo propio

Para comprender cuánto ha aprendido esta lección, realice una prueba en la [aplicación móvil](http://onelink.to/njhc95) de nuestra escuela sobre este tema o en nuestro [bot de Telegram](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

## Enlaces:

1. [Aprender funciones de orden superior en JavaScript](https://medium.com/nuances-of-programming/%D0%B8%D0%B7%D1%83%D1%87%D0%B0%D0%B5%D0%BC-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8-%D0%B2%D1%8B%D1%81%D1%88%D0%B5%D0%B3%D0%BE-%D0%BF%D0%BE%D1%80%D1%8F%D0%B4%D0%BA%D0%B0-%D0%B2-javascript-c23daf53a5c0)
2. [Artículo "Funciones de orden superior en JavaScript"](https://habr.com/ru/post/261723/)
3. [Javascript expresivo. Artículo "Funciones de orden superior"](https://eloquent-javascript.karmazzin.ru/chapter5)
4. [Código para adolescentes: La gran guía de programación para principiantes Volumen 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)

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
## Array.prototype.reduce
Метод `reduce` выполняет `callback-функцию` для `каждого элемента` вызываемого массива, что в результате приводит к одному выходному значению.

Метод reduce принимает два параметра:
1) reducer-функцию (callback)
2) и опционально initialValue.

Reducer-функция (callback) принимает 4 параметра: accumulator, currentValue, currentIndex, sourceArray.
Если параметр initialValue предусмотрен, тогда accumulator будет равен initialValue
, а currentValue равен первому элементу в массиве.
Если параметр initialValue не предусмотрен, тогда accumulator будет равен первому элементу массива, а currentValue – второму.
Пример №1
Допустим, нам нужно суммировать массив чисел:
С функцией высшего порядка reduce
const arr = [5, 7, 1, 8, 4]
const sum = arr.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue
})
// prints 25
console.log(sum)
Reducer-функция вызывается для каждого элемента массива, а результат возвращённый reducer хранится в accumulator . В currentValue содержится текущее значение массива. Конечный результат хранится в переменной sum .
Мы можем задать начальное значение этой функции:
const arr = [5, 7, 1, 8, 4]
const sum = arr.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue
}, 10)
// prints 35
console.log(sum)
Без функции высшего порядка
const arr = [5, 7, 1, 8, 4]
let sum = 0
for(let i = 0 ; i < arr.length ; i++) {
  sum = sum + arr[i]
}
// prints 25
console.log(sum)
Обратите внимание, как использование функции высшего порядка сделало наш код чище, лаконичнее и менее многословным.
-->
