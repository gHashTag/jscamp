---
id: javascript19
title: 數組迭代方法（映射，過濾，縮小）
sidebar_label: 映射，過濾，縮小
---

![@serverSerrverlesskiy](/img/javascript/headers/22.jpg)

JavaScript語言顯然比其他數據結構更喜歡數組。 它們有很多方便的特定技巧，例如，一整套迭代方法： `map`,` filter`, `reduce`.

## 地圖

![Create](https://media.giphy.com/media/ffd0F6WNcRJMQ/giphy.gif)

`map ()` 方法創建一個 🏗️ 新的с數組，結果是為數組的每個元素調用指定的函數⚙️。

### 句法

![Book](https://media.giphy.com/media/s6OiiampNcye4/giphy.gif)

```javascript
let new_array = arr.map(function callback( currentValue[, index[, array]]) {
    // Returns the item for new_array
}[, thisArg])
```

`map` 方法調用傳遞的 `callback` 函數對每個元素按其出現的順序執行一次，並根據其調用結果構造一個新數組。 `callback` 僅對具有指定值的數組索引調用函數，包括 `undefined`. 缺少數組元素（即從未指定，刪除或從未分配值的索引）不會調用它。

功能 ⚙️ `callback`用三個參數調用：

-元素的值，
-元素索引
-以及執行通過的陣列。

如果 `thisArg` 參數已傳遞給 `map` 方法，它將用作 `this` 值當 `callback` 叫做。 否則， `this` 價值將是 `undefined`. 最終， `this` 從 `callback` 函數是根據從函數中看到的用於定義“ this”的常規規則確定的。

`map` 方法不會修改其調用的數組（儘管函數⚙️可以做到！）。

元素處理的元素範圍 `map` 方法是在第一次調用之前設置的 `callback` 功能。 開始後添加到數組的項目 `map` 方法將不會被訪問 `callback` 功能。 如果數組的現有元素被修改 `callback` 函數，它們傳遞給函數的值將是 `map` 方法訪問他們。 刪除的項目將不會被訪問。

### 例子:

![Math](https://media.giphy.com/media/xT1Ra5h24Eliux3UVq/giphy.gif)

#### 簡單的例子

您有一個包含許多對象的數組，每個對象代表一個不同的人👨 這裡可以有很多數據：電影院的名稱，年齡，頭髮顏色和喜歡的角色，但目前並不需要所有這些信息-您只想獲取這些人的護照號碼才能給他們 所有會議通行證。

```jsx live
function learnJavaScript() {
  const friends = [
    { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
    { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
    { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
    { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
    { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
    { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' }
  ]
  let passports = friends.map(friend => friend.passport + ' ')
  return passports
}
```

#### In certain cases, you may need to display an array of objects with the selected keys as a string 👇:

```jsx live
function learnJavaScript() {
  const users = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
  ]

  let result = users.map(({ id, age, group }) => `\n${id} ${age} ${group}`).join('')

  return result
}
```

#### 從攝氏值數組創建華氏值數組：

![Thermometer](https://media.giphy.com/media/W23dJLsAW5knUU27Fv/giphy.gif)

使用給定公式處理數組的每個元素的示例 👇:

```jsx live
function learnJavaScript() {
  let celsius = [-15, -5, 0, 10, 16, 20, 24, 32]

  let fahrenheit = celsius.map(t => t * 1.8 + 32 + ' ')

  return fahrenheit
}
```

<!-- ### Отображение массива чисел на массив квадратных корней

Отображение таблицы пользователей в виде читаемой строки только с указанными ключами
Следующий код📟 берёт массив чисел и создаёт 🆕 новый массив, содержащий квадратные корни чисел из первого массива.

```jsx live
function learnJavaScript() {
  var numbers = [1, 4, 9]
  var roots = numbers.map(Math.sqrt) + ' '
  return roots
}
``` -->

#### 使用帶有參數的函數顯示數字數組 👇:

```jsx live
function learnJavaScript() {
  const numbers = [1, 4, 9]

  const doubles = numbers.map(num => num * 2 + ' ')

  return doubles
}
```

<!-- ![Wow](https://media.giphy.com/media/1ym5LJ17vp77BL8X5O/giphy.gif)

#### Обобщённое использование `map`

Этот пример показывает, как использовать `map` на объекте строки `String` для получения массива байт в кодировке `ASCII`, представляющего значения символов 👇 :

```jsx live
function learnJavaScript() {
  var map = Array.prototype.map
  var a =
    map.call('Hello World', function (x) {
      return x.charCodeAt(0)
    }) + ' '
  return a
}
```

#### Использование `map` для переворачивания строки

```jsx live
function learnJavaScript() {
  var str = '12345'
  result = [].map
    .call(str, function (x) {
      return x
    })
    .reverse()
    .join('')
  return result
}
``` -->

## 篩選

![filter](https://media.giphy.com/media/xT5LMGupUKCHb7DnFu/giphy.gif)

`filter ()` 方法將創建一個新數組，其中包含所有已通過傳遞函數中指定的檢查的元素⚙️。

過濾器的結果始終是一個數組。 如果元素的函數⚙️返回 🔄 `true` ✅ （或任何“ true”值），則此元素將包含在結果中，否則將不包括在內。

### 句法

![write](https://media.giphy.com/media/6Do13TV1OfOF2/giphy.gif)

```javascript
let newArray = arr.filter(function callback(element[, index, [array]])[, thisArg])
```

### 描述

![m](https://media.giphy.com/media/DQaeCdCqhHWx3n4dvH/giphy.gif)

`filter()` 方法調用傳遞的 `callback` 對數組中存在的每個元素執行一次功能，並構造一個具有所有值的新數組 `callback` 函數返回 `true` 或變成 `true` ✅ 當投射到 `boolean`. `callback` 僅對已分配值的數組索引調用該函數； 對於已刪除或從未分配值的索引，不會調用它。 數組元素尚未被 `callback` 函數只是被跳過，不包含在 🆕 數組中。

功能 ⚙️ `callback` 用三個參數調用：

-元素的值；
-元素索引；
-執行通過的陣列。

如果 `thisArg` 參數已傳遞給 `filter()` 方法，它將用作 `this` 調用函數時的值。 否則， `this` 價值將是 `undefined`. 最終， `this` 從功能上看⚙️是根據定義的通常規則確定的 `this` 從功能上看 ⚙️

`filter()` 方法不會修改在其上調用的數組。

元素處理的元素範圍 `filter()` 方法是在第一次調用之前設置的 `callback` 功能。 開始後添加到數組的項目 `filter()` 方法將不會被訪問 `callback` 功能。 如果現有數組元素發生更改，則將值傳遞給`callback` 函數將是當 `filter()`方法訪問他們。 刪除的項目將不會被訪問。

### 例子

![math](https://media.giphy.com/media/3orieN7HEHI0tw8x5C/giphy.gif)

#### 過濾掉所有小的值

以下示例使用 `filter()` 創建一個所有元素都大於或等於的過濾數組 `value`, 並且所有元素少於 `value` 刪除。

```jsx live
function learnJavaScript() {
  const isBigEnough = value => value >= 10

  let filtered = [12, 5, 8, 130, 44].filter(isBigEnough) + ' '

  return filtered
}
```

![Wow](https://media.giphy.com/media/M33UV4NDvkTHa/giphy.gif)

## 減少

![count](https://media.giphy.com/media/xUPGcqaVH1cDeKZTBS/giphy.gif)

reduce方法還可以在數組的上下文中運行，並為每個元素調用一個函數⚙️，但是它還將所有調用的結果累加為一個值。 此行為可以控制。

reduce並不意味著要修改諸如map之類的集合中的元素。 它的任務是以一種或另一種方式計算所有元素的“和”，然後將其返回。

結果值可以是任何東西：數字，字符串，對象，數組-所有這些都取決於JavaScript開發人員正在解決的問題。

reduce方法採用2個參數：

-功能，例如 `map`, 對於集合的每個元素，將依次調用它；
   是累加器的初始值。

函數⚙️也有2個參數：

-第一個是累加值（累加器）；
-直接是數組的元素。

### 句法

```javascript
array.reduce(function callback[, initialValue])
```

### 描述

![describe](https://media.giphy.com/media/3orieVr84udUl4wbQs/giphy.gif)

reduce（）方法對數組中的每個元素（不包括void）執行一次回調函數，並採用四個參數：初始值（或上一個回調中的值），當前元素的值，當前索引和 數組進行迭代。

第一次調用該函數時，accumulator和currentValue參數可以採用兩個值之一。 如果 `initialValue` 參數在reduce（）的調用中傳遞，然後的值 `accumulator` 將等於 `initialValue` 和的價值 `currentValue` 將等於數組中的第一個值。 如果未指定initialValue，則累加器將等於數組中的第一個值，而currentValue將等於數組中的第二個值。

如果數組為空且沒有 `initialValue` a指定了參數 `TypeError` 將會拋出異常。 如果數組僅包含一個元素（無論其在數組中的位置如何）， `initialValue` 參數未指定，或者 `initialValue` 參數已指定，但數組為空，則將返回此值，而無需調用函數 ⚙️ `callback` ...

### 初始電池值

![hatchng](https://media.giphy.com/media/xT1R9Qy80qNb8oQGGc/giphy.gif)

讓我們找出初始值。 在示例中，它等於 `0`, 因為我們正在計算數值-年齡的總和。 代替零，可以有任何其他數字/字符串（空或非空）/對象/數組-您從中開始累積的任何值。 例如，讓我們在一行中合併所有朋友的名字 👇:

```jsx live
function learnJavaScript() {
  const friends = [
    { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
    { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
    { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
    { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
    { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
    { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' }
  ]

  const names = friends.reduce((accumulator, friend) => `${accumulator} ${friend.name}, `, 'Friends: ')

  return names
}
```

在這裡，初始值是字符串 `" Friends: "`, 所有朋友的名字都逐漸添加到其中。

如果未顯式指定原始值，則數組的第一個1️⃣元素將隱式變為。 在這種情況下，不再調用函數⚙️。

### 例子

#### 對數組中的所有值求和:

```jsx live
function learnJavaScript() {
  const initialValue = 0

  const sum = [1, 2, 3].reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  }, initialValue)

  return sum
}
```

And the same thing in one line of code:

```jsx live
function learnJavaScript() {
  const sum = [1, 2, 3].reduce((x, y) => x + y)

  return sum
}
```

<!-- #### Сглаживание массива массивов:

![transform](https://media.giphy.com/media/dVleMgtOlPE6Q/giphy.gif)

Код📟 решает задачу преобразования массива массивов в один плоский массив. Результат первой итерации будет равен: `[…[], …[1, 2, 3]]` что означает, что он преобразуется в `[1, 2, 3]` — это значение мы предоставляем как `acc` на второй итерации и так далее.

```jsx live
function learnJavaScript() {
  const nested = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]

  const flat = nested.reduce((acc, it) => [...acc, ...it], [])

  return flat + ' '
}
```

#### Разворачивание массива массивов:

```jsx live
function learnJavaScript() {
  const flattened = [
    [0, 1],
    [2, 3],
    [4, 5]
  ].reduce(function (a, b) {
    return a.concat(b) + ' '
  })

  return flattened
}
``` -->

## 鍊式

![unity](https://media.giphy.com/media/jTf2Io0LtBXGZddOVE/giphy.gif)

JavaScript 編程支持便捷 `chaining` 模式-將多個功能組合成一個鏈，並順序傳輸結果。

所有三個解析的方法都在數組的上下文中調用，其中兩個2️⃣還返回一個數組。 因此，將它們組合起來非常容易。

例如，讓我們計算所有男孩的總年齡 👇:

```jsx live
function learnJavaScript() {
  const friends = [
    { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
    { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
    { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
    { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
    { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
    { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' }
  ]
  let totalBoysYears = friends
    .filter(friend => friend.sex === 'm')
    .reduce((accumulator, friend) => accumulator + friend.age, 0)
  return totalBoysYears
}
```

或者我們可以收集女孩的護照號碼以購買前往拉斯維加斯的機票👇:

```jsx live
function learnJavaScript() {
  const friends = [
    { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
    { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
    { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
    { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
    { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
    { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' }
  ]
  let girlsPassports = friends.filter(friend => friend.sex === 'f').map(friend => friend.passport) + ' '
  return girlsPassports
}
```

## 結論

有了這些強大的功能⚙️，代碼📟變得更易於閱讀。 因此，下面是有關此主題的更多文章的列表。

## 問題？

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Write to [Discord](https://discord.gg/6GDAfXn) chat.

## 問題:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

為數組的每個元素調用的函數？

1. `currentValue`
2. `array`
3. `callback`

一種創建新數組的方法，其結果是為數組的每個元素調用指定的函數：

1. `map`
2. `filter`
3. `reduce`

reduce方法的結果值可以是：

1.號碼
2.數組
3.一切

通過以下方法實現對數組中的所有值求和：

1. `map`
2. `filter`
3. `reduce`

用作以下參數的可選參數或值 `this` 當打電話給 `callback` 功能：

1. `array`
2. `index`
3. `thisArg`

一個方法，該方法創建一個新數組，其中包含所有通過傳遞函數中指定的驗證的元素：

1. `map`
2. `filter`
3. `reduce`

將多個功能組合到一個鏈中，並按順序傳輸結果：

1.團結
2.鏈接
3.合併

為了了解您學到了多少本課程，請對 [mobile application](http://onelink.to/njhc95) 我們學校就這個話題。

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

## 鏈接

1. [Simplify your JavaScript - use map, reduce and filter](https://proglib.io/p/javascript-map-reduce-filter)
2. [15 useful javascript examples of map, reduce and filter](https://webdevblog.ru/15-poleznyh-javascript-primerov-map-reduce-i-filter)
3. [Array.prototype.map()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
4. [Array.prototype.filter()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
5. [Array.prototype.reduce()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

## 貢獻者 ✨

感謝這些好人 ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/AlisaNasibullina"><img src="https://avatars3.githubusercontent.com/u/74646904?s=460&v=4" width="200px;" alt=""/><br /><sub><b>AlisaNasibullina</b></sub></a><br /><a href="#mentoring-KoDim-React" title="Mentoring">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)
