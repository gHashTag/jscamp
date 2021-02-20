---
id: javascript18
title: 休息和傳播
sidebar_label: 休息和傳播
---

![@serverSerrverlesskiy](/img/javascript/headers/19.jpg)

許多內置的JavaScript函數支持任意數量的參數。

例如：

`Math.max (arg1, arg2, ..., argN)` - c計算傳遞的參數的最大數量。

`Math.min (arg1, arg2, ..., argN)` - 返回所傳遞參數的最小值。

在本文中，我們將學習如何對我們自己的函數執行相同的操作，以及如何將參數傳遞給數組等函數。

## 其餘參數 `(... rest)`

![Parametrs](https://media.giphy.com/media/hvddF1vHatFIgQspUB/giphy.gif)

您可以使用任意數量的參數調用函數⚙️，而不管其定義方式如何。

例如 👇:

```jsx live
function learnJavaScript() {
  let summa = (a, b, c) => {
    return a + b + c
  } // Sum of 3 numbers

  return summa(1, 2, 3, 4, 5, 6, 7)
}
```

多餘的參數不會導致錯誤，但是當然只計算前三個參數。

### ES6概念

![Idea](https://media.giphy.com/media/3o6Mbj2w67HnPQKgcE/giphy.gif)

從ES6標准開始，出現了類似 `... rest` - 剩餘參數。

```jsx
let goFun = (...rest) => {
  // Algorithm
}
```

自由參數可以用三個點表示 `...`. 它的字面意思是：“收集剩餘的參數並將它們放入數組中。”

例如，讓我們將所有參數收集到一個數組中 `args`👇:

```jsx live
function learnJavaScript() {
  let sumAll = (...args) => {
    // args — name of the array of passed arguments
    let sum = 0
    for (let arg of args) if (typeof arg === 'number') sum += arg // sum - will collect the sum of all numeric arguments
    return sum
  }
  return sumAll(1, 2, 3, 4, 5, 6, 7, 'React', 'Native')
}
```

答案已經是28，並且沒有錯誤🙅‍♂️！ 嘗試更改參數或數組的維數。

### 多個參數

我們可以將前幾個參數放在變量中 🔔, 並將其餘的收集到一個數組中。
這意味著您只需插入 `... rest`, 但僅代替函數的最後一個參數。

![paste](https://media.giphy.com/media/3o6ZtafpgSpvIaKhMI/giphy.gif)

```jsx
let goFun = (first, second, ...rest) => {
  // Algorithm
}
```

在下面的示例中，該函數的前兩個2️⃣參數將成為名字和姓氏，第三個及後續參數將成為數組 `titles [i]` 👇:

```jsx live
function learnJavaScript() {
  let free = ''
  let showName = (firstName, lastName, ...titles) => {
    free = firstName + ' ' + lastName // First name + Last name
    return titles[0] + ' ' + titles[1]
  }
  // The rest of the parameters will go to the titles = ["React", "Native"] array
  // titles [0] // React
  // titles [1] // Native

  let result = showName('Julius', 'Caesar', 'React', 'Native')

  return free + ' or ' + result
}
```

### 可能的錯誤

![error](https://media.giphy.com/media/xTiN0L7EW5trfOvEk0/giphy.gif)

殘留參數必須在末尾，因此您不能在它們之後寫🖊️。
這將引發錯誤：

```jsx
function f(arg1, ...rest, arg2) {   // arg2 после ...rest ?
  // Mistake!
}
```

:::note Remember
`... rest` must always be last.

:::

<!-- ### Опасный "arguments"

![dangerous](https://media.giphy.com/media/xT5LMAvRY92qUXj7dC/giphy.gif)

Все аргументы функции⚙️ находятся в псевдомассиве `arguments` под своими порядковыми номерами.

Но доступ через массив `arguments[]` можно найти только в старом коде📟 . Не применяйте его!

:::note Внимание
Cтрелочные функции⚙️ не имеют `arguments[]` как и собственного `this.`
:::

Если мы обратимся к `arguments` из стрелочной функции⚙️, то получим аргументы внешней "классической" функции⚙️. Соответственно, для более удобной работы с аргументами лучше использовать только остаточные параметры `...rest`. -->

## 點差運算符 `... spread`

![operators](https://media.giphy.com/media/3o6Mbfd5fQszubehmE/giphy.gif)

我們學習瞭如何從參數列表中獲取數組，但是有時您需要做相反的工作-將數組填充到調用的函數中。

例如，有一個內置功能 ⚙️ `Math.max`. 返回列表中最大的數字:

```jsx live
function learnJavaScript() {
  return Math.max(3, 5, 1, 17, 14, 8, 2, 11)
}
```

### 沒那麼簡單

![Index_finger](https://media.giphy.com/media/4ZcYCubFNk8AUHcZVw/giphy.gif)

假設我們有一個數字數組 `[3, 5, 1]`. 怎麼打 `Math.max` 為了它？

您不能只插入它們 - `Math.max` 期望得到一個數字列表，而不是單個數組。

```jsx live
function learnJavaScript() {
  let arr = [3, 5, 1, 17, 14, 8, 2, 11]
  return Math.max(arr) // NaN - значение будет не определено
}
```

當然，我們可以手動輸入數字： `Math.max (arr[0], arr[1], ar[2]).`

但是，首先，它看起來很糟糕，其次，我們並不總是知道會有多少個論點。 可能有很多，或者根本沒有。

### 參數的出現

![Transform](https://media.giphy.com/media/xT4uQr9H3EDL7Ha2hq/giphy.gif)

`...spread` o操作員會在這裡幫助我們。 它類似於殘差參數-它也使用 `...`, 但恰恰相反。

當。。。的時候 `...spread` 功能在函數調用中使用，它將轉換 `arr` 數組對像到參數列表。

為了 `Math.max` 👇:

```jsx live
function learnJavaScript() {
  let arr = [3, 5, 1, 17, 14, 8, 2, 11]

  return Math.max(...arr) // the ... arr operator converts the array `arr` to an argument list
}
```

同樣，我們可以傳遞多個可迭代對象 👇:

```jsx live
function learnJavaScript() {
  let arr1 = [1, 2, 34, 41]
  let arr2 = [8, 3, 18, 17]
  let arr3 = [2, 4, 16, 38]

  return 'Max = ' + Math.max(...arr1, ...arr2, ...arr3)
}
```

涼爽的！ 一種非常靈活的編程方法。 您還可以將擴展運算符與常規值組合。

### 合併陣列

![Merger](https://media.giphy.com/media/rytLWOErAX1F6/giphy.gif)

點差運算符 `... spread` 也可以用來合併數組 👇:

```jsx live
function learnJavaScript() {
  let arr1 = [3, 5, 7]
  let arr2 = [4, 2, 8]

  let merged = [100, ...arr1, 500, ...arr2]
  let str = 'Массив: ' + merged

  return <b>{str}</b>
}
```

### 轉換為字符串

![Transform](https://media.giphy.com/media/RLVHPJJv7jY1q/giphy.gif)

`... spread` 操作員功能可與任何可迭代對像一起使用。

例如，散佈運算符適用於將字符串轉換為字符數組👇:

```javascript
let str = 'Hey, Alex!'
let result = [...str]
```

![spread](/img/javascript/13.jpg)

讓我們看看發生了什麼。 在底層，散佈運算符使用迭代器迭代元素。 就像 `for..of` 做。

`for..of` 循環將字符串作為字符序列進行迭代，因此從 ` ... str` 原來 "P", "p", "and", "in", "e", "t" ...
使用標準數組聲明將結果字符收集到數組中 🗣️ `[... str] .`

我們也可以使用 `Array.from` 為此任務。 還將可迭代（例如字符串）轉換為數組👇:

```javascript
let str = 'Hello'
Array.from(str) // "H", "e", "l", "l", "o"
// Array.from converts an iterable to an array
```

![spread](/img/javascript/14.jpg)

結果與 `[...str]`. 但是兩者之間有區別 `Array.from(obj)` 和 `[...obj] `:

- `Array.from` 可與偽數組和可迭代對像一起使用。
- The `... spread` 操作員工作 `only` 與可迭代的對象。

所以 `Array.from` 是更通用的方法。

## 全部的

![Elipsis](https://media.giphy.com/media/UWXLULrP5KGDC/giphy.gif)

當我們看到 `"..."` 在代碼код中，它可以是殘差參數 `...rest` 或擴展運算符 ` ...spread`.

如何區分彼此:

- 如果 `...` 位於函數參數列表的末尾，則這些是 “剩餘參數”。 它收集其餘未指定的參數，並組成它們的數組。
- 如果 `...` 發生在函數調用或其他地方，它是 “擴展運算符”。 它從數組中提取元素以初始化函數。

記住以下幾點很有用：

-剩餘參數用於創建帶有未定義數量參數的新函數。
-使用散佈運算符，您可以將數組插入默認情況下與常規參數列表一起使用的函數中。
   ``這些構造在一起使在數組之間來迴轉換值集變得容易。

## 問題?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

寫給 [Discord](https://discord.gg/6GDAfXn) 聊天。

## 問題:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

如果 `...` 位於函數參數列表的末尾，那麼我們正在處理：

1.殘留參數
2.擴展運算符
3.隨機指標

要創建帶有不確定數量的參數的函數，請使用：

1. 殘留參數 `...rest`
2. 點差運算符 `...spread`
3. 外部通話功能

您可以使用以下方法將兩個數組合併為一個：

1.擴展運算符
2.`Array.from` 操作員
3.殘留參數

為了了解您學到了多少本課程，請對[mobile application](http://onelink.to/njhc95) 我們學校就這個話題。

![Sumerian school](/img/app.png)

## 鏈接

1. [MDN web doc. Spread syntax article](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/spread_syntax)
2. [Residual Parameters and the Spread Operator article](https://learn.javascript.ru/rest-parameters-spread-operator)
3. [The article "The spread and rest operator"](https://medium.com/@stasonmars/%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80-spread-%D0%B8-rest-%D0%BF%D0%B0%D1%80%D0%B0%D0%BC%D0%B5%D1%82%D1%80%D1%8B-%D0%B2-javascript-22eb33cb0825)

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
Например:
```jsx
function showName() {
  console.log( arguments.length )
  console.log( arguments[0] )
  console.log( arguments[1] )

  // Объект arguments можно перебирать
  // for (let arg of arguments) console.log(arg)
}

// Вывод: 2, Юлий, Цезарь
showName("Юлий", "Цезарь")

// Вывод: 1, Илья, undefined (второго аргумента нет)
showName("Илья")
```
Раньше в языке не было остаточных параметров, и получить все аргументы функции можно было только с помощью arguments. Этот способ всё ещё работает, мы можем найти его в старом коде.
Но у него есть один недостаток. Хотя arguments похож на массив, и его тоже можно перебирать, это всё же не массив. Он не поддерживает методы массивов, поэтому мы не можем, например, вызвать arguments.map(...).
К тому же, arguments всегда содержит все аргументы функции — мы не можем получить их часть. А остаточные параметры позволяют это сделать.
Соответственно, для более удобной работы с аргументами лучше использовать остаточные параметры.
-->
