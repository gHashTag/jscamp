---
id: javascript25
title: asincronía Event loop
sidebar_label: asincronía Event loop
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/26.jpg)

## asincronía

En JavaScript, la asincronía es la herramienta principal que procesa las solicitudes en paralelo con la carga de una página web. Ahora es imposible imaginar Internet, donde todas las solicitudes al servidor se enviarían con una recarga de página.

Cualquier dato del servidor se solicita de forma asíncrona: se envía una solicitud (XMLHttpRequest o XHR), y el código📟 no espera su devolución🔄, continuando su ejecución. Cuando el servidor responde, se notifica al objeto XHR y se activa la función de `callback` que se le pasó antes de enviar la solicitud.

Si usa las herramientas de lenguaje👅 correctamente, entonces la ejecución de una solicitud que ocurre secuencialmente y en un hilo no interfiere con la recepción de eventos y la reacción a ellos de ninguna manera: una persona👨 trabaja tranquilamente con la interfaz, sin notar retrasos, bloqueos y se congela

## Video

<YouTube videoId="vQbBNRyeshw" />

## Event loop

![Queue](https://media.giphy.com/media/5YuhLwDgrgtRVwI7OY/giphy.gif)

`Event loop` en JavaScript es un administrador de llamadas asíncrono.

Para que este complicado proceso funcione sin problemas, JavaScript implementa un mecanismo para controlar el orden de ejecución del código📟. Dado que este es un lenguaje de subproceso único👅, era necesario "encajar" en el contexto de ejecución actual. Este mecanismo se llama `event loop` - un ciclo de eventos.

Del inglés `loop` se traduce como "bucle", lo que refleja perfectamente el significado: estamos tratando con una cola en bucle.

`Event loop` regula la secuencia de ejecución de contextos - la pila. Se genera cuando se dispara un evento o se llama a una función⚙️. La reacción al evento se coloca en la cola de ejecución, en el `event loop`, que secuencialmente, con cada ciclo, ejecuta el código que ingresa📟. En este caso, la función vinculada al evento⚙️ se llama después del contexto de ejecución actual.

En JavaScript, las colas de ejecución sincrónicas y asincrónicas se ejecutan constantemente. Synchronous - `stack` - forma una cola y reenvía a asíncrono - `event loop` - llamadas de función⚙️ que se ejecutarán después del contexto ejecutable programado actual.

Para que los datos estén en un estado consistente, cada función⚙️ debe ejecutarse hasta el final. Esto se debe al subproceso único de JavaScript y algunas otras características, como los cierres que son característicos de los lenguajes de programación funcionales. Por lo tanto, el único hilo se representa como una cola de contextos de ejecución, en la que tiene lugar el “cuñado” de funciones⚙️ que han pasado por el bucle de eventos.

## Descripción

JavaScript es un lenguaje de subproceso único: solo se puede ejecutar una tarea a la vez. Normalmente esto no es difícil, pero ahora imagina que estás ejecutando una tarea que toma 30 segundos... Sí. Durante esta tarea, esperamos 30 segundos antes de que ocurra algo más (JavaScript se ejecuta en el hilo principal del navegador de forma predeterminada, por lo que toda la interfaz de usuario esperará)😬 Es 2021, nadie quiere un sitio lento que sea tonto.

Afortunadamente, el navegador nos proporciona una funcionalidad que el propio motor de JavaScript no proporciona: la Web API. Que incluye DOM API, setTimeout, solicitudes HTTP, etc. Esto puede ayudarnos a crear un comportamiento asíncrono sin bloqueo 🚀.

Cuando llamamos a una función, se agrega a la pila de llamadas. La pila de llamadas es parte del motor JS, es independiente del navegador. Esta es la vista clásica de la pila, es decir, "primero en entrar", "último en salir". Cuando una función devuelve un valor, se "saca" de la pila.

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

La función `respond` devuelve la función `setTimeout`. `SetTimeout` se nos proporciona a través de `Web-API`: nos permite dividir tareas sin bloquear el hilo principal. La función `Callback` que pasamos a la función `setTimeout`, la función lambda `() => {return 'Hey'}` se agrega a `Web-API`. Mientras tanto, `setTimeout` y `responde` se extraen de la pila y devuelven sus valores.

![timer](/img/javascript/27/timer.gif)

En `Web-API`, el temporizador se ejecuta hasta que el segundo argumento que le pasamos espera 1000 ms. `Callback` no se agrega inmediatamente a la pila de llamadas, sino que se pasa a algo llamado cola.

![queue](/img/javascript/27/queue.gif)

Esto puede ser confuso: ¡no significa que la función de devolución de llamada se agregue a la pila de llamadas (devolviendo así un valor) después de 1000 ms! Simplemente se agrega a la cola después de 1000 ms. Pero en esta cola, la función debe esperar hasta que llegue su turno.

Ahora bien, esta es la parte que todos hemos estado esperando... Es hora de que el `event loop` haga una sola tarea: ¡conectar la cola a la pila de llamadas! Si la pila de llamadas está vacía, es decir, si todas las funciones llamadas anteriormente han devuelto sus valores y se han extraído de la pila, el primer elemento de la cola se agrega a la pila de llamadas. En este caso, no se llamó a ninguna otra función, lo que significa que la pila de llamadas estaba vacía cuando la función `callback` fue el primer elemento de la cola.

![qtoc](/img/javascript/27/qtoc.gif)

`callback` se agrega a la pila de llamadas, se llama y se devuelve, y se extrae de la pila.

![resultado](/img/javascript/27/res.gif)

Es divertido de ver, pero no puedes entender completamente un tema sin trabajar con él una y otra vez. Intente averiguar qué aparecerá en la consola si ejecutamos lo siguiente:

```jsx
const foo = () => console.log('First')
const bar = () => setTimeout(() => console.log('Second'), 500)
const baz = () => console.log('Third')

bar()
foo()
baz()
```

Veamos qué sucede cuando ejecutamos este código en el navegador:

![br](/img/javascript/27/br.gif)

Llamamos a `bar` que devuelve la función `setTimeout`.
La `Callback` que pasamos a `setTimeout` se agrega a `Web API`, la función `setTimeout` y la `bar` se extraen de la pila de llamadas.

El temporizador se inicia, mientras tanto se llama a `foo` y se registra `First`. `foo` devuelve `undefined`, se llama a `baz` y se agrega `callback` a la cola
`baz` registra `Third`. El ciclo de eventos ve que la pila de llamadas está vacía después de que regresa `baz`, después de lo cual la devolución de llamada se agrega a la pila de llamadas.
`Callback` registra `Second`.

¡Espero que esto te haga sentir más seguro con el  `event loop`!

No se preocupe si esto todavía le parece confuso, lo más importante es comprender de dónde pueden provenir ciertos errores o comportamientos específicos.

## ¿Problemas?

![Problema](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Escribe en [Discord](https://discord.gg/6GDAfXn) o Telegram [chat](https://t.me/jscampapp) y suscríbete a nuestras [noticias](https://t.me/javascriptapp)

![JavaScript Camp](/img/bandlink.png)

## Preguntas:

![Pregunta](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

La asincronía es:

1. Una herramienta que muestra el contexto de ejecución de una función desde un hilo síncrono
2. Una herramienta que ejecuta código línea por línea
3. Una herramienta que procesa solicitudes en paralelo con la carga de la página web

Administrador de llamadas asíncronas:

1. `stack`
2. `Event loop`
3. `Objetos de clase superior`

Una herramienta que ejecuta código con un retraso de milisegundos:

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

Para comprender cuánto ha aprendido esta lección, realice una prueba en la [aplicación móvil](http://onelink.to/njhc95) de nuestra escuela sobre este tema o en nuestro [bot de Telegram](https://t.me/javascriptcamp_bot).

![Campamento JS](/img/app.jpg)

## Enlaces:

1. [Explicación de JavaScript EventLoop](https://medium.com/devschacht/javascript-eventloop-explained-f2dcf84e36ee)
2. [Cómo controlar el bucle de eventos en JavaScript](https://skillbox.ru/media/code/event_loop_chast_1)
3. [referencia de javascript](https://javascript.ru/settimeout)
4. [Artículo: Bucle de eventos de Javascript explicado con visualización](https://bool.dev/blog/detail/obyasnenie-event-loop-v-javascript-s-pomoshchyu-vizualizatsii)
5. [Artículo: Visualización de JavaScript: Promesas y Async/Await](https://medium.com/@lydiahallie/javascript-visualized-promises-async-await-a3f1aad8a943)

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

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)
