---
id: javascript29
title: 進出口
sidebar_label: 進出口
---

![@serverSerrverlesskiy](/img/javascript/headers/31.jpg)

要使對象，函數，類或變量 to 對外界可用，只需將其導出，然後在需要時將其導入其他項目文件中。

## "Hello, World!" on Node.js

`Node.js®` JavaScript 建立在 [Chrome V8](https://v8.dev) 引擎。

讓我們開始吧 `Node.js` 只需在控制台中輸入 node 即可：

```javascript
$ node
>
```

如果沒有的話 [download](https://nodejs.org) 並將其安裝在您的計算機上。

現在讓我們嘗試打印一些內容：

```javascript
$ node
> console.log('hello from Node.js')
// After hitting Enter, you get this:
hello from Node.js
undefined
```

![Export](https://media.giphy.com/media/3ohzAiaRIBBrge2jQc/giphy.gif)

隨時嘗試 `Node.js` 使用此接口：如果將小段代碼直接放入文件中不切實際，通常在此處進行測試。

現在該創建我們的 Hello Node.js 應用程序了！

讓我們開始創建 `index.js` 文件。 使用下一條命令，我們創建文件夾 `myProject` 然後輸入

```bash
mkdir myProject && cd myProject
```

Now we create the `index.js` file itself

```bash
touch index.js
```

打開您的代碼編輯器或下載並安裝它。 我們推薦 [VS Code](https://code.visualstudio.com).

打開代碼編輯器，然後向其添加我們創建的項目的文件夾。

![new project](/img/javascript/18.jpg)

現在，通過單擊此圖標打開側面菜單。

![new prroject](/img/javascript/19.jpg)

將以下代碼複製到其中：

```javascript
// index.js
console.log('hello from Node.js')
```

要運行此文件，必須重新打開終端並導航到以下目錄： `index.js` 位於。

在 `VS Code` 單擊這些圖標即可完成此操作。

![new prroject](/img/javascript/20.jpg)

然後選擇標籤 `TERMINAL`

![new prroject](/img/javascript/21.jpg)

成功導航到所需位置後，請使用以下命令運行文件

```javascript
node index.js
```

您將看到此命令將產生與以前相同的輸出，將字符串直接打印到終端。

![new prroject](/img/javascript/22.jpg)

## 應用程序模塊化

![Export](https://media.giphy.com/media/3o7btSt2Et1GgIaDAY/source.gif)

現在是時候進入下一個階段了！ 為了便於閱讀和可維護性，讓我們將源代碼分成多個 JavaScript 文件來創建一些更複雜的東西。

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
