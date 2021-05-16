---
id: javascript27
title: 提取 API
sidebar_label: 提取 API
---

![@serverSerrverlesskiy](/img/javascript/headers/28.jpg)

 `Fetch API` 允許 JavaScript 使用HTTP請求與服務器通信，並且是XMLHttpRequest類的更好替代。 查詢由 `fetch()` 方法，返回 🔄 [Promise](https://react-native-village.github.io/docs/javascript24).

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
