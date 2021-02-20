---
id: javascript22
title: 高階函數
sidebar_label: 高階函數
---

![@serverSerrverlesskiy](/img/javascript/headers/21.jpg)

高階函數允許JavaScript適用於 [functional programming](https://en.wikipedia.org/wiki/Higher-order_function).

這些功能在 JavaScript 中被廣泛使用。 如果您曾經用 JavaScript 編程過一點，則可能已經使用了它們，甚至可能沒有意識到。

為了完全理解該概念，您應該首先了解函數式編程和一流函數的概念。

## 什麼是函數式編程？

> Functional programming is a branch of discrete mathematics and a programming paradigm, in which the computation process is interpreted as the calculation of the values ​​of functions in the mathematical sense of the latter (as opposed to functions as subroutines in procedural programming). [Wikipedia]

### 一流的功能

![First_class](https://media.giphy.com/media/l2Jecm1l0wnJ2kQDu/giphy.gif)

如果您已經在學習JavaScript，則可能聽說過JavaScript將函數⚙️視為一流的對象。 就像其他函數式編程語言一樣，JavaScript中的函數是對象。
在JavaScript中，函數⚙️是一種特殊的對像類型。 這些是 `Function` 對象。 例如:

```jsx live
function learnJavaScript() {
  let greeting = () => 'Hello, World!'

  return greeting()
}
```

現在我們知道什麼是一流的功能。 您可以從高階函數開始。

## 高階函數

![Higher](https://media.giphy.com/media/WS4yajVBkb3lIwDIKd/giphy.gif)

這些是將函數⚙️作為參數或返回函數🔄️作為輸出的函數⚙️。

例如，這些高階函數內置在該語言中： `map()` `filter()` 和 `reduce()`

### 例子 # 1. 更改號碼 `.push`

![Edit_number](https://media.giphy.com/media/xT5LMMneIRG1UJquOI/giphy.gif)

假設我們有一個數字數組。 我們要創建一個新的 🆕 數組，其中將包含第一個數組的兩倍值。 讓我們看看如何使用和不使用高階函數來解決此問題。

#### 沒有高階函數：

```jsx live
function learnJavaScript() {
  const arr1 = [1, 2, 3, 4]
  const arr2 = []

  for (let i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i] * 2) // the arr2 array grows in a loop
  }

  return arr2 // 2, 4, 6, 8 only without spaces
}
```

具有高階功能 `map`, 控制台選項是:

```jsx live
function learnJavaScript() {
  const arr1 = [1, 2, 3, 4]
  const arr2 = arr1.map(function (item) {
    // Old variant
    return item * 2 + ' '
  })
  return arr2
}
```

我們可以使用 “箭頭功能” 語法將其編寫得更短：

```jsx live
function learnJavaScript() {
  const arr1 = [1, 2, 3, 4, 5]
  const multTwo = item => item * 2 + ' '

  const arr2 = arr1.map(multTwo) // Algorithm in 1 line

  return arr2
}
```

### 例子 # 2. 計算值 `.map`

![Math](https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif)

假設我們有一個包含不同人的出生年份的數組。 我們需要創建一個數組來存儲他們的年齡。

例如：沒有高階函數⚙️（經典-通過 `for()` 和 `push()` 循環)

```jsx live
function learnJavaScript() {
  const birthYear = [1975, 1997, 2002, 1995, 1985]
  const ages = []
  for (let i = 0; i < birthYear.length; i++) {
    let ageNew = 2020 - birthYear[i] + ' ' // The current value of the new array
    ages.push(ageNew) // push the new value into the ages [] array
  }

  return ages // [ 45, 23, 18, 25, 35 ] only without spaces
}
```

具有高階功能 `map`:

```jsx live
function learnJavaScript() {
  const birthYear = [1975, 1997, 2002, 1995, 1985]
  let ages = birthYear.map(year => 2020 - year + ' ') // 1-line algorithm via arrow function
  return ages // [ 45, 23, 18, 25, 35 ]
}
```

我們在一行鱈魚中刷新 🆕 一個新數組e📟.
 
### 例子 # 3. 有條件檢查 `.filter()`

![Check](https://media.giphy.com/media/Rd6sn03ncIklmprvy6/giphy.gif)

我們有一個數組，其中包含具有以下屬性的對象：名稱和年齡。 我們需要創建一個僅包含成人（即年齡大於或等於18歲）的數組。

沒有高階函數（經典-通過 `for ()` 和 `push ()` 循環):

```jsx live
function learnJavaScript() {
  const persons = [
    { name: 'Niki', age: 16 },
    { name: 'Mark', age: 18 },
    { name: 'John', age: 27 },
    { name: 'Jane', age: 14 },
    { name: 'Tony', age: 24 }
  ]

  const fullAge = []
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].age >= 18) {
      fullAge.push(persons[i])
    }
  }

  return fullAge.length // number of persons over 18 years old
}
```

With a higher-order function `filter` with a built-in condition:

```jsx live
function learnJavaScript() {
  const persons = [
    { name: 'Niki', age: 34 },
    { name: 'Mark', age: 18 },
    { name: 'John', age: 27 },
    { name: 'Jane', age: 14 },
    { name: 'Tony', age: 24 }
  ]
  const fullAge = persons.filter(person => person.age >= 18) // Algorithm with a condition in 1 line

  return fullAge.length // number of persons over 18 years old
}
```

## 創建自己的高階函數

![Create](https://media.giphy.com/media/3ohzdWsUVRcZC2L7Ms/giphy.gif)

到目前為止，我們已經研究了語言中內置的高階函數。 現在讓我們自己創建這樣的功能function️。
想像一下，JavaScript沒有內置的“ map”方法。 我們可以通過創建一個高階函數自己編寫它。

假設我們有一個字符串數組，我們想將其轉換為數字數組，其中每個元素代表原始數組中元素的長度。

```jsx live
function learnJavaScript() {
  // Source array
  const strArray = ['English', 'JavaScript', 'React', 'TypeScript', 'AWS']
  // higher order function mapForEach () takes a formal (hypothetical) function fn and a formal array arr
  let mapFor = (arr, fn) => {
    const newArray = []
    for (let i = 0; i < arr.length; i++) {
      newArray.push(fn(arr[i])) // We apply the hidden function fn () to each element
    }
    return newArray // Returning a new array
  }
  // The main conversion code - mapForEach() is called with specific parameter values
  const lenArray = mapFor(strArray, item => item.length + ' ')

  return 'Word length: ' + lenArray // [ 7, 10, 5, 10, 3 ]
}
```

在上面的示例中，我們創建了自己的高階函數 `mapFor()`, 這需要一個數組 `arr` 和一個回調函數 `fn`. 該函數遍歷此數組並調用回調函數 `fn` 在 - 的里面 `newArray.push()` f或每次迭代，計算數組單詞中的字符數，其計算算法以第二個變量的形式描述 🔔.

::: 筆記回調
回調函數是作為參數傳遞給另一個函數的函數，然後在完成操作後調用該函數。

:::

`callback` 功能 ⚙️ `fn` 獲取數組的當前元素並返回🔄當前元素的長度，該長度現在存儲在 `newArray`. 之後 `For()` 循環完成, `newArray` 返回元素的長度 `lenArray`.

<!-- Поэксперементируйте, используя стрелочные функции:

```jsx
function learnJavaScript() {
  let name = ''
  // Для наглядности функцию преобразования вынесем в отдельную переменную
  let say = secret => 'Hello, ' + secret + ' !' // Основной расчетный алгорим (можно сортировку встроить и многое другое)
  // userInput() - функция высшего порядка
  let userInput = fn => {
    // в качестве параметра функция, пока еще не известно какая (неизведанный алгоритм)
    name = 'Jane' // какое-либо действие
    return fn(name) // только теперь запускаем callback-функцию переданную в параметре с конкретным значением `name`
  }
  return userInput(say) // say - функция callback (обратного вызова), становиться ясно какая функция передается в качестве параметра без скобок
}
```

Обратите внимание на синтаксис📖:

при передаче функции⚙️ say в качестве параметра скобки `()` не указываются, т.к. в параметре функция⚙️ не вызывается, а передается целиком. Функция⚙️ `say` является аргументом функции⚙️ `userInput().` -->

請記住，任何算法，無論多麼小，都包括三個階段：

-階段1-變量🔔和函數的初始化
-階段2-高階函數（邏輯）
-階段3-答案的結論。

<!-- Модернизированный пример:

```jsx live
function learnJavaScript() {
  // 1 этап - Инициализация переменных и функций
  let name = ''
  let say = secret => 'Твое имя содержит ' + secret.length + ' символа.'
  // 2 этап - Функция высшего порядка
  let userInput = fn => {
    name = 'Jane'
    return fn(name)
  }
  return userInput(say) // 3 этап - Ответ
}
``` -->

## 結論

<!-- ![The and](https://media.giphy.com/media/xT1XH3yj7ujmm2h40o/giphy.gif) -->

我們了解了什麼是高階函數，並研究了其中幾種已經內置在該語言中的函數。 我們學會了自己創建它們。

無需贅述，高階函數⚙️可以這樣表示：這些是可以將函數⚙️作為參數甚至返回函數⚙️的函數⚙️。

## 問題？

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

寫給 [Discord](https://discord.gg/6GDAfXn) 聊天。

## 問題：

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

一流的功能：

1.一流的設施
2.第五類的設施
3.一流的設施

高階函數：

1.以函數作為參數或返回函數作為輸出
2.只接受一個函數作為參數
3.只返回一個函數作為輸出

高階函數：

1.創造自己是不現實的
2.只能通過內置方法使用
3.您可以創造自己

為了了解您學到了多少本課程，請對 [mobile application](http://onelink.to/njhc95) 我們學校就這個話題。

![Sumerian school](/img/app.png)

## 鏈接:

1. [Exploring Higher-Order Functions in JavaScript](https://medium.com/nuances-of-programming/%D0%B8%D0%B7%D1%83%D1%87%D0%B0%D0%B5%D0%BC-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8-%D0%B2%D1%8B%D1%81%D1%88%D0%B5%D0%B3%D0%BE-%D0%BF%D0%BE%D1%80%D1%8F%D0%B4%D0%BA%D0%B0-%D0%B2-javascript-c23daf53a5c0)
2. [Article "Higher-order functions in JavaScript"](https://habr.com/ru/post/261723/)
3. [Expressive Javascript. Article "Higher-order functions"](https://eloquent-javascript.karmazzin.ru/chapter5)
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
## Array.prototype.reduce
Метод `reduce` выполняет `callback-функцию` для `каждого элемента` вызываемого массива, что в результате приводит к одному выходному значению.

Метод reduce принимает два параметра:
1) reducer-функцию (callback)
2) и опционально initialValue.

Reducer-функция (callback) принимает 4 параметра: accumulator, currentValue, currentIndex, sourceArray.
Если параметр initialValue предусмотрен, тогда accumulator будет равен initialValue
, а currentValue равен первому элементу в массиве.
Если параметр initialValue не предусмотрен, тогда accumulator будет равен первому элементу массива, а currentValue – второму.
Пример №1
Допустим, нам нужно суммировать массив чисел:
С функцией высшего порядка reduce
const arr = [5, 7, 1, 8, 4]
const sum = arr.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue
})
// prints 25
console.log(sum)
Reducer-функция вызывается для каждого элемента массива, а результат возвращённый reducer хранится в accumulator . В currentValue содержится текущее значение массива. Конечный результат хранится в переменной sum .
Мы можем задать начальное значение этой функции:
const arr = [5, 7, 1, 8, 4]
const sum = arr.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue
}, 10)
// prints 35
console.log(sum)
Без функции высшего порядка
const arr = [5, 7, 1, 8, 4]
let sum = 0
for(let i = 0 ; i < arr.length ; i++) {
  sum = sum + arr[i]
}
// prints 25
console.log(sum)
Обратите внимание, как использование функции высшего порядка сделало наш код чище, лаконичнее и менее многословным.
-->
