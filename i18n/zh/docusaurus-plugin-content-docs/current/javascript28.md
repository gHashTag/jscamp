---
id: javascript28
title: 異步等待
sidebar_label: 異步等待
---

![@serverSerrverlesskiy](/img/javascript/headers/29.jpg)

有一種特殊的語法可以處理諾言 `async / await`.

## 創建一個異步函數

![creature](https://media.giphy.com/media/4T7e4DmcrP9du/giphy.gif)

異步函數⚙️由異步函數表達式⚙️定義。 基本功能⚙️看起來像這樣：

```javascript
async function foo() {
  const value = await somePromise()
  return value
}
```

我們定義一個函數⚙️使用 `async`. 此關鍵字可以與函數聲明的任何語法一起使用：

```javascript
// Function Declaration
async function foo() { ... }

// Function Expression
const foo = async function () { ... }

// Arrow function
const foo = async () => { ... }

// Class methods
class Bar {
    async foo() { ... }
}
```

![Stops](https://media.giphy.com/media/WrgAGkGrh0MD1Z2gkO/giphy.gif)

將函數定義為異步後，我們可以使用 `await` keyword.
該關鍵字放在 promise 調用之前，它將暫停功能，直到 promise 被實現或拒絕。

## 異步

![run](https://media.giphy.com/media/3N0fFF5xxcZrO/giphy.gif)

我們有關鍵字 `async`, 我們將其放在函數聲明之前以使其異步。 異步功能⚙️是一種功能⚙️，可以預期使用 `await` 關鍵字以運行異步代碼 📟

嘗試在瀏覽器控制台中鍵入以下內容：

```javascript
function hello() {
  return 'Hello'
}
hello()
```

該函數將返回 `Hello`. 沒什麼不尋常的。

但是，如果我們將其轉換為異步函數⚙️呢？ 請嘗試以下操作：

```javascript
async function hello() {
  return 'Hello'
}
hello()
```

![Promise](https://media.giphy.com/media/GFtJhEvG3681y/giphy.gif)

現在，函數調用將返回一個Promise。 這是異步函數的功能之一⚙️-它們返回 🔄 保證可以轉換為承諾的值。

您還可以創建一個異步函數表達式，如下所示：

```javascript
// Function Expression
let hello = async function () {
  return hello()
}
hello()
```

您還可以使用箭頭功能 ⚙️：

```javascript
let hello = async () => {
  return 'Hello'
}
```

所有這些功能⚙️做相同的事情。

要獲得已兌現承諾的價值，我們可以使用 `.then()` 堵塞：

```javascript
hello().then(value => console.log(value))
```

… or even like this:

```javascript
hello().then(console.log)
```

因此，添加關鍵字 `async` 使函數返回一個 promise，而不是一個值。 它還允許同步功能避免與啟動和維護等待相關的任何開銷。 只需添加 `async` 在功能⚙️使JS引擎自動優化代碼之前。

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
