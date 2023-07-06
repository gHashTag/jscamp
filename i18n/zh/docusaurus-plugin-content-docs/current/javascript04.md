---
id: javascript04
title: 資料類型
sidebar_label: 資料類型
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/04.jpg)

## 動態打字

JavaScript 是一種鬆散類型或動態語言。 這意味著您不需要預先定義變量 the 的類型。

![Dinamics](https://media.giphy.com/media/26uf759LlDftqZNVm/giphy.gif)

類型將在程序執行期間自動確定。 這也意味著您可以使用一個變量  存儲  不同類型的數據 ：

```jsx live
function learnJavaScript() {
  let foo = 42 // now foo is of type number
  foo = 'bar' //and now foo is of type string
  return typeof foo
}
```

<!-- ## Видео

<YouTube videoId="1zXZCVbNbkQ" /> -->

## 類型

為了理解變量中包含的數據類型，使用了 `typeof` 運算符。 `typeof` 運算符返回參數的類型。
它有兩種語法，帶括號和不帶括號：

-運算符語法：`typeof x`

-函數語法：`typeof（x)`

它們的工作原理相同，但第一種語法較短。

typeof 的結果是一個包含類型的字符串。

```jsx live
function learnJavaScript() {
  let num = 9
  return typeof num
}
```

## 資料類型

![Data types](https://media.giphy.com/media/NPXkCN2FutVO1Nt4P9/giphy.gif)

JavaScript 標准定義了 9 種數據類型。 通過輸出到控制台來了解它們中的每一個，然後我將更詳細地介紹它們。

```javascript
let one = { firstName: 'John', lastName: 'Smith' } // object

let two = () => {} // function

let three 'bar' // string

let four = 42 // number

let five = 19241924124n // bigint

let six = true // boolean

let seven = null // null

let eight // undefined

let nine = Symbol() // symbol
```

## 對象

![cupboard](https://media.giphy.com/media/l2Sq0NFJlJC5Dqb7y/giphy.gif)

在計算機術語中，對像是內存中的值，可以由標識符引用。 在 JavaScript 中，可以將對象視為屬性的集合。 這就像一個壁櫥，用於存儲其他類型的數據。

## 功能

![Function](https://media.giphy.com/media/FuSJ5C7SSHlZCxjC6q/giphy.gif)

函數 ⚙️ 函數是普通的對象，具有調用執行的附加功能。

## 原始值

![Primitive](https://media.giphy.com/media/rBdWc61BPFVYc/giphy.gif)

除對像外，JavaScript 中的所有數據類型都是不可變的（不能修改值，只能用新的完整值覆蓋）。 例如，與 C 語言不同，在 C 語言中可以逐個字符地校正字符串，而在 JavaScript 中，只能完全重新創建字符串。 這些類型的值稱為“原始值”。

## 文字字串

![text](https://media.giphy.com/media/26n6AaCcCajAyZx04/giphy.gif)

在 JavaScript 中，“字符串”類型用於表示文本數據。

## 號碼

![Numbers](https://media.giphy.com/media/xT5LMMneIRG1UJquOI/giphy.gif)

數字數據類型“數字”代表整數值和浮點數。

## BigInt

![giant](https://media.giphy.com/media/LZGipmRpX6uwE/giphy.gif)

在 JavaScript 中，“數字”類型不能包含大於（253-1）（即 9007199254740991）或小於-（253-1）的負數。 此技術限制是由於其內部表示。

在大多數情況下，這就足夠了。 但是有時我們需要真正的巨大數字，例如在密碼學中或使用微秒的“時間戳”時。

在 JavaScript 中添加了 bigInt 類型以允許任意長度的整數。

## 布爾數據類型

布爾類型 boolean 表示邏輯實體，具有兩個 2️⃣ 值：true 

![true](https://media.giphy.com/media/ap6wcjRyi8HoA/giphy.gif)

and `false` 

![False](https://media.giphy.com/media/HNOVuT5AvCK1fgvp1m/giphy.gif)

此類型通常用於存儲  yes / no 值：true  表示“是，正確”，而 false  表示“否，錯誤”。

## 空值

![Null](https://media.giphy.com/media/26hkhPJ5hmdD87HYA/giphy.gif)

該數據類型只有一個值：“ null”。 該值被專門指定為基元，因為它在行為上確實是可見的基元。 但是同時，所有其他對像都從“ null”繼承，因此，儘管“ null”返回原始值，但其類型是一個對象。
例如，您可以將其分配給默認值。

## 未定義

![Unndefined](https://media.giphy.com/media/PkKzNQjwPy7GvxZbfe/giphy.gif)

未分配值的變量 will 的值將為“未定義”。

### null 和 undefined 之間的差異

![Spiderman](https://media.giphy.com/media/l36kU80xPf0ojG0Erg/giphy.gif)

`null`是不存在對象的確定值，而“ undefined”則表示歧義。 例如，您可以在瀏覽器控制台中進行檢查：

```javascript
let TestVar
console.log(TestVar) // undefined
console.log(typeof TestVar) // undefined
```

`null` 是分配值。 可以將其賦給變量  作為無值的表示形式：

```javascript
let TestVar = null
console.log(TestVar) // null
console.log(typeof TestVar) // object
```

從前面的示例中可以明顯看出，`undefined`和`null`是兩個 2️⃣ 不同的類型：`undefined`是類型本身（未定義），而`null`是對象。

```javascript
null === undefined // false
null == undefined // true
null === null // true
```

## Data type Symbol

![Symbol](https://media.giphy.com/media/QvSGhHq8CrVzq/giphy.gif)

`Symbol` 類型是唯一且不可變的原始值，可以用作對象屬性的鍵。 這種類型在實際工作中很少使用，因此在本課程中我們將不再考慮。

## 問題？

![問題](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

頻道輸入 [Discord](https://discord.gg/6GDAfXn) 付款後 [Patreon](https://www.patreon.com/javascriptcamp).

## 問題：

![題](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

typeof 運算符用於什麼？

1.確定數據類型 2.要將數據類型輸出到控制台 3.輸入一個新變量

JavaScript 標准定義了幾種數據類型？

1.7
2.9
3.5

哪種數據類型包含一組屬性？

1.`功能` 2.`string` 3.`object`

可以在 JavaScript 中逐個字符串地調整字符串嗎？

1.是的 2.可能在特殊情況下 3.不，僅完全重新創建線條

哪種數據類型可以處理任意長度的整數？

1.`number` 2.`string` 3.`bigint`

哪個值不是布爾類型？

1.`false` 2.`null` 3.`true`

哪種數據類型的值可以用作對象屬性的鍵？

1.` undefined` 2.` symbol` 3.` null`

為了了解您學到了多少，請在我們學校參加考試 [移動應用](http://onelink.to/njhc95) 關於這個話題。

[![EnglishMoji!](/img/logo/englishmoji.png)](https://link-to.app/xvh7Ush9kl)

## 鏈接

1. [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Data_structures)
2. [Code for Teens: The Perfect Beginner's Guide to Programming, Volume 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)
3. [JavaScript.ru](https://learn.javascript.ru/types)

## 貢獻者 ✨

感謝這些好人 ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">  </a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>
  
</table>

[![EnglishMoji!](/img/logo/englishmoji.png)](https://link-to.app/xvh7Ush9kl)
