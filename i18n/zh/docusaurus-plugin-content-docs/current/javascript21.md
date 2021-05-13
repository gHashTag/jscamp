---
id: javascript21
title: 關閉
sidebar_label: 關閉
---

![@serverSerrverlesskiy](/img/javascript/headers/20.jpg)

閉包是一個函數⚙️，即使外部函數️已終止，它也可以訪問外部函數⚙️。 需要使用閉包來為內部函數提供對外部函數作用域的訪問權限，但是與此同時，也需要從外部環境對內部函數的變量進行緊密訪問。

![Snake](https://media.giphy.com/media/3oFzmdjqH15YebLQ52/giphy.gif)

創建關閉的要求：

1.在代碼中調用的外部函數。
2.外部函數包含內部函數。
3.結果，外部函數返回內部函數。

讓我們考慮使用一個示例創建一個閉包：

```jsx live
function learnJavaScript() {
  const getFruit = () => {
    let fruit = 'Banana',
      show = () => {
        return fruit
      }
    return show
  }
  let showFruit = getFruit()
  return showFruit()
}
```

1. 在示例中，我們創建了一個外部函數 `getFruit`;
2. 裡面 `getFruit` 創建了一個內部功能 `show`.
3. getFruit函數返回show函數作為結果。
4.在代碼中，我們進一步分配了 `getFruit` 對變量起作用 `showFruit`.
5. 因為結果 `getFruit` 是一個函數，那麼 `showFruit` 變成不是變量🔔，而是一個函數。
6.整體構造的結果是變量 `fruit`, 在函數內部 `getFruit`, 它關閉了。 現在我們只能找出該變量的值🔔，我們無法對其進行更改。

## 示例

![Math](https://media.giphy.com/media/xT1Ra5h24Eliux3UVq/giphy.gif)

讓我們看更多示例以進行理解。

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
