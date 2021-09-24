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

## 算術運算

![Arithmetic operation](https://media.giphy.com/media/gEvab1ilmJjA82FaSV/giphy.gif)

可以使用兩個或多個整數來形成新的整數。 有很多方法可以組成一個新的整數。 由兩個或多個數字組成一個新數字的方法稱為算術。
通常，算術運算有很多，但只有四個基本運算：加法，減法，乘法和除法。 之所以稱它們為基本的，是因為將所有其他動作都帶給了他們。

加號 `+` 用於表示加法： `4 + 4` 回答：` 8`

減去 `–` 減法：` 7 - 6` 回答： `1`

星號 `*` 表示乘法： `3 * 4` 回答：` 12`

正斜杠 `/` 師： `15 / 5` 回复：` 3`

如果一行中執行了多個動作，則使用-（括號）將它們彼此分開，並使代碼 📟 更具可讀性。 讓我們在控制台中輸入以下語句。 他們每個人的答案應該只包含一位數字 9️⃣:

```
 3 * (2 + 1)
(3 + 9) / (10 - 6)
(2 + 3 * 4) / (6 + 1)
 2 * (5 - 8 / 2) * (3 + 1)
```

將以下值輸入 `LIVE EDITOR` 👇:

```jsx {2} live
function learnJavaScript() {
  let result = 2 + 3 // here

  return result
}
```

## 組合作業

![Conbination](https://media.giphy.com/media/l2Sq8jlaqqnqBoGhG/giphy.gif)

運算符是對錶達式中的操作數執行的某些操作的象徵性指定 (例如：`+`, `-`,`*`,`/`).

操作數是在程序中處理的某個值。 操作數可以是任何數據類型。 運算符左側的操作數是左側操作數，運算符右側的操作數是右側操作數。

組合分配的主要算子等於 `=`, 並將右操作數的值賦給左一個。 那是 - `x = y` 將值分配給變量 🔔 `y`, 到變量 🔔 `x`.

您已經多次看到如何為變量分配值 🔔 使用數學運算符。 例如，像這樣：

```javascript
let sum = 2 + 3 // sum value 7
```

您可能沒有時間忘記在任何時候都可以更改已知變量的值 🔔:

```jsx live
function learnJavaScript() {
  let sum = 2 + 3
  sum = sum + 3 // now the sum value is 8
  return sum
}
```

加法分配 `+ =` 為了快速增加一個變量的值！ 這裡有些例子：

```javascript
let value = 5
value += 2 // value is now 7 (same as value = // value + 2)
value += 3 // value is now 10 (same as value = // value + 3)
value = value + value // 20 (or you can just value + = // value)
value += value // 40 (same as value = value + // value)
```

您已經猜想這些事情可以與其他數學運算一起使用，對吧？

```javascript
value -= 25 // value is now 15 (same as value = value - // 25)
value *= 2 // value is now 30 (same as value = // value * 2)
value /= 3 // value is now 10 (same as value = // value / 3)
value // Answer: 10
```

接下來，檢查中所有列出的示例 `LIVE EDITOR`:

```jsx live
function learnJavaScript() {
  let value = 0 + 0
  return value
}
```

您可以閱讀有關合併作業的更多信息 [這裡](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Assignment_Operators)

## 遞增和遞減

![增量](https://media.giphy.com/media/dX9qnaX4OH3avyMcU3/giphy.gif)

運營商 `++` （遞增）將其操作數的值增加一。 如果操作數的值不是數字，則運算符會自動將其轉換為數字，再將其加1，然後返回結果，該結果將分配回操作數：

```jsx live
function learnJavaScript() {
  let increment = 0
  increment++
  return increment
}
```

運營商`--` （decrement）的工作方式與增量運算符相似，但不會增加其操作數的值，相反，它會減少一個：

```jsx live
function learnJavaScript() {
  let decrement = 6
  decrement--
  return decrement
}
```

## 模運算符

![function](https://media.giphy.com/media/seVVu09CPz2upPeU1s/giphy.gif)

 `%` （百分比）表示除法的其餘部分。 運算符返回左操作數除以右的整數餘數。 收益 🔄 值總是得到除數的符號，而不是除數。 它使用內置函數⚙️模，這是除法的整數餘數 ⚙️ `let1`通過 `let2`.

`12% 5` result` 2`

`NaN% 2` results in` NaN`

`1% 2` result` 1`

`2% 3` result` 2`

`4% 2` result` 0`

`5.5% 2` result` 1.5`

查看中列出的所有示例 `LIVE EDITOR` 您將立即了解所有內容：

```jsx live
function learnJavaScript() {
  let modulo = 12 % 5
  return modulo
}
```

## 四捨五入

![Balls](https://media.giphy.com/media/6glYLqOQ3dlok/giphy.gif)

 `Math.round ()` 方法返回舍入到最接近整數的數字。 如果數字的小數部分大於或等於“ 0.5”，則參數將四捨五入為最接近的較大整數。 如果數字的小數部分小於 `0.5`, 參數將四捨五入到最接近的下整數。

`result = Math.round (20.49)` Returns 20

`result = Math.round (20.5)` Returns the value 21

check it yourself:

```jsx live
function learnJavaScript() {
  let result = Math.round(20.49)
  return result
}
```

## 問題？

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

頻道輸入 [Discord](https://discord.gg/6GDAfXn) 付款後 [Patreon](https://www.patreon.com/javascriptcamp).

## 問題：

![問題：](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

什麼算術運算稱為基本運算？

1.加，減
2.乘法，除法
3.加，減，乘，除

什麼是正確的閱讀 `+ =`?

1.增量
2.附加作業
3.加等於

如何用符號寫增量 (s)?

1. `++`
2. ` --`
3. `+`

其餘部門的標誌是什麼？

1. `%`
2. `/`
3. `\`

有什麼價值 `Math.round` 何時返回 `Math.round (20.62)`被申請;被應用？

1. `22`
2. `20`
3. `21`

為了了解您學到了多少本課程，請對 [移動應用](http://onelink.to/njhc95) 我們學校就這個話題。

![Sumerian school](/img/app.jpg)

## 鏈接

1. [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Numbers_and_dates)
2. [Code for Teens: The Perfect Beginner's Guide to Programming, Volume 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)
3. [JavaScript.ru](https://learn.javascript.ru/number)
4. [Integer arithmetic](https://maths-public.ru/arithmetic/actions)

## 貢獻者 ✨

感謝這些好人 ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">📖</a><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>
  
</table>

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
