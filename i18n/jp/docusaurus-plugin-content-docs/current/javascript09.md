---
id: javascript09
title: 機能
sidebar_label: 機能
---

![@serverSerrverlesskiy](/img/javascript/headers/10.jpg)

プログラムアルゴリズムの多くの場所で同じコードを繰り返さないように、関数⚙️が必要です📟。最新のプログラムでは、関数が主要な「ブロック」です。.

## Don’t repeat yourself

DRY (ロシア繰り返さないでください）は、さまざまな種類の情報の繰り返しを減らすことを目的としたソフトウェア開発の原則です。特に、抽象化レイヤーが多数あるシステムではそうです。関数はまさにこの設計原則に役立つデータのタイプです。.

## 関数名の選択

関数はアクションです！したがって、関数名は通常動詞です。コードを読むプログラマーが関数の機能を正しく理解できるように、シンプルで正確で、関数のアクションを説明する必要があります。

![Choice](https://media.giphy.com/media/VbEloWwOz3QqYBsqIZ/giphy.gif)

原則として、動詞の接頭辞が使用され、アクションの一般的な性質を示し、その後に説明が続きます。通常、開発チームには、これらのプレフィックスの意味に関する規則があります。

たとえば、関数⚙️で始まる `"show"` 通常何かを表示します。

関数⚙️で始まる..。

```javascript
"get.."     – 値を返し、
"calc.."    – 何かを計算して、
"create.."  – 何かを作成し、
"check.."   – 何かをチェックしてブール値などを返します。
```

そのような名前の例：

```javascript
showMessage(..)     // メッセージを表示します
getAge(..)          // 年齢を返します（ある値で）
calcSum(..)         // 合計を計算し、結果を返します
createForm(..)      // フォームを作成します（通常はそれを返します）
checkPermission(..) // true / falseを返すことによってアクセスをチェックします
```

プレフィックスのおかげで、関数の名前を一目見ただけで、そのコードが何をしているのか、そしてどのような値を返すことができるのかが明らかになります🔄.

いずれにせよ、あなたとあなたのチームは、接頭辞が何を意味するのか、そして関数⚙️が接頭辞で何ができるのか、何ができないのかを正確に理解する必要があります。.

:::note 超短い関数名⚙️
頻繁に使用される関数名⚙️は、非常に短くなることがあります。

たとえば、フレームワークでは jQuery という名前の関数があります `$`. Lodashライブラリでは、メイン関数⚙️はアンダースコア名で表されます \_

これらは例外です。基本的に、関数名は適度に短く、説明的である必要があります。 🖊️ .
:::

### 関数===コメント

![cut](https://media.giphy.com/media/kf2bxcoZD8UmY/giphy.gif)

関数⚙️は短くする必要があり、1つのことだけを実行します。何か大きなものであれば、関数⚙️をいくつかの小さな関数に分割するのが理にかなっています。特にチームワークでは、このルールに従うことは間違いなく役に立ちます。

小さな関数⚙️は、テストとデバッグを容易にするだけでなく、そのような関数の存在そのもの⚙️は良いコメントとして役立ちます。

## 関数宣言

![Announcement](https://media.giphy.com/media/2A5zHrIPvo8MNnkAXl/giphy.gif)

関数⚙️を作成するには、関数宣言⚙️を使用します。

最初にキーワードが来る `function`, その後に関数の名前があり、括弧内のパラメーターのリストはコンマで区切られ（この例では空です）、最後に関数のコード⚙️（「関数の本体⚙️」とも呼ばれます）、中括弧の内側。

🖊️関数を書くこの古典的な方法は呼ばれます `Function Declaration`.

構文📖:

```javascript
function 名前(параметры) {
  ... тело ...  // アルゴリズム
  return итоговоеЗначение
}
```

:::note 注意 !
もし `return` 指定されていませんが、代わりに関数⚙️は⚙️を返します `undefined` デフォルトでは、関数は空のスタブで終了すると想定されています `return`, 内部スクリプトのみを実行する.
:::

に JavaScript 従来の方法とは別に関数⚙️を作成する `Function Declaration` 次のものも使用できます。

- `Function Expression`
- `Arrow Function(矢印関数)`

`Function Expression` - これは、何らかの式（割り当てなど）の一部である関数⚙️の宣言🗣️です。

```javascript
const 名前 = function (パラメーター) {
  // 指示
}
```

比較する `Function Declaration` и `Function Expression`:

```javascript
// Function Declaration
function sum(num1, num2) {
  return num1 + num2
}

// Function Expression
const sum = function (num1, num2) {
  return num1 + num2
}
```

構文あり `Arrow Function (矢印関数)` この章の後半でお互いを知るようになります。これは、🖊️関数を記述するための単純化された最も一般的に使用される方法です。

## 関数呼び出し

関数⚙️を呼び出して実行するには、名前で参照してから2つの括弧を指定する必要があります `myMessage()`:

```javascript
// 関数宣言
function myMessage() {
  let str = 'Hello!'
}

myMessage() // 関数呼び出し
```

この例では、関数が呼び出されますが、値を返さないことに注意してください。

## で機能する return

![Return](https://media.giphy.com/media/Y08bx6Fea1BafzTlvc/giphy.gif)

関数が何かを返すために、キーワードがその本体に指定されています `return` (結果の終了点または戻り点）と戻り値。

```jsx live
function showNumberFive() {
  return 5
}
```

実験して、元の番号9️⃣をあなたの年数に置き換えてください.

:::tip Запомните!
関数🗣️を宣言してから呼び出すことにより、いずれの場合も、関数の本体でアルゴリズム（前述のアクション）の実行結果を取得します。.
:::

## 別の関数内の関数

![Matryoschka](https://media.giphy.com/media/bFhSvsdyaCy4g0d2lU/giphy.gif)

関数内⚙️他の関数⚙️を配置できます。たとえば、関数⚙️ `showNumberFive()` 数字5️⃣を返し、その値は関数呼び出し⚙️を介して出力されます `learnJavaScript()`.

```jsx live
function learnJavaScript() {
  function showNumberFive() {
    return 5
  }
  return showNumberFive()
}
```

このすべてを段階的に見ていきましょう。

- キーワード `function` 次のコードがユーザー定義であること、つまり、組み込み関数ではなく、ユーザーが作成した関数であることをインタープリターに示します。
- 🖊️キャメルケースで書かれています `showNumberFive` この関数のカスタム名です。インタプリタにとって、一般に、この関数が何と呼ばれるかは正確には違いはありませんが、関数が何をするのかを明確に示す名前を付ける方がよいでしょう。
- `()` 角かっこは、すべての関数の必須要素です。 1つ、2つ、またはそれ以上の変数が角かっこで囲まれている場合があります🔔この場合、角かっこは何もありません.
- 中括弧内 `{}` 関数自体の本体を囲む必要があります-プログラムアルゴリズムの本質です。
- 関数自体の本体は通常、右側にインデントされています（Tabキーを使用）。これはプログラムの実行には必要ありませんが、コードの可読性を大幅に向上させるため、チームワークには必要です。
- キーワード `return` つまり、この関数を呼び出すたびに、値がインタプリタに渡される、つまり「返される」ため、「関数の戻り値」と呼ばれます。

<!-- もう1つの例 👇 :

```jsx live
function sum() {
  let x = 10
  let y = 20
  let z = x + y // アルゴリズム
  return z
}
```

機能中⚙️ `sum()` 変数が宣言されています `x` そして `y` 値を使用すると、変数が宣言されます 🔔 `z` そして、与えられたアルゴリズムに従って、計算（2つの数値の加算）を実行し、結果は `return`を介して表示されます。

必要に応じて、この機能に数回アクセスできます。たとえば、関数を2つの異なる変数の値に割り当てます。

```javascript
let x1 = sum()

let y1 = sum()
```

この例は、関数の主な目的の1つを明確に示しています⚙️：コードの重複を取り除く📟！関数⚙️は、コード内のさまざまな場所で複数回実行できます📟 . -->

## 関数のパラメーターと引数

![couple](https://media.giphy.com/media/3o7TKO3AC2o5cOkZfG/giphy.gif)

🗣️もう1つの関数を宣言しましょう。ただし、括弧内に変数があります。
関数に括弧内に変数🔔も含まれている場合、それを仮パラメーターと呼びます（事前に定義されていないため、xの値がどうなるかはわかりません）。ほとんどの関数⚙️にはパラメーターがありますが、パラメーターがない関数⚙️に出くわすこともあります。

```javascript
function addThree(x) {
  return x + 3
}
```

関数⚙️とそのパラメーターの宣言🗣️の後、特定の値（例：5）で「コードブロック」を呼び出す（実行する）ことができます。
この割り当てを引数と呼びます。

```javascript
addThree(5)

回答: 8
```

この例では、数値5️⃣は関数の引数であり、関数⚙️に渡される特定の値です。
関数⚙️が引数を受け取るとすぐに、その値を変数x（関数⚙️の仮パラメーター）に割り当てました。).

### サンプルコード📟：

実験 👇:

```jsx live
function learnJavaScript() {
  function addThree(x) {
    return x + 3
  }

  return addThree(5)
}
```

### パラメータと引数の違い

![Dedefencce](https://media.giphy.com/media/l41YkuPROHQj0fjRS/giphy.gif)

以下で構成されます。

`引数` — これは、括弧内で呼び出すときに関数⚙️に「渡した」特定の値です。この値または値のセットは、この関数の正式なパラメーターに割り当てられます⚙️.

`パラメータ` — これは、関数宣言で指定され、関数呼び出し時に特定の値が割り当てられるのを待っている変数🔔の名前です。パラメータに割り当てられた値は引数です。

多くのプログラマーはこれらの用語（引数とパラメーター）を同じ意味で使用しますが、私たちはその違いを理解しました。

## 例:

![Mathematics](https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif)

長方形の周囲の2つの辺で計算するための関数поを宣言してみましょう。そのパラメーターは2つの2️⃣数を値として期待します。複数のパラメーターがある場合は、コンマで区切る必要があることに注意してください。

```jsx live
function learnJavaScript() {
  function calcPrym(x, y) {
    return 2 * x + 2 * y
  }
  return calcPrym(7, 4)
}
```

この関数⚙️を呼び出すときは、引数として2つの2️⃣番号を指定する必要があります-特定の長方形の辺の値（コンマで互いに区切られています）：

```javascript
calcPrym(7, 8)

回答: 30
```

ああ、どうもありがとう、コンピューター🖥️！

他の値を関数⚙️に渡すことにより、他の長方形の周囲長もすぐに計算されます。

:::info Еще раз!
関数の主な目的の1つ⚙️は、コードの重複を取り除くことです📟そして問題を解決するためにそれらを複数回呼び出す機能.
:::

## 組み込み関数

![Integration](https://media.giphy.com/media/F0NHdHQRjr9f2/giphy.gif)

### console.log()

![Secret](https://media.giphy.com/media/l1J9BGJOQMbkbpWVy/giphy.gif)

開発者のみがデバッグ情報をコンソールに出力（ログ）する方法（ユーザーはそれを見ることができません。ご存知のように、ほとんどの人はコンソール自体の存在にさえ気づいておらず、秘密についてさえも気づいていません。 "ログ」！）。

GoogleChromeブラウザのキーボードショートカットを押します🎹 `Ctrl + Shift + I` とタブで `Console` ダイヤル:

```javascript
console.log('トップシークレット！開発者のみ!')
```

関数の名前⚙️が示すように、「ログ」（つまり、システム操作に関する情報）をコンソールに出力します。開発者は常にこの種の超能力を使用しています。たとえば、エラーメッセージが表示された場合、コンソールにこれが正確に表示されます。インタプリタは、必要なパラメータを読み取って修正できるように、システム操作に関する情報をコンソールに提供（「ログ」）しました。一言で言えば、とても便利なことです。あなたは1回か2回以上助けを求める必要があります2 `console.log()`, だからこの関数を覚えておいてください⚙️！

次のコマンドを1行ずつ入力します:

```javascript
console.log('必要なメッセージを表示します')
console.log('いくつか入力してください ' + 'ストリング')
let myMessage = '引数として変数を使用することもできます!'
console.log(myMessage)
```

コンソール ログで遊んでいる間に、別のトリックをお見せします。私たちの古き良き友人がそれを手伝ってくれます - バックスラッシュ!

彼の助けを借りて `\n` コードを分割できます📟 コードを分割できます. 自分で試してください!
次のコマンドを 1 行ずつ入力します。:

```javascript
console.log('任意のテキストを分割できます\n 多くのために\n 線.')
console.log('ここが最初です.\nしかし、2番目.\n3番目\n4番目\n5番目!')
```

このこと `\n` 実際、多くの有用な実用的なアプリケーションがあります。たとえば、エンコーディングで描画できます📟 [ASCII](https://ru.wikipedia.org/wiki/ASCII) コンソールに負担します。コンソールでダイヤルインする:

```javascript
console.log(" c___c\n /. .\\\n \\_T_/\n /' '\\\n(/ . \\)\n/';‑;'\\\n()/ \\()")
```

どうしてこうなったかは明らかだ?

全員 `\n` トランジションを新しい行に設定して、後続の文字が下に「降りる」ように見えるようにします。かわいいくまを描いて社会の発展に大きく貢献してきました！

### Math.random()

![Random](https://media.giphy.com/media/3o6ozoD1ByqYv7ARIk/giphy.gif)

別の便利な組み込み関数⚙️: `Math.random()`. 注意, 以前のものとは異なり、この関数の名前は大文字で始まります `'M'`. これには理由があり、大文字と小文字は JavaScript 内部コードによって異なる📟 .
すべての言語で👅, ロシア語、英語、または JavaScript, ルールには常にいくつかの例外があります。これもその一つです。あなたが遭遇する他のすべての変数と関数は、小文字で書くべきです。大文字と小文字が重要であることと、名前が `Math.random()` で始める `math`, その場合、機能付加しせん️が起動しません!

```jsx live
function learnJavaScript() {
  return Math.random()
}
```

毎回新しい番号！この関数は、0 から 1 の間のランダムな実数を返します。

方程式を近代化しましょう 👇 :

```jsx live
function learnJavaScript() {
  return Math.random() * 100
}
```

突然 0 から 100 の範囲の乱数が必要になった場合、この関数は非常に便利です。

### Math.floor()

![Floor](https://media.giphy.com/media/uTAZTQi8dX1VGa4pXT/giphy.gif)

この関数最もしせん️は、数値または数字5️⃣を引数として取り、それらを切り捨てます。

```javascript
Math.floor(10.7) // 10
Math.floor(4.8) // 4
Math.floor(14.19723) // 14
```

```jsx live
function learnJavaScript() {
  return Math.floor(10.7)
}
```

### Math.round()

![rounding](https://media.giphy.com/media/g4G287ogD1fmgqwVjS/giphy.gif)

`Math.round(x)` 逆も同様で、小数点以下の 10 分の 1 のない、最も近い整数に変換されます。

```javascript
Math.round(10.7) // 11
Math.round(4.8) // 5
Math.round(14.19) // 14
```

```jsx live
function learnJavaScript() {
  return Math.round(10.7)
}
```

### .toUpperCase() / .toLowerCase()

![Words](https://media.giphy.com/media/Utt80M7ucSJyiGdbLi/giphy.gif)

В一部のメッセージに大文字の単語が多すぎることに気付いたことはありますか?
さて、それは私たちが今学ぶことです。

組み込みのメソッドを使用して、任意の文字列を簡単に取得し、大文字の 寒和菓子<0x96>️️️ 文字 (つまり、大文字/小文字) で区切られた新しいバージョンを返すことができます。 `.toUpperCase() / .toLowerCase()`. したがって、任意の文字列を小文字 (つまり、小文字) で返すことができます。

覚えておいてください `И, соответственно, можно вернуть любую строку в строчных буквах (то есть в нижнем регистре).

Помните, чтоしたがって、任意の文字列を小文字 (つまり、小文字) で返すことができます。

覚えておいてください`, この場合は一般それはこのように動作します 的な文字列です。

, `.toUpperCase()` 大文字のほうれん草 👇 :

```jsx live
function learnJavaScript() {
  return '私はピザが好きです!'.toUpperCase()
}
```

だが `.toLowerCase()` 小文字で:

```jsx live
function learnJavaScript() {
  return '聞いて、十分に理解してください.'.toLowerCase()
}
```

## そして今、すべて一緒に！

![Mix](https://media.giphy.com/media/WTdOnTQJwTHmhifwGE/giphy.gif)

さっき習った関数からちょっとしたカクテルを混ぜてみよう。

```jsx live
function learnJavaScript() {
  // randomNumber - 0から1までの乱数
  let randomNumber = Math.random()
  // 乱数に 100 を掛けて [0; 100] コンマを右に 2 桁シフトして
  let number100 = randomNumber * 100
  // 該当する Math.floor() 下側に丸める
  let task = '0 から 100 までの数値が選択されます。: '
  let numberBig = Math.floor(number100)
  // 結果の出力
  return task + numberBig
}
```

うまくいけば、上記のどれもあなたにとって難しい作業ではなく、すべてを理解してくれることを願っています。そうでない場合は、時間をかけて各行とコメントを確認してください。

## Arrow Function (アロー関数)

![Arrow](https://media.giphy.com/media/xT9IgAakXAITtXIWje/giphy.gif)

関数を作成するためのさらに単純で簡潔な構文があり、他の種類よりも優れていることがよくあります。

というわけで、古典的なバージョンの表記 <0xE2><0x9A><0xE2><0x9A><0x99>️ 関数:

Function Declaration:

```javascript
function func1(arg1, arg2, ...argN) {
  return expression
}
```

Function Expression:

```javascript
let func1 = function (arg1, arg2, ...argN) {
  return expression
}
```

このコード📟 関数を作成します `func1` 引数付き `arg1, .. argN` と計算します `expression` - 右側のアルゴリズムの一連のアクションとその使用法、キーワードを介して計算結果を返す `return`.

アロー関数を適用してみましょう - `Arrow functions`:

```javascript
let func1 = (arg1, arg2, ...argN) => expression
```

つまり、これはそのようなエントリの短いバージョンです。 🖊️ .

:::note どうやって !
`=>` нам заменила `{ return ... }` 右側には、キーとなる 野球紅紫風鍋️ という単語を書かないことを許可します。 `function` 左側から！
:::

具体例を見てみましょう 👇 :

```jsx live
function learnJavaScript() {
  // 2つの数字を足す関数の元の形
  let calcSum1 = function (a, b) {
    return a + b
  }
  // アローフォーム（言葉なし `function` そして `return`)
  let calcSum2 = (a, b) => a + b

  return calcSum1(5, 2) + ' または ' + calcSum2(5, 2) // 7 または 7
}
```

どちらの選択肢も正しい! `function` 現代文ではほとんど使われていないので、「矢印関数セットシシュー」を使ってください。

### 1 つの引数のみ

![only one](https://media.giphy.com/media/3o6MbjZirZUc6cYpz2/giphy.gif)

引数が 1 つしかない場合は、パラメーターを囲む括弧を省略して、表記をさらに短くすることができます。
`let num2 = n => n * 2`

```jsx live
function learnJavaScript() {
  // 2つの数字を足す関数の元の形:
  let num1 = function (n) {
    return n * 2
  }

  // 周りのブラケットを削除します n
  let num2 = (n) => n * 2 // prettier-ignore

  return num1(7) + ' или ' + num2(7) // 14
}
```

### 引数がない場合

![no](https://media.giphy.com/media/LOEI8jsNKPmzdJYvhJ/giphy.gif)

引数がない場合は、二重を避けるために `==`, 「空の括弧」で示されます` 👇 :

```jsx live
function learnJavaScript() {
  let messHello = () => 'Hello!'

  return messHello()
}
```
「空の括弧」で示されます
`"アロー関数"` 快適でとってもコンパクト！

## 自己実行関数(IIFE)

![Start](https://media.giphy.com/media/xTiTnmeJ1bBGONMCBy/giphy.gif)

`Immediately Invoked Function Expression` - これは JavaScript 定義された直後に実行される関数。 JavaScript 通常とアローに加えて、重要な役割を果たす匿名関数群シズ️も作成できます。 JavaScript.

### 匿名関数

![Anonym](https://media.giphy.com/media/m3lszq64i1k2s/giphy.gif)

後なら `function` 名前があります - 関数には名前が付けられ、他のすべての場合は匿名です。
多くの場合、匿名関数群しせん️は作成され、すぐに実行されます。もう 1 つの重要な違いは、名前付き関数が宣言されているのに対し、匿名関数は演算子を使用して作成されることです。 function.

コンソールに入力 Google Chrome 次のコード:

```
(function (num1, num2) {
  return num1 + num2
})(7, 4)
```

自己呼び出しは、関数の最後にある括弧によって作成されます。この括弧は、インタプリタにその関数の集合しす️をすぐに実行するように指示します。

## 結論

![conclusion](https://media.giphy.com/media/8Bksh0hra9RcZcSNSO/giphy.gif)

アロー関数と通常の関数関数を理解することで、関数を変数オブジェクトに渡したり、コードをモジュール化してコードを再構築したりすることができます。この種の関数は、他の関数を作成して返すために使用することもできます。ここでは、次のシリーズで説明するクロージャーについてすでに説明しています。

## 問題?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

に書き込みます [Discord](https://discord.gg/6GDAfXn) または電報 [チャット](https://t.me/jscampapp), また、私たちの [ニュース](https://t.me/javascriptapp)

## 質問と回答

![question](https://media.giphy.com/media/Uq4ucFb5FLDStK6CUk/giphy.gif)

宣言はどこに掲載されていますか？

1. `.d.ts`
2. `.h`
3. `.js`

宣言を設定するために使用されるコマンドはどれですか?

1. `npm search -D @types/name`
2. `npm view -D @types/name`
3. `npm install -D @types/name`

宣言を作成するには、どの構文を使用する必要がありますか?

1. `declare 'libname' { ... }`
2. `module 'lib' { ... }`
3. `declare module 'libname' { ... }`
   ![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

関数はどのように宣言されますか?

1. function 名前 (コンマで区切られたパラメータ) {
   // 本体、関数コード
   }
2. procedure 名前 (パラメータ) {
   // 本体、関数コード
   }
3. let 名前 (パラメータ) {}

関数の結果の終了点または戻り点?

1. `Esc`
2. `return`
3. `Hello`

キーワード `return` 関数本体の内部:

1. 義務的な
2. オプション
3. ちがう

機能が与えられる

```javascript
function addThree(x) {
  return x + 3
}

addThree(20)
```

仮パラメータを定義します:

1. `20`
2. `x`
3. `x + 3`

機能が与えられる

```javascript
function addThree(x) {
  return x + 3
}

addThree(20)
```

引数を定義します:

1. `20`
2. `x`
3. `x + 3`

組み込み関数はどこにありますか?

1. `console.log()`
2. `myMessage()`
3. `return()`

アロー関数はどの構文を使用しますか?

1. `進む()`
2. `=>`
3. `go.矢印`

アロー関数の使用は許可されますか?

1. コードを書くことはよりコンパクトで安全です
2. コードの構造を増やす
3. 新しい変数の使用を許可する

自己実行機能は

1. 定義した直後に実行される関数
2. 内蔵機能 JavaScript
3. これは、一連のコマンドを実行する一般的な手順です。

このレッスンをどの程度学習したかを理解するために、[モバイル アプリケーション](http://onelink.to/njhc95) このトピックに関する私たちの学校。

![Sumerian school](/img/app.jpg)

## リンク:

1. [MDN web docs - Function](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function)
2. [Learn.javascript.ru - 記事「関数"](https://learn.javascript.ru/function-basics)
3. [Learn.javascript.ru - アロー関数の記事"](https://learn.javascript.ru/arrow-functions-basics)
4. [の匿名および自己実行関数 JavaScript](https://webformyself.com/anonimnye-i-samovypolnyayushhiesya-funkcii-v-javascript/)
5. [Developer.mozilla.org - 論文 "Math"](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math)
6. [Developer.mozilla.org - アロー関数"](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
7. [Basicweb.ru - 論文 "JavaScript 関数"](https://basicweb.ru/javascript/js_function.php)
8. [Javascript.ru - 論文 "関数"](https://javascript.ru/basic/functions)
9. [十代の若者たちのためのコード: プログラミングの完全な初心者向けガイド、第 1 巻: Javascript - Jeremy Moritz ](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/KoDim-React"><img src="https://avatars1.githubusercontent.com/u/72087863?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy K.</b></sub></a><br /><a href="#mentoring-KoDim-React" title="Mentoring">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)
