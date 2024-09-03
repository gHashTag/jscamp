---
id: javascript12
title: Блочная область видимости
sidebar_label: Блочная область видимости
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/12.jpg)

Область видимости (англ. Scope) - часть программы, в пределах которой переменная доступна для использования. <!--Для переменной, областью видимости будет та часть программы в которой она "видна" и может быть использована программистом.--> При создании `.js` файла мы создаём область видимости целого файла, для создания внутренней области видимости, нужно объявить её с помощью фигурных скобок `{ ... }`.

![file](https://media.giphy.com/media/3o6Ztk7NosfLVRqcpy/giphy.gif)

```jsx
// Первая область видимости
let fruit = 'Banana'
{
  // Вторая область видимости
  let fruit = 'Apple'
  {
    // Третья область видимости
    let fruit = 'Lime'
  }
}
```

В этом примере мы создали три переменные в разных областях видимости, в которых находится своя версия переменной `fruit`, поэтому ошибки не возникают, но если попытаться в одной области видимости создать две переменные с одним именем, то возникнет ошибка.

```jsx
// Первая область видимости
let fruit = 'Banana'
{
  // Вторая область видимости
  let fruit = 'Apple'
  let fruit = 'Lime' // Здесь возникнет ошибка
}
```

При создании различных конструкций вы также создаёте и область видимости этой конструкции, так как используете блок из фигурных скобок `{ ... }`.

```jsx
if (true) {
  // Область видимости условного оператора
}

for (let i = 0; i > 5; i++) {
  // Область видимости цикла
}

function test() {
  // Область видимости функции
}
```

В этих примерах у каждой конструкции своя область видимости.

## Видео

<YouTube videoId="p-wmzCW_2C8" />

## Глобальная область видимости

![Global](https://media.giphy.com/media/l0MYPsBLOYyFqSDte/giphy.gif)

Говоря глобальная область видимости, мы подразумеваем, что все остальные области видимости являются дочерними по отношению к этой. В глобальной области видимости находятся переменные, объявленные вне всех функций⚙️ и блоков.

```jsx
// Глобальная область видимости
let fruit = 'Banana'
```

Переменная  созданная в глобальной области видимости называется `глобальной переменной`  . Глобальную переменную  можно использовать во всех дочерних областях видимости.

```jsx live
function learnJavaScript() {
  // Переменная fruit является глобальной
  let fruit = 'Banana'
  function showFruit() {
    // Поэтому мы можем использовать её внутри функции
    return fruit
  }
  return showFruit()
}
```

## Локальная область видимости

![Local](https://media.giphy.com/media/VFwRCi6WKBUk08fliV/giphy.gif)

В локальной области видимости находятся переменные, объявленные в определенной части кода . К примеру переменные, созданные внутри цикла, будут локальными.

```jsx
for (let i = 0; i > 5; i++) {
  // Переменная i является локальной
}
```

Использовать локальные переменные  можно только внутри блока, в котором они были объявлены.

```jsx
function learnJavaScript() {
  function showFruit() {
    // Переменная fruit является локальной
    let fruit = 'Banana'
  }
  // Поэтому мы не можем использовать её вне функции
  return fruit
}

// ReferenceError: fruit is not defined
```

## Примеры

![Math](https://media.giphy.com/media/xT1Ra5h24Eliux3UVq/giphy.gif)

Используем две переменные  с одинаковым именем в разных областях видимости. Функция `otherFruit()` возвращает переменную  `fruit` из той области видимости, в которой она инициализирована, как `Lime`

```jsx live
function learnJavaScript() {
  let fruit = 'Banana'
  function otherFruit() {
    let fruit = 'Lime'
    return fruit
  }
  return otherFruit() + ' and ' + fruit
}
```

Если мы уберём `let` из функции `otherFruit()`, то вместо создания переменной  мы её перезаписываем .

```jsx live
function learnJavaScript() {
  let fruit = 'Banana'
  function otherFruit() {
    fruit = 'Lime'
    return fruit
  }
  return otherFruit() + ' and ' + fruit
}
```

Что, если мы попытаемся вызвать локальную переменную  в родительской области видимости? Возникает ошибка, из-за того, что мы пытаемся в глобальной области видимости вызвать переменную  , которую мы не создавали.

```javascript
function learnJavaScript() {
  let num
  for (let i = 0; i != 5; i++) {
    num += i
  }
  return i
}

//ReferenceError: i is not defined
```

![Primer](https://media.giphy.com/media/M33UV4NDvkTHa/giphy.gif)

## Запрет на var

![eye](https://media.giphy.com/media/PKl9JTqnoiKtO/giphy.gif)

В статье [Переменка](https://jscamp.app/docs/javascript03) мы вам сказали, что использовать `var` не будем, связано это как раз с областью видимости.

1. Если в одной области видимости вы создадите две переменные  с одним именем с помощью ключевого слова `let` или `const`, то интерпретатор нас предупреждает об этом, выводя ошибку.

```jsx
function learnJavaScript() {
  let fruit = 'Banana'
  let fruit = 'Lime'
  return fruit
  // SyntaxError: Identifier 'fruit' has already been declared
}
```

Но, если с помощью `var` вы создадите переменные  с одинаковым именем, то он её переназначит.

```jsx live
function learnJavaScript() {
  var fruit = 'Banana'
  var fruit = 'Lime'
  return fruit
}
```

Ошибки не возникает, т.к. `var` перезаписал переменную `fruit`

2. Создав глобальную переменную  с помощью `var` мы можем изменить её из локальной области видимости, создав ещё одну переменную  с таким же именем с помощью `var`. Область действия `var` ограничивается либо функцией, либо скриптом.

```jsx live
function learnJavaScript() {
  var fruit = 'Lime'
  {
    var fruit = 'Banana'
  }
  return fruit
}
```

3. Переменные  созданные с `var` считаются объявленными с самого начала запуска скрипта, вне зависимости от того, в каком месте находится объявление.

```jsx live
function learnJavaScript() {
  fruit = 'Banana'
  var fruit
  return fruit
}
```

4. В JavaScript до ES6 блочных областей видимости не было. Т.е. любая переменная созданная с помощью ключевого слова `var` внутри блока будет видима и за его пределами.

```javascript
if (true) {
  var fruit = 'Apple' // переменная будет видна за пределами данного блока
}
console.log(fruit) // "Apple"
```

![javascript](/img/javascript/28.jpg)

```javascript
if (true) {
  let fruit = 'Apple' // переменная не будет видна за пределами данного блока
}
console.log(fruit) // "Apple"
```

![javascript](/img/javascript/29.jpg)

Из-за перечисленных причин, разработчики отказались от использования `var`

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Проблемы?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Пишите в [Discord](https://discord.gg/6GDAfXn) или телеграмм [чат](https://t.me/jscampapp), а также подписывайтесь на наши [новости](https://t.me/javascriptapp)

<!-- ![JavaScript Camp](/img/bandlink.png) -->

## Вопросы

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

Когда мы создаём самую первую область видимости?

1. При создании цикла
2. При создании файла
3. При создании блока

При создании условного оператора создаётся ли новая область видимости?

1. `true`
2. `false`

Где создаётся локальная переменная?

1. Внутри блока, в котором она объявлена
2. Вне всех блоков

Для того чтобы понять насколько вы усвоили этот урок пройдите тест в [мобильном приложении](http://onelink.to/njhc95) в нашей школы по этой теме.

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Ссылки

1. [JavaScript Scope](https://css-tricks.com/javascript-scope-closures/)
2. [Learn JavaScript](https://learn.javascript.ru/closure)
3. [MDN Web Docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)

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

