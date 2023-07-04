---
id: javascript02
title: コメント（1）
sidebar_label: コメント（1）
---

![@serverSerrverlesskiy](/img/javascript/headers/02.jpg)

## コメントとは何ですか？

JavaScriptには、コードでコメントを指定する方法がいくつかあります。 📟

時々書くとき 🖊️ コード、あなたはそれに人々だけを対象とした説明を提供する必要があります 👨 , コンピューター用ではありません。おそらくそれは、過去から（未来の私へ！）あなた自身へのある種のメッセージであり、プログラムコードのこれまたはそのことについてです。あるいは、コードのそのような部分とそのような部分だけを実行する必要があり、残りは省略すべきであることを示しているだけかもしれません。要するに、そのような場合には、コメントの助けを借りる必要があります。
コメント（1） 🗣️ 追加するために使用されます ➕ ヒント、メモ 🔖 , 提案または警告。彼らは読みやすく、理解しやすくすることができます 💡 コード。それらはまた防ぐのに使用することができます 🛑 コードの実行（この手法は、コードをデバッグするときに実行されます）。

コードの実行（この手法は、コードをデバッグするときに実行されます）。 🗣️ コードで。
## ビデオ

<YouTube videoId="zCvKMw5QHRw" />

## 1行コメント

![Slash](https://media.giphy.com/media/bKXMS0NjXoyaY/giphy.gif)

最初 1️⃣ 仕方 `// コメント` 🗣️ この場合、テキスト全体 📜 二重スラッシュの後の行にコメントがあります 🗣️ . 通訳が2つ見たとき 2️⃣ 続けてスラッシュ `//`, 彼は、行の終わりまで続くすべてのものを安全に無視できることをすぐに理解します。まだ構文に注意を払わないでください 📖 コードについては、少し後で詳しく説明します。

```jsx live
function learnJavaScript() {
  // これは一列に並んだコメントです
  var hello = 'Hello world!!!'

  return hello
}
```

## 複数行コメント

![Coments](https://media.giphy.com/media/UevalSWg5twQeqpc8Q/giphy.gif)

2番目 2️⃣ 方法は `/* */`, この方法は、最初の方法よりも柔軟性があります 1️⃣ . 通訳が見たらすぐに `/*`, 彼は考えます：「ええ、それは私が見るまで意味します `*/`, ここでは何も気にしない！」
たとえば、1つで使用できます 1️⃣ ライン 👇 :

```jsx live
function learnJavaScript() {
  /* これは1行のコメントです */
  var hello = 'Hello world!!!'

  return hello
}
```

または、複数行コメントを作成できます 🗣️ , ここに示すように 👇 :

```jsx live
function learnJavaScript() {
  /*このコメントは数行にまたがっています。
     終了するまでコメントを終了する必要はありませんのでご注意ください。*/
  var hello = 'Hello world!!!'
  /* ここにコメントを書いてください */
  return hello
}
```

## コードの途中でコメントする

![Among](https://media.giphy.com/media/fnjIiBNo38IHS/giphy.gif)

また、必要に応じて、このようなコメントを使用できます。 🗣️ コード行の途中。これはコードの可読性を損なう可能性がありますが👇 :

```jsx live
function learnJavaScript() {
  var x = ''
  var hello = 'Hello ' + x /* 値を挿入 x */ + '!'

  return hello
}
```

コードへのコメントで、それがすべてであり、変更の呼び出しが鳴りました🔔 .

![Comments](https://media.giphy.com/media/SvuRLwWT0EoeErwPvB/giphy.gif)

## 問題?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

に書く [Discord](https://discord.gg/6GDAfXn) または電報 [チャット](https://t.me/jscampapp), また、私たちの購読 [ニュース](https://t.me/javascriptapp)

## 質問と回答:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

コメントは誰ですか？?

1. 人
2. コンソール
3. JavaScriptインタープリター
コメントが使用されていないもの?

1. ヒント、メモ、提案を追加する
2. プログラムコードの一部として
3. コードの実行を防ぐため

コードでコメントを指定する方法はどれですか JavaScript 存在しない?

1. `(' ')`
2. `//`
3. `/* */`

コードの任意の数の行を無効にする方法?

1. コードの途中にコメントを書く
2. コードをコメントでラップします
3. コマンドを使用します `console.log`

このレッスンをどれだけ学んだかを理解するために、 [モバイルアプリ](http://onelink.to/njhc95) このトピックに関する私たちの学校.

![Sumerian school](/img/app.jpg)

## リンク:

1. [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Lexical_grammar)
2. [十代の若者たちのためのコード：プログラミングの完璧な初心者向けガイド、ボリューム 1: Javascript - Jeremy Moritz ](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)
3. [JavaScript.ru](https://learn.javascript.ru/types)

## Contributors ✨

これらの素晴らしい人々に感謝します ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>
  
</table>

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)
