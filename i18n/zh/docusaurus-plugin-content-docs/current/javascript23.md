---
id: javascript23
title: 班級
sidebar_label: 班級
---

![@serverSerrverlesskiy](/img/javascript/headers/23.jpg)

JavaScript 使用原型繼承模型：每個對像都繼承原型對象的字段（屬性）和方法。

## 班級

關鍵字 `class` 用於定義一個類：

```jsx
class MyClass {
  // class methods
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}
```

此語法稱為類聲明。

![Class](https://media.giphy.com/media/cYaBD8kxE4PZudHBRA/giphy.gif)

:::note 類中的方法不是逗號分隔的
類語法與對象文字不同。 類內不需要逗號。

:::

該類可能沒有名稱。 類表達式可用於將類分配給變量 🔔:

```jsx
const UserClass = class {
  // class body
}
```

可以將類導出為模塊。 這是默認導出的示例：

```jsx
export default class User {
  // class body
}
```

這是一個命名導出的示例：

```jsx
export class User {
  // class body
}
```

當您實例化該類時，該類將變得有用。 實例是一個對象，其中包含 🖊️ 類描述的數據和行為。

`new` 運算符在 JavaScript 中創建一個類的實例，如下所示： `instance = new Class()`.

例如，您可以使用以下命令創建 User 類的實例 `new` 操作員：

```jsx
const myUser = new User()
```

`new User()` 創建一個實例 `User` 班級 👤.

## 初始化：構造函數()

![spangeBob](https://media.giphy.com/media/3oriNZoNvn73MZaFYk/giphy.gif)

`constructor (...)` 是類主體中用於初始化實例的特殊方法。 在這裡您可以設置字段的初始值或對對象進行任何調整。

在下面的示例中，構造函數設置了 `name` 場地：

```jsx
class User {
  constructor(name) {
    this.name = name
  }
}
```

`constructor` 的 `User` 類採用一個參數, `name`, 用於設置初始值 `this.name` 場地。

在構造函數中，值 `this` 等於新創建的實例。

用於實例化類的參數成為構造函數的參數 👇:

```jsx live
function learnJavaScript() {
  class User {
    constructor(name) {
      name // => 'Jon Snow'
      this.name = name
    }
  }

  const user = new User('Jon Snow') // Here you can change the value
  return user.name
}
```

`name` 構造函數中的參數是 `Jon Snow`.

如果未為類定義構造函數，則會創建一個默認構造函數。 默認構造函數是一個空函數 ⚙️，它不會修改實例。

只能有一種名為 `constructor` 在課堂上。

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
