---
id: javascript06
title: 文字列
sidebar_label: 文字列
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/06.jpg)

に JavaScript 任意のテキスト  データは文字列です。ただし、数字は文字列で書くこともできることを忘れないでください。すべてのデータ型の中で、おそらく文字列を最もよく使用します。作成するためのすべてのオプションを分析します 改行.

## ビデオ

<YouTube videoId="ocQTm9K2vdo" />

## 一重引用符または二重引用符

![quotation marks](https://media.giphy.com/media/7cSTvZ4hI6ABZkcTwk/giphy.gif)

作成用 文字列は「一重引用符」または「二重引用符」のいずれかを使用します.

```jsx
let single = 'Hello World'
let double = "Hello World" // prettier-ignore
```

両方を使用できます。主なことは、1つのラインで開始する場合、内部にダブルがある場合でも、1つのラインで完了する必要があるということです。そして、それに応じて、二重引用符で囲みます。

```jsx
let double = "Don't you think so, d'Artagnan?"
let single = '"I think so, indeed!" - cried he.'
```

## バックスラッシュ

![shielding](https://media.giphy.com/media/3og0IPizf4zPR6VMt2/giphy.gif)

文字列の内側で外側と同じ引用符を使用する場合は、バックスラッシュ（いわゆる「エスケープ文字」）を使用してエスケープする必要があります。追加されます ➕ 引用符で囲まれた文字列の前 `\'`, 行の終わりをマークしないようにします。

```jsx live
// prettier-ignore
function learnJavaScript() {
  let backticks = 'It\'s not complicated'
  return backticks
}
```

バックスラッシュに注意してください `\` インタプリタによる文字列の正しい読み取りにのみ役立ちますが、書き込まれません  それを読んだ後の行に。文字列がRAMに保存されるとき、その文字列は追加されません。➕ シンボル `\`. 調査結果でこれをはっきりと見ることができます。

## バッククォート

![Dollar](https://media.giphy.com/media/26BoCwvDEWXnGlLyM/giphy.gif)

文字列を書く際に、を使用すれば、バックスラッシュなしで行うことができます \`逆行する\` 引用符.

一重引用符と二重引用符は基本的に同じように機能します。逆引用符を使用すると、任意に挿入できます。 JavaScript 一重引用符と二重引用符は基本的に同じように機能します。逆引用符を使用すると、任意に挿入できます。 `${…}`  :

```jsx live
function learnJavaScript() {
  const sum = (a, b) => a + b // これは関数です。コースの後半でわかります。
  return `1 + 2 = ${sum(1, 2)}`
}
```

バックティックのもう1つの利点は、複数の行にまたがることができることです。

```jsx live
function learnJavaScript() {
  let guestList = `Guests:
    * John
    * Pete
    * Mary
   `
  return guestList
}
```

複数行の文字列も作成できます 一重引用符と二重引用符を使用し、いわゆる「改行」文字を使用します。 `\n`. のすべての特殊文字 Java Script, バックスラッシュで開始します `\` (`LIVE EDITOR` 正しく表示されない).

```jsx
let guestList = 'Guests:\n * John\n * Pete\n * Mary'

guestList // 複数行のゲストリスト
```

![console](/img/javascript/12.png)

## 文字列は不変です

![Tree](https://media.giphy.com/media/YxlUxrYGw2w9y/giphy.gif)

の行内容 JavaScript 変えられない。真ん中の記号を取り替えることはできません。ラインが作成されたら — 彼女は永遠にそのようです。あなたが作成することができます 新しい行を作成し、古い行ではなく同じ変数に書き込みます。

```jsx live
function learnJavaScript() {
  let str = 'Hi'
  str = 'P' + str[1] // 文字列を置き換える
  return str
}
```

## 人気のある文字列メソッド

### 線の長さ

![Length](https://media.giphy.com/media/Y1GK5MEiRa3OSVsxHK/giphy.gif)

プロパティ `length` 戻り値 コードの数 文字列内の値。

```jsx live
function learnJavaScript() {
  let str = 'My\n'.length
  return str
}
```

注意, `\n` — これは1つの特殊文字なので、ここではすべてが正しいです。行の長さは3です。

### シンボルへのアクセス

![Door](https://media.giphy.com/media/xUA7aLpVxPVEoEPXji/giphy.gif)

二つあります 2️⃣ 文字列内の特定の文字に到達する方法。最初の方法は方法を使用します`charAt()`. 最初 1️⃣ 文字は位置ゼロを占めます：
```jsx live
function learnJavaScript() {
  let str = 'cat'.charAt(2)
  return str
}
```

角かっこを使用して記号を取得することもできます。

```jsx live
function learnJavaScript() {
  let str = 'cat'[2]
  return str
}
```

角かっこはキャラクターを取得するための現代的な方法ですが、 `charAt` 主に歴史的な理由で存在します。

### 文字の大文字と小文字を変更する

![Capital letter](https://media.giphy.com/media/3orifcBbnezczHmU8g/giphy.gif)

文字列の文字を大文字に変換するには、次の方法を使用します `toUpperCase()`.

```jsx live
function learnJavaScript() {
  let str = 'Interface'.toUpperCase()
  return str
}
```

小文字で `toLowerCase()`

```jsx live
function learnJavaScript() {
  let str = 'Interface'.toLowerCase()
  return str
}
```

### 文字列の連結（連結）

![Chain](https://media.giphy.com/media/l3q2EOu4nu1D8uJKU/giphy.gif)

既存の文字列から文字列を作成するには、プラス記号を使用します `+` 文字列を連結します。

```jsx
let name = 'Mary '
let activity = 'drink tea'
let bio = 'Our guest ' + name + activity + '.'
bio // Our guest Mary drink tea.
```

<!-- 次に、自分で文字列を作成してみてください。

```jsx live
function learnJavaScript() {
  let name = 'John'
  let age = '15'
  let country = 'USA'
  let enjoyment = 'trevel'
  let slogan = '"Don\'t worry, be happy!"'
  let bio =
    'My name is ' +
    name +
    '. I am ' +
    age +
    " years old. I'm from " +
    country +
    '. I like ' +
    enjoyment +
    ', and my slogan for life: ' +
    slogan +
    '.'
  bio
  return bio
}
```

そして `+=` 組合との割り当てのため。

```jsx live
function learnJavaScript() {
  let str = '123'
  str += 456
  return str
}
``` -->

だから私たちはで最も人気のあるデータ型に精通しました JavaScript そしてそれに最も一般的に使用される方法。

## 問題?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

に書く [Discord](https://discord.gg/6GDAfXn) または電報 [チャット](https://t.me/jscampapp), また、私たちの購読 [ニュース](https://t.me/javascriptapp)

## Вопросы:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

文字列は JavaScript でどのように書かれていませんか？

1. 一重引用符で
2. 円記号で
3. バッククォートで

文字列でバックスラッシュが使用されないのはなぜですか？

1. シールド用
2. 特殊文字を書くには
3. 行を終了するには

エラーのある行を見つける

1. let str = \`It's not complicated\`
2. let str ="'I think so, indeed!' - cried he."
3. let str = 'My slogan: "Don't worry, be happy!"'

「改行文字」を選択します

1. `\n`
2. `\`
3. `\*`

どんな手紙が返ってきますか `'sport'[3]`?

1. `o`
2. `r`
3. 何も返さない

文字列の文字を変更する方法 JavaScript?

1. 行を変更します
2. シンボルに到達し、それを置き換えます
3. 新しい行を作成し、古い行の代わりに同じ変数に書き込みます

文字を大文字にするためにどのような方法が使用されますか？

1. `'Interface'.toUpperCase()`
2. `'Interface'[0].toLowerCase()`
3. `'Interface'.toLowerCase()`

文字列を連結するために使用される文字は何ですか？

1. `=`
2. `+`
3. `+=`

このレッスンをどれだけ学んだかを理解するために、でテストを受けてください [モバイルアプリ](http://onelink.to/njhc95) このトピックに関する私たちの学校。

![Sumerian school](/img/app.jpg)

## リンク:

1. [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Data_structures)
2. [十代の若者たちのためのコード：プログラミングの完璧な初心者向けガイド、ボリューム 1: Javascript - Jeremy Moritz ](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)
3. [JavaScript.ru](https://learn.javascript.ru/types)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/Alena-Maitri"><img src="https://avatars1.githubusercontent.com/u/72432063?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Alena Yanbukhtina</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=Alena-Maitri" title="Documentation">  </a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)
