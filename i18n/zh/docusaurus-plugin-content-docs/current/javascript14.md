---
id: javascript14
title: 常用表達
sidebar_label: 常用表達
---

![@serverSerrverlesskiy](/img/javascript/headers/13.jpg)

正則表達式是一種形式語言，用於根據元字符的使用來搜索和處理文本中的字符串。

正則表達式使您可以：

-搜索字符串中的文本
-替換字符串中的子字符串
-從字符串中提取信息

![search](https://media.giphy.com/media/l46Cy1rHbQ92uuLXa/giphy.gif)

JavaScript與Perl一起是一種編程語言，正則表達式支持直接內置在該語言中。

## 使用困難

![the complexity of using](https://media.giphy.com/media/5XYsIwzY00ONq/giphy.gif)

正則表達式的缺點是它們通常看起來很奇怪甚至令人生畏。 對於更複雜的模板尤其如此。

```jsx
let regExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
```

## 定義正則表達式

![search](https://media.giphy.com/media/RMwYOO5e8pr1lhL8K7/giphy.gif)

正則表達式的定義是創建模板，並根據模板進行字符串處理。 在JavaScript中，正則表達式是可以用兩種方式定義的對象。

從導入標籤 '@theme/Tabs';
從中導入TabItem '@theme/TabItem';

<Tabs
defaultValue="literal"
values={[
{label: 'Literal', value: 'literal'},
{label: 'Construction', value: 'construction'},
]
}>
<TabItem value="literal">

使用文字定義正則表達式。 對於正則表達式，斜杠 `/ ... /` 是文字，它們與括號的作用相同 `` ... '' 創建字符串時。

```jsx
let regExp = /pattern/
```

如果決定使用文字創建正則表達式，則應牢記這種創建方法 _不允許動態更改_ 在指定的值。 這是由於正則表達式文字導致 _預編譯_ 腳本解析時。

  </TabItem>
  
  <TabItem value="construction">

使用構造函數定義正則表達式。

```jsx
let regExp = new RegExp('pattern')
```

使用構造函數創建的🏗️正則表達式的編譯發生在腳本執行時。 如果從動態生成的字符串中創建正則表達式，則值得使用這種創建方式。

  </TabItem>
</Tabs>

## Using

![pressing the button](https://media.giphy.com/media/12hhLP67q6PqCs/giphy.gif)

讓我們通過一個示例來看一下正則表達式的用法：

```jsx
let regExp = /banana/
```

使用此代碼📟我們創建了🏗️一個簡單的正則表達式來搜索字符串 `banana`. 要測試正則表達式，可以使用 `.test(string)` 方法，該方法的結果是 `boolean` 價值。

```jsx live
function learnJavaScript() {
  let regExp = /banana/,
    str = 'fanana ranana banana'
  return regExp.test(str) ? 'Yes' : 'No'
}
```

在示例中，正則表達式查找子字符串 `banana` 在字符串中 `str`.

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
