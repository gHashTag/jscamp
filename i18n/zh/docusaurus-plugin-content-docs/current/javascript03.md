---
id: javascript03
title: 變數
sidebar_label: 變數
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/03.jpg)

## 變數

變量 （Variables，縮寫為`var`）是用於存儲值的容器，例如用於加法的數字或可用作句子一部分的字符串，以及稍後將學習的其他數據類型。

![Container](https://media.giphy.com/media/0T0FUiZl51VPCLsqLR/giphy.gif)

<!-- ## Видео

<YouTube videoId="gCqxA_JOtmw" /> -->

## 變量聲明

![Announcement](https://media.giphy.com/media/cYaBD8kxE4PZudHBRA/giphy.gif)

要使用變量，必須首先創建它，或者更確切地說，聲明一個變量。 為此，我們引入關鍵字“ var”，後跟您想要給變量的名稱。 下面的指令創建（換句話說：聲明或定義）一個名為“ message”的變量：

```jsx live
function learnJavaScript() {
  var message = ''

  return message
}
```

在這裡，我們創建一個變量  message。 當前 ⏱️ 它不包含值，更確切地說，變量包含一個空字符串。

## 給變量賦值

![Memory](https://media.giphy.com/media/3o6ZtafpgSpvIaKhMI/giphy.gif)

一旦聲明了變量 ，就可以為其分配一個值。 為此，請寫  變量名 ，後跟等號“ =”，然後是要分配的值。 例如 :

```jsx live
function learnJavaScript() {
  var message
  message = 'My name is ...'
  // We can access it using the variable name
  return message
}
```

在“結果”中，您分配給變量  的值在控制台中返回。 在  中使用變量 values 的值進行操作，例如，用您的名字完成表達式。

為了簡潔起見，您可以將變量 declaration 的聲明與在一行中編寫  組合起來 ：

```jsx live
function learnJavaScript() {
  var message = 'Hello!' // define a variable and assign a value to it
  return message
}
```

## 變量更新

![Update](https://media.giphy.com/media/FP47IFqWyXfdKYU6VG/giphy.gif)

變量  的特點之一是它們的含義可以改變。
將值分配給變量  後，只需指定其他值即可更改（更新）該值。 讓我們看一個簡單的示例 ：

```jsx live
function learnJavaScript() {
  var message = 'Bob' // now message Bob
  message = true // and now the message is true
  message = 35 // and as a result message 35

  return message
}
```

變量  的另一個特徵是它們可以包含幾乎所有內容，而不僅僅是字符串和數字。 變量  還可以包含複雜數據甚至整個函數。 隨著您進一步學習本課程，您將學到更多有關此的知識。

::: tip Note!
我們說變量包含值。 這是一個重要的區別。 變量不是自己的值！ 它們是價值的容器。 想像一下，它們就像小紙板箱一樣，可以在其中存放東西。
:::

![Variables](https://mdn.mozillademos.org/files/13506/boxes.png)

![Hello World](https://media.giphy.com/media/26his8ERHOSxKuWw8/giphy.gif)

## 可變命名規則

![Rules](https://media.giphy.com/media/XK8I8Am1gSe17MiJ2m/giphy.gif)

您可以隨意命名變量,，但有限制。 通常，您應僅使用拉丁字符（0-9，a-z，A-Z）和下劃線字符。

-不建議使用其他符號，因為它們可能會引起錯誤或國際聽眾難以理解。 -請勿在變量名 beginning 的開頭使用下劃線-在某些 JavaScript 構造中用於表示特定內容。 -不要在變量  的開頭使用數字。這是無效的，將導致錯誤。 -通常都堅持使用所謂的“小寫駝峰大寫”（camelCase-之所以稱為“駝峰”，是因為形成單詞的第一個字母的“駝峰”），在其中粘貼多個單詞，整個前一個單詞使用小寫字母單詞，然後是後續單詞的大寫字母。在本文中，我們已將其用作變量名 。 -使變量名  直觀了解它們包含的數據。請勿僅使用單個字母/數字或較大的長短語。 -變量  區分大小寫，因此`myage`和`myAge`是不同的變量 。 -最後但並非最不重要的一點-您還需要避免將 JavaScript 保留字用作變量名 -意思是構成實際 JavaScript 語法的字！因此，您不能將 var，function，let 和 for 等詞用於變量名 。瀏覽器將它們識別為不同的代碼段，因此會發生錯誤。

## 保留字列表

![Reserved](https://media.giphy.com/media/3o6Mb3eci7bVDKBR2o/giphy.gif)

我們不能用這些詞來調用變量,，因為它們是 JavaScript 語言保留的。
`break`, `case`, `catch`, `class`, `const`, `continue`, `debugger`, `default`, `delete`, `do`, `else`, `export`, `extends`, `finally`, `for`, `function`, `if`, `import`, `in`, `instanceof`, `new`, `return`, `super`, `switch`, `this`, `throw`, `try`, `typeof`, `var`, `void`, `while`, `with`, `yield`

## 打字鬆散

![Freedom](https://media.giphy.com/media/6901DbEbbm4o0/giphy.gif)

JavaScript 是一種“自由類型語言”，這意味著與某些其他語言不同，您無需指定變量將包含哪種數據類型（例如，數字，字符串，數組等）。

例如，如果您聲明變量  並為其分配一個帶引號的值，則瀏覽器會將變量  視為字符串 :

```jsx live
function learnJavaScript() {
  var myString = 'Hello'
  // It will still be a string, even if it contains numbers, so be careful:
  var myNumber = '500' // oops, it's still a string

  myNumber = 500 // that's better, now it's number. Remove this line and look at the data type.

  return typeof myNumber
}
```

## 不推薦使用的“ var”關鍵字

![Old](https://media.giphy.com/media/3orieJI3IdkKWIsAGA/giphy.gif)

通常在現代腳本中不使用 var，但仍可以在舊腳本中將其隱藏。 這是由於事實並非如此，因此，我們將使用`let`表示變量 ，而不是`var`表示常量-常量。

 休息已經結束，讓我們繼續下一課！

## 問題？

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

頻道輸入 [Discord](https://discord.gg/6GDAfXn) 付款後 [Patreon](https://www.patreon.com/javascriptcamp).

## 問題：

![題](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

console.log 命令包含哪些信息？

1.用戶 2.開發人員 3. JavaScript 解釋器

什麼是變量？

1.價值的容器 2.變量值 3.拉丁字母

變量可以包含什麼？

1.僅字符串和數字 2.數字，字符串，複雜數據，函數 3.僅複雜的數據和功能

如何編寫命令來分配變量？

1. `var`
2. `var` [變量名] =
3. `var` [變量名]

如何更新變量？

1. 變量無法更新
2. 為變量指定一個不同的值
3. 設置自定義命令

變量命名規則中缺少什麼？

1. 不要在變量開頭使用數字
2. 不要使用保留字
3. 堅持拉丁字符

如何編寫變量的值，以便瀏覽器將變量視為字符串？

1. 不帶引號
2. 引號
3. 中括號

我們不使用哪個關鍵字來定義變量？

1. `let`
2. `const`
3. `var`

為了了解您學到了多少，請在我們學校參加考試 [移動應用](http://onelink.to/njhc95) 關於這個話題。

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## 鏈接

1. [MDN web docs](https://developer.mozilla.org/ru/docs/Learn/JavaScript/Первые_шаги/Variables)
2. [Code for Teens: The Perfect Beginner's Guide to Programming, Volume 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)
3. [JavaScript.ru](https://learn.javascript.ru/types)

## 貢獻者 ✨

感謝這些好人 ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">  </a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>
  
</table>

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

<!-- ## Супер команда console.log()

Перед тем как продолжить, я познакомлю вас с супер секретной и супер полезной командой `console.log()`, которую вы будете очень и очень часто использовать во время разработки программ.
Так вот, чтобы вывести в консоль отладочную информацию только для разработчиков (пользователи её увидеть не смогут; как вы знаете, большинство людей не подозревает даже о существовании самой консоли, а не то что о секретных «логах»!), напишите:

```javascript
console.log('Совершенно секретно! Только для разработчиков!')
```

Как видно из названия функции, мы выводим в консоль «лог» (то есть информацию о работе системы). Этой доброй суперспособностью разработчики пользуются постоянно. Скажем, когда у вас были сообщения об ошибках, вы видели в консоли именно это — интерпретатор выдавал («логгировал») в консоль информацию о работе системы, чтобы вы могли прочесть и исправить нужные параметры. Словом, очень полезная штука. Вам не раз и не два придётся прибегнуть к помощи console.log, так что запомните эту функцию!

```javascript
console.log('Выведите любое сообщение, какое пожелаете')
console.log('просто введите сюда какую-нибудь ' + 'строку')
var сообщение = 'А ещё в качестве аргумента можно использовать переменные!'
console.log(сообщение)
var чтоНужноИзучить = 'JavaScript'
console.log('Я изучу ' + чтоНужноИзучить) -->
