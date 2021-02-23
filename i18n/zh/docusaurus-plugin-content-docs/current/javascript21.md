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

### 櫃檯

計數器是考慮閉包如何工作的最簡單示例。

<!-- ![Counter](https://media.giphy.com/media/QSNvClMu5zWJW/giphy.gif) -->

```jsx live
function learnJavaScript() {
  const makeCounter = () => {
    let x = 0
    return () => {
      return ++x
    }
  }
  const counter = makeCounter()
  return counter()
}
```

### 改進計數器

![Counter](https://media.giphy.com/media/3o6Zt6fzS6qEbLhKWQ/giphy.gif)

結果，我們將沒有一個功能⚙️，而是一次具有多個功能。

```jsx live
function learnJavaScipt() {
  let makeCounter = () => {
    let x = 0
    return {
      inc: () => {
        return ++x
      },
      dec: () => {
        return --x
      },
      val: () => {
        return x
      }
    }
  }

  let counter = makeCounter()
  counter.inc() // 1
  counter.inc() // 2
  counter.inc() // 3
  counter.inc() // 4
  counter.dec() // 3
  return counter.val()
}
```

### 循環閉合

![circle](https://media.giphy.com/media/u5s2ezDicmyuA/giphy.gif)

```jsx live
function learnJavaScript() {
  let res = []
  for (let i = 0; i < 5; i++) {
    res[i] = () => {
      return i
    }
  }
  return res[2]()
}
```

### 記住這句話

![l](https://media.giphy.com/media/l4pTfqyI6TCjUW4Yo/giphy.gif)

```jsx live
function learnJavaScript() {
  let phrase = x => {
    return y => {
      return x + ' ' + y
    }
  }

  hello = phrase('Hello')
  return hello('World')
}
```

## 全部的

閉包是每個JS開發人員都應該理解的最重要的基本JavaScript概念之一。 了解閉包是編寫高效，高質量應用程序的第一步。

## 問題？

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Write to [Discord](https://discord.gg/6GDAfXn) chat.

## 問題：

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

什麼是封包？

1.施工
2.功能
3.概念

什麼是封閉？

1.作用域
2.函數中的變量

您需要做什麼才能訪問封閉變量？

1.我將描述並使用它
2.可用
3.該變量只能查看

為了了解您學到了多少本課程，請對 [mobile application](http://onelink.to/njhc95) 我們學校就這個話題。

![Sumerian school](/img/app.png)

## 鏈接

1. [Learn JavaScript](https://learn.javascript.ru/closures)
2. [MDN Web Docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures)
3. [Замыкания JavaScript](https://medium.com/@stasonmars/понимаем-замыкания-в-javascript-раз-и-навсегда-c211805b6898)

## 貢獻者 ✨

感謝這些好人 ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr> 
    <td align="center"><a href="https://github.com/IIo3iTiv"><img src="https://avatars1.githubusercontent.com/u/72025062?v=4?s=200" width="200px;" alt=""/><br /><sub><b>IIo3iTiv</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=IIo3iTiv" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
