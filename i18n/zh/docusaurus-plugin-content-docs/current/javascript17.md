---
id: javascript17
title: 數組
sidebar_label: 數組
---

![@serverSerrverlesskiy](/img/javascript/headers/18.jpg)

為了存儲有序集合，有一個特殊的數據結構稱為 `Array`.

![Storage](https://media.giphy.com/media/3orif6FORJ98Z11xzq/giphy.gif)

`Array` - 有序的數據集合，其中包含第1，第2，第3個元素等。例如，我們需要它來存儲以下內容的列表：用戶，產品，站點元素等。

## 創建

![create](https://media.giphy.com/media/3oEduXdm2gjnrsJBOo/giphy.gif)

2️⃣  有用於創建空數組的選項：🏗️

```javascript
let arr = new Array(5)
// new Array(5) - creates an array with no elements (which cannot be accessed just like that), but with a given length.
let arr = []
```

幾乎總是使用第二種變體2️⃣語法used。 在括號中，我們可以指示元素的初始值：

```jsx live
function learnJavaScript() {
  let fruits = ['Apple', 'Orange', 'Plum']

  return fruits.toString()
}
```

數組元素從零開始編號

我們可以通過在方括號中指定其編號來獲取元素👇:

```jsx live
function learnJavaScript() {
  let fruits = ['Apple', 'Orange', 'Plum']

  return fruits[0]
}
```

我們可以替換🖊️元素:

```javascript
fruits[2] = 'Plum' // now ["Apple", "Orange", "Plum"]
```

... 或在現有陣列上添加一個新的 👇:

```jsx live
function learnJavaScript() {
  let fruits = ['Apple', 'Orange', 'Plum']
  fruits[2] = 'Pear'
  fruits[3] = 'Lemon' // теперь ["Apple", "Orange", "Pear", "Lemon"]

  return fruits
}
```

## 長度

數組中的元素總數包含在其數組中 `.length` 財產：

```jsx live
function learnJavaScript() {
  let fruits = ['Apple', 'Orange', 'Plum']

  return fruits.length
}
```

`length` 數組更改時，屬性會自動更新。 確切地說，它不是數組中元素的數量，而是最大的數字索引加一。

![Update](https://media.giphy.com/media/FP47IFqWyXfdKYU6VG/giphy.gif)

例如，唯一的具有大索引的實元素為數組提供最大可能的長度 👇:

```jsx live
function learnJavaScript() {
  let fruits = []
  fruits[155] = 'Apple'

  return fruits.length // 156
}
```

請注意，我們通常不以這種方式使用數組。

關於 `length` 屬性是它可以被覆蓋。

如果我們手動增加➕，則不會發生任何有趣的事情。 但是，如果我們減少它，數組將變短。 我們可以從示例中了解到，這個過程是不可逆的 👇:

```jsx live
function learnJavaScript() {
  let arr = [1, 2, 3, 4, 5]

  arr.length = 2 // shorten to two elements
  //console.log( arr )  // [1, 2]

  arr.length = 5 // return length as it was
  //console.log( arr[3] )  // undefined: values are not restored!

  return 'The real array was shortened:' + arr
}
```

所以清除數組的最簡單方法是 `arr.length = 0`.

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
