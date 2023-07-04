---
id: javascript27
title: 提取 API
sidebar_label: 提取 API
---

![@serverSerrverlesskiy](/img/javascript/headers/28.jpg)

 `Fetch API` 允許 JavaScript 使用HTTP請求與服務器通信，並且是XMLHttpRequest類的更好替代。 查詢由 `fetch()` 方法，返回  [Promise](https://jscamp.app/docs/javascript24).

![Exchange](https://media.giphy.com/media/OPQiZUC381IJ8Sh7UY/giphy.gif)

## 句法

![Book](https://media.giphy.com/media/l0HlOBZcl7sbV6LnO/giphy.gif)

```jsx
fetch(url, { options })
```

- `url` - 發送請求的URL;
- `options` - 請求參數。

通過指定 `fetch()` 沒有方法 `options`, 您將收到一個GET請求，該請求將從 `URL`.

## 參數要求

![Option](https://media.giphy.com/media/AazZSBdhIdH9K/giphy.gif)

第二個論點 `{options}` 接受請求參數。 參數清單:

1. `method` - 請求方法 (GET, POST, PUT, DELETE, HEAD);
2. `headers` - HTTP 標頭;
3. `body` - 請求正文（用於方法：POST / PUT);
4. `cache` - 緩存模式 (default, reload, no-cache);
5. `mode` - 請求模式 (cors, no-cors, same-origin);
6. `redirect` - 指定如何處理重定向 (follow, error, manual);
7. `referrer` - 請求推薦人;
8. `signal` - 中止信號，中斷請求;
9. `credentials` - 與請求一起發送Cookie-MIT，同源。

```jsx
fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
  mode: 'no-cors'
})
```

## 收到回應

![Bascketball](https://media.giphy.com/media/l0MYwdebx8o0XI56E/giphy.gif)

`fetch()` 方法返回  [Promise](https://jscamp.app/docs/javascript24) 的對象 `Response` 類，具有以下屬性：

1. `status` - 回應碼;
2. `statusText` - 對應於響應代碼的短信message;
3. `ok` - 指示響應代碼成功的布爾值 (true: 200-299);
4. `headers` - 具有響應標頭的對象，其中鍵是標頭的名稱，鍵值是與鍵對應的標頭的值;
5. `url` - 請求發送到的URL;
6. `body` - 輸入響應數據 `ReadableStream` 格式
7. `bodyUsed` - 指示數據讀取的布爾值。

```javascript
fetch('https://jsonplaceholder.typicode.com/users').then(response => console.log(response))
```

## 響應處理

![Download](https://media.giphy.com/media/ECoFRCrMgVoQg/giphy.gif)

傳輸的數據格式為 `ReadableStream`. 可以使用以下方法來更改格式：

1. `text()` - 將答案轉換為字符串;
2. `json()` - 將響應轉換為JSON格式;
3. `blob()` - c將響應轉換為Blob對象;
4. `formData()` -響應被轉換為FormData實例;
5. `arrayBuffer()` - 將響應轉換為ArrayBuffer對象.

將響應轉換為ArrayBuffer對象.

```jsx
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
```

## 錯誤處理

![Error](https://media.giphy.com/media/DHBGehJ3FSZEygszX3/giphy.gif)

我們可以找出是否 `fetch()` 已使用 “狀態” 和 “確定” 屬性完成了錯誤。

```jsx
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      console.log('Something went wrong ... Status:' + response.status)
    } else {
      return response.json()
    }
  })
  .then(data => console.log(data))
```

With help `.catch()`

```jsx
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error))
```

## 索取範例

![Math](https://media.giphy.com/media/xT1Ra5h24Eliux3UVq/giphy.gif)

```javascript
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data[0].name + ' and ' + data[2].name))
  .catch(error => console.log(error))
```

一樣，使用 `async / await` 語法，我們將在下一篇文章中更詳細地了解。

```javascript
let response = await fetch('https://jsonplaceholder.typicode.com/users')
let data = await response.json()
console.log(data[0].name + ' and ' + data[2].name)
```

## 問題？

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Write to [Discord](https://discord.gg/6GDAfXn) chat.

## 問題:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

那是什麼 `fetch()` 方法返回？

1.功能
2.對象
3.承諾

僅在fetch（）中給出URL參數，我們得到什麼請求？

1. `POST`
2. `GET`
3. `PUT`

HTTP標頭指定了什麼參數？

1. `redirect`
2. `headers`
3. `credentials`

您應使用哪種方法將響應轉換為字符串？

1. `blob()`
2. `json()`
3. `text()`

那是什麼 `ok` 類對象的屬性均值 `Response`?

1.回應碼
2.響應碼成功
3.從請求中讀取數據

為了了解您學到了多少本課程，請對 [mobile application](http://onelink.to/njhc95) 我們學校就這個話題。

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

## 鏈接

1. [Learn JavaScript](https://learn.javascript.ru/fetch)
2. [MDN Web Docs](https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch)
3. [JS Tutorial](https://www.javascripttutorial.net/javascript-fetch-api/)

## 貢獻者 ✨

感謝這些好人 ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr> 
    <td align="center"><a href="https://github.com/IIo3iTiv"><img src="https://avatars1.githubusercontent.com/u/72025062?v=4?s=200" width="200px;" alt=""/><br /><sub><b>IIo3iTiv</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=IIo3iTiv" title="Documentation">  </a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)
