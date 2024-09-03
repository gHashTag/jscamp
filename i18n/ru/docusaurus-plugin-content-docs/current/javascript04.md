---
id: javascript04
title: Типы данных
sidebar_label: Типы данных
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/04.jpg)

## Динамическая типизация

JavaScript является слабо типизированным или динамическим языком. Это значит, что вам не нужно определять тип переменной  заранее.

![Dinamics](https://media.giphy.com/media/26uf759LlDftqZNVm/giphy.gif)

Тип определится автоматически во время выполнения программы. Также это значит, что вы можете использовать одну переменную  для хранения  данных различных типов  :

```jsx live
function learnJavaScript() {
  let foo = 42 // сейчас foo типа number
  foo = 'bar' // а теперь foo типа string
  return typeof foo
}
```

## Видео

<YouTube videoId="1zXZCVbNbkQ" />

## typeof

Для того чтобы понять тип данных содержащийся в переменной, используется оператор `typeof`. Оператор `typeof` возвращает тип аргумента.
У него есть два синтаксиса: со скобками и без:

- Синтаксис оператора: `typeof x`

- Синтаксис функции: `typeof(x)`

Работают они одинаково, но первый синтаксис короче.

Результатом `typeof` является строка, содержащая тип.

```jsx live
function learnJavaScript() {
  let num = 9
  return typeof num
}
```

## Типы данных

![Data types](https://media.giphy.com/media/NPXkCN2FutVO1Nt4P9/giphy.gif)

Стандарт JavaScript определяет 9 типов данных. Познакомьтесь с каждым из них делая вывод в консоль и после я расскажу  о каждом из них подробнее.

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

## Объекты

![cupboard](https://media.giphy.com/media/l2Sq0NFJlJC5Dqb7y/giphy.gif)

В компьютерной терминологии, тип объект `object` — это значение в памяти, на которое возможно сослаться с помощью идентификатора. В JavaScript объект может расцениваться как набор свойств. Это как шкаф 🗄️ для хранения  других типов данных.

## Функции

![Function](https://media.giphy.com/media/FuSJ5C7SSHlZCxjC6q/giphy.gif)

Функции⚙️ `function` — это обычные объекты, имеющие дополнительную возможность быть вызванными для исполнения.

## Примитивные значения

![Primitive](https://media.giphy.com/media/rBdWc61BPFVYc/giphy.gif)

Все типы данных в JavaScript, кроме объектов, являются иммутабельными (значения не могут быть модифицированы, а только перезаписаны новым полным значением). Например, в отличии от языка  C, где строку можно посимвольно корректировать, в JavaScript строки пересоздаются только полностью. Значения таких типов называются "примитивными значениями".

## Текстовые строки

![text](https://media.giphy.com/media/26n6AaCcCajAyZx04/giphy.gif)

В JavaScript для представления текстовых  данных служит тип `string`.

## Числа

![Numbers](https://media.giphy.com/media/xT5LMMneIRG1UJquOI/giphy.gif)

Числовой тип данных `number` представляет как целочисленные значения, так и числа с плавающей точкой.

## BigInt

![giant](https://media.giphy.com/media/LZGipmRpX6uwE/giphy.gif)

В JavaScript тип `number` не может содержать числа больше, чем (253-1) (т. е. 9007199254740991), или меньше, чем -(253-1) для отрицательных чисел. Это техническое ограничение вызвано их внутренним представлением.

Для большинства случаев этого достаточно. Но иногда нам нужны действительно гигантские числа, например, в криптографии или при использовании метки времени ("timestamp") с микросекундами.

Тип `bigInt` был добавлен в JavaScript, чтобы дать возможность работать с целыми числами произвольной длины.

## Булевый тип данных

Булевый тип `boolean` представляет логическую сущность и имеет два 2️⃣ значения: `true`  (истина)

![true](https://media.giphy.com/media/ap6wcjRyi8HoA/giphy.gif)

и `false`  (ложь).

![False](https://media.giphy.com/media/HNOVuT5AvCK1fgvp1m/giphy.gif)

Такой тип, как правило, используется для хранения  значений да/нет: true  значит «да, правильно», а false  значит «нет, не правильно».

## Null

![Null](https://media.giphy.com/media/26hkhPJ5hmdD87HYA/giphy.gif)

Этот тип данных имеет всего одно значение: `null`. Это значение, специально обозначенное как примитив, так как по поведению это в самом деле видимый примитив. Но при этом от `null` унаследованы все остальные Объекты, поэтому, несмотря на то, что `null` возвращает примитивное значение, его тип это объект.
Например можно присвоить его значению по умолчанию.

## Undefined

![Unndefined](https://media.giphy.com/media/PkKzNQjwPy7GvxZbfe/giphy.gif)

Переменная  , которой не было присвоено значение, будет иметь значение `undefined`.

### Отличия между null и undefined

![Spiderman](https://media.giphy.com/media/l36kU80xPf0ojG0Erg/giphy.gif)

`null` является определенным значением отсутствия объекта, тогда как `undefined` обозначает неопределенность. Например вы можете это проверить в консоле браузера:

```javascript
let TestVar
console.log(TestVar) // undefined
console.log(typeof TestVar) // undefined
```

`null` - это значение присваивания. Он может быть присвоен переменной  как представление без значения:

```javascript
let TestVar = null
console.log(TestVar) // null
console.log(typeof TestVar) // object
```

Из предыдущих примеров ясно, что `undefined` и `null` - это два 2️⃣ различных типа: `undefined` - это сам тип (неопределенный), а `null` - объект.

```javascript
null === undefined // false
null == undefined // true
null === null // true
```

## Тип данных Символ (Symbol)

![Symbol](https://media.giphy.com/media/QvSGhHq8CrVzq/giphy.gif)

Тип символ `Symbol` — это уникальное и иммутабельное примитивное значение, которое может быть использовано как ключ для свойства объекта. Этот тип на столько редко используется в реальной работе, что мы даже не будем рассматривать его в рамках этого курса.

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)


## Проблемы?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Пишите в [Discord](https://discord.gg/6GDAfXn) или телеграмм [чат](https://t.me/jscampapp), а также подписывайтесь на наши [новости](https://t.me/javascriptapp)

![JavaScript Camp](/img/bandlink.png)

## Вопросы:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

Для чего используется оператор `typeof`?

1. Для определения типа данных
2. Для вывода типа данных в консоль
3. Для ввода новой переменной

Сколько типов данных определяет стандарт JavaScript?

1. `7`
2. `9`
3. `5`

В каком типе данных содержится набор свойств?

1. `function`
2. `string`
3. `object`

Можно ли в JavaScript корректировать строку посимвольно?

1. Да
2. Возможно в особых случаях
3. Нет, строки пересоздаются только полностью

Какой тип данных даёт возможность работать с целыми числами произвольной длины?

1. `number`
2. `string`
3. `bigInt`

Какое из значений не имеет булевый тип `boolean`?

1. `false`
2. `null`
3. `true`

Какой из типов данных имеет значение, которое может быть использовано как ключ для свойства объекта?

1. `undefined`
2. `symbol`
3. `null`

Каков тип данных переменной `whatTypeAmI` после выполнения этого оператора? \n `let whatTypeAmI = 5`

1. `integer`
2. `number`
3. `string`

Какой тип данных, возможно, является наиболее часто используемым типом данных в JavaScript?

1. `integer`
2. `number`
3. `string`

Как называется примитивный тип данных, который означает, что никакое другое значение не было присвоено?

1. `undefined`
2. `symbol`
3. `null`

Как называется примитивный тип данных, который в основном ничего не означает (не ноль, не пустая строка, не неопределенный, не ложный и т.д.)?

1. `undefined`
2. `boolean`
3. `null`

Сколько возможных значений для нулевого типа данных?

1. `1 возможное значение (null)`
2. `2 возможных значения (null, undefined)`

Каково значение `myMessage` после этой строки? \n `let myMessage`

1. `undefined`
2. `SyntaxError`
3. `null`

Для того чтобы понять, на сколько вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме или в нашем [телеграм боте](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Ссылки:

1. [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Data_structures)
2. [Код для подростков: прекрасное руководство по программированию для начинающих, том 1: Javascript - Jeremy Moritz ](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)
3. [JavaScript.ru](https://learn.javascript.ru/types)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">  </a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>
  
</table>


