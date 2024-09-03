---
id: javascript05
title: エラー
sidebar_label: エラー
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/05.jpg)

私たちの他の人と同じように、あなたは間違いを犯します。 コードで. ソフトウェアエラー バグと呼ばれます。バグはエラーを意味します プログラムで💾 プログラムで エラーが原因で発生する, дプログラムの開発者がソースコードで省略している, そのデザインのいずれか.

![error](https://media.giphy.com/media/1VT3UNeWdijUSMpRL4/giphy.gif)

「とらえどころのない技術的エラー」の意味で» 「バグ」という言葉（eng. bug) コンピュータが登場するずっと前に使用されていた    ️ 電気機器および無線機器の問題に関する電信および電話会社の担当者。 1878年にトーマスエジソンは書いた：

> «これは私のすべての発明に当てはまりました。 1️⃣ 最初のステップは直感であり、それはフラッシュのようになり、次に問題が発生します-デバイスは動作を拒否します、そしてそれはバグが現れるときです-これらの小さな間違いや困難が呼ばれるように-そしてそれまでに数ヶ月の綿密な観察、研究、努力が必要ですそれは商業的な成功または失敗になります。」

デバッグは、エラーを見つけて修正するプロセスです。 スクリプト内。

[Wikipedia](https://ru.wikipedia.org/wiki/Программная_ошибка)

## ビデオ

<YouTube videoId="xJtVop2fAxg" />

## 最も一般的な間違い

![Teacher](https://media.giphy.com/media/27c3zdaY6eeIAwp7Qi/giphy.gif)

私はあなたがすでにあなたの最初の間違いに遭遇したことを望みます。 コードを書く過程で。なぜ希望するのですか？間違いだから - これらは私たちのコードで私たちが間違っていることを私たちに示す私たちの教師です とコンピューター    ️, т対面コードインタープリター, 私たちは単に理解することはできません。エラー コードを書くとき ほぼ毎日起こります。秘訣はメッセージを読めるようにすることです。 ほぼ毎日起こります。秘訣はメッセージを読めるようにすることです。, 機械があなたに与えるもの  , 書かれたコードの欠陥をすばやく見つけて修正する. 勉強すればするほど JavaScript, メッセージに感謝すればするほど 間違いについて - 彼らはしばしばあなたが間違った場所を非常に正確に示します。

最も一般的なタイプのエラーのカップル コードで:

## SyntaxError

![Error](https://media.giphy.com/media/TqiwHbFBaZ4ti/giphy.gif)

`Syntax Error` - 言語規則の違反 . たとえば、9とセミコロンを入力します`9 + ;`:

```jsx live
function learnJavaScript() {
  var error = 9

  return error
}
```

回答: `SyntaxError: Unexpected token ;`

構文エラー, 文章の本文に間違いがあることを意味します。言い換えれば、あなたが書いたものは言語の観点からは正しくありません  JavaScript. 通訳はあなたの文章を読むことができず、それをどうするかわかりません. `Unexpected token ;` 通訳者がまったく読むことを期待していなかったものを読んだことを意味します：私たちの場合、セミコロン `;`.

もう一度間違えましょう!
コンソールに5プラス3と最後に括弧を入力してみましょう `5+3)`.

```jsx live
function learnJavaScript() {
  var error = 5

  return error
}
```

閉じ括弧があります `)`, ただし、開き括弧はありません `(`! ただし、括弧は常にペアになります。閉じ括弧があることはできませんが、開き括弧はありません。その逆も同様です。

## ReferenceError

![Error](https://media.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif)

`ReferenceError` - 間違った名前！オブジェクト `ReferenceError` 存在しない変数にアクセスするときに発生するエラーを表します。たとえば、5プラス交互に入力します `5 + переменая`:

```jsx live
function learnJavaScript() {
  var error = 5

  return error
}
```

今、私たちは治療の誤りがあります `ReferenceError`.おそらくあなたはここで何が問題なのかすでに気づいていますか？エラーメッセージを注意深く読みましょう（結局のところ、それが発行されたものです！）。それは言う： `переменная  is not defined` — 変数が設定されていません。ここに問題があります。まず、次のように、何らかの方法で変数を宣言する必要があります。

```jsx live
function learnJavaScript() {
  var 変数 = 5
  var error = 5 + 変数
  return error
}
```

## TypeError

オブジェクト TypeError 値が予期されたタイプでない場合にスローされるエラーを表します。この方法を適用します `toUpperCase`, 後で詳しく知り、入力します undefined, ただし、このメソッドは文字列を大文字に変換するため、これは無効です。ブラウザコンソールでこのエラーを確認してください。 `LIVE EDITOR` 彼女は働かない.

```javascript
var foo = undefined
foo.toUpperCase()
```

![TypeError](/img/javascript/25.jpg)

## 助けて

また、間違いを犯す可能性もあるため、サイトでエラーや不正確な翻訳を見つけた場合は、サイトでエラーを修正するのに簡単に役立ちます。これを行うには、ボタンをクリックする必要があります `Edit this page` すべてのページの一番下に.

## 問題?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Пишите в [Discord](https://discord.gg/6GDAfXn) или телеграмм [чат](https://t.me/jscampapp), а также подписывайтесь на наши [новости](https://t.me/javascriptapp)

## 質問と回答:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

何をしますか `Syntax Error`?

1. 標識の順序が間違っている
2. 言語の規則への違反
3. 不適切な括弧

何をしますか `Reference Error`?

1. 宣言されていない変数
2. 構文エラー
3. 間違った名前

このレッスンをどれだけ学んだかを理解するために、でテストを受けてください [мобильном приложении](http://onelink.to/njhc95) このトピックに関する私たちの学校。

![Sumerian school](/img/app.jpg)

## リンク：
1. [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Data_structures)
2. [十代の若者たちのためのコード：プログラミングの完璧な初心者向けガイド、第1巻: Javascript - Jeremy Moritz ](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)
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
