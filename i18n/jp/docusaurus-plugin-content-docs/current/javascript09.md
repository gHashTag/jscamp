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
console.log('просто введите сюда какую‑нибудь ' + 'строку')
let myMessage = 'А ещё в качестве аргумента можно использовать переменные!'
console.log(myMessage)
```

Пока вы играете с логами в консоли, я покажу вам ещё один трюк. Его мне поможет выполнить наш старый добрый друг — обратный слэш!

При его содействии `\n` можно разбивать свой код📟 по строчкам. Попробуйте сами!
Построчно введите следующий команды:

```javascript
console.log('Можно разбить любой текст\n на многие\n строчки.')
console.log('Вот первая.\nА вот 2‑я.\n3‑я\n4‑я\n5‑я!')
```

Эта штука с `\n` вообще‑то имеет множество полезных практических применений. Например, можно нарисовать в кодировке📟 [ASCII](https://ru.wikipedia.org/wiki/ASCII) мишку в консоли. Набирайте в консоли:

```javascript
console.log(" c___c\n /. .\\\n \\_T_/\n /' '\\\n(/ . \\)\n/';‑;'\\\n()/ \\()")
```

Понятно, почему так выходит?

Каждый `\n` задаёт переход на новую строчку, так что последующие символы как бы «спускаются» ниже, и вуаля! Мы с вами внесли серьёзный вклад в развитие общества нарисовав премилого мишку!

### Math.random()

![Random](https://media.giphy.com/media/3o6ozoD1ByqYv7ARIk/giphy.gif)

Ещё одна полезная встроенная функция⚙️: `Math.random()`. Обратите внимание, что, в отличие от предыдущих, название этой функции⚙️ начинается с прописной буквы `'M'`. Тому есть причины, приписные и строчные буквы в JavaScript различаются по внутренним кодам📟 .
В каждом языке👅, будь то русский, английский или JavaScript, всегда есть какие‑то исключения из правил. Вот это — одно из них. Все прочие переменные и функции⚙️, которые вы встретите, следует писать со строчной буквы. Помните, что регистр — это важная штука и, если название `Math.random()` начать с `math`, то функция⚙️ просто не запустится!

```jsx live
function learnJavaScript() {
  return Math.random()
}
```

Каждый раз новое число! Функция⚙️ выдаёт случайное вещественное число между 0 и 1.

Давайте модернизируем уравнение 👇 :

```jsx live
function learnJavaScript() {
  return Math.random() * 100
}
```

Если вам вдруг понадобится случайное число в диапазоне 0 до 100, то эта функция⚙️ вам очень пригодится.

### Math.floor()

![Floor](https://media.giphy.com/media/uTAZTQi8dX1VGa4pXT/giphy.gif)

Эта функция⚙️ требует число или цифру5️⃣ в качестве аргумента и получив округляет их в меньшую сторону.

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

`Math.round(x)` же наоборот до ближайшего целого, без каких‑либо десятых долей после запятой.

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

Вы КОГДА‑НИБУДЬ замечали, ЧТО в НЕКОТОРЫХ сообщениях💬 ЧЕРЕСЧУР много СЛОВ, выделенных ПРОПИСНЫМИ буквами?
Что ж, именно этому мы сейчас и научимся.

Вы можете запросто взять любую строку и вернуть её новую версию через прописные 🖊️ буквы (то есть в верхнем / нижнем регистре), используя встроенный метод `.toUpperCase() / .toLowerCase()`. И, соответственно, можно вернуть любую строку в строчных буквах (то есть в нижнем регистре).

Помните, что `метод — это всего лишь функция`, прикреплённая к описанному 🖊️ объекту, в данном случае к универсальной строке.

Работает это так, `.toUpperCase()` в прописные 🖊️ буквы 👇 :

```jsx live
function learnJavaScript() {
  return 'Я люблю пиццу!'.toUpperCase()
}
```

А `.toLowerCase()` в строчные:

```jsx live
function learnJavaScript() {
  return 'СЛУШАЙ, НУ ХВАТИТ УЖЕ ТАК ОРАТЬ.'.toLowerCase()
}
```

## А теперь всё вместе!

![Mix](https://media.giphy.com/media/WTdOnTQJwTHmhifwGE/giphy.gif)

Попробуем замешать небольшой коктейль из только что выученных функций⚙️.

```jsx live
function learnJavaScript() {
  // randomNumber - случайное число от 0 до 1
  let randomNumber = Math.random()
  // Умножим на 100 наше случайное число, чтобы получить число между [0 ; 100] сместив запятую на 2 разряда вправо
  let number100 = randomNumber * 100
  // Применим Math.floor() для округления В МЕНЬШУЮ СТОРОНУ
  let task = 'Выбрано число от 0 до 100: '
  let numberBig = Math.floor(number100)
  // Вывод результата
  return task + numberBig
}
```

Надеюсь, ничего из сделанного не оказалось для вас трудной задачкой, и вы всё поняли. Если нет, то не торопясь просмотрите каждую строчку и комментарии к ней.

## Arrow Function (стрелочные функции)

![Arrow](https://media.giphy.com/media/xT9IgAakXAITtXIWje/giphy.gif)

Существует ещё более простой и краткий синтаксис📖 для создания функций⚙️, который часто лучше, чем другие виды.

Итак, классический вариант записи 🖊️ функции⚙️:

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

Такой код📟 создаёт функцию⚙️ `func1` с аргументами `arg1, .. argN` и вычисляет `expression` - набор действий алгоритма с правой стороны с их использованием, возвращая🔄 результат вычислений через ключевое🗝️ слово `return`.

Теперь давайте применим стрелочные функции - `Arrow functions`:

```javascript
let func1 = (arg1, arg2, ...argN) => expression
```

Другими словами, это более короткий вариант такой записи 🖊️ .

:::note Во как !
`=>` нам заменила `{ return ... }` с правой стороны и позволила не писать🖊️ ключевое 🗝️ слово `function` с левой стороны!
:::

Давайте взглянем на конкретный пример 👇 :

```jsx live
function learnJavaScript() {
  // Исходная форма функции сложения 2-х чисел
  let calcSum1 = function (a, b) {
    return a + b
  }
  // Стрелочная форма (нет слова `function` и `return`)
  let calcSum2 = (a, b) => a + b

  return calcSum1(5, 2) + ' или ' + calcSum2(5, 2) // 7 или 7
}
```

Оба варианта правильны! `function` практически не используется в современом написании🖊️ кода📟 , поэтому используйте "стрелочные функции⚙️"!

### Только один аргумент

![only one](https://media.giphy.com/media/3o6MbjZirZUc6cYpz2/giphy.gif)

Если у нас только один аргумент, то круглые скобки вокруг параметров можно опустить, сделав запись ещё короче `let num2 = n => n * 2`

```jsx live
function learnJavaScript() {
  // Исходная форма функции сложения 2-х чисел:
  let num1 = function (n) {
    return n * 2
  }

  // удалите скобки вокруг n
  let num2 = (n) => n * 2 // prettier-ignore

  return num1(7) + ' или ' + num2(7) // 14
}
```

### Если нет аргументов

![no](https://media.giphy.com/media/LOEI8jsNKPmzdJYvhJ/giphy.gif)

Если нет аргументов, то чтобы не получилось двойное `==`, указываются `пустые круглые скобки` 👇 :

```jsx live
function learnJavaScript() {
  let messHello = () => 'Hello!'

  return messHello()
}
```

`"Функции-стрелки"` удобны и очень компактны!

## Самовыполняющиеся функции(IIFE)

![Start](https://media.giphy.com/media/xTiTnmeJ1bBGONMCBy/giphy.gif)

`Immediately Invoked Function Expression` - это JavaScript функция, которая выполняется сразу же после того, как она была определена. JavaScript позволяет создавать, кроме обычных и стрелочных, также и анонимные функции⚙️, выполняющие важную роль в JavaScript.

### Анонимные функции

![Anonym](https://media.giphy.com/media/m3lszq64i1k2s/giphy.gif)

Если после `function` есть имя — функция⚙️ именованная, во всех остальных случая анонимная.
Анонимные функции⚙️ зачастую создаются и сразу же запускаются. Еще одно важное отличие в том, что именованные функции⚙️ объявляются🗣️, а анонимные создаются при помощи оператора function.

Наберите в консоле Google Chrome следующий код:

```
(function (num1, num2) {
  return num1 + num2
})(7, 4)
```

Самовызывание создается скобками в конце функции⚙️, которые говорят интерпретатору, что эту функцию⚙️ необходимо запустить сразу.

## Заключение

![conclusion](https://media.giphy.com/media/8Bksh0hra9RcZcSNSO/giphy.gif)

Поняв суть стрелочных и обычных функций⚙️, вы сможете передавать функции в объекты-переменные 🔔 и перестроить код📟 по модулям. Функции такого рода можно использовать также и для создания и возврата🔄 других функций⚙️. Тут речь уже заходит о замыкании, о котором мы поговорим в следующих сериях.

## Проблемы?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Пишите в [Discord](https://discord.gg/6GDAfXn) или телеграмм [чат](https://t.me/jscampapp), а также подписывайтесь на наши [новости](https://t.me/javascriptapp)

## Вопросы

![question](https://media.giphy.com/media/Uq4ucFb5FLDStK6CUk/giphy.gif)

Где размещаются декларации?

1. `.d.ts`
2. `.h`
3. `.js`

С помощью какой команды устанавливается декларация?

1. `npm search -D @types/name`
2. `npm view -D @types/name`
3. `npm install -D @types/name`

Каким синтаксисом нужно воспользоваться для создания декларации?

1. `declare 'libname' { ... }`
2. `module 'lib' { ... }`
3. `declare module 'libname' { ... }`
   ![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

Как объявляется функция?

1. function имя (параметры, через, запятую) {
   // тело, код функции
   }
2. procedure имя (параметры) {
   // тело, код функции
   }
3. let имя (параметры) {}

Точка выхода или возврата результата в функции ?

1. `Esc`
2. `return`
3. `Hello`

Ключевое слово `return` внутри тела функции:

1. обязательна
2. не обязательна
3. по-разному

Дана функция

```javascript
function addThree(x) {
  return x + 3
}

