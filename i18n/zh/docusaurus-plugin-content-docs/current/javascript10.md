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
