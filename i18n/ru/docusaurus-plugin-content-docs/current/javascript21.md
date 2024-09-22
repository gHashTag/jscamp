---
id: javascript21
title: 'Замыкание'
sidebar_label: Замыкание
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/20.jpg)

Замыкание - это функция⚙️, у которой имеется доступ к внешней функции⚙️, даже после того, как работа внешней функции️ прекратилась. Замыкание нужно, чтобы обеспечить доступ внутренней функции к области видимости внешней функции️, но при этом закрыть доступ из внешнего окружения к переменным внутренней функции⚙️.

![Snake](https://media.giphy.com/media/3oFzmdjqH15YebLQ52/giphy.gif)

Требования для создания замыкания:

1. Внешняя функция, которая вызывается в коде.
2. Во внешней функции находится внутренняя функция.
3. В качестве результата внешняя функция возвращает внутреннюю.

Рассмотрим создание замыкания на примере:

```jsx live
function learnJavaScript() {
  const getFruit = () => {
    let fruit = 'Banana',
      show = () => {
        return fruit
      }
    return show
  }
  let showFruit = getFruit()
  return showFruit()
}
```

1. В примере мы создали внешнюю функцию `getFruit`;
2. Внутри `getFruit` создали внутреннюю функцию `show`.
3. В качестве результата функция `getFruit` выдаёт функцию `show`.
4. Далее в коде мы присвоили результат функции `getFruit` переменной `showFruit`.
5. Т.к. результат работы `getFruit` является функцией, то `showFruit` становится не переменной , а функцией.
6. Результатом всей конструкции стала переменная `fruit` находящаяся внутри функции `getFruit`, она стала замкнутой. Теперь мы можем только узнать значение этой переменной , изменить её нельзя.

## Видео

<YouTube videoId="bsWqPzc4g-8" />

## Примеры

![Math](https://media.giphy.com/media/xT1Ra5h24Eliux3UVq/giphy.gif)

Рассмотрим больше примеров для понимания.

### Счётчик

Счётчик, самый простой пример, на котором можно рассмотреть работу замыкания.

<!-- ![Counter](https://media.giphy.com/media/QSNvClMu5zWJW/giphy.gif) -->

```jsx live
function learnJavaScript() {
  const makeCounter = () => {
    let x = 0
    return () => {
      return ++x
    }
  }
  const counter = makeCounter()
  return counter()
}
```

### Улучшенный счётчик

![Counter](https://media.giphy.com/media/3o6Zt6fzS6qEbLhKWQ/giphy.gif)

В качестве результата у нас будет не одна функция⚙️, а сразу несколько.

```jsx live
function learnJavaScipt() {
  let makeCounter = () => {
    let x = 0
    return {
      inc: () => {
        return ++x
      },
      dec: () => {
        return --x
      },
      val: () => {
        return x
      }
    }
  }

  let counter = makeCounter()
  counter.inc() // 1
  counter.inc() // 2
  counter.inc() // 3
  counter.inc() // 4
  counter.dec() // 3
  return counter.val()
}
```

### Замыкание в цикле

![circle](https://media.giphy.com/media/u5s2ezDicmyuA/giphy.gif)

```jsx live
function learnJavaScript() {
  let res = []
  for (let i = 0; i < 5; i++) {
    res[i] = () => {
      return i
    }
  }
  return res[2]()
}
```

### Запоминаем фразу

![l](https://media.giphy.com/media/l4pTfqyI6TCjUW4Yo/giphy.gif)

```jsx live
function learnJavaScript() {
  let phrase = x => {
    return y => {
      return x + ' ' + y
    }
  }

  hello = phrase('Hello')
  return hello('World')
}
```

## Итого

Замыкания — одна из важнейших фундаментальных концепций JavaScript, её должен понимать каждый JS-разработчик. Понимание 💡 замыканий — это одна из ступеней пути к написанию  эффективных и качественных приложений.

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Проблемы?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Пишите в [Telegram](https://t.me/neuro_coder_group) или [ВКонтакте](https://vk.com/neurocoder), а также подписывайтесь на наши [новости](https://t.me/neuro_coder_ai)

<!-- ![JavaScript Camp](/img/bandlink.png) -->

## Вопросы

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

Что такое замыкание?

1. Конструкция
2. Функция, у которой имеется доступ к внешней функции
3. Концепция

В замыкании что на чём замыкается?

1. Функция на область видимости
2. Переменные в функции

Что нужно сделать, чтобы получить доступ к замкнутой переменной?

1. Опишу её и воспользуюсь
2. Она доступна
3. Переменную можно только просмотреть

Для того чтобы понять, на сколько вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме или в нашем [телеграм боте](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

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
    <td align="center"><a href="https://github.com/IIo3iTiv"><img src="https://avatars1.githubusercontent.com/u/72025062?v=4?s=200" width="200px;" alt=""/><br /><sub><b>IIo3iTiv</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=IIo3iTiv" title="Documentation">  </a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

