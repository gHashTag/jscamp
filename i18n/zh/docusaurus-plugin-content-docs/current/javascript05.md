---
id: javascript05
title: 失誤
sidebar_label: 失誤
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/05.jpg)

與我們其他人一樣，您肯定會在代碼中犯錯誤 🙅 軟件錯誤 🙅‍♂️ 稱為錯誤。 錯誤-表示程序 💾 或系統中的錯誤，由於該錯誤，程序會產生意外的行為，並因此導致結果。 大多數軟件錯誤是由程序開發人員在其源代碼或設計中所犯的錯誤引起的。

![錯誤](https://media.giphy.com/media/1VT3UNeWdijUSMpRL4/giphy.gif)

在“難以捉摸的技術錯誤”的含義中，“電報”一詞在電報和電話公司的工作人員出現與計算機和無線電設備有關的問題之前就已經使用很久了。 1878 年，托馬斯·愛迪生（Thomas Edison）寫道：

> “This was the case with all my inventions. 1️⃣ The first step is intuition, which comes like a flash, then difficulties arise - the device refuses to work, and that's when the bugs appear - as these small mistakes and difficulties are called - and it takes months of close observation, research and effort before it comes to commercial success or failure. "

調試是在腳本中查找並修復錯誤的過程。

[Wikipedia](https://ru.wikipedia.org/wiki/Программная_ошибка🙅‍♂️)

<!-- ## Видео

<YouTube videoId="xJtVop2fAxg" /> -->

## 最常見的錯誤

![老師](https://media.giphy.com/media/27c3zdaY6eeIAwp7Qi/giphy.gif)

希望您在編寫代碼的過程中遇到了第一個錯誤。 為什麼希望？ 因為錯誤 🙅‍♂️ 是我們的老師，向我們展示我們在代碼中做錯了什麼 📟，而計算機 🖥️，或更確切地說是代碼解釋器 📟，簡直無法理解我們。 幾乎每天都會發生編寫代碼時的錯誤。 訣竅是能夠讀取機器將為您提供的錯誤消息，以便快速找到並修復編寫的代碼中的缺陷。 您對 JavaScript 的了解越多，您對錯誤消息的理解就越多-它們通常可以非常準確地顯示出您出了錯的地方。

代碼 код 中最常見的幾種錯誤類型 🙅‍♂️：

## 語法錯誤

![錯誤](https://media.giphy.com/media/TqiwHbFBaZ4ti/giphy.gif)

`語法錯誤` - 違反語言規則 правил。 例如，輸入 9 加分號 `9 +;` 👇:

```jsx live
function learnJavaScript() {
  var error = 9

  return error
}
```

Reply: `SyntaxError: Unexpected token;`

語法錯誤 🙅‍♂️ 僅僅意味著句子的主體中存在錯誤 error‍ 🙅️。 換句話說，您寫的內容在 JavaScript 方面是不正確的。 口譯員無法閱讀您的句子，也不知道該如何處理。 “意外的令牌；”表示解釋器已讀取了它根本不希望讀取的內容：在我們的例子中，是分號 `;`.

讓我們再犯一個錯誤 🙅‍♂️！
讓我們在控制台中輸入 5 加 3，並在末尾輸入括號 `5 + 3)`.

```jsx live
function learnJavaScript() {
  var error = 5

  return error
}
```

您有一個右括號 `)`, 但沒有左括號 `(`! 但是括號總是成對出現-不可能有一個閉合括號，但沒有開頭括號，反之亦然。

## 參考誤差

![Error](https://media.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif)

`ReferenceError` 是無效名稱！ “ ReferenceError” 對象表示在訪問不存在的變量時發生的錯誤。例如，輸入 5 加號 `5 + alternating`:

```jsx live
function learnJavaScript() {
  var error = 5

  return error
}
```

現在我們前面有一個引用`ReferenceError`的錯誤。 也許您已經註意到這裡發生了什麼事？ 讓我們仔細閱讀錯誤消息（（畢竟，這就是它顯示出來的原因！）。 它說：“變量 🔔 未定義”-未設置變量，這就是我們的問題所在！ 首先，我們必須以某種方式聲明變量，例如：

```jsx live
function learnJavaScript() {
  var test = 5
  var error = 5 + test

  return error
}
```

## 類型錯誤

TypeError 對象表示當值不是預期類型時引發的錯誤。 我們將`toUpperCase`方法應用於未定義的類型，稍後將對其進行詳細介紹，該方法將被轉換為大寫，這是不允許的。 在瀏覽器控制台中檢查此錯誤，該錯誤在`LIVE EDITOR`.

```javascript
var foo = undefined
foo.toUpperCase()
```

![TypeError](/img/javascript/25.jpg)

## 開源

我們也可能會犯錯誤，因此，如果您在網站上發現錯誤或翻譯不正確，則可以輕鬆地在網站上幫助解決錯誤。 為此，請點擊每頁底部的“編輯此頁面”按鈕。

## 問題？

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

頻道輸入 [Discord](https://discord.gg/6GDAfXn) 付款後 [Patreon](https://www.patreon.com/javascriptcamp).

## Questions:

![問題：](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

“語法錯誤”是什麼意思？

1.標誌順序錯誤 2.違反語言規則 3.括號不合適

參考錯誤是什麼意思？

1.未聲明的變量 2.語法錯誤 3.名字錯誤

為了了解您學到了多少本課程，請對 [mobile application](http://onelink.to/njhc95) 我們學校就這個話題。
![Sumerian school](/img/app.png)

## 鏈接

1. [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Data_structures)
2. [Code for Teens: The Perfect Beginner's Guide to Programming, Volume 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)
3. [JavaScript.ru](https://learn.javascript.ru/types)

## 貢獻者 ✨

感謝這些好人 ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>
  
</table>

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
