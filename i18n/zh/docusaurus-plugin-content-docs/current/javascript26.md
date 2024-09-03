---
id: javascript26
title: 承諾-延遲和異步計算
sidebar_label: 承諾
---

![@serverSerrverlesskiy](/img/javascript/headers/27.jpg)

Promise是包含異步操作的將來值的對象。 例如，如果您從服務器請求一些數據，則諾言承諾我們將收到我們將來可以使用的數據。

![math](https://media.giphy.com/media/4JVTF9zR9BicshFAb7/giphy.gif)

首先，諾言具有地位 `pending`, 那麼它具有以下之一： `fulfilled` ("成功完成") or `rejected` (" 錯誤完成 ").

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

### 然後

`then` 方法用於按肯定或否定的承諾運行函數。

![Launch](https://media.giphy.com/media/1n4FT4KRQkDvK0IO4X/giphy.gif)

的語法 `then` 方法是：

```jsx
promise.then(
  function (result) {
    /* handle successful execution */
  },
  function (error) {
    /* will handle the error */
  }
)
```

的第一個 1️⃣ 參數 `then` m方法是一個函數⚙️，當將諾言傳遞到“成功完成”狀態並接收結果時執行。

第二個論點 `then` 是一個函數⚙️，當promise進入帶有錯誤的完成狀態並收到錯誤時執行.

![Error](https://media.giphy.com/media/iJCo9daAP0xugHhhfb/giphy.gif)

一個例子 `then` 方法:

```jsx
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve('done!'), 1000)
})

// resolve will run the first function passed to .then
promise.then(
  result => alert(result), // displays "done!" in one second
  error => alert(error) // will not be triggered
)
```

並且在保證中出現錯誤  時，將執行第二個:

```jsx
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error('Whoops!')), 1000)
})

// reject will run the second function passed to .then
promise.then(
  result => alert(result), // will not be triggered
  error => alert(error) // prints "Error: Whoops!" one second later
)
```

If you need to display only the result of a successful execution, then only one function can be passed to `then`:

```jsx
let promise = new Promise(resolve => {
  setTimeout(() => resolve('done!'), 1000)
})

promise.then(alert) // will print "done!" one second later
```

### 抓住

![Catch](https://media.giphy.com/media/fxeeuml8GaESfmuE4z/giphy.gif)

捕捉錯誤 `catch` 使用方法。 它可以代替 `then` 顯示錯誤消息的方法。

catch方法的語法為：

```jsx
let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Error!')), 1000)
})

promise.catch(alert) // will print "Error: Error!" one second later
```

### promise.all

此方法接受一個promise數組，並返回一個新的promise，當遇到數組中的所有promise都被拒絕時，將滿足或拒絕數組中的所有promise時將滿足該新promise。

![Return](https://media.giphy.com/media/Y08bx6Fea1BafzTlvc/giphy.gif)

例如:

```jsx
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise1 completed')
  }, 2000)
})
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise2 completed')
  }, 1500)
})
Promise.all([promise1, promise2])
  .then(data => console.log(data[0], data[1]))
  .catch(error => console.log(error))
```

在這裡，裡面的說法 `then()` 是一個數組，其中包含承諾值的傳遞順序與傳遞給它們的順序相同 `Promise.all()`.

<!-- ### promise.race

![Bomerang](https://media.giphy.com/media/g0yLXvb7Ffn9rilMIm/giphy.gif)

Этот метод принимает массив промисов и возвращает один    новый промис, который будет выполненным, как только встретится выполненный промис в массиве или же отклоняется, если отклоненный промис встречается раньше.

Например:

```jsx
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise1 выполнен')
  }, 1000)
})
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise2 отклонен')
  }, 1500)
})
Promise.race([promise1, promise2])
  .then(data => console.log(data)) // Promise1 выполнен
  .catch(error => console.log(error))
```

Тут мы имеем два промиса, где один выполняется через `1` секунду, а другой отклоняется через `1.5` секунды. Как только первый 1️⃣ промис выполнен, возвращенный из `Promise.race()` промис будет иметь статус выполненного не дожидаясь статуса второго промиса.

Здесь data, которая передается в `then()` является значением первого, выполненного, промиса.

По итогу, `Promise.race()` дожидается первого промиса и берет его статус как статус возвращаемого промиса. -->

## 問題?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

寫給 [Discord](https://discord.gg/6GDAfXn) 聊天.

## 問題：

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

承諾成功時調用的方法的名稱是什麼？

1. `reject`
2. `resolve`

可以使用什麼方法來檢查數組中所有 promise 的實現？

1. `promise.all`
2. `promise.race`

用什麼方法來捕捉承諾中的錯誤？

1. `then`
2. `catch`

為了了解您學到了多少本課程，請對 [mobile application](http://onelink.to/njhc95) 我們學校就這個話題。

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## 鏈接：

1.  [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise)
2.  [Learn JavaScript](https://learn.javascript.ru/promise)
3.  [Understanding Promises](https://blog.bitsrc.io/understanding-promises-in-javascript-c5248de9ff8f?gi=1e459ca846d9)

## 貢獻者 ✨

T向這些好人致敬 ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/FELiX-RN"><img src="https://avatars0.githubusercontent.com/u/72006627?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Philipp Dvinyaninov</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=FELiX-RN" title="Documentation">  </a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)
