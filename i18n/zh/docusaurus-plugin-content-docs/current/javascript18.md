---
id: javascript18
title: 休息和傳播
sidebar_label: 休息和傳播
---

![@serverSerrverlesskiy](/img/javascript/headers/19.jpg)

許多內置的 JavaScript 函數支持任意數量的參數。

例如：

`Math.max (arg1, arg2, ..., argN)` - c 計算傳遞的參數的最大數量。

`Math.min (arg1, arg2, ..., argN)` - 返回所傳遞參數的最小值。

在本文中，我們將學習如何對我們自己的函數執行相同的操作，以及如何將參數傳遞給數組等函數。

## 其餘參數 `(... rest)`

![Parametrs](https://media.giphy.com/media/3osxYoufeOGOA7xiX6/giphy.gif)

您可以使用任意數量的參數調用函數 ⚙️，而不管其定義方式如何。

例如 👇:

```jsx live
function learnJavaScript() {
  let summa = (a, b, c) => {
    return a + b + c
  } // Sum of 3 numbers

  return summa(1, 2, 3, 4, 5, 6, 7)
}
```

多餘的參數不會導致錯誤，但是當然只計算前三個參數。

### ES6 概念

![Idea](https://media.giphy.com/media/3o6Mbj2w67HnPQKgcE/giphy.gif)

從 ES6 標准開始，出現了類似 `... rest` - 剩餘參數。

```jsx
let goFun = (...rest) => {
  // Algorithm
}
```

自由參數可以用三個點表示 `...`. 它的字面意思是：“收集剩餘的參數並將它們放入數組中。”

例如，讓我們將所有參數收集到一個數組中 `args`👇:

```jsx live
function learnJavaScript() {
  let sumAll = (...args) => {
    // args — name of the array of passed arguments
    let sum = 0
    for (let arg of args) if (typeof arg === 'number') sum += arg // sum - will collect the sum of all numeric arguments
    return sum
  }
  return sumAll(1, 2, 3, 4, 5, 6, 7, 'React', 'Native')
}
```

答案已經是 28，並且沒有錯誤 🙅‍♂️！ 嘗試更改參數或數組的維數。

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
