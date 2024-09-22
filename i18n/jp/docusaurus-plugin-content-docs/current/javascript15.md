---
id: javascript15
title: 設計 switch case
sidebar_label: 設計 switch case
---

![@serverSerrverlesskiy](/img/javascript/headers/14.jpg)

設計 `switch` さまざまなオプションで値が等しいかどうかを比較するために使用されます。

この場合、等式は、正規表現などと比較して、演算子の厳密な等式 `===`の意味で暗示されます。 `switch` できません。つまり、同等性を維持するには、値が同じタイプである必要があります。

![comparison](https://media.giphy.com/media/icJA0VF7ntoEL18Jez/giphy.gif)

条件が一致する場合、対応するコードブロックに関連付けられています `case`. いずれの条件も一致しない場合は、ブロックで指定されたコードが実行されます `default`, もしそうなら。構築を終了するには、コマンドを使用します `break`. 指定しない場合、以下のコードブロックが自動的に実行されます `case` 等したがって、 `break` インタープリターをすべて実行しないように、スクリプトで使用します `case` これにより、スクリプトのパフォーマンスが低下します。

## 構文

![Syntax](https://media.giphy.com/media/yR4xZagT71AAM/giphy.gif)

設計 `switch` 1つ以上のブロックがあります `case` およびオプションのブロック `default`.

これは次のようになります。

```jsx
switch (n) {
  case 1:
    // コードブロック 1;
    break
  case 2:
    // コードブロック 2;
    break
  // .......
  // 別のオプション  case
  // .......
  default:
  // どの条件も一致しない場合のコードのブロック;
}
```

`n` - これはブール値です [ブール値](https://react-native-village.github.io/docs/javascript08) условие.

## の例

![Math](https://media.giphy.com/media/xT1Ra5h24Eliux3UVq/giphy.gif)

最も簡単な例を見てみましょう  :

```jsx live
function learnJavaScript() {
  let a = 4
  let str
  switch (a) {
    case 3:
      str = '少し'
      break
    case 4:
      str = '丁度!'
      break
    case 5:
      str = '強引な'
      break
    default:
      str = '私はそのような価値観を知りません'
  }
  return str
}
```

ここでオペレーター `switch` 一貫して比較する `a` からのすべてのオプションで `case`.
最初 `3`, 次に-一致するものがないため – `4`. 一致するものが見つかりました。このオプションは、次の行から実行されます。 `str = 'В точку!'` そしてさらに、最も近い `break`, 実行を中止します.

![Wow](https://media.giphy.com/media/3oriO13KTkzPwTykp2/giphy.gif)

この例を考えてみましょう  :

```jsx live
function learnJavaScript() {
  let a = 'Apples'
  let str
  switch (a) {
    case 'Apples':
      str = 'I love ' + a
      break
    case 'Oranges':
      str = 'I love ' + a
      break
    case 'Bananas':
      str = 'I love ' + a
      break
    default:
      str = 'I like other fruits'
  }
  return str
}
```

ここでオペレーター `switch` 一貫して比較する `a` からのすべてのオプションで `case`. しかし、これは数字の比較ではなく、文字列の比較です。これは任意のデータ型で実行できます。主なことは、同じデータ型を比較す​​ることです。.

## 置換 `if`

また `Switch` 複数を置き換えるために使用 `if`.

  :たとえば、このコードを置き換えることができます

```jsx live
function learnJavaScript() {
  let number = 2
  let str
  if (number === 0) {
    str = '番号を入力しました 0'
  }

  if (number === 1) {
    str = '番号を入力しました 1'
  }

  if (number === 2 || number === 3) {
    str = '番号を入力しました 2, 多分 3'
  }
  return str
}
```

その上で  :

```jsx live
function learnJavaScript() {
  let number = 2
  let str
  switch (number) {
    case 0:
      str = '番号を入力しました 0'
      break

    case 1:
      str = '番号を入力しました 1'
      break

    case 2:
    case 3:
      str = '番号を入力しました 2, 多分 3'
      break
  }
  return str
}
```

結果は同じですが、コードが読みやすくなり、操作しやすくなります。

## 問題?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

に書く [Discord](https://discord.gg/6GDAfXn) または電報 [チャット](https://t.me/jscampapp), また、私たちの購読 [ニュース](https://t.me/javascriptapp)

## 質問と回答:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

助けを借りてそれは可能ですか `switch` 正規表現と何かを比較する?

1. はい
2. いいえ

どの比較演算子が使用されているか `switch`?

1. `=`
2. `===`
3. `==`

どのキーワードで比較プロセスを停止しますか `switch`?

1. `break`
2. `stop`
3. `default`

このレッスンをどれだけ学んだかを理解するために、でテストを受けてください [モバイルアプリ](http://onelink.to/njhc95) このトピックに関する私たちの学校。

![Sumerian school](/img/app.jpg)

## リンク:

1.  [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/switch)
2.  [Learn JavaScript](https://learn.javascript.ru/switch)
3.  [ディレクトリ JavaScript](https://javascript.ru/switch)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/FELiX-RN"><img src="https://avatars0.githubusercontent.com/u/72006627?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Philipp Dvinyaninov</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=FELiX-RN" title="Documentation">  </a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)
