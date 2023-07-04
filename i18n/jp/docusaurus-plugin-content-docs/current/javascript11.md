---
id: javascript11
title: 型変換とキャスト
sidebar_label: 型変換とキャスト
---

![@serverSerrverlesskiy](/img/javascript/headers/09.jpg)

## キャスト (type coercion)

これは、あるデータ型から別のデータ型への値の自動または暗黙的な変換です (たとえば、文字列から数値へ)。型変換は、どちらも値をあるデータ型から別のデータ型に変換するという点で型変換に似ていますが、1 つの重要な違いがあります。型変換は暗黙的であり、型変換は暗黙的または明示的です。

![transformation](https://media.giphy.com/media/xT4uQr9H3EDL7Ha2hq/giphy.gif)

の例  :

```jsx live
function learnJavaScript() {
  const value1 = '5'
  const value2 = 9
  let sum = value1 + value2

  return sum
}
```

上記の例では JavaScript 番号を与える `9` 文字列に変換し、2 つの 2️⃣ 値を連結して文字列を生成します `59`. JavaScript 文字列または数値のいずれかを選択でき、文字列を使用することにしました。

コンパイラは次の行をもたらした可能性があります `5` 番号に戻り、金額を返す `14`, しかし、彼はしませんでした。この結果を取得するには、文字列を明示的に変換する必要があります `5` メソッドを使用して数値に `Number()` :

```jsx live
function learnJavaScript() {
  const value1 = '5'
  const value2 = 9
  let sum = Number(value1) + value2

  return sum
}
```

## 型変換 (type conversion)

![Transformation](https://media.giphy.com/media/l2SpMMVivErM0Q7jG/giphy.gif)

あるデータ型から別のデータ型へのデータの転送を意味します。暗黙的な変換は、コンパイラがデータ型を自動的に割り当てる (割り当て) ときに発生しますが、ソース コードでは、変換を完了するために明示的に要求される場合もあります。

### 文字列変換

![Transformation](https://media.giphy.com/media/RLVHPJJv7jY1q/giphy.gif)

文字列変換は、何かを文字列として表現したいときに発生します。たとえば、次の関数を使用できます。 `String(value)`, 値を文字列に変換するには  :

```jsx live
function learnJavaScript() {
  let value = true // boolean

  value = String(value)
  return typeof value
}
```

変容は明らかな方法で起こる. `true`  になる `"true"` 

### 数値変換

![Transformation](https://media.giphy.com/media/4H5nOUqX7FywOGpCF7/giphy.gif)

数値変換は、数学関数および数式で発生します.

```jsx live
function learnJavaScript() {
  let value = '6' / '2'

  return value
}
```

機能を使用できます `Number(value)`, 明示的に変換する `value` 数に  :

```jsx live
function learnJavaScript() {
  let str = '123'
  let num = Number(str)

  return typeof num
}
```

明示的な変換は、文字列のコンテキストから、たとえばテキスト 壁紙 フォーム フィールドから数値を取得することを期待している場合によく使用されます。.

文字列を数値に明示的にキャストできない場合、変換結果は次のようになります。 `NaN` (英語. Not-a-Number, "数字ではありません」）。たとえば、 :

```jsx live
function learnJavaScript() {
  let age = Number('数字の代わりに任意の文字列')

  return age
}
```

### 数値変換規則:

| 値         |                                                                           変換された 
に…                                                                           |
| ---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| `undefined`      |                                                                                `NaN`                                                                                 |
| `null `          |                                                                                 `0`                                                                                  |
| `true` / `false` |                                                                              `1` / `0`                                                                               |
| `string`         | 余白は端でトリミングされます。さらに、空の文字列が残っている場合は 0 を取得します。そうでない場合、数値は空でない文字列から「読み取られます」。 On error 寒暖系仮面‍♂️ 結果 NaN. |

の例:

```javascript
Number('   123   ') // 123
Number('123z') // NaN (の例 "z")
Number(true) // 1
Number(false) // 0
Number(null) // 0
Number(undefined) // NaN
```

その点に注意してください `null` そして `undefined` 異なった振る舞いをする.そう, `null` ゼロになるが、`undefined` に減少 `NaN`.

### ブール変換

![Transformation](https://media.giphy.com/media/JjAdpCxrdro7m/giphy.gif)

論理変換は最も単純です。論理演算で発生しますが、関数として明示的に実行することもできます `Boolean(value)`.

### ブール変換規則:

みたいな直感的に「空っぽ」な値 `0`, 空行, `null`, `undefined`そして `NaN`, なる `false`. 他のすべての値になる `true`.

```javascript
Boolean(1) // true
Boolean(0) // false
Boolean('こんにちは!') // true
Boolean('') // false
```

:::caution ゼロのある行に注意してください "0" — これは true
いくつかの言語駄図面, PHP) 文字列を知覚する `"0"` なので `false`. しかし、 JavaScript, 文字列が空でない場合、常に `true`

:::

```javascript
Boolean('0') // true
Boolean(' ') // スペースも true (空でない文字列は true)
```

## 問題?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

に書き込みます [Discord](https://discord.gg/6GDAfXn) または電報 [チャット](https://t.me/jscampapp), また、私たちの [ニュース](https://t.me/javascriptapp)

## 質問と回答:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

文字列変換にはどの関数を使用する必要がありますか?

1.  `String(value)`
2.  `Boolean(value)`
3.  `Number(value)`

型キャストとは何ですか？

1. あるタイプから別のタイプへのデータの転送
2. あるデータ型から別のデータ型への値の変換
3. 何かを文字列として表現する

型キャストと型キャストの主な違いは何ですか?

1. 型キャストは明示的であり、型変換は暗黙的です
2. 型キャストは暗黙的であり、型変換は明示的です
3. 型変換は暗黙的であり、型変換は明示的および暗黙的の両方が可能

その場合、変換は次のようになります `NaN`?

1.  文字列を数値に明示的にキャストできない場合
2. 数値を文字列に明示的にキャストできない場合
3.コードに誤りがある場合

変換すると「空」の値は何になりますか?

1.  `null`
2.  `true`
3.  `false`

このレッスンでどれだけ学んだかを理解するために、次のテストを受けてください。 [モバイルアプリ](http://onelink.to/njhc95) このトピックに関する私たちの学校。

![Sumerian school](/img/app.jpg)

## リンク:

1. [MDN web docs - キャスト](https://developer.mozilla.org/ru/docs/Словарь/Type_coercion)
2. [ 10 代向け: プログラミングの完全な初心者向けガイド、ボリューム 1: Javascript - Jeremy Moritz ](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)
3. [JavaScript.ru](https://learn.javascript.ru/ifelse#blok-else)
4. [整数演算](https://maths-public.ru/arithmetic/actions)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">  </a><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>
  
</table>

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)
