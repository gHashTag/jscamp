---
id: javascript13
title: 默認參數
sidebar_label: 默認參數
---

![@serverSerrverlesskiy](/img/javascript/headers/25.jpg)

如果在不帶參數的情況下調用函數，或者顯式傳遞了參數的值，則默認參數允許您設置函數參數的默認值 `undefined`.

![Teacher](https://media.giphy.com/media/3ohc10nduj1irsuzgA/giphy.gif)

在JavaScript中，調用時未傳遞值的函數參數⚙️默認為 `undefined`. 但是，在某些情況下，設置其他默認值可能很有用。 這是默認選項的目的。

## 句法

![book](https://media.giphy.com/media/l0HlOBZcl7sbV6LnO/giphy.gif)

```jsx live
function learnJavaScript() {
  const multiply = (a, b = 1) => {
    // The default value b is 1
    return a * b
  }
  // If b is undefined, then it will be assigned a default value
  return multiply(5, 2) // remove the comma, second argument and get 5 * 1
}
```

### 傳遞其他“假”值

![basketball](https://media.giphy.com/media/3oEdv5e5Zd2gsczAhG/giphy.gif)

如果沒有其他值 `undefined` 在調用期間被傳遞給形式參數，包括“ false”值之一，例如false ❎,`0`, `" "`, `''`, `null`,`NaN`, 那麼在這種情況下，默認值將不會分配給該參數。 在這種情況下，您需要自己編寫代碼來捕獲這些“假值”。

## 示例

![Math](https://media.giphy.com/media/xT1Ra5h24Eliux3UVq/giphy.gif)

在默認參數中，可以使用先前（位於列表左側）參數的值：

```jsx live
function learnJavaScript() {
  const greet = (name, greeting, message = greeting + ' ' + name) => {
    return [name, greeting, message]
  }

  return greet('David ', 'Hi ')
}
```

有或沒有默認參數的函數示例 👇:

```jsx live
function learnJavaScript() {
  const withDefaults = (a = 1, b = 3, c = 2) => {
    // Function with default parameters
    return [a, b, c]
  }
  const withoutDefaults = (a, b, c) => {
    // Function without default parameters
    if (a == undefined) {
      a = 1
    }
    if (b == undefined) {
      b = 3
    }
    if (c == undefined) {
      c = 2
    }
    return [a, b, c]
  }

  return withDefaults()
}
```

結果將是相同的，但是如果沒有默認參數，代碼📟可能會變得明顯更大。

## 問題？

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

頻道輸入 [Discord](https://discord.gg/6GDAfXn) 付款後 [Patreon](https://www.patreon.com/javascriptcamp).

## 問題:

![問題](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

如果沒有將任何值傳遞給函數參數，️，那麼它們的默認值是多少？

1. `null`
2. `undefined`
3. `NaN`

默認參數是否“捕獲”錯誤值？

1.是的
2.沒有

是否可以使用默認參數列表左側的參數值？

1.是的
2.沒有

為了了解您學到了多少本課程，請對 [mobile application](http://onelink.to/njhc95) 我們學校就這個話題。

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

## 鏈接

1.  [MDN web docs](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Default_parameters)

## 貢獻者 ✨

感謝這些好人 ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/FELiX-RN"><img src="https://avatars0.githubusercontent.com/u/72006627?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Philipp Dvinyaninov</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=FELiX-RN" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)
