---
id: javascript12
title: ブロックスコープ
sidebar_label: ブロックスコープ
---

![@serverSerrverlesskiy](/img/javascript/headers/12.jpg)

可視領域 (англ. Scope) - 変数を使用できるプログラムの部分. 🏗️`.js`ファイルを作成するときは、ファイル全体のスコープを作成します🏗️内部スコープを作成するには、中括弧で宣言する必要があります `{ ... }`.

![file](https://media.giphy.com/media/3o6Ztk7NosfLVRqcpy/giphy.gif)

```jsx
// 最初のスコープ
let fruit = 'Banana'
{
  // 2番目のスコープ
  let fruit = 'Apple'
  {
    // 3番目のスコープ
    let fruit = 'Lime'
  }
}
```

この例では、異なるスコープで3つの変数を作成しました。これらの変数には、独自のバージョンの変数が含まれています。 `fruit`, したがって、エラーは発生しません🙅‍♂️が、同じスコープで同じ名前の2つの変数を作成しようとすると、エラー🙅‍♂️が発生します。

```jsx
// 最初のスコープ
let fruit = 'Banana'
{
  // 2番目のスコープ
  let fruit = 'Apple'
  let fruit = 'Lime' // ここでエラーが発生します
}
```

中括弧のブロックを使用するため、🏗️さまざまな構成を作成するときは、この構成のスコープも作成します🏗️ `{ ... }`.

```jsx
if (true) {
  // 条件文の範囲
}

for (let i = 0; i > 5; i++) {
  // ループスコープ
}

function test() {
  // 関数スコープ
}
```

これらの例では、各構成に独自のスコープがあります。

## グローバルスコープ

![Global](https://media.giphy.com/media/l0MYPsBLOYyFqSDte/giphy.gif)

グローバルスコープとは、他のすべてのスコープがこのスコープの子であることを意味します。グローバルスコープには、すべての関数とブロックの外部で宣言された変数が含まれています。

```jsx
// グローバルスコープ
let fruit = 'Banana'
```

グローバルスコープで作成された変数🔔は呼び出されます `グローバル変数` 🔔 . グローバル変数🔔は、すべての子スコープで使用できます。

```jsx live
function learnFavaScript() {
  // 変数 fruit グローバルです
  let fruit = 'Banana'
  function showFruit() {
    // したがって、関数内で使用できます
    return fruit
  }
  return showFruit()
}
```

## ローカルスコープ

![Local](https://media.giphy.com/media/VFwRCi6WKBUk08fliV/giphy.gif)

ローカルスコープには、コードの特定の部分で宣言されている変数が含まれています🗣️📟。たとえば、ループ内で作成された変数はローカルになります。

```jsx
for (let i = 0; i > 5; i++) {
  // 変数 i ローカルです
}
```

ローカル変数🔔は、それらが宣言されたブロック内でのみ使用できます。

```jsx
function learnFavaScript() {
  function showFruit() {
    // 変数 fruit ローカルです
    let fruit = 'Banana'
  }
  // したがって、関数外では使用できません。
  return fruit
}

// ReferenceError: fruit is not defined
```

## の例

![Math](https://media.giphy.com/media/xT1Ra5h24Eliux3UVq/giphy.gif)

異なるスコープで同じ名前の2つの変数🔔を使用します。関数 `otherFruit()` 変数を返します 🔔 `fruit` それが初期化されるスコープから `Lime`

```jsx live
function learnJavaScript() {
  let fruit = 'Banana'
  function otherFruit() {
    let fruit = 'Lime'
    return fruit
  }
  return otherFruit() + ' and ' + fruit
}
```

持ち去ったら `let` 関数から `otherFruit()`, 次に、変数を作成する代わりに 🔔 書き直します 🖊️.

```jsx live
function learnJavaScript() {
  let fruit = 'Banana'
  function otherFruit() {
    fruit = 'Lime'
    return fruit
  }
  return otherFruit() + ' and ' + fruit
}
```

ローカル変数を呼び出そうとするとどうなりますか 🔔 親スコープで？グローバルスコープで変数を呼び出そうとしているため、エラーが発生します 🔔 , 作成しませんでした。

```javascript
function learnJavaScript() {
  let num
  for (let i = 0; i != 5; i++) {
    num += i
  }
  return i
}

//ReferenceError: i is not defined
```

![Primer](https://media.giphy.com/media/M33UV4NDvkTHa/giphy.gif)

## 禁止 var

![eye](https://media.giphy.com/media/PKl9JTqnoiKtO/giphy.gif)

記事 [変化する](https://react-native-village.github.io/docs/javascript03) 使用するように言いました `var` 私たちはしません、それはスコープとだけ接続されています。

1. 同じスコープ内で、キーワードを使用して同じ名前の2つの変数を作成する場合🔔 `let` または `const`, 次に、インタープリターはエラーを表示してこれについて警告します。

```jsx
function learnJavaScript() {
  let fruit = 'Banana'
  let fruit = 'Lime'
  return fruit
  // SyntaxError: Identifier 'fruit' has already been declared
}
```

しかし、使用する場合 `var` 同じ名前の変数🔔を作成すると、再割り当てされます.

```jsx live
function learnJavaScript() {
  var fruit = 'Banana'
  var fruit = 'Lime'
  return fruit
}
```

エラー🙅‍♂️は発生しません。`var` 変数を上書きしました `fruit`

2. グローバル変数を作成することによって🔔 `var` を使用して同じ名前で別の変数を作成することにより、ローカルスコープから変更できます🔔 `var`. 範囲 `var` 関数またはスクリプトのいずれかに限定.

```jsx live
function learnJavaScript() {
  var fruit = 'Lime'
  {
    var fruit = 'Banana'
  }
  return fruit
}
```

3. で作成された変数🔔 `var` 宣言がどこにあるかに関係なく、スクリプトの起動の最初から宣言されていると見なされます。

```jsx live
function learnJavaScript() {
  fruit = 'Banana'
  var fruit
  return fruit
}
```

4. に JavaScript 前 ES6 ブロックスコープはありませんでした。それら。キーワードを使用して作成された変数 `var` ブロックの内側と外側が表示されます。

```javascript
if (true) {
  var fruit = 'Apple' // 変数はこのブロックの外側に表示されます
}
console.log(fruit) // "Apple"
```

![javascript](/img/javascript/28.jpg)

```javascript
if (true) {
  let fruit = 'Apple' // 変数はこのブロックの外側には表示されません
}
console.log(fruit) // "Apple"
```

![javascript](/img/javascript/29.jpg)

記載されている理由により、開発者は使用を拒否しました `var`

## 問題?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

に書く [Discord](https://discord.gg/6GDAfXn) または電報 [チャット](https://t.me/jscampapp), また、私たちの購読 [ニュース](https://t.me/javascriptapp)

## 質問と回答

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

最初のスコープはいつ作成しますか？

1. サイクルを作成するとき
2. ファイルを作成するとき
3. ブロックを作成するとき

条件文を作成するとき、新しいスコープが作成されますか？

1. はい
2. いいえ

ローカル変数はどこで作成されますか？

1. コードの特定の部分
2. すべてのブロックの外側

このレッスンをどれだけ学んだかを理解するために、 [モバイルアプリ](http://onelink.to/njhc95) このトピックについて私たちの学校で.

![Sumerian school](/img/app.jpg)

## リンク

1. [JavaScript Scope](https://css-tricks.com/javascript-scope-closures/)
2. [Learn JavaScript](https://learn.javascript.ru/closure)
3. [MDN Web Docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr> 
    <td align="center"><a href="https://github.com/IIo3iTiv"><img src="https://avatars1.githubusercontent.com/u/72025062?v=4?s=200" width="200px;" alt=""/><br /><sub><b>IIo3iTiv</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=IIo3iTiv" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
