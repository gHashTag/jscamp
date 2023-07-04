---
id: javascript15
title: 開關盒構造
sidebar_label: 開關盒構造
---

![@serverSerrverlesskiy](/img/javascript/headers/14.jpg)

開關構造用於將相等值與不同選項進行比較。

在這種情況下，在操作員嚴格平等的意義上意味著平等 `===`, 它無法與正則表達式或其他方式進行比較。 也就是說，值必須具有相同的類型才能保持相等。

![comparison](https://media.giphy.com/media/icJA0VF7ntoEL18Jez/giphy.gif)

如果條件匹配，則代碼塊與相應的 `case` 被執行。 如果沒有條件匹配，則在 `default` block, 如果有，則執行。 要退出施工，請使用 `break` c命令。 如果未指定，則代碼塊將在下一個步驟中自動執行 `case`, 等等. 因此，我們使用 `break` 在我們的腳本中，以免全部運行解釋器 `cases`, 從而降低了腳本的性能。

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

`n` - this is [boolean](https://jscamp.app/docs/javascript08) 健康）狀況。

## 示例

![Math](https://media.giphy.com/media/xT1Ra5h24Eliux3UVq/giphy.gif)

讓我們考慮最簡單的例子:

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

考慮這個例子 :

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

## 更換 `if`

還 `Switch` 用於替換多個 `if`.

例如，您可以替換此代碼 :

```jsx live
function learnJavaScript() {
  let number = 2
  let str
  if (number === 0) {
    str = 'You entered the number 0'
  }

  if (number === 1) {
    str = 'You entered the number 1'
  }

  if (number === 2 || number === 3) {
    str = 'You entered the number 2, maybe 3'
  }
  return str
}
```

在這個 :

```jsx live
function learnJavaScript() {
  let number = 2
  let str
  switch (number) {
    case 0:
      str = 'You entered the number 0'
      break

    case 1:
      str = 'You entered the number 1'
      break

    case 2:
    case 3:
      str = 'You entered the number 2, maybe 3'
      break
  }
  return str
}
```

結果將是相同的，但是代碼將變得更具可讀性並且更易於使用。

## 問題？

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

寫給 [Discord](https://discord.gg/6GDAfXn) chat.

## 問題:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

是否可以使用`switch`將某些內容與正則表達式進行比較？

1.是的
2.沒有

比較運算符的作用 `switch` 使用？

1. `=`
2. `===`
3. `==`

哪個關鍵字停止比較過程 `switch`?

1. `break`
2. `stop`
3. `default`

為了了解您學到了多少本課程，請對 [mobile application](http://onelink.to/njhc95) 我們學校就這個話題。

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

## 鏈接

1.  [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/switch)
2.  [Learn JavaScript](https://learn.javascript.ru/switch)
3.  [Справочник JavaScript](https://javascript.ru/switch)

## 貢獻者 ✨

感謝這些好人 ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/FELiX-RN"><img src="https://avatars0.githubusercontent.com/u/72006627?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Philipp Dvinyaninov</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=FELiX-RN" title="Documentation">  </a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)
