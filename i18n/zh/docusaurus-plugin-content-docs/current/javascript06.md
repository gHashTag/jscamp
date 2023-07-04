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

## 字符串是不可變的

![Tree](https://media.giphy.com/media/YxlUxrYGw2w9y/giphy.gif)

JavaScript中字符串的內容無法更改。 您不能將符號放在中間並替換它。 一旦創建了一個字符串-️-就像那樣永遠。🏗️ 您可以創建一個新字符串並將其寫入相同的變量，而不是舊的變量。

```jsx live
function learnJavaScript() {
  let str = 'Hi'
  str = 'P' + str[1] // replace string
  return str
}
```

## 流行的字符串方法

### 弦長

![Length](https://media.giphy.com/media/Y1GK5MEiRa3OSVsxHK/giphy.gif)

 `length` 屬性返回字符串中代碼值的數量。

```jsx live
function learnJavaScript() {
  let str = 'My\n'.length
  return str
}
```

請注意 `\ n` 是一個特殊字符，因此這裡是正確的：字符串的長度為3。

### 訪問符號

![Door](https://media.giphy.com/media/xUA7aLpVxPVEoEPXji/giphy.gif)

那裡有兩個 2️⃣ 獲取字符串中特定字符的方法 第一種方法使用 `charAt ()` 方法。 首先 1️⃣ 字符在零位置：

```jsx live
function learnJavaScript() {
  let str = 'cat'.charAt(2)
  return str
}
```

您還可以使用方括號獲得符號：

```jsx live
function learnJavaScript() {
  let str = 'cat'[2]
  return str
}
```

方括號是獲取字符的現代方式，而`charAt`主要是出於歷史原因而存在。

### 更改字符大小寫

![Capital letter](https://media.giphy.com/media/3orifcBbnezczHmU8g/giphy.gif)

要將字符串的字母轉換為大寫，請使用 `toUpperCase ()` 方法。

```jsx live
function learnJavaScript() {
  let str = 'Interface'.toUpperCase()
  return str
}
```

小寫`toLowerCase ()`

```jsx live
function learnJavaScript() {
  let str = 'Interface'.toLowerCase()
  return str
}
```

### 連接（連接）字符串

![Chain](https://media.giphy.com/media/l3q2EOu4nu1D8uJKU/giphy.gif)

要從現有字符串構造一個字符串，請使用加號 `+` 連接字符串

```jsx
let name = 'Mary '
let activity = 'drink tea'
let bio = 'Our guest ' + name + activity + '.'
bio // Our guest Mary drink tea.
```

<!-- Теперь попробуйте построить строку сами.

```jsx live
function learnJavaScript() {
  let name = 'John'
  let age = '15'
  let country = 'USA'
  let enjoyment = 'trevel'
  let slogan = '"Don\'t worry, be happy!"'
  let bio =
    'My name is ' +
    name +
    '. I am ' +
    age +
    " years old. I'm from " +
    country +
    '. I like ' +
    enjoyment +
    ', and my slogan for life: ' +
    slogan +
    '.'
  bio
  return bio
}
```

И `+=` для присвоения с объединением.

```jsx live
function learnJavaScript() {
  let str = '123'
  str += 456
  return str
}
``` -->

因此，我們熟悉了JavaScript中最流行的數據類型及其最常用的方法。

## 問題？

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Channel in [Discord](https://discord.gg/6GDAfXn) after paying on [Patreon](https://www.patreon.com/javascriptcamp).

## 問題：

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

如何用JavaScript不寫字符串？

1.單引號
2.反斜杠
3.反引號

為什麼在字符串中不使用反斜杠？

1.用於屏蔽
2.寫特殊字符
3.結束行

找到有錯誤的行🙅‍♂️

1. let str = \ `It's not complicated \`
2. let str = "'I think so, indeed!' - cried he. "
3. let str = 'My slogan: "Don't worry, be happy!"'

選擇“換行符”

1. `\ n`
2. `\`
3. `\ *`

什麼字母會`'sport' [3]` 返回？

1. `o`
2. `r`
3. 不會返回任何東西

如何更改JavaScript字符串中的字符？

1.換行
2.找到符號並替換它
3.創建新行並將其寫入相同的變量，而不是舊的

使用什麼方法將字母大寫？

1. `'Interface'.toUpperCase()`
2. `'Interface' [0] .toLowerCase()`
3. `'Interface'.toLowerCase()`

什麼字符用來連接字符串？

1. `=`
2. `+`
3. `+ =`

為了了解您學到了多少本課程，請對 [移動應用](http://onelink.to/njhc95) 我們學校就這個話題。

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

## 鏈接

1. [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Data_structures)
2. [Code for Teens: The Perfect Beginner's Guide to Programming, Volume 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)
3. [JavaScript.ru](https://learn.javascript.ru/types)

## 貢獻者 ✨

感謝這些好人 ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/Alena-Maitri"><img src="https://avatars1.githubusercontent.com/u/72432063?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Alena Yanbukhtina</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=Alena-Maitri" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)
