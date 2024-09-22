---
id: javascript14
title: 正規表現
sidebar_label: 正規表現
---

![@serverSerrverlesskiy](/img/javascript/headers/13.jpg)

正規表現. _regular expressions_) — メタ文字の使用に基づいて、テキスト内の文字列を検索および操作するための形式言語。

正規表現を使用すると、次のことができます。

- 文字列内のテキストを検索します
- 文字列内の部分文字列を置き換えます
- 文字列から情報を抽出します

![search](https://media.giphy.com/media/l46Cy1rHbQ92uuLXa/giphy.gif)

JavaScript, と一緒に から Perl, これは、正規表現のサポートが言語に直接組み込まれているプログラミング言語の1つです。

## 使いにくい

![the complexity of using](https://media.giphy.com/media/5XYsIwzY00ONq/giphy.gif)

正規表現の欠点は、それらがしばしば奇妙で威圧的にさえ見えることです。これは、より複雑なテンプレートに特に当てはまります。.

```jsx
let regExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
```

## 正規表現の定義

![search](https://media.giphy.com/media/RMwYOO5e8pr1lhL8K7/giphy.gif)

正規表現の定義は、文字列の処理が行われることに基づいてテンプレートを作成することです。に JavaScript 正規表現は、2つの方法で定義できるオブジェクトです。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="literal"
values={[
{label: 'Литерал', value: 'literal'},
{label: 'Конструкция', value: 'construction'},
]
}>
<TabItem value="literal">

リテラルを使用した正規表現の定義。正規表現の場合、スラッシュはリテラルです `/ ... /`, それらは括弧と同じ役割を果たします `' ... '` 文字列を作成するとき.

```jsx
let regExp = /テンプレート/
```

リテラルを使用して正規表現を作成する場合は、そのような作成方法では、指定された値の動的な変更が許可されないことに注意してください。これは、スクリプトが解析されるときに正規表現リテラルが_precompilation_を引き起こすという事実によるものです。.

  </TabItem>
  <TabItem value="construction">

コンストラクターを使用して正規表現を定義します。

```jsx
let regExp = new RegExp('テンプレート')
```

コンストラクターを使用して作成された正規表現のコンパイルは、スクリプトの実行時に行われます。この作成方法は、動的に生成された文字列から正規表現を作成する場合に使用する価値があります。

  </TabItem>
</Tabs>

## 使用する

![pressing the button](https://media.giphy.com/media/12hhLP67q6PqCs/giphy.gif)

例を使用して正規表現の使用を見てみましょう。:

```jsx
let regExp = /banana/
```

このコードで私たちは文字列を検索する単純な正規表現を作成しました `banana`. 正規表現をテストするには、次の方法を使用できます。 `.test(string)`, メソッドの結果は次のとおりです。 `boolean` 値.

```jsx live
function learnJavaScript() {
  let regExp = /banana/,
    str = 'fanana ranana banana'
  return regExp.test(str) ? '見つかりました' : '番号'
}
```

この例では、正規表現は部分文字列を検索します `banana` 列をなして `str`.

## アンカー

![anchor](https://media.giphy.com/media/3ohze1LSWrEGCML02Y/giphy.gif)

アンカーは、パターンを行の最初または最後に結び付けます。行の先頭にバインドするには、 - `^`, そして最後までに - `$`.

```jsx live
function learnJavaScript() {
  let regExp = /^banana/,
    str = 'lime banana orange'
  return regExp.test(str) ? '見つかりました' : '番号'
}
```

このようなテンプレートを使用する `/banana/` あなたは探しているでしょう `banana` 全行で。文字列とテンプレートが完全に一致するかどうかを確認する必要がある場合は、アンカーを使用する必要があります `/^banana$/`. 方法 `.test()` 戻ります `true`  行全体が `banana`.

## フラグ

![Flag](https://media.giphy.com/media/ihRmRCxJuIi3pCORTL/giphy.gif)

フラグは、正規表現検索を拡張するために使用されます。

- `g` - 検索するときは、すべての一致を検索します。
- `i` - 検索では大文字と小文字が区別されません `[Z-z]`;
- `m` - マルチラインモード;
- `s` - モードをオンにします **dotall**, その時点で `.` 改行文字と一致させることができます。
- `y` - プロパティの位置にある文字から検索します **lastindex** 現在の正規表現。
- `u` - サポートが含まれています **Unicode**.
使用する 正規表現パターンを作成するさまざまな方法のフラグ

<Tabs
defaultValue="literal"
values={[
{label: 'リテラル', value: 'literal'},
{label: '設計', value: 'construction'},
]
}>
<TabItem value="literal">

```jsx
let regExp = /テンプレート/国旗 // prettier-ignore
```

フラグは **неотъемлемой частью** 正規表現。フラグを後で追加または削除することはできません。フラグを組み合わせることもできます。

```jsx live
function learnJavaScript() {
  let regExp = /banana/i,
    str = 'faNana RanaNA BaNanA'
  return regExp.test(str) ? '見つかりました' : '番号'
}
```

フラグを削除してみてください `i` 例から.
</TabItem>
<TabItem value="construction">

```jsx
let regExp = new RegExp('テンプレート', '国旗')
```

フラグは **整数部** 正規表現。フラグを後で追加または削除することはできません。フラグを組み合わせることもできます。

```jsx live
function learnJavaScript() {
  let regExp = new RegExp('banana', 'i'),
    str = 'faNana RanaNA BaNanA'
  return regExp.test(str) ? '見つかりました' : '番号'
}
```

フラグを削除してみてください `i` 例から。検索では大文字と小文字が区別されるようになりました。
</TabItem>
</Tabs>

## 合計

このトピックは非常に広範であり、開発で使用されることはめったにないため、興味がある場合は、より詳細に理解することができます。 [ここに,](https://learn.javascript.ru/regular-expressions)[ ここに](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular_Expressions)[ そしてここ.](https://tuhub.ru/frontend/js-regexp)

## 問題?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

 [Discord](https://discord.gg/6GDAfXn) または電報 [チャット](https://t.me/jscampapp), また、私たちの購読 [ニュース](https://t.me/javascriptapp)
s

## 質問と回答

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

正規表現とは何ですか？

1. テンプレートの作成
2. 文字列操作
3. 文字列の編集

文字通り正規表現を作成するために使用される文字は何ですか？

1. スラッシュ `/`
2. バックスラッシュ `\`
3. 角括弧 `[]`

指定された値をさらに動的に変更できない正規表現を作成する方法は何ですか？

1. 文字通り
2. コンストラクター内
3. どの方法でも、動的な変更は許容されます

このレッスンをどれだけ学んだかを理解するために、 [モバイルアプリ](http://onelink.to/njhc95) このトピックについて私たちの学校で.

![Sumerian school](/img/app.jpg)

## リンク

1. [Learn JavaScript](https://learn.javascript.ru/regular-expressions)
2. [MDN Web Docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular_Expressions)
3. [JS RegExp](https://tuhub.ru/frontend/js-regexp)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr> 
    <td align="center"><a href="https://github.com/IIo3iTiv"><img src="https://avatars1.githubusercontent.com/u/72025062?v=4?s=200" width="200px;" alt=""/><br /><sub><b>IIo3iTiv</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=IIo3iTiv" title="Documentation">  </a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)
