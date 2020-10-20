---
id: javascript04
title: Типы данных
sidebar_label: Типы данных
---

## Динамическая типизация

JavaScript является слабо типизированным или динамическим языком. Это значит, что вам не нужно определять тип переменной заранее. Тип определится автоматически во время выполнения программы. Также это значит, что вы можете использовать одну переменную для хранения данных различных типов:

```jsx live
function learnJavaScript() {
  let foo = 42 // сейчас foo типа number
  foo = 'bar' // а теперь foo типа string
  return <h2>{typeof foo}</h2>
}
```

## Типы данных

Стандарт JavaScript определяет 9 типов данных. Познакомтесь с каждым из них делая вывод в консоль и после я расскажу о каждом из них подробнее.

```javascript
let one = { firstName: 'John', lastName: 'Smith' } // object

let two = () => {} // function

let three 'bar' // string

let four = 42 // number

let five = 19241924124n // bigint

let six = true // boolean

let seven = null // null

let eight // undefined

let nine = Symbol() // symbol
```

## Объекты

В компьютерной терминологии, тип объект `object` — это значение в памяти, на которое возможно сослаться с помощью идентификатора. В JavaScript объект может расцениваться как набор свойств. Это как шкаф для хранения других типов данных.

## Функции

Функции `function` — это обычные объекты, имеющие дополнительную возможность быть вызванными для исполнения.

## Примитивные значения

Все типы данных в JavaScript, кроме объектов, являются иммутабельными (значения не могут быть модифицированы, а только перезаписаны новым полным значением). Например, в отличии от языка C, где строку можно посимвольно корректировать, в JavaScript строки пересоздаются только полностью. Значения таких типов называются "примитивными значениями".

## Текстовые строки

В JavaScript для представления текстовых данных служит тип `string`.

## Числа

Числовой тип данных `number` представляет как целочисленные значения, так и числа с плавающей точкой.

## BigInt

В JavaScript тип `number` не может содержать числа больше, чем (253-1) (т. е. 9007199254740991), или меньше, чем -(253-1) для отрицательных чисел. Это техническое ограничение вызвано их внутренним представлением.

Для большинства случаев этого достаточно. Но иногда нам нужны действительно гигантские числа, например, в криптографии или при использовании метки времени ("timestamp") с микросекундами.

Тип `bigInt` был добавлен в JavaScript, чтобы дать возможность работать с целыми числами произвольной длины.

## Булевый тип данных

Булевый тип `boolean` представляет логическую сущность и имеет два значения: `true` (истина) и `false` (ложь). Такой тип, как правило, используется для хранения значений да/нет: true значит «да, правильно», а false значит «нет, не правильно».

## Null

Этот тип данных имеет всего одно значение: `null`. Это значение, специально обозначенное как примитив, так как по поведению это в самом деле видимый примитив. Но при этом от `null` унаследованы все остальные Объекты, поэтому, несмотря на то, что `null` возвращает примитивное значение, его тип это объект.
Например можно присвоить его значению по умолчанию.

## Undefined

Переменная, которой не было присвоено значение, будет иметь значение `undefined`.

## Тип данных Символ (Symbol)

Тип символ `Symbol` — это уникальное и иммутабельное примитивное значение, которое может быть использовано как ключ для свойства объекта.

## Вопросы:

Для того чтобы понять, на сколько вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме.

![Sumerian school](/img/app.png)

Для чего используется оператор `typeof`?

1. Для определения типа данных

2. Для вывода типа данных в консоль

3. Для ввода новой переменной

Сколько типов данных определяет стандарт JavaScript?

1. 42

2. 9

3. 5

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

2. `srting`

3. `bigint`

Какое из значений не имеет булевый тип `boolean`?

1. `false`

2. `null`

3. `true`

Какой из типов данных имеет значение, которое может быть использовано как ключ для свойства объекта?

1. `undefined`

2. `symbol`

3. `null`

## Ссылки:

1. [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Data_structures)
2. [Код для подростков: прекрасное руководство по программированию для начинающих, том 1: Javascript - Jeremy Moritz ](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)
3. [JavaScript.ru](https://learn.javascript.ru/types)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">📖</a></td>
  </tr>
</table>

[![Become a Patron!](/img/logo/patreon.png)](https://www.patreon.com/bePatron?u=31769291)