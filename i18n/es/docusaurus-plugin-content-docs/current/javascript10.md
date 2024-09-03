---
id: javascript10
title: Objetos
sidebar_label: Objetos
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/11.jpg)

Los objetos son como un armario  para cosas, diseñado para almacenar  y transportar otro tipo de datos.
JavaScript está diseñado en torno a un paradigma simple. El concepto se basa en objetos simples. Un objeto es un conjunto de propiedades, y cada propiedad consta de un nombre (clave) y un valor asociado con ese nombre. El valor de la propiedad puede ser una función⚙️ que se puede llamar método de objeto o cualquier otro tipo.

![Object](https://media.giphy.com/media/xTiTnFEfyt0vqhQzDi/giphy.gif)

En este artículo, veremos las propiedades más básicas de los objetos de JavaScript, creando y cambiando, enumerando propiedades.

Un objeto en JavaScript es solo una matriz asociativa o, en otras palabras, un "hash". Almacena cualquier coincidencia `"clave: valor" y tiene varios métodos estándar.

Los objetos en JavaScript, como los objetos en la vida real (persona, autobús, edificio, etc.) tienen varios parámetros con nombre (clave🗝️) (edad, nombre, color de cabello, estado) con valores específicos (15, Juan, negro, 'verdadero')  :

```javascript
let obj = {
  age: 15,
  name: 'John',
  color: 'black',
  student: true
}
```

Un método de objeto en JavaScript es solo una función que se ha agregado a una matriz asociativa.

```jsx live
function learnJavaScript() {
  let obj = {
    // propiedades : valores
    age: 15,
    name: 'John',
    // método : función
    say: () => 'Hello!'
  }
  return obj.say()
}
```
## Video

<YouTube videoId="3rEcxqlkJNE" /> 

### Crear un objeto

![Object](https://media.giphy.com/media/2YaKpvYQEcl1WuJJTl/giphy.gif)

En una computadora    ️, podemos representar un `objeto` en forma de gabinete con nombres de propiedad (`claves de acceso`) firmados en él. Dentro de los cajones del gabinete hay datos (información específica) e incluso puede haber objetos más pequeños, similares a cosas. Es fácil encontrar, borrar o agregar (escribir) un nuevo `valor` mediante `clave`.

![obj01](/img/javascript/12/01.png)

Estas son dos 2️⃣ opciones para crear un objeto vacío:

```javascript
// эквивалентные записи
let obj = {}
let person = new Object()
```

La segunda opción se usa muy raramente en la práctica.

![obj00](/img/javascript/12/00.png)

## Creación avanzada

![Extended](https://media.giphy.com/media/2XflxzlJfoSDycf3BBu/giphy.gif)

Las propiedades se pueden especificar directamente al crear un objeto, a través de una lista entre llaves de la forma {..., `clave: valor,` ...} y crear objetos complejos:

```jsx live
function learnJavaScript() {
  const obj = {
    age: 15,
    name: 'John',
    color: 'black',
    passport: {
      serial: 5721,
      number: 258963,
      date: '27.10.2015'
    },
    student: true
  }

  return obj.passport.date
}
```

El objeto  creado contiene cinco propiedades con valores específicos, uno de los cuales son datos de pasaporte, que es un objeto integrado. Preste atención a cómo se accede a las propiedades o métodos remotos del objeto. Trate de recuperar su número de pasaporte.

## Agregando propiedades

![Adding](https://media.giphy.com/media/3CZ2iGe1ByKfhZxaD7/giphy.gif)

Hay dos 2️⃣ sintaxis para agregar propiedades a un objeto. 1️⃣ El primero es un punto, el segundo son corchetes:

```javascript
// entradas equivalentes
obj.age = 15
obj['age'] = 15
```

```jsx live
function learnJavaScript() {
  let obj = {
    name: 'John'
  }

  obj.age = 15

  return obj.age
}
```

Los corchetes se usan principalmente cuando el `nombre de la propiedad` (propiedades) está en una `variable` :

```javascript
let nameProp = 'age'
obj[nameProp] = 15
```

Aquí, a través de la variable  `nameProp`, establecemos el nombre de la propiedad `"edad"`, que es la clave en la matriz asociativa, que contiene `valor 15`.

```jsx live
function learnJavaScript() {
  let obj = {
    name: 'John'
  }

  let nameProp = 'age'
  obj[nameProp] = 15

  return obj.age
}
```

## Acceso a la propiedad

![Door](https://media.giphy.com/media/l378znZcUM7b6VDyM/giphy.gif)

Se accede a una propiedad accediendo a ella  :

```jsx live
function learnJavaScript() {
  let obj = {} // el objeto esta vacio
   obj.age = 17 // equivalente a obj['age']=17 o simplemente obj={age:17}

  let result1 = obj.age // Opción 1
   let result2 = obj['age'] // Opción 2

  return result1 + ' o ' + result2
}
```

Si el objeto `no tiene tal propiedad`, entonces el resultado es `'indefinido'`. Compruébalo en la consola de tu navegador.

```javascrript
let obj = {}
obj.nokey
```

![nokey](/img/javascript/15.jpg)

No habrá ningún error  al acceder a una propiedad inexistente, solo se devolverá el valor especial `undefined`. Si no hay una palabra clave 🗝️ `return` dentro de la función ⚙️, también se devolverá el valor `undefined`: la ausencia de algo.

<!-- ## Проверка глобальной переменной

![Planet](https://media.giphy.com/media/LW5vBvAb48Oe9OoEKT/giphy.gif)

В JavaScript нельзя проверить существование глобальной переменной  простым `if(проверяемаяПеременная)`:

```javascript
    if (x) { ... }
```

Если `x` не определен, то конструкция if(x) вызовет `ошибку`.

Распространенное решение - использовать `typeof()`:

```javascript
    if (typeof(x) != 'undefined') { ... }  // или typeof(x)
``` -->

<!--
Однако зная, что глобальная переменная в Javascript - всего лишь свойство объекта `window` - мы можем записать проще:

```javascript
    if (window.x) { ... }   // правильный аналог if(x)
    // или
    if (window.x !== undefined) // аналог typeof x ..
```
-->

<!-- :::note Cвойства объектов
Все свойства объектов - public (общественные), т.е при определении свойства никак нельзя ограничить доступ к свойству.
:::

В JavaScript есть специальные способы для создания `private` свойств, связанные с `замыканиями`. Они рассмотрены вместе с наследованием объектов далее по курсу. -->

## Eliminando propiedades

![Delete](https://media.giphy.com/media/5xaOcLwEvFOizxHVyVy/giphy.gif)

Elimina una propiedad con el operador `delete`. Intente eliminar el número de pasaporte del ejemplo anterior:

Cree un objeto del ejemplo anterior en la consola.

```javascript
const obj = {
  age: 15,
  name: 'John',
  color: 'black',
  passport: {
    serial: 5721,
    number: 258963,
    date: '27.10.2015'
  },
  student: true
}
```

Y ahora elimine el objeto `pasaporte` anidado

```javascript
delete obj.passport
```

Ahora, si recurrimos a él, como resultado obtenemos `undefined`

```javascript
obj.passport
```

![delete obj](/img/javascript/16.jpg)

## Métodos de objetos

![Description](https://media.giphy.com/media/3ohzAqLk7azQ0O6RvW/giphy.gif)

Al igual que otros lenguajes , los objetos de JavaScript tienen `métodos`.

Por ejemplo, vamos a crear el objeto `sport` inmediatamente con el método `run`:

```jsx live
function learnJavaScript() {
  let sport = {
    run: n => ' John ' + ' corrió ' + n + ' metros! '
  }

  return sport.run(300)
}
```

### Agregar un método

![Add](https://media.giphy.com/media/5ns6077LTlGACuwRQR/giphy.gif)

Agregar un método a un objeto existente es tan simple como asignar una función ⚙️ `function(n) { ... }` a la propiedad `sport.run`.

```jsx live
function learnJavaScript() {
  let sport = {}

  sport.run = n => 'El atleta corrió' + n + ' metros y era ' + 'Nikita'

  return sport.run(350)
}
```

<!-- :::note Обратите внимание
Очень часто методы используют в своих расчетах свойства своего же объекта.
::: -->

No se trata de clases, crear instancias y cosas por el estilo. Simple: puede agregar un nuevo método a cualquier objeto en cualquier momento o eliminar uno existente.

<!--
```jsx live
function learnJavaScript() {
  var sport = {
    name: 'Nikita',
    age: 18
  }

  sport.run = (n, str) => {
    if (str === 'men') return 'Спортсмен пробежал ' + n + ' метров и это был ' + sport.name
    if (str === 'women') return 'Спортсменка пробежала ' + n + ' метров и это была ' + sport.name
    if (str !== 'men' || str !== 'women') return 'Человек пробежал ' + n + ' метров.'
  }

  return sport.run(350, 'women')
}
```

Подумайте, чем можно заменить множественный `if()`. JavaScript - очень динамический язык . -->

## Iterando sobre las propiedades del objeto

![enumeration](https://media.giphy.com/media/h5FIFDs6rXLpWlWWZJ/giphy.gif)

Para enumerar todas las propiedades de un objeto, se utiliza un tipo especial de construcción `for .. in`:

```javascript
for(let key in obj) {
// key - nombre de la propiedad
   // obj[key] - valor de propiedad
  ...
}
```

Например  :

```jsx live
function learnJavaScript() {
  let result = ''

  const obj = {
    age: 15,
    b: 'true',
    color: 'red'
  }

  for (let key in obj) {
    result += key + ': ' + obj[key] + ' '
  }

  return result
}
```

Y en secreto, para ser honesto, casi cualquier variable  es un miniobjeto en el entorno de JavaScript. Así que no tengas miedo de usarlos.

## Reaccionar nativo

Por ejemplo, necesitamos mostrar el nombre del objeto `obj`, luego lo haremos así:

```SnackPlayer name=index.js
import React from 'react'
import { Text } from 'react-native'

const App = () => {
  const obj = {
    age: 15,
    name: 'John',
    color: 'black',
    passport: {
      serial: 5721,
      number: 258963,
      date: '27.10.2015'
    },
    student: true
  }  

  return (
    <Text>{obj.name}</Text>
  )
}

export default App
```

Intente mostrar otros datos, como la serie del pasaporte.

## ¿Problemas?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Escribe en [Discord](https://discord.gg/6GDAfXn) o Telegram [chat](https://t.me/jscampapp) y suscríbete a nuestras [noticias](https://t.me/javascriptapp)

<!-- ![JavaScript Camp](/img/bandlink.png) -->

## Preguntas

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

Se crea un objeto vacío con el comando:

1. `let obj = {}`
2. `function obj()`
3. `sea x = 10`

El objeto almacena coincidencias:

1. er nombre : apellido
2. variable = valor
3. clave: valor

Sintaxis para asignar un valor a una clave específica (propiedad):

1. `color() = "green"`
2. `obj.color = "red"`
3. `function color () => "yellow"`

Un método de objeto en JavaScript es

1. Solo una función agregada a una matriz asociativa
2. Función externa
3. Variable declarada fuera del objeto

Iterando sobre las propiedades del objeto

1. `for (let i = 0; i <= 100; i++) { sum += i }`
2. `for(let key in obj) { }`
3. `while (условие) { }`

En JavaScript, un objeto es una colección de propiedades (valores con nombre).

1. `true`
2. `false`

Cuando la propiedad de un objeto es una función, tiene un nombre especial: `madre`.

1. `true`
2. `false` Tiene un nombre especial: `clase`
3. `false` Tiene un nombre especial: `método`

Para comprender cuánto ha aprendido esta lección, realice una prueba en la [aplicación móvil](http://onelink.to/njhc95) de nuestra escuela sobre este tema o en nuestro [bot de Telegram](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Enlaces:

1. [Documento web de MDN. Developer.mozilla.org - Artículo "Tipos de datos y estructuras de datos de JavaScript"](https://developer.mozilla.org/ru/docs/Web/JavaScript/Data_structures)
2. [Documento web de MDN. Developer.mozilla.org - Artículo "Inicialización de objetos"](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Object_initialize)
3. [Artículo "Tipos de objetos"](https://www.javascript.express/types/object_types)
4. [Artículo "Objetos", sitio Learn.javascript.ru](https://learn.javascript.ru/object)
5. [Código para adolescentes: la gran guía de programación para principiantes Volumen 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/KoDim-React"><img src="https://avatars1.githubusercontent.com/u/72087863?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy K.</b></sub></a><br /><a href="#mentoring-KoDim-React" title="Mentoring">  </a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

<!--

<!--
Это уже выходит за рамки текущей статьи, но вообще - существует еще одна форма перебора свойств, которая более надежна, особенно если используется библиотека типа prototype.

```javascript
for (prop in object) {
  if (!object.hasOwnProperty(prop)) continue
  //...
}
```
Эта форма отфильтровывает свойства, которые принадлежат не самому объекту, а его прототипу. Поэтому она работает, даже если в прототип Object добавлены новые свойства.

Более элегантный вариант записи:

```javascript
for (prop in object)
  if (object.hasOwnProperty(prop)) {
    //...
  }
```

### Доступ к объекту из метода

Обычно хочется, чтобы метод не просто вызывался из объекта, но имел доступ к самому объекту, мог менять находящиеся в нем данные.

Для этого используется ключевое слово this:

В отличие от многих языков, this никак не привязано к объекту, а обозначает просто объект, вызвавший эту функцию.
Например,

```javascript
function thisObj() {
  let vasya = { name: 'Вася' }
  let petya = { name: 'Петя' }

  let sayName = function () {
    console.log('Я - ' + (this.name ? this.name : 'безымянный'))
  }
  vasya.sayName = sayName

  // один и тот же метод в двух объектах
  petya.sayName = vasya.sayName

  // тут - this будет petya
  petya.sayName() // Я - Петя

  // тут - this будет vasya
  vasya.sayName() // Я - Вася

  // а тут - вызывается метод глобального объекта window, у которого нет имени
  sayName() // Я - безымянный
}

thisObj()
```
-->
