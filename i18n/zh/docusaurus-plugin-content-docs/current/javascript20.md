---
id: javascript20
title: 解構數組和對象
sidebar_label: 解構
---

![@serverSerrverlesskiy](/img/javascript/headers/30.jpg)

JavaScript 中的解構是一種賦值語法，使您可以方便地從一行中的數組和對像中提取數據。

## 對象解構

![object](https://media.giphy.com/media/3o85xx7Yll3UyNVQf6/giphy.gif)

```jsx live
function learnJavaScript() {
  // Create a `fruit` object
  let fruit = {
    title: 'banana',
    group: 'tropical',
    quantity: 5
  }

  // Destructuring the `fruit` object
  let { title, group, quantity } = fruit

  // Display `title`
  return title
}
```

屬性 `title`,`group` 和 `quantity` 重複對象的結構 `fruit` 並將它們的值複製到相同的變量中 `{...}`. 因此，如果在中交換變量 the `{...}`, 那麼代碼也將正常工作，請嘗試在上面的示例中交換變量 🔔

### 嵌套對象

![bookmark](https://media.giphy.com/media/3og0IDyqVFNH7qFpAI/giphy.gif)

我們還可以解構嵌套對象。

```jsx live
function learnJavaScript() {
  let fruit = {
    title: 'banana',
    group: 'tropical',
    quantity: {
      store: 5,
      storeHaus: 99
    }
  }

  let {
    title,
    quantity: { store: s1, storeHaus: s2 }
  } = fruit

  return title + ', ' + parseFloat(s1 + s2)
}
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
