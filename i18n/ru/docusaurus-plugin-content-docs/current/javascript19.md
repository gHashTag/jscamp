---
id: javascript19
title: Методы перебора массива (map, filter, reduce)
sidebar_label: Методы перебора массива (map, filter, reduce)
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/22.jpg)

Язык  JavaScript оказывает явное предпочтение массивам перед другими структурами данных. У них много удобных специфических фишек, например, целый набор перебирающих методов: `map`, `filter`, `reduce`.

## map

![Create](https://media.giphy.com/media/ffd0F6WNcRJMQ/giphy.gif)

Метод `map()` создаёт новый   массив с результатом вызова указанной функции⚙️ для каждого элемента массива.

## Видео

<YouTube videoId="lEBJ5bqRrg8" />

### Синтаксис

![Book](https://media.giphy.com/media/s6OiiampNcye4/giphy.gif)

```javascript
let new_array = arr.map(function callback( currentValue[, index[, array]]) {
    // Возвращает элемент для new_array
}[, thisArg])
```

Метод `map` вызывает переданную функцию⚙️ `callback` один раз для каждого элемента, в порядке их появления и конструирует    новый массив из результатов её вызова. Функция⚙️ `callback` вызывается только для индексов массива, имеющих присвоенные значения, включая `undefined`. Она не вызывается для пропущенных элементов массива (то есть для индексов, которые никогда не были заданы, были удалены или им никогда не было присвоено значение).

Функция⚙️ `callback` вызывается с тремя аргументами:

- значением элемента,
- индексом элемента
- и массивом, по которому осуществляется проход.

Если в метод `map` был передан параметр `thisArg`, при вызове `callback` он будет использоваться в качестве значения `this`. В противном случае в качестве значения `this` будет использоваться значение `undefined`. В конечном итоге значение `this`, наблюдаемое из функции⚙️ `callback`, определяется согласно обычным правилам определения `this`, видимого из функции⚙️.

Метод `map` не изменяет массив, для которого он был вызван (хотя функция⚙️ может это делать!).

Диапазон элементов, обрабатываемых методом `map`, устанавливается до первого вызова функции⚙️ `callback`. Элементы, добавленные в массив после начала выполнения метода `map`, не будут посещены функцией⚙️ `callback`. Если существующие элементы массива изменяются функцией⚙️ `callback`, их значения, переданные в функцию⚙️, будут значениями на тот момент времени, когда метод `map` посетит их. Удалённые элементы посещены не будут.

### Примеры:

![Math](https://media.giphy.com/media/xT1Ra5h24Eliux3UVq/giphy.gif)

#### простой пример

У вас есть массив со множеством объектов, каждый из которых представляет отдельного человека. Тут может быть очень много данных: имя, возраст, цвет волос и любимый персонаж из кинематографа, но в данный момент всё это не требуется – вы хотите получить только массив паспортных номеров этих людей, чтобы выдать им всем пропуска на конференцию.

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

#### В определенных случаях вам может понадобится отобразить массив объектов с выбранными ключами в виде строки  :

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

#### Создание массива значений Фаренгейта из массива значений Цельсия:

![Thermometer](https://media.giphy.com/media/W23dJLsAW5knUU27Fv/giphy.gif)

Пример с обработкой каждого элемента массива заданной формулой  :

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

#### Отображение массива чисел с использованием функции, содержащей аргумент  :

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

Метод `filter()` создаёт    новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции⚙️.

Результатом работы `filter` всегда является массив. Если функция⚙️ для элемента возвращает `true`  (или любое "правдивое" значение), этот элемент попадает в результат, иначе – не попадает.

### Синтаксис

![write](https://media.giphy.com/media/6Do13TV1OfOF2/giphy.gif)

```javascript
let newArray = arr.filter(function callback(element[, index, [array]])[, thisArg])
```

### Описание

![m](https://media.giphy.com/media/DQaeCdCqhHWx3n4dvH/giphy.gif)

Метод `filter()` вызывает переданную функцию⚙️ `callback` один раз для каждого элемента, присутствующего в массиве, и конструирует новый массив со всеми значениями, для которых функция⚙️ `callback` вернула `true`  или значение, становящееся `true`  при приведении в `boolean`. Функция⚙️ `callback` вызывается только для индексов массива, имеющих присвоенные значения; она не вызывается для индексов, которые были удалены или им значения никогда не присваивались. Элементы массива, не прошедшие проверку функцией⚙️ `callback`, просто пропускаются и не включаются в    новый массив.

Функция⚙️ `callback` вызывается с тремя аргументами:

- значение элемента;
- индекс элемента;
- массив, по которому осуществляется проход.

Если в метод `filter()` был передан параметр `thisArg`, при вызове функции⚙️ он будет использоваться в качестве значения `this`. В противном случае в качестве значения `this` будет использоваться значение `undefined`. В конечном итоге значение `this`, наблюдаемое из функции⚙️, определяется согласно обычным правилам определения `this`, видимого из функции⚙️.

Метод `filter()` не изменяет массив, для которого он был вызван.

Диапазон элементов, обрабатываемых методом `filter()`, устанавливается до первого вызова функции⚙️ `callback`. Элементы, добавленные в массив после начала выполнения метода `filter()`, не будут посещены функцией⚙️ `callback`. Если существующие элементы массива изменятся, значения, переданные в функцию⚙️ `callback`, будут значениями на тот момент времени, когда метод `filter()` посетит их. Удалённые элементы посещены не будут.

### Пример

![math](https://media.giphy.com/media/3orieN7HEHI0tw8x5C/giphy.gif)

#### Отфильтровывание всех маленьких значений

Следующий пример использует `filter()` для создания отфильтрованного массива, все элементы которого больше или равны `value`, а все меньшие `value` удалены.

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

Метод `reduce` также запускается в контексте массива и вызывает функцию⚙️ для каждого элемента, но помимо этого, он аккумулирует результаты всех вызовов в одно значение. Этим поведением можно управлять.

`reduce` предназначен не для того, чтобы изменять элементы коллекции, как `map`. Его задача – подсчитать "сумму" всех элементов тем или иным способом, и вернуть ее.

Результирующим значением может быть что угодно: число, строка, объект, массив – все зависит от задачи, которую решает JavaScript разработчик.

Метод `reduce` принимает 2 параметра:

- функция, как и `map`, который будет вызван последовательно для каждого элемента коллекции;
- начальное значение аккумулятора.

В функции⚙️ тоже 2 аргумента:

- первый – это накопленное значение (аккумулятор);
- непосредственно элемент массива.

### Синтаксис

```javascript
array.reduce(function callback[, initialValue])
```

### Описание

![describe](https://media.giphy.com/media/3orieVr84udUl4wbQs/giphy.gif)

Метод `reduce()` выполняет функцию⚙️ `callback` один раз для каждого элемента, присутствующего в массиве, за исключением пустот, принимая четыре аргумента: начальное значение (или значение от предыдущего вызова `callback`), значение текущего элемента, текущий индекс и массив, по которому происходит итерация.

При первом вызове функции⚙️, параметры `accumulator` и `currentValue` могут принимать одно из двух значений. Если при вызове `reduce()` передан аргумент `initialValue`, то значение `accumulator` будет равным значению `initialValue`, а значение `currentValue` будет равным первому значению в массиве. Если аргумент `initialValue` не задан, то значение `accumulator` будет равным первому значению в массиве, а значение `currentValue` будет равным второму значению в массиве.

Если массив пустой и аргумент `initialValue` не указан, будет брошено исключение `TypeError`. Если массив состоит только из одного элемента (независимо от его положения в массиве) и аргумент `initialValue` не указан, или если аргумент `initialValue` указан, но массив пустой, то будет возвращено одно это значение, без вызова функции⚙️ `callback`.

### Начальное значение аккумулятора

![hatchng](https://media.giphy.com/media/xT1R9Qy80qNb8oQGGc/giphy.gif)

Разберемся с начальным значением. В примере оно равно `0`, так как мы считаем численное значение – сумму возрастов. На месте нуля может быть любое другое число/строка (пустая или нет)/объект/массив – любое значение, с которого вы начинаете аккумуляцию. Для примера объединим имена всех друзей в одну строчку  :

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

  const names = friends.reduce((accumulator, friend) => `${accumulator} ${friend.name}, `, 'Friends: ')

  return names
}
```

Здесь исходным значением послужила строка `"Friends:"`, к которой постепенно добавились имена всех друзей.

Если вы не указываете исходное значение явно, им неявно становится первый 1️⃣ элемент массива. В этом случае функция⚙️ для него уже не вызывается.

### Пример

#### Суммирование всех значений в массиве:

```jsx live
function learnJavaScript() {
  const initialValue = 0

  const sum = [1, 2, 3].reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  }, initialValue)

  return sum
}
```

И тоже самое в одну строчку кода:

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

Программирование на JavaScript поддерживает удобный паттерн чейнинг (`chaining`) – объединение нескольких функций⚙️ в одну цепочку с последовательной передачей результата.

Все три разобранных метода вызываются в контексте массива, а два 2️⃣ из них еще и возвращают массив. Таким образом, их очень легко объединить.

Например, посчитаем общий возраст всех мальчиков  :

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

Или соберем номера паспортов девочек, чтобы купить им билеты на самолет до Лас-Вегаса  :

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

## Заключение

С использованием этих замечательных функций⚙️ код стало читать удобнее. Итак, ниже приведен список статей, в которых более подробна рассмотрена эта тема.

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Проблемы?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Пишите в [Telegram](https://t.me/neuro_coder_group) или [ВКонтакте](https://vk.com/neurocoder), а также подписывайтесь на наши [новости](https://t.me/neuro_coder_ai)

<!-- ![JavaScript Camp](/img/bandlink.png) -->

## Вопросы:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

Функция, вызываемая для каждого элемента массива?

1. `currentValue`
2. `array`
3. `callback`

Метод, который создаёт новый массив с результатом вызова указанной функции для каждого элемента массива:

1. `map`
2. `filter`
3. `reduce`

Результирующим значением метода `reduce` может выступать:

1. Число
2. Массив
3. Что угодно

Суммирование всех значений в массиве достигается методом:

1. `map`
2. `filter`
3. `reduce`

Метод, который создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции:

1. `map`
2. `filter`
3. `reduce`

Объединение нескольких функций в одну цепочку с последовательной передачей результата:

1. unity
2. chaining
3. merger

Для того чтобы понять, на сколько вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме или в нашем [телеграм боте](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Ссылки:

1. [Упрости свой JavaScript – используй map, reduce и filter](https://proglib.io/p/javascript-map-reduce-filter)
2. [15 Полезных javascript примеров map(), reduce() и filter()](https://webdevblog.ru/15-poleznyh-javascript-primerov-map-reduce-i-filter)
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

