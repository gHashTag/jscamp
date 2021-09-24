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

### 嚴格不等於 `! ==`

![ruler](https://media.giphy.com/media/tPK9Fyl1gyIkU6XbZv/giphy.gif)

如果操作數不相等或它們的類型彼此不同，則嚴格不等於運算符將返回true。

句法 📖:

```javascript
x !== y
```

例子:

```javascript
3 !== '3' // true
4 !== 3 // true
```

將示例一個接一個地輸入到 🔔 `bool` 我們的變量 `LIVE EDITOR`

```jsx live
function learnJavaScript() {
  let bool = 3 !== 3
  return bool.toString()
}
```

為什麼不使用 `==` 和 `! =`? 但是因為總的來說，從來沒有這樣的需要。只要您可以使用它們，就可以同時使用 `===` 和 `! ==`. 如果您想在答案中提供更大的靈活性（例如， `1` 和 `'1'` 或者 `true` 同樣被接受 ✅), 那麼您只需在代碼本身中包含所需的答案選項即可（無需更改此 `===`).

:::info Just understand the rule
Never use `==` or `! =`
:::

## 比較運算符Comparison Operators

### 更多的 `>`

![不相等](https://media.giphy.com/media/jPfQcPdmI9bTXpa7hi/giphy.gif)

如果左操作數的值大於右操作數的值，則more運算符將返回 true。

句法 📖:

```javascript
x > y
```

例子:

```javascript
4 > 3 // true
1 > 5 // false
```

將示例一個接一個地輸入到 🔔 `bool` 我們的變量 `LIVE EDITOR`

```jsx live
function learnJavaScript() {
  let bool = 4 > 3
  return bool.toString()
}
```

### 較少的 `<`

![小的](https://media.giphy.com/media/82tNeaMTlEsdW/giphy.gif)

如果左側的操作數的值小於右側的操作數的值，則小於運算符返回true。

句法 📖:

```javascript
x < y
```

例子:

```javascript
3 < 4 // true
5 < 2 // false
```

將示例一個接一個地輸入到 🔔 `bool` 我們的變量 `LIVE EDITOR`

```jsx live
function learnJavaScript() {
  let bool = 3 < 4
  return bool.toString()
}
```

### 大於或等於 `>=`

![比較運算符](https://media.giphy.com/media/icJA0VF7ntoEL18Jez/giphy.gif)

運算符大於或等於，如果左側的操作數的值大於或等於右側的操作數的值，則返回 true。

句法 📖:

```javascript
x >= y
```

例子:

```javascript
4 >= 3 // true
3 >= 3 // true
```

在中輸入示例 🔔 `bool` 一對一可變:

```jsx live
function learnJavaScript() {
  let bool = 4 >= 3
  return bool.toString()
}
```

### 小於或等於`<=`

![較少的](https://media.giphy.com/media/UQbDc6dyK6WjpCXMvt/giphy.gif)

運算符小於或等於，如果左側的操作數的值小於或等於右側的操作數的值，則返回 true。

句法 📖:

```javascript
x <= y
```

例子:

```javascript
3 <= 4 // true
3 <= 3 // true
```

在中輸入示例 🔔 `bool` 一對一可變:

```jsx live
function learnJavaScript() {
  let bool = 3 < 4
  return bool.toString()
}
```

## 條件構造

![boolean](https://media.giphy.com/media/12W5Sg2koWYnwA/giphy.gif)

您必須在想：“好吧，所有這些布爾邏輯的東西都很簡單……它們可能幾乎沒有用，而且不經常使用。” 無論如何！ 布爾值在編程中的使用率很高，並且經常以條件（或表達式）的形式使用。

### 什麼是“有條件的”?

![thoughtful](https://media.giphy.com/media/IyyGGEMZhZIZwAxnUS/giphy.gif)

好問題！ 條件語句是一個子句，用於根據給定條件運行某些代碼塊📟。 條件（例如，比較時 `x === y`) 總是返回布爾值-要么 true` ✅ 或者 `false` ❎. 因此，如果值是 `true` ✅, 然後應運行代碼，否則應跳過代碼塊。 讓我們看一些例子。

### 條件表達式 `if`

![Instruction manual](https://media.giphy.com/media/2mDSs3gPUyrcMqtheg/giphy.gif)

`if` 施工執行 `instruction1`, 如果條件是 `true` ✅, 如果條件是 `false` ❎, 然後 `instruction2` 被執行.

句法 📖:

```javascript
if (condition) {
  instructions1
} else {
  instructions2
}
```

`condition` -
An expression that is either true or false.

`instruction1` -
如果以下值執行一條指令 `condition` 是真的 ✅. 可以是任何語句，包括嵌套 `if`. 當不需要任何操作時，可以使用空語句。

`instruction2` -
如果以下值執行指令 `condition` 是假的。 可以是任何語句，包括嵌套`if`. 指令也可以分組為一個塊。 更改年份 🔔 `whatIsTheYearNow` 變量並記下輸出。

```jsx live
function learnJavaScript() {
  let whatIsTheYearNow = 2021

  if (whatIsTheYearNow === 2021) {
    whatIsTheYearNow = true
  } else {
    whatIsTheYearNow = false
  }

  return whatIsTheYearNow.toString()
}
```

### `if` 不僅具有布爾值

![No](https://media.giphy.com/media/ftqLysT45BJMagKFuk/giphy.gif)

條件表達式不僅可以用於布爾值，也可以用於不完全相同的值 `true` ✅ or` false` ❎ 因此，通常，我們可以安全地在括號和布爾值中使用它們。

- 除零外的所有整數 - `true` ✅
- 一串帶至少一串帶至少一串 `true` 特點 ✅
- 一個空字符串是 `false` ❎

讓我們嘗試一下，在 🔔 `bool` 👇 多變的:

```jsx live
function learnJavaScript() {
  let bool = 1

  if (bool) {
    bool = true
  } else {
    bool = false
  }

  return bool.toString()
}
```

### 中的比較運算符 `if` 表達方式

![made for each other](https://media.giphy.com/media/6yxIP39EMwP7IlIA28/giphy.gif)

到目前為止，我們已經處理了與 `if`, 但是到目前為止，我們還沒有一起使用它們，它們只是為彼此而造！

```jsx live
function learnJavaScript() {
  let year = 2021

  let output

  if (year < 2020) {
    output = 'less than 2020'
  } else {
    output = 'more than 2020'
  }
  return output
}
```

### 多種的 `else if` 情況

有時，您需要檢查條件的多個變體。 這是通過使用 `else if` 堵塞。 更改年份並查看輸出。

```jsx live
function learnJavaScript() {
  let year = 2021

  let output

  if (year < 2020) {
    output = 'less than 2020'
  } else if (year > 2020) {
    output = 'more than 2020'
  } else {
    output = 'equals 2020'
  }
  return output
}
```

### 條件（三元）運算符 `?`

![question mark](https://media.giphy.com/media/wH4rY2nPnEnp6/giphy.gif)

T他是唯一接受三個操作數的JavaScript運算符： `condition` 跟一個問號 `?`, 然後 `expression`, 如果條件為真，則執行此命令，然後加冒號 `:`, 最後， `expression` 如果條件為假，則執行該命令。 它通常用作 `if` 陳述。

句法 📖:

```javascript
condition ? expression1 : expression2
```

參數:

`condition` - 取值的表達式 `true` ✅ or `false` ❎.

`expression1`,` expression2` - 其值可以是任何類型的表達式。

例子 👇:

```jsx live
function learnJavaScript() {
  let age = 20
  let output = age > 18 ? 'Yes' : 'No'

  return output
}
```

## 問題?

![問題](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Write to [Discord](https://discord.gg/6GDAfXn) chat.

## 問題:

![問題](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

等於運算符中使用什麼語法？

1. `x == y`
2. `x = y`
3. `x - y`

在這種情況下，不等於運算符返回 `true`?

1.如果操作數不相等
2.如果操作數相等
3.如果兩個操作數都是對象

算子等於與嚴格等於有何不同？

1.嚴格相等不會將操作數轉換為相同類型
2.嚴格將操作數均衡為相同類型
3.嚴格確保值相同，但類型不同

嚴格不相等的運算符的語法是什麼？

1. `!= `
2. `!== `
3. `==! `

在哪種情況下，操作員會返回更多假？

1.如果左操作數的值大於右操作數的值
2.如果右操作數的值大於左操作數的值
3.如果操作數的值相同

大於或等於的運算符的語法是什麼？

1. `> = `
2. `> => `
3. `> <= `

在哪個示例中，小於或等於運算符將返回true？

1. `4 <= 5`
2. `5 <= 4`
3. `3 <= 2`

什麼情況

1.說明
2.表達
3.價值

哪個塊用於檢查條件的多個變體？

1. `else if`
2. `if`
3. `for`

哪個運算符採用3個操作數？

1.條件（三元）運算符
2.大於或等於
3.小於或等於

## 鏈接

1. [MDN web docs - Comparison Operators](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Операторы_сравнения)
2. [Code for Teens: The Perfect Beginner's Guide to Programming, Volume 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)

## 貢獻者 ✨

感謝這些好人([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">📖</a><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>
  
</table>

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
