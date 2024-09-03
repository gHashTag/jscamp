---
id: javascript17
title: 配列
sidebar_label: 配列
---

![@serverSerrverlesskiy](/img/javascript/headers/18.jpg)

順序付けられたコレクションを格納するために、配列`Array`と呼ばれる特別なデータ構造があります。

![Storage](https://media.giphy.com/media/3orif6FORJ98Z11xzq/giphy.gif)

'Array'は、1番目、2番目、3番目の要素などのデータの順序付けられたコレクションです。 存在する。 たとえば、ユーザー、製品、サイト要素などのリストを格納する必要があります。

## 創作

![create](https://media.giphy.com/media/3oEduXdm2gjnrsJBOo/giphy.gif)

空の配列を作成するには、2️⃣次の2つのオプションがあります:

```javascript
let arr = new Array(5)
// new Array(5)-指定された長さの要素なしで配列を作成します（このようにアクセスすることはできません。
let arr = []
```

2️⃣構文の第二のバージョンは、ほとんどの場合、使用されています  :

```jsx live
function learnJavaScript() {
  let fruits = ['アップル', 'オレンジ', 'プラム']

  return fruits.toString()
}
```

配列要素には、ゼロから始まる番号が付けられます0️⃣。

角括弧でその番号を指定することで要素を取得できます  :

```jsx live
function learnJavaScript() {
  let fruits = ['アップル', 'オレンジ', 'プラム']

  return fruits[0]
}
```

🖊 ️要素を置き換えることができます:

```javascript
fruits[2] = '梨' // 今 ["アップル", "オレンジ", "梨"]
```

...または、既存の配列に新しいものを追加します :

```jsx live
function learnJavaScript() {
  let fruits = ['アップル ', 'オレンジ ', 'プラム ']
  fruits[2] = '梨 '
  fruits[3] = 'レモン ' // 今 ["アップル", "オレンジ", "梨", "レモン"]

  return fruits
}
```

## 長さ

配列要素の総数は、その'に含まれています。length'プロパティ:

```jsx live
function learnJavaScript() {
  let fruits = ['アップル', 'オレンジ', 'プラム']

  return fruits.length
}
```

'Length'プロパティは、配列が変更されると自動的に更新されます。 正確には、これは配列要素の数ではなく、最大の数値インデックスに1を加えたものです。

![Update](https://media.giphy.com/media/FP47IFqWyXfdKYU6VG/giphy.gif)

たとえば、大きなインデックスを持つ唯一の実数要素は、配列に可能な最大の長さを与えます  :

```jsx live
function learnJavaScript() {
  let fruits = []
  fruits[155] = 'アップル'

  return fruits.length // 156
}
```

通常、この方法では配列を使用しないことに注意してください。

`Length`プロパティに関するもう一つの興味深い事実は、それが上書きされる可能性があるということです。

手動で増やすと、興味深いことは何も起こりません。 しかし、それを減らすと、配列は短くなります。 この例から理解できるように、このプロセスは不可逆的です  :

```jsx live
function learnJavaScript() {
  let arr = [1, 2, 3, 4, 5]

  arr.length = 2 // 二つの要素に短縮
  //console.log( arr )  // [1, 2]

  arr.length = 5 // 私たちは戻ります length 
  //console.log( arr[3] )  // undefined: 値が復元されていません!

  return '実際の配列は短縮されています:' + arr
}
```

したがって、配列をクリアする最も簡単な方法は次のとおりです – `arr.length = 0` .

## 要素のタイプ

![Storage](https://media.giphy.com/media/2sYaePC3iVWYBNxaVj/giphy.gif)

この配列には、数値、ブール値、文字列、オブジェクト、または整数関数など、任意の型の要素を格納できます⚙️:

例えば  :

```jsx live
function learnJavaScript() {
  let arr = [
    'アップル',
    { name: 'ニキータ' },
    true,
    function () {
      return 'こんにちは'
    }
  ]
  // インデックス1{object}を持つ要素を取得し、そのプロパティを読み取ります
  let x = arr[1].name // 名前ニキータ
  // インデックス3（関数）を持つ要素を取得して実行します
  let result1 = arr[3] // 関数自体
  let result2 = arr[3]() // 'こんにちは'

  return '第三のインデックスを持つ第四の要素の値: ' + result2
  // + '. 関数自体: ' + result1
}
```

注意を払う `result1 = arr[3]` テキストを含む  関数 ⚙️, しかし、 `result2 = arr[3]()` 実行された関数の結果 ⚙️ - `()` 私たちはそれを起動しています.

## メソッド `push/pop`

![binarycode](https://media.giphy.com/media/fV0oSDsZ4UgdW/giphy.gif)

`Стек` - 配列をデータ構造として使用するバリアント。

それは2つのタイプの操作を支えます 2️⃣:

- `push` 最後に➕要素を追加します.

![Add](https://media.giphy.com/media/Yqo5mjWTLGlVOIP8Dc/giphy.gif)

- `pop` 最後の要素を削除します➖ .

![Delete](https://media.giphy.com/media/VD4Bt6FyYWcWj0LzDK/giphy.gif)

したがって、新しい要素は常に"終わり"から追加または削除されます.

積み重ねの例は通常ピラミッドである:新しいリングは上に置かれ、上から余りに取られる。

'キュー'は、配列の最も一般的な使用法の1つです。   コンピュータサイエンスの分野では、これは要素の順序付けられたコレクションの名前です。

## 配列の末尾を操作する方法:

### push

![Add to](https://media.giphy.com/media/21ODeWspDCgZNAoCIp/giphy.gif)

配列の最後に要素を追加します➕  :

```jsx live
function learnJavaScript() {
  let fruits = [' アップル', ' オレンジ']

  fruits.push(' 梨')

  return '配列: ' + fruits // アップル, オレンジ, 梨
}
```

### pop

![Delete](https://media.giphy.com/media/26ybwwiZmci3DJdYs/giphy.gif)

配列から最後の要素を削除し、それを返します➖  :

```jsx live
function learnJavaScript() {
  let fruits = [' アップル', ' オレンジ', ' 梨']

  let delFruits = fruits.pop() // "pear"を削除し、それを変数に返します delFruits

  return '要素が削除されました = ' + delFruits + '. 配列は残ります: ' + fruits // アップル, オレンジ
}
```

## 配列の先頭を操作する方法:

![start](https://media.giphy.com/media/QJvwBSGaoc4eI/giphy.gif)

### shift

配列から最初のものを削除し、それを返します:

![delete](https://media.giphy.com/media/4Z1XJumqDgvI9b1VZJ/giphy.gif)

```jsx live
function learnJavaScript() {
  let fruits = ['アップル ', 'オレンジ ', '梨 ']
  fruits.shift() // リンゴの取り外し

  return fruits
}
```

### unshift

配列の先頭に要素を追加します➕:

![Plus](https://media.giphy.com/media/LgC9OQ53v5mFi/giphy.gif)

```jsx live
function learnJavaScript() {
  let fruits = ['アップル ', 'オレンジ ', '梨 ']
  fruits.unshift('アプリコット ')

  return fruits
}
```

メソッド `push` と `unshift` 彼らは追加することができます ➕ 一度にいくつかの要素  :

```jsx live
function learnJavaScript() {
  let fruits = ['アップル']

  fruits.push('オレンジ', '梨')
  fruits.unshift('パイナップル', 'レモン')

  return '配列内 ' + fruits.length + ' 要素. ' + ' 配列: ' + fruits // ["パイナップル", "レモン", "アップル", "オレンジ", "梨"]
}
```

## 配列の内部構造

![cupboard](https://media.giphy.com/media/b90TnygrKqYqk/giphy.gif)

配列はオブジェクトの特別な亜種です。 プロパティへのアクセスに使用される角括弧 `arr[0]` – これは基本的に通常の構文です   キーアクセス, どのように `obj[key],` どこの役割で `obj` 私達は持っています `arr`, そして、キーとして-数値インデックス。

配列は、順序付きのデータコレクションとプロパティを操作するための特別なメソッドを提供するため、オブジェクトを拡張します `length.` しかし、基礎はまだオブジェクトです。

JavaScriptでは、配列はオブジェクトであるため、オブジェクトのように動作することを覚えておく必要があります。

たとえば、配列は参照によってコピーされます  :

```jsx live
function learnJavaScript() {
  let fruits = [' レモン']

  let copy = fruits // 参照によってコピーされます（2つの変数は同じ配列を参照します）

  copy.push(' 梨') // 配列は、一つのコマンドで参照によって変更されます

  return '1配列: ' + fruits + ' 2配列: ' + copy // レモン, 梨 - 今、二つの要素
}
```

実際に配列を特別なものにするのは、その内部表現です。 JavaScriptエンジンは、連続したメモリ領域に配列要素を次々に格納しようとします。 配列を非常に高速に動作させる他の最適化方法があります。

しかし、配列を"データの順序付けられたコレクション"として扱うのをやめ、それを通常のオブジェクトとして使用し始めると、それらのすべてが有効

たとえば、技術的には次のことができます:

```javascript
let fruits = [] // 空の配列の作成

fruits[99999] = 5 // 必要な配列の長さをはるかに超える冗長インデックスを持つプロパティの作成

fruits.age = 25 // 任意の名前のプロパティを作成する
```

これは、配列がオブジェクトに基づいているため可能です。 私たちはそれに任意のプロパティを割り当てることができます。

:::note 配列の誤った使用のためのオプション！

- 数値以外のプロパティの追加 (インデックス test), 例えば: arr.test = 5
- "穴"の作成, たとえば、次のように追加します arr[0], その後 arr[1000] (それらの間には何もありません)
- 配列を逆の順序で入力します。: arr[1000], arr[999] と そう.

:::

配列は、注文されたデータを操作できる特別な構造体と見なされる必要があります。 任意のキーが必要な場合は、通常のオブジェクトの方が適している可能性があります。{}.

## 有効性

![Fast](https://media.giphy.com/media/3oriNYQX2lC6dfW2Ji/giphy.gif)

メソッド `push/pop` 迅速に実行され、メソッド `shift/unshift` – ゆっくりと.

配列の先頭よりも配列の末尾で作業する方が速いのはなぜですか？ 実行中に何が起こるか見てみましょう:

```javascript
fruits.shift() // 最初の要素を最初から削除する
```

番号0の要素を取得して削除するだけでは十分ではありません。 また、残りの要素に再番号を付ける必要があります。

操作 `shift` 3つのアクションを実行する必要があります:

- インデックス0の項目を削除する

![Delete](https://media.giphy.com/media/VIzs0jgs8KmgVeTknN/giphy.gif)

- すべての要素を左に移動し、それらに番号を付け直し、`1`を`0`に、`2`を`1`に置き換えます と そう.

![Move](https://media.giphy.com/media/jSQcEjcwG53WooptHz/giphy.gif)

- プロパティの更新 `length`

配列に含まれる要素が多いほど、それらを移動するのにかかる時間が長くなり、より多くのメモリ操作が必要になります。

そして、削除についてはどうですか `pop`? 彼は何も動かす必要はありません。 配列の最後にある要素を削除するには、メソッド `pop` インデックスをクリアし、値を減らします `length`. 残りの要素は同じインデックスで残ります。

```javascript
fruits.pop() // 最後から1つの要素を削除する
```

方法 `pop` 移動を必要としません。 それが非常に迅速に実行される理由です。

この方法は同様に機能します `push`.

## 要素を反復処理する

![Object](https://media.giphy.com/media/26gs9kSN6d5PxSsQU/giphy.gif)

配列要素を反復処理する最も古い方法の1つはループです `for( )` デジタルインデックスによる  :

```jsx live
// prettier-ignore
function learnJavaScript() {
  let result = ''
  let arr = ['アップル', 'オレンジ', 'キウイ']
  
  for (let i = 0; i < arr.length; i++) // を介して要素を通過します for( )
  result += arr[i] + ' '

  return result // アップル, オレンジ, キウイ
}
```

しかし、配列の場合、別のループオプションも可能です, `for..of`  :

```jsx live
function learnJavaScript() {
  let result = ''
  let fruits = ['アップル', 'オレンジ', 'プラム']

  for (let fruit of fruits) {
    // を介して値を渡します `for..of`
    result += fruit + ' '
  }
  return result // アップル, オレンジ, プラム
}
```

サイクル `for..of` 現在の要素の数にアクセスすることはできませんが、その値にのみアクセスできますが、ほとんどの場合、これで十分であり、また短くなります。

<!-- ## Псевдомассивы

![Spiderman](https://media.giphy.com/media/l36kU80xPf0ojG0Erg/giphy.gif)

В браузере и других программных средах также существуют так называемые "псевдомассивы" – объекты, которые выглядят, как массив. То есть, у них есть свойство `length` и индексы, но они также могут иметь дополнительные нечисловые свойства и методы, которые нам обычно не нужны. Тем не менее, цикл `for..in` выведет и их. Поэтому, если нам приходится иметь дело с объектами, похожими на массив, такие "лишние" свойства могут стать проблемой.

Технически, так как массив является объектом, можно использовать и вариант `for..in` для правильного массива  :

```jsx live
function learnJavaScript() {
  let result = ''
  let arr = ['Яблоко', 'Апельсин', 'Груша', 'Лимон']

  for (let key in arr) {
    // проходит по элементам через `for..in`
    result += arr[key] + ' '
  }
  return result // Яблоко, Апельсин, Груша, Лимон
}
```

Цикл `for..in` оптимизирован под произвольные объекты, не массивы, и поэтому в 10-100 раз медленнее. Увеличение ➕ скорости выполнения может стать проблемой.

В целом, не следует использовать цикл `for..in` для массивов. Так же существуют скрытые недостатки этого способа:

- цикл `for..in` выполняет перебор всех свойств объекта, а не только цифровых. -->

## 多次元配列

![Matryoschka](https://media.giphy.com/media/XuPaGVKyJ6eyI/giphy.gif)

配列には、配列でもある要素を含めることができます。 これは、作成するために使用することができます たとえば、ストレージ用の多次元配列  行列:

```jsx live
function learnJavaScript() {
  let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]

  return matrix[1][1] // 5, 中心的な要素
}
```

## 合計

![remember](https://media.giphy.com/media/l4pTfqyI6TCjUW4Yo/giphy.gif)

配列は、順序付けされた要素のセットで動作するように設計された特別なタイプのオブジェクトです。

広告:

```javascript
// 角括弧 (通常は)
let arr = [item1, item2...]

// new Array (ごくまれに)
let arr = new Array(item1, item2...)
```

チャレンジ `new Array(number)` 作成します  指定された長さの配列ですが、要素はありません。

プロパティ `length` 配列の長さを反映します。

次の操作を使用して、配列を双方向キューとして使用できます:

- `push(...items)` 配列➕の末尾に項目を追加します。
- `pop()`配列の最後にある➖要素を削除し、それを返します。
- `shift()` удаляет 配列の先頭にある➖要素を削除し、それを返します。
- `unshift(...items)` 配列➕の先頭に項目を追加します。

配列要素を反復処理するには:

- `for (let i=0 i<arr.length i++)` – 古いブラウザとの互換性、最速で動作します。
- `for (let item of arr)` – 現代の構文    要素値に対してのみ(インデックスへのアクセスはありません)。
- `for (let i in arr)` – 配列には絶対に使用しないでください！

## 問題?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

に書き込む [Discord](https://discord.gg/6GDAfXn) または電報 [чат](https://t.me/neuro_coder_group), そしてまた私達のを予約購読して下さい [новости](https://t.me/javascriptapp)

## 質問

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

配列はです。..

1. "データの順序付けられたコレクション"を持つオブジェクトの亜種
2. 内部機能
3. 「順序付けられていないデータのコレクション」を持つオブジェクトの亜種

空の配列が作成されています:

1. "データの順序付けられたコレクション"を持つオブジェクトの亜種
2. 内部機能
3. 「順序付けられていないデータのコレクション」を持つオブジェクトの亜種

配列の長さは、プロパティによって決定できます:

1. `pop()`
2. `push()`
3. `length`

配列は要素を格納できます:

1. 任意のタイプ
2. 数値
3. 文字列

配列の最後に要素を追加する:

1. `push()`
2. `pop()`
3. `shift()`

配列の先頭にある要素を削除する:

1. `pop()`
2. `shift()`
3. `unshift()`

あなたがこのレッスンをどれだけ学んだかを理解するために、テストを受けてください [мобильном приложении](http://onelink.to/njhc95) このトピックに関する私たちの学校。

![Sumerian school](/img/app.jpg)

## リンク集

1. [Статья "Массивы"](https://learn.javascript.ru/array)
2. [MDN web doc. Статья "Массивы"](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array)
3. [Статья "JavaScript массивы"](https://basicweb.ru/javascript/js_array.php)
4. [Код для подростков: прекрасное руководство по программированию для начинающих, том 1: Javascript - Jeremy Moritz ](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)

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
### toString
Массивы по-своему реализуют метод toString, который возвращает список элементов, разделённых запятыми.

Например:
```javascript
let arr = [1, 2, 3]

console.log( arr )  // 1,2,3
console.log( String(arr) === '1,2,3' )  // true
```

Давайте теперь попробуем следующее:
```javascript
console.log( [] + 1 )  // "1"
console.log( [1] + 1 )  // "11"
console.log( [1,2] + 1 )  // "1,21"
```

Массивы не имеют ни Symbol.toPrimitive, ни функционирующего valueOf, они реализуют только преобразование toString, таким образом, здесь [] становится пустой строкой, [1] становится "1", а [1,2] становится "1,2".

Когда бинарный оператор плюс "+" добавляет что-либо к строке, он тоже преобразует это в строку, таким образом:
```javascript
console.log( "" + 1 )  // "1"
console.log( "1" + 1 )  // "11"
console.log( "1,2" + 1 )  // "1,21"
```
-->
