---
id: javascript12
title: Объекты
sidebar_label: Объекты
---

Объекты - это как шкаф для вещей, предназначеный для хранения и транспортировки других типов данных.
JavaScript спроектирован на основе простой парадигмы. В основе концепции лежат простые объекты. Объект — это набор свойств, и каждое свойство состоит из имени(ключ) и значения, ассоциированного с этим именем. Значением свойства может быть функция, которую можно назвать методом объекта или любой другой тип.

В этой статье рассмотрим самые базовые свойства объектов JavaScript, создание и изменение, перечисление свойств.

Объект в JavaScript представляет собой обычный ассоциативный массив или, иначе говоря, "хэш". Он хранит любые соответствия `"ключ : значение"` и имеет несколько стандартных методов.

Объекты в JavaScript как и объекты в реальной жизни (человек, автобус, здание и т.д.) имеют несколько именованных (ключевых) параметров (возраст, имя, цвет волос, статус) с конкреными значениями (15, John, black, 'true'):

```javascript
let obj = {
  age: 15,
  name: 'John',
  color: 'black',
  student: 'true'
}
```

`Метод объекта` в JavaScript - это просто функция(), которая добавлена в ассоциативный массив.

```jsx live
function learnJavaScript() {
  let obj = {
    // свойства : значения
    age: 15,
    name: 'John',
    // метод : функция
    say: function () {
      return 'Hello!'
    }
  }

  return obj.say()
}
```

### Создание объекта

В компьютере мы можем представить `объект` в виде шкафа с подписанными на нём именами-свойствами (`ключи доступа`). Внутри шкафа ящики - данные (конкретная информация) и даже могут быть более мелкие объекты, по аналогии вещи. По `ключу` нужный ящик легко найти, удалить или добавить (записать) в него новое `значение`.

![obj01](/img/javascript/12/01.png)

Следующие два варианта создания пустого объекта (ящика):

```javascript
// эквивалентные записи
let obj = {}
let person = new Object()
```

Второй вариант очень очень редко используется в практике.

![obj00](/img/javascript/12/00.png)

### Добавление свойств

Есть два синтаксиса добавления свойств в объект. Первый - точка, второй - квадратные скобки:

```javascript
// эквивалентные записи
obj.age = 15
obj['age'] = 15
```

Квадратные скобки используются в основном, когда `название свойства` находится в `переменной`:

```javascript
let nameProp = 'age'
obj[nameProp] = 15
```

Здесь через переменную `nameProp` задаем имя свойства `"age"`, являющийся ключом в ассоциативном массиве, по которому лежит `значение 15`.

## Доступ к свойствам

Доступ к свойству осуществляется точно так же:

```javascript
console.log(obj.age)
console.log(obj['age'])
```

Если у объекта `нет такого свойства`, то результат будет `'undefined'`

```javascript
let obj = {}
alert(obj.nokey) // => undefined
```

Никакой ошибки при обращении по несуществующему свойству не будет, просто вернется специальное значение `undefined`, как и приотсутствии внутри функции ключевого слова `return`, она так же вернет значение `undefined` - отсутствие чего-либо.

## Проверка глобальной переменной

В JavaScript нельзя проверить существование глобальной переменной простым if:

```javascript
    if (x) { ... }
```

Если x не определен, то конструкция if(x) вызовет ошибку.

Распространенное решение - использовать `typeof`:

```javascript
    if (typeof(x) != 'undefined') { ... }  // или typeof(x)
```

Однако зная, что глобальная переменная в Javascript - всего лишь свойство объекта `window` - мы можем записать проще:

```javascript
    if (window.x) { ... }   // правильный аналог if(x)
    // или
    if (window.x !== undefined) // аналог typeof x ..
```

Все свойства объектов - public (общественные), т.е при определении свойства никак нельзя ограничить доступ к свойству. В JavaScript есть специальные способы для создания `private` свойств, связанные `с замыканиями`. Они рассмотрены вместе с наследованием объектов.

### Расширенное создание