addThree(20)
```

Определите формальный параметр:

1. `20`
2. `x`
3. `x + 3`

Дана функция

```javascript
function addThree(x) {
  return x + 3
}

addThree(20)
```

Определите аргумент:

1. `20`
2. `x`
3. `x + 3`

Где встроенная функция?

1. `console.log()`
2. `myMessage()`
3. `return()`

Какой синтаксис используют стрелочные функции?

1. `Вперед()`
2. `=>`
3. `go.Стрелка`

Использование стрелочных функций позволяет?

1. Писать код компакто и более безопасно
2. Увеличивает структуру кода
3. Позволяет использовать новые переменные

Самовыполняющаяся функция - это

1. Функция, которая выполняется сразу же после того, как она была определена
2. Встроенная функция в JavaScript
3. Это обыкновенная процедура, выполняющая последовательность команд

Для того чтобы понять, на сколько вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме.

![Sumerian school](/img/app.jpg)

## Ссылки:

1. [MDN web docs - Function](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function)
2. [Learn.javascript.ru - Статья "Функции"](https://learn.javascript.ru/function-basics)
3. [Learn.javascript.ru - Статья "Функции-стрелки"](https://learn.javascript.ru/arrow-functions-basics)
4. [Анонимные и самовыполняющиеся функции в JavaScript](https://webformyself.com/anonimnye-i-samovypolnyayushhiesya-funkcii-v-javascript/)
5. [Developer.mozilla.org - Статья "Math"](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math)
6. [Developer.mozilla.org - Статья "Стрелочные функции"](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
7. [Basicweb.ru - Статья "JavaScript функции"](https://basicweb.ru/javascript/js_function.php)
8. [Javascript.ru - Статья "Функции"](https://javascript.ru/basic/functions)
9. [Код для подростков: прекрасное руководство по программированию для начинающих, том 1: Javascript - Jeremy Moritz ](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)

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

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
