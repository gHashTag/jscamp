---
id: javascript20
title: Замыкание
sidebar_label: Замыкание
---

Замыкание - это функция, у которой имеется доступ к внешней функции, даже после того, как работа внешней функции прекратилась. Расмотрим пример.

```jsx live
function learnJavaScript() {
  const getFruit = () => {
    let fruit = 'Banana'
    return function () {
      return fruit
    }
  }
  const showFruit = getFruit()
  return showFruit()
}
```

В примере мы переменной `showFruit` присваиваем результат работы функции `getFruit()`. Результатом работы `getFruit()` является новая функция. То есть мы из переменной `showFruit` сделали функцию `showFruit()`. Область видимости созданной функции находится там, где мы её создавали. Следовательно функции `showFruit()` доступна переменная `fruit`. Изменить переменную `fruit` за пределами функции `getFruit()` мы не можем, так как она локальна.

Этот процесс назвали `Замыканием` из-за того, что функция может работать с переменной из внешней функции, даже после того, как внешняя функция выполнится.

## Примеры

Счётчик, самый просто пример, на котором можно рассмотреть работу замыкания.

```jsx live
function learnJavaScript() {
  const makeCounter = () => {
    let x = 0
    return function () {
      return ++x
    }
  }
  const counter = makeCounter()
  return counter()
}
```

Создадим функцию аргументом у которой будет некая фраза, а результатом станет новая функция, которая использует эту фразу.

```jsx live
function learnJavaScript() {
  const say = (phrase1) => {
    return function (phrase2) {
      return phrase1 + phrase2
    }
  }
  const love = say('I love ')
  return love('Bananas')
}
```

Давайте сделаем инкапсуляцию с помощью замыкания на примере счётчика.

```jsx live
function learnJavaScipt() {
  const makeCounter = () => {
    let x = 0
    return {
      inc: function () {
        return ++x
      },
      dec: function () {
        return --x
      },
      val: function () {
        return x
      }
    }
  }

  const counter = makeCounter()
  counter.inc()
  return counter.val()
}
```

## Вопросы:

## Ссылки

1. [Learn JavaScript](https://learn.javascript.ru/closures)
2. [MDN Web Docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures)
3. [Замыкания JavaScript](https://medium.com/@stasonmars/понимаем-замыкания-в-javascript-раз-и-навсегда-c211805b6898)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr> 
    <td align="center"><a href="https://github.com/IIo3iTiv"><img src="https://avatars1.githubusercontent.com/u/72025062?v=4?s=200" width="200px;" alt=""/><br /><sub><b>IIo3iTiv</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=IIo3iTiv" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![Become a Patron!](/img/logo/patreon.png)](https://www.patreon.com/bePatron?u=31769291)
