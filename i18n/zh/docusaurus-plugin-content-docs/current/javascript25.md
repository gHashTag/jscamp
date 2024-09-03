---
id: javascript25
title: 異步事件循環
sidebar_label: 事件循環
---

![@serverSerrverlesskiy](/img/javascript/headers/26.jpg)

## 異步

在JavaScript中，異步是與加載網頁並行處理請求的主要工具。 現在無法想像Internet，在那裡對服務器的所有請求都將隨著頁面重新加載而發送。

來自服務器的任何數據都是異步請求的：發送了一個請求（XMLHttpRequest或XHR），並且代碼不等待其返回而繼續執行。 服務器響應時，會向XHR對象發出通知，並運行在發送請求之前傳遞給它的回調函數。

如果您正確使用語言工具 ，則順序執行並在一個線程中進行的請求的執行不會以任何方式乾擾事件的接收和對事件的反應-一個人可以輕鬆地使用界面， 沒有註意到滯後，崩潰和凍結。

## 事件循環

![Queue](https://media.giphy.com/media/5YuhLwDgrgtRVwI7OY/giphy.gif)

JavaScript `Event loop` 是一個異步呼叫管理器。

為了使這個棘手的過程順利進行，JavaScript實現了一種機制來控制代碼執行的順序。 由於它是單線程語言，因此有必要“楔入”當前的執行上下文。 這種機制稱為事件循環。

來自英語, `loop` 轉換為 “循環”，完美體現了含義：我們正在處理回送隊列。

`Event loop` 調節上下文的執行順序-堆棧。 它是在觸發事件或調用函數時生成的。 對事件的響應放置在執行隊列中 `event loop`, 每個循環依次執行進入其中的代碼  在這種情況下，綁定到事件的函數在當前執行上下文之後被調用。

在 JavaScript 中，同步和異步執行隊列一直在運行。 同步 - `stack` - 形成隊列並轉發到異步 - `event loop` - 函數調用⚙️，它將在當前計劃的可執行上下文之後執行。

為了使數據保持一致狀態，必須完成每個功能。 這是由於JavaScript的單線程和其他一些功能，例如功能的閉包 "languages" 編程。 因此，一個線程被表示為執行上下文的隊列，其中通過事件循環傳遞的函數是 "wedged".

## 描述

JavaScript是一種單線程語言：一次只能運行一個任務。 通常這沒什麼大不了的，但是現在想像您正在運行一個耗時30秒的任務...是的。 在執行此任務期間，我們等待30秒鐘，然後其他任何事情才能發生（默認情況下，JavaScript在主瀏覽器線程上運行，因此整個UI都將等待）now 現在是2021年，沒有人想要一個速度慢的站點。

幸運的是，瀏覽器為我們提供了JavaScript本身未提供的某些功能：Web API。 其中包括DOM API，setTimeout，HTTP請求等。 這可以幫助我們創建異步非阻塞行為。

當我們調用一個函數時，它將被添加到調用堆棧中。 調用堆棧是JS引擎的一部分，它與瀏覽器無關。 這是堆棧的經典視圖，即 `first in`,` last out`.當函數返回時，它會從堆棧中彈出。

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

響應函數返回 setTimeout 函數。 `SetTimeout` 通過以下方式提供給我們 `Web-API`: 它使我們可以在不阻塞主線程的情況下劃分任務。 這 `Callback` 我們傳遞給 `setTimeout` 功能， `() => {返回 'Hey'}` lambda函數已添加到 `Web-API`. 同時, `setTimeout` 和 `responde` 從堆棧中彈出並返回其值。

![timer](/img/javascript/27/timer.gif)

在`Web-API`, 計時器一直運行到我們傳遞給它的第二個參數等待 1000ms。 回調不會立即添加到調用堆棧中，而是傳遞給稱為隊列的內容。

![queue](/img/javascript/27/queue.gif)

這可能會造成混亂：這並不意味著在1000毫秒後將“回調”函數添加到調用堆棧中（從而返回一個值）！ 它只是在1000毫秒後添加到隊列中。 但是在此隊列中，該函數必須等到輪到它為止。

現在這是我們大家一直在等待的部分。事件循環要做一件事的時間：將隊列連接到調用堆棧！ 如果調用堆棧為空，也就是說，如果所有先前調用的函數都返回了它們的值並從堆棧中彈出，則隊列中的第一項將添加到調用堆棧中。 在這種情況下，沒有其他函數被調用，這意味著到 `callback`函數是隊列中的第一項。

![qtoc](/img/javascript/27/qtoc.gif)

回調被推入調用堆棧，被調用並返回，並從堆棧中彈出。

![result](/img/javascript/27/res.gif)

觀看很有趣，但是如果不反复研究一個主題，就無法完全掌握一個主題。 如果運行以下命令，嘗試找出控制台中顯示的內容：

```jsx
const foo = () => console.log('First')
const bar = () => setTimeout(() => console.log('Second'), 500)
const baz = () => console.log('Third')

bar()
foo()
baz()
```

讓我們看看在瀏覽器中運行以下代碼時會發生什麼：

![br](/img/javascript/27/br.gif)

我們稱之為 `bar`, 這將返回 `setTimeout` 功能。
`Callback` 我們傳遞給 `setTimeout` 被添加到 `Web API`, `setTimeout` 和 `bar` 從調用堆棧彈出功能。

計時器開始計時 `foo` 被稱為和日誌 `First`. `foo` 退貨 `undefined`, `baz` 被稱為 `callback` 已添加到隊列
`baz` logs` Third`. 事件循環發現baz返回後，調用棧為空，然後將回調添加到調用棧。
`Callback` 日誌 `Second`.

希望這會讓您對 `event loop`!

不必擔心是否仍然令人困惑，最重要的是了解某些錯誤或特定行為可能來自何處。

## 問題？

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

寫給 [Discord](https://discord.gg/6GDAfXn) 聊天。

## 問題：

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

異步是：

1.一種工具，用於顯示同步流中函數的執行上下文
2.逐行執行代碼的工具
3.一種與網頁加載並行處理請求的工具

異步呼叫管理器：

1. `stack`
2. `Event loop`
3. `JavaScript`

函數調用位於：

1.堆疊
2.一堆
3.循環

延遲一毫秒執行代碼的工具：

1. `delay`
2. `heap`
3. `setTimeout`

<!--
![Description](https://media.giphy.com/media/xT5LMLJOHGWW0PfcYg/giphy.gif)

Схема цикла событий:

![for](/img/javascript/26/00.png)

`Event loop` — это бесконечный цикл, который берёт события из очереди и обрабатывает их.

`Heap` (куча) — объекты собраны в кучу, которая есть не что иное, как название для наименее структурированной части памяти.

`Stack` (стопка, стек) — репрезентация единственного потока выполнения JavaScript-кода . Вызовы функций⚙️ помещаются в стек.

`Browser or Web API’s` (браузерные или веб API) — встроены в браузер и способны предоставлять данные из браузера и окружающей компьютерной    ️ среды и давать возможность выполнять с ними полезные и сложные вещи.

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

В коде выше, даже несмотря на то, что `setTimeout` имеет задержку в 0 секунд и цикл `while` выполняется 3 секунды, функция⚙️ `exec()` застрянет в очереди сообщений. Цикл `while` будет выполняться в стеке вызовов (в котором один поток), пока не пройдет 3 секунды. И только после того, как стек вызовов опустеет, функция⚙️ `exec()` будет помещена в стек и выполнена.

Таким образом аргумент `delay` в `setTimeout()` не гарантирует начала выполнения после завершения указанной задержки. Он является минимальным временем задержки.

## Контекст исполнения

![goes through the door](https://media.giphy.com/media/3o7TKswXkG2qVFIop2/giphy.gif)

JavaScript — интерпретируемый язык . Это значит, что любой код проходит через интерпретатор, который исполняет его построчно. Но и здесь есть нюансы.

Как только скрипт попадает в интерпретатор, формируются глобальный контекст и глобальная область видимости, в которой держится `Variable Object`, или `VO` — объект переменных  .

Он формируется из переменных вида `Function Declaration` и атрибутов функции⚙️ по следующему принципу. Интерпретатор считывает код и находит все объявления:

- переменных  по ключевому слову `var` (`const` или `let` в ES6 и выше);
- функций, объявленных ключевым словом `function`, без присваивания.

Это складывается в `VO` текущего контекста исполнения. Затем берётся `Variable Object` внешней области видимости и к нему добавляется ➕ сформированный выше `VO`. Сверху он дополняется параметрами функции⚙️ и их значениями на момент исполнения.

При этом нет разницы, в каком месте функции⚙️ они определяются. Переменная  может быть определена в любой части кода , как и функция⚙️.

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

1. Из переменной  `a`, значение которой — `undefined`.
2. Переменной  `c`, значение которой — `undefined`.
3. Переменной  `b`, значение которой — `undefined`.
4. Функции `func` с соответствующим телом.

Затем скрипт начнет исполняться по следующему сценарию:

1. В переменную  `a` запишется значение `10`.
2. В переменную `c` запишется значение `7`.
3. В переменную  `b` запишется значение `3`.
4. Будет вызвана функция `func`.
5. Создается контекст исполнения функции `func`.
6. В `VO` контекста исполнения функции `func` будут записаны  переменные  из внешней области видимости: `a`, `c` и `b`, c присвоенными значениями.
7. В `VO` контекста исполнения функции `func` будут созданы переменные  из списка аргументов; поскольку переменные  `a` и `b` уже существуют в VO, добавлена будет только переменная  `d` со значением `undefined`.
8. В переменную  `a` `VO` контекста исполнения функции `func` будет записано  значение `10`.
9. В переменную  `b` `VO` контекста исполнения функции `func` будет записано  значение переменной  a внешней области видимости — `10`.
10. В переменную  `d` `VO` контекста исполнения функции `func` будет записано  значение переменной  `b` внешней области видимости — `3`.
11. Контекст исполнения функции `func` будет запущен.
12. В консоль выведется `10 10 7 3`.
13. В переменную  `c`, находящуюся во внешней области видимости, будет записано  значение `13`.
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

1. В переменную  `a` запишется значение `10`.
2. В переменную  `c` запишется значение `7`.
3. В переменную  `b` запишется значение `3`.
4. Функция `func` попадает в пул ожидания.
5. Создаётся контекст исполнения функции `func`.
6. По истечении `0` миллисекунд контекст исполнения функции `func` будет помещён в `event loop`.
7. В консоль выведется `7`.
8. В `VO` контекста исполнения функции `func` будут записаны  переменные  из внешней области видимости: `a`, `c` и `b`, c присвоенными значениями.
9. В `VO` контекста исполнения функции `func` будут созданы переменные  из списка аргументов; поскольку переменные  `a` и `b` уже существуют в `VO`, добавлена будет только переменная  `d` со значением `undefined`.
10. В переменную  `a` `VO` контекста исполнения функции `func` будет записано  значение `10`.
11. В переменную  `b` `VO` контекста исполнения функции `func` будет записано  значение переменной  a внешней области видимости — `10`.
12. В переменную  `d` `VO` контекста исполнения функции `func` будет записано  значение переменной  `b` внешней области видимости — `3`.
13. Контекст исполнения функции `func` будет запущен.
14. В консоль выведется `10 10 7 3`.
15. В переменную  `c`, находящуюся во внешней области видимости, будет записано  значение `13`.
16. Контекст выполнения функции `func` будет завершён; `VO` функции `func` будет удалён.

<!-- ### Примеры

![Math](https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif)

`setTimeout` выводит контекст исполнения функции⚙️ из синхронного потока, помещая его в `event loop`. То же самое происходит и с регистрацией событий. Мы можем подписаться на событие при помощи функции⚙️ `addEventListener`. Передавая функцию⚙️ обратного вызова — `callback`, добавляем её в список функций⚙️, которые должны быть вызваны при срабатывании этого события.

Допустим, мы хотим нажатием на кнопку перекрасить её в красный цвет. Код , который это выполняет, выглядит так:

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

Обратите внимание, что исполнение коллбэков событий `click` на кнопках при вызове из кода происходит сразу же, не попадая в `event loop`: `setTimeout` с нулевой задержкой отложил перекраску фона в жёлтый, но функция⚙️ сама была исполнена в момент вызова.

Это происходит из-за того, что события из кода не требуется выполнять асинхронно. Действительно, в такой ситуации мы находимся в предсказуемом окружении, тогда как пользовательские события могут случаться в любой момент.

![Wow](https://media.giphy.com/media/M33UV4NDvkTHa/giphy.gif)


-->

為了了解您學到了多少本課程，請對 [mobile application](http://onelink.to/njhc95) 我們學校就這個話題。

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## 鏈接：

1. [Explaining how EventLoop works in JavaScript](https://medium.com/devschacht/javascript-eventloop-explained-f2dcf84e36ee)
2. [How to manage event loop in JavaScript](https://skillbox.ru/media/code/event_loop_chast_1)
3. [Javascript reference](https://javascript.ru/settimeout)
4. [Article: Explaining Event Loop in Javascript Using Rendering](https://bool.dev/blog/detail/obyasnenie-event-loop-v-javascript-s-pomoshchyu-vizualizatsii)
5. [Article: JavaScript Visualized: Promises & Async / Await](https://medium.com/@lydiahallie/javascript-visualized-promises-async-await-a3f1aad8a943)

## 貢獻者 ✨

感謝這些好人 ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/AlisaNasibullina"><img src="https://avatars3.githubusercontent.com/u/74646904?s=460&v=4" width="200px;" alt=""/><br /><sub><b>AlisaNasibullina</b></sub></a><br /><a href="#mentoring-KoDim-React" title="Mentoring">  </a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
  <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 </a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)
