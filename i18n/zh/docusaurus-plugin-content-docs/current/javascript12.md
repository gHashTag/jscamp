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
function learnJavaScript() {
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
function learnJavaScript() {
  function showFruit() {
    // The variable fruit is local
    let fruit = 'Banana'
  }
  // Therefore, we cannot use it outside the function.
  return fruit
}

// ReferenceError: fruit is not defined
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
