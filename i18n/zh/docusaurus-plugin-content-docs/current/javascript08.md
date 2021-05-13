---
id: javascript08
title: 對或錯?
sidebar_label: 對或錯?
---

![@serverSerrverlesskiy](/img/javascript/headers/08.jpg)

本章將有很多新事物，但這應該並不困難：畢竟，總的來說，所有事物都圍繞著一個簡單的想法-對還是錯？

到目前為止，我們一直只處理原始數據類型-數字和字符串。

您以前在編程中遇到過“原始”一詞嗎？ 如果不是，我將解釋：“原始”（它們也說“簡單”）表示此數據類型不是對象（我們將回到這一點）並且沒有內置的工作方法（即 是，功能⚙️）。

![True](https://media.giphy.com/media/peBw21sPZnlqE/giphy.gif)

您肯定需要的數據類型稱為布爾值或布爾值。 布爾類型始終具有以下值： `真的` ✅ - true, 或者 `錯誤的` ❎ - false. 只有這樣，別無其他！ 他在撒謊或在說真話-搖晃或消失，燈光開或關，或不存在。 您要么做作業，要么沒有做。 只有兩個 2️⃣ 值是 `真的` ✅  或者 `錯誤的`.

## 平等經營者

![操作員](https://media.giphy.com/media/9r1n7HzkPT9sM1Wp0G/giphy.gif)

當我們需要比較JavaScript中的某些內容時，布爾值會派上用場。 當需要時，我們立即調用比較運算符。
現在，我們將依次研究所有八個比較運算符，但事實是，由於每個運算符，我們都不在乎
我們總是會得到一個布爾值-要么 `真的` ✅  或者 `錯誤的` ❎ 

### 等於 `==`

![正義](https://media.giphy.com/media/3o85xDf6hr7ajhVL9K/giphy.gif)

equals運算符首先將操作數轉換為相同類型，然後進行嚴格比較。 如果兩個操作數都是對象，則JavaScript會比較內部引用，如果它們引用內存中的同一對象，則它們是相等的。

句法 📖:

```javascript
x == y
```

例子:

```javascript
1 == 1 // true
'1' == 1 // true
1 == '1' // true
3 == 5 // false
0 == false // true
'foo' == 'bar' // false
```

將示例一個接一個地輸入到 🔔 `bool` 我們的變量 `LIVE EDITOR`

```jsx live
function learnJavaScript() {
  let bool = 1 == 1
  return bool.toString()
}
```

### 不等於 `! =`

![等於](https://media.giphy.com/media/xT8qBit7YomT80d0M8/giphy.gif)

不等於運算符的返回 🔄 `true` ✅ 如果操作數不相等。 它類似於相等運算符，在比較之前將操作數轉換為相同類型。 如果兩個操作數都是對象，則JavaScript將比較內部引用，如果它們引用內存中的不同對象，則內部引用不相等。

句法 📖:

```javascript
x != y
```

例子:

```javascript
1! = 2 // true
1! = '1' // false
1! = '1' // false
1! = True // false
0! = False // false
'foo'! = 'bar' // true
```

將示例一個接一個地輸入到 🔔 `bool` 我們的變量 `LIVE EDITOR`

```jsx live
function learnJavaScript() {
  let bool = 1 != 2
  return bool.toString()
}
```

### 嚴格等於 `===`

![平等](https://media.giphy.com/media/4W0ZwRP8y7pQtcUMyQ/giphy.gif)

如果操作數嚴格相等，則運算符返回true。 與equals運算符不同，此運算符不會將操作數轉換為相同類型。

句法 📖:

```javascript
x === y
```

例子:

```javascript
3 === 3 // true
3 === '3' // false
'foo' === 'foo' // true
```

操作員確保值和類型都嚴格相同。 如果是 `3 === '3'`, 該值當然是相同的，但類型不同：第一個是數字，第二個是字符串。

將示例一個接一個地輸入到 🔔 `bool` 我們的變量 `LIVE EDITOR`

```jsx live
function learnJavaScript() {
  let bool = 3 === 3
  return bool.toString()
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
