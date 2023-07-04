---
id: javascript10
title: 對象
sidebar_label: 對象
---

![@serverSerrverlesskiy](/img/javascript/headers/11.jpg)

對象就像一個壁櫥📦，用於存儲和傳輸其他類型的數據。
JavaScript是圍繞一個簡單的範例設計的。 該概念基於簡單的對象。 對像是屬性的集合，每個屬性都包含一個名稱（鍵）和一個與該名稱關聯的值。 該屬性值可以是一個函數⚙️，可以稱為對象的方法或任何其他類型。

![Object](https://media.giphy.com/media/xTiTnFEfyt0vqhQzDi/giphy.gif)

在本文中，我們將介紹JavaScript對象的最基本屬性，創建和修改以及枚舉屬性。

JavaScript中的對像是簡單的關聯數組，換句話說就是“哈希”。 它存儲任何鍵：值匹配，並具有幾種標準方法。

JavaScript中的對象，例如現實生活中的對象（人，公共汽車，建築物等），具有多個具有特定值（15，約翰，黑色）的命名（關鍵🗝️）參數（年齡，姓名，頭髮顏色，狀態） 'true') ✅:

```javascript
let obj = {
  age: 15,
  name: 'John',
  color: 'black',
  student: true
}
```

JavaScript中的對象方法只是一個函數️，已添加到關聯數組中。

```jsx live
function learnJavaScript() {
  let obj = {
    // properties: values
    age: 15,
    name: 'John',
    // method: function
    say: () => 'Hello!'
  }
  return obj.say()
}
```

### 對象創建

