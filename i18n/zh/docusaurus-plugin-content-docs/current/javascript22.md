---
id: javascript22
title: 高階函數
sidebar_label: 高階函數
---

![@serverSerrverlesskiy](/img/javascript/headers/21.jpg)

高階函數允許JavaScript適用於 [functional programming](https://en.wikipedia.org/wiki/Higher-order_function).

這些功能在 JavaScript 中被廣泛使用。 如果您曾經用 JavaScript 編程過一點，則可能已經使用了它們，甚至可能沒有意識到。

為了完全理解該概念，您應該首先了解函數式編程和一流函數的概念。

## 什麼是函數式編程？

> Functional programming is a branch of discrete mathematics and a programming paradigm, in which the computation process is interpreted as the calculation of the values ​​of functions in the mathematical sense of the latter (as opposed to functions as subroutines in procedural programming). [Wikipedia]

### 一流的功能

![First_class](https://media.giphy.com/media/l2Jecm1l0wnJ2kQDu/giphy.gif)

如果您已經在學習JavaScript，則可能聽說過JavaScript將函數⚙️視為一流的對象。 就像其他函數式編程語言一樣，JavaScript中的函數是對象。
在JavaScript中，函數⚙️是一種特殊的對像類型。 這些是 `Function` 對象。 例如:

```jsx live
function learnJavaScript() {
  let greeting = () => 'Hello, World!'

  return greeting()
}
```

現在我們知道什麼是一流的功能。 您可以從高階函數開始。

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