Свойства можно указывать непосредственно при создании объекта, через список в фигурных скобках вида {..., `ключ : значение,` ...} и создавать сложные объекты:

```jsx live
function learnJavaScript() {
  const obj = {
    age: 15,
    name: 'John',
    color: 'black',
    passport: {
      serial: 5721,
      numder: 258963,
      date: '27.10.2015'
    },
    student: 'true'
  }

  return obj.passport.date
}
```

Создан объект содержаний `5 свойств` с конкретными значениями, одно из которых паспортные данные, являющийся `встроенным объектом`. Обратите внимание, как идет обращение к дальним свойствам или методам объекта. Попробуйте вернуть номер паспорта.

### Удаление свойств

Удаляет свойство оператор `delete`:

```javascript
obj.age = 16
delete obj.age
```

## Методы объектов

### Описание метода

Как и в других языках, у объектов JavaScript есть `методы`.

Например, создадим объект sport сразу с `методом run`:

```jsx live
function learnJavaScript() {
  let sport = {
    name: 'John',
    run: function (n) {
      return this.name + ' пробежал ' + n + ' метров!'
    }
  }

  return sport.run(300)
}
```

### Добавление метода

Добавление метода в существющий объект - просто, присвоим функцию `function(n) { ... }` свойству `sport.run`.

```jsx live
function learnJavaScript() {
  let sport = {
    name: 'Nikita'
  }

  sport.run = function (n) {
    return 'Спортсмен пробежал ' + n + ' метров и это был ' + this.name
  }

  return sport.run(350)
}
```

:::note Обратите внимание
Очень часто методы используют в своих расчетах свойства своего же объекта.
:::

Здесь не идет речь о классах, создании экземпляров и тому подобном. Просто - в любой объект в `любое время` можно `добавить новый метод` или `удалить` существующий.

```jsx live
function learnJavaScript() {
  let sport = {
    name: 'Nikita',
    age: 18
  }

  sport.run = function (n, str) {
    if (str == 'men') return 'Спортсмен пробежал ' + n + ' метров и это был ' + this.name
    if (str == 'women') return 'Спортсменка пробежала ' + n + ' метров и это была ' + this.name
    if (str != 'men' || str != 'women') return 'Человек пробежал ' + n + ' метров.'
  }

  return sport.run(350, 'women')
}
```

Подумайте, чем можно заменить множественный `if()`. JavaScript - очень динамический язык.

## Перебор свойств объекта

Для перебора всех свойств объекта используется специальный вид конструкции `for .. in`:

```javascript
for(let key in obj) {
  // key - название свойства
  // obj[key] - значение свойства
  ...
}
```

Например,

```jsx live
function learnJavaScript() {
  let result = ''

  const obj = {
    age: 15,
    b: 'true',
    color: 'red'
  }

  for (let key in obj) {
    result += key + ':' + obj[key] + '; '
  }

  return result
}
```

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

И по секрету, если честно, практически любая переменная является мини-объектом в среде JavaScript. Так, что не бойтесь их применять.

## Вопросы

1. Пустой объект создается командой:

- let obj = {}
- function obj()
- let x=10

2. Объект хранит соответствия:

- ключ : значение
- имя : фамилия
- переменная = значение

3. Синтаксим присоения значения конкретному ключу (свойству):

- color() = "green"
- obj.color = "red"
- function color () => "yellow"

4. Метод объекта в JavaScript - это

- просто функция(), добавленная в ассоциативный массив
- внешняя функция()
- переменная описанная вне объекта

5. Перебор свойств объекта

- for (let i = 0; i <= 100; i++) { sum += i }
- for(let key in obj) { }
- while (условие) { }

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
    <td align="center"><a href="https://github.com/KoDim-React"><img src="https://avatars1.githubusercontent.com/u/72087863?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy K.</b></sub></a><br /><a href="#mentoring-KoDim-React" title="Mentoring">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![Become a Patron!](/img/logo/patreon.png)](https://www.patreon.com/bePatron?u=31769291)

<!--
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
