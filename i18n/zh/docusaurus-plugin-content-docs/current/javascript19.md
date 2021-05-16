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
