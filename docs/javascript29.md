---
id: javascript29
title: Конструкция switch case
sidebar_label: Конструкция switch case
---

Hello world!
Learn Java Script
Open your console
And enter your script

Hello world!
Learn Java Script
Open your console
And enter your script

Конструкция `switch` служит для сравнения значения на равенство с различными вариантами.

При этом равенство подразумевается в смысле оператора `===`, сравнивать с регулярным выражением или как-то еще `switch` не умеет. То есть значения должны быть одного типа, чтобы выполнялось равенство.

Если условие совпадает, то выполняется блок кода, связанный с соответствующим `case`. Если ни одно условие не подошло, то выполняется код, указанный в блоке `default`, если он есть. Для выхода из конструкции используется команда `break`. Если ее не указывать, автоматически выполнится блок кода в следующем `case` и т.д.

## Синтаксис

Конструкция `switch` имеет один или более блок `case` и необязательный блок `default`.

Выглядит она так:

```jsx
switch (n) {
  case 1:
    // блок кода 1;
    break
  case 2:
    // блок кода 2;
    break
  // .......
  // другие варианты  case
  // .......
  default:
  // блок кода если не подошло ни одно условие;
}
```

Несколько вариантов `case`, использующих один код, можно группировать.

```jsx
switch (n) {
  case 1:
  case 2:
    // блок кода 1;
    break
  case 3:
    // блок кода 2;
    break
  default:
  // блок кода если не подошло ни одно условие;
}
```

## Примеры

Рассмотрим простейший пример.

```jsx live
function learnJavaScript() {
  let a = 4
  let str
  switch (a) {
    case 3:
      str = 'Маловато'
      break
    case 4:
      str = 'В точку!'
      break
    case 5:
      str = 'Перебор'
      break
    default:
      str = 'Я таких значений не знаю'
  }
  return str
}
```

Здесь оператор `switch` последовательно сравнит `a` со всеми вариантами из `case`.
Сначала 3, затем – так как нет совпадения – 4. Совпадение найдено, будет выполнен этот вариант, со строки `str = 'В точку!'` и далее, до ближайшего `break`, который прервёт выполнение.

Рассмотрим такой пример:

```jsx live
function learnJavaScript() {
  let a = 'Apples'
  let str
  switch (a) {
    case 'Apples':
      str = 'I love ' + a
      break
    case 'Oranges':
      str = 'I love ' + a
      break
    case 'Bananas':
      str = 'I love ' + a
      break
    default:
      str = 'I like other fruits'
  }
  return str
}
```

Здесь оператор `switch` последовательно сравнит `a` со всеми вариантами из `case`. Но здесь идет сравнение не чисел, а строк. Так можно сделать с любыми типами данных, главное чтобы сравнивались одинаковые типы данных.

Также `Switch` используется чтобы заменить множественные `if`.
Например, можно заменить данный код:

```jsx live
function learnJavaScript() {
  let number = 2
  let str
  if (number === 0) {
    str = 'Вы ввели число 0'
  }

  if (number === 1) {
    str = 'Вы ввели число 1'
  }

  if (number === 2 || number === 3) {
    str = 'Вы ввели число 2, а может и 3'
  }
  return str
}
```

На этот:

```jsx live
function learnJavaScript() {
  let number = 2
  let str
  switch (number) {
    case 0:
      str = 'Вы ввели число 0'
      break

    case 1:
      str = 'Вы ввели число 1'
      break

    case 2:
    case 3:
      str = 'Вы ввели число 2, а может и 3'
      break
  }
  return str
}
```

Результат будет тот же, но код станет более читаемым и удобным для работы.

## Вопросы:

Для того чтобы понять, на сколько вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме.

![Sumerian school](/img/app.png)

## Ссылки:

1.  [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/switch)
2.  [Learn JavaScript](https://learn.javascript.ru/switch)
3.  [Справочник JavaScript](https://javascript.ru/switch)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/FELiX-RN"><img src="https://avatars0.githubusercontent.com/u/72006627?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Philipp Dvinyaninov</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=FELiX-RN" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![Become a Patron!](/img/logo/patreon.png)](https://www.patreon.com/bePatron?u=31769291)
