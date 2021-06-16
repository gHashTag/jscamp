---
id: javascript13
title: デフォルトパラメータ
sidebar_label: デフォルトパラメータ
---

![@serverSerrverlesskiy](/img/javascript/headers/25.jpg)

デフォルトパラメータを使用すると、関数⚙️が引数なしで呼び出された場合、またはパラメータに値が明示的に渡された場合に、関数⚙️のデフォルト値のパラメータを設定できます。 `undefined`.

![Teacher](https://media.giphy.com/media/3ohc10nduj1irsuzgA/giphy.gif)

JavaScriptでは、呼び出されたときに値が渡されない関数パラメーター⚙️がデフォルト値を取ります `undefined`. ただし、場合によっては、別のデフォルト値を設定すると便利なことがあります。これは、デフォルトのオプションが意図されている場所です。

## 構文

![book](https://media.giphy.com/media/l0HlOBZcl7sbV6LnO/giphy.gif)

```jsx live
function learnJavaScript() {
  const multiply = (a, b = 1) => {
    //デフォルト値は b 同様に 1
    return a * b
  }
  //もし b になります undefined, その後、デフォルト値が割り当てられます
  return multiply(5, 2) // カンマ、2番目の引数を削除して、 5 + 1
}
```

### 他の「偽の」値を渡す

![basketball](https://media.giphy.com/media/3oEdv5e5Zd2gsczAhG/giphy.gif)

以外の値がある場合 `undefined`, 次のような「false」値の1つを含む false ❎ , `0`, `""`, `''`,`null`, `NaN`, この場合、デフォルト値はパラメータに割り当てられません。この場合、これらの「誤った値」をキャッチするコードを自分で作成する必要があります。

## の例

![Math](https://media.giphy.com/media/xT1Ra5h24Eliux3UVq/giphy.gif)

デフォルトのパラメーターでは、前の（リストの左側にある）パラメーターの値を使用できます：

```jsx live
function learnJavaScript() {
  const greet = (name, greeting, message = greeting + ' ' + name) => {
    return [name, greeting, message]
  }

  return greet('David ', 'Hi ')
}
```

デフォルトパラメータがある場合とない場合の関数の例 👇 :

```jsx live
function learnJavaScript() {
  const withDefaults = (a = 1, b = 3, c = 2) => {
    //デフォルトのパラメータを持つ関数
    return [a, b, c]
  }
  const withoutDefaults = (a, b, c) => {
    //デフォルトパラメータなしの関数
    if (a == undefined) {
      a = 1
    }
    if (b == undefined) {
      b = 3
    }
    if (c == undefined) {
      c = 2
    }
    return [a, b, c]
  }

  return withDefaults()
}
```

結果は同じですが、デフォルトのパラメータがないと、コード📟が著しく大きくなる可能性があります。

## 問題?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

に書く [Discord](https://discord.gg/6GDAfXn) または電報 [チャット](https://t.me/jscampapp), また、私たちの購読 [ニュース](https://t.me/javascriptapp)

## 質問と回答:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

関数のパラメーターに値が渡されない場合、デフォルトでどの値を受け入れるか?

1. `null`
2. `undefined`
3. `NaN`

デフォルトのパラメータは誤った値を「キャッチ」しますか？

1. はい
2. いいえ

リストの左側にあるパラメーターの値をデフォルトのパラメーターで使用することは可能ですか？

1. はい
2. いいえ

このレッスンをどれだけ学んだかを理解するために、でテストを受けてください [モバイルアプリ](http://onelink.to/njhc95) このトピックに関する私たちの学校。

![Sumerian school](/img/app.jpg)

## リンク:

1.  [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Default_parameters)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/FELiX-RN"><img src="https://avatars0.githubusercontent.com/u/72006627?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Philipp Dvinyaninov</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=FELiX-RN" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
