---
id: javascript27
title: Отложенные и асинхронные вычисления
sidebar_label: Promise
---

![math](https://media.giphy.com/media/4JVTF9zR9BicshFAb7/giphy.gif)

Promise(Обещание) — это объект который содержит будущее значение асинхронной операции. Например, если вы запрашиваете некоторые данные с сервера, промис обещает нам получить эти данные, которые мы сможем использовать в будущем.

Вначале промис имеет статус pending («ожидание»), затем – одно из: fulfilled («выполнено успешно») или rejected («выполнено с ошибкой»).

![promise states](/img/javascript/23/promise.png)

1. Pending — Промис ожидает, если результат не готов. То есть, ожидает завершение чего-либо (например, завершения асинхронной операции).
2. Fulfilled — Промис решен, если результат доступен. То есть, что-то завершило свое выполнение(например, асинхронная операция) и все прошло успешно.
3. Rejected — Промиc отклонен, если произошла ошибка в процессе выполнения.

## Создание промиса

Объект Promise создается при помощи ключевого слова new и своего конструктора.
Конструктор Промисов принимает один аргумент, обратный вызов, также известный как исполнительная функция, которая принимает 2 обратных вызова, resolve и reject.

Исполнительная функция выполняется сразу же после создания промиса. Промис становится выполненным при помощи вызова resolve(), а отклоненным при помощи reject().

```jsx
const promise = new Promise((resolve, reject) => {
  if(allWentWell) {
    resolve('Все прошло отлично!')
  } else {
    reject('Что-то пошло не так')
  }
})
```

resolve() и reject() принимают один аргумент, который может быть строкой, числом, логическим выражением, массивом или объектом.

Чтобы снабдить функцию функционалом обещаний, нужно просто вернуть в ней объект Promise:

```jsx
function myAsyncFunction(url) {
  return new Promise((resolve, reject) => {
    //код функции
  })
}
```

## Использование промиса

Промисы используются при помощи методов then() и catch().

### then
Метод then используется для запуска функций при положительном и отрицательном результате промиса.

![Launch](https://media.giphy.com/media/1n4FT4KRQkDvK0IO4X/giphy.gif)

Синтаксис метода then:
```jsx
promise.then(
  function(result) { /* обработает успешное выполнение */ },
  function(error) { /* обработает ошибку */ }
)
```
Первый 🥇 аргумент метода .then – функция, которая выполняется, когда промис переходит в состояние «выполнен успешно», и получает результат.

Второй аргумент .then – функция, которая выполняется, когда промис переходит в состояние «выполнен с ошибкой», и получает ошибку.

![Error](https://media.giphy.com/media/iJCo9daAP0xugHhhfb/giphy.gif)

Пример метода then:
```jsx
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done!"), 1000)
})

// resolve запустит первую функцию, переданную в .then
promise.then(
  result => alert(result), // выведет "done!" через одну секунду
  error => alert(error) // не будет запущена
)
```

А в случае ошибки в промисе – выполнится вторая:

```jsx
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000)
})

// reject запустит вторую функцию, переданную в .then
promise.then(
  result => alert(result), // не будет запущена
  error => alert(error) // выведет "Error: Whoops!" спустя одну секунду
)
```

Если нужно вывести только результат успешного выполения, то в then можно передать только одну функцию:

```jsx
let promise = new Promise(resolve => {
  setTimeout(() => resolve("done!"), 1000)
})

promise.then(alert) // выведет "done!" спустя одну секунду
```

### catch

![Catch](https://media.giphy.com/media/fxeeuml8GaESfmuE4z/giphy.gif)

Для отлова ошибок используется метод catch. Его можно использовать вместо метода then для вывода сообщений об ошибке.

Синтаксис метода catch:

```jsx
let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Ошибка!")), 1000)
})

promise.catch(alert) // выведет "Error: Ошибка!" спустя одну секунду
```

### promise.all

Этот метод берет массив промисов и возвращает 🆕 новый промис, который будет выполненным, когда все промисы внутри массива выполнены или отклонен, как только встречается промис, который отклоняется. 

![Return](https://media.giphy.com/media/Y08bx6Fea1BafzTlvc/giphy.gif)

Например:

```jsx
const promise1 = new Promise((resolve, reject) => {
 setTimeout(() => {
  resolve('Promise1 выполнен')
 }, 2000)
})
const promise2 = new Promise((resolve, reject) => {
 setTimeout(() => {
  resolve('Promise2 выполнен')
 }, 1500)
})
Promise.all([promise1, promise2])
  .then((data) => console.log(data[0], data[1]))
  .catch((error) => console.log(error))
```
Здесь аргументом внутри then() выступает массив, который содержит значения промисов в том же порядке, в котором они передавались в Promise.all().

### promise.race

Этот метод принимает массив промисов и возвращает один 🆕 новый промис, который будет выполненным, как только встретится выполненный промис в массиве или же отклоняется, если отклоненный промис встречается раньше. 

Например:
```jsx
const promise1 = new Promise((resolve, reject) => {
 setTimeout(() => {
  resolve('Promise1 выполнен')
 }, 1000)
});
const promise2 = new Promise((resolve, reject) => {
 setTimeout(() => {
  reject('Promise2 отклонен')
 }, 1500)
});
Promise.race([promise1, promise2])
  .then((data) => console.log(data))  // Promise1 выполнен
  .catch((error) => console.log(error))
```

Тут мы имеем два промиса, где один выполняется через 1 секунду, а другой отклоняется через 1.5 секунды. Как только первый 🥇 промис выполнен, возвращенный из Promise.race() промис будет иметь статус выполненного не дожидаясь статуса второго промиса.

Здесь data, которая передается в then() является значением первого, выполненного, промиса.

По итогу, Promise.race() дожидается первого промиса и берет его статус как статус возвращаемого промиса.

## Вопросы:

Для того чтобы понять, на сколько вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме.

![Sumerian school](/img/app.png)

Как называется метод который вызывается при успешном выполнении промиса?
1. reject
2. resolve

Каким методом можно проверить выполнение всех промисов в массиве?
1. promise.all
2. promise.race

Каким методом можно проверить какой промис выполниться первее?
1. promise.all
2. promise.race

Какой метод служит для отлова ошибок в промисах?
1. then
2. catch

## Ссылки:
 1. [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise)
 2. [Learn JavaScript](https://learn.javascript.ru/promise)
 3. [Understanding Promises](https://blog.bitsrc.io/understanding-promises-in-javascript-c5248de9ff8f?gi=1e459ca846d9)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/FELiX-RN"><img src="https://avatars0.githubusercontent.com/u/72006627?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Philipp Dvinyaninov</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=FELiX-RN" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
[![Become a Patron!](/img/logo/patreon.png)](https://www.patreon.com/bePatron?u=31769291)