![Object](https://media.giphy.com/media/2YaKpvYQEcl1WuJJTl/giphy.gif)

在計算機🖥️中，我們可以將“對象”表示為帶有簽名的名稱-屬性（“訪問鍵”）的櫃子。 櫥櫃內部📦抽屜🧰-類似於事物，數據（特定信息）甚至更小的物體。 可以很容易地找到，刪除或添加（寫入）新值。`key`.

![obj01](/img/javascript/12/01.png)

這是用於創建🏗️空對象的兩個2️⃣選項：

```javascript
// equivalent records
let obj = {}
let person = new Object()
```

第二種選擇在實踐中很少使用。

![obj00](/img/javascript/12/00.png)

## 進階創作

![Extended](https://media.giphy.com/media/2XflxzlJfoSDycf3BBu/giphy.gif)

可以在創建對象時通過大括號中的列表直接指定屬性 {..., `key: value,` ...} 並創建複雜的對象：

```jsx live
function learnJavaScript() {
  const obj = {
    age: 15,
    name: 'John',
    color: 'black',
    passport: {
      serial: 5721,
      number: 258963,
      date: '27.10.2015'
    },
    student: true
  }

  return obj.passport.date
}
```

創建的🏗️對象包含五個具有特定值的屬性，其中之一是護照數據，這是一個內置對象。 注意對對象的遙遠屬性或方法的調用是如何進行的。 嘗試返回您的護照號碼。

## 添加屬性

![Adding](https://media.giphy.com/media/3CZ2iGe1ByKfhZxaD7/giphy.gif)

有兩種用於將屬性添加到對象的2️⃣語法。 1️⃣第一個是句號，第二個是方括號：

```javascript
// equivalent records
obj.age = 15
obj['age'] = 15
```

```jsx live
function learnJavaScript() {
  let obj = {
    name: 'John'
  }

  obj.age = 15

  return obj.age
}
```

方括號主要用於 `properties' 名字在 `variable` 🔔:

```javascript
let nameProp = 'age'
obj[nameProp] = 15
```

在這裡，通過變量🔔 `nameProp`, 我們設置屬性的名稱 `"age"`, 這是包含以下內容的關聯數組中的鍵 `value 15`.

```jsx live
function learnJavaScript() {
  let obj = {
    name: 'John'
  }

  let nameProp = 'age'
  obj[nameProp] = 15

  return obj.age
}
```

## 訪問屬性

![Door](https://media.giphy.com/media/l378znZcUM7b6VDyM/giphy.gif)

通過訪問屬性來訪問它 👇:

```jsx live
function learnJavaScript() {
  let obj = {} // object is empty
  obj.age = 17 // equivalent to obj ['age'] = 17 or immediately obj = {age: 17}

  let result1 = obj.age // Option 1
  let result2 = obj['age'] // Option 2

  return result1 + 'or' + result2
}
```

如果對像不具有此類屬性，則結果為 `undefined`. 在瀏覽器控制台中檢查它。

```javascrript
let obj = {}
obj.nokey
```

![nokey](/img/javascript/15.jpg)

訪問不存在的屬性（特殊值）時不會出現錯誤🙅‍♂️ `undefined` 只會返回。 如果沒有 `return` 函數中的關鍵字，然後 `undefined` 值也會返回-缺少東西。

<!-- ## Проверка глобальной переменной

![Planet](https://media.giphy.com/media/LW5vBvAb48Oe9OoEKT/giphy.gif)

В JavaScript нельзя проверить существование глобальной переменной 🔔 простым `if(проверяемаяПеременная)`:

```javascript
    if (x) { ... }
```

Если `x` не определен, то конструкция if(x) вызовет `ошибку`.

Распространенное решение - использовать `typeof()`:

```javascript
    if (typeof(x) != 'undefined') { ... }  // или typeof(x)
``` -->

<!--
Однако зная, что глобальная переменная в Javascript - всего лишь свойство объекта `window` - мы можем записать проще:

```javascript
    if (window.x) { ... }   // правильный аналог if(x)
    // или
    if (window.x !== undefined) // аналог typeof x ..
```
-->

<!-- :::note Cвойства объектов
Все свойства объектов - public (общественные), т.е при определении свойства никак нельзя ограничить доступ к свойству.
:::

В JavaScript есть специальные способы для создания🏗️ `private` свойств, связанные с `замыканиями`. Они рассмотрены вместе с наследованием объектов далее по курсу. -->

## 刪除屬性

![Delete](https://media.giphy.com/media/5xaOcLwEvFOizxHVyVy/giphy.gif)

刪除➖屬性運算符 `delete`. 嘗試從上一個示例中刪除護照號碼：

從控制台中的上一個示例創建對象。

```javascript
const obj = {
  age: 15,
  name: 'John',
  color: 'black',
  passport: {
    serial: 5721,
    number: 258963,
    date: '27.10.2015'
  },
  student: true
}
```

現在刪除嵌套 `passport` 目的

```javascript
delete obj.passport
```

現在，如果您引用它，那麼結果將是 `undefined`

```javascript
obj.passport
```

![delete obj](/img/javascript/16.jpg)

## 對象方法

![Description](https://media.giphy.com/media/3ohzAqLk7azQ0O6RvW/giphy.gif)

與其他語言一樣，JavaScript對象具有`methods`.

例如，讓我們創建一個 `sport` 立即與 `run` 方法:

```jsx live
function learnJavaScript() {
  let sport = {
    run: n => 'John' + 'ran' + n + 'meters!'
  }

  return sport.run(300)
}
```

### 添加方法

![Add](https://media.giphy.com/media/5ns6077LTlGACuwRQR/giphy.gif)

向現有對象添加方法很簡單，分配功能⚙️ `function (n) {...}` 到 `sport.run` 財產。

```jsx live
function learnJavaScript() {
  let sport = {}

  sport.run = n => 'The athlete ran' + n + 'meters and it was' + 'Nikita'

  return sport.run(350)
}
```

<!-- :::note Обратите внимание
Очень часто методы используют в своих расчетах свойства своего же объекта.
::: -->

這與類，實例化等無關。 簡單-您可以隨時向任何對象添加新方法或刪除現有方法。

<!--
```jsx live
function learnJavaScript() {
  var sport = {
    name: 'Nikita',
    age: 18
  }

  sport.run = (n, str) => {
    if (str === 'men') return 'Спортсмен пробежал ' + n + ' метров и это был ' + sport.name
    if (str === 'women') return 'Спортсменка пробежала ' + n + ' метров и это была ' + sport.name
    if (str !== 'men' || str !== 'women') return 'Человек пробежал ' + n + ' метров.'
  }

  return sport.run(350, 'women')
}
```

Подумайте, чем можно заменить множественный `if()`. JavaScript - очень динамический язык👅. -->

## 遍歷對象屬性

![enumeration](https://media.giphy.com/media/h5FIFDs6rXLpWlWWZJ/giphy.gif)

要遍歷對象的所有屬性，一種特殊的 `for .. in` 使用建築:

```javascript
for(let key in obj) {
   // key - property name
   // obj [key] - property value
  ...
}
```

例如 👇:

```jsx live
function learnJavaScript() {
  let result = ''

  const obj = {
    age: 15,
    b: 'true',
    color: 'red'
  }

  for (let key in obj) {
    result += key + ':' + obj[key] + ' '
  }

  return result
}
```

秘密地說，幾乎所有變量🔔在JavaScript環境中都是一個微型對象。 因此，不要害怕使用它們。

## 問題？

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Write to [Discord](https://discord.gg/6GDAfXn) chat.

## 問題:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

使用以下命令創建一個空對象：

1. `let obj = {}`
2. `function obj()`
3. `let x = 10`

對象存儲匹配項：

1.鍵：值
2.姓名：姓
3.變量=值

為特定鍵（屬性）分配值的語法:

1. `color () = "green" `
2. `obj.color =" red "`
3. `function color () =>" yellow "`

JavaScript中的對象方法是

1.只是將一個函數添加到關聯數組
2.外部功能
3.在對像外部描述的變量

遍歷對象屬性

1. `for (let i = 0; i <= 100; i ++) {sum + = i} `
2. `for (let key in obj) {}`
3. `while (condition) {} `

為了了解您學到了多少本課程，請對 [mobile application](http://onelink.to/njhc95) 我們學校就這個話題。

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

## 鏈接

1. [MDN web doc. Developer.mozilla.org - Статья "Типы данных JavaScript и структуры данных"](https://developer.mozilla.org/ru/docs/Web/JavaScript/Data_structures)
2. [MDN web doc. Developer.mozilla.org - Статья "Инициализация объектов"](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Object_initialize)
3. [Статья "Object Types"](https://www.javascript.express/types/object_types)
4. [Статья "Объекты", сайт Learn.javascript.ru](https://learn.javascript.ru/object)
5. [Code for Teens: The Perfect Beginner's Guide to Programming, Volume 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)

## 貢獻者 ✨

感謝這些好人([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/KoDim-React"><img src="https://avatars1.githubusercontent.com/u/72087863?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy K.</b></sub></a><br /><a href="#mentoring-KoDim-React" title="Mentoring">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

<!--

<!--
Это уже выходит за рамки текущей статьи, но вообще - существует еще одна форма перебора свойств, которая более надежна, особенно если используется библиотека типа prototype.

```javascript
for (prop in object) {
  if (!object.hasOwnProperty(prop)) continue
  //...
}
```
Эта форма отфильтровывает свойства, которые принадлежат не самому объекту, а его прототипу. Поэтому она работает, даже если в прототип Object добавлены новые свойства.

Более элегантный вариант записи:

```javascript
for (prop in object)
  if (object.hasOwnProperty(prop)) {
    //...
  }
```

### Доступ к объекту из метода

Обычно хочется, чтобы метод не просто вызывался из объекта, но имел доступ к самому объекту, мог менять находящиеся в нем данные.

Для этого используется ключевое слово this:

В отличие от многих языков, this никак не привязано к объекту, а обозначает просто объект, вызвавший эту функцию.
Например,

```javascript
function thisObj() {
  let vasya = { name: 'Вася' }
  let petya = { name: 'Петя' }

  let sayName = function () {
    console.log('Я - ' + (this.name ? this.name : 'безымянный'))
  }
  vasya.sayName = sayName

  // один и тот же метод в двух объектах
  petya.sayName = vasya.sayName

  // тут - this будет petya
  petya.sayName() // Я - Петя

  // тут - this будет vasya
  vasya.sayName() // Я - Вася

  // а тут - вызывается метод глобального объекта window, у которого нет имени
  sayName() // Я - безымянный
}

thisObj()
```
-->
