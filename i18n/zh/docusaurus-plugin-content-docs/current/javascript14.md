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

## 錨點

![anchor](https://media.giphy.com/media/3ohze1LSWrEGCML02Y/giphy.gif)

錨將模式綁定到行的開頭或結尾。 要綁定到行首，請使用 `^`, 最後，使用 `$`.

```jsx live
function learnJavaScript() {
  let regExp = /^banana/,
    str = 'lime banana orange'
  return regExp.test(str) ? 'Yes' : 'No'
}
```

使用這種模式 `/ banana /` 您將搜索 `banana` 在整個生產線上。 如果您需要檢查字符串是否與模板完全匹配，則需要使用錨點 `/ ^ banana $ /`. `.test ()`方法將返回 `true` ✅ 僅當整行是 `banana`.

## 標誌

![Flag](https://media.giphy.com/media/ihRmRCxJuIi3pCORTL/giphy.gif)

標誌用於增強正則表達式搜索。

- `g` - 搜索時，搜索所有匹配項;
- `i` - 搜索不取決於大小寫`[Z-z]`;
- `m` - 多線模式;
- `s` - 開啟 **dotall** 模式，其中點 `.` 可以匹配換行符;
- `y` - 最后索引 **lastindex** p當前正則表達式的屬性;
- `u` - 啟用 **Unicode** 支持.

以不同方式使用標誌來創建正則表達式模式

<Tabs
defaultValue="literal"
values={[
{label: 'Literal', value: 'literal'},
{label: 'Construction', value: 'construction'},
]
}>
<TabItem value="literal">

```jsx
let regExp = /pattern/anchor // prettier-ignore
```

請注意，這些標誌是 **integral part** 正則表達式 以後不能添加或刪除標誌。 也可以組合標誌。

```jsx live
function learnJavaScript() {
  let regExp = /banana/i,
    str = 'faNana RanaNA BaNanA'
  return regExp.test(str) ? 'Yes' : 'No'
}
```

嘗試刪除 `i` 該示例中的標誌。
</TabItem>
<TabItem value="construction">

```jsx
let regExp = new RegExp('pattern', 'anchor')
```

請注意，這些標誌是 **integral part** 正則表達式 以後不能添加或刪除標誌。 也可以組合標誌。

```jsx live
function learnJavaScript() {
  let regExp = new RegExp('banana', 'i'),
    str = 'faNana RanaNA BaNanA'
  return regExp.test(str) ? 'Yes' : 'No'
}
```

嘗試刪除 `i` 該示例中的標誌。 搜索現在區分大小寫。
</TabItem>
</Tabs>

## Total

該主題非常廣泛，在開發中很少被我們使用，因此，如果您有興趣，可以更詳細地了解它。 [here,](https://learn.javascript.ru/regular-expressions) [here](https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions)[and here.](https://tuhub.ru/frontend/js-regexp)

## 問題？

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

頻道輸入 [Discord](https://discord.gg/6GDAfXn) 付款後 [Patreon](https://www.patreon.com/javascriptcamp).

## 問題:

![問題](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

正則表達式有什麼用？

1.創建模板
2.字符串操作
3.編輯字符串

什麼字符用於字面上創建正則表達式？

1. Slash `/`
2. Backslash `\`
3. Square brackets `[]`

如何創建不允許對給定值進行進一步動態更改的正則表達式？

1.從字面上看
2.在構造函數中
3.採用任何方法，都可以進行動態更改

為了了解您學到了多少本課程，請對[mobile application](http://onelink.to/njhc95) 我們學校就這個話題。

![Sumerian school](/img/app.png)

## 鏈接

1. [Learn JavaScript](https://learn.javascript.ru/regular-expressions)
2. [MDN Web Docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular_Expressions)
3. [JS RegExp](https://tuhub.ru/frontend/js-regexp)

## 貢獻者✨

感謝這些好人([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr> 
    <td align="center"><a href="https://github.com/IIo3iTiv"><img src="https://avatars1.githubusercontent.com/u/72025062?v=4?s=200" width="200px;" alt=""/><br /><sub><b>IIo3iTiv</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=IIo3iTiv" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
