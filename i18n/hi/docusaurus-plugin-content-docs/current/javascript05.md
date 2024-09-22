---
id: javascript05
title: Ошибки
sidebar_label: Ошибки
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/05.jpg)

Вы точно, как и все мы, будете совершать ошибки в коде. Программные ошибки называют багами. Баг - означает ошибку в программе💾 или в системе, из-за которой программа выдает неожиданное поведение и, как следствие, результат. Большинство программных ошибок возникают из-за ошибок, допущенных разработчиками программы в её исходном коде, либо в её дизайне.

![error](https://media.giphy.com/media/1VT3UNeWdijUSMpRL4/giphy.gif)

В значении «неуловимой технической ошибки» слово «жучок» (англ. bug) употреблялось задолго до появления компьютеров    ️ персоналом телеграфных и телефонных компаний в отношении неполадок с электрооборудованием и радиотехникой. В 1878 году Томас Эдисон писал:

> «Так было со всеми моими изобретениями. 1️⃣ Первый шаг — интуиция, которая приходит как вспышка, затем возникают трудности — устройство отказывается работать, и именно тогда проявляются «жучки» — так называют эти мелкие ошибки и трудности — и требуются месяцы пристального наблюдения, исследований и усилий, прежде чем дело дойдёт до коммерческого успеха или неудачи».

Отладка – это процесс поиска и исправления ошибок в скрипте.

[Wikipedia](https://ru.wikipedia.org/wiki/Программная_ошибка)

## Видео

<YouTube videoId="xJtVop2fAxg" />

## Самые частые ошибки

![Teacher](https://media.giphy.com/media/27c3zdaY6eeIAwp7Qi/giphy.gif)

Надеюсь вы уже успели встретить свои первые ошибки в процессе написания кода. Почему надеюсь? Потому что ошибки - это наши учителя, которые показывают нам, что мы делаем неправильно в своем коде и компьютер    ️, точнее интерпретатор кода, нас попросту не может понять. Ошибки при написании кода случаются практически каждый день. Штука в том, чтобы уметь прочесть сообщение об ошибке, которое выдаст вам машина  , чтобы оперативно найти и исправить недочёт в написанном коде. Чем больше вы изучаете JavaScript, тем больше начинаете ценить сообщения об ошибках - зачастую они очень верно показывают, где же вы допустили промах.

Пара самых популярных типов ошибок в коде:

## SyntaxError

![Error](https://media.giphy.com/media/TqiwHbFBaZ4ti/giphy.gif)

`Syntax Error` - нарушение правил языка . Например введите ​​​​​девять плюс точка с запятой `9 + ;`:

```jsx live
function learnJavaScript() {
  var error = 9

  return error
}
```

Ответ: `SyntaxError: Unexpected token ;`

Cинтаксическая ошибка, означает всего лишь, что в теле вашего предложения содержится ошибка. Другими словами, то, что вы написали, не является правильным с точки зрения языка  JavaScript. Интерпретатор не может прочесть ваше предложение и не знает, что с ним нужно делать. `Unexpected token ;` означает, что интерпретатор прочёл что-то, чего прочесть вовсе не ожидал: в нашем случае — точку с запятой `;`.

Еще раз ошибемся!
Введем в консоле пять плюс три и скобка в конце `5+3)`.

```jsx live
function learnJavaScript() {
  var error = 5

  return error
}
```

У вас есть закрывающая скобка `)`, но нет скобки открывающей `(`! А ведь скобки всегда ходят парами — не может быть, чтобы была закрывающая, но не нашлось открывающей скобки, и наоборот.

## ReferenceError

![Error](https://media.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif)

`ReferenceError` - неправильное имя! Объект `ReferenceError` представляет ошибку, возникающую при обращении к несуществующей переменной. Например введите пять плюс переменая `5 + переменая`:

```jsx live
function learnJavaScript() {
  var error = 5

  return error
}
```

Теперь перед нами ошибка обращения `ReferenceError`. Быть может, вы уже заметили, в чём здесь дело? Давайте внимательно прочтём сообщение об ошибке (ведь для этого, в конце концов, оно и выдаётся!). Там сказано: `переменная  is not defined` — переменная не задана, вот в этом-то и кроется наша проблема! Сперва мы должны объявить переменную каким-нибудь, скажем, таким образом:

```jsx live
function learnJavaScript() {
  var переменая = 5
  var error = 5 + переменая

  return error
}
```

## TypeError

Объект TypeError представляет ошибку, возникающую, когда значение имеет не ожидаемый тип. Мы применяем метод `toUpperCase`, с которым подробно познакомимся позже, к типу undefined, а это не допустимо так как этот метод преобразует строку в верхний регистр. Проверьте эту ошибку в консоле браузера, так в `LIVE EDITOR` она не работает.

```javascript
var foo = undefined
foo.toUpperCase()
```

![TypeError](/img/javascript/25.jpg)

## Помощь

Мы также можем ошибаться, поэтому если вы обнаружите ошибку на сайте или не точность в переводе, то можете легко помочь исправить ошибку на сайте. Для этого нужно нажать на кнопку `Edit this page` в самом низу каждой странице.

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Проблемы?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Пишите в [Telegram](https://t.me/neuro_coder_group) или [ВКонтакте](https://vk.com/neurocoder), а также подписывайтесь на наши [новости](https://t.me/neuro_coder_ai)

## Вопросы:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

Что означает `Syntax Error`?

1. Неправильный порядок знаков
2. Нарушение правил языка
3. Неуместные скобки

Что означает `Reference Error`?

1. Необъявленная переменная
2. Синтаксическая ошибка
3. Неправильное имя

Для того чтобы понять, на сколько вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме.

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

