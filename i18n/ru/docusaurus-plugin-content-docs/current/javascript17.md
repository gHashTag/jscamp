---
id: javascript17
title: Массивы
sidebar_label: Массивы
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/18.jpg)

Для хранения  упорядоченных коллекций существует особая структура данных, которая называется массив `Array`.

![Storage](https://media.giphy.com/media/3orif6FORJ98Z11xzq/giphy.gif)

`Массив` - упорядоченная коллекция данных, в которой присутствуют 1-й, 2-й, 3-й элементы и т.д. Например, она понадобится нам для хранения  списка чего-либо: пользователей, товаров, элементов сайта и т.д.

## Видео

<YouTube videoId="4NS5yxWNulQ" />

## Создание

![create](https://media.giphy.com/media/3oEduXdm2gjnrsJBOo/giphy.gif)

Существует два 2️⃣ варианта для создания пустого массива:

```javascript
let arr = new Array(5)
// new Array(5) - создаёт массив без элементов (к которым просто так нельзя обратится), но с заданной длиной.
let arr = []
```

Практически всегда используется второй вариант 2️⃣ синтаксиса  . В скобках мы можем указать начальные значения элементов:

```jsx live
function learnJavaScript() {
  let fruits = ['Яблоко', 'Апельсин', 'Слива']

  return fruits.toString()
}
```

Элементы массива нумеруются, начиная с нуля 0️⃣ .

Мы можем получить элемент, указав его номер в квадратных скобках  :

```jsx live
function learnJavaScript() {
  let fruits = ['Яблоко', 'Апельсин', 'Слива']

  return fruits[0]
}
```

Мы можем заменить  элемент:

```javascript
fruits[2] = 'Груша' // теперь ["Яблоко", "Апельсин", "Груша"]
```

…Или добавить    новый к существующему массиву  :

```jsx live
function learnJavaScript() {
  let fruits = ['Яблоко ', 'Апельсин ', 'Слива ']
  fruits[2] = 'Груша '
  fruits[3] = 'Лимон ' // теперь ["Яблоко", "Апельсин", "Груша", "Лимон"]

  return fruits
}
```

## length

Общее число элементов массива содержится в его свойстве `.length`:

```jsx live
function learnJavaScript() {
  let fruits = ['Яблоко', 'Апельсин', 'Слива']

  return fruits.length
}
```

Свойство `length` автоматически обновляется при изменении массива. Если быть точными, это не количество элементов массива, а наибольший цифровой индекс плюс один.

![Update](https://media.giphy.com/media/FP47IFqWyXfdKYU6VG/giphy.gif)

Например, единственный реальный элемент, имеющий большой индекс, даёт наибольшую возможную длину массиву  :

```jsx live
function learnJavaScript() {
  let fruits = []
  fruits[155] = 'Яблоко'

  return fruits.length // 156
}
```

Обратите внимание, что обычно мы не используем массивы таким образом.

Ещё один интересный факт о свойстве `length` – его можно перезаписать.

Если мы вручную увеличим ➕ его, ничего интересного не произойдёт. Зато, если мы уменьшим➖ его, массив станет короче. Этот процесс необратим, как мы можем понять из примера  :

```jsx live
function learnJavaScript() {
  let arr = [1, 2, 3, 4, 5]

  arr.length = 2 // укорачиваем до двух элементов
  //console.log( arr )  // [1, 2]

  arr.length = 5 // возвращаем length как было
  //console.log( arr[3] )  // undefined: значения не восстановились!

  return 'Реальный массив укоротился:' + arr
}
```

Таким образом, самый простой способ очистить массив – это `arr.length = 0` .

## Типы элементов

![Storage](https://media.giphy.com/media/2sYaePC3iVWYBNxaVj/giphy.gif)

В массиве могут храниться  элементы любого типа - число, булевое значение, строки, объекты или целые функции⚙️:

Например  :

```jsx live
function learnJavaScript() {
  let arr = [
    'Яблоко',
    { name: 'Никита' },
    true,
    function () {
      return 'Привет'
    }
  ]
  // получить элемент с индексом 1 {объект} и затем считать его свойство
  let x = arr[1].name // имя Никита
  // получить элемент с индексом 3 (функция) и выполнить её
  let result1 = arr[3] // Сама функция
  let result2 = arr[3]() // 'Привет'

  return 'Значение 4-го элемента с 3-м индексом: ' + result2
  // + '. Сама функция: ' + result1
}
```

Обратите внимание `result1 = arr[3]` содержить текст  функции⚙️, а `result2 = arr[3]()` результат выполненной функции⚙️ - `()` мы её запускаем.

## Методы `push/pop`

![binarycode](https://media.giphy.com/media/fV0oSDsZ4UgdW/giphy.gif)

`Стек` - вариант применения массивов как структуры данных.

Она поддерживает два 2️⃣ вида операций:

- `push` добавляет ➕ элемент в конец.

![Add](https://media.giphy.com/media/Yqo5mjWTLGlVOIP8Dc/giphy.gif)

- `pop` удаляет ➖ последний элемент.

![Delete](https://media.giphy.com/media/VD4Bt6FyYWcWj0LzDK/giphy.gif)

Таким образом, новые элементы всегда добавляются или удаляются из "конца".

Примером стека обычно служит пирамидка: новые кольца кладутся наверх и берутся тоже сверху.

`Очередь` – один из самых распространённых вариантов применения массива. В области компьютерных    ️ наук так называется упорядоченная коллекция элементов

## Методы работы с концом массива:

### push

![Add to](https://media.giphy.com/media/21ODeWspDCgZNAoCIp/giphy.gif)

Добавляет ➕ элемент в конец массива  :

```jsx live
function learnJavaScript() {
  let fruits = [' Яблоко', ' Апельсин']

  fruits.push(' Груша')

  return 'Массив: ' + fruits // Яблоко, Апельсин, Груша
}
```

### pop

![Delete](https://media.giphy.com/media/26ybwwiZmci3DJdYs/giphy.gif)

Удаляет ➖ последний элемент из массива и возвращает его  :

```jsx live
function learnJavaScript() {
  let fruits = [' Яблоко', ' Апельсин', ' Груша']

  let delFruits = fruits.pop() // удаляем "Груша" и возвращаем его в переменную delFruits

  return 'Удален элемент = ' + delFruits + '. Остался массив: ' + fruits // Яблоко, Апельсин
}
```

## Методы работы с началом массива:

![start](https://media.giphy.com/media/QJvwBSGaoc4eI/giphy.gif)

### shift

Удаляет ➖ из массива первый и возвращает его:

![delete](https://media.giphy.com/media/4Z1XJumqDgvI9b1VZJ/giphy.gif)

```jsx live
function learnJavaScript() {
  let fruits = ['Яблоко ', 'Апельсин ', 'Груша ']
  fruits.shift() // удаляем Яблоко

  return fruits
}
```

### unshift

Добавляет ➕ элемент в начало массива:

![Plus](https://media.giphy.com/media/LgC9OQ53v5mFi/giphy.gif)

```jsx live
function learnJavaScript() {
  let fruits = ['Яблоко ', 'Апельсин ', 'Груша ']
  fruits.unshift('Абрикос ')

  return fruits
}
```

Методы `push` и `unshift` могут добавлять ➕ сразу несколько элементов  :

```jsx live
function learnJavaScript() {
  let fruits = ['Яблоко']

  fruits.push('Апельсин', 'Груша')
  fruits.unshift('Ананас', 'Лимон')

  return 'В массиве ' + fruits.length + ' элементов. ' + ' Массив: ' + fruits // ["Ананас", "Лимон", "Яблоко", "Апельсин", "Груша"]
}
```

## Внутреннее устройство массива

![cupboard](https://media.giphy.com/media/b90TnygrKqYqk/giphy.gif)

Массив – это особый подвид объектов. Квадратные скобки, используемые для того, чтобы получить доступ к свойству `arr[0]` – это по сути обычный синтаксис   доступа по ключу, как `obj[key],` где в роли `obj` у нас `arr`, а в качестве ключа – числовой индекс.

Массивы расширяют объекты, так как предусматривают специальные методы для работы с упорядоченными коллекциями данных, а также свойство `length.` Но в основе всё равно лежит объект.

Следует помнить, что в JavaScript массив является объектом и, следовательно, ведёт себя как объект.

Например, массив копируется по ссылке  :

```jsx live
function learnJavaScript() {
  let fruits = [' Лимон']

  let copy = fruits // копируется по ссылке (две переменные ссылаются на один и тот же массив)

  copy.push(' Груша') // массивы меняются по ссылке одной командой

  return '1 массив: ' + fruits + ' 2 массив: ' + copy // Лимон, Груша - теперь два элемента
}
```

Что действительно делает массивы особенными – это их внутреннее представление. Движок JavaScript старается хранить элементы массива в непрерывной области памяти, один за другим. Существуют и другие способы оптимизации, благодаря которым массивы работают очень быстро.

Но все они утратят эффективность, если мы перестанем работать с массивом как с "упорядоченной коллекцией данных" и начнём использовать его как обычный объект.

Например, технически мы можем сделать следующее:

```javascript
let fruits = [] // создаём пустой массив

fruits[99999] = 5 // создаём свойство с избыточным индексом, намного превышающим необходимую длину массива

fruits.age = 25 // создаём свойство с произвольным именем
```

Это возможно, потому что в основе массива лежит объект. Мы можем присвоить ему любые свойства.

:::note Варианты неправильного применения массива!

- Добавление нечислового свойства (индекса test), например: arr.test = 5
- Создание «дыр», например: добавление arr[0], затем arr[1000] (между ними ничего нет)
- Заполнение массива в обратном порядке, например: arr[1000], arr[999] и т.д.

:::

Массив следует считать особой структурой, позволяющей работать с упорядоченными данными. Если вам нужны произвольные ключи, вполне возможно, лучше подойдёт обычный объект {}.

## Эффективность

![Fast](https://media.giphy.com/media/3oriNYQX2lC6dfW2Ji/giphy.gif)

Методы `push/pop` выполняются быстро, а методы `shift/unshift` – медленно.

Почему работать с концом массива быстрее, чем с его началом? Давайте посмотрим, что происходит во время выполнения:

```javascript
fruits.shift() // удаляем первый элемент с начала
```

Просто взять и удалить элемент с номером 0 недостаточно. Нужно также заново пронумеровать остальные элементы.

Операция `shift` должна выполнить 3 действия:

- Удалить элемент с индексом 0

![Delete](https://media.giphy.com/media/VIzs0jgs8KmgVeTknN/giphy.gif)

- Сдвинуть все элементы влево, заново пронумеровать их, заменив `1` на `0`, `2` на `1` и т.д.

![Move](https://media.giphy.com/media/jSQcEjcwG53WooptHz/giphy.gif)

- Обновить свойство `length`

Чем больше элементов содержит массив, тем больше времени потребуется для того, чтобы их переместить, больше операций с памятью.

А что же с удалением `pop`? Ему не нужно ничего перемещать. Чтобы удалить элемент в конце массива, метод `pop` очищает индекс и уменьшает значение `length`. Остальные элементы остаются с теми же индексами.

```javascript
fruits.pop() // удаляем один элемент с конца
```

Метод `pop` не требует перемещения. Именно поэтому он выполняется очень быстро.

Аналогично работает метод `push`.

## Перебор элементов

![Object](https://media.giphy.com/media/26gs9kSN6d5PxSsQU/giphy.gif)

Одним из самых старых способов перебора элементов массива является цикл `for( )` по цифровым индексам  :

```jsx live
// prettier-ignore
function learnJavaScript() {
  let result = ''
  let arr = ['Яблоко', 'Апельсин', 'Киви']
  
  for (let i = 0; i < arr.length; i++) // проходит по элементам через for( )
  result += arr[i] + ' '

  return result // Яблоко, Апельсин, Киви
}
```

Но для массивов возможен и другой вариант цикла, `for..of`  :

```jsx live
function learnJavaScript() {
  let result = ''
  let fruits = ['Яблоко', 'Апельсин', 'Слива']

  for (let fruit of fruits) {
    // проходит по значениям через `for..of`
    result += fruit + ' '
  }
  return result // Яблоко, Апельсин, Слива
}
```

Цикл `for..of` не предоставляет доступа к номеру текущего элемента, только к его значению, но в большинстве случаев этого более чем достаточно, а также это короче.

<!-- ## Псевдомассивы

![Spiderman](https://media.giphy.com/media/l36kU80xPf0ojG0Erg/giphy.gif)

В браузере и других программных средах также существуют так называемые "псевдомассивы" – объекты, которые выглядят, как массив. То есть, у них есть свойство `length` и индексы, но они также могут иметь дополнительные нечисловые свойства и методы, которые нам обычно не нужны. Тем не менее, цикл `for..in` выведет и их. Поэтому, если нам приходится иметь дело с объектами, похожими на массив, такие "лишние" свойства могут стать проблемой.

Технически, так как массив является объектом, можно использовать и вариант `for..in` для правильного массива  :

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

## Многомерные массивы

![Matryoschka](https://media.giphy.com/media/XuPaGVKyJ6eyI/giphy.gif)

Массивы могут содержать элементы, которые тоже являются массивами. Это можно использовать для создания многомерных массивов, например, для хранения  матриц:

```jsx live
function learnJavaScript() {
  let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]

  return matrix[1][1] // 5, центральный элемент
}
```

## Итого

![remember](https://media.giphy.com/media/l4pTfqyI6TCjUW4Yo/giphy.gif)

Массив – это особый тип объекта, предназначенный для работы с упорядоченным набором элементов.

Объявление:

```javascript
// квадратные скобки (обычно)
let arr = [item1, item2...]

// new Array (очень редко)
let arr = new Array(item1, item2...)
```

Вызов `new Array(number)` создаёт массив с заданной длиной, но без элементов.

Свойство `length` отражает длину массива.

Мы можем использовать массив как двустороннюю очередь, используя следующие операции:

- `push(...items)` добавляет ➕ items в конец массива.
- `pop()` удаляет ➖элемент в конце массива и возвращает его.
- `shift()` удаляет ➖ элемент в начале массива и возвращает его.
- `unshift(...items)` добавляет ➕ items в начало массива.

Чтобы перебрать элементы массива:

- `for (let i=0 i<arr.length i++)` – работает быстрее всего, совместим со старыми браузерами.
- `for (let item of arr)` – современный синтаксис   только для значений элементов (к индексам нет доступа).
- `for (let i in arr)` – никогда не используйте для массивов!

## React Native
React Native предоставляет набор компонентов для представления списков данных. Как правило, вам нужно использовать либо `FlatList`, либо `SectionList`. Детальней с ними мы познакомимся позже, главное сейчас вам понять, что на вход они принимают массив, который рендерит на экране.

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


[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Проблемы?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Пишите в [Discord](https://discord.gg/6GDAfXn) или телеграмм [чат](https://t.me/jscampapp), а также подписывайтесь на наши [новости](https://t.me/javascriptapp)

![JavaScript Camp](/img/bandlink.png)

## Вопросы

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

Массив – это ...

1. Подвид объектов с "упорядоченной коллекцией данных"
2. Внутренная функция
3. Подвид объектов с "не упорядоченной коллекцией данных"

Пустой массив создается:

1. `let arr2 = { }`
2. `let arr1 = [ ]`
3. `let arr3 = ( )`

Длину массива можно определить свойством:

1. `pop`
2. `push`
3. `length`

В массиве могут храниться элементы:

1. Любого типа
2. Числовые
3. Строковые

Добавление элемента в конце массива:

1. `push`
2. `pop`
3. `shift`

Удаление элемента в начале массива:

1. `pop`
2. `shift`
3. `unshift`

\_\_\_\_ в массиве - это число, представляющее позицию любого заданного элемента в массиве.

1. индекс
2. длина
3. функция

Какое значение следует поместить в квадратные скобки, чтобы получить первый элемент в массиве? \n `myArray[]`

1. `0`
2. `1`
3. `2`

Использование метода `.pop()` для массива будет \_\_\_ и \_\_\_ последний элемент массива.

1. "удалять / возвращать"
2. "возвращать / удалять"

Для того чтобы понять, на сколько вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме или в нашем [телеграм боте](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Ссылки

1. [Статья "Массивы"](https://learn.javascript.ru/array)
2. [MDN web doc. Статья "Массивы"](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array)
3. [Статья "JavaScript массивы"](https://basicweb.ru/javascript/js_array.php)
4. [Код для подростков: прекрасное руководство по программированию для начинающих, том 1: Javascript - Jeremy Moritz ](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)

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
