---
id: javascript09
title: 功能
sidebar_label: 功能
---

![@serverSerrverlesskiy](/img/javascript/headers/10.jpg)

為了避免在程序算法的許多地方重複相同的代碼，需要函數⚙️。 在現代程序中，功能是主要的“構建塊”。

## 不要重複自己

DRY（rus。不要重複自己）是一種軟件開發原理，旨在減少各種信息的重複，尤其是在具有多個抽象層的系統中。 函數正是服務於該設計原則的數據類型。

## 選擇功能名稱

功能⚙️是行動！ 因此，函數名稱通常是動詞。 它應該簡單，精確並描述函數的作用，以便程序員閱讀代碼 📟 對函數的功能有很好的理解。

![Choice](https://media.giphy.com/media/VbEloWwOz3QqYBsqIZ/giphy.gif)

通常，使用動詞前綴來表示操作的一般性質，然後進行說明。 通常，開發團隊對這些前綴的含義有約定。

例如，以 `` show '' 通常顯示一些東西。

函數⚙️從開始 ...

```
"get .." - return a value,
"calc .." - something is being calculated,
"create .." - create something,
"check .." - check something and return a boolean value, etc.
```

這樣的名字的例子:

```javascript
showMessage (..) // shows the message
getAge (..) // returns age (in some value)
calcSum (..) // calculates the sum and returns the result
createForm (..) // creates a form (and usually returns it)
checkPermission (..) // checks access by returning true / false
```

有了前綴，乍一看一個函數的名字，就很清楚它的代碼在做什麼，可以返回什麼值。🔄.

無論如何，您和您的團隊需要準確了解前綴的含義以及and️可以使用和不能使用的功能。

:::note 超短函數名稱 
經常使用的函數名⚙️有時會變得更短。

例如，jQuery框架具有一個名為的函數⚙️`$`. 在Lodash庫中，主要功能⚙️由下劃線名稱表示 \ \_

這些是例外。 基本上，函數名稱應該簡短而具有描述性 🖊️.
:::

### 功能 === 評論

![cut](https://media.giphy.com/media/kf2bxcoZD8UmY/giphy.gif)

函數⚙️應該簡短，只能做一件事。 如果太大，將功能⚙️拆分為幾個較小的功能是有意義的。 遵循此規則絕對有幫助，尤其是在團隊合作中。

較小的功能⚙️不僅使測試和調試更容易-這些功能的存在serves️可以作為很好的註釋。

## 功能聲明

![Announcement](https://media.giphy.com/media/2A5zHrIPvo8MNnkAXl/giphy.gif)

要創建函數，我們使用函數聲明。

首先是關鍵字 `function`, 然後是函數的名稱，然後是用逗號分隔的括號中的參數列表（在給定的示例中，該列表為空），最後是該函數的代碼📟，也稱為“函數的主體”，位於大括號內 大括號...

🖊️函數的這種經典編寫方法稱為“函數聲明”。

句法 📖:

```javascript
function name (parameters) {
   ... body ... // Algorithm
   returnTotalValue
}
```

:::note 注意力！
如果未指定return，則該函數將返回undefined，並且默認情況下，假定該函數以空的return存根結尾，僅執行內部腳本。
:::

在JavaScript中，除了經典 `Function Declaration` 方法，您可以使用以下方法創建函數⚙️：

- `Function Expression`
- `Arrow Function (arrow functions)`

函數表達式是函數的聲明🗣️，它是表達式的一部分（例如，賦值）.

```javascript
const name = function (parameters) {
  // instructions
}
```

比較一下 `Function Declaration` and `Function Expression`:

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

箭頭函數的語法將在本章後面介紹。 這是編寫函數的簡化且最常用的方式。

## 函數調用

要調用一個函數⚙️並執行它，您需要按名稱引用它，然後指定兩個括號 `myMessages()`:

```javascript
// function declaration
function myMessage() {
  let str = 'Hello!'
}

myMessage() // function call
```

請注意，在此示例中，該函數被調用但不返回值。

## 帶返回功能

![Return](https://media.giphy.com/media/Y08bx6Fea1BafzTlvc/giphy.gif)

為了使函數返回某些內容，關鍵字 `return` （結果的退出點或返回點）和返回值在其主體中指定。

```jsx live
function showNumberFive() {
  return 5
}
```

實驗，將原來的數字9️⃣替換為您的年數。

:::tip 記住！
通過聲明一個函數然後調用它，無論如何我們都可以在函數主體теле中獲得算法的結果（先前描述的動作）。
:::

## 另一個函數內的函數

![Matryoschka](https://media.giphy.com/media/bFhSvsdyaCy4g0d2lU/giphy.gif)

在功能⚙️內部，您可以放置其他功能⚙️。 例如，函數⚙️ `showNumberFive()` 將返回數字5️⃣，其值將通過調用函數Learn來顯示`learnJavaScript()`.

```jsx live
function learnJavaScript() {
  function showNumberFive() {
    return 5
  }
  return showNumberFive()
}
```

讓我們逐步完成所有這些步驟：

- 關鍵字 `function` 向解釋器指示以下代碼是用戶定義的，即由您創建的代碼，而不是內置函數。
- 用駝峰寫 `showNumberFive` ​​是此函數的自定義名稱。 通常，對於解釋器而言，準確調用此函數沒有什麼區別，但是最好給函數名稱清楚地表明它們的確切作用。
- `()` 括號是任何功能的必需元素。 有時，括號enclosed中會包含一個，兩個或多個變量，在我們的情況下，括號中什麼也沒有。
-函數本身必須用花括號括起來 `{}` - 程序算法的本質。
-函數本身的主體通常向右縮進（使用TAB鍵）。 這對於程序的執行不是必需的，但對於團隊合作則是必需的，因為它極大地促進了代碼的可讀性。
- T他關鍵字 `return` m可以看出，每當我們調用此函數時，都會傳遞值，即," returned ", 因此，它被稱為“函數的返回值”。

<!-- Еще один пример 👇 :

```jsx live
function sum() {
  let x = 10
  let y = 20
  let z = x + y // Алгоритм
  return z
}
```

В функции⚙️ `sum()` объявляются🗣️ переменные `x` и `y` со значениями, объявляется🗣️ переменная 🔔 `z` и по заданному алгоритму производим расчет (сложение 2-х чисел), а результат выводим через `return`.

При необходимости обращаться к функции⚙️ можно несколько раз. Например в значение двух разных переменых присвоить нашу функцию⚙️:

```javascript
let x1 = sum()

let y1 = sum()
```

Этот пример явно показывает одно из главных предназначений функций⚙️: избавление от дублирования кода📟 ! Функцию⚙️ можно запускать множества раз в разных участках вашего кода📟 . -->

## 參數和函數參數

![couple](https://media.giphy.com/media/3o7TKO3AC2o5cOkZfG/giphy.gif)

讓我們再聲明一個函數оо，但是在括號中帶有一個變量。
當函數在方括號中還包含變量，時，我們將其稱為形式參數（預先未定義，我們不知道x的值是什麼）。 大多數函數⚙️都會有參數，但是有時我們會遇到沒有參數的函數⚙️。

```javascript
function addThree(x) {
  return x + 3
}
```

在聲明函數🗣️及其參數之後，我們可以調用（運行）具有特定值（例如：5）的“代碼塊”。
我們將此賦值稱為參數：

```javascript
addThree(5)

// Answer: 8
```

在我們的示例中，數字5️⃣是函數參數-傳遞給函數⚙️的特定值。
我們的函數⚙️收到參數後，立即將其值分配給變量x（這是函數⚙的形式參數）。

### 代碼示例📟:

實驗 👇:

```jsx live
function learnJavaScript() {
  function addThree(x) {
    return x + 3
  }

  return addThree(5)
}
```

### 參數和參數之間的差異

![Dedefencce](https://media.giphy.com/media/l41YkuPROHQj0fjRS/giphy.gif)

包括以下內容：

`argument` 是我們在括號中調用時傳遞給函數⚙️的特定值。 將此值或一組值分配給此函數的形式參數⚙️。

`parameter` 是在函數聲明中指定的變量the的名稱，並在函數調用時等待分配一個特定的值。 分配給參數的值是參數。

許多程序員可以互換使用這些術語（參數和參數），但是我們了解它們之間的區別。

## 例子:

![Mathematics](https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif)

讓我們嘗試聲明一個用於在矩形周長的兩側進行計算的函數по，該函數的參數將期望兩個2️⃣作為其值。 請注意，如果您有多個參數，則必須用逗號將它們彼此分開。

```jsx live
function learnJavaScript() {
  function calcPrym(x, y) {
    return 2 * x + 2 * y
  }
  return calcPrym(7, 4)
}
```

當我們調用此函數⚙️時，我們將不得不給它兩個2️⃣數字作為參數-特定矩形的邊的值（以逗號分隔）：

```javascript
calcPrym(7, 8)

// Answer: 30
```

哦，非常感謝，計算機🖥️！

通過將其他值傳遞給函數⚙️，它還將立即計算其他矩形的周長。

:::信息再次！
函數⚙️的主要目的之一是擺脫代碼重複📟，並具有多次調用它們以解決問題的能力。
:::

## 內建功能

![Integration](https://media.giphy.com/media/F0NHdHQRjr9f2/giphy.gif)

### console.log()

![Secret](https://media.giphy.com/media/l1J9BGJOQMbkbpWVy/giphy.gif)

僅向開發人員輸出（日誌）調試信息到控制台的一種方式（用戶將無法看到它；如您所知，大多數人甚至不知道控制臺本身的存在，也不知道秘密的“日誌” “！）。

在Google Chrome瀏覽器中按鍵盤快捷鍵“ Ctrl + Shift + I”，然後輸入“控制台”標籤：

```javascript
console.log('Top Secret! For Developers Only!')
```

正如函數名稱⚙️所暗示的，我們將“ log”（即有關係統操作的信息）打印到控制台； 開發人員一直都在使用這種強大的功能。 例如，當您收到錯誤消息時，您恰好在控制台中看到了此內容-解釋器向控制台提供了有關“系統操作”的信息（“已記錄”），以便您可以閱讀和更正必要的參數。 總之，這是非常有用的事情。 您將不得不使用 `console.log ()` 不止一次或兩次2️⃣，所以請記住此功能⚙️！

逐行輸入以下命令：

```javascript
console.log ('Print any message you want')
console.log ('just put some' + 'string here)
let myMessage = 'You can also use variables as an argument!'
console.log (myMessage)s
```

當您使用控制台日誌時，我將向您展示另一個技巧。 我們的好朋友-反斜杠將幫助我做到這一點！

在它的協助下 `\ n` 您可以逐行拆分代碼。 自己嘗試！
逐行輸入以下命令：

```javascript
console.log('You can split any text  n into many  n lines.')
console.log('Here is the first.  nAnd here is the 2nd.  n3-i  n4-i  n5-i!')
```

這 `\ n` 事物實際上有許多有用的實際用途。 例如，您可以在 [ASCII] 編碼方式 (https://ru.wikipedia.org/wiki/ASCII) 在控制台中。 在控制台中輸入：

```javascript
console.log("c ___ c  n /. \\ n \\ _ T _ /  n / '' \\ n (/. \\)  n / '; -;' \\ n () /   () ")
```

清楚為什麼會這樣嗎？

每個`\ n` 指定到新行的過渡，以便後續字符似乎在下面“向下”，瞧！ 畫一隻可愛的熊，為社會的發展做出了重大貢獻！

### Math.random()

![Random](https://media.giphy.com/media/3o6ozoD1ByqYv7ARIk/giphy.gif)

另一個有用的內置函數⚙️： `Math.random()`. 請注意，與以前的函數不同，此函數的名稱⚙️以大寫字母開頭 `M`. T這是一個原因，JavaScript中的大寫和小寫字母內部代碼不同 📟. 在每種語言中，無論是俄語，英語還是JavaScript，該規則總是有一些例外。 這就是其中之一。 您遇到的所有其他變量和函數⚙️應該用小寫字母書寫。 請記住，註冊很重要，如果名稱 `Math.random()` 以。。開始 `math`, 然後功能⚙️根本就不會運行！

```jsx live
function learnJavaScript() {
  return Math.random()
}
```

每次都有新號碼！ 該函數返回0到1之間的隨機實數。

讓我們更新方程式 👇:

```jsx live
function learnJavaScript() {
  return Math.random() * 100
}
```

如果您突然需要0到100範圍內的隨機數，則此功能對您非常有用。

### Math.floor()

![Floor](https://media.giphy.com/media/uTAZTQi8dX1VGa4pXT/giphy.gif)

⚙️函數將數字或digit5️⃣作為自變量，然後將其四捨五入。

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

`Math.round (x)`反之亦然，最接近的整數，小數點後不能有十分之一。

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

您是否曾經註意到某些消息中的大寫單詞太多？
好吧，這就是我們現在要學習的內容。

您可以使用內置方法輕鬆獲取任何字符串並返回其新版本，並以大寫🖊️字母（即大寫/小寫）分隔 `.toUpperCase() / .toLowerCase()`.並且，因此，您可以返回任何以小寫字母（即小寫）的字符串。

請記住，方法只是附加到所描述對象的函數，在這種情況下為通用字符串。

像這樣 `.toUpperCase()` in個大寫🖊️字母👇:

```jsx live
function learnJavaScript() {
  return 'I like pizza!'.toUpperCase()
}
```

和`.toLowerCase()` 小寫：

```jsx live
function learnJavaScript() {
  return 'LISTEN, WELL ENOUGH YOU SHOULD ALREADY.'.toLowerCase()
}
```

## 現在在一起！

![Mix](https://media.giphy.com/media/WTdOnTQJwTHmhifwGE/giphy.gif)

讓我們嘗試從剛剛學習的功能中混合一些小雞尾酒⚙️。

```jsx live
function learnJavaScript() {
  // randomNumber - a random number from 0 to 1
  let randomNumber = Math.random()
  // Multiply our random number by 100 to get a number between [0; 100] by shifting the comma 2 places to the right
  let number100 = randomNumber * 100
  // Use Math.floor () to round TO THE LOWER SIDE
  let task = 'A number between 0 and 100 was selected:'
  let numberBig = Math.floor(number100)
  // Outputting the result
  return task + numberBig
}
```

希望上述所有內容對您來說都不是一件困難的任務，並且您了解所有內容。 如果沒有，那麼請花一些時間檢查每一行並對其進行評論。

## 箭頭功能（箭頭功能）

![Arrow](https://media.giphy.com/media/xT9IgAakXAITtXIWje/giphy.gif)

創建函數⚙️甚至有一種更簡單明了的語法такс，通常比其他類型要好。

因此，編寫🖊️函數⚙️的經典版本：

功能聲明：

```javascript
function func1(arg1, arg2, ...argN) {
  return expression
}
```

函數表達式:

```javascript
let func1 = function (arg1, arg2, ...argN) {
  return expression
}
```

這樣的代碼📟創建一個函數⚙️ `func1` 帶參數 `arg1, .. argN` 併計算 `expression` - 一組使用它們的右側算法的操作，通過關鍵字返回計算結果 `return`.

現在讓我們使用 `Arrow functions`:

```javascript
let func1 = (arg1, arg2, ...argN) => expression
```

換句話說，這是這種表示法的縮寫 🖊️.

:::note How!
`=>` we have replaced `{return ...}` on the right side and allowed us not to write the keyword `function` on the left side!
:::

讓我們看一個具體的例子 👇:

```jsx live
function learnJavaScript() {
  // The original form of the function for adding 2 numbers
  let calcSum1 = function (a, b) {
    return a + b
  }
  // Arrow form (no word `function` and` return`)
  let calcSum2 = (a, b) => a + b

  return calcSum1(5, 2) + ' или ' + calcSum2(5, 2) // 7 or 7
}
```

兩種選擇都是正確的！ `function` 在現代writing代碼編寫中幾乎從未使用過，因此請使用箭頭功能！

### 只有一個論點

![only one](https://media.giphy.com/media/3o6MbjZirZUc6cYpz2/giphy.gif)

如果我們只有一個參數，則可以省略參數周圍的括號，從而使表示法更短 `let num2 = n => n * 2`

```jsx live
function learnJavaScript() {
  // The original form of the function for adding 2 numbers:
  let num1 = function (n) {
    return n * 2
  }

  // remove the parentheses around n
  let num2 = (n) => n * 2 // prettier-ignore

  return num1(7) + ' или ' + num2(7) // 14
}
```

### 如果沒有參數

![no](https://media.giphy.com/media/LOEI8jsNKPmzdJYvhJ/giphy.gif)

如果沒有參數，則避免重複 `==`, 使用 `empty parentheses` 👇:

```jsx live
function learnJavaScript() {
  let messHello = () => 'Hello!'

  return messHello()
}
```

箭頭功能既方便又緊湊！

## 自執行功能 (IIFE)

![Start](https://media.giphy.com/media/xTiTnmeJ1bBGONMCBy/giphy.gif)

`Immediately Invoked Function Expression` 是定義後立即執行的JavaScript函數。 除了普通和箭頭功能外，JavaScript還允許您創建在JavaScript中發揮重要作用的匿名函數⚙️。

### 匿名功能

![Anonym](https://media.giphy.com/media/m3lszq64i1k2s/giphy.gif)

如果之後 `function` 有一個名字-函數⚙️已命名，否則為匿名。
匿名函數⚙️通常會創建並立即運行。 另一個重要的區別是，已命名的函數是⚙️聲明的🗣️，而匿名函數是使用function語句創建的。

在Google Chrome控制台中輸入以下代碼：

```
(function (num1, num2) {
  return num1 + num2
})(7, 4)
```

自我調用由函數⚙️末尾的括號創建，該括號告訴解釋器立即運行該函數⚙️。

## 結論

![conclusion](https://media.giphy.com/media/8Bksh0hra9RcZcSNSO/giphy.gif)

通過了解箭頭和正常函數⚙️，您可以將函數傳遞給變量對象🔔並在模塊中重建代碼。 這種函數也可以用於創建和返回其他函數⚙️。 在這裡，我們已經在討論閉包了，我們將在下一個系列中討論閉包。

## 問題？

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

頻道輸入 [Discord](https://discord.gg/6GDAfXn) 付款後 [Patreon](https://www.patreon.com/javascriptcamp).

## 問題:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

如何聲明一個函數？

1. 函數名稱（參數，用逗號分隔） {
   // 主體，功能代碼
   }
2. 程序名稱（參數） {
   // 主體，功能代碼
   }
3. 讓名字 (s) {}

函數結果的返回點或返回點？

1. `Esc`
2. `return`
3. `Hello`

`return` 函數體內的關鍵字:

1.強制性
2.可選
3.不同地

給定功能

```javascript
function addThree(x) {
  return x + 3
}

addThree(20)
```

定義一個形式參數：

1. `20`
2. `x`
3. `x + 3`

給定功能

```javascript
function addThree(x) {
  return x + 3
}

addThree(20)
```

定義一個參數：

1. `20`
2. `x`
3. `x + 3`

內置功能在哪裡？

1. `console.log()`
2. `myMessage()`
3. `return ()`

箭頭函數使用什麼語法？

1. `Forward()`
2. `=>`
3. `go.Arrow`

使用箭頭功能可以嗎？

1.編寫更緊湊，更安全的代碼
2.增加代碼的結構
3.允許使用新變量

自我執行功能是

1.定義後立即執行的功能
2. JavaScript中的內置函數
3.這是執行一系列命令的通用過程

為了了解您學到了多少本課程，請對 [mobile application](http://onelink.to/njhc95) 我們學校就這個話題。

![Sumerian school](/img/app.png)

## 鏈接

1. [MDN web docs - Function](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function)
2. [Learn.javascript.ru - Статья "Функции"](https://learn.javascript.ru/function-basics)
3. [Learn.javascript.ru - Статья "Функции-стрелки"](https://learn.javascript.ru/arrow-functions-basics)
4. [Анонимные и самовыполняющиеся функции в JavaScript](https://webformyself.com/anonimnye-i-samovypolnyayushhiesya-funkcii-v-javascript/)
5. [Developer.mozilla.org - Статья "Math"](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math)
6. [Developer.mozilla.org - Статья "Стрелочные функции"](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
7. [Basicweb.ru - Статья "JavaScript функции"](https://basicweb.ru/javascript/js_function.php)
8. [Javascript.ru - Статья "Функции"](https://javascript.ru/basic/functions)
9. [Code for Teens: The Perfect Beginner's Guide to Programming, Volume 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)

## 貢獻者 ✨

感謝這些好人 ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

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

```

```
