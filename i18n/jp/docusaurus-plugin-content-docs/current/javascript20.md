---
id: javascript20
title: 配列とオブジェクトの破棄
sidebar_label: 配列とオブジェクトの破棄
---

![@serverSerrverlesskiy](/img/javascript/headers/30.jpg)

JavaScriptでの破棄は、配列やオブジェクトからデータを1行で簡単に抽出できる割り当て構文です。

## オブジェクトの破壊

![object](https://media.giphy.com/media/3o85xx7Yll3UyNVQf6/giphy.gif)

```jsx live
function learnJavaScript() {
  // オブジェクトを作成する `fruit`
  let fruit = {
    title: 'banana',
    group: 'tropical',
    quantity: 5
  }

  // オブジェクトの破壊 `fruit`
  let { title, group, quantity } = fruit

  // 画面に表示する `title`
  return title
}
```

`title`、` group`、`quantity`プロパティは`fruit`オブジェクトの構造を繰り返し、それらの値を`{...}`にある同一の変数🔔にコピーします。 したがって、 `{...}`で変数🔔を交換する場合、コードも同様に機能します。上記の例で変数🔔を交換してみてください。

### ネストされたオブジェクト

![bookmark](https://media.giphy.com/media/3og0IDyqVFNH7qFpAI/giphy.gif)

ネストされたオブジェクトを分解することもできます。

```jsx live
function learnJavaScript() {
  let fruit = {
    title: 'banana',
    group: 'tropical',
    quantity: {
      store: 5,
      storeHaus: 99
    }
  }

  let {
    title,
    quantity: { store: s1, storeHaus: s2 }
  } = fruit

  return title + ', ' + parseFloat(s1 + s2)
}
```

### 他の名前

プロパティ名以外の変数名を使用する必要がある場合は、次の構文が機能します。

```jsx live
function learnJavaScript() {
  let fruit = {
    title: 'banana',
    group: 'tropical',
    quantity: 5
  }
  // title -> a; group -> b; quantity -> c
  let { title: a, group: b, quantity: c } = fruit

  return a
}
```

### デフォルト値

`{...}`に見つからない変数🔔プロパティを書き込むと、値`undefined`が割り当てられます。 変数にデフォルト値を割り当てるには🔔、この値を変数に割り当てることができます。 プロパティが見つかった変数🔔に値を割り当てようとすると、プロパティの値が割り当てられます。 例を見てみましょう。

![Dafault](https://media.giphy.com/media/3oEduLzte7jSNmq4z6/giphy.gif)

```jsx live
function learnJavaScript() {
  let fruit = {
    title: 'banana'
  }
  let { title = 'lime', group, quantity = 5 } = fruit

  return title + ', ' + group + ', ' + quantity
}
```

`title`は、プロパティの値を表示しますが、割り当てた値は表示しません。 `group`プロパティは`fruit`オブジェクトに存在せず、変数🔔に値を割り当てていません。 `quantity`プロパティも存在しませんが、変数🔔に値`5`を割り当てました。

### 残り

![octatok](https://media.giphy.com/media/hvddF1vHatFIgQspUB/giphy.gif)

オブジェクトから1つの変数🔔を取得し、残りを別のオブジェクトにグループ化する必要がある場合は、残りのプロパティを持つオブジェクトが作成される変数🔔の前に`...`を使用します。

```jsx live
function learnJavaScript() {
  let fruit = {
    title: 'banana ',
    group: 'tropical ',
    quantity: 5
  }
  let { group, ...prop } = fruit

  return prop.title + group
}
```

## アレイの破壊

配列の破棄は、オブジェクトと同じ方法で行われます。 唯一の違いは、配列要素の値が、要素が定義されている順序で変数🔔に割り当てられることです。

![Take](https://media.giphy.com/media/IuBlckSD7dQv6/giphy.gif)

```jsx live
function learnJavaScript() {
  // アレイを作成する `fruit`
  let fruit = ['banana', 'tropical', 5]

  // アレイを破壊する `fruit`
  let [title, group, quantity] = fruit

  // 画面に表示する
  return `${title}, ${group}, ${quantity}`
}
```

### 残り

オブジェクトとの類推により、残りは機能します。

```jsx live
function learnJavaScript() {
  let fruit = ['banana ', 'tropical ', 5]

  let [name, ...prop] = fruit

  return `${name}, ${prop}`
}
```

### 配列コピー

配列の🏗️コピーを作成する例。

![Copia](https://media.giphy.com/media/GI1KnTxySlrCE/giphy.gif)

```jsx live
function learnJavaScript() {
  let fruit = ['banana ', 'tropical ', 5]

  let _fruit = [...fruit]

  return _fruit
}
```

### アレイのユニオン

![add](https://media.giphy.com/media/3gMrhfFtWHq9XxtqPy/giphy.gif)

配列を1つに結合する例。

```jsx live
function learnJavaScript() {
  let name = ['banana '],
    prop = ['tropical ', 5],
    fruit = [...name, ...prop]

  return fruit
}
```

## 問題？

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

に書き込む [Discord](https://discord.gg/6GDAfXn) または電報 [チャット](https://t.me/jscampapp), また、私たちの購読 [ニュース](https://t.me/javascriptapp)

## 質問

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

破壊は？

1. 働き
2. 構文
3. オブジェクト

オブジェクトを破棄する場合、変数をオブジェクト内と同じ順序で配置する必要がありますか？

1. はい
2. いいえ

オブジェクトに同一のプロパティが見つからない場合、変数には何が割り当てられますか？

1. `error`
2. `undefined`
3. `unknown`

オブジェクトを分解するとき、オブジェクト内の要素の順序は重要ですか？

1. はい
2. いいえ

このレッスンでどれだけ学んだかを理解するために、[モバイルアプリ](http://onelink.to/njhc95) このトピックに関する私たちの学校。

![Sumerian school](/img/app.jpg)

## リンク

1. [Learn JavaScript](https://learn.javascript.ru/destructuring-assignment)
2. [MDN Web Docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
3. [ES6での破壊](https://medium.com/@stasonmars/деструктуризация-в-es6-полное-руководство-b865bb71f376)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr> 
    <td align="center"><a href="https://github.com/IIo3iTiv"><img src="https://avatars1.githubusercontent.com/u/72025062?v=4?s=200" width="200px;" alt=""/><br /><sub><b>IIo3iTiv</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=IIo3iTiv" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)
