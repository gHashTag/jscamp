---
id: javascript24
title: 禁止“此”
sidebar_label: Ban on "this"
---

![@serverSerrverlesskiy](/img/javascript/headers/24.jpg)

卸下 `this` JavaScript中的關鍵字可以使語言更好！

這是因為 `this` 取決於函數的調用方式，而不是定義位置。 因此，JavaScript `this` 是造成語言混亂пут的根源。

使用此選項可確保函數在調用它的上下文中對確切的對象起作用。
通過 `this` 方法，您不僅可以引用對象的任何屬性，還可以在某個地方傳遞對整個對象本身的引用（降低應用程序的安全性）。

的價值 `this` 稱為調用上下文，將在調用函數時確定。 例如，沒有對象聲明的類似這樣的函數是完全有效的：

```javascript
functionsay Hi() {
  console.log(this.firstName)
}
```

此功能尚不知道會是什麼。 程序執行時將顯示出來。

如果在不同對象的上下文中運行相同的函數，它將收到不同的結果 `this`:

```javascript
var user = { firstName: 'John' }
var admin = { firstName: 'Admin' }

function funcName() {
  console.log(this.firstName)
}
user.f = funcName
admin.g = funcName

// this is equal to the object before point:
user.f() // Joni
admin.g() // Admin
admin['g']() // Admin (access to the object is implemented through square brackets)
```

因此， `this` 不依賴於函數的創建方式，它是在調用時唯一確定的。

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
