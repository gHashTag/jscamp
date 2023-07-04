---
id: javascript09
title: المهام
sidebar_label: المهام
---

![@serverSerrverlesskiy](/img/javascript/headers/10.jpg)

المهام⚙️ حتى لا تكرر نفس الرمز في العديد من الأماكن في خوارزمية البرنامج. في البرامج الحديثة ، الوظائف هي "اللبنات الأساسية".

## لا تكرر نفسك

DRY (روس. لا تكرر نفسك) هو مبدأ تطوير برمجيات يهدف إلى تقليل تكرار المعلومات بمختلف أنواعها ، خاصة في الأنظمة ذات طبقات التجريد المتعددة. الوظائف هي بالضبط نوع البيانات التي تخدم مبدأ التصميم هذا.

## حدد اسم الوظيفة

Function⚙️ هي العمل! لذلك ، عادة ما يكون اسم الوظيفة فعل. يجب أن تكون بسيطة ودقيقة ، وتصف عمل الوظيفة ، حتى يتمكن المبرمج من قراءة الكود لديه فهم جيد لما تفعله الوظيفة.

![Choice](https://media.giphy.com/media/VbEloWwOz3QqYBsqIZ/giphy.gif)

كقاعدة عامة ، يتم استخدام بادئات الفعل للإشارة إلى الطبيعة العامة للإجراء ، متبوعًا بتوضيح. عادةً ما يكون لدى فرق التطوير اصطلاحات حول معنى هذه البادئات.

على سبيل المثال ، عادةً ما تظهر الدوال - التي تبدأ بـ `` إظهار '' شيئًا ما.

الوظائف تبدأ بـ ...

```
"get .." - إرجاع قيمة ،
"calc .."- شيء ما يتم حسابه ،
"create .." - ابتكار شيء ما ،
"check .." - تحقق من شيء ما وأعد قيمة منطقية ، إلخ.
```

أمثلة على هذه الأسماء:

```javascript
showMessage (..)// يظهر الرسالة
getAge (..) // إرجاع العمر (في بعض القيمة)
calcSum (..) // يحسب المجموع ويعيد النتيجة
createForm (..) // ينشئ نموذجًا (ويعيده عادةً)
checkPermission (..) // يتحقق الوصول عن طريق إرجاع صح / خطأ
```

بفضل البادئات ، للوهلة الأولى على اسم الوظيفة ، يصبح من الواضح ما يفعله كودها والقيمة التي يمكن أن ترجعها.

على أي حال ، أنت وفريقك بحاجة إلى فهم ما تعنيه البادئة بالضبط وماذا يمكن للدالة وما لا تستطيع فعله بها.

::: ملاحظة أسماء الوظائف فائقة القصر⚙️
أحيانًا يتم اختصار أسماء الدوال المستخدمة في كثير من الأحيان.

على سبيل المثال ، يحتوي إطار عمل jQuery على وظيفة تسمى `$`.في مكتبة Lodash ، يتم تمثيل الوظيفة الرئيسية باسم الشرطة السفلية \ \_

هذه استثناءات. بشكل أساسي ، يجب أن تكون أسماء الوظائف قصيرة ووصفية بشكل معقول .
:::

### وظائف === تعليقات

![cut](https://media.giphy.com/media/kf2bxcoZD8UmY/giphy.gif)

يجب أن تكون الوظائف قصيرة وأن تفعل شيئًا واحدًا فقط. إذا كان شيئًا كبيرًا ، فمن المنطقي تقسيم الوظيفة إلى عدة وظائف أصغر. إن اتباع هذه القاعدة مفيد بالتأكيد ، خاصة في العمل الجماعي.

الدوال الصغيرة - لا تجعل الاختبار وتصحيح الأخطاء أسهل فحسب - إن وجود مثل هذه الوظائف - بمثابة تعليقات جيدة.

## إعلان الوظيفة

![Announcement](https://media.giphy.com/media/2A5zHrIPvo8MNnkAXl/giphy.gif)

لإنشاء الدوال - نستخدم إعلان الوظيفة -.

يأتي أولاً الكلمة الأساسية `function`, متبوعًا باسم الوظيفة ، ثم قائمة المعلمات بين قوسين مفصولة بفواصل (في المثال المعطى فارغة) ، وأخيرًا ، الرمز من الوظيفة ، وتسمى أيضًا "جسم الوظيفة" ، داخل الأقواس المتعرجة ...

هذه الطريقة الكلاسيكية في الكتابة  وظائف تسمى`Function Declaration`.

بناء الجملة  :

```javascript
function name (parameters) {
   ... body ... // Algorithm
   returnTotalValue
}
```

::: لاحظ انتبه!
إذا لم يتم تحديد أي عودة ، فإن الوظيفة ترجع غير محددة بدلاً من ذلك ، ويفترض افتراضيًا أن تنتهي الوظيفة بخط إرجاع فارغ ، مع تنفيذ البرامج النصية الداخلية فقط.
:::

في JavaScript ، بصرف النظر عن الإصدار الكلاسيكي`Function Declaration` طريقة ، يمكنك إنشاء دالة باستخدام:

- `Function Expression`
- `Arrow Function (arrow functions)`

تعبير الدالة هو تصريح من وظيفة التي هي جزء من تعبير (على سبيل المثال ، مهمة).

```javascript
const name = function (parameters) {
  // instructions
}
```

فلنقارن `Function Declaration` و` Function Expression`:

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

سيتم تقديم صيغة دالة السهم لاحقًا في هذا الفصل. هذه هي الطريقة المبسطة والأكثر استخدامًا لكتابة الوظائف.

## استدعاء وظيفة

لاستدعاء دالة وتنفيذها ، تحتاج إلى الرجوع إليها بالاسم ثم تحديد قوسين `myMessages()`:

```javascript
// function declaration
function myMessage() {
  let str = 'Hello!'
}

myMessage() // function call
```

لاحظ أنه في هذا المثال يتم استدعاء الوظيفة ولكنها لا تُرجع قيمة.

## وظائف مع العودة

![Return](https://media.giphy.com/media/Y08bx6Fea1BafzTlvc/giphy.gif)

من أجل وظيفة لإرجاع شيء ما ، الكلمة الأساسية`return` (نقطة الخروج أو العودة للنتيجة) ويتم تحديد القيمة المعادة في نصها.

```jsx live
function showNumberFive() {
  return 5
}
```

التجربة ، استبدل الرقم الأصلي9️⃣ بعدد سنواتك.

:::نصيحة تذكر!
من خلال إعلان وظيفة ثم استدعاءها ، نحصل على أي حال على نتيجة الخوارزمية (الإجراءات الموصوفة سابقًا) في جسم الوظيفة.
:::

## وظيفة داخل وظيفة أخرى

![Matryoschka](https://media.giphy.com/media/bFhSvsdyaCy4g0d2lU/giphy.gif)

داخل وظيفة⚙️ يمكنك وضع وظائف أخرى⚙️. على سبيل المثال ، الوظيفة⚙️ `showNumberFive()` سيعيد الرقم     ، سيتم عرض قيمته من خلال الاستدعاء إلى وظيفة التعلم`learnJavaScript()`.

```jsx live
function learnJavaScript() {
  function showNumberFive() {
    return 5
  }
  return showNumberFive()
}
```

لنستعرض كل هذا خطوة بخطوة:

- الكلمة `function` يشير للمترجم الفوري إلى أن الكود التالي معرف من قبل المستخدم ، أي أنه تم إنشاؤه بواسطتك وليس وظيفة مضمنة.
- مكتوب في حالة الجمل`showNumberFive` ​​هو الاسم المخصص لهذه الوظيفة. بالنسبة للمترجم الشفهي ، بشكل عام ، لا فرق بالضبط في تسمية هذه الوظيفة ، ولكن من الأفضل إعطاء أسماء الوظائف التي تشير بوضوح إلى ما تفعله بالضبط.
- `() `الأقواس هي عنصر مطلوب لأي دالة. في بعض الأحيان يتم وضع متغير واحد أو متغيرين أو أكثر بين قوسين , في حالتنا لا يوجد شيء بين قوسين.
- يجب أن يكون جسم الوظيفة نفسها محاطًا بأقواس معقوفة "{}" - جوهر خوارزمية البرنامج.
- عادة ما يتم وضع مسافة بادئة لجسم الوظيفة نفسها إلى اليمين (باستخدام مفتاح TAB) هذا ليس ضروريًا لتنفيذ البرنامج ، ولكنه ضروري للعمل الجماعي ، لأنه يسهل إلى حد كبير قراءة الكود.
- تعني الكلمة الرئيسية "إرجاع" أنه كلما استدعينا هذه الوظيفة ، سيتم تمرير القيمة ، أي "إرجاع" ، إلى المترجم ، لذلك يطلق عليها "القيمة المرجعة للدالة".

<!-- Еще один пример  :

```jsx live
function sum() {
  let x = 10
  let y = 20
  let z = x + y // Алгоритм
  return z
}
```

In the function `sum ()`, the variables `x` and` y` with values are declared, the variable  `z` is declared and, according to the given algorithm, we perform the calculation (addition of 2 numbers), and the result is output through` return`.

If necessary, you can call the function При several times. For example, assign our function to the value of two different variables:

javascript
let x1 = sum ()

let y1 = sum ()
``

This example clearly shows one of the main purposes of functions⚙️: getting rid of code duplication! A function⚙️ can be run multiple times in different places in your code. ->

## Parameters and function arguments

![couple](https://media.giphy.com/media/3o7TKO3AC2o5cOkZfG/giphy.gif)

Let's declare one more function но, but with a variable in parentheses.
When the function also contains the variable  in brackets, we will call it a formal parameter (undefined in advance, we do not know what the value of x will be). Most functions⚙️ will have parameters, but sometimes we will come across functions⚙️ without them.

```javascript
function addThree(x) {
  return x + 3
}
```

After the declaration of the function⚙️ and its parameters, we can call (run) the "code block" with a specific value (for example: 5).
We will call this assignment an argument:

```javascript
addThree(5)

// Answer: 8
```

In our example, the number     is the function argument - a specific value passed into the function⚙️.
As soon as our function⚙️ received its argument, it immediately assigned its value to the variable x (which is a formal parameter of our function⚙️).

### Code example:

Experiment :

```jsx live
function learnJavaScript() {
  function addThree(x) {
    return x + 3
  }

  return addThree(5)
}
```

### Difference between parameters and arguments

![Dedefencce](https://media.giphy.com/media/l41YkuPROHQj0fjRS/giphy.gif)

Consists of the following:

`argument` is a specific value that we" passed "to the function⚙️ when calling it in parentheses. This value or set of values is assigned to the formal parameters of this function⚙️.

`parameter` is the name of a variable  specified in the function declaration and waiting to be assigned a specific value at the time of the function call. The value assigned to the parameter is the argument.

Many programmers use these terms (argument and parameter) interchangeably, but we understood the difference.

## Example:

![Mathematics](https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif)

Let's try to declare a function по for calculating on two sides of the rectangle perimeter, the parameters of which will expect two 2️⃣ numbers as their value. Please note that if you have more than one parameter, then they must be separated from each other with a comma.

```jsx live
function learnJavaScript() {
  function calcPrym(x, y) {
    return 2 * x + 2 * y
  }
  return calcPrym(7, 4)
}
```

When we call this function⚙️, we will have to give it two 2️⃣ numbers as arguments - the values of the sides of a particular rectangle (separated from each other by a comma):

```javascript
calcPrym(7, 8)

// Answer: 30
```

Oh, thanks a lot, computer    ️!

By passing other values to the function⚙️, it will immediately calculate the perimeters of other rectangles as well.

:::info Once again!
One of the main purposes of functions⚙️ is to get rid of code duplication and the ability to call them multiple times to solve your problems.
:::

## Built-in functions

![Integration](https://media.giphy.com/media/F0NHdHQRjr9f2/giphy.gif)

### console.log()

![Secret](https://media.giphy.com/media/l1J9BGJOQMbkbpWVy/giphy.gif)

A way to output (log) debug information to the console only for developers (users will not be able to see it; as you know, most people are not even aware of the existence of the console itself, and not that about secret "logs"!).

Press the keyboard shortcut `Ctrl + Shift + I` in the Google Chrome browser and type in the` Console` tab:

```javascript
console.log('Top Secret! For Developers Only!')
```

As the name of the function⚙️ implies, we print the "log" (that is, information about the system operation) to the console; developers use this good superpower all the time. For example, when you had error messages, you saw exactly this in the console - the interpreter gave ("logged") information about the system operation to the console so that you could read and correct the necessary parameters. In a word, a very useful thing. You will have to resort to using `console.log ()` more than once or twice 2️⃣, so remember this function⚙️!

Enter the following commands line by line:

```javascript
console.log ('Print any message you want')
console.log ('just put some' + 'string here)
let myMessage = 'You can also use variables as an argument!'
console.log (myMessage)s
```

While you're playing with the console logs, I'll show you another trick. Our good old friend - backslash will help me to do it!

With its assistance, `\ n` you can split your code line by line. Try it yourself!
Enter the following commands line by line:

```javascript
console.log('You can split any text  n into many  n lines.')
console.log('Here is the first.  nAnd here is the 2nd.  n3-i  n4-i  n5-i!')
```

This `\ n` thing actually has many useful practical uses. For example, you can draw a bear in the [ASCII] encoding (https://ru.wikipedia.org/wiki/ASCII) in the console. Type in the console:

```javascript
console.log("c ___ c  n /. \\ n \\ _ T _ /  n / '' \\ n (/. \\)  n / '; -;' \\ n () /   () ")
```

Is it clear why this is so?

Each `\ n` specifies a transition to a new line, so that subsequent characters seem to" go down "below, and voila! We have made a significant contribution to the development of society by drawing a cute bear!

### Math.random()

![Random](https://media.giphy.com/media/3o6ozoD1ByqYv7ARIk/giphy.gif)

Another useful built-in function⚙️: `Math.random()`. Please note that, unlike the previous ones, the name of this function⚙️ begins with an uppercase letter `M`. There is a reason for this, the uppercase and lowercase letters in JavaScript differ in their internal codes. In every language , be it Russian, English or JavaScript, there are always some exceptions to the rule. This is one of them. All other variables and functions⚙️ that you come across should be written with a lowercase letter. Remember that register is important, and if the name `Math.random()` starts with `math`, then the function⚙️ simply won't run!

```jsx live
function learnJavaScript() {
  return Math.random()
}
```

A new number every time! The function returns a random real number between 0 and 1.

Let's update the equation :

```jsx live
function learnJavaScript() {
  return Math.random() * 100
}
```

If you suddenly need a random number in the range of 0 to 100, then this function will be very useful to you.

### Math.floor()

![Floor](https://media.giphy.com/media/uTAZTQi8dX1VGa4pXT/giphy.gif)

This function⚙️ takes a number or digit    as an argument and then rounds them down.

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

`Math.round (x)` vice versa to the nearest integer, without any tenths after the decimal point.

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

Have you EVER noticed THAT SOME messages ARE TOO MANY CAPITAL WORDS?
Well, that’s what we’ll learn now.

You can easily take any string and return its new version, separated by uppercase  letters (i.e. upper / lower case), using the built-in method `.toUpperCase() / .toLowerCase()`. And, accordingly, you can return any string in lowercase letters (that is, in lowercase).

Remember that a method is just a function, attached to the object described, in this case a generic string.

It works like this, `.toUpperCase()` in uppercase  letters :

```jsx live
function learnJavaScript() {
  return 'I like pizza!'.toUpperCase()
}
```

And `.toLowerCase()` in lowercase:

```jsx live
function learnJavaScript() {
  return 'LISTEN, WELL ENOUGH YOU SHOULD ALREADY.'.toLowerCase()
}
```

## Now all together!

![Mix](https://media.giphy.com/media/WTdOnTQJwTHmhifwGE/giphy.gif)

Let's try to mix a small cocktail from the functions we just learned⚙️.

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

Hopefully, none of the above turned out to be a difficult task for you, and you understand everything. If not, then take your time to review each line and comments to it.

## Arrow Function (arrow functions)

![Arrow](https://media.giphy.com/media/xT9IgAakXAITtXIWje/giphy.gif)

There is an even simpler and concise syntaxтакс for creating functions⚙️, which is often better than other kinds.

So, the classic version of writing  function⚙️:

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

Such code creates a function⚙️ `func1` with arguments `arg1, .. argN` and calculates `expression` - a set of actions of the algorithm on the right side using them, returning the result of calculations through the keyword` return`.

Now let's use the `Arrow functions`:

```javascript
let func1 = (arg1, arg2, ...argN) => expression
```

In other words, this is a shorter version of such a notation .

:::note How!
`=>` we have replaced `{return ...}` on the right side and allowed us not to write the keyword `function` on the left side!
:::

Let's take a look at a concrete example :

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

Both options are correct! `function` is almost never used in modern writing of code, so use arrow functions!

### Only one argument

![only one](https://media.giphy.com/media/3o6MbjZirZUc6cYpz2/giphy.gif)

If we have only one argument, then the parentheses around the parameters can be omitted, making the notation even shorter `let num2 = n => n * 2`

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

### If there are no arguments

![no](https://media.giphy.com/media/LOEI8jsNKPmzdJYvhJ/giphy.gif)

If there are no arguments, then to avoid double `==`, use `empty parentheses` :

```jsx live
function learnJavaScript() {
  let messHello = () => 'Hello!'

  return messHello()
}
```

The arrow functions are convenient and very compact!

## Self-Executing Functions (IIFE)

![Start](https://media.giphy.com/media/xTiTnmeJ1bBGONMCBy/giphy.gif)

`Immediately Invoked Function Expression` is a JavaScript function that is executed immediately after it has been defined. JavaScript allows you to create, in addition to ordinary and arrow functions, also anonymous functions⚙️ that play an important role in JavaScript.

### Anonymous functions

![Anonym](https://media.giphy.com/media/m3lszq64i1k2s/giphy.gif)

If after `function` there is a name - the function⚙️ is named, otherwise anonymous.
Anonymous functions⚙️ are often created and run immediately. Another important difference is that named functions are⚙️ declared and anonymous functions are created using the function statement.

Type the following code in the Google Chrome console:

```
(function (num1, num2) {
  return num1 + num2
})(7, 4)
```

Self-invocation is created by parentheses at the end of a function⚙️ that tell the interpreter to run that function⚙️ immediately.

## Conclusion

![conclusion](https://media.giphy.com/media/8Bksh0hra9RcZcSNSO/giphy.gif)

By understanding arrow and normal functions⚙️, you can pass functions to variable objects and rebuild your code in modules. Functions of this kind can also be used to create and return other functions⚙️. Here we are already talking about closure, which we will talk about in the next series.

 [![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

## Problems?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Write to [Discord](https://discord.gg/6GDAfXn) chat.

## Questions:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

How is a function declared?

1. function name (parameters, separated by commas) {
   // body, function code
   }
2. procedure name (parameters) {
   // body, function code
   }
3. let name (s) {}

Exit or return point of result in function?

1. `Esc`
2. `return`
3. `Hello`

The `return` keyword inside the function body:

1. mandatory
2. optional
3. differently

The function is given

```javascript
function addThree(x) {
  return x + 3
}

addThree(20)
```

Define a formal parameter:

1. `20`
2. `x`
3. `x + 3`

The function is given

```javascript
function addThree(x) {
  return x + 3
}

addThree(20)
```

Define an argument:

1. `20`
2. `x`
3. `x + 3`

Where is the built-in function?

1. `console.log()`
2. `myMessage()`
3. `return ()`

What syntax do arrow functions use?

1. `Forward()`
2. `=>`
3. `go.Arrow`

Using arrow functions allows?

1. Write code more compact and safer
2. Increases the structure of the code
3. Allows using new variables

A self-executing function is

1. A function that is executed immediately after it has been defined
2. Built-in function in JavaScript
3. This is a common procedure that performs a sequence of commands

In order to understand how much you learned this lesson, take the test on the [mobile application](http://onelink.to/njhc95) of our school on this topic.

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

## Links

1. [MDN web docs - Function](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function)
2. [Learn.javascript.ru - Статья "Функции"](https://learn.javascript.ru/function-basics)
3. [Learn.javascript.ru - Статья "Функции-стрелки"](https://learn.javascript.ru/arrow-functions-basics)
4. [Анонимные и самовыполняющиеся функции в JavaScript](https://webformyself.com/anonimnye-i-samovypolnyayushhiesya-funkcii-v-javascript/)
5. [Developer.mozilla.org - Статья "Math"](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math)
6. [Developer.mozilla.org - Статья "Стрелочные функции"](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
7. [Basicweb.ru - Статья "JavaScript функции"](https://basicweb.ru/javascript/js_function.php)
8. [Javascript.ru - Статья "Функции"](https://javascript.ru/basic/functions)
9. [Code for Teens: The Perfect Beginner's Guide to Programming, Volume 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

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


