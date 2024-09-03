---
id: javascript10
title: Объекты
sidebar_label: Объекты
---

![@serverSerrverlesskiy](/img/javascript/headers/11.jpg)

Объекты - это как шкаф для вещей, предназначеный для хранения  и транспортировки других типов данных.
JavaScript спроектирован на основе простой парадигмы. В основе концепции лежат простые объекты. Объект — это набор свойств, и каждое свойство состоит из имени(ключ) и значения, ассоциированного с этим именем. Значением свойства может быть функция⚙️, которую можно назвать методом объекта или любой другой тип.

![Object](https://media.giphy.com/media/xTiTnFEfyt0vqhQzDi/giphy.gif)

В этой статье рассмотрим самые базовые свойства объектов JavaScript, создание и изменение, перечисление свойств.

Объект в JavaScript представляет собой обычный ассоциативный массив или, иначе говоря, "хэш". Он хранит любые соответствия `"ключ : значение"` и имеет несколько стандартных методов.

Объекты в JavaScript как и объекты в реальной жизни (человек, автобус, здание и т.д.) имеют несколько именованных (ключевых🗝️) параметров (возраст, имя, цвет волос, статус) с конкреными значениями (15, John, black, 'true')  :

```javascript
let obj = {
  age: 15,
  name: 'John',
  color: 'black',
  student: true
}
```

Метод объекта в JavaScript - это просто функция️, которая добавлена в ассоциативный массив.

```jsx live
function learnJavaScript() {
  let obj = {
    // свойства : значения
    age: 15,
    name: 'John',
    // метод : функция
    say: () => 'Hello!'
  }
  return obj.say()
}
```

### Создание объекта

![Object](https://media.giphy.com/media/2YaKpvYQEcl1WuJJTl/giphy.gif)

В компьютере    ️ мы можем представить `объект` в виде шкафа с подписанными на нём именами-свойствами (`ключи доступа`). Внутри шкафа ящики - данные (конкретная информация) и даже могут быть более мелкие объекты, по аналогии вещи. По `ключу` нужный ящик легко найти, удалить или добавить (записать) в него новое `значение`.

![obj01](/img/javascript/12/01.png)

Это два 2️⃣ варианта создания пустого объекта:

```javascript
// эквивалентные записи
let obj = {}
let person = new Object()
```

Второй вариант очень редко используется в практике.

![obj00](/img/javascript/12/00.png)

## Расширенное создание

![Extended](https://media.giphy.com/media/2XflxzlJfoSDycf3BBu/giphy.gif)

Свойства можно указывать непосредственно при создании объекта, через список в фигурных скобках вида {..., `ключ : значение,` ...} и создавать сложные объекты:

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

Созданый объект содержит пять свойств с конкретными значениями, одно из которых паспортные данные, являющийся встроенным объектом. Обратите внимание, как идет обращение к дальним свойствам или методам объекта. Попробуйте вернуть номер паспорта.

## Добавление свойств

![Adding](https://media.giphy.com/media/3CZ2iGe1ByKfhZxaD7/giphy.gif)

Есть два 2️⃣ синтаксиса добавления свойств в объект. 1️⃣ Первый - точка, второй - квадратные скобки:

```javascript
// эквивалентные записи
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

Квадратные скобки используются в основном, когда `название свойства` (properties) находится в `переменной`  :

```javascript
let nameProp = 'age'
obj[nameProp] = 15
```

Здесь через переменную  `nameProp` задаем имя свойства `"age"`, являющийся ключом в ассоциативном массиве, по которому лежит `значение 15`.

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

## Доступ к свойствам

![Door](https://media.giphy.com/media/l378znZcUM7b6VDyM/giphy.gif)

Доступ к свойству осуществляется при обращении к нему  :

```jsx live
function learnJavaScript() {
  let obj = {} // объект пустой
  obj.age = 17 // эквивалент obj['age']=17 или сразу obj={age:17}

  let result1 = obj.age // Вариант 1
  let result2 = obj['age'] // Вариант 2

  return result1 + ' или ' + result2
}
```

Если у объекта `нет такого свойства`, то результат будет `'undefined'`. Проверьте это в консоле браузера.

```javascrript
let obj = {}
obj.nokey
```

![nokey](/img/javascript/15.jpg)

Никакой ошибки при обращении по несуществующему свойству не будет, просто вернется специальное значение `undefined`. При отсутствии внутри функции⚙️ ключевого 🗝️ слова `return`, так же вернется значение `undefined` - отсутствие чего-либо.

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

## Удаление свойств

![Delete](https://media.giphy.com/media/5xaOcLwEvFOizxHVyVy/giphy.gif)

Удаляет ➖ свойство оператор `delete`. Попробуйте удалить из прошлого примера номер паспорта:

Создайте в консоле объект из прошлого примера.

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

А теперь удалите вложеный объект `passport`

```javascript
delete obj.passport
```

Теперь если обратиться к нему, то в результате получим `undefined`

```javascript
obj.passport
```

![delete obj](/img/javascript/16.jpg)

## Методы объектов

![Description](https://media.giphy.com/media/3ohzAqLk7azQ0O6RvW/giphy.gif)

Как и в других языках , у объектов JavaScript есть `методы`.

Например, создадим объект `sport` сразу с методом `run`:

```jsx live
function learnJavaScript() {
  let sport = {
    run: n => 'John' + ' пробежал ' + n + ' метров!'
  }

  return sport.run(300)
}
```

### Добавление метода

![Add](https://media.giphy.com/media/5ns6077LTlGACuwRQR/giphy.gif)

Добавление метода в существющий объект - просто, присвоим функцию⚙️ `function(n) { ... }` свойству `sport.run`.

```jsx live
function learnJavaScript() {
  let sport = {}

  sport.run = n => 'Спортсмен пробежал ' + n + ' метров и это был ' + 'Nikita'

  return sport.run(350)
}
```

<!-- :::note Обратите внимание
Очень часто методы используют в своих расчетах свойства своего же объекта.
::: -->

Здесь не идет речь о классах, создании экземпляров и тому подобном. Просто - в любой объект в любое время можно добавить новый метод или удалить существующий.

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

## Перебор свойств объекта

![enumeration](https://media.giphy.com/media/h5FIFDs6rXLpWlWWZJ/giphy.gif)

Для перебора всех свойств объекта используется специальный вид конструкции `for .. in`:

```javascript
for(let key in obj) {
  // key - название свойства
  // obj[key] - значение свойства
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
    result += key + ':' + obj[key] + ' '
  }

  return result
}
```

И по секрету, если честно, практически любая переменная  является мини-объектом в среде JavaScript. Так, что не бойтесь их применять.

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Проблемы?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Пишите в [Discord](https://discord.gg/6GDAfXn) или телеграмм [чат](https://t.me/jscampapp), а также подписывайтесь на наши [новости](https://t.me/javascriptapp)

## Вопросы

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

Пустой объект создается командой:

1. `let obj = {}`
2. `function obj()`
3. `let x = 10`

Объект хранит соответствия:

1. ключ : значение
2. имя : фамилия
3. переменная = значение

Синтаксиc присвоения значения конкретному ключу (свойству):

1. `color() = "green"`
2. `obj.color = "red"`
3. `function color () => "yellow"`

Метод объекта в JavaScript - это

1. Просто функция, добавленная в ассоциативный массив
2. Внешняя функция
3. Переменная описанная вне объекта

Перебор свойств объекта

1. `for (let i = 0; i <= 100; i++) { sum += i }`
2. `for(let key in obj) { }`
3. `while (условие) { }`

Для того чтобы понять, на сколько вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме.

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Ссылки:

1. [MDN web doc. Developer.mozilla.org - Статья "Типы данных JavaScript и структуры данных"](https://developer.mozilla.org/ru/docs/Web/JavaScript/Data_structures)
2. [MDN web doc. Developer.mozilla.org - Статья "Инициализация объектов"](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Object_initialize)
3. [Статья "Object Types"](https://www.javascript.express/types/object_types)
4. [Статья "Объекты", сайт Learn.javascript.ru](https://learn.javascript.ru/object)
5. [Код для подростков: прекрасное руководство по программированию для начинающих, том 1: Javascript - Jeremy Moritz ](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)

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
