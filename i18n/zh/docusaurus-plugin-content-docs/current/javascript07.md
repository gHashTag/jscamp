---
id: javascript07
title: 號碼
sidebar_label: 號碼
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/07.jpg)

那裡有兩個 2️⃣ 現代數字的類型 JavaScript:

### `number`

JavaScript中的普通數字以64位IEEE-754格式存儲，也稱為雙精度浮點數。 這些是我們最常使用的數字。 整數不被視為單獨的數字類型。 除了浮點數，數字數據類型還包括三個字符值： `Infinity`,` -Infinity`, 和 `NaN` （非數字）。

![號碼](https://media.giphy.com/media/JtBZm3Getg3dqxK0zP/giphy.gif)

### `bigInt`

數字使使用任意長度的整數成為可能。 很少需要它們，並且在需要使用最大安全整數值之外的值的情況下使用它們 `Number`.

絕不會引用任何數字，即使是帶有很多小數位的小數。

您可以使用四種類型的數字文字：十進制，二進制，八進制和十六進制。 由於後三者很少使用，我們將省略其詳細描述description️，但好奇的人可以熟悉它們 [這裡](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Numbers_and_dates).

:::caution
Be careful when using leading zeros! This means you don't need to put zero before the decimal number.
:::

```jsx
1234567890
42

0888 // 888 is treated as decimal
0777 // treated as non-strict octal (511 decimal)
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
