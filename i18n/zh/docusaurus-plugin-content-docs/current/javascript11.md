---
id: javascript11
title: 類型轉換和轉換
sidebar_label: 類型轉換和轉換
---

![@serverSerrverlesskiy](/img/javascript/headers/09.jpg)

## 類型強制（類型強制）

它是值從一種數據類型到另一種數據類型（例如，字符串到數字）的自動或隱式轉換。 類型轉換與類型轉換類似，因為它們都將值從一種數據類型轉換為另一種數據類型，但有一個關鍵的區別-類型轉換是隱式的，而類型轉換可以是隱式的或顯式的。

![transformation](https://media.giphy.com/media/xT4uQr9H3EDL7Ha2hq/giphy.gif)

例子 👇:

```jsx live
function learnJavaScript() {
  const value1 = '5'
  const value2 = 9
  let sum = value1 + value2

  return sum
}
```

在上面的示例中，JavaScript強制轉換為數字 `9` 成一個字符串，然後將兩個2️⃣值連接在一起，得到字符串 `59`. JavaScript可以在字符串或數字之間選擇，然後選擇使用字符串。

編譯器可以轉換字符串 `5` 到一個數字並返回 `14`, 但事實並非如此。 要獲得此結果，您需要顯式轉換字符串 `5` 到使用 `Number()` 👇 方法:

```jsx live
function learnJavaScript() {
  const value1 = '5'
  const value2 = 9
  let sum = Number(value1) + value2

  return sum
}
```

## 類型轉換

![Transformation](https://media.giphy.com/media/l2SpMMVivErM0Q7jG/giphy.gif)

表示將數據從一種數據類型傳輸到另一種數據類型。 隱式轉換發生在編譯器自動分配（分配）數據類型時，但是源代碼也可能明確要求轉換完成。

### 字符串轉換

![Transformation](https://media.giphy.com/media/RLVHPJJv7jY1q/giphy.gif)

當您想將某些東西表示為字符串時，就會發生字符串轉換。 例如，我們可以使用 `String (value)` 將值轉換為字符串的函數 👇:

```jsx live
function learnJavaScript() {
  let value = true // boolean

  value = String(value)
  return typeof value
}
```

轉換以明顯的方式發生。 `true` ✅ 變成`"true"`✅

### 數值轉換

![Transformation](https://media.giphy.com/media/4H5nOUqX7FywOGpCF7/giphy.gif)

數值轉換發生在數學函數和表達式中。

```jsx live
function learnJavaScript() {
  let value = '6' / '2'

  return value
}
```

我們可以使用 `Number (value)` 函數顯式轉換 `value` 到一個數字 👇:

```jsx live
function learnJavaScript() {
  let str = '123'
  let num = Number(str)

  return typeof num
}
```

當我們期望從字符串上下文中獲取數字（例如表單中的文本字段）時，通常會使用顯式轉換。

如果無法將字符串顯式轉換為數字，則轉換結果將為 `NaN` (非數字, "not a number "). 例如 👇:

```jsx live
function learnJavaScript() {
  let age = Number('Any string instead of a number')

  return age
}
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
