---
id: javascript25
title: 異步事件循環
sidebar_label: 事件循環
---

![@serverSerrverlesskiy](/img/javascript/headers/26.jpg)

## 異步

在JavaScript中，異步是與加載網頁並行處理請求的主要工具。 現在無法想像Internet，在那裡對服務器的所有請求都將隨著頁面重新加載而發送。

來自服務器的任何數據都是異步請求的：發送了一個請求（XMLHttpRequest或XHR），並且代碼📟不等待其返回🔄而繼續執行。 服務器響應時，會向XHR對象發出通知，並運行在發送請求之前傳遞給它的回調函數。

如果您正確使用語言工具👅，則順序執行並在一個線程中進行的請求的執行不會以任何方式乾擾事件的接收和對事件的反應-一個人可以輕鬆地使用界面， 沒有註意到滯後，崩潰和凍結。

## 事件循環

![Queue](https://media.giphy.com/media/5YuhLwDgrgtRVwI7OY/giphy.gif)

JavaScript `Event loop` 是一個異步呼叫管理器。

為了使這個棘手的過程順利進行，JavaScript實現了一種機制來控制代碼執行的順序。 由於它是單線程語言，因此有必要“楔入”當前的執行上下文。 這種機制稱為事件循環。

來自英語, `loop` 轉換為 “循環”，完美體現了含義：我們正在處理回送隊列。

`Event loop` 調節上下文的執行順序-堆棧。 它是在觸發事件或調用函數時生成的。 對事件的響應放置在執行隊列中 `event loop`, 每個循環依次執行進入其中的代碼 📟 在這種情況下，綁定到事件的函數在當前執行上下文之後被調用。

在 JavaScript 中，同步和異步執行隊列一直在運行。 同步 - `stack` - 形成隊列並轉發到異步 - `event loop` - 函數調用⚙️，它將在當前計劃的可執行上下文之後執行。

為了使數據保持一致狀態，必須完成每個功能。 這是由於JavaScript的單線程和其他一些功能，例如功能的閉包 "languages" 編程。 因此，一個線程被表示為執行上下文的隊列，其中通過事件循環傳遞的函數是 "wedged".

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
