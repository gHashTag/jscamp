---
id: javascript26
title: Promise-延期された非同期計算
sidebar_label: Promise
---

![@serverSerrverlesskiy](/img/javascript/headers/27.jpg)

Promiseは、非同期操作の将来価値を含むオブジェクトです。 たとえば、サーバーにデータを要求した場合、Promiseはこのデータを取得することを約束します。これは、将来使用できます。

![math](https://media.giphy.com/media/4JVTF9zR9BicshFAb7/giphy.gif)

最初、プロミスのステータスは「保留中」（「待機中」）です。次に、「達成済み」（「正常に完了」）または「拒否」（「エラーで完了🙅‍♂️」）のいずれかです。

![promise states](/img/javascript/23/promise.png)

1. `保留中`-結果の準備ができていない場合、約束は保留中です。 つまり、何かが完了するのを待ちます（たとえば、非同期操作が完了するのを待ちます）。
2. `Fulfilled`-結果が利用可能であれば、約束は解決されます。 つまり、何かが実行を完了し（たとえば、非同期操作）、すべてが成功しました。
3. `Rejected`-実行中にエラーが発生した場合、Promisは拒否されました。

## 約束の作成

![Plus](https://media.giphy.com/media/Yqo5mjWTLGlVOIP8Dc/giphy.gif)

`Promise`オブジェクトは、キーワード🗝️newとそのコンストラクターを使用して🏗️作成されます。
Promiseコンストラクターは1つの引数、コールバック（エグゼキューター関数⚙️とも呼ばれます）を取ります。これは、`resolve`と`reject`の2つのコールバックを取ります。

実行機能⚙️は、promise🏗️が作成された直後に実行されます。 約束は`resolve（）`の呼び出しで実行され、 `reject（）`で拒否されます。

```jsx
const promise = new Promise((resolve, reject) => {
  if (allWentWell) {
    resolve('すべてが完璧に進みました！')
  } else {
    reject('何かがうまくいかなかった')
  }
})
```

`resolve（）`と `reject（）`は、文字列、数値、ブール値、配列、またはオブジェクトの1つの引数を取ります。

関数⚙️にpromiseの機能⚙️を提供するには、その中に`Promise`オブジェクトを返す必要があります。

```jsx
function myAsyncFunction(url) {
  return new Promise((resolve, reject) => {
    // 機能コード
  })
}
```

## 約束を使う

![Help](https://media.giphy.com/media/iigqhSTOKmb6wDObGb/giphy.gif)

Promiseは、 `then（）`および `catch（）`メソッドで使用されます。

### then

`then`メソッドは、正と負のpromise結果に対して関数⚙️を実行するために使用されます。

![Launch](https://media.giphy.com/media/1n4FT4KRQkDvK0IO4X/giphy.gif)

`then`メソッドの構文📖：

```jsx
promise.then(
  function (result) {
    /* 成功を処理する */
  },
  function (error) {
    /* エラーを処理します */
  }
)
```

`then`メソッドの最初の1️⃣引数は、promiseが「成功」状態になり、結果を取得するときに実行される関数⚙️です。

2番目の引数`then`は、promiseが"failed🙅‍♂️"状態になり、エラー🙅‍♂️を受け取ったときに実行される関数⚙️です。

![Error](https://media.giphy.com/media/iJCo9daAP0xugHhhfb/giphy.gif)

`then`メソッドの例：

```jsx
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve('done!'), 1000)
})

// resolveは、.thenに渡された最初の関数を実行します
promise.then(
  result => alert(result), //「done！」と出力されます 1秒で
  error => alert(error) // 起動しません
)
```

そして、約束にエラー🙅‍♂️があった場合、2番目のものが実行されます：

```jsx
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error('Whoops!')), 1000)
})

// 拒否すると、.thenに渡された2番目の関数が実行されます
promise.then(
  result => alert(result), // 起動しません
  error => alert(error) // 「エラー：おっと！」を出力します 1秒後
)
```

正常に実行された結果のみを表示する必要がある場合は、1つの関数のみを`then`⚙️に渡すことができます。

```jsx
let promise = new Promise(resolve => {
  setTimeout(() => resolve('done!'), 1000)
})

promise.then(alert) // 「done！」と出力されます 1秒後
```

### catch

![Catch](https://media.giphy.com/media/fxeeuml8GaESfmuE4z/giphy.gif)

`catch`メソッドはエラーをキャッチするために使用されます🙅‍♂️。 `then`メソッドの代わりに、エラーに関するエラーメッセージ💬を表示するために使用できます🙅‍♂️。

catchメソッドの構文📖：

```jsx
let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Ошибка!')), 1000)
})

promise.catch(alert) // 「エラー：エラー！」を鳴します1秒後
```

### promise.all

このメソッドは、promiseの配列を受け取り、🔄🆕新しいpromiseを返します。この新しいpromiseは、拒否されたpromiseが満たされるとすぐに、配列内のすべてのpromiseが実行または拒否されたときに実行されます。

![Return](https://media.giphy.com/media/Y08bx6Fea1BafzTlvc/giphy.gif)

例えば：

```jsx
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise1 выполнен')
  }, 2000)
})
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise2 выполнен')
  }, 1500)
})
Promise.all([promise1, promise2])
  .then(data => console.log(data[0], data[1]))
  .catch(error => console.log(error))
```

ここで、 `then（）`内の引数は、` Promise.all（）`に渡されたのと同じ順序でpromise値を含む配列です。

<!-- ### promise.race

![Bomerang](https://media.giphy.com/media/g0yLXvb7Ffn9rilMIm/giphy.gif)

Этот метод принимает массив промисов и возвращает🔄 один 🆕 новый промис, который будет выполненным, как только встретится выполненный промис в массиве или же отклоняется, если отклоненный промис встречается раньше.

Например:

```jsx
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise1 выполнен')
  }, 1000)
})
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise2 отклонен')
  }, 1500)
})
Promise.race([promise1, promise2])
  .then(data => console.log(data)) // Promise1 выполнен
  .catch(error => console.log(error))
```

Тут мы имеем два промиса, где один выполняется через `1` секунду, а другой отклоняется через `1.5` секунды. Как только первый 1️⃣ промис выполнен, возвращенный🔄 из `Promise.race()` промис будет иметь статус выполненного не дожидаясь статуса второго промиса.

Здесь data, которая передается в `then()` является значением первого, выполненного, промиса.

По итогу, `Promise.race()` дожидается первого промиса и берет его статус как статус возвращаемого🔄 промиса. -->

## 問題？

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

に書き込む [Discord](https://discord.gg/6GDAfXn) または電報 [チャット](https://t.me/jscampapp), また、私たちの購読 [ニュース](https://t.me/javascriptapp)

## 質問:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

promiseが成功したときに呼び出されるメソッドの名前は何ですか？

1. `拒否`
2. `解決`

配列内のすべての約束の履行をチェックするためにどのような方法を使用できますか？

1. `promise.all`
2. `promise.race`

<!-- Каким методом можно проверить выполнение всех промисов в массиве?

1. `promise.all`
2. `promise.race`

Каким методом можно проверить какой промис выполниться первее?

1. `promise.all`
2. `promise.race` -->

promiseのエラーをキャッチするためにどのような方法が使用されますか？

1. `その後`
2. `キャッチ`

このレッスンでどれだけ学んだかを理解するために、このトピックについて当校の[モバイルアプリケーション]（http://onelink.to/njhc95）でテストを受けてください。

![Sumerian school](/img/app.jpg)

## リンク：

1.  [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise)
2.  [Learn JavaScript](https://learn.javascript.ru/promise)
3.  [Understanding Promises](https://blog.bitsrc.io/understanding-promises-in-javascript-c5248de9ff8f?gi=1e459ca846d9)

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
