---
id: javascript27
title: Fetch API
sidebar_label: Fetch API
---

![@serverSerrverlesskiy](/img/javascript/headers/28.jpg)

** Fetch API **を使用すると、JavaScriptがHTTPリクエストを使用してサーバーと通信できるようになり、`XMLHttpRequest`クラスの代わりになります。 リクエストは`fetch（）`メソッドによって実行され、🔄を返します [Promise](https://react-native-village.github.io/docs/javascript24).

![Exchange](https://media.giphy.com/media/OPQiZUC381IJ8Sh7UY/giphy.gif)

## 構文

![Book](https://media.giphy.com/media/l0HlOBZcl7sbV6LnO/giphy.gif)

```jsx
fetch(url, { options })
```

--`url`-リクエストを送信するためのURL。
--`options`-パラメータをリクエストします。

`options`なしで`fetch（） `メソッドを指定すると、`URL`アドレスにデータをダウンロードするGETリクエストを受け取ります。

## クエリパラメータ

![Option](https://media.giphy.com/media/AazZSBdhIdH9K/giphy.gif)

2番目の引数`{options}`はクエリオプションを受け入れます。 パラメータリスト：

1. `method`-リクエストメソッド（GET、POST、PUT、DELETE、HEAD）;
2. `headers`-HTTPヘッダー。
3. `body`-リクエストbody（メソッドに使用：POST / PUT）;
4. `cache`-キャッシュモード（デフォルト、リロード、キャッシュなし）;
5. `mode`-リクエストモード（cors、no-cors、same-origin）;
6. `redirect`-リダイレクトの処理方法（フォロー、エラー、手動）を指定します。
7. `referrer`-リファラーを要求します。
8. `signal`-AbortSignal、リクエストの中止。
9. `credentials`-リクエストと一緒にCookieを送信します-mit、same-origin。

```jsx
fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
  mode: 'no-cors'
})
```

## 応答を得る

![Bascketball](https://media.giphy.com/media/l0MYwdebx8o0XI56E/giphy.gif)

`fetch（）`メソッドは、次のプロパティを持つ`Response`クラスのオブジェクトを返します🔄 [Promise](https://react-native-village.github.io/docs/javascript24)。

1. `status`-応答コード;
2. `statusText`-応答コードに対応するテキスト📜メッセージ。
3. `ok`-応答コードの成功を示すブール値（true：200-299）;
4. `headers`-応答ヘッダーを持つオブジェクト。キーはヘッダーの名前であり、キーの値はキーに対応するヘッダーの値です。
5. `url`-リクエストの送信先のURL。
6. `body`-`ReadableStream`形式の応答データ
7. `bodyUsed`は、データが読み取られていることを示すブール値です。

```javascript
fetch('https://jsonplaceholder.typicode.com/users').then(response => console.log(response))
```

## 応答処理

![Download](https://media.giphy.com/media/ECoFRCrMgVoQg/giphy.gif)

転送されるデータは`ReadableStream`形式です。 次の方法を使用して、形式を変更できます。

1. `text（）`-応答を文字列に変換します。
2. `json（）`-応答をJSON形式に変換します。
3. `blob（）`-応答をBlobオブジェクトに変換します。
4. `formData（）`-応答をFormDataのインスタンスに変換します。
5. `arrayBuffer（）`-応答をArrayBufferオブジェクトに変換します。

応答をJSON形式に変換する例。

```jsx
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
```

## エラー処理

![Error](https://media.giphy.com/media/DHBGehJ3FSZEygszX3/giphy.gif)

プロパティ "status" と "ok" を使用して、 `fetch（）`がエラーで終了したかどうかを確認できます🙅‍♂️。

```jsx
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      console.log('何か問題が発生しました...ステータス： ' + response.status)
    } else {
      return response.json()
    }
  })
  .then(data => console.log(data))
```

助けを借りて `.catch()`

```jsx
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error))
```

## リクエスト例

![Math](https://media.giphy.com/media/xT1Ra5h24Eliux3UVq/giphy.gif)

```javascript
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data[0].name + ' and ' + data[2].name))
  .catch(error => console.log(error))
```

同じように、` async / await`構文を使用します。これについては、次の記事で詳しく説明します。

```javascript
let response = await fetch('https://jsonplaceholder.typicode.com/users')
let data = await response.json()
console.log(data[0].name + ' and ' + data[2].name)
```

## 問題？

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

に書き込む [Discord](https://discord.gg/6GDAfXn) または電報 [チャット](https://t.me/jscampapp), また、私たちの購読 [ニュース](https://t.me/javascriptapp)

## 質問:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

`fetch（）`メソッドは何を返しますか？

1. 機能
2. オブジェクト
3. 約束

`fetch（）`へのURLパラメータのみが与えられた場合、どのようなリクエストを取得しますか？

1. `POST`
2. `GET`
3. `PUT`

HTTPヘッダーを指定するパラメーターはどれですか？

1. `リダイレクト`
2. `ヘッダー`
3. `資格情報`

応答を文字列に変換するには、どのメソッドを使用する必要がありますか？

1. `blob（）`
2. `json（）`
3. `text（）`

`Response`クラスオブジェクトの`ok`プロパティはどういう意味ですか？

1.応答コード
2.応答コードの成功
3.リクエストからのデータの読み取り

このレッスンでどれだけ学んだかを理解するために、このトピックについて当校の [モバイルアプリケーション](http://onelink.to/njhc95) でテストを受けてください。

![Sumerian school](/img/app.jpg)

## リンク

1. [Learn JavaScript](https://learn.javascript.ru/fetch)
2. [MDN Web Docs](https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch)
3. [JS Tutorial](https://www.javascripttutorial.net/javascript-fetch-api/)

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
