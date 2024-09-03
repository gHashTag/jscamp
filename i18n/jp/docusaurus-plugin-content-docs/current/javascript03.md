---
id: javascript03
title: 変化する
sidebar_label: 変化する
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/03.jpg)

## 変数

変数  (Variables, 省略形 `var`) — これはコンテナです  加えて使用される数値などの値の場合 ➕ , または、文の一部として使用できる文字列。

![Container](https://media.giphy.com/media/0T0FUiZl51VPCLsqLR/giphy.gif)

## ビデオ

<YouTube videoId="gCqxA_JOtmw" />

## 変数宣言

![Announcement](https://media.giphy.com/media/cYaBD8kxE4PZudHBRA/giphy.gif)

変数を使用するには、最初に変数を作成する必要があります、より正確には、宣言します  変数。これを行うには、キーワードを入力します `var`, 変数に付ける名前が続きます。以下の手順で作成します (言い換えれば：宣言 または定義) 名前付き変数 «message»:

```jsx live
function learnJavaScript() {
  var message = ''

  return message
}
```

ここで変数を作成します  `message`. 現在⏱️値は含まれていません。より正確には、変数には空の文字列が含まれています。

## 変数への値の割り当て

![Memory](https://media.giphy.com/media/3o6ZtafpgSpvIaKhMI/giphy.gif)

一度変数  宣言すると、値を割り当てることができます。このために書かれています 変数名  , 等号が続く `=`, 割り当てたい値が続きます。例えば  :

```jsx live
function learnJavaScript() {
  var message
  message = 'My name is ...'
  //変数名を使用してアクセスできます
  return message
}
```

に `RESULT` 変数に割り当てた値  , コンソールに戻りました。遊んで 🎮 変数値付き  , たとえば、自分の名前で式を完成させます。

たとえば、自分の名前で式をできます。  と録音  一行で  :

```jsx live
function learnJavaScript() {
  var message = 'Hello!' // 変数を定義し、それに値を割り当てます
  return message
}
```

## 変数の更新

![Update](https://media.giphy.com/media/FP47IFqWyXfdKYU6VG/giphy.gif)

変数の更新  — それらの意味は異なる場合があります。
変数の場合  値が割り当てられている場合は、別の値を指定するだけでその値を変更（更新）できます。簡単な例を見てみましょう  :

```jsx live
function learnJavaScript() {
  var message = 'Bob' // 今 message Bob
  message = true // そして今メッセージ true
  message = 35 // そして最後に message 35

  return message
}
```

変数のもう1つの機能  文字列や数字だけでなく、ほとんど何でも含めることができるということです。変数  複雑なデータや関数全体を含めることもできます。コースをさらに勉強するにつれて、これについてさらに学ぶことができます。.

:::tip メモについて!
変数には値が含まれていると言います。これは重要な違いです。変数はそれ自体が値ではありません！それらは値のコンテナです。それらが物を保管できる小さな段ボール箱のようなものだと想像してみてください。
:::

![Variables](https://mdn.mozillademos.org/files/13506/boxes.png)

![Hello World](https://media.giphy.com/media/26his8ERHOSxKuWw8/giphy.gif)

## 可変命名規則

![Rules](https://media.giphy.com/media/XK8I8Am1gSe17MiJ2m/giphy.gif)

変数には好きな名前を付けることができますが、制限があります。一般的に、ラテン文字のみに固執する必要があります (0-9, a-z, A-Z) とアンダースコア.

- 他の記号の使用は、エラーを引き起こしたり、国際的な聴衆に理解できない可能性があるため、お勧めできません。
- 変数名の先頭にアンダースコアを使用しないでください-これは一部の構成で使用されます JavaScript 特定のものを参照します。
- 変数の先頭に数字を使用しないでください。これは無効であり、エラーが発生します。
- いわゆるいわゆる遵守することは一般的に受け入れられています "lower camel case"(キャメルケース-単語の最初の文字を形成する「こぶ」のために呼ばれます）、最初の単語全体に小文字を使用し、後続の単語を大文字にして、いくつかの単語を接着します。この記事では、変数名にこれを使用しました。
- 変数名を作成して、変数に含まれるデータが直感的に明確になるようにします。単一の文字/数字または大きな長いフレーズのみを使用しないでください。
- 変数では大文字と小文字が区別されるため、 `myage` и `myAge` - さまざまな変数  .
- 最後にもう1つ、予約語の使用は避ける必要があります。 JavaScript 変数名として-つまり、実際の構文を構成する単語を意味します JavaScript! したがって、次のような単語を使用することはできません var, function, let, そして for 変数名の場合。ブラウザはそれらを異なるコードとして認識するため、エラーが発生します。

## 予約語のリスト

![Reserved](https://media.giphy.com/media/3o6Mb3eci7bVDKBR2o/giphy.gif)

これらの単語は言語で予約されているため、変数を呼び出すことはできません Java Script.
`break`, `case`, `catch`, `class`, `const`, `continue`, `debugger`, `default`, `delete`, `do`, `else`, `export`, `extends`, `finally`, `for`, `function`, `if`, `import`, `in`, `instanceof`, `new`, `return`, `super`, `switch`, `this`, `throw`, `try`, `typeof`, `var`, `void`, `while`, `with`, `yield`

## ゆるいタイピング

![Freedom](https://media.giphy.com/media/6901DbEbbm4o0/giphy.gif)

JavaScript - これは「自由に型付けされた言語 」です。つまり、他のいくつかの言語 とは異なり、変数に含まれるデータの種類（数値、文字列、配列など）を指定する必要はありません。

たとえば、変数を宣言して引用符で囲まれた値を割り当てると、ブラウザは変数を文字列として扱います。
```jsx live
function learnJavaScript() {
  var myString = 'Hello'
  // 数字が含まれていても文字列のままですのでご注意ください:
  var myNumber = '500' // おっと、それはまだ文字列です (string)

  myNumber = 500 // それは良いです、今この数 (number). この行を削除して、データ型を確認してください。
  return typeof myNumber
}
```

## 非推奨のキーワード "var"

![Old](https://media.giphy.com/media/3orieJI3IdkKWIsAGA/giphy.gif)

通常 `var` 最新のスクリプトでは使用されていませんが、古いスクリプトでは隠れている可能性があります。これは、彼が明確に行動しないという事実によるものです。 `var` 我々は使用するだろう `let` 変数の場合  , だが `const` 定数の場合-定数.

 休憩は終わりました。次のレッスンに進みましょう！

## 問題?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

に書く [Discord](https://discord.gg/6GDAfXn) または電報 [チャット](https://t.me/neuro_coder_group), また、私たちの購読 [ニュース](https://t.me/javascriptapp)

## 質問と回答:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

コマンドに情報が含まれているユーザー `console.log`?

1. .。ユーザー
2. 開発者
3. 通訳 JavaScript

変数とは何ですか？

1. 値のコンテナ
2. 変数値
3. ラテン文字

変数には何を含めることができますか？

1. 文字列と数字のみ
2. 数値、文字列、複雑なデータ、関数
3. 複雑なデータと機能のみ

変数代入コマンドの書き方?

1. `var`
2. `var` [変数名] =
3. `var` [変数名]

変数を更新するにはどうすればよいですか？

1. 変数を更新できません
2. 変数に別の値を指定します
3. カスタムコマンドを設定します

変数の命名規則には何が欠けていますか？

1. 変数の先頭に数字を使用しないでください
2. 変数の先頭にアンダースコアを使用します
3. ラテン文字に固執する

ブラウザが変数を文字列として扱うように、変数の値を書き込むにはどうすればよいですか？

1. 引用符なし
2. 引用符で
3. 括弧内

変数の定義に使用しないキーワードはどれですか？
1. `let`
2. `const`
3. `var`

このレッスンをどれだけ学んだかを理解するために、 [モバイルアプリ](http://onelink.to/njhc95) このトピックに関する私たちの学校。
![Sumerian school](/img/app.jpg)

## リンク:

1. [MDN web docs](https://developer.mozilla.org/ru/docs/Learn/JavaScript/Первые_шаги/Variables)
2. [十代の若者たちのためのコード：プログラミングの完璧な初心者向けガイド、ボリューム 1: Javascript - Jeremy Moritz ](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)
3. [JavaScript.ru](https://learn.javascript.ru/types)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">  </a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>
  
</table>

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)
