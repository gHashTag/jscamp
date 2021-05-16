---
id: javascript09
title: 功能
sidebar_label: 功能
---

![@serverSerrverlesskiy](/img/javascript/headers/10.jpg)

為了避免在程序算法的許多地方重複相同的代碼，需要函數⚙️。 在現代程序中，功能是主要的“構建塊”。

## 不要重複自己

DRY（rus。不要重複自己）是一種軟件開發原理，旨在減少各種信息的重複，尤其是在具有多個抽象層的系統中。 函數正是服務於該設計原則的數據類型。

## 選擇功能名稱

功能⚙️是行動！ 因此，函數名稱通常是動詞。 它應該簡單，精確並描述函數的作用，以便程序員閱讀代碼 📟 對函數的功能有很好的理解。

![Choice](https://media.giphy.com/media/VbEloWwOz3QqYBsqIZ/giphy.gif)

通常，使用動詞前綴來表示操作的一般性質，然後進行說明。 通常，開發團隊對這些前綴的含義有約定。

例如，以 `` show '' 通常顯示一些東西。

函數⚙️從開始 ...

```
"get .." - return a value,
"calc .." - something is being calculated,
"create .." - create something,
"check .." - check something and return a boolean value, etc.
```

這樣的名字的例子:

```javascript
showMessage (..) // shows the message
getAge (..) // returns age (in some value)
calcSum (..) // calculates the sum and returns the result
createForm (..) // creates a form (and usually returns it)
checkPermission (..) // checks access by returning true / false
```

有了前綴，乍一看一個函數的名字，就很清楚它的代碼在做什麼，可以返回什麼值。🔄.

無論如何，您和您的團隊需要準確了解前綴的含義以及and️可以使用和不能使用的功能。

:::note 超短函數名稱 
經常使用的函數名⚙️有時會變得更短。

例如，jQuery框架具有一個名為的函數⚙️`$`. 在Lodash庫中，主要功能⚙️由下劃線名稱表示 \ \_

這些是例外。 基本上，函數名稱應該簡短而具有描述性 🖊️.
:::

### 功能 === 評論

![cut](https://media.giphy.com/media/kf2bxcoZD8UmY/giphy.gif)

函數⚙️應該簡短，只能做一件事。 如果太大，將功能⚙️拆分為幾個較小的功能是有意義的。 遵循此規則絕對有幫助，尤其是在團隊合作中。

較小的功能⚙️不僅使測試和調試更容易-這些功能的存在serves️可以作為很好的註釋。

## 功能聲明

![Announcement](https://media.giphy.com/media/2A5zHrIPvo8MNnkAXl/giphy.gif)

要創建函數，我們使用函數聲明。

首先是關鍵字 `function`, 然後是函數的名稱，然後是用逗號分隔的括號中的參數列表（在給定的示例中，該列表為空），最後是該函數的代碼📟，也稱為“函數的主體”，位於大括號內 大括號...

🖊️函數的這種經典編寫方法稱為“函數聲明”。

句法 📖:

```javascript
function name (parameters) {
   ... body ... // Algorithm
   returnTotalValue
}
```

:::note 注意力！
如果未指定return，則該函數將返回undefined，並且默認情況下，假定該函數以空的return存根結尾，僅執行內部腳本。
:::

在JavaScript中，除了經典 `Function Declaration` 方法，您可以使用以下方法創建函數⚙️：

- `Function Expression`
- `Arrow Function (arrow functions)`

函數表達式是函數的聲明🗣️，它是表達式的一部分（例如，賦值）.

```javascript
const name = function (parameters) {
  // instructions
}
```

比較一下 `Function Declaration` and `Function Expression`:

```javascript
// Function Declaration
function sum(num1, num2) {
  return num1 + num2
}

// Function Expression
const sum = function (num1, num2) {
  return num1 + num2
}
```

箭頭函數的語法將在本章後面介紹。 這是編寫函數的簡化且最常用的方式。

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
