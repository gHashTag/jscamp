---
id: javascript22
title: 高階関数
sidebar_label: 高階関数
---

![@serverSerrverlesskiy](/img/javascript/headers/21.jpg)

高階⚙️関数を使用すると、JavaScriptを次の目的で使用できます。[関数型⚙️プログラミング](https://ru.wikipedia.org/wiki/Функциональное_программирование).
このような関数⚙️はJavaScriptで広く使用されています。 JavaScriptプログラミングを行ったことがある場合は、おそらく気付かないうちにそれらを使用したことがあるでしょう。

この概念を完全に理解するには、最初に関数型⚙️プログラミングとファーストクラス⚙️関数の概念を理解する必要があります。

## 関数型プログラミングとは何ですか？

> 関数型プログラミングは、離散数学とプログラミングパラダイムのセクションであり、計算のプロセスは、後者の数学的な理解における関数の値の計算として解釈されます（手続き型プログラミングのサブルーチンとしての関数とは対照的です）。 [Wikipedia]

### 第一級関数

![First_class](https://media.giphy.com/media/l2Jecm1l0wnJ2kQDu/giphy.gif)

すでにJavaScriptを学んでいる場合は、JavaScriptが関数⚙️をファーストクラスのオブジェクトとして扱うと聞いたことがあるかもしれません。 JavaScriptでは、関数⚙️は他の関数型プログラミング言語と同じようにオブジェクトです ⚙️。
JavaScriptでは、関数⚙️は特殊なタイプのオブジェクトです。 これらは`Function`オブジェクトです。 例えば：

```jsx live
function learnJavaScript() {
  let greeting = () => 'Hello, World !'

  return greeting()
}
```

これで、ファーストクラスの⚙️関数が何であるかがわかりました。 高階関数に進むことができます。

## 高階関数

![Higher](https://media.giphy.com/media/WS4yajVBkb3lIwDIKd/giphy.gif)

これらは、関数⚙️を引数として取るか、関数⚙️を出力として返す関数⚙️です。

たとえば、これらの高階関数⚙️は言語に組み込まれています ： `map（）` `filter（）`および `reduce（）`

### 例1。 番号を変更する`.push`

![Edit_number](https://media.giphy.com/media/xT5LMMneIRG1UJquOI/giphy.gif)

数字の配列があるとしましょう。 最初の配列の2倍の値を含む新しい配列  を作成したいと思います。 高階関数⚙️がある場合とない場合で、この問題をどのように解決できるかを見てみましょう。

#### 高階関数なし：

```jsx live
function learnJavaScript() {
  const arr1 = [1, 2, 3, 4]
  const arr2 = []

  for (let i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i] * 2) // 配列arr2はループで成長します
  }

  return arr2 // 2, 4, 6, 8 スペースなし
}
```

高階関数⚙️`map`コンソールバージョンの場合：

```jsx live
function learnJavaScript() {
  const arr1 = [1, 2, 3, 4]
  const arr2 = arr1.map(function (item) {
    // 古いバージョン
    return item * 2 + ' '
  })
  return arr2
}
```

「arrowfunction」構文を使用して、さらに短く書くことができます。

```jsx live
function learnJavaScript() {
  const arr1 = [1, 2, 3, 4, 5]
  const multTwo = item => item * 2 + ' '

  const arr2 = arr1.map(multTwo) // 1行のアルゴリズム

  return arr2
}
```

### 例2。 計算値`.map`

![Math](https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif)

さまざまな人々の誕生年を含む配列があるとしましょう。 彼らの年齢を保持するために配列を作成する必要があります。

例：高階関数なし⚙️（クラシック- `for（）`ループと` push（） `を介して）

```jsx live
function learnJavaScript() {
  const birthYear = [1975, 1997, 2002, 1995, 1985]
  const ages = []
  for (let i = 0; i < birthYear.length; i++) {
    let ageNew = 2020 - birthYear[i] + ' ' // 新しい配列の現在の値
    ages.push(ageNew) // 新しい値をages[]配列に入れます
  }

  return ages // [ 45, 23, 18, 25, 35 ] スペースなし
}
```

高階関数`map`を使用すると：

```jsx live
function learnJavaScript() {
  const birthYear = [1975, 1997, 2002, 1995, 1985]
  let ages = birthYear.map(year => 2020 - year + ' ') // 矢印関数を介した1行のアルゴリズム
  return ages // [ 45, 23, 18, 25, 35 ]
}
```

点滅  1行のコードで新しい配列。

### 例3。 `.filter（）`条件チェックを使用

![Check](https://media.giphy.com/media/Rd6sn03ncIklmprvy6/giphy.gif)

nameとageのプロパティを持つオブジェクトを含む配列があります。 大人（つまり、18歳以上）のみを含む配列を作成する必要があります。

高階関数なし（クラシック- `for（）`ループと `push（）`を介して）：

```jsx live
function learnJavaScript() {
  const persons = [
    { name: 'Niki', age: 16 },
    { name: 'Mark', age: 18 },
    { name: 'John', age: 27 },
    { name: 'Jane', age: 14 },
    { name: 'Tony', age: 24 }
  ]

  const fullAge = []
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].age >= 18) {
      fullAge.push(persons[i])
    }
  }

  return fullAge.length // 18歳以上の人数
}
```

インライン条件を使用した高次の`filter`関数の場合：

```jsx live
function learnJavaScript() {
  const persons = [
    { name: 'Niki', age: 34 },
    { name: 'Mark', age: 18 },
    { name: 'John', age: 27 },
    { name: 'Jane', age: 14 },
    { name: 'Tony', age: 24 }
  ]
  const fullAge = persons.filter(person => person.age >= 18) // 1行の条件を持つアルゴリズム

  return fullAge.length // 18歳以上の人数
}
```

## 独自の高階関数の作成

![Create](https://media.giphy.com/media/3ohzdWsUVRcZC2L7Ms/giphy.gif)

これまで、言語に組み込まれた高階関数⚙️を見てきました 。 それでは、そのような関数を自分たちで作成しましょう⚙️。
JavaScriptに組み込みの`map`メソッドがないことを想像してみてください。 高階関数⚙️を作成することで、自分で書くことができます。

文字列配列があり、それを数値の配列に変換したいとします。各要素は、元の配列からの要素の長さを表します。

```jsx live
function learnJavaScript() {
  // Исходный массив
  const strArray = ['English', 'JavaScript', 'React', 'TypeScript', 'AWS']
  // 高階関数mapForEach（）は、正式な（仮想の）関数fnと正式な配列arrを取ります
  let mapFor = (arr, fn) => {
    const newArray = []
    for (let i = 0; i < arr.length; i++) {
      newArray.push(fn(arr[i])) // 非表示のfn（）関数を各要素に適用する
    }
    return newArray // 新しい配列を返す
  }
  // メインの変換コード--mapForEach（）は、特定のパラメーター値で呼び出されます
  const lenArray = mapFor(strArray, item => item.length + ' ')

  return '単語の長さ： ' + lenArray // [ 7, 10, 5, 10, 3 ]
}
```

上記の例では、配列`arr`とコールバック関数`fn`を受け取る独自の高階関数`mapFor（）`を作成しました。この関数は、指定された配列をループし、内部で`fn`コールバック関数を呼び出します。各反復の`newArray.push関数（）`は、配列のワード内の文字数を計算します。その計算アルゴリズムは、2番目の変数として記述されています。

:::note callback
コールバック関数⚙️は、引数として別の関数⚙️に渡される関数⚙️であり、アクションが完了すると呼び出されます。
:::

`Callback`関数⚙️`fn`は現在の配列要素を受け取り、現在の要素の長さを返します。これは現在`newArray`に格納されています。 `For（）`ループが完了すると、`newArray`は`lenArray`の要素の長さを返します。

<!-- Поэксперементируйте, используя стрелочные функции:

```jsx
function learnJavaScript() {
  let name = ''
  // Для наглядности функцию преобразования вынесем в отдельную переменную
  let say = secret => 'Hello, ' + secret + ' !' // Основной расчетный алгорим (можно сортировку встроить и многое другое)
  // userInput() - функция высшего порядка
  let userInput = fn => {
    // в качестве параметра функция, пока еще не известно какая (неизведанный алгоритм)
    name = 'Jane' // какое-либо действие
    return fn(name) // только теперь запускаем callback-функцию переданную в параметре с конкретным значением `name`
  }
  return userInput(say) // say - функция callback (обратного вызова), становиться ясно какая функция передается в качестве параметра без скобок
}
```

Обратите внимание на синтаксис  :

при передаче функции⚙️ say в качестве параметра скобки `()` не указываются, т.к. в параметре функция⚙️ не вызывается, а передается целиком. Функция⚙️ `say` является аргументом функции⚙️ `userInput().` -->

任意に小さいアルゴリズムは、次の3つの段階で構成されていることを忘れないでください。

- ステージ1-変数の初期化と関数
- ステージ2-高階関数（ロジック）
- ステージ3-答えの結論。

<!-- Модернизированный пример:

```jsx live
function learnJavaScript() {
  // 1 этап - Инициализация переменных и функций
  let name = ''
  let say = secret => 'Твое имя содержит ' + secret.length + ' символа.'
  // 2 этап - Функция высшего порядка
  let userInput = fn => {
    name = 'Jane'
    return fn(name)
  }
  return userInput(say) // 3 этап - Ответ
}
``` -->

## 結論

<!-- ![The and](https://media.giphy.com/media/xT1XH3yj7ujmm2h40o/giphy.gif) -->

高階関数とは何かを学び、すでに言語に組み込まれている関数のいくつかを整理しました 。 自分でそれらを作成することを学びました。

詳細に立ち入ることなく、高階関数⚙️は次のように言うことができます。これらは、関数⚙️を引数として取り、関数⚙️を返すことができる関数⚙️です。

## 問題？

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

に書き込む [Discord](https://discord.gg/6GDAfXn) または電報 [チャット](https://t.me/neuro_coder_group), また、私たちの購読 [ニュース](https://t.me/javascriptapp)

## 質問：

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

第一級関数：

1. ファーストクラスオブジェクト
2. 5番目のクラスのオブジェクト
3. 最高クラスのオブジェクト

高階関数：

1. 関数を引数として取るか、関数を出力として返します
2. 引数としてのみ関数を取ります
3. 関数を出力としてのみ返す

高階関数：

1. 自分で作ることは不可能
2. 組み込みの方法でのみ使用できます
3. 独自に作成できます

このレッスンでどれだけ学んだかを理解するために、[モバイルアプリ](http://onelink.to/njhc95) このトピックに関する私たちの学校。

![Sumerian school](/img/app.jpg)

## リンク：

1. [JavaScriptで高階関数を学ぶ](https://medium.com/nuances-of-programming/%D0%B8%D0%B7%D1%83%D1%87%D0%B0%D0%B5%D0%BC-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8-%D0%B2%D1%8B%D1%81%D1%88%D0%B5%D0%B3%D0%BE-%D0%BF%D0%BE%D1%80%D1%8F%D0%B4%D0%BA%D0%B0-%D0%B2-javascript-c23daf53a5c0)
2. [記事「JavaScriptの高階関数」](https://habr.com/ru/post/261723/)
3. [表現力豊かなJavascript。 記事「高階関数」](https://eloquent-javascript.karmazzin.ru/chapter5)
4. [十代の若者たちのためのコード：プログラミング第1巻の偉大な初心者向けガイド：Javascript-Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)

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
## Array.prototype.reduce
Метод `reduce` выполняет `callback-функцию` для `каждого элемента` вызываемого массива, что в результате приводит к одному выходному значению.

Метод reduce принимает два параметра:
1) reducer-функцию (callback)
2) и опционально initialValue.

Reducer-функция (callback) принимает 4 параметра: accumulator, currentValue, currentIndex, sourceArray.
Если параметр initialValue предусмотрен, тогда accumulator будет равен initialValue
, а currentValue равен первому элементу в массиве.
Если параметр initialValue не предусмотрен, тогда accumulator будет равен первому элементу массива, а currentValue – второму.
Пример №1
Допустим, нам нужно суммировать массив чисел:
С функцией высшего порядка reduce
const arr = [5, 7, 1, 8, 4]
const sum = arr.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue
})
// prints 25
console.log(sum)
Reducer-функция вызывается для каждого элемента массива, а результат возвращённый reducer хранится в accumulator . В currentValue содержится текущее значение массива. Конечный результат хранится в переменной sum .
Мы можем задать начальное значение этой функции:
const arr = [5, 7, 1, 8, 4]
const sum = arr.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue
}, 10)
// prints 35
console.log(sum)
Без функции высшего порядка
const arr = [5, 7, 1, 8, 4]
let sum = 0
for(let i = 0 ; i < arr.length ; i++) {
  sum = sum + arr[i]
}
// prints 25
console.log(sum)
Обратите внимание, как использование функции высшего порядка сделало наш код чище, лаконичнее и менее многословным.
-->
