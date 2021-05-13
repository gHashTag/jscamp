---
id: javascript03
title: 變數
sidebar_label: 變數
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/03.jpg)

## 變數

變量 🔔（Variables，縮寫為`var`）是用於存儲值的容器，例如用於加法的數字或可用作句子一部分的字符串，以及稍後將學習的其他數據類型。

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

在這裡，我們創建一個變量 🔔 message。 當前 ⏱️ 它不包含值，更確切地說，變量包含一個空字符串。

## 給變量賦值

![Memory](https://media.giphy.com/media/3o6ZtafpgSpvIaKhMI/giphy.gif)

一旦聲明了變量 🔔，就可以為其分配一個值。 為此，請寫 🖊️ 變量名 🔔，後跟等號“ =”，然後是要分配的值。 例如 👇:

```jsx live
function learnJavaScript() {
  var message
  message = 'My name is ...'
  // We can access it using the variable name
  return message
}
```

在“結果”中，您分配給變量 🔔 的值在控制台中返回。 在 🔔 中使用變量 values 的值進行操作，例如，用您的名字完成表達式。

為了簡潔起見，您可以將變量 declaration 的聲明與在一行中編寫 🖊️ 組合起來 👇：

```jsx live
function learnJavaScript() {
  var message = 'Hello!' // define a variable and assign a value to it
  return message
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
