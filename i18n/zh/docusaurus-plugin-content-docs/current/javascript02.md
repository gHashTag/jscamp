---
id: javascript02
title: 評論
sidebar_label: 評論
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/02.jpg)

## 有什麼評論？

JavaScript 有幾種方法可以在代碼中指定註釋 📟

有時，在編寫代碼時，您將需要提供僅適用於人類的解釋，而不適用於計算機。 也許這將是過去（給我未來）給自己的某種信息，關於程序代碼中的這一點或那件事。 也許這只是表明您只需要運行代碼的這一部分，其餘部分應省略。 簡而言之，在任何情況下，您都需要藉助註釋的幫助。
註釋 🗣️ 用於添加➕提示，註釋 🔖 建議或警告。 它們可以使代碼更易於閱讀和理解。 它們還可以用於阻止執行代碼（這是調試代碼時的常見做法）。

JavaScript有幾種方法可以在代碼中指定註釋 🗣️

<!-- ## Video

<YouTube videoId="zCvKMw5QHRw" /> -->

## 單行註釋

![Slash](https://media.giphy.com/media/bKXMS0NjXoyaY/giphy.gif)

第一種 1️⃣ 方式是`// comment`🗣️，在這種情況下，雙斜杠之後的所有文本will都是註釋comment️。 當解釋器看到連續兩個斜杠“ //”時，它立即知道可以安全地忽略行尾的所有內容。 現在，忽略代碼的語法，稍後我們將詳細了解它 📖  📜

```jsx live
function learnJavaScript() {
  // This is a comment on the line
  var hello = 'Hello world!!!'

  return hello
}
```

## 多行評論

![Coments](https://media.giphy.com/media/UevalSWg5twQeqpc8Q/giphy.gif)

第二種 2️⃣ 方法是`/ * * /`，它比第一種 1️⃣ 方法更靈活。 解釋器一看到`/ *`，就會想：“是的，所以直到我看到`* /`，我什麼都不能注意！”
例如，您可以在一條 1️⃣ 行中使用它 👇:

```jsx live
function learnJavaScript() {
  /* This is a one-line comment */
  var hello = 'Hello world!!!'

  return hello
}
```

或者，您可以進行多行評論 🗣️，如下所示 👇:

```jsx live
function learnJavaScript() {
  /* This comment spans multiple lines.
      Please note that you do not need to terminate the comment until you have finished */
  var hello = 'Hello world!!!'
  /* Write your comment here */
  return hello
}
```

## 在代碼中間加註釋

![Among](https://media.giphy.com/media/fnjIiBNo38IHS/giphy.gif)

另外，如果您願意，可以在一行代碼的中間使用此註釋 🗣️。 儘管這可能會損害代碼的可讀性👇:

```jsx live
function learnJavaScript() {
  var x = ''
  var hello = 'Hello ' + x /* insert the value x */ + '!'

  return hello
}
```

加上對代碼的註釋，僅此而已，發出了休息的呼籲。

![評論](https://media.giphy.com/media/SvuRLwWT0EoeErwPvB/giphy.gif)

## 問題？

![問題](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

頻道輸入 [Discord](https://discord.gg/6GDAfXn) after paying on [Patreon](https://www.patreon.com/javascriptcamp).

## 問題：

![題](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

對誰發表評論？

1人
2.控制台
3. JavaScript解釋器

註釋不用於什麼？

1.添加提示，筆記，建議
2.作為程序代碼的一部分
3.防止代碼執行

不存在哪種在JavaScript代碼中指定註釋的方式？

1. `('')`
2. `//`
3. `/ * * /`

如何禁用任意數量的代碼行？

1.在代碼中間寫一個註釋
2.將代碼包裝在註釋中
3.使用命令“ console.log”

為了了解您學到了多少，請在我們學校參加考試 [移動應用](http://onelink.to/njhc95) 關於這個話題。

![Sumerian school](/img/app.png)

## 鏈接

1. [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Lexical_grammar)
2. [青少年代碼：完美的初學者編程指南，第1卷 Javascript - Jeremy Moritz ](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)
3. [JavaScript.ru](https://learn.javascript.ru/types)

## 貢獻者 ✨

感謝這些好人 ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>
  
</table>

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
