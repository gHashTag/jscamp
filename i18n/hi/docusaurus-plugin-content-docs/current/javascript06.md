---
id: javascript06
title: Строки
sidebar_label: Строки
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/06.jpg)

В JavaScript любые текстовые  данные являются строками. Однако, не забывайте, что в строке могут быть записаны и числа. Пожалуй, из всех типов данных строками вы будете пользоваться наиболее часто. Разберем все варианты создания новой строки.

## Видео

<YouTube videoId="ocQTm9K2vdo" />

## Одинарные или двойные кавычки

![quotation marks](https://media.giphy.com/media/7cSTvZ4hI6ABZkcTwk/giphy.gif)

Для создания строки используются либо ‘одинарные’, либо “двойные” кавычки.

```jsx
let single = 'Hello World'
let double = "Hello World" // prettier-ignore
```

Можно пользоваться и теми, и другими, главное, если вы начинаете строку одинарной, хотя внутри могут быть двойные, завершить ее надлежит также одинарной. И, соответственно, с двойными кавычками.

```jsx
let double = "Don't you think so, d'Artagnan?"
let single = '"I think so, indeed!" - cried he.'
```

## Обратный слэш

![shielding](https://media.giphy.com/media/3og0IPizf4zPR6VMt2/giphy.gif)

Если внутри строки используются те же кавычки, что стоят и снаружи, то их нужно экранировать при помощи обратного слэша - так называемого «символа экранирования». Он добавляется ➕ перед входящей в строку кавычкой `\'`, чтобы она не обозначала окончание строки.

```jsx live
// prettier-ignore
function learnJavaScript() {
  let backticks = 'It\'s not complicated'
  return backticks
}
```

Заметим, что обратный слеш `\` служит лишь для корректного прочтения строки интерпретатором, но он не записывается  в строку после её прочтения. Когда строка сохраняется в оперативную память, в неё не добавляется ➕ символ `\`. Вы можете явно увидеть это в выводах.

## Обратные кавычки

![Dollar](https://media.giphy.com/media/26BoCwvDEWXnGlLyM/giphy.gif)

В написании строки можно обойтись и без обратного слэша, если использовать \`обратные\` кавычки.

Одинарные и двойные кавычки работают, по сути, одинаково, а если использовать обратные кавычки, то в такую строку мы сможем вставлять произвольные JavaScript выражения, обернув их в символ доллара с фигурными скобками `${…}`  :

```jsx live
function learnJavaScript() {
  const sum = (a, b) => a + b // это функция, с ней мы познакомимся далее по курсу
  return `1 + 2 = ${sum(1, 2)}`
}
```

Еще одно преимущество обратных кавычек – они могут занимать более одной строки.

```jsx live
function learnJavaScript() {
  let guestList = `Guests:
    * John
    * Pete
    * Mary
   `
  return guestList
}
```

Многострочные строки также можно создавать с помощью одинарных и двойных кавычек, используя так называемый «символ перевода строки», который записывается как `\n`. Все спецсимволы, в Java Script, начинаются с обратного слеша `\` Правда проверить мы это можем в консоле браузера(`LIVE EDITOR` отображает не корректно).

```jsx
let guestList = 'Guests:\n * John\n * Pete\n * Mary'

guestList // список гостей, состоящий из нескольких строк
```

![console](/img/javascript/12.png)

## Строки неизменяемы

![Tree](https://media.giphy.com/media/YxlUxrYGw2w9y/giphy.gif)

Содержимое строки в JavaScript нельзя изменить. Нельзя взять символ посередине и заменить его. Как только строка создана — она такая навсегда.
Можно создать новую строку и записать её в ту же самую переменную вместо старой.

```jsx live
function learnJavaScript() {
  let str = 'Hi'
  str = 'P' + str[1] // заменяем строку
  return str
}
```

## Популярные методы строк

### Длина строки

![Length](https://media.giphy.com/media/Y1GK5MEiRa3OSVsxHK/giphy.gif)

Свойство `length` возвращает количество кодовых значений в строке.

```jsx live
function learnJavaScript() {
  let str = 'My\n'.length
  return str
}
```

Обратите внимание, `\n` — это один спецсимвол, поэтому здесь всё правильно: длина строки 3.

### Доступ к символам

![Door](https://media.giphy.com/media/xUA7aLpVxPVEoEPXji/giphy.gif)

Существует два 2️⃣ способа добраться до конкретного символа в строке. В первом способе используется метод `charAt()`. Первый 1️⃣ символ занимает нулевую позицию:

```jsx live
function learnJavaScript() {
  let str = 'cat'.charAt(2)
  return str
}
```

Получить символ также можно с помощью квадратных скобок:

```jsx live
function learnJavaScript() {
  let str = 'cat'[2]
  return str
}
```

Квадратные скобки — современный способ получить символ, в то время как `charAt` существует в основном по историческим причинам.

### Изменение регистра символов

![Capital letter](https://media.giphy.com/media/3orifcBbnezczHmU8g/giphy.gif)

Чтобы преобразовать буквы строки в заглавные, используйте метод `toUpperCase()`.

```jsx live
function learnJavaScript() {
  let str = 'Interface'.toUpperCase()
  return str
}
```

в строчные `toLowerCase()`

```jsx live
function learnJavaScript() {
  let str = 'Interface'.toLowerCase()
  return str
}
```

### Конкатенaция(сцепление) строки

![Chain](https://media.giphy.com/media/l3q2EOu4nu1D8uJKU/giphy.gif)

Чтобы построить строку из существующих строк, используйте знак плюс `+` для объединения строк.

```jsx
let name = 'Mary '
let activity = 'drink tea'
let bio = 'Our guest ' + name + activity + '.'
bio // Our guest Mary drink tea.
```

<!-- Теперь попробуйте построить строку сами.

```jsx live
function learnJavaScript() {
  let name = 'John'
  let age = '15'
  let country = 'USA'
  let enjoyment = 'trevel'
  let slogan = '"Don\'t worry, be happy!"'
  let bio =
    'My name is ' +
    name +
    '. I am ' +
    age +
    " years old. I'm from " +
    country +
    '. I like ' +
    enjoyment +
    ', and my slogan for life: ' +
    slogan +
    '.'
  bio
  return bio
}
```

И `+=` для присвоения с объединением.

```jsx live
function learnJavaScript() {
  let str = '123'
  str += 456
  return str
}
``` -->

Вот мы и познакомились с самым популярным типом данных в JavaScript и самыми часто используемыми методами к нему.

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Проблемы?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Пишите в [Telegram](https://t.me/neuro_coder_group) или [ВКонтакте](https://vk.com/neurocoder), а также подписывайтесь на наши [новости](https://t.me/neuro_coder_ai)

## Вопросы:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

Как в JavaScript не записываются строки?

1. В одинарных кавычках
2. В обратных слэшах
3. В обратных кавычках

Для чего в строке не используется обратный слэш?

1. Для экранирования
2. Для записи спецсимволов
3. Для окончания строки

Найдите строку с ошибкой

1. let str = \`It's not complicated\`
2. let str ="'I think so, indeed!' - cried he."
3. let str = 'My slogan: "Don't worry, be happy!"'

Выберете «символ перевода строки»

1. `\n`
2. `\`
3. `\*`

Какую букву вернет `'sport'[3]`?

1. `o`
2. `r`
3. Ничего не вернет

Как изменить символ в строке JavaScript?

1. Изменить строку
2. Добраться до символа и заменить его
3. Создать новую строку и записать её в ту же самую переменную вместо старой

Какой метод используется, чтобы сделать буквы заглавными?

1. `'Interface'.toUpperCase()`
2. `'Interface'[0].toLowerCase()`
3. `'Interface'.toLowerCase()`

Какой знак используется для объединения строк?

1. `=`
2. `+`
3. `+=`

Для того чтобы понять, на сколько вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме.

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Сcылки:

1. [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Data_structures)
2. [Код для подростков: прекрасное руководство по программированию для начинающих, том 1: Javascript - Jeremy Moritz ](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)
3. [JavaScript.ru](https://learn.javascript.ru/types)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/Alena-Maitri"><img src="https://avatars1.githubusercontent.com/u/72432063?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Alena Yanbukhtina</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=Alena-Maitri" title="Documentation">  </a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

