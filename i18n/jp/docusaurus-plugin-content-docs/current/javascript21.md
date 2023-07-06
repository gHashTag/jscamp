---
id: javascript21
title: '閉鎖'
sidebar_label: 閉鎖
---

![@serverSerrverlesskiy](/img/javascript/headers/20.jpg)

クロージャは、外部関数が終了した後でも外部関数⚙️にアクセスできる関数⚙️です。 内部関数が外部関数のスコープにアクセスできるようにするためにクロージャが必要です️が、同時に外部環境から内部関数の変数へのアクセスを閉じます⚙️。

![Snake](https://media.giphy.com/media/3oFzmdjqH15YebLQ52/giphy.gif)

クロージャーを作成するための要件：

1. コードで呼び出される外部関数。
2. 外部関数には内部関数があります。
3. その結果、outer関数はinner関数を返します。

例を使用してクロージャーを作成することを検討してください。

```jsx live
function learnJavaScript() {
  const getFruit = () => {
    let fruit = 'Banana',
      show = () => {
        return fruit
      }
    return show
  }
  let showFruit = getFruit()
  return showFruit()
}
```

1. この例では、外部関数`getFruit`を作成しました。
2. `getFruit`内に、内部関数`show`を作成しました。
3. その結果、`getFruit`関数は`show`関数を返します。
4. 次にコードで、`getFruit`関数の結果を`showFruit`変数に割り当てました。
5. なぜなら `getFruit`の結果は関数であり、`showFruit`は変数ではなくになります。
6. 全体の構築の結果、`getFruit`関数内にある変数`fruit`が閉じられました。 これで、この変数の値しかわかりません、変更することはできません。

## 例

![Math](https://media.giphy.com/media/xT1Ra5h24Eliux3UVq/giphy.gif)

理解するために、より多くの例を検討してください。

### カウンター

カウンター、クロージャーの仕事を考えることができる最も簡単な例。

<!-- ![Counter](https://media.giphy.com/media/QSNvClMu5zWJW/giphy.gif) -->

```jsx live
function learnJavaScript() {
  const makeCounter = () => {
    let x = 0
    return () => {
      return ++x
    }
  }
  const counter = makeCounter()
  return counter()
}
```

### 改善されたカウンター

![Counter](https://media.giphy.com/media/3o6Zt6fzS6qEbLhKWQ/giphy.gif)

結果として、1つの機能⚙️ではなく、一度に複数の機能があります。

```jsx live
function learnJavaScipt() {
  let makeCounter = () => {
    let x = 0
    return {
      inc: () => {
        return ++x
      },
      dec: () => {
        return --x
      },
      val: () => {
        return x
      }
    }
  }

  let counter = makeCounter()
  counter.inc() // 1
  counter.inc() // 2
  counter.inc() // 3
  counter.inc() // 4
  counter.dec() // 3
  return counter.val()
}
```

### ループで閉じる

![circle](https://media.giphy.com/media/u5s2ezDicmyuA/giphy.gif)

```jsx live
function learnJavaScript() {
  let res = []
  for (let i = 0; i < 5; i++) {
    res[i] = () => {
      return i
    }
  }
  return res[2]()
}
```

### フレーズを覚えています

![l](https://media.giphy.com/media/l4pTfqyI6TCjUW4Yo/giphy.gif)

```jsx live
function learnJavaScript() {
  let phrase = x => {
    return y => {
      return x + ' ' + y
    }
  }

  hello = phrase('Hello')
  return hello('World')
}
```

## 合計

クロージャーはJavaScriptの最も重要な基本概念の1つであり、すべてのJS開発者が理解する必要があります。 💡クロージャーを理解することは、効率的で高品質のアプリケーションを作成するためのステップの1つです。

## 問題？

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

に書き込む [Discord](https://discord.gg/6GDAfXn) または電報 [チャット](https://t.me/jscampapp), また、私たちの購読 [ニュース](https://t.me/javascriptapp)

## 質問
![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

クロージャとは何ですか？

1. デザイン
2. 機能
3. コンセプト

何が何で終わりますか？

1. スコープの機能
2. 関数の変数

閉じた変数にアクセスするには何をする必要がありますか？

1. 説明して使用します
2. 利用可能です
3. 変数は表示のみ可能

このレッスンでどれだけ学んだかを理解するために、[モバイルアプリ](http://onelink.to/njhc95) このトピックに関する私たちの学校。

![Sumerian school](/img/app.jpg)

## リンク

1. [Learn JavaScript](https://learn.javascript.ru/closures)
2. [MDN Web Docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures)
3. [JavaScriptクロージャ](https://medium.com/@stasonmars/понимаем-замыкания-в-javascript-раз-и-навсегда-c211805b6898)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr> 
    <td align="center"><a href="https://github.com/IIo3iTiv"><img src="https://avatars1.githubusercontent.com/u/72025062?v=4?s=200" width="200px;" alt=""/><br /><sub><b>IIo3iTiv</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=IIo3iTiv" title="Documentation">  </a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![EnglishMoji!](/img/logo/englishmoji.png)](https://link-to.app/xvh7Ush9kl)
