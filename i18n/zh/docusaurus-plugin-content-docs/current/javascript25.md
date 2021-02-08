---
id: javascript25
title: Asynchronous Event loop
sidebar_label: Event loop
---

![@serverSerrverlesskiy](/img/javascript/headers/26.jpg)

## Asynchronous

In JavaScript, asynchrony is the main tool that processes requests in parallel with the loading of a web page. Now it is impossible to imagine the Internet, where all requests to the server would be sent with a page reload.

Any data from the server is requested asynchronously: a request is sent (XMLHttpRequest or XHR), and the code📟 does not wait for its return🔄, continuing to execute. When the server responds, the XHR object is notified of this and runs the callback function that was passed to it before sending the request.

If you use the language tools correctly👅, then the execution of a request, which occurs sequentially and in one thread, does not interfere in any way with the reception of events and the reaction to them - a person👨 calmly works with the interface, not noticing lags, crashes and freezes.

## Event loop

![Queue](https://media.giphy.com/media/5YuhLwDgrgtRVwI7OY/giphy.gif)

The JavaScript `Event loop` is an asynchronous call manager.

To make this tricky process work smoothly, JavaScript implements a mechanism to control the sequence of code execution📟. Since it is a single-threaded language👅, it became necessary to "wedge" into the current execution context. This mechanism is called an event loop.

From English, `loop` translates as" loop ", which perfectly reflects the meaning: we are dealing with a loopback queue.

`Event loop` regulates the sequence of execution of contexts - the stack. It is generated when an event was triggered or a function was called. The response to the event is placed in the execution queue, in the `event loop`, which sequentially, with each loop, executes the code that gets into it📟. In this case, the function bound to the event is called next after the current execution context.

In JavaScript, synchronous and asynchronous execution queues are constantly running. Synchronous - `stack` - forms a queue and forwards to asynchronous - `event loop` - function calls⚙️ that will be executed after the currently scheduled executable context.

For data to be in a consistent state, each function must be completed. This is due to the single-threading of JavaScript and some other features, such as closures characteristic of functional "languages" of programming. Therefore, a single thread is represented as a queue of execution contexts, in which functions that have passed through the event loop are "wedged".

## Description

JavaScript is a single-threaded language: only one task can run at a time. This is usually no big deal, but now imagine you are running a task that takes 30 seconds ... Yes. During this task, we wait 30 seconds before anything else can happen (by default, JavaScript runs on the main browser thread, so the entire UI will wait) 😬 It's 2021 now, no one wants a slow site that is dumb.

Fortunately, the browser provides us with some functionality that JavaScript itself does not provide: the Web API. Which includes DOM API, setTimeout, HTTP requests, and so on. This can help us create asynchronous non-blocking behavior 🚀.

When we call a function, it is added to the call stack. The call stack is part of the JS engine, it is browser independent. This is a classic view of the stack, i.e. `first in`,` last out`. When a function returns, it is popped off the stack.

```javascript
function great() {
  return 'Hello'
}

function respond() {
  return setTimeout(() => alert('Hey!'), 1000)
}

great()
respond()
```

![stack](/img/javascript/27/stack.gif)

The respond function returns the setTimeout function. `SetTimeout` is provided to us through the` Web-API`: it allows us to divide tasks without blocking the main thread. The `Callback` function we passed to the` setTimeout` function, the `() => {return 'Hey'}` lambda function is added to the `Web-API`. Meanwhile, `setTimeout` and `responde` are popped from the stack and return their values.

![timer](/img/javascript/27/timer.gif)

In `Web-API`, the timer runs until the second argument we passed to it waits for 1000ms. The callback is not immediately added to the call stack, but passed to something called a queue.

![queue](/img/javascript/27/queue.gif)

This can be confusing: it does not mean that the `callback` function is added to the call stack (thus returning a value) after 1000ms! It just gets added to the queue after 1000ms. But in this queue, the function must wait until it is its turn.

Now this is the part we've all been waiting for ... Time for the event loop to do one thing: connect the queue to the call stack! If the call stack is empty, that is, if all previously called functions returned their values ​​and were popped from the stack, the first item in the queue is added to the call stack. In this case, no other functions were called, which means that the call stack was empty by the time the `callback` function was the first item in the queue.

![qtoc](/img/javascript/27/qtoc.gif)

callback is pushed onto the call stack, called and returned, and popped off the stack.

![result](/img/javascript/27/res.gif)

It's fun to watch, but you can't fully grasp a topic without working on it over and over again. Try to figure out what appears in the console if we run the following:

```jsx
const foo = () => console.log('First')
const bar = () => setTimeout(() => console.log('Second'), 500)
const baz = () => console.log('Third')

bar()
foo()
baz()
```

Let's see what happens when we run this code in a browser:

![br](/img/javascript/27/br.gif)

We call `bar`, which returns the `setTimeout` function.
The `Callback` that we passed to `setTimeout` is added to the `Web API`, the `setTimeout` and `bar` functions are popped from the call stack.

The timer starts, meanwhile `foo` is called and logs `First`. `foo` returns `undefined`, `baz` is called and `callback` is added to the queue
`baz` logs` Third`. The event loop sees that the callstack is empty after baz returns, after which the callback is added to the call stack.
`Callback` logs `Second`.

Hope this makes you feel more confident with the `event loop`!

Don't worry if this still seems confusing, the most important thing is to understand where certain bugs or specific behavior might come from.

## Problems?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Channel in [Discord](https://discord.gg/6GDAfXn) after paying on [Patreon](https://www.patreon.com/javascriptcamp).

## Questions:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

Asynchrony is:

1. A tool that displays the execution context of a function from a synchronous stream
2. A tool that executes code line by line
3. A tool that processes requests in parallel with the loading of web pages

Asynchronous Call Manager:

1. `stack`
2. `Event loop`
3. `JavaScript`

Function calls are placed in:

1. Stack
2. A bunch of
3. Loop

Tool that executes code with a millisecond delay:

1. `delay`
2. `heap`
3. `setTimeout`

<!--
![Description](https://media.giphy.com/media/xT5LMLJOHGWW0PfcYg/giphy.gif)

Схема цикла событий:

![for](/img/javascript/26/00.png)

`Event loop` — это бесконечный цикл, который берёт события из очереди и обрабатывает их.

`Heap` (куча) — объекты собраны в кучу, которая есть не что иное, как название для наименее структурированной части памяти.

`Stack` (стопка, стек) — репрезентация единственного потока выполнения JavaScript-кода📟 . Вызовы функций⚙️ помещаются в стек.

`Browser or Web API’s` (браузерные или веб API) — встроены в браузер и способны предоставлять данные из браузера и окружающей компьютерной🖥️ среды и давать возможность выполнять с ними полезные и сложные вещи.

![for](/img/javascript/26/01.png)

## Примеры

![math](https://media.giphy.com/media/3orieN7HEHI0tw8x5C/giphy.gif)

### Пример кода 1

```javascript
function main() {
  console.log('A')
  setTimeout(function exec() {
    console.log('B')
  }, 0)
  console.log('C')
}
main()
// Output
// A
// C
// B
```

Здесь мы видим функцию⚙️ `main`, включающую в себя два 2️⃣ `console.log`, выводящих в консоль `A` и `C`. Между ними находится `setTimeout`, вызов которого выведет в консоль `B` после ожидания в 0 секунд.

![for](/img/javascript/26/02.png)

1. Вызов функции `main` сначала поместит её в стек (в качестве первого элемента `frame`). Потом браузер поместит в стек первое выражение функции `main`, которое представляет собой `console.log('A\)`. Это выражение выполняется и, после завершения, удаляется ➖ из стека. Буква `A` выводится в консоль.
2. Следующее выражение `setTimeout()` с коллбэком `exec()` и временем ожидания в `0` секунд помещается в стек вызовов и выполнение начинается. Функция `setTimeout` использует API браузера для задержки вызова предоставленной функции. Элемент `frame` удаляется ➖ из стека сразу после завершения передачи таймера браузерному API.
3. `console.log('C')` помещается в стек, пока в браузере запускается таймер для вызова функции `exec()`. В этом конкретном случае, поскольку время ожидания составляет `0` секунд, коллбэк (функция `exec()`) будет помещён в `message queue` (очередь сообщений), сразу после того как браузер его получит (в идеале).
4. После выполнения последнего выражения функции `main`, элемент `main` удаляется ➖ из стека вызовов `call stack`, оставляя его пустым. Стек вызовов должен быть пустым, для того чтобы браузер поместил в него элемент из `message queue`. Именно по этой причине даже если в `setTimeout` указано время ожидания в `0` секунд, функция `exec()` не выполняется, пока не закончится выполнение всех элементов в стеке вызовов.
5. Теперь функция `exec()` помещается в стек вызовов и выполняется. Буква `B` выводится в консоль. Вот он — цикл событий `Event Loop` JavaScript.

Таким образом аргумент `delay` в `setTimeout(function, delayTime)` не означает точное время задержки, после которого функция выполнится. Он означает минимальное время ожидания, после которого в какой-нибудь момент времени, функция будет вызвана.

![Wow](https://media.giphy.com/media/QXPmPdudTz4So2P4OQ/giphy.gif)

### Пример кода 2

```javascript
function main() {
  console.log('A')
  setTimeout(function exec() {
    console.log('B')
  }, 0)
  runWhileLoopForNSeconds(3)
  console.log('C')
}

main()

function runWhileLoopForNSeconds(sec) {
  let start = Date.now(),
    now = start
  while (now - start < sec * 1000) {
    now = Date.now()
  }
}
// Output
// A
// C
// B
```

Функция⚙️ `runWhileLoopForNSeconds()` делает именно то, что отражено в её названии. Она постоянно проверяет, прошло ли со времени её вызова то количество секунд, которое передано аргументом. Главное, что нужно помнить — что цикл `while` является блокирующим выражением, и это означает, что его выполнение происходит в стеке вызовов и не использует браузерные API. Таким образом он блокирует все последующие выражения, пока не выполнится до конца.

![for](/img/javascript/26/03.png)

В коде📟 выше, даже несмотря на то, что `setTimeout` имеет задержку в 0 секунд и цикл `while` выполняется 3 секунды, функция⚙️ `exec()` застрянет в очереди сообщений💬. Цикл `while` будет выполняться в стеке вызовов (в котором один поток), пока не пройдет 3 секунды. И только после того, как стек вызовов опустеет, функция⚙️ `exec()` будет помещена в стек и выполнена.

Таким образом аргумент `delay` в `setTimeout()` не гарантирует начала выполнения после завершения указанной задержки. Он является минимальным временем задержки.

## Контекст исполнения

![goes through the door](https://media.giphy.com/media/3o7TKswXkG2qVFIop2/giphy.gif)

JavaScript — интерпретируемый язык👅. Это значит, что любой код📟 проходит через интерпретатор, который исполняет его построчно. Но и здесь есть нюансы.

Как только скрипт попадает в интерпретатор, формируются глобальный контекст и глобальная область видимости, в которой держится `Variable Object`, или `VO` — объект переменных 🔔 .

Он формируется из переменных вида `Function Declaration` и атрибутов функции⚙️ по следующему принципу. Интерпретатор считывает код📟 и находит все объявления🗣️:

- переменных 🔔 по ключевому слову `var` (`const` или `let` в ES6 и выше);
- функций, объявленных ключевым словом `function`, без присваивания.

Это складывается в `VO` текущего контекста исполнения. Затем берётся `Variable Object` внешней области видимости и к нему добавляется ➕ сформированный выше `VO`. Сверху он дополняется параметрами функции⚙️ и их значениями на момент исполнения.

При этом нет разницы, в каком месте функции⚙️ они определяются. Переменная 🔔 может быть определена в любой части кода📟 , как и функция⚙️.

Рассмотрим скрипт:

```javascript
var a = 10
var c = 7
function func(a, b, d) {
  console.log(a, b, c, d)
  c = a + d
}
var b = 3
func(10, a, b)
console.log(c)
```

`VO` этого скрипта формируется:

1. Из переменной 🔔 `a`, значение которой — `undefined`.
2. Переменной 🔔 `c`, значение которой — `undefined`.
3. Переменной 🔔 `b`, значение которой — `undefined`.
4. Функции `func` с соответствующим телом.

Затем скрипт начнет исполняться по следующему сценарию:

1. В переменную 🔔 `a` запишется значение `10`.
2. В переменную 🔔`c` запишется значение `7`.
3. В переменную 🔔 `b` запишется значение `3`.
4. Будет вызвана функция `func`.
5. Создается контекст исполнения функции `func`.
6. В `VO` контекста исполнения функции `func` будут записаны 🖊️ переменные 🔔 из внешней области видимости: `a`, `c` и `b`, c присвоенными значениями.
7. В `VO` контекста исполнения функции `func` будут созданы переменные 🔔 из списка аргументов; поскольку переменные 🔔 `a` и `b` уже существуют в VO, добавлена будет только переменная 🔔 `d` со значением `undefined`.
8. В переменную 🔔 `a` `VO` контекста исполнения функции `func` будет записано 🖊️ значение `10`.
9. В переменную 🔔 `b` `VO` контекста исполнения функции `func` будет записано 🖊️ значение переменной 🔔 a внешней области видимости — `10`.
10. В переменную 🔔 `d` `VO` контекста исполнения функции `func` будет записано 🖊️ значение переменной 🔔 `b` внешней области видимости — `3`.
11. Контекст исполнения функции `func` будет запущен.
12. В консоль выведется `10 10 7 3`.
13. В переменную 🔔 `c`, находящуюся во внешней области видимости, будет записано 🖊️ значение `13`.
14. Контекст выполнения функции `func` будет завершён. `VO` функции `func` будет удалён.
15. В консоль выведется `13`.

Теперь перепишем скрипт, добавив `setTimeout` с нулевым тайм-аутом у вызова функции⚙️:

```javascript
var a = 10
var c = 7
function func(a, b, d) {
  console.log(a, b, c, d)
  c = a + d
}
var b = 3
setTimeout(function () {
  func(10, a, b)
}, 0)
console.log(c)
```

На первый взгляд может показаться, что ничего не изменится и функция⚙️ `func` будет выполнена без задержки. Но это не так. На самом деле произойдёт следующее:

1. В переменную 🔔 `a` запишется значение `10`.
2. В переменную 🔔 `c` запишется значение `7`.
3. В переменную 🔔 `b` запишется значение `3`.
4. Функция `func` попадает в пул ожидания.
5. Создаётся контекст исполнения функции `func`.
6. По истечении `0` миллисекунд контекст исполнения функции `func` будет помещён в `event loop`.
7. В консоль выведется `7`.
8. В `VO` контекста исполнения функции `func` будут записаны 🖊️ переменные 🔔 из внешней области видимости: `a`, `c` и `b`, c присвоенными значениями.
9. В `VO` контекста исполнения функции `func` будут созданы переменные 🔔 из списка аргументов; поскольку переменные 🔔 `a` и `b` уже существуют в `VO`, добавлена будет только переменная 🔔 `d` со значением `undefined`.
10. В переменную 🔔 `a` `VO` контекста исполнения функции `func` будет записано 🖊️ значение `10`.
11. В переменную 🔔 `b` `VO` контекста исполнения функции `func` будет записано 🖊️ значение переменной 🔔 a внешней области видимости — `10`.
12. В переменную 🔔 `d` `VO` контекста исполнения функции `func` будет записано 🖊️ значение переменной 🔔 `b` внешней области видимости — `3`.
13. Контекст исполнения функции `func` будет запущен.
14. В консоль выведется `10 10 7 3`.
15. В переменную 🔔 `c`, находящуюся во внешней области видимости, будет записано 🖊️ значение `13`.
16. Контекст выполнения функции `func` будет завершён; `VO` функции `func` будет удалён.

<!-- ### Примеры

![Math](https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif)

`setTimeout` выводит контекст исполнения функции⚙️ из синхронного потока, помещая его в `event loop`. То же самое происходит и с регистрацией событий. Мы можем подписаться на событие при помощи функции⚙️ `addEventListener`. Передавая функцию⚙️ обратного вызова — `callback`, добавляем её в список функций⚙️, которые должны быть вызваны при срабатывании этого события.

Допустим, мы хотим нажатием на кнопку перекрасить её в красный цвет. Код📟 , который это выполняет, выглядит так:

```javascript
var button = document.querySelector('button')

button.addEventListener('click', function (evt) {
  button.style.background = '#f00'
})
```

Более сложный пример: есть две кнопки, первая перекрашивает фон страницы в красный цвет, а вторая — в жёлтый, но у второй перекрашивание фона завёрнуто в `setTimeout` с нулевой задержкой. И мы вручную вызываем событие нажатия сначала на жёлтую кнопку, а потом — на красную.

```javascript
var redButton = document.getElementById(‘red’)
redButton.addEventListener('click', function () {
  document.body.style.background = '#f00'
})
var yellowButton = document.getElementById(‘yellow’)
yellowButton.addEventListener(‘click’, function () {
setTimeout(function () {
         document.body.style.background = ‘#ff0’;
}, 0);
});
yellowButton.click();
redButton.click();
```

Обратите внимание, что исполнение коллбэков событий `click` на кнопках🖱️ при вызове из кода происходит сразу же, не попадая в `event loop`: `setTimeout` с нулевой задержкой отложил перекраску фона в жёлтый, но функция⚙️ сама была исполнена в момент вызова.

Это происходит из-за того, что события из кода📟 не требуется выполнять асинхронно. Действительно, в такой ситуации мы находимся в предсказуемом окружении, тогда как пользовательские события могут случаться в любой момент.

![Wow](https://media.giphy.com/media/M33UV4NDvkTHa/giphy.gif)


-->

In order to understand how much you learned this lesson, take the test on the [mobile application](http://onelink.to/njhc95) of our school on this topic.

![Sumerian school](/img/app.png)

## Links:

1. [Explaining how EventLoop works in JavaScript](https://medium.com/devschacht/javascript-eventloop-explained-f2dcf84e36ee)
2. [How to manage event loop in JavaScript](https://skillbox.ru/media/code/event_loop_chast_1)
3. [Javascript reference](https://javascript.ru/settimeout)
4. [Article: Explaining Event Loop in Javascript Using Rendering](https://bool.dev/blog/detail/obyasnenie-event-loop-v-javascript-s-pomoshchyu-vizualizatsii)
5. [Article: JavaScript Visualized: Promises & Async / Await](https://medium.com/@lydiahallie/javascript-visualized-promises-async-await-a3f1aad8a943)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/AlisaNasibullina"><img src="https://avatars3.githubusercontent.com/u/74646904?s=460&v=4" width="200px;" alt=""/><br /><sub><b>AlisaNasibullina</b></sub></a><br /><a href="#mentoring-KoDim-React" title="Mentoring">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
  <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 </a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
