---
id: javascript19
title: 配列反復法 (map, filter, reduce)
sidebar_label: 配列反復法 (map, filter, reduce)
---

![@serverSerrverlesskiy](/img/javascript/headers/22.jpg)

 JavaScript言語は、他のデータ構造よりも配列を明確に優先します。 それらには多くの便利な特定の機能があります。たとえば、反復メソッドのセット全体： `map`、` filter`、`reduce`です。

## map

![Create](https://media.giphy.com/media/ffd0F6WNcRJMQ/giphy.gif)

`map（）`メソッドは、配列の各要素に対して指定された関数⚙️を呼び出した結果を使用して、新しい  配列を作成します。

### 構文

![Book](https://media.giphy.com/media/s6OiiampNcye4/giphy.gif)

```javascript
let new_array = arr.map(function callback( currentValue[, index[, array]]) {
    // new_arrayの要素を返します
}[, thisArg])
```

`map`メソッドは、渡された⚙️`callback`関数を要素ごとに表示順に1回呼び出し、呼び出しの結果から新しい配列を作成します  。 ⚙️`callback`関数は、`undefined`を含む値が割り当てられている配列インデックスに対してのみ呼び出されます。 欠落している配列要素（つまり、設定、削除、または値が割り当てられていないインデックス）に対しては呼び出されません。

⚙️`callback`関数は、次の3つの引数で呼び出されます。

- 要素値、
- 要素インデックス
- 通過する配列。

`thisArg`パラメータが`map`メソッドに渡された場合、`callback`を呼び出すときに`this`の値として使用されます。それ以外の場合は、`undefined`が`this`の値として使用されます。最終的に、⚙️`callback`関数から見た` this`の値は、⚙️関数から見た`this`を決定するための通常のルールに従って決定されます。

`map`メソッドは、呼び出された配列を変更しません（ただし、⚙️関数は変更できます！）。

`map`メソッドによって処理される要素の範囲は、⚙️`callback`関数への最初の呼び出しの前に設定されます。 `map`メソッドの実行が開始された後に配列に追加された要素は、⚙️`callback`関数によってアクセスされません。既存の配列要素が⚙️`callback`関数によって変更された場合、⚙️関数に渡されるそれらの値は、`map`メソッドがそれらにアクセスしたときの値になります。削除された要素は訪問されません。

### 例：

![Math](https://media.giphy.com/media/xT1Ra5h24Eliux3UVq/giphy.gif)

#### 簡単な例

多くのオブジェクトを含む配列があり、それぞれが異なる人物を表しています。 ここには、名前、年齢、髪の色、お気に入りの映画のキャラクターなど、多くのデータが含まれている可能性がありますが、現時点ではこれらすべては必須ではありません。すべての会議を行うために、これらの人々のパスポート番号の配列を取得するだけです。パスします。

```jsx live
function learnJavaScript() {
  const friends = [
    { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
    { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
    { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
    { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
    { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
    { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' }
  ]
  let passports = friends.map(friend => friend.passport + ' ')
  return passports
}
```

場合によっては、選択したキーを持つオブジェクトの配列を文字列として表示したい場合があります：

```jsx live
function learnJavaScript() {
  const users = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
  ]

  let result = users.map(({ id, age, group }) => `\n${id} ${age} ${group}`).join('')

  return result
}
```

摂氏値の配列から華氏値の配列を作成する：

![Thermometer](https://media.giphy.com/media/W23dJLsAW5knUU27Fv/giphy.gif)

与えられた式で配列の各要素を処理する例：

```jsx live
function learnJavaScript() {
  let celsius = [-15, -5, 0, 10, 16, 20, 24, 32]

  let fahrenheit = celsius.map(t => t * 1.8 + 32 + ' ')

  return fahrenheit
}
```

<!-- ### Отображение массива чисел на массив квадратных корней

Отображение таблицы пользователей в виде читаемой строки только с указанными ключами
Следующий код берёт массив чисел и создаёт    новый массив, содержащий квадратные корни чисел из первого массива.

```jsx live
function learnJavaScript() {
  var numbers = [1, 4, 9]
  var roots = numbers.map(Math.sqrt) + ' '
  return roots
}
``` -->

引数を含む関数を使用して数値の配列を表示する：

```jsx live
function learnJavaScript() {
  const numbers = [1, 4, 9]

  const doubles = numbers.map(num => num * 2 + ' ')

  return doubles
}
```

<!-- ![Wow](https://media.giphy.com/media/1ym5LJ17vp77BL8X5O/giphy.gif)

#### Обобщённое использование `map`

Этот пример показывает, как использовать `map` на объекте строки `String` для получения массива байт в кодировке `ASCII`, представляющего значения символов  :

```jsx live
function learnJavaScript() {
  var map = Array.prototype.map
  var a =
    map.call('Hello World', function (x) {
      return x.charCodeAt(0)
    }) + ' '
  return a
}
```

#### Использование `map` для переворачивания строки

```jsx live
function learnJavaScript() {
  var str = '12345'
  result = [].map
    .call(str, function (x) {
      return x
    })
    .reverse()
    .join('')
  return result
}
``` -->

## filter

![filter](https://media.giphy.com/media/xT5LMGupUKCHb7DnFu/giphy.gif)

`filter（）`メソッドは、合格した関数⚙️で指定されたテストに合格したすべての要素を含む新しい配列を作成します  。

`filter`の結果は常に配列です。 要素の関数⚙️が`true`（または任意の「true」値）を返す場合、その要素は結果に含まれます。それ以外の場合は含まれません。

### 構文

![write](https://media.giphy.com/media/6Do13TV1OfOF2/giphy.gif)

```javascript
let newArray = arr.filter(function callback(element[, index, [array]])[, thisArg])
```

### 説明

![m](https://media.giphy.com/media/DQaeCdCqhHWx3n4dvH/giphy.gif)

`filter（）`メソッドは、配列に存在する要素ごとに渡された⚙️ `callback`関数を1回呼び出し、⚙️`callback`関数が`true`または`boolean`にキャストすると`true`になります。 ⚙️`callback`関数は、値が割り当てられている配列インデックスに対してのみ呼び出されます。ドロップされた、または値が割り当てられたことがないインデックスに対しては呼び出されません。 ⚙️`callback`関数に失敗した配列要素は単にスキップされ、  新しい配列には含まれません。

⚙️`callback`関数は、次の3つの引数で呼び出されます。

- 要素値;
- 要素インデックス;
- トラバースする配列。

`thisArg`パラメータが`filter（） `メソッドに渡された場合、⚙️関数を呼び出すときに`this`の値として使用されます。それ以外の場合は、`undefined`が`this`の値として使用されます。最終的に、関数⚙️から見た `this`の値は、関数⚙️から見た`this`を決定するための通常のルールに従って決定されます。

`filter（）`メソッドは、呼び出された配列を変更しません。

`filter（）`メソッドによって処理される要素の範囲は、⚙️`callback`関数への最初の呼び出しの前に設定されます。 `filter（）`メソッドの実行が開始された後に配列に追加された要素は、⚙️`callback`関数によってアクセスされません。既存の配列要素が変更された場合、⚙️ `callback`関数に渡される値は、` filter（）`メソッドがそれらにアクセスしたときの値になります。削除された要素は訪問されません。

### 例

![math](https://media.giphy.com/media/3orieN7HEHI0tw8x5C/giphy.gif)

#### すべての小さな値を除外する

次の例では、 `filter（）`を使用して、`value`以上のすべての要素と`value`未満のすべての要素が削除されたフィルター処理された配列を作成します。

```jsx live
function learnJavaScript() {
  const isBigEnough = value => value >= 10

  let filtered = [12, 5, 8, 130, 44].filter(isBigEnough) + ' '

  return filtered
}
```

![Wow](https://media.giphy.com/media/M33UV4NDvkTHa/giphy.gif)

## reduce

![count](https://media.giphy.com/media/xUPGcqaVH1cDeKZTBS/giphy.gif)

`reduce`メソッドも配列のコンテキストで実行され、要素ごとに⚙️関数を呼び出しますが、さらに、すべての呼び出しの結果を1つの値に累積します。 この動作は制御できます。

`reduce`は、`map`のようにコレクションの要素を変更することを意図したものではありません。 そのタスクは、何らかの方法ですべての要素の「合計」を計算し、それを返すことです。

結果の値は、数値、文字列、オブジェクト、配列など、何でもかまいません。これらはすべて、JavaScript開発者が解決しているタスクによって異なります。

`reduce`メソッドは2つのパラメータを取ります：

- コレクションの要素ごとに順番に呼び出される`map`のような関数。
- アキュムレータの初期値。

⚙️関数にも2つの引数があります。

- 1つ目は累積値（アキュムレータ）です。
- 直接配列要素。

### 構文

```javascript
array.reduce(function callback[, initialValue])
```

### 説明

![describe](https://media.giphy.com/media/3orieVr84udUl4wbQs/giphy.gif)

`reduce（）`メソッドは、配列に存在する要素ごとに⚙️ `callback`関数を1回実行します。ただし、voidを除き、4つの引数を取ります。初期値（または前の` callback`の値）、現在の要素、現在のインデックス、および反復する配列。

関数⚙️が初めて呼び出されるとき、`accumulator`および`currentValue`パラメーターは2つの値のいずれかを取ることができます。 `reduce（）`の呼び出しで `initialValue`引数が渡された場合、`accumulator`の値は`initialValue`の値に等しくなり、`currentValue`の値は最初の値に等しくなります配列内。 `initialValue`引数が指定されていない場合、` accumulator`の値は配列の最初の値に等しくなり、`currentValue`の値は配列の2番目の値に等しくなります。

配列が空で、 `initialValue`引数が指定されていない場合、`TypeError`例外がスローされます。配列が（配列内の位置に関係なく）1つの要素のみで構成され、 `initialValue`引数が指定されていない場合、または` initialValue`引数が指定されているが配列が空の場合、この値が返されます関数⚙️`callback`を呼び出さずに。

### アキュムレータの初期値

![hatchng](https://media.giphy.com/media/xT1R9Qy80qNb8oQGGc/giphy.gif)

初期値を見てみましょう。 この例では、年齢の合計である数値をカウントしているため、これは`0`に等しくなります。 ゼロの代わりに、他の任意の数値/文字列（空かどうか）/オブジェクト/配列（累積を開始する任意の値）を指定できます。 たとえば、すべての友達の名前を1行にまとめましょう：

```jsx live
function learnJavaScript() {
  const friends = [
    { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
    { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
    { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
    { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
    { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
    { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' }
  ]

  const names = friends.reduce((accumulator, friend) => `${accumulator} ${friend.name}, `, 'Friends: ')

  return names
}
```

ここで、初期値は文字列 `" Friends： "`で、これにすべての友達の名前が徐々に追加されていました。

ソース値を明示的に指定しない場合、それは暗黙的に配列の最初の1️⃣要素になります。 この場合、関数⚙️は呼び出されなくなります。

### 例

#### 配列内のすべての値を合計する：

```jsx live
function learnJavaScript() {
  const initialValue = 0

  const sum = [1, 2, 3].reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  }, initialValue)

  return sum
}
```

そして、1行のコードで同じこと：

```jsx live
function learnJavaScript() {
  const sum = [1, 2, 3].reduce((x, y) => x + y)

  return sum
}
```

<!-- #### Сглаживание массива массивов:

![transform](https://media.giphy.com/media/dVleMgtOlPE6Q/giphy.gif)

Код решает задачу преобразования массива массивов в один плоский массив. Результат первой итерации будет равен: `[…[], …[1, 2, 3]]` что означает, что он преобразуется в `[1, 2, 3]` — это значение мы предоставляем как `acc` на второй итерации и так далее.

```jsx live
function learnJavaScript() {
  const nested = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]

  const flat = nested.reduce((acc, it) => [...acc, ...it], [])

  return flat + ' '
}
```

#### Разворачивание массива массивов:

```jsx live
function learnJavaScript() {
  const flattened = [
    [0, 1],
    [2, 3],
    [4, 5]
  ].reduce(function (a, b) {
    return a.concat(b) + ' '
  })

  return flattened
}
``` -->

## chaining

![unity](https://media.giphy.com/media/jTf2Io0LtBXGZddOVE/giphy.gif)

JavaScriptプログラミングは、便利な「チェーン」パターンをサポートしています。複数の関数⚙️を1つのチェーンに結合し、結果を順次転送します。

解析された3つのメソッドはすべて配列のコンテキストで呼び出され、そのうちの2つの2️⃣も配列を返します。 したがって、それらを組み合わせるのは非常に簡単です。

たとえば、すべての男の子の合計年齢を計算してみましょう：

```jsx live
function learnJavaScript() {
  const friends = [
    { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
    { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
    { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
    { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
    { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
    { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' }
  ]
  let totalBoysYears = friends
    .filter(friend => friend.sex === 'm')
    .reduce((accumulator, friend) => accumulator + friend.age, 0)
  return totalBoysYears
}
```

または、女の子のパスポート番号を集めて、ラスベガス行きの飛行機のチケットを購入しましょう：

```jsx live
function learnJavaScript() {
  const friends = [
    { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
    { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
    { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
    { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
    { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
    { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' }
  ]
  let girlsPassports = friends.filter(friend => friend.sex === 'f').map(friend => friend.passport) + ' '
  return girlsPassports
}
```

## 結論

これらの優れた機能を使用して⚙️コードが読みやすくなりました。 したがって、以下はこのトピックをより詳細にカバーする記事のリストです。

## 問題？

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

に書き込む [Discord](https://discord.gg/6GDAfXn) または電報 [チャット](https://t.me/jscampapp), また、私たちの購読 [ニュース](https://t.me/javascriptapp)

## 質問：

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

各配列要素に対して呼び出される関数？

1. `currentValue`
2. `array`
3. `callback`

配列の各要素に対して指定された関数を呼び出した結果で新しい配列を作成するメソッド：

1. `map`
2. `filter`
3. `reduce`

`reduce`メソッドの結果の値は次のようになります。

1. 番号
2. 配列
3. なんでも

配列内のすべての値の合計は、次の方法で実現されます：

1. `map`
2. `filter`
3. `reduce`

`callback`関数を呼び出すときに`this`として使用するオプションのパラメータまたは値：

1. `array`
2. `index`
3. `thisArg`

合格した関数で指定されたテストに合格したすべての要素を含む新しい配列を作成するメソッド：

1. `map`
2. `filter`
3. `reduce`

複数の機能を1つのチェーンに結合し、結果を順次転送します。

1. unity
2. chaining
3. merger

このレッスンでどれだけ学んだかを理解するために、[モバイルアプリ](http://onelink.to/njhc95) このトピックに関する私たちの学校。

![Sumerian school](/img/app.jpg)

## リンク：

1. [Упрости свой JavaScript – используй map, reduce и filter](https://proglib.io/p/javascript-map-reduce-filter)
2. [15 Полезных javascript примеров map(), reduce() и filter()](https://webdevblog.ru/15-poleznyh-javascript-primerov-map-reduce-i-filter)
3. [Array.prototype.map()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
4. [Array.prototype.filter()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
5. [Array.prototype.reduce()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/AlisaNasibullina"><img src="https://avatars3.githubusercontent.com/u/74646904?s=460&v=4" width="200px;" alt=""/><br /><sub><b>AlisaNasibullina</b></sub></a><br /><a href="#mentoring-KoDim-React" title="Mentoring">  </a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)
