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

## 項目類型

![Storage](https://media.giphy.com/media/2sYaePC3iVWYBNxaVj/giphy.gif)

數組可以存儲任何類型的📦元素-數字，布爾值，字符串，對像或整個函數：

例如 👇:

```jsx live
function learnJavaScript() {
  let arr = [
    'Apple',
    { name: 'Nikita' },
    true,
    function () {
      return 'Hello'
    }
  ]
  // get the element with index 1 {object} and then read its property
  let x = arr[1].name // name Nikita
  // get the element with index 3 (function) and execute it
  let result1 = arr[3] // The function itself
  let result2 = arr[3]() // 'Hello'

  return 'Value of 4th element at 3rd index:' + result2
  // + '. The function itself: '+ result1
}
```

筆記 `result1 = arr [3]` 包含函數的文本，以及 `result2 = arr [3] ()` 執行函數的結果是 `()` 我們運行它。

## 方法 `push / pop`

![binarycode](https://media.giphy.com/media/fV0oSDsZ4UgdW/giphy.gif)

`Stack` 是使用數組作為數據結構的一種變體。

它支持兩種 2️⃣ 操作類型：

- `push` ➕ 在最後添加一個元素。

![Add](https://media.giphy.com/media/Yqo5mjWTLGlVOIP8Dc/giphy.gif)

- `pop` ➖ 刪除最後一個元素。

![Delete](https://media.giphy.com/media/VD4Bt6FyYWcWj0LzDK/giphy.gif)

因此，新元素總是添加或刪除 "end".

堆棧的一個例子通常是金字塔：新的戒指放在頂部，也從上方取下來。

`Queue` 是數組的最常見用途之一。 在計算機科學中，這是元素的有序集合

## 處理數組末尾的方法:

### 推

![Add to](https://media.giphy.com/media/21ODeWspDCgZNAoCIp/giphy.gif)

➕ 將元素添加到數組的末尾👇:

```jsx live
function learnJavaScript() {
  let fruits = ['Apple', 'Orange']

  fruits.push('Pear')

  return 'Array: ' + fruits // Apple, Orange, Pear
}
```

### 流行音樂

![Delete](https://media.giphy.com/media/26ybwwiZmci3DJdYs/giphy.gif)

➖ 從數組中刪除最後一個元素並返回它 👇:

```jsx live
function learnJavaScript() {
  let fruits = ['Apple', 'Orange', 'Pear']

  let delFruits = fruits.pop() // remove the "Pear" and return it to the delFruits variable

  return 'Removed item = ' + delFruits + '. Array left: ' + fruits // Apple, Orange
}
```

## 處理數組開頭的方法:

![start](https://media.giphy.com/media/QJvwBSGaoc4eI/giphy.gif)

### 轉移

➖  從數組中刪除第一個並返回 🔄 :

![delete](https://media.giphy.com/media/4Z1XJumqDgvI9b1VZJ/giphy.gif)

```jsx live
function learnJavaScript() {
  let fruits = ['Apple', 'Orange', 'Pear']

  fruits.shift() // remove the Apple

  return fruits
}
```

### 不變

➕ 將元素添加到數組的開頭:

![Plus](https://media.giphy.com/media/LgC9OQ53v5mFi/giphy.gif)

```jsx live
function learnJavaScript() {
  let fruits = ['Apple', 'Orange', 'Pear']

  fruits.unshift('Apricot')

  return fruits
}
```

`push` 和 `unshift` 方法可以一次添加多個元素 👇:

```jsx live
function learnJavaScript() {
  let fruits = ['Apple']

  fruits.push('Orange', 'Pear')
  fruits.unshift('Pineapple', 'Lemon')

  return 'In an array ' + fruits.length + ' elements. ' + ' Array: ' + fruits // ["Pineapple", "Lemon", "Apple", "Orange", "Pear"]
}
```

## 內部陣列

![cupboard](https://media.giphy.com/media/b90TnygrKqYqk/giphy.gif)

數組是一種特殊的對象。 用於訪問arr的方括號 [0] 屬性本質上是鍵訪問的常用語法，例如 obj `[key]`, 其中obj是arr，鍵是數字索引。

數組擴展了對象，因為它們提供了用於處理數據的有序集合以及 length 屬性的特殊方法。 “但是它們仍然基於設施。

請記住，在JavaScript中，數組是一個對象，因此其行為類似於對象。

例如，數組通過引用複制 👇:

```jsx live
function learnJavaScript() {
  let fruits = ['Lemon']

  let copy = fruits // copied by reference (two variables refer to the same array)

  copy.push('Pear') // arrays are changed by reference with one command

  return '1 array:' + fruits + '2 array:' + copy // Lemon, Pear - now two elements
}
```

真正使數組與眾不同的是它們的內部表示。 JavaScript引擎試圖將數組的元素一個接一個地存儲在內存的連續區域中。 還有其他優化可以使數組變得非常快。

但是，如果我們停止將數組作為“數據的有序集合”使用，並像常規對像一樣開始使用它，它們將全部失效。

例如，我們可以在技術上執行以下操作：

```javascript
let fruits = [] // create an empty array

fruits[99999] = 5 // create a property with a redundant index much larger than the required array length

fruits.age = 25 // create a property with an arbitrary name
```

這是可能的，因為數組基於對象。 我們可以為其分配任何屬性。

:::note 可能濫用陣列！

- 例如，添加非數值屬性（索引測試: arr.test = 5
- 的製作"holes", 例如：添加arr [0], 藝術 [1000] （兩者之間沒有任何東西）
-以相反的順序填充數組，例如：arr [1000], arr [999], etc.

:::

將數組視為一種特殊的結構，它允許您處理有序數據。 如果您需要任意鍵，則很有可能 {} 對象更適合。

## 效率

![Fast](https://media.giphy.com/media/3oriNYQX2lC6dfW2Ji/giphy.gif)

推/彈出方法快，而移位/不移位方法慢。

為什麼在數組的結尾處比在數組的開始處更快？ 讓我們看看運行時會發生什麼：

```javascript
fruits.shift() // remove the first element from the beginning
```

It is not enough to simply grab and remove item 0. You also need to re-number the rest of the elements.

移位操作必須做三件事：

-刪除索引為0的元素

![Delete](https://media.giphy.com/media/VIzs0jgs8KmgVeTknN/giphy.gif)

- 將所有元素移到左側，重新編號，替換 `1` 和 `0`, `2` 和 `1`, etc.

![Move](https://media.giphy.com/media/jSQcEjcwG53WooptHz/giphy.gif)

- 更新 `length` 財產

數組包含的元素越多，移動它們所需的時間越長，則內存操作也就越多。

但是刪除流行音樂呢？ 他不需要移動任何東西。 要刪除數組末尾的元素，pop方法將清除索引並減小長度。 其餘元素保留相同的索引。

```javascript
fruits.pop() // remove one element from the end
```

pop方法不需要移動。 這就是為什麼它運行非常快的原因。

`push` 方法的工作方式相同。

## 遍曆元素

![Object](https://media.giphy.com/media/26gs9kSN6d5PxSsQU/giphy.gif)

迭代數組元素的最古老方法之一是 `for ()` 遍歷數字索引 👇:

```jsx live
// prettier-ignore
function learnJavaScript() {
   let result = ''
   let arr = ['Apple', 'Orange', 'Kiwi']

   for (let i = 0; i < arr.length; i++) // iterate over elements through for ()
   result += arr[i] + ', '

   return result // Apple, Orange, Kiwi
}
```

但是數組也可以使用另一種循環形式， `for..of` 👇:

```jsx live
function learnJavaScript() {
  let result = ''
  let fruits = ['Apple', 'Orange', 'Plum']

  for (let fruit of fruits) {
    // iterate over values through `for..of`
    result += fruit + ', '
  }
  return result // Apple, Orange, Plum
}
```

`for..of` 循環不提供對當前元素編號的訪問，僅提供其值的訪問，但是在大多數情況下，這樣做綽綽有餘，而且更短。

<!-- ## Псевдомассивы

![Spiderman](https://media.giphy.com/media/l36kU80xPf0ojG0Erg/giphy.gif)

В браузере и других программных средах также существуют так называемые "псевдомассивы" – объекты, которые выглядят, как массив. То есть, у них есть свойство `length` и индексы, но они также могут иметь дополнительные нечисловые свойства и методы, которые нам обычно не нужны. Тем не менее, цикл `for..in` выведет и их. Поэтому, если нам приходится иметь дело с объектами, похожими на массив, такие "лишние" свойства могут стать проблемой.

Технически, так как массив является объектом, можно использовать и вариант `for..in` для правильного массива 👇 :

```jsx live
function learnJavaScript() {
  let result = ''
  let arr = ['Яблоко', 'Апельсин', 'Груша', 'Лимон']

  for (let key in arr) {
    // проходит по элементам через `for..in`
    result += arr[key] + ' '
  }
  return result // Яблоко, Апельсин, Груша, Лимон
}
```

Цикл `for..in` оптимизирован под произвольные объекты, не массивы, и поэтому в 10-100 раз медленнее. Увеличение ➕ скорости выполнения может стать проблемой.

В целом, не следует использовать цикл `for..in` для массивов. Так же существуют скрытые недостатки этого способа:

- цикл `for..in` выполняет перебор всех свойств объекта, а не только цифровых. -->

## 多維數組

![Matryoschka](https://media.giphy.com/media/XuPaGVKyJ6eyI/giphy.gif)

數組可以包含也是數組的元素。 這可以用於創建омер多維數組，例如，存儲📦矩陣：

```jsx live
function learnJavaScript() {
  let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]

  return matrix[1][1] // 5, central element
}
```

## 全部的

![remember](https://media.giphy.com/media/l4pTfqyI6TCjUW4Yo/giphy.gif)

數組是一種特殊類型的對象，旨在與一組有序元素一起使用。

公告🗣️:

```javascript
// square brackets (usually)
let arr = [item1, item2 ...]

// new Array (very rare)
let arr = new Array (item1, item2 ...)
```

通話 `new Array (number)` 創建具有給定長度但沒有元素的數組。

length屬性反映了數組的長度。

我們可以使用以下操作將數組用作雙端隊列：

- `push (... items)`➕ 將項目添加到數組的末尾。
- `pop ()` ➖ 刪除數組末尾的元素並返回它。
- `shift ()` ➖ 刪除數組開頭的元素並返回它。
- `unshift (... items)` ➕  adds項目到數組的開頭。

要遍歷數組的元素：

- `for (let i = 0 i < arr.length i ++)` - 工作最快，與舊版瀏覽器兼容。
- `for (let item of arr)` - 現代語法📖僅適用於項目值（無法訪問索引）。
- `for (let i in arr)` - 永遠不要用於數組！

## 問題？

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

寫給 [Discord](https://discord.gg/6GDAfXn) 聊天。

## 問題:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

數組是...

1.具有“數據的有序收集”的對象子類型
2.內部功能
3.具有“無序數據收集”的對象的子類型

創建一個空數組：

1. `let arr1 = []`
2. `let arr2 = {}`
3. `let arr3 = ()`

數組的長度可以由以下屬性確定：

1. `pop ()`
2. `push ()`
3. `length`

該數組可以存儲元素：

1.任何類型
2.數值
3.字符串

在數組的末尾添加一個元素：

1. `push () `
2. `pop () `
3. `shift () `

刪除數組開頭的元素：

1. `pop () `
2. `shift () `
3. `unshift () `

為了了解您學到了多少本課程，請對 [mobile application](http://onelink.to/njhc95) 我們學校就這個話題。

![Sumerian school](/img/app.png)

## 鏈接

1. [Article "Arrays"](https://learn.javascript.ru/array)
2. [MDN web doc. Article "Arrays"](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array)
3. [JavaScript Arrays](https://basicweb.ru/javascript/js_array.php)
4. [Code for Teens: The Perfect Beginner's Guide to Programming, Volume 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)

## 貢獻者 ✨

感謝這些好人 ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/KoDim-React"><img src="https://avatars1.githubusercontent.com/u/72087863?v=4?s=200" width="200px " alt=""/><br /><sub><b>Dmitriy K.</b></sub></a><br /><a href="#mentoring-KoDim-React" title="Mentoring">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px " alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)

<!--
### toString
Массивы по-своему реализуют метод toString, который возвращает список элементов, разделённых запятыми.

Например:
```javascript
let arr = [1, 2, 3]

console.log( arr )  // 1,2,3
console.log( String(arr) === '1,2,3' )  // true
```

Давайте теперь попробуем следующее:
```javascript
console.log( [] + 1 )  // "1"
console.log( [1] + 1 )  // "11"
console.log( [1,2] + 1 )  // "1,21"
```

Массивы не имеют ни Symbol.toPrimitive, ни функционирующего valueOf, они реализуют только преобразование toString, таким образом, здесь [] становится пустой строкой, [1] становится "1", а [1,2] становится "1,2".

Когда бинарный оператор плюс "+" добавляет что-либо к строке, он тоже преобразует это в строку, таким образом:
```javascript
console.log( "" + 1 )  // "1"
console.log( "1" + 1 )  // "11"
console.log( "1,2" + 1 )  // "1,21"
```
-->
