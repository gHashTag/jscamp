---
id: javascript10
title: オブジェクト
sidebar_label: オブジェクト
---

![@serverSerrverlesskiy](/img/javascript/headers/11.jpg)

オブジェクトは、他の種類のデータを格納および転送するためのクローゼットのようなものです。
JavaScript シンプルなパラダイムで設計されています。コンセプトはシンプルなオブジェクトに基づいています。オブジェクトはプロパティのコレクションであり、各プロパティは名前 (キー) とその名前に関連付けられた値で構成されます。プロパティの値は、オブジェクトのメソッド、またはその他の型と呼ばれる関数であることができます。

![Object](https://media.giphy.com/media/xTiTnFEfyt0vqhQzDi/giphy.gif)

この記事では、オブジェクトの最も基本的なプロパティを見ていきます。 JavaScript, プロパティの作成と変更、列挙。

のオブジェクト JavaScript 通常の連想配列、つまり「ハッシュ」です。それはすべての一致を保存します `"キー: 値"` およびいくつかの標準メソッドがあります。

のオブジェクト JavaScript 現実世界のオブジェクト (人、バス、建物など) のように、特定の値を持ついくつかの名前付き (key壁紙) パラメータ (年齢、名前、髪の色、ステータス) があります。 (15, John, black, 'true')  :

```javascript
let obj = {
  age: 15,
  name: 'John',
  color: 'black',
  student: true
}
```

のオブジェクトメソッド JavaScript - これは、連想配列に追加される単なる関数️です。

```jsx live
function learnJavaScript() {
  let obj = {
    // プロパティ: 値
    age: 15,
    name: 'John',
    // メソッド: 関数
    say: () => 'Hello!'
  }
  return obj.say()
}
```

### オブジェクト作成

![Object](https://media.giphy.com/media/2YaKpvYQEcl1WuJJTl/giphy.gif)

コンピューターで想像できる `オブジェクト` 名前 - プロパティが署名されたキャビネット装置玩具保管の形で (`アクセスキー`). キャビネットの中には、データ (特定の情報) であるボックスがあり、物との類似性により、より小さなオブジェクトさえあるかもしれません。沿って `キー` 目的のボックスは簡単に見つけたり、削除したり、新しいボックスを追加 (書き込み) したりできます。`値`.

![obj01](/img/javascript/12/01.png)

これらは、空のオブジェクトを作成するための 2️⃣ 2️⃣ オプションです。:

```javascript
// 同等の記録
let obj = {}
let person = new Object()
```

Второй вариант очень редко используется в практике.

![obj00](/img/javascript/12/00.png)

## 高度な作成

![Extended](https://media.giphy.com/media/2XflxzlJfoSDycf3BBu/giphy.gif)

プロパティは、オブジェクトの作成時に、フォームの中括弧内のリストを介して直接指定できます。 {..., `キー: 値,` ...} 複雑なオブジェクトを作成します:

```jsx live
function learnJavaScript() {
  const obj = {
    age: 15,
    name: 'John',
    color: 'black',
    passport: {
      serial: 5721,
      number: 258963,
      date: '27.10.2015'
    },
    student: true
  }

  return obj.passport.date
}
```

作成された寒暖装置あえ️ オブジェクトには、特定の値を持つ 5 つのプロパティが含まれています。そのうちの 1 つは、組み込みオブジェクトであるパスポート データです。オブジェクトの離れたプロパティまたはメソッドの呼び出しがどのように行われるかに注意してください。パスポート番号を取り戻してみてください。

## プロパティの追加

![Adding](https://media.giphy.com/media/3CZ2iGe1ByKfhZxaD7/giphy.gif)

オブジェクトにプロパティを追加するための 2️⃣ 構文があります。 1️⃣ 最初はピリオド、2番目は角かっこ:

```javascript
// 同等の記録
obj.age = 15
obj['age'] = 15
```

```jsx live
function learnJavaScript() {
  let obj = {
    name: 'John'
  }

  obj.age = 15

  return obj.age
}
```

角括弧は主に次の場合に使用されます。 `プロパティ名` (properties) にあります `変数`  :

```javascript
let nameProp = 'age'
obj[nameProp] = 15
```

ここで変数を介して  `nameProp` プロパティの名前を設定します `"age"`, これは、ある連想配列のキーです。 `値 15`.

```jsx live
function learnJavaScript() {
  let obj = {
    name: 'John'
  }

  let nameProp = 'age'
  obj[nameProp] = 15

  return obj.age
}
```

## プロパティへのアクセス

![Door](https://media.giphy.com/media/l378znZcUM7b6VDyM/giphy.gif)

プロパティは、それにアクセスすることによってアクセスされます  :

```jsx live
function learnJavaScript() {
  let obj = {} // オブジェクトが空です
  obj.age = 17 // 同等 obj['age']=17 またはすぐに obj={age:17}

  let result1 = obj.age // オプション 1
  let result2 = obj['age'] // オプション 2

  return result1 + ' または ' + result2
}
```

オブジェクトの場合 `そのようなプロパティはありません`, 結果は次のようになります `'undefined'`. ブラウザのコンソールで確認してください。

```javascrript
let obj = {}
obj.nokey
```

![nokey](/img/javascript/15.jpg)

存在しないプロパティにアクセスした場合、エラーは発生しません。単に特別な値を返します `undefined`. 関数内にキーワード внутри がない場合 `return`, 同じ値が返されます `undefined` - 何もない。



## プロパティの削除

![Delete](https://media.giphy.com/media/5xaOcLwEvFOizxHVyVy/giphy.gif)

固執プロパティの演算子を削除します `delete`. 前の例からパスポート番号を削除してみてください。

コンソールで前の例からオブジェクトを作成します。

```javascript
const obj = {
  age: 15,
  name: 'John',
  color: 'black',
  passport: {
    serial: 5721,
    number: 258963,
    date: '27.10.2015'
  },
  student: true
}
```

ネストされたオブジェクトを削除します `passport`

```javascript
delete obj.passport
```

さて、私たちがそれに目を向けると、結果として得られます `undefined`

```javascript
obj.passport
```

![delete obj](/img/javascript/16.jpg)

## プロパティの削除

![Description](https://media.giphy.com/media/3ohzAqLk7azQ0O6RvW/giphy.gif)

他の言語と同じように、プログラミング装置 JavaScript 有る `メソッド`.

たとえば、オブジェクトを作成してみましょう `sport` メソッドで直接 `run`:

```jsx live
function learnJavaScript() {
  let sport = {
    run: n => 'John' + ' 走った ' + n + ' メートル!'
  }

  return sport.run(300)
}
```

### メソッドの追加

![Add](https://media.giphy.com/media/5ns6077LTlGACuwRQR/giphy.gif)

既存のオブジェクトにメソッドを追加するのは簡単、関数を代入しております `function(n) { ... }` 財産 `sport.run`.

```jsx live
function learnJavaScript() {
  let sport = {}

  sport.run = n => 'アスリートが走った ' + n + ' メートルでした ' + 'Nikita'

  return sport.run(350)
}
```

これは、クラスやインスタンス化などについてではありません。シンプル - いつでも新しいメソッドを追加したり、既存のメソッドをオブジェクトに削除したりできます。

## オブジェクト プロパティのループ

![enumeration](https://media.giphy.com/media/h5FIFDs6rXLpWlWWZJ/giphy.gif)

オブジェクトのすべてのプロパティを反復処理するには、特別なタイプの構築が使用されます。 `for .. in`:

```javascript
for(let key in obj) {
  // key - プロパティ名
  // obj[key] - 資産価値
  ...
}
```

例えば  :

```jsx live
function learnJavaScript() {
  let result = ''

  const obj = {
    age: 15,
    b: 'true',
    color: 'red'
  }

  for (let key in obj) {
    result += key + ':' + obj[key] + ' '
  }

  return result
}
```

そして密かに、正直言って、ほとんどすべての変数  環境内のミニオブジェクトです JavaScript. したがって、それらを使用することを恐れないでください。.

## 問題?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

に書き込みます [Discord](https://discord.gg/6GDAfXn) または電報 [チャット](https://t.me/neuro_coder_group), また、私たちの [ニュース](https://t.me/javascriptapp)

## 質問と回答

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

コマンドによって空のオブジェクトが作成されます:

1. `let obj = {}`
2. `function obj()`
3. `let x = 10`

オブジェクトは次の一致を保存します。

1. key: 値
2. name: 姓
3. 変数=値

特定のキーに値を割り当てるための構文 (プロパティ):

1. `color() = "green"`
2. `obj.color = "red"`
3. `function color () => "yellow"`

のオブジェクトメソッド JavaScript - これは

1. 連想配列に関数を追加しただけ
2. 外部関数
3. オブジェクト外で記述される変数

オブジェクト プロパティのループ

1. `for (let i = 0; i <= 100; i++) { sum += i }`
2. `for(let key in obj) { }`
3. `while (условие) { }`

このレッスンでどれだけ学んだかを理解するために、次のテストを受けてください。[モバイルアプリ](http://onelink.to/njhc95) このトピックに関する私たちの学校。

![Sumerian school](/img/app.jpg)

## リンク:

1. [MDN web doc. Developer.mozilla.org - 記事「データ型 JavaScript とデータ構造"](https://developer.mozilla.org/ru/docs/Web/JavaScript/Data_structures)
2. [MDN web doc. Developer.mozilla.org - 記事 "オブジェクトの初期化"](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Object_initialize)
3. [Статья "Object Types"](https://www.javascript.express/types/object_types)
4. [Статья "Объекты", ウェブサイト Learn.javascript.ru](https://learn.javascript.ru/object)
5. [十代の若者たちのためのコード: プログラミングの完全な初心者向けガイド、ボリューム 1: Javascript - Jeremy Moritz ](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/KoDim-React"><img src="https://avatars1.githubusercontent.com/u/72087863?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy K.</b></sub></a><br /><a href="#mentoring-KoDim-React" title="Mentoring">  </a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)