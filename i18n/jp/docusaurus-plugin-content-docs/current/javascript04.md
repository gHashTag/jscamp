---
id: javascript04
title: データ型
sidebar_label: データ型
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/04.jpg)

## 動的型付け

JavaScript 弱い型の言語または動的言語です。これは、変数のタイプを事前に定義する必要がないことを意味します🔔
.

![Dinamics](https://media.giphy.com/media/26uf759LlDftqZNVm/giphy.gif)

タイプは、プログラムの実行中に自動的に決定されます。また、1つの変数🔔を使用して📦さまざまなタイプのデータを格納できることも意味します。 👇 :

```jsx live
function learnJavaScript() {
  let foo = 42 // 今 foo タイプ number
  foo = 'bar' // そして今 foo タイプ string
  return typeof foo
}
```

## ビデオ

<YouTube videoId="1zXZCVbNbkQ" />

## typeof

変数に含まれるデータ型を理解するために、演算子が使用されます
 `typeof`. オペレーター `typeof` 引数の型を返します。
括弧付きと括弧なしの2つの構文があります。

- 演算子の構文: `typeof x`

- 関数構文: `typeof(x)`

それらは同じように機能しますが、最初の構文は短くなります。
結果 `typeof` タイプを含む文字列です.

```jsx live
function learnJavaScript() {
  let num = 9
  return typeof num
}
```

## データ型

![Data types](https://media.giphy.com/media/NPXkCN2FutVO1Nt4P9/giphy.gif)

標準 JavaScript 定義する 9 データ型。コンソールに出力してそれぞれを理解してから、それぞれについて詳しく説明します。

```javascript
let one = { firstName: 'John', lastName: 'Smith' } // object

let two = () => {} // function

let three 'bar' // string

let four = 42 // number

let five = 19241924124n // bigint

let six = true // boolean

let seven = null // null

let eight // undefined

let nine = Symbol() // symbol
```

## オブジェクト

![cupboard](https://media.giphy.com/media/l2Sq0NFJlJC5Dqb7y/giphy.gif)

コンピュータ用語では、オブジェクトタイプ `object` — これは、識別子で参照できるメモリ内の値です。に
 JavaScript オブジェクトは、プロパティのセットと見なすことができます。クローゼットみたい
 🗄️ 保管用 📦 他のデータ型.

## 関数

![Function](https://media.giphy.com/media/FuSJ5C7SSHlZCxjC6q/giphy.gif)

関数⚙️ `function` — これらは、実行のために呼び出される追加の機能を持つ通常のオブジェクトです。


## プリミティブ値

![Primitive](https://media.giphy.com/media/rBdWc61BPFVYc/giphy.gif)

のすべてのデータ型 JavaScript, オブジェクトを除いて、不変です（値は変更できませんが、新しい完全な値で上書きされるだけです）。たとえば、文字列を文字ごとに修正できるC言語とは対照的に、
 JavaScript 線が再作成されます🏗️ 完全にのみ。これらのタイプの値は「プリミティブ値」と呼ばれます.

## テキスト文字列

![text](https://media.giphy.com/media/26n6AaCcCajAyZx04/giphy.gif)

に JavaScript テキストの提示のため 📜 テキストの提示のため `string`.

## 数字

![Numbers](https://media.giphy.com/media/xT5LMMneIRG1UJquOI/giphy.gif)

数値データ型 `number` 整数値と浮動小数点値の両方を表します。

## BigInt

![giant](https://media.giphy.com/media/LZGipmRpX6uwE/giphy.gif)

に JavaScript タイプ `number` より大きい数を含めることはできません (253-1) ( 9007199254740991), 以下 -(253-1) 負の数の場合。この技術的な制限は、内部表現によるものです。

ほとんどの場合、これで十分です。ただし、暗号化やタイムスタンプを使用する場合など、非常に大きな数値が必要になる場合があります。 ("timestamp") マイクロ秒で。

タイプ `bigInt` に追加されました JavaScript, 任意の長さの整数を処理できるようにします。

## ブールデータ型

ブール値 `boolean` 論理エンティティを表し、2つあります 2️⃣ 意味: `true` ✅ 

![true](https://media.giphy.com/media/ap6wcjRyi8HoA/giphy.gif)

そして `false` ❎ .

![False](https://media.giphy.com/media/HNOVuT5AvCK1fgvp1m/giphy.gif)

このタイプは通常、保管に使用されます 📦 値はい/いいえ： true ✅ 「はい、そうです」を意味し、 false ❎ 「いいえ、正しくありません」という意味です。

## Null

![Null](https://media.giphy.com/media/26hkhPJ5hmdD87HYA/giphy.gif)

このデータ型の値は1つだけです: `null`. この値は、実際には動作において目に見えるプリミティブであるため、プリミティブとして特別に指定されています。しかし同時にから `null` したがって、他のすべてのオブジェクトは継承されます。 `null` 戻り値🔄 пプリミティブ値であり、その型はオブジェクトです。
たとえば、デフォルト値に割り当てることができます。

## Undefined

![Unndefined](https://media.giphy.com/media/PkKzNQjwPy7GvxZbfe/giphy.gif)

変数 🔔 , 値が割り当てられていないものが重要になります `undefined`.

### 間の違い null そして undefined

![Spiderman](https://media.giphy.com/media/l36kU80xPf0ojG0Erg/giphy.gif)

`null` はオブジェクトが存在しないことの明確な値ですが、 `undefined` 不確実性を表します。たとえば、ブラウザコンソールでこれを確認できます。

```javascript
let TestVar
console.log(TestVar) // undefined
console.log(typeof TestVar) // undefined
```

`null` - 不確実性を表します。たとえば、ブラウザコンソールでこれを確認できます。 値のない表現：
```javascript
let TestVar = null
console.log(TestVar) // null
console.log(typeof TestVar) // object
```

前の例から明らかです `undefined` そして `null` - それは2つです 2️⃣ 他の種類： `undefined` - それはタイプ自体（未定義）であり、`null` - オブジェクト.

```javascript
null === undefined // false
null == undefined // true
null === null // true
```

## データ型記号 (Symbol)

![Symbol](https://media.giphy.com/media/QvSGhHq8CrVzq/giphy.gif)

シンボルタイプ `Symbol` — これは、オブジェクトのプロパティのキーとして使用できる、一意で不変のプリミティブ値です。このタイプは実際の作業ではめったに使用されないため、このコースでは考慮しません。


## 問題?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

に書く [Discord](https://discord.gg/6GDAfXn) または電報 [チャット](https://t.me/jscampapp), また、私たちの購読 [ニュース](https://t.me/javascriptapp)

## 質問と回答:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

に使用される演算子は何ですか `typeof`?

1. データ型を判別するには
2. データ型をコンソールに出力するには
3. 新しい変数を入力するには

標準では何種類のデータが定義されていますか？ JavaScript?

1. 7
2. 9
3. 5

どのデータ型に一連のプロパティが含まれていますか？

1. `function`
2. `string`
3. `object`

どのデータ型に一連のプロパティが含まれていますか？ JavaScript к文字列を文字ごとに修正しますか？

1. はい
2. おそらく特別な場合
3. いいえ、線は完全に再作成されるだけです

任意の長さの整数を処理できるようにするデータ型は何ですか？

1. `number`
2. `string`
3. `bigint`

どの値にブール型がないか `boolean`?

1. `false`
2. `null`
3. `true`

オブジェクトのプロパティのキーとして使用できる値を持つデータ型はどれですか？

1. `undefined`
2. `symbol`
3. `null`

このレッスンをどれだけ学んだかを理解するために、でテストを受けてください [モバイルアプリ](http://onelink.to/njhc95) このトピックに関する私たちの学校。

![Sumerian school](/img/app.jpg)

## リンク:

1. [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Data_structures)
2. [十代の若者たちのためのコード：プログラミングの完璧な初心者向けガイド、ボリューム 1: Javascript - Jeremy Moritz ](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)
3. [JavaScript.ru](https://learn.javascript.ru/types)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>
  
</table>

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)
