---
id: javascript11
title: 類型轉換和轉換
sidebar_label: 類型轉換和轉換
---

![@serverSerrverlesskiy](/img/javascript/headers/09.jpg)

## 類型強制（類型強制）

它是值從一種數據類型到另一種數據類型（例如，字符串到數字）的自動或隱式轉換。 類型轉換與類型轉換類似，因為它們都將值從一種數據類型轉換為另一種數據類型，但有一個關鍵的區別-類型轉換是隱式的，而類型轉換可以是隱式的或顯式的。

![transformation](https://media.giphy.com/media/xT4uQr9H3EDL7Ha2hq/giphy.gif)

例子 :

```jsx live
function learnJavaScript() {
  const value1 = '5'
  const value2 = 9
  let sum = value1 + value2

  return sum
}
```

在上面的示例中，JavaScript強制轉換為數字 `9` 成一個字符串，然後將兩個2️⃣值連接在一起，得到字符串 `59`. JavaScript可以在字符串或數字之間選擇，然後選擇使用字符串。

編譯器可以轉換字符串 `5` 到一個數字並返回 `14`, 但事實並非如此。 要獲得此結果，您需要顯式轉換字符串 `5` 到使用 `Number()`  方法:

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

當您想將某些東西表示為字符串時，就會發生字符串轉換。 例如，我們可以使用 `String (value)` 將值轉換為字符串的函數 :

```jsx live
function learnJavaScript() {
  let value = true // boolean

  value = String(value)
  return typeof value
}
```

轉換以明顯的方式發生。 `true`  變成`"true"`

### 數值轉換

![Transformation](https://media.giphy.com/media/4H5nOUqX7FywOGpCF7/giphy.gif)

數值轉換發生在數學函數和表達式中。

```jsx live
function learnJavaScript() {
  let value = '6' / '2'

  return value
}
```

我們可以使用 `Number (value)` 函數顯式轉換 `value` 到一個數字 :

```jsx live
function learnJavaScript() {
  let str = '123'
  let num = Number(str)

  return typeof num
}
```

當我們期望從字符串上下文中獲取數字（例如表單中的文本字段）時，通常會使用顯式轉換。

如果無法將字符串顯式轉換為數字，則轉換結果將為 `NaN` (非數字, "not a number "). 例如 :

```jsx live
function learnJavaScript() {
  let age = Number('Any string instead of a number')

  return age
}
```

### 數值轉換規則:

| Value            |                                                                              Converted to ...                                                                               |
| ---------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| `undefined`      |                                                                                    `NaN`                                                                                    |
| `null`           |                                                                                     `0`                                                                                     |
| `true` /` false` |                                                                                  `1` /` 0`                                                                                  |
| `string`         | 邊緣處留有空白。 此外，如果保留一個空字符串，則我們將得到0，否則將從非空字符串“讀取”一個數字。 錯誤時，結果為 NaN。 |

例子:

```javascript
Number('   123   ') // 123
Number('123z') // NaN (error reading the number in place of the "z" character)
Number(true) // 1
Number(false) // 0
Number(null) // 0
Number(undefined) // NaN
```

注意 `null` 和 `undefined` 表現不同。 所以， `null` 變為零，而 `undefined` 被投射到 `NaN`.

### 布爾轉換

![Transformation](https://media.giphy.com/media/JjAdpCxrdro7m/giphy.gif)

邏輯轉換是最簡單的。 發生在邏輯運算中，但也可以使用功能⚙️顯式執行 `Boolean (value)`.

### 布爾轉換規則:

直觀上是“空”的值，例如 `0`, an empty string,`一個空字符串null`, `undefined`, 和 `NaN` 變得`false`. 所有其他值變為 `true`.

```javascript
Boolean(1) // true
Boolean(0) // false
Boolean('Привет!') // true
Boolean('') // false
```

:::注意請注意，零“ 0”的行為true
某些語言 （例如PHP）會解釋字符串 `" 0 "` 作為 `false`. 但是在JavaScript中，如果字符串不為空，則始終為 `true`
:::

```javascript
Boolean('0') // true
Boolean(' ') // space is also true (any non-empty string is true)
```

## 問題？

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

頻道輸入 [Discord](https://discord.gg/6GDAfXn) 付款後 [Patreon](https://www.patreon.com/javascriptcamp).

## 問題:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

您應該使用哪個函數進行字符串轉換？

1. `String (value)`
2. `Boolean (value)`
3. `Number (value)`

什麼是類型轉換？

1.將數據從一種類型傳輸到另一種類型
2.將值從一種數據類型轉換為另一種數據類型
3.用字符串表示事物

類型轉換和類型轉換之間的主要區別是什麼？

1.類型轉換是顯式的，類型轉換是隱式的
2.類型轉換是隱式的，類型轉換是顯式的
3.類型轉換是隱式的，類型轉換可以是顯式的也可以是隱式的

轉換結果何時 `NaN`?

1.無法將字符串顯式轉換為數字時
2.無法將數字顯式轉換為字符串時
3.當代碼中有錯誤時

做什麼 “empty” 轉換時會變成值？

1. `null`
2. `true`
3. `false`

為了了解您學到了多少本課程，請對 [mobile application](http://onelink.to/njhc95) 我們學校就這個話題。

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## 鏈接

1. [MDN web docs - Typecasting](https://developer.mozilla.org/en/docs/Словарь/Type_coercion)
2. [Code for Teens: The Perfect Beginner's Guide to Programming, Volume 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)
3. [JavaScript.ru](https://learn.javascript.ru/ifelse#blok-else)
4. [Integer arithmetic](https://maths-public.ru/arithmetic/actions)

## 貢獻者 ✨

感謝這些好人 ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">  </a><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>
  
</table>

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)
