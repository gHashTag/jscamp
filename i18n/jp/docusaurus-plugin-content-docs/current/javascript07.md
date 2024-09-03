---
id: javascript07
title: 数字
sidebar_label: 数字
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/07.jpg)

最新のJavaScriptには、2つあります 2️⃣ 数字の種類：

### `数`

のハミング数 JavaScript 64ビット形式で保存 IEEE-754, これは「倍精度浮動小数点数」とも呼ばれます (double precision floating point numbers). これらは、私たちが最も頻繁に使用する番号です。整数は、個別のタイプの数値とは見なされません。浮動小数点数に加えて、数値データ型に関連する3つの文字値もあります： `Infinity`, `-Infinity`, そして `NaN` (非数).

![Numbers](https://media.giphy.com/media/JtBZm3Getg3dqxK0zP/giphy.gif)

### `bigInt`

数値を使用すると、任意の長さの整数を処理できます。それらが必要になることはめったになく、安全な最大整数値以外の値を処理する必要がある場合に使用されます。 `Number`.

小数点以下の桁数が多い小数であっても、数値が引用されることはありません。

10進数、2進数、8進数、16進数の4種類の数値リテラルを使用できます。最後の3つはめったに使用されないため、詳細な説明は省略します。 , まあ、好奇心旺盛な人はそれらを知ることができます [ここに](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Numbers_and_dates).

:::caution
先行ゼロを使用するときは注意してください！これは、10進数の前にゼロを置く必要がないことを意味します。
:::

```jsx
1234567890
42

0888 // 888 10進数として処理
0777 // 非厳密な8進数（10進数の511）として処理されます
```

## 算術演算

![Arithmetic operation](https://media.giphy.com/media/gEvab1ilmJjA82FaSV/giphy.gif)

2つ以上の整数を使用して、新しい整数を形成できます。新しい整数を作成する方法はたくさんあります。 2つ以上の数から新しい数を構成する方法は算術と呼ばれます。
一般に、多くの算術演算がありますが、主な演算は、加算、減算、乗算、除算の4つだけです。他のすべてのアクションがそれらにもたらされるので、それらはメインのものと呼ばれます。

プラス記号 `+` 加算を表すために使用されます： `4 + 4` 回答: `8`

マイナス `–` 差し引く： `7 - 6` 回答: `1`

アスタリスク `*` 掛け算が描かれています: `3 * 4` そして今 foo のように: `12`

スラッシュ `/` スラッシュ: `15 / 5` 回答: `3`

1行に複数のアクションが実行される場合は、それらを互いに分離し、コードを作成します より読みやすくするために、-（括弧）を使用します。次の文章をコンソールに入力してみましょう。それぞれの答えは1桁だけで構成されている必要があります。9️⃣:

```
 3 * (2 + 1)
(3 + 9) / (10 - 6)
(2 + 3 * 4) / (6 + 1)
 2 * (5 - 8 / 2) * (3 + 1)
```

入力してください `LIVE EDITOR` 記載されている値  :

```jsx {2} live
function learnJavaScript() {
  let result = 2 + 3 // ここに
  return result
}
```

## 組み合わせた割り当て

![Conbination](https://media.giphy.com/media/l2Sq8jlaqqnqBoGhG/giphy.gif)

演算子は、式のオペランドに対して実行されるアクションの記号指定です（たとえば、: `+`, `-`, `*`, `/`).

オペランドは、プログラムで処理される値を表します。オペランドは、任意のデータ型にすることができます。演算子の左側のオペランドは左側のオペランドであり、演算子の右側のオペランドは右側のオペランドです。

結合代入の主な演算子は次のようになります `=`, 右のオペランドの値を左のオペランドに割り当てます。つまり、 - `x = y` 変数に値を割り当てます  `y`, 変数  `x`.

数学演算子を使用して変数に値を割り当てる方法を何度も見てきました。たとえば、次のようになります。

```javascript
let sum = 2 + 3 // 合計の値 7
```

そして、おそらく、既知の変数の値をいつでも変更できることを忘れる時間はありませんでした。 :

```jsx live
function learnJavaScript() {
  let sum = 2 + 3
  sum = sum + 3 // 今、合計の値はになっています 8
  return sum
}
```

追加の割り当て `+=` 変数の値をすばやく増やすために！ここではいくつかの例を示します。

```javascript
let 値 = 5
値 += 2 // 今の意味 7 (値と同じです = // 値 + 2)
値 += 3 // 今の意味 10 (値と同じです = // 値 + 3)
値 = 値 + 値 // 20 (しかし、あなたはただ価値を置くことができます += // 値)
値 += 値 // 40 (値と同じです = 値 + // 値)
```

同様のことが他の数学演算でも機能することはすでに推測していますよね？

```javascript
値 –= 25 // 今の意味 15 (値と同じ = 値 − // 25)
値 -= 2 // 今の意味 30 (値と同じです = // 値 - 2)
値 /= 3 // 今の意味 10 (値と同じです = // value / 3)
値 // 回答: 10
```

次に、にリストされているすべての例を確認します `LIVE EDITOR`:

```jsx live
function learnJavaScript() {
  let 値 = 0 + 0
  return 値
}
```

組み合わせた割り当てについてもっと読むことができます [ここに](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Assignment_Operators)

## インクリメントとデクリメント

![increment](https://media.giphy.com/media/dX9qnaX4OH3avyMcU3/giphy.gif)

オペレーター `++` (インクリメント）は、そのオペランドの値を1つ増やします。オペランドの値が数値でない場合、演算子は自動的に数値に変換し、1ずつインクリメントして、結果を返します。この結果は、オペランドに割り当てられます。

```jsx live
function learnJavaScript() {
  let increment = 0
  increment++
  return increment
}
```

オペレーター `--` (decrement）は、インクリメント演算子と同様に機能しますが、オペランドの値を増やすことはありませんが、逆に、次のように1つ減らします。

```jsx live
function learnJavaScript() {
  let decrement = 6
  decrement--
  return decrement
}
```

## モジュロ演算子

![function](https://media.giphy.com/media/seVVu09CPz2upPeU1s/giphy.gif)

符号 `%`（パーセント）除算の余りを示します。演算子は、左のオペランドを右で除算した余りの整数を返します。戻り値は、除数ではなく、常に被除数の符号を取得します。組み込み関数⚙️モジュロを使用して、除算の整数剰余である結果を取得します。 `let1` на `let2`.

`12 % 5` 結果 `2`

`NaN % 2` 結果 `NaN`

`1 % 2` 結果 `1`

`2 % 3` 結果 `2`

`4 % 2` 結果 `0`

`5.5 % 2` 結果 `1.5`

にリストされているすべての例を確認してください `LIVE EDITOR` そして、あなたはすぐにすべてを理解するでしょう：

```jsx live
function learnJavaScript() {
  let modulo = 12 % 5
  return modulo
}
```

## 丸め

![Balls](https://media.giphy.com/media/6glYLqOQ3dlok/giphy.gif)

方法 `Math.round()` 最も近い整数に丸められた数値を返します。数値の小数部分が以上の場合 `0,5`, 引数は最も近い大きい整数に丸められます。数の小数部分が少ない場合 `0,5`, 引数は最も近い小さい整数に丸められます。

`result = Math.round(20.49)` 値を返します 20

`result = Math.round(20.5)` 値を返します 21

自分でチェックしてください:

```jsx live
function learnJavaScript() {
  let result = Math.round(20.49)
  return result
}
```

## 問題?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

に書く [Discord](https://discord.gg/6GDAfXn) または電報 [チャット](https://t.me/neuro_coder_group), また、私たちの購読 [ニュース](https://t.me/javascriptapp)

## 質問と回答:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

基本と呼ばれる算術演算は何ですか？

1. 足し算、引き算
2. 乗算、除算
3. 足し算、引き算、掛け算、割り算

正しく読む方法 `+=`?

1. インクリメント
2. 追加による割り当て
3. プラスと等しい

増分は記号でどのように記述されますか？

1. `++`
2. `--`
3. `+`

部門の残りの部分の兆候は何ですか？

1. `%`
2. `/`
3. `\`

どういう意味ですか `Math.round` アクションに戻ります `Math.round (20.62)`?

1. `22`
2. `20`
3. `21`

このレッスンをどれだけ学んだかを理解するために、でテストを受けてください [モバイルアプリ](http://onelink.to/njhc95) このトピックに関する私たちの学校。

![Sumerian school](/img/app.jpg)

## リンク:

1. [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Numbers_and_dates)
2. [十代の若者たちのためのコード：プログラミングの完璧な初心者向けガイド、ボリューム 1: Javascript - Jeremy Moritz ](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)
3. [JavaScript.ru](https://learn.javascript.ru/number)
4. [整数演算](https://maths-public.ru/arithmetic/actions)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">  </a><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>
  
</table>

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)
