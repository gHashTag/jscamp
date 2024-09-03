---
id: javascript18
title: RestおよびSpread演算子
sidebar_label: RestおよびSpread演算子
---

![@serverSerrverlesskiy](/img/javascript/headers/19.jpg)

多くの⚙️JavaScript組み込み関数は、任意の数の引数をサポートしています。

例えば：

`Math.max(arg1, arg2, ..., argN)` – 渡された引数から最大数を計算します。

`Math.min(arg1, arg2, ..., argN)` - 渡された引数から最小値を返します。

この記事では、独自の関数で同じことを行う方法⚙️と、そのような関数に配列パラメーターを渡す方法⚙️を学習します。

## 残留パラメータ `(...rest)`

![Parametrs](https://media.giphy.com/media/3osxYoufeOGOA7xiX6/giphy.gif)

定義方法に関係なく、任意の数の引数を使用して関数⚙️を呼び出すことができます。

たとえば：

```jsx live
function learnJavaScript() {
  let summa = (a, b, c) => {
    return a + b + c
  } // 3つの数字の合計

  return summa(1, 2, 3, 4, 5, 6, 7)
}
```

余分な引数はエラーを引き起こしませんが、もちろん最初の3つだけがカウントされます。

### コンセプト ES6

![Idea](https://media.giphy.com/media/3o6Mbj2w67HnPQKgcE/giphy.gif)

ES6標準以降、`...rest`がRESTパラメーターであるという概念が登場しました。

```jsx
let goFun = (...rest) => {
  // アルゴリズム
}
```

無料のオプションは、3つのドット`...`で表すことができます。 文字通り、これは「残りのパラメータを収集して配列に入れる」ことを意味します。

たとえば、すべての引数を配列 `args`に集めましょう：

```jsx live
function learnJavaScript() {
  let sumAll = (...args) => {
    // args — 渡された引数の配列の名前
    let sum = 0
    for (let arg of args) if (typeof arg === 'number') sum += arg // sum - すべての数値引数の合計が収集されます
    return sum
  }
  return sumAll(1, 2, 3, 4, 5, 6, 7, 'React', 'Native')
}
```

答えはすでに28で、エラーはありません！ 引数と配列の次元を変更してみてください。

### 複数のオプション

最初のいくつかのパラメーターを変数に入れて、残りを配列に集めることができます。
これは、最後の関数パラメータの代わりにのみ、`...rest`を挿入できることを意味します。

![paste](https://media.giphy.com/media/3o6ZtafpgSpvIaKhMI/giphy.gif)

```jsx
let goFun = (first, second, ...rest) => {
  // アルゴリズム
}
```

以下の例では、最初の2つの2️⃣関数の引数が名前と最後の名前になり、3番目以降の引数が `titles [i]`配列になります：

```jsx live
function learnJavaScript() {
  let free = ''
  let showName = (firstName, lastName, ...titles) => {
    free = firstName + ' ' + lastName // 名+名前
    return titles[0] + ' ' + titles[1]
  }
  // 残りのパラメータはtitles配列に移動します = ["React", "Native"]
  // titles[0]  // React
  // titles[1]  // Native

  let result = showName('ジュリアス', 'シーザー', 'React', 'Native')

  return free + ' また ' + result
}
```

### 考えられる間違い

![error](https://media.giphy.com/media/xTiN0L7EW5trfOvEk0/giphy.gif)

残りのパラメーターは最後に配置する必要があるため、その後にを書き込むことはできません。
これは`エラー`をスローします：

```jsx
function f(arg1, ...rest, arg2) {   // arg2 後 ...rest ?
  // Ошибка!
}
```

:::note 覚えて
`...rest` 常に最後のものでなければなりません。
:::

<!-- ### Опасный "arguments"

![dangerous](https://media.giphy.com/media/xT5LMAvRY92qUXj7dC/giphy.gif)

Все аргументы функции⚙️ находятся в псевдомассиве `arguments` под своими порядковыми номерами.

Но доступ через массив `arguments[]` можно найти только в старом коде . Не применяйте его!

:::note Внимание
Cтрелочные функции⚙️ не имеют `arguments[]` как и собственного `this.`
:::

Если мы обратимся к `arguments` из стрелочной функции⚙️, то получим аргументы внешней "классической" функции⚙️. Соответственно, для более удобной работы с аргументами лучше использовать только остаточные параметры `...rest`. -->

## 拡張演算子 `...spread`

![operators](https://media.giphy.com/media/3o6Mbfd5fQszubehmE/giphy.gif)

パラメータのリストから配列を取得する方法を学びましたが、逆のことを行う必要がある場合もあります。配列を呼び出された関数にプッシュします⚙️。

たとえば、組み込み関数⚙️`Math.max`があります。 リストから最大数を返します：

```jsx live
function learnJavaScript() {
  return Math.max(3, 5, 1, 17, 14, 8, 2, 11)
}
```

### それほど単純ではありません

![Index_finger](https://media.giphy.com/media/4ZcYCubFNk8AUHcZVw/giphy.gif)

数字の配列`[3、5、1]`があるとしましょう。 そのために`Math.max`を呼び出す方法は？

そのように挿入することはできません。`Math.max`は、単一の配列ではなく、数値のリストを取得することを期待しています。

```jsx live
function learnJavaScript() {
  let arr = [3, 5, 1, 17, 14, 8, 2, 11]
  return Math.max(arr) // NaN - 値は未定義になります
}
```

もちろん、手動で数字を入力することもできます。 `Math.max(arr[0], arr[1], arr[2]).`

しかし、第一に、それは見栄えが悪く、第二に、私たちは常にいくつの議論があるかを知っているわけではありません。 それらはたくさんあるかもしれませんし、まったくないかもしれません。

### パラメータ入力

![Transform](https://media.giphy.com/media/xT4uQr9H3EDL7Ha2hq/giphy.gif)

ここで、`...spread`スプレッド演算子が役立ちます。 これは残差パラメータに似ています-`...`も使用しますが、まったく逆になります。

⚙️`...spread`関数が関数呼び出し⚙️で使用されると、`arr`配列オブジェクトが引数のリストに変換されます。

`Math.max`の場合：

```jsx live
function learnJavaScript() {
  let arr = [3, 5, 1, 17, 14, 8, 2, 11]

  return Math.max(...arr) // ... arr演算子は、配列`arr`を引数のリストに変換します
}
```

同様に、複数の反復可能オブジェクトを渡すことができます：

```jsx live
function learnJavaScript() {
  let arr1 = [1, 2, 34, 41]
  let arr2 = [8, 3, 18, 17]
  let arr3 = [2, 4, 16, 38]

  return 'Max = ' + Math.max(...arr1, ...arr2, ...arr3)
}
```

涼しい！ プログラミングへの非常に柔軟なアプローチ。 スプレッド演算子を通常の値と組み合わせることもできます。

### 配列のマージ

![Merger](https://media.giphy.com/media/rytLWOErAX1F6/giphy.gif)

スプレッド演算子`...Spread`を使用して、配列をマージすることもできます：

```jsx live
function learnJavaScript() {
  let arr1 = [3, 5, 7]
  let arr2 = [4, 2, 8]

  let merged = [100, ...arr1, 500, ...arr2]
  let str = '配列: ' + merged

  return <b>{str}</b>
}
```

### 文字列に変換

![Transform](https://media.giphy.com/media/RLVHPJJv7jY1q/giphy.gif)

`... Spread` Spread演算子の⚙️機能は、任意の反復可能なオブジェクトで機能します。

たとえば、展開演算子は、文字列を文字の配列に変換するのに適しています：

```javascript
let str = 'おい, Alex!'
let result = [...str]
```

しばらく様子を見てみましょう。 内部的には、スプレッド演算子はイテレータを使用して要素を反復処理します。 `for..of`と同じように。

`for..of`ループは文字列を文字のシーケンスとして繰り返すため、` ...str`は"P"、 "p"、 "u"、 "v"、 "e"、"t"を生成します。 ..
結果の文字は、標準の配列宣言を使用して配列に収集されます`[...str]。`

このタスクには`Array.from`を使用することもできます。 また、反復可能なオブジェクト（文字列など）を配列に変換します：

```javascript
let str = 'おい'
Array.from(str) // "お" "い"
// Array.fromは、反復可能なオブジェクトを配列に変換します
```


結果は`[...str] .`に似ていますが、` Array.from（obj）`と `[... obj]`には違いがあります：

--`Array.from`は、疑似配列と反復可能配列の両方で機能します。
-`...spread`スプレッド演算子は反復可能オブジェクトで`のみ`動作します。

したがって、`Array.from`はより一般的なメソッドです。

## 合計

![Elipsis](https://media.giphy.com/media/UWXLULrP5KGDC/giphy.gif)

コードに`"... "`が表示されている場合は、`...rest`残差パラメーターまたは`...spread`スプレッド演算子のいずれかです。

それらを区別する方法：

-`...`が関数の引数リストの最後にある場合、これらは「残差パラメータ」です。残りの未指定の引数を収集し、それらから配列を作成します。
-関数呼び出しなどで`...`が発生した場合、それは「拡張演算子」です。関数を初期化するために配列から要素を取得します。

覚えておいてください：

-残差パラメーターは、引数の数が不定の新しい関数を作成するために使用されます。
-spread演算子を使用すると、デフォルトで通常の引数リストで機能する配列を関数に挿入できます。
-一緒に、これらの構成により、値のセットを配列に、またはその逆に簡単に変換できます。

## 問題？

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

に書き込む [Discord](https://discord.gg/6GDAfXn) または電報 [チャット](https://t.me/neuro_coder_group), また、私たちの購読 [ニュース](https://t.me/javascriptapp)

## 質問

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

`...`が関数の引数リストの最後にある場合、次の処理を行っています。

1. 残差パラメータ
2. 拡張演算子
3. ランダムインジケーター

引数の数が不定の関数を作成するには、次を使用します。

1. 残りの`...rest`パラメータ
2. スプレッド演算子`...Spread`
3. 外部呼び出し機能

次を使用して、2つのアレイを1つにマージできます。

1. 拡張演算子
2. 演算子`Array.from`
3. 残留パラメータ

このレッスンでどれだけ学んだかを理解するために、[モバイルアプリ](http://onelink.to/njhc95) このトピックに関する私たちの学校。

![Sumerian school](/img/app.jpg)

## リンク

1. [MDNWebドキュメント。 記事「構文の拡散」](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/spread_syntax)
2. [記事「残差パラメータと拡張演算子」](https://learn.javascript.ru/rest-parameters-spread-operator)
3. [記事「SpreadandRest演算子」](https://medium.com/@stasonmars/%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80-spread-%D0%B8-rest-%D0%BF%D0%B0%D1%80%D0%B0%D0%BC%D0%B5%D1%82%D1%80%D1%8B-%D0%B2-javascript-22eb33cb0825)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/KoDim-React"><img src="https://avatars1.githubusercontent.com/u/72087863?v=4?s=200" width="200px " alt=""/><br /><sub><b>Dmitriy K.</b></sub></a><br /><a href="#mentoring-KoDim-React" title="Mentoring">  </a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px " alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

<!--
Например:
```jsx
function showName() {
  console.log( arguments.length )
  console.log( arguments[0] )
  console.log( arguments[1] )

  // Объект arguments можно перебирать
  // for (let arg of arguments) console.log(arg)
}

// Вывод: 2, Юлий, Цезарь
showName("Юлий", "Цезарь")

// Вывод: 1, Илья, undefined (второго аргумента нет)
showName("Илья")
```
Раньше в языке не было остаточных параметров, и получить все аргументы функции можно было только с помощью arguments. Этот способ всё ещё работает, мы можем найти его в старом коде.
Но у него есть один недостаток. Хотя arguments похож на массив, и его тоже можно перебирать, это всё же не массив. Он не поддерживает методы массивов, поэтому мы не можем, например, вызвать arguments.map(...).
К тому же, arguments всегда содержит все аргументы функции — мы не можем получить их часть. А остаточные параметры позволяют это сделать.
Соответственно, для более удобной работы с аргументами лучше использовать остаточные параметры.
-->
