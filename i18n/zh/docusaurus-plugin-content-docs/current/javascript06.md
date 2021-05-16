---
id: javascript06
title: 弦樂
sidebar_label: 弦樂
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/06.jpg)

在 JavaScript 中，任何文本數據都是字符串。 但是，不要忘記數字也可以寫在字符串中。 在所有數據類型中，您可能會最多使用字符串。 讓我們分析創建新行的所有選項。

<!-- ## Video

<YouTube videoId="ocQTm9K2vdo" /> -->

## 單引號或雙引號

![quotation marks](https://media.giphy.com/media/7cSTvZ4hI6ABZkcTwk/giphy.gif)

要么 ‘single’ 要么 “double” 引號用於創建字符串

```jsx
let single = 'Hello World'
let double = "Hello World" // prettier-ignore
```

您可以同時使用它們，最主要的是，如果您以單行開始，儘管內部可能有雙打，但也必須以單行結束。 並且，因此，用雙引號引起來。

```jsx
let double = "Don't you think so, d'Artagnan?"
let single = '"I think so, indeed!" - cried he.'
```

## 反斜杠

![shielding](https://media.giphy.com/media/3og0IPizf4zPR6VMt2/giphy.gif)

如果在字符串內部使用與外部相同的引號，則必須使用反斜杠將其轉義，即所謂的“轉義字符”。 附在➕之前 `\ '' 這樣它就不會指示行尾。

```jsx live
// prettier-ignore
function learnJavaScript() {
  let backticks = 'It\'s not complicated'
  return backticks
}
```

注意反斜杠 `\` 僅用於解釋器正確讀取字符串，但未編寫 🖊️ 讀取後的字符串。 當字符串保存到主存儲器中時`\` 字符未添加到其中。 您可以在調查結果中清楚地看到這一點。

## 反引號

![Dollar](https://media.giphy.com/media/26BoCwvDEWXnGlLyM/giphy.gif)

在編寫字符串時，您可以使用 \ `back \` 引號

單引號和雙引號的工作方式基本上相同，如果使用反引號，則可以通過將花括號括起來的美元符號將任意JavaScript表達式插入這樣的字符串中 `$ {...}` 👇:

```jsx live
function learnJavaScript() {
  const sum = (a, b) => a + b // this is a function, we'll get to know it later in the course
  return `1 + 2 = ${sum(1, 2)}`
}
```

反引號的另一個優點是它們可以跨越多條線

```jsx live
function learnJavaScript() {
  let guestList = `Guests:
    * John
    * Pete
    * Mary
   `
  return guestList
}
```

也可以使用所謂的“換行”字符，用單引號和雙引號創建多行字符串，寫為 `\ n`. Java腳本中的所有特殊字符均以反斜杠開頭 `\` 是的，我們可以在瀏覽器控制台中進行檢查（“ LIVE EDITOR”無法正確顯示）。

```jsx
let guestList = 'Guests:\n * John\n * Pete\n * Mary'

guestList // multi-line guest list
```

![console](/img/javascript/12.png)

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
