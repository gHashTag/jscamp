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
