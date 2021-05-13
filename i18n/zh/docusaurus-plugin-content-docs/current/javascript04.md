---
id: javascript04
title: 資料類型
sidebar_label: 資料類型
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/04.jpg)

## 動態打字

JavaScript 是一種鬆散類型或動態語言。 這意味著您不需要預先定義變量 the 的類型。

![Dinamics](https://media.giphy.com/media/26uf759LlDftqZNVm/giphy.gif)

類型將在程序執行期間自動確定。 這也意味著您可以使用一個變量 🔔 存儲 📦 不同類型的數據 👇：

```jsx live
function learnJavaScript() {
  let foo = 42 // now foo is of type number
  foo = 'bar' //and now foo is of type string
  return typeof foo
}
```

<!-- ## Видео

<YouTube videoId="1zXZCVbNbkQ" /> -->

## 類型

為了理解變量中包含的數據類型，使用了 `typeof` 運算符。 `typeof` 運算符返回參數的類型。
它有兩種語法，帶括號和不帶括號：

-運算符語法：`typeof x`

-函數語法：`typeof（x)`

它們的工作原理相同，但第一種語法較短。

typeof 的結果是一個包含類型的字符串。

```jsx live
function learnJavaScript() {
  let num = 9
  return typeof num
}
```

## 支付

訂閱以下內容後，您現在處於該網站的精簡版本中 [Patreon](https://www.patreon.com/javascriptcamp), 您將獲得對培訓課程的完全訪問權限，以及在以下位置訪問我們服務器的私人頻道的權限：[Discord](https://discord.gg/6GDAfXn).

下載我們的 [mobile application](http://onelink.to/njhc95) o在我們的測試中 [JavaScript telegram bot](https://t.me/javascriptcamp_bot), 並訂閱 [our news](https://t.me/javascriptapp).

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)


[![Sumerian school](/img/app.jpg)](http://onelink.to/njhc95)

 

## 貢獻者 ✨

T向這些好人致敬([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>
  
</table>

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
