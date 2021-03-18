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

### 其他名稱

如果您需要使用除屬性名之外的變量名,，則可以使用以下語法：

```jsx live
function learnJavaScript() {
  let fruit = {
    title: 'banana',
    group: 'tropical',
    quantity: 5
  }
  // title -> a; group -> b; quantity -> c
  let { title: a, group: b, quantity: c } = fruit

  return a
}
```

### 默認值

如果在 `{...}` 您編寫一個找不到的屬性變量 then，然後為其分配值 `undefined`. 要將默認值分配給變量 🔔，可以為其分配值。 如果嘗試將值賦給已找到其屬性的變量,，則將為其分配屬性值。 讓我們來看一個例子。

![Dafault](https://media.giphy.com/media/3oEduLzte7jSNmq4z6/giphy.gif)

```jsx live
function learnJavaScript() {
  let fruit = {
    title: 'banana'
  }
  let { title = 'lime', group, quantity = 5 } = fruit

  return title + ', ' + group + ', ' + quantity
}
```

`title` 包含屬性值，而不是我們為其分配的值。 這 `group` 該屬性不存在 `fruit` 對象，並且我們尚未為變量分配任何值 🔔 物業 `quantity` 也不存在，但我們分配了值 `5` 到變量 🔔.

### 餘

![octatok](https://media.giphy.com/media/hvddF1vHatFIgQspUB/giphy.gif)

如果需要從一個對像中獲取一個變量 🔔，並將其餘變量分組到另一個對像中，請使用 `...` 在變量之前，將從中創建具有其餘屬性的對象。

```jsx live
function learnJavaScript() {
  let fruit = {
    title: 'banana ',
    group: 'tropical ',
    quantity: 5
  }
  let { group, ...prop } = fruit

  return prop.title + group
}
```

## 解構數組

數組的解構與對象的解構相同。 唯一的區別是，數組元素的值將按照元素定義的順序分配給變量 🔔。

![Take](https://media.giphy.com/media/IuBlckSD7dQv6/giphy.gif)

```jsx live
function learnJavaScript() {
  // Create an array `fruit`
  let fruit = ['banana', 'tropical', 5]

  // Destruct the `fruit` array
  let [title, group, quantity] = fruit

  // Display
  return `${title}, ${group}, ${quantity}`
}
```

### 餘

通過與對象的類比，其餘的工作。

```jsx live
function learnJavaScript() {
  let fruit = ['banana ', 'tropical ', 5]

  let [name, ...prop] = fruit

  return `${name}, ${prop}`
}
```

### 數組的副本

創建數組副本的示例。

![Copia](https://media.giphy.com/media/GI1KnTxySlrCE/giphy.gif)

```jsx live
function learnJavaScript() {
  let fruit = ['banana ', 'tropical ', 5]

  let _fruit = [...fruit]

  return _fruit
}
```

### 串聯數組

![add](https://media.giphy.com/media/3gMrhfFtWHq9XxtqPy/giphy.gif)

An example of combining arrays into one.

```jsx live
function learnJavaScript() {
  let name = ['banana '],
    prop = ['tropical ', 5],
    fruit = [...name, ...prop]

  return fruit
}
```

## 問題？

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Write to [Discord](https://discord.gg/6GDAfXn) chat.

## 問題:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

是解構嗎？

1.功能 2.語法 3.對象

銷毀對象時，是否有必要按與對像中相同的順序放置變量？

1.是的 2.沒有

如果在對像中找不到相同的屬性，將為變量分配什麼？

1. `error`
2. `undefined`
3. `unknown`

銷毀對象時元素的順序重要嗎？

1.是的 2.沒有

為了了解您學到了多少本課程，請對 [mobile application](http://onelink.to/njhc95) 我們學校就這個話題。

![Sumerian school](/img/app.jpg)

## 鏈接

1. [Learn JavaScript](https://learn.javascript.ru/destructuring-assignment)
2. [MDN Web Docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
3. [Destructuring in ES6](https://medium.com/@stasonmars/деструктуризация-в-es6-полное-руководство-b865bb71f376)

## 貢獻者 ✨

感謝這些好人 ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr> 
    <td align="center"><a href="https://github.com/IIo3iTiv"><img src="https://avatars1.githubusercontent.com/u/72025062?v=4?s=200" width="200px;" alt=""/><br /><sub><b>IIo3iTiv</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=IIo3iTiv" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
