---
id: javascript15
title: 開關盒構造
sidebar_label: 開關盒構造
---

![@serverSerrverlesskiy](/img/javascript/headers/14.jpg)

開關構造用於將相等值與不同選項進行比較。

在這種情況下，在操作員嚴格平等的意義上意味著平等 `===`, 它無法與正則表達式或其他方式進行比較。 也就是說，值必須具有相同的類型才能保持相等。

![comparison](https://media.giphy.com/media/icJA0VF7ntoEL18Jez/giphy.gif)

如果條件匹配，則代碼塊📟與相應的 `case` 被執行。 如果沒有條件匹配，則在 `default` block, 如果有，則執行。 要退出施工，請使用 `break` c命令。 如果未指定，則代碼塊將在下一個步驟中自動執行 `case`, 等等. 因此，我們使用 `break` 在我們的腳本中，以免全部運行解釋器 `cases`, 從而降低了腳本的性能。

## 句法

![Syntax](https://media.giphy.com/media/yR4xZagT71AAM/giphy.gif)

一種 `switch` 構造具有一個或多個 `case` 塊和可選 `default` 堵塞。

看起來像這樣:

```jsx
switch (n) {
  case 1:
    // code block 1;
    break
  case 2:
    // code block 2;
    break
  // .......
  // other case options
  // .......
  default:
  // code block if none of the conditions match;
}
```

`n` - this is [boolean](https://react-native-village.github.io/docs/javascript08) 健康）狀況。

## 示例

![Math](https://media.giphy.com/media/xT1Ra5h24Eliux3UVq/giphy.gif)

讓我們考慮最簡單的例子👇:

```jsx live
function learnJavaScript() {
  let a = 4
  let str
  switch (a) {
    case 3:
      str = 'Not enough'
      break
    case 4:
      str = 'To the point!'
      break
    case 5:
      str = 'brute force'
      break
    default:
      str = "I don't know such values"
  }
  return str
}
```

在這裡 `switch` 語句將按順序進行比較 `a` 與所有選項 `case`.
第一的 `3`, 然後-由於沒有匹配項 - `4`. 找到一個匹配項，將從行開始執行此選項 `str = 'To point!'` 而且，到最近 `break`, 這會中斷執行。

![Wow](https://media.giphy.com/media/3oriO13KTkzPwTykp2/giphy.gif)

考慮這個例子 👇:

```jsx live
function learnJavaScript() {
  let a = 'Apples'
  let str
  switch (a) {
    case 'Apples':
      str = 'I love ' + a
      break
    case 'Oranges':
      str = 'I love ' + a
      break
    case 'Bananas':
      str = 'I love ' + a
      break
    default:
      str = 'I like other fruits'
  }
  return str
}
```

在這裡 `switch` 語句將按順序進行比較 `a` 與所有選項 `case`. 但這不是數字的比較，而是字符串的比較。 只要比較相同的數據類型，就可以使用任何數據類型來完成。

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
