---
id: javascript16
title: Cycles
sidebar_label: Cycles
---

![@serverSerrverlesskiy](/img/javascript/headers/17.jpg)

When an action needs to be repeated a large number of times, cycles are used in programming. For example, you need to display the text 📜 "Hello, World!" 🌎. Instead of repeating the same text output command 📜 two hundred times, a loop is often created that repeats 200 times what is written 🖊️ in the body of the loop. Each repetition is called an iteration.

![cycle](https://media.giphy.com/media/Pkck2unt0XQfc4gs3R/giphy.gif)

Iteration in programming - in the broadest sense - the organization of data processing in which actions are repeated many times, without leading to calls 📞 themselves (as opposed to recursion). In a narrow sense, it is one step in an iterative, cyclical process.

A loop in JavaScript (and in all other languages👅) is a block of code📟 that repeats itself as long as a known condition is true. There are many different types of loops, but they all essentially do the same thing: they repeat an action several times.

## The while() loop

![While](https://media.giphy.com/media/WS6CDvvyNDrhZRFBtT/giphy.gif)

The `while` operator creates a loop that executes the specified instruction while the condition being tested is true. The logical value of the condition is calculated вычис before executing the loop body.

### Syntax

![Boock](https://media.giphy.com/media/LkjlH3rVETgsg/giphy.gif)

```javascript
while (condition) {
  instruction // algorithm code - instructions
}
```

`condition` is an expression whose boolean value is checked each time before entering the loop. If the value is true - `true`✅, then the instruction is executed. When the value becomes false - `false`❎, we exit the loop.

An instruction is an algorithm code that is executed every time the condition is true. To execute multiple instructions in a loop, use the `{...}` block operator to group them. When using 1 command in the body of the loop, curly braces can be omitted.

Here is a simple example of a loop `while (condition) {...}`

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

The `count` in the example is `0`. The condition of our loop (it is written скоб in brackets) is that the block with the code will repeat itself over and over until (that is, the actual `while`) `count` is less than `10`.

Since the initial value of `0` is less than` 10`, the code📟 runs. Each time the interpreter re-checks the ✔️ condition, if the condition is still true, then the code📟 will be run again. Each time we increment the counter value by `1`. Otherwise, the value would remain at `0`, so our condition `counter <10` would always remain true, and our code📟 would loop forever!

As a result, after `10` cycles it will become `10`. After that, the interpreter will terminate the loop since the condition is `false` ❎ and go to the final lines of our code📟.

<!-- ## Цикл do … while

![Check](https://media.giphy.com/media/PijzuUzUhm7hcWinGn/giphy.gif)

Проверку ✔️ условия можно разместить под телом цикла, используя специальный синтаксис📖 `do .. while`:

```javascript
do {
  // тело цикла
} while (условие)
```

Цикл сначала выполнит тело, а затем проверит ✔️ условие (condition - `состояние`), и пока его значение равно `true` ✅ , он будет выполняться снова и снова.

Например, посчитаем сумму чисел от `0` до `25` 👇 :

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

Такая форма синтаксиса📖 оправдана, если вы хотите, чтобы тело цикла выполнилось хотя бы один раз, даже если условие окажется ложным ❎ . -->

## The for() loop

![Create](https://media.giphy.com/media/XaExByjWTK1V2HgDfh/giphy.gif)

The `for` expression creates a loop of three 3 optional expressions in parentheses, separated by semicolons.

### Syntax

![Book](https://media.giphy.com/media/l1J9HWBKLp20YfNAY/giphy.gif)

```javascript
for ([initialization]; [condition]; [final expression])
   { expression }
```

`initialization` - expression or definition of variables. This expression can optionally declare new variables using the `let` keyword. These variables are visible only in the `for` loop, i.e. in the same scope (for security).

`condition` is an expression that is executed at each iteration of the loop. If the expression is true, the loop is executed. The condition is optional. If not, the condition is always considered true. If the expression is false, execution of `for` is terminated.

`final expression` - an expression that is executed at the end of the loop iteration. Occurs until the next condition is met. Usually used to `increment ++`, `decrement -` or `update i + = 5` of a counter variable 🔔.

`expression` - executable code of the algorithm while the condition of the loop is `true`. To execute multiple expressions in a loop, use the `{...}` block to group those expressions. To avoid executing any expression in a loop, use an empty `for (;;;)` expression.

Let's calculate the sum of numbers from 0 to 100 👇:

```jsx live
function learnJavaScript() {
  let sum = 0
  for (let i = 0; i <= 100; i++) {
    sum += i
  }

  return sum
}
```

Remember when we wrote our 1️⃣ first `while()` what happened to our counter? We found that it is very important that it constantly changes (`increment ++` helped us with this). Because if you forget about it, then the code📟 will fall into an `infinite loop of loops`.

Well, situations like this happen quite regularly with `while-loops`, which is why `for` was done with a built-in counter!

### Example for loop

![hmm](https://media.giphy.com/media/l3nSILUHhuVDuWSnC/giphy.gif)

When you first see the syntax📖 of a `loop for`, you might think 🤔 that this is something very strange. But you should still study it 🧑‍🎓, since you will meet
like this many times:

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

Well, did you know? They should have! After all, this is practically the same code📟 that we used for the `while` loop at the beginning of the chapter! The three parts of the cycle are separated by semicolons; they were all in that while loop, but in different places. Let's take a closer look:

![for](/img/javascript/14/00.png)

1. First, we declare a counter variable - `let i = 0`. It is in the function itself and outside this loop that this `i` will be absent, and this is safe!
2. Next, we set a condition that the interpreter will check before each iteration of the loop (to determine whether it is worth starting the code at all). An iteration is called one iteration of the loop (for example, if we had 10 startup cycles, then we can say that there were 10 code iterations).
3. The third part of our code is `increment ++` (or `decrement --`). It runs at the end of each iteration to change our variable every time 🔔.

## Conclusion

![The and](https://media.giphy.com/media/l1Lc1Kn9hImgpx5Re/giphy.gif)

Almost always, when you know the number of iterations needed, you would rather work with for than with while. This is why `for` loops are so popular. There are other cycles, but they are not so popular and if you want you can get acquainted with them [here](https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/%D0%A6%D0%B8%D0%BA%D0%BB%D1%8B_%D0%B8_%D0%B8%D1%82%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D0%B8).

## Problems?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Write to [Discord](https://discord.gg/6GDAfXn) chat.

## Questions:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

What is the name of a block of code that repeats itself over and over again until a given condition is no longer true?

1. Cycle
2. Condition
3. Initialization

Which of the two loop operators is more popular?

1. `for`
2. `while`
3. `break`

How many messages will the following code output to the console?

```javascript
let k = 0
while (k < 7) {
  console.log('one more line!')
}
```

1. `7`
2. `8`
3. `infinity`

What is the character used to separate the parts of the for loop that are in parentheses?

1. `&&`
2. `;`
3. `=!`

If `_______` always remains true, then the code can get stuck in an infinite `_______`.

1. condition / loop
2. cycle / condition

What is the middle `_____` of the three bracketed parts of a `for` loop called?

1. Expression
2. Condition
3. Increment

How many messages will the following code output to the console?

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

What is the term for a single (step) passage of the cycle?

1. Iteration
2. Interrupt
3. Looping

In order to understand how much you learned this lesson, take the test in the [mobile application](http://onelink.to/njhc95) of our school on this topic or in our [telegram bot](https://t.me/javascriptcamp_bot).

![Sumerian school](/img/app.jpg)

## Links

1. [MDN web doc. The article "The do ... while loop"](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/do...while)
2. [MDN web doc. For Loop Article](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for)
3. [MDN web doc. The while loop](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/while)
4. [Iteration article, Javascript Express site](https://www.javascript.express/syntax/iteration)
5. [While and for Loops](https://learn.javascript.ru/while-for)
6. [Code for Teens: The Perfect Beginner's Guide to Programming, Volume 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)

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
