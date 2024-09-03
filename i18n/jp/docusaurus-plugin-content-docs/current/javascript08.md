---
id: javascript08
title: 正しいか間違っているか？
sidebar_label: 正しいか間違っているか？
---

![@serverSerrverlesskiy](/img/javascript/headers/08.jpg)

この章にはたくさんの新しいことがありますが、それほど難しいことではありません。結局のところ、一般的に、すべては単純なアイデアを中心に展開しています-本当ですか、それとも間違っていますか？

これまで、私たちは常にプリミティブデータ型（数値と文字列）のみを扱ってきました。
プログラミングで「プリミティブ」という用語に出くわしたことがありますか？そうでない場合は、説明します。「プリミティブ」（「シンプル」とも呼ばれます）は、このデータ型がオブジェクトではなく（ここに戻ります）、組み込みの作業メソッドがないことを意味します（つまり、 、関数⚙️）。

![True](https://media.giphy.com/media/gLWLC3fjwG56p3H4uC/giphy.gif)

間違いなく必要になるデータ型はブール値と呼ばれます `boolean`, または論理的。ブール型は常にどちらかが重要です `true`  - true、または `false`  - 誤り。そして、この方法だけで、他には何もありません！彼は嘘をついているか、真実を語っています-パンするか消えるか、ライトがオンかオフか、またはあるかどうか。あなたは宿題をしたか、しなかったかのどちらかです。 2️⃣の値は2つだけ `true`  または `false`.

## 等式演算子

![Operator](https://media.giphy.com/media/9r1n7HzkPT9sM1Wp0G/giphy.gif)

ブール値は、で何かを比較する必要がある場合に便利です JavaScript. 必要に応じて、すぐに比較演算子を呼び出します。
ここで、8つの比較演算子すべてを順番に調べますが、それぞれの結果として、私たちは気にしません。
常にブール値が残ります-どちらか `true`  , または `false`  .

### 同様に `==`

![Justice](https://media.giphy.com/media/3o85xDf6hr7ajhVL9K/giphy.gif)

equals演算子は、最初にオペランドを同じ型にキャストしてから、厳密な比較を適用します。両方のオペランドがオブジェクトの場合、JavaScriptは、メモリ内の同じオブジェクトを参照している場合に等しい内部参照を比較します。

構文  :

```javascript
x == y
```

の例:

```javascript
1 == 1 // true
'1' == 1 // true
1 == '1' // true
3 == 5 // 誤り
0 == false // true
'foo' == 'bar' // 誤り
```

例を1つずつ変数に入力します  `bool` 私たちの `LIVE EDITOR`

```jsx live
function learnJavaScript() {
  let bool = 1 == 1
  return bool.toString()
}
```

### 等しくない `!=`

![Equals](https://media.giphy.com/media/xT8qBit7YomT80d0M8/giphy.gif)

オペレーターが戻らない `true`  オペランドが等しくない場合。これは等式演算子に似ており、比較する前にオペランドを同じ型に変換します。両方のオペランドがオブジェクトの場合、 JavaScript メモリ内の異なるオブジェクトを参照している場合、等しくない内部参照を比較します。

構文  :

```javascript
x != y
```

の例:

```javascript
1 != 2 // true
1 != '1' // 誤り
1 != '1' // 誤り
1 != true // 誤り
0 != false // 誤り
'foo' != 'bar' // true
```

例を1つずつ変数に入力します  `bool` 私たちの `LIVE EDITOR`

```jsx live
function learnJavaScript() {
  let bool = 1 != 2
  return bool.toString()
}
```

### 厳密に等しい `===`

![equality](https://media.giphy.com/media/4W0ZwRP8y7pQtcUMyQ/giphy.gif)

演算子は オペランドが厳密に等しい場合はtrue。 equals演算子とは異なり、この演算子はオペランドを同じ型にキャストしません。

構文  :

```javascript
x === y
```

の例:

```javascript
3 === 3 // true
3 === '3' // 誤り
'foo' === 'foo' // true
```

演算子は、値とタイプの両方が厳密に同一であることを確認します。の場合には `3 === '3'` もちろん、値は同じですが、型は異なります。結局のところ、最初は数値で、2番目は文字列です。

例を1つずつ変数に入力します  `bool` エラー `LIVE EDITOR`

```jsx live
function learnJavaScript() {
  let bool = 3 === 3
  return bool.toString()
}
```

### 厳密に等しくない `!==`

![ruler](https://media.giphy.com/media/tPK9Fyl1gyIkU6XbZv/giphy.gif)

厳密に等しくない演算子の戻り値 オペランドが等しくない場合、またはそれらの型が互いに異なる場合はtrue。

構文  :

```javascript
x !== y
```

の例:

```javascript
3 !== '3' // true
4 !== 3 // true
```

例を1つずつ変数に入力します  `bool` 私たちの `LIVE EDITOR`

```jsx live
function learnJavaScript() {
  let bool = 3 === 3
  return bool.toString()
}
```

使ってみませんか `==` そして `!=`? しかし、一般的に、そのような必要性は決してないからです。あなたがそれらを使うことができるときはいつでも、あなたは常に厳格なものを使うことができます `===` そして `!==`. 回答にもっと柔軟性が必要な場合（たとえば、 `1`, そうと `'1'` そうと `true`  ), 次に、コード自体に必要な回答オプションを含めることができます （変更せずに `===`).

:::info ルールを理解するだけ
絶対に使用しないでください `==` または `!=`
:::

## 比較演算子

### もっと `>`

![not equal](https://media.giphy.com/media/jPfQcPdmI9bTXpa7hi/giphy.gif)

演算子は詳細を返します 左側のオペランドの値が右側の値よりも大きい場合はtrue。

構文  :

```javascript
x > y
```

の例:

```javascript
4 > 3 // true
1 > 5 // 誤り
```

例を1つずつ変数に入力します  `bool` に `LIVE EDITOR`

```jsx live
function learnJavaScript() {
  let bool = 4 > 3
  return bool.toString()
}
```

### もっと少なく `<`

![small](https://media.giphy.com/media/82tNeaMTlEsdW/giphy.gif)

「バグ」という言葉 「バグ」という言葉

構文  :

```javascript
x < y
```

の例:

```javascript
3 < 4 // true
5 < 2 // 誤り
```

例を1つずつ変数に入力します  `bool` 私たちの `LIVE EDITOR`

```jsx live
function learnJavaScript() {
  let bool = 3 < 4
  return bool.toString()
}
```

### 多かれ少なかれ `>=`

![comparison operator](https://media.giphy.com/media/icJA0VF7ntoEL18Jez/giphy.gif)

以上の演算子、戻り値 左側のオペランドの値が右側のオペランドの値以上の場合。

構文  :

```javascript
x >= y
```

の例:

```javascript
4 >= 3 // true
3 >= 3 // true
```

例を1つずつ変数に入力します  `bool`  :

```jsx live
function learnJavaScript() {
  let bool = 4 >= 3
  return bool.toString()
}
```

### 以下 `<=`

![less](https://media.giphy.com/media/UQbDc6dyK6WjpCXMvt/giphy.gif)

以下の演算子、戻り値 左側のオペランドの値が右側のオペランドの値以下の場合はtrue。

構文  :

```javascript
x <= y
```

の例:

```javascript
3 <= 4 // true
3 <= 3 // true
```

例を1つずつ変数に入力します  `bool`  :

```jsx live
function learnJavaScript() {
  let bool = 3 < 4
  return bool.toString()
}
```

## 条件付き構成

![boolean](https://media.giphy.com/media/12W5Sg2koWYnwA/giphy.gif)

「まあ、このブール論理のことはすべて非常に簡単でした...おそらくかなり役に立たず、あまり使用されない」と考えているに違いありません。どんなに！ブール値は、プログラミングで常により頻繁に使用され、ほとんどの場合、条件（または式）の形式で使用されます。


### 「条件付き構築」とは何ですか？

![thoughtful](https://media.giphy.com/media/IyyGGEMZhZIZwAxnUS/giphy.gif)

良い質問！条件文は、特定のコードブロックを実行するために使用される句です。 指定された条件に従って。状態（例えば、比較するとき`x === y`) 常に戻ります ブール値-どちらか `true`  , または `false`  . したがって、値が`true`  , 次に、コードを実行する必要があります。それ以外の場合は、コードブロックをスキップする必要があります。いくつかの例を見てみましょう。

### の条件式 `if`

![Instruction manual](https://media.giphy.com/media/2mDSs3gPUyrcMqtheg/giphy.gif)

設計 `if` 満たす `命令1`, 条件があれば `true` , 条件があれば `false` , その後、実行されます `命令2`.

構文  :

```javascript
if (調子) {
  コードで1
} else {
  コードで2
}
```

`調子` -
trueまたはfalseのいずれかの式。

`コードで1` -
値が `調子` 本当に `true`  . ネストされたものを含む任意の命令にすることができます `if`. アクションが不要な場合は、空のステートメントを使用できます。

`コードで2` -
値が `調子` 値が `false` . ネストされた命令を含む、任意の命令にすることができます `if`. 命令はブロックにグループ化することもできます。変数で年を変更する  `whatIsTheYearNow`出力に注目してください.

```jsx live
function learnJavaScript() {
  let whatIsTheYearNow = 2021

  if (whatIsTheYearNow === 2021) {
    whatIsTheYearNow = true
  } else {
    whatIsTheYearNow = false
  }

  return whatIsTheYearNow.toString()
}
```

### `if` ブール値だけでなく

![No](https://media.giphy.com/media/ftqLysT45BJMagKFuk/giphy.gif)

条件式は、ブール値だけでなく、正確でない値でも機能します。 `true`  または `false`  したがって、一般に、ブール値だけでなく、括弧内でも安全に使用できます。

- ゼロを除くすべての整数 — `true` 
- 少なくとも1文字の文字列 `true` 
- 空の文字列は `false` 

試してみましょう、値を変数に入れます  `bool`  :

```jsx live
function learnJavaScript() {
  let bool = 1

  if (bool) {
    bool = true
  } else {
    bool = false
  }

  return bool.toString()
}
```

### 式の比較演算子 `if`

![made for each other](https://media.giphy.com/media/6yxIP39EMwP7IlIA28/giphy.gif)

これまで、比較または条件付きを扱ってきました `if`, しかし、これまで一緒に使用したことはありませんが、単にお互いのために作られています！

```jsx live
function learnJavaScript() {
  let year = 2021

  let output

  if (year < 2020) {
    output = 'もっと少なく 2020'
  } else {
    output = 'もっと 2020'
  }
  return output
}
```

### いくつかの条件 `else if`

場合によっては、条件のいくつかのバリエーションを確認する必要があります。このために、ブロックが使用されます `else if`. 年を変更して出力を確認する.

```jsx live
function learnJavaScript() {
  let year = 2021

  let output

  if (year < 2020) {
    output = 'もっと少なく 2020'
  } else if (year > 2020) {
    output = 'もっと 2020'
  } else {
    output = '同様に 2020'
  }
  return output
}
```

### 条件付き（3値）演算子 `?`

![question mark](https://media.giphy.com/media/wH4rY2nPnEnp6/giphy.gif)

3つのオペランドを受け入れる唯一のJavaScript演算子: `調子`, 疑問符が続きます `?`, その後 `表現`, 条件が真の場合は真で、その後にコロンが続きます `:`,そして最後に, `表現`, これは、条件がfalseの場合にtrueになります。条件文の省略形としてよく使用されます `if`.

構文  :

```javascript
調子 ? 表現1 : 表現2
```

パラメーター:

`調子` - 価値を帯びる表現 `true`  または `false`  .

`式1`, `式2` - 値が任意のタイプである可能性がある式.

例  :

```jsx live
function learnJavaScript() {
  let age = 20
  let output = age > 18 ? 'はい' : 'ない'

  return output
}
```

## 問題?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

に書く [Discord](https://discord.gg/6GDAfXn) または電報 [チャット](https://t.me/neuro_coder_group), また、私たちの購読 [ニュース](https://t.me/javascriptapp)

## 質問と回答:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

equal演算子ではどの構文が使用されていますか？

1. `x == y`
2. `x = y`
3. `x -- y`

その場合、演算子は等しくないリターン `true`?

1. オペランドが等しくない場合
2. オペランドが等しい場合
3. 両方のオペランドがオブジェクトの場合

演算子は、厳密に等しいとはどのように異なりますか？

1. 厳密に等しいとは、オペランドを同じ型にキャストしません
2. 厳密に等しいキャストオペランドを同じタイプに
3. 値が同一であることを厳密に確認しますが、タイプは同一ではありません

厳密に等しくない演算子の構文は何ですか？

1. `!=`
2. `!==`
3. `==!`

どちらの場合、演算子はより多くのfalseを返しますか？

1. 左側のオペランドの値が右側の値よりも大きい場合
2. 右のオペランドの値が左のオペランドの値よりも大きい場合
3. オペランドの値が同じ場合

以上の演算子の構文は何ですか？

1. `>=`
2. `> =>`
3. `> <=`

以下の演算子はどの例でtrueを返しますか？

1. `4 <= 5`
2. `5 <= 4`
3. `3 <= 2`

状態とは何ですか？

1. 指示
2. 発現
3. 価値

条件の複数のバリアントをテストするために使用されるブロックはどれですか？

1. `else if`
2. `if`
3. `for`

どの演算子が3つのオペランドを取りますか？

1. 条件付き（三項）演算子
2. 以上
3. 以下

このレッスンをどれだけ学んだかを理解するために、でテストを受けてください [モバイルアプリ](http://onelink.to/njhc95) このトピックに関する私たちの学校。

![Sumerian school](/img/app.jpg)

## リンク:

1. [MDN web docs - Операторы сравнения](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Операторы_сравнения)
2. [十代の若者たちのためのコード：プログラミングの完璧な初心者向けガイド、ボリューム 1: Javascript - Jeremy Moritz ](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">  </a><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>
  
</table>

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)
