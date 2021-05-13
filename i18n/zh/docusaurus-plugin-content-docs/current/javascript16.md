---
id: javascript16
title: 週期數
sidebar_label: 週期數
---

![@serverSerrverlesskiy](/img/javascript/headers/17.jpg)

當一個動作需要重複很多次時，在編程中會使用循環。 例如，您需要顯示文本 📜 "Hello, World!" 🌎. 與其重複相同的文本輸出命令 📜 200次，通常是創建一個循環，該循環重複循環主體中所寫內容的200倍。 每次重複稱為一次迭代。

![cycle](https://media.giphy.com/media/Pkck2unt0XQfc4gs3R/giphy.gif)

編程中的迭代-從最廣泛的意義上講-數據處理的組織，在該過程中，動作被重複多次，而不會導致自身調用（與遞歸相反）。 從狹義上講，這是一個循環迭代過程中的一步。

JavaScript（以及所有其他語言）中的循環是一段代碼 📟 只要已知條件為真，該循環便會重複。 循環有很多不同的類型，但是它們基本上都做相同的事情：它們重複執行幾次動作。

## The while() 循環

![While](https://media.giphy.com/media/WS6CDvvyNDrhZRFBtT/giphy.gif)

 `while` 運算符創建一個循環，在被測條件為真時執行指定的指令。 在執行循環主體之前，先計算條件的邏輯值。

### 句法

![Boock](https://media.giphy.com/media/LkjlH3rVETgsg/giphy.gif)

```javascript
while (condition) {
  instruction // algorithm code - instructions
}
```

`condition` 是一個表達式，每次進入循環之前都會檢查其布爾值。 如果值為true - `true`✅ 然後執行指令。 當值變為假時 - `false`❎, 我們退出循環。

指令是每當條件為真時執行的算法代碼。 要循環執行多個指令，請使用 `{...}` 阻止運算符將它們分組。 在循環主體中使用1個命令時，可省略花括號。

這是一個簡單的循環示例 `while (condition) {...}`

```jsx live
function learnJavaScript() {
  let count = 0 // count is a counter
  let result = 'Account:'
  // change account to any
  while (count < 10) {
    result += count + ', '
    count++
  }
  return result
}
```

`count`在示例中是`0`。 循環的條件（在括號中用скоб表示）是帶有代碼的塊將不斷重複直到（即，實際 `while`) `count` 小於 `10`.

自初始值 `0` 小於 `10`, 代碼📟運行。 每次口譯員重新檢查 ✔️ 條件，如果條件仍然為真，則將再次運行代碼 📟。 每次我們將計數器值增加 `1`. 否則，該值將保持在 `0`, 所以我們的條件` <10` 將永遠保持為真，我們的代碼將永遠循環！

結果，之後 `10` 週期將變成 `10`. 在那之後，解釋器將終止循環，因為條件是 `false` ❎ 然後轉到我們代碼的最後幾行 📟

<!-- ## Цикл do … while

![Check](https://media.giphy.com/media/PijzuUzUhm7hcWinGn/giphy.gif)

Проверку ✔️ условия можно разместить под телом цикла, используя специальный синтаксис📖 `do .. while`:

```javascript
do {
  // тело цикла
} while (условие)
```

Цикл сначала выполнит тело, а затем проверит ✔️ условие (condition - `состояние`), и пока его значение равно `true` ✅ , он будет выполняться снова и снова.

Например, посчитаем сумму чисел от `0` до `25` 👇 :

```jsx live
function learnJavaScript() {
  let sum = 0
  let i = 0
  do {
    sum += i
    i++
  } while (i < 25)

  return sum
}
```

Такая форма синтаксиса📖 оправдана, если вы хотите, чтобы тело цикла выполнилось хотя бы один раз, даже если условие окажется ложным ❎ . -->

## The for() 循環

![Create](https://media.giphy.com/media/XaExByjWTK1V2HgDfh/giphy.gif)

`for` expression會在括號中創建由三個3個可選表達式組成的循環，並用分號分隔。

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
