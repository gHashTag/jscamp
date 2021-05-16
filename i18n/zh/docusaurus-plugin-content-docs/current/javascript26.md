---
id: javascript26
title: 承諾-延遲和異步計算
sidebar_label: 承諾
---

![@serverSerrverlesskiy](/img/javascript/headers/27.jpg)

Promise是包含異步操作的將來值的對象。 例如，如果您從服務器請求一些數據，則諾言承諾我們將收到我們將來可以使用的數據。

![math](https://media.giphy.com/media/4JVTF9zR9BicshFAb7/giphy.gif)

首先，諾言具有地位 `pending`, 那麼它具有以下之一： `fulfilled` ("成功完成") or `rejected` (" 錯誤完成🙅‍♂️ ").

![promise states](/img/javascript/23/promise.png)

1. `Pending` - 如果結果尚未準備好，則承諾將待定。 也就是說，它正在等待某些事情完成（例如，異步操作的完成）。
2. `Fulfilled` - 如果結果可用，則承諾已解決。 就是說，某事完成了執行（例如，異步操作），一切順利。
3. `Rejected` - 如果在執行過程中發生錯誤，則Promise被拒絕。

## 創造承諾

![Plus](https://media.giphy.com/media/Yqo5mjWTLGlVOIP8Dc/giphy.gif)

A `Promise` 使用new關鍵字及其自己的構造函數創建對象。
Promise構造函數採用一個參數，即回調，也稱為執行函數⚙️，它採用2個回調， `resolve` 和 `reject`.

創建承諾後，立即執行執行功能。 通過打電話來兌現諾言 `resolve` 並被拒絕 `reject`.

```jsx
const promise = new Promise((resolve, reject) => {
  if (allWentWell) {
    resolve('Everything went great!')
  } else {
    reject('Something went wrong')
  }
})
```

`resolve` 和 `reject` 接受一個參數，可以是字符串，數字，布爾表達式，數組或對象。

要提供具有promises功能的功能，您只需要返回一個 `Promise` 其中的對象:

```jsx
function myAsyncFunction(url) {
  return new Promise((resolve, reject) => {
    // function code
  })
}
```

## 履行諾言

![Help](https://media.giphy.com/media/iigqhSTOKmb6wDObGb/giphy.gif)

承諾與 `then()` 和 `catch()` 方法。

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
