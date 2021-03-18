---
id: javascript12
title: 區塊範圍
sidebar_label: 區塊範圍
---

![@serverSerrverlesskiy](/img/javascript/headers/12.jpg)

範圍是程序的一部分，可以在其中使用變量。 創建時 🏗️ `.js` 文件，我們創建整個文件的範圍並創建內部範圍，您必須使用花括號將其聲明 `{...}`.

![file](https://media.giphy.com/media/3o6Ztk7NosfLVRqcpy/giphy.gif)

```jsx
// First scope
let fruit = 'Banana'
{
  // Second scope
  let fruit = 'Apple'
  {
    // Third scope
    let fruit = 'Lime'
  }
}
```

在此示例中，我們在不同範圍內創建了🏗️三個變量，它們具有各自的 `fruit` variable, 因此不會發生錯誤🙅‍♂️，但是如果您嘗試在同一作用域中創建兩個具有相同名稱的🏗️，則會發生錯誤🙅‍🙅️。

```jsx
// First scope
let fruit = 'Banana'
{
  // Second scope
  let fruit = 'Apple'
  let fruit = 'Lime' // An error will occur here
}
```

創建creating️各種結構時，您還需要為該結構創建範圍，因為您使用了花括號塊 `{...}`.

```jsx
if (true) {
  // Scope of the conditional operator
}

for (let i = 0; i > 5; i++) {
  // Scope of the cycle
}

function test() {
  // Function scope
}
```

在這些示例中，每個構造都有自己的範圍。

## 全球範圍

![Global](https://media.giphy.com/media/l0MYPsBLOYyFqSDte/giphy.gif)

當我們說全局範圍時，我們的意思是所有其他範圍都是該範圍的子級。 全局範圍包含在所有函數和塊之外聲明的變量。

```jsx
// Global scope
let fruit = 'Banana'
```

在全局範圍內創建的變量🔔稱為 `global variable`. 全局變量🔔可以在所有子作用域中使用。

```jsx live
function learnFavaScript() {
  // The variable fruit is global
  let fruit = 'Banana'
  function showFruit() {
    // Therefore, we can use it inside a function
    return fruit
  }
  return showFruit()
}
```

## 當地範圍

![Local](https://media.giphy.com/media/VFwRCi6WKBUk08fliV/giphy.gif)

局部作用域包含在代碼specific的特定部分中聲明為🗣️的變量。 例如，在循環內創建的變量將是局部的。

```jsx
for (let i = 0; i > 5; i++) {
  // Variable i is local
}
```

局部變量only只能在聲明它們的塊內使用。

```jsx
function learnFavaScript() {
  function showFruit() {
    // The variable fruit is local
    let fruit = 'Banana'
  }
  // Therefore, we cannot use it outside the function.
  return fruit
}

// ReferenceError: fruit is not defined
```

## 例子

![Math](https://media.giphy.com/media/xT1Ra5h24Eliux3UVq/giphy.gif)

我們在不同的範圍內使用兩個具有相同名稱的變量🔔。 `otherFruit()` 函數返回一個 🔔 `fruit` 來自變量的初始化範圍 `Lime`

```jsx live
function learnJavaScript() {
  let fruit = 'Banana'
  function otherFruit() {
    let fruit = 'Lime'
    return fruit
  }
  return otherFruit() + ' and ' + fruit
}
```

如果我們刪除 `let` 通過otherFruit（）函數，然後不創建變量🔔，而是將其覆蓋 🖊️.

```jsx live
function learnJavaScript() {
  let fruit = 'Banana'
  function otherFruit() {
    fruit = 'Lime'
    return fruit
  }
  return otherFruit() + ' and ' + fruit
}
```

如果我們嘗試在父作用域中調用局部變量怎麼辦？ 由於我們正在全局範圍內嘗試調用未創建的變量fact，因此發生了錯誤。

```javascript
function learnJavaScript() {
  let num
  for (let i = 0; i != 5; i++) {
    num += i
  }
  return i
}

//ReferenceError: i is not defined
```

![Primer](https://media.giphy.com/media/M33UV4NDvkTHa/giphy.gif)

## Denying var

![eye](https://media.giphy.com/media/PKl9JTqnoiKtO/giphy.gif)

在文章中 [Change](https://react-native-village.github.io/docs/javascript03) 我們告訴你，我們不會使用 `var`, 這與範圍有關。

1. 如果在同一範圍內，則使用關鍵字創建兩個具有相同名稱的變量 🔔 `let` 或者 `const`, 解釋器會通過顯示錯誤來警告我們。

```jsx
function learnJavaScript() {
  let fruit = 'Banana'
  let fruit = 'Lime'
  return fruit
  // SyntaxError: Identifier 'fruit' has already been declared
}
```

但是，如果您使用相同名稱創建變量 `var`, 它將重新分配它。

```jsx live
function learnJavaScript() {
  var fruit = 'Banana'
  var fruit = 'Lime'
  return fruit
}
```

錯誤🙅‍♂️不會發生，因為 `var` 覆蓋了變量 `fruit`

2. 用創建了一個全局變量🔔 `var`, 我們可以通過創建另一個具有相同名稱的變量from從本地範圍更改它 `var`. 範圍 `var` 僅限於功能或腳本。

```jsx live
function learnJavaScript() {
  var fruit = 'Lime'
  {
    var fruit = 'Banana'
  }
  return fruit
}
```

3. 創建的變量🔔 `var` 無論聲明位於何處，都應從腳本執行的一開始就將其視為已聲明。

```jsx live
function learnJavaScript() {
  fruit = 'Banana'
  var fruit
  return fruit
}
```

4. JavaScript在ES6之前沒有塊作用域。 那些。 用創建的任何變量 `var` 塊內的關鍵字將在其外部可見。

```javascript
if (true) {
  var fruit = 'Apple' // the variable will be visible outside the given block
}
console.log(fruit) // "Apple"
```

![javascript](/img/javascript/28.jpg)

```javascript
if (true) {
  let fruit = 'Apple' // the variable will not be visible outside the given block
}
console.log(fruit) // "Apple"
```

![javascript](/img/javascript/29.jpg)

由於所列原因，開發人員決定不使用 `var`

## 問題？

![問題](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

頻道輸入 [Discord](https://discord.gg/6GDAfXn) 付款後 [Patreon](https://www.patreon.com/javascriptcamp).

## 問題:

![問題](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

問題我們什麼時候創建第一個範圍？

1.創建循環時
2.創建文件時
3.創建塊時

創建條件語句時，是否創建了新作用域？

1.是的
2.沒有

局部變量在哪裡創建？

1.在代碼的特定部分
2.在所有塊之外

為了了解您學到了多少本課程，請對[mobile application](http://onelink.to/njhc95) 我們學校就這個話題。

![Sumerian school](/img/app.jpg)

## 鏈接

1. [JavaScript Scope](https://css-tricks.com/javascript-scope-closures/)
2. [Learn JavaScript](https://learn.javascript.ru/closure)
3. [MDN Web Docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)

## 貢獻者 ✨

感謝這些好人([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr> 
    <td align="center"><a href="https://github.com/IIo3iTiv"><img src="https://avatars1.githubusercontent.com/u/72025062?v=4?s=200" width="200px;" alt=""/><br /><sub><b>IIo3iTiv</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=IIo3iTiv" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
