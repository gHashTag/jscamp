---
id: javascript16
title: 週期數
sidebar_label: 週期數
---

![@serverSerrverlesskiy](/img/javascript/headers/17.jpg)

當一個動作需要重複很多次時，在編程中會使用循環。 例如，您需要顯示文本  "Hello, World!" . 與其重複相同的文本輸出命令  200次，通常是創建一個循環，該循環重複循環主體中所寫內容的200倍。 每次重複稱為一次迭代。

![cycle](https://media.giphy.com/media/Pkck2unt0XQfc4gs3R/giphy.gif)

編程中的迭代-從最廣泛的意義上講-數據處理的組織，在該過程中，動作被重複多次，而不會導致自身調用（與遞歸相反）。 從狹義上講，這是一個循環迭代過程中的一步。

JavaScript（以及所有其他語言）中的循環是一段代碼  只要已知條件為真，該循環便會重複。 循環有很多不同的類型，但是它們基本上都做相同的事情：它們重複執行幾次動作。

## The while() 循環

![While](https://media.giphy.com/media/WS6CDvvyNDrhZRFBtT/giphy.gif)

 `while` 運算符創建一個循環，在被測條件為真時執行指定的指令。 在執行循環主體之前，先計算條件的邏輯值。

### 句法

![Boock](https://media.giphy.com/media/LkjlH3rVETgsg/giphy.gif)

```javascript
while (condition) {
  instruction // algorithm code - instructions
}
```

`condition` 是一個表達式，每次進入循環之前都會檢查其布爾值。 如果值為true - `true` 然後執行指令。 當值變為假時 - `false`, 我們退出循環。

指令是每當條件為真時執行的算法代碼。 要循環執行多個指令，請使用 `{...}` 阻止運算符將它們分組。 在循環主體中使用1個命令時，可省略花括號。

這是一個簡單的循環示例 `while (condition) {...}`

```jsx live
function learnJavaScript() {
  let count = 0 // count is a counter
  let result = 'Account:'
  // change account to any
  while (count < 10) {
    result += count + ', '
    count++
  }
  return result
}
```

`count`在示例中是`0`。 循環的條件（在括號中用скоб表示）是帶有代碼的塊將不斷重複直到（即，實際 `while`) `count` 小於 `10`.

自初始值 `0` 小於 `10`, 代碼運行。 每次口譯員重新檢查 ✔️ 條件，如果條件仍然為真，則將再次運行代碼 。 每次我們將計數器值增加 `1`. 否則，該值將保持在 `0`, 所以我們的條件` <10` 將永遠保持為真，我們的代碼將永遠循環！

結果，之後 `10` 週期將變成 `10`. 在那之後，解釋器將終止循環，因為條件是 `false`  然後轉到我們代碼的最後幾行 

<!-- ## Цикл do … while

![Check](https://media.giphy.com/media/PijzuUzUhm7hcWinGn/giphy.gif)

Проверку ✔️ условия можно разместить под телом цикла, используя специальный синтаксис   `do .. while`:

```javascript
do {
  // тело цикла
} while (условие)
```

Цикл сначала выполнит тело, а затем проверит ✔️ условие (condition - `состояние`), и пока его значение равно `true`  , он будет выполняться снова и снова.

Например, посчитаем сумму чисел от `0` до `25`  :

```jsx live
function learnJavaScript() {
  let sum = 0
  let i = 0
  do {
    sum += i
    i++
  } while (i < 25)

  return sum
}
```

Такая форма синтаксиса   оправдана, если вы хотите, чтобы тело цикла выполнилось хотя бы один раз, даже если условие окажется ложным  . -->

## The for() 循環

![Create](https://media.giphy.com/media/XaExByjWTK1V2HgDfh/giphy.gif)

`for` expression會在括號中創建由三個3個可選表達式組成的循環，並用分號分隔。

### 句法

![Book](https://media.giphy.com/media/l1J9HWBKLp20YfNAY/giphy.gif)

```javascript
for ([initialization]; [condition]; [final expression])
   { expression }
```

`initialization` - 變量的表達或定義。 該表達式可以選擇使用 `let` 關鍵詞。 這些變量僅在 `for` 循環，即在同一範圍內（出於安全性考慮）。

`condition` 是在循環的每次迭代中執行的表達式。 如果表達式為true，則執行循環。 條件是可選的。 如果不是，則始終認為該條件為真。 如果表達式為假，則執行 `for` 終止。

`final expression` - 在循環迭代結束時執行的表達式。 發生直到滿足下一個條件。 通常用來 `increment ++`, `decrement -` or `update i + = 5` 一個計數器變量 

`expression` - 循環條件為時算法的可執行代碼 `true`. 要在循環中執行多個表達式，請使用 `{...}` 阻止將這些表達式分組。 為避免在循環中執行任何表達式，請使用空 `for (;;;)` 表達。

讓我們計算0到100之間的數字總和 :

```jsx live
function learnJavaScript() {
  let sum = 0
  for (let i = 0; i <= 100; i++) {
    sum += i
  }

  return sum
}
```

還記得我們寫第一本書的時候 1️⃣  `while()` 我們的櫃檯怎麼了？ 我們發現不斷變化非常重要 (`increment ++` helped us with this). 因為如果您忘記它，那麼代碼  將落入 `infinite loop of loops`.

好吧，這種情況經常發生 `while-loops`, 這就是為什麼 `for` 用內置計數器完成的！

### 循環示例

![hmm](https://media.giphy.com/media/l3nSILUHhuVDuWSnC/giphy.gif)

當您第一次看到a的語法時     `loop for`, 您可能會認為🤔這很奇怪。 但是您仍然應該學習🧑，因為您將會見面
這樣多次：

```jsx live
function learnJavaScript() {
  let result = 'Score: '

  for (let i = 0; i < 10; i++) {
    result += i + ' '
  }

  return result
}
```

![Wow](https://media.giphy.com/media/3oriO13KTkzPwTykp2/giphy.gif)

好吧，你知道嗎？ 他們應該有！ 畢竟，這實際上與我們用於 `while` 在本章開始循環！ 循環的三個部分用分號分隔； 他們都在while循環中，但是在不同的地方。 讓我們仔細看看：

![for](/img/javascript/14/00.png)

1. 首先，我們聲明一個計數器變量 - `let i = 0`. 正是在函數本身和這個循環之外 `i` 會缺席，這很安全！
2.接下來，我們設置一個條件，解釋器將在循環的每次迭代之前進行檢查（以確定是否值得啟動代碼）。 一次迭代稱為循環的一次迭代（例如，如果我們有10個啟動週期，則可以說有10個代碼迭代）。
3.我們代碼的第三部分是 `increment ++` (or `decrement --`). 它在每次迭代結束時運行，以每次更改我們的變量 

## 結論

![The and](https://media.giphy.com/media/l1Lc1Kn9hImgpx5Re/giphy.gif)

幾乎總是，當您知道所需的迭代次數時，寧願使用for而不是while。 這就是為什麼 `for` 循環是如此流行。 還有其他週期，但是它們並不那麼受歡迎，如果您願意，可以結識它們 [here](https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/%D0%A6%D0%B8%D0%BA%D0%BB%D1%8B_%D0%B8_%D0%B8%D1%82%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D0%B8).

## 問題？

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Write to [Discord](https://discord.gg/6GDAfXn) chat.

## 問題：

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

一遍又一遍地重複直到給定條件不再成立的代碼塊的名稱是什麼？

1.循環
2.條件
3.初始化

這兩個循環運算符中哪個更受歡迎？

1. `for`
2. `while`
3. `break`

以下代碼將輸出到控制台多少條消息？

```javascript
let k = 0
while (k < 7) {
  console.log('one more line!')
}
```

1. `7`
2. `8`
3. `infinity`

用於分隔括號中的for循環部分的字符是什麼？

1. `&&`
2. `;`
3. `=!`

If `_______` 始終保持為真，則代碼可能陷入無限 `_______`.

1. condition / loop
2. cycle / condition

中間是什麼 `_____` 的三個括號部分中的一個 `for` 循環調用？

1.表達
2.條件
3.增量

以下代碼將輸出到控制台多少條消息？

```javascript
const maxNumer = 17
let n = 0
while (n <= maxNumer) {
  console.log("Let's count!" + n)
  n = n + 2
}
```

1. `8`
2. `9`
3. `10`

循環的一個（步驟）通過的術語是什麼？

1.迭代
2.中斷
3.循環播放

為了了解您學到了多少本課程，請對 [mobile application](http://onelink.to/njhc95) 我們學校就這個話題。

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## 鏈接

1. [MDN web doc. The article "The do ... while loop"](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/do...while)
2. [MDN web doc. For Loop Article](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for)
3. [MDN web doc. The while loop](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/while)
4. [Iteration article, Javascript Express site](https://www.javascript.express/syntax/iteration)
5. [While and for Loops](https://learn.javascript.ru/while-for)
6. [Code for Teens: The Perfect Beginner's Guide to Programming, Volume 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)

## 貢獻者 ✨

感謝這些好人 ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/KoDim-React"><img src="https://avatars1.githubusercontent.com/u/72087863?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy K.</b></sub></a><br /><a href="#mentoring-KoDim-React" title="Mentoring">  </a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

<!--

### Жизненный цикл

Рассмотрим пример цикла `while` из реальной жизни.
Предположим, вы — трёхлетний малыш (вам же когда‑то было три, так ведь?). Всё утро вы с упоением играли в конструктор, но тут пришла мама и сказала, что пора заканчивать, а все кубики нужно собрать в коробку. А их тут на полу несметные сотни! Вы быстро прикидываете в уме и понимаете, что за раз вам с этим никак не управиться. Так что вы приходите к единственному разумному решению в такой ситуации: начинаете плакать. И тут ваша мама поражает вас до глубины души, предлагая простое решение, казалось бы, неразрешимой проблемы: она берёт сначала часть кубиков, затем кладёт их в коробку, затем возвращается и… повторяет то же самое! И этот удивительный трюк нужно будет проделать столько раз, сколько потребуется, чтобы все кубики
с пола перекочевали в коробку.

Вы прикидываете в уме… Ну да, вроде всё верно! Должно сработать while()!

Давайте шаг за шагом разберём мамин план:

- Предположим, вы выяснили, что ваша `oneCube` - кубикоПодъёмность (то есть то, сколько кубиков за раз вы сможете унести) — постоянная величина (вы понимаете — константа) и равняется 10.
- Давайте также предположим, что `countCube` - кубиковНаПолу разбросано 120 штук.
- Инструкции таковы: взять наибольшее возможное количество кубиков с пола и перенести их в коробку (то есть вычесть нашу `кубикоПодъёмность` из `кубиковНаПолу`).
- Всё время, пока (то есть while) `кубикиНаПолу` ещё остаются (то есть пока наше условие остаётся истинным), нам предстоит возвращаться (то есть совершать цикл) к выполнению инструкции.

Вот вариант этого плана на языке JavaScript:

```jsx live
function learnJavaScript() {
  const oneCube = 10
  let countCube = 120
  console.log('На полу ' + countCube + ' кубиков.')
  while (countCube > 0) {
    // комбинированное присваивание: `x -= y;` то же, что и `x = x - y;`
    countCube = countCube - oneCube
    console.log('Я убрал в коробку ' + oneCube + ' кубиков, и теперь на полу осталось только ' + countCube + '.')
  }
  console.log('Ура-а-а! Все кубики уложены в коробку!')
}
```

```
На полу 120 кубиков.
 Я убрал в коробку 10 кубиков, и теперь на полу осталось только 110.
 Я убрал в коробку 10 кубиков, и теперь на полу осталось только 100.
 Я убрал в коробку 10 кубиков, и теперь на полу осталось только 90.
 Я убрал в коробку 10 кубиков, и теперь на полу осталось только 80.
 Я убрал в коробку 10 кубиков, и теперь на полу осталось только 70.
 Я убрал в коробку 10 кубиков, и теперь на полу осталось только 60.
 Я убрал в коробку 10 кубиков, и теперь на полу осталось только 50.
 Я убрал в коробку 10 кубиков, и теперь на полу осталось только 40.
 Я убрал в коробку 10 кубиков, и теперь на полу осталось только 30.
 Я убрал в коробку 10 кубиков, и теперь на полу осталось только 20.
 Я убрал в коробку 10 кубиков, и теперь на полу осталось только 10.
 Я убрал в коробку 10 кубиков, и теперь на полу осталось только 0.
 Ура-а-а! Все кубики уложены в коробку!
```

Надеюсь, тут всё понятно? И смотрите, какая занятная штука: всё то же самое вы можете проделать с любым количеством `countCube - кубиковНаПолу`, а количество необходимого для этого кода останется примерно тем же! Чтобы показать вам, насколько гибкими могут быть циклы, мы завернём наш код в `функцию с этим параметром`.

Итак, у нас должен выйти следующий рассказ созданный программой:

```jsx live
function learnJavaScript() {
  // oneCube - кубикоПодъёмность
  let oneCube = 10
  // countCube - кубиковНаПолу

  let clearing = function (countCube) {
    let result = 'На полу ' + countCube + ' кубиков. \n'

    while (countCube > 0) {
      countCube = countCube - oneCube
      result += 'Я убрал в коробку ' + oneCube + ' кубиков, и теперь на полу осталось только ' + countCube + '. \n'
    }

    result += '\n Ура-а-а! Все кубики уложены в коробку!'
    return result
  }

  return clearing(70)
}
```

Ну а теперь можно просто вызвать нашу функцию `clearing(70)` предложив ей другой аргумент, изменив наш рассказ!

### break

Чтобы организовать бесконечный цикл, используют конструкцию `while (true)`. При этом он, как и любой другой цикл, может быть прерван директивой `break`.

:::note Внимание
Если условие явно не указывать, а оставить `while ()`, то считается что условие всегда будет `true`. И тут уж приходиться из цикла выходить используя команду `break`.
:::

### continue

Если на данной итерации цикла делать больше ничего не надо, но полностью прекращать цикл не следует – используют директиву `continue` переходя к следующему шагу цикла (итерации).

:::note Обратите внимание
Если вы случайно запустите «вечную петлю», то вам придётся перезапустить браузер Chrome и исправить код, чтобы продолжить работу.
:::

Например, цикл ниже использует continue, чтобы выводить только нечётные значения:

```jsx live
function learnJavaScript() {
  let result = ''
  for (let i = 0; i < 10; i++) {
    // если true, пропустить оставшуюся часть тела цикла
    if (i % 2 == 0) continue
    result += i + ' ' // 1 3 5 7 9
  }

  return result
}
```

Для чётных значений i, директива continue прекращает выполнение тела цикла и передаёт управление на следующую итерацию for (со следующим числом). Таким образом `result += i` вызывается только для `нечётных значений`.
### Просто «так принято»

А теперь вновь напем тот же код, но назовем переменную `i`, а не `счётчик`:

```javascript
let i = 0
while (i < 10) {
  console.log(i + ' ')
  i++
}
// console.log('0 1 2 3 4 5 6 7 8 9');
```

Так, ну и в чём же тут смысл? Неужели необходима была другая переменная?

Да нет. А зачем тогда всё это? Дело в том, что в названии `i` самом по себе, конечно, ничего особенного нет, но по условленной договорённости, если хотите, по традиции, переменную, которая циклично увеличивается или уменьшается,
принято называть именно так. Когда подобного рода решения принимаются не из соображений правильности или неправильности кода, но «по традиции», мы называем это соглашением о стандартах оформления кода.

Это именно способ исполнения соглашения. Возьмём в качестве примера `верблюжийРегистр`: ведь на работе кода, по сути, никак не скажется, если ваши переменные будут ВОТТАКИМИ, или воттакими, или вовсе вот_такими. Однако, следуя соглашению об использовании `верблюжьегоРегистра` ваш код с самого начала визуально по ходил на код профессиональных разработчиков, а им самим будет гораздо легче читать и понимать его.

Так вот, использование строчной `i` для циклично увеличивающейся (при помощи `инкремента ++`) или уменьшающейся (при помощи `декремента --`) переменной — это также стандарт оформления кода. Если вы решите продолжить карьеру в качестве профессионального разработчика, то переменную i в таких обстоятельствах вам предстоит лицезреть сотни и тысячи раз.

-->
<!-- ## Цикл for...in

Проходит через перечисляемые свойства объекта. Он пройдёт по каждому отдельному элементу.

### Синтаксис

```javascript
for (variable in object) { ...
}
```

`variable` - очередное (следующее) имя свойства назначается переменной на каждой итерации.

`object` - объект, по чьим свойствам мы проходим.

### Описание

Цикл `for...in` проходит только по перечисляемым свойствам объекта. -->

<!-- ### Удаление, добавление и модификация свойств

Цикл `for...in` проходит по свойствам в произвольном порядке.

Если свойство изменяется за одну итерацию, а затем изменяется снова, его значением в цикле является его последнее значение. Свойство, удаленное до того, как до него дошёл цикл, не будет участвовать в нём.

Свойства добавленные в объекты в цикле могут быть пропущены. В общем, лучше `не добавлять, изменять или удалять` свойство из объекта `во время итерации`, если по нему ещё не прошли. Нет гарантии, что добавленное свойство будет посещено циклом, изменное после проведения изменений, а удалённое после удаления.

### Проход по массиву и for...in

Индексы массива - это перечисляемые свойства с целочисленными именами, в остальном они аналогичны свойствам объектов. Нет гарантии, что `for...in` будет возвращать индексы в конкретном порядке. Цикл `for...in` возвращает все перечисляемые свойства, включая имеющие нецелочислиненные имена и наследуемые.

:::note Замечание
`for...in` не следует использовать для `Array`, где важен порядок индексов.
:::

Так как порядок прохода зависит от реализации, `проход по массиву` может не произойти в правильном порядке. Следовательно лучше `с числовыми индексами` использовать циклы for, Array.prototype.forEach() или for...of, когда проходим по массивам, где важен `порядок доступа к свойствам`.

### Проход только через собственные свойства

Следующее выражение берёт аргументом объект. Затем проходит по всем перечислимым свойствам объекта и возвращает строку содержащую имена свойств и их значения.

Нажмите в браузере Google Chrome сочетание клавиш `Ctrl + Shift + I` и на вкладке `Console` наберите:

```javascript
var obj = { a: 1, b: 2, c: 3 }

for (var i in obj) {
  console.log('obj.' + i + ' = ' + obj[i])
}

// Выведет:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"
``` -->

<!--
## Цикл for ... of

Проходит по итерируемым объектам (включающим в себя массивы, массивоподобные объекты и итераторы с генераторами), выполняя пользовательский хук с инструкциями, исполняющимися для значения каждого уникального свойства.

### Сводка

Оператор `for...of` выполняет цикл обхода итерируемых объектов (включая `Array`, `Map`, `Set`, объект аргументов и подобных), вызывая на каждом шаге итерации операторы для каждого значения из различных свойств объекта.

### Синтаксис

```javascript
for (variable of iterable) {
  statement
}
```

`Variable` - на каждом шаге итерации variable присваивается значение нового свойства объекта iterable. Переменная variable может быть также объявлена с помощью const, let или var.

`Iterable` - объект, перечисляемые свойства которого обходятся во время выполнения цикла.

### Обход Array[..]

```jsx live
function learnJavaScript() {
  let result = ''
  let mas = [10, 20, 30]

  for (let value of mas) {
    value += 5
    result += value + ' '
  }

  return result
}
```

Можно также использовать `const` вместо `let`, если не нужно переназначать переменные внутри блока.

```jsx live
function learnJavaScript() {
  let result = ''
  let mas = [10, 20, 30]

  for (const value of mas) result += value + ' '

  // 10 20 30

  return result
}
```

:::note Внимание
В цикле `for()` выполняется всего одна команда, поэтому `фигурные скобки {...}` можно не писать.
:::

### Обход String

```jsx live
function learnJavaScript() {
  let result = ''
  let iterable = 'boo'

  for (let value of iterable) {
    result += value + ' '
  }
  // "b" "o" "o"

  return result
}
``` -->

<!--
### Обход TypedArray

```jsx live
function learnJavaScript() {
  let result = ''
  let iterable = new Uint8Array([0x04, 0x10, 0xff])

  for (let value of iterable) {
    result += value + ' '
  }
  // 4 16 255
  return result
}
``` -->

<!-- ```javascript
### Обход Map
let iterable = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3]
])

for (let entry of iterable) {
  console.log(entry)
}
// ['a', 1] ['b', 2] ['c', 3]

for (let [key, value] of iterable) {
  console.log(value)
}
// 1 2 3
```

### Обход Set

```javascript
let iterable = new Set([1, 1, 2, 2, 3, 3])

for (let value of iterable) {
  console.log(value)
}
// 1 2 3
```

### Обход объекта arguments

```javascript
;(function () {
  for (let argument of arguments) {
    console.log(argument)
  }
})(1, 2, 3)

// 1 2 3
```

### Закрытие итераторов

В циклах `for...of` аварийный выход осуществляется через `break`, `throw` или `return`. Во всех вариантах итератор завершается.

## Различия между for...in и for...of

:::note Разница
Оба оператора, и `for...in и for...of` производят обход объектов . Разница в том, как они это делают.
:::

Для `for...in` обход перечисляемых свойств объекта осуществляется в произвольном порядке.

Для `for...of` обход происходит в соответствии с тем, какой порядок определен в итерируемом объекте. -->
