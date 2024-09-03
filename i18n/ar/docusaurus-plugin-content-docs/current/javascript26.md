---
id: javascript26
title: Promise - deferred and asynchronous computation
sidebar_label: Promise
---

![@serverSerrverlesskiy](/img/javascript/headers/27.jpg)

A Promise is an object that contains the future value of an asynchronous operation. For example, if you request some data from a server, a promise promises us to receive this data that we can use in the future.

![math](https://media.giphy.com/media/4JVTF9zR9BicshFAb7/giphy.gif)

At first, the promise has the status `pending`, then it has one of: `fulfilled` ("successfully completed") or `rejected` (" completed with an error ").

![promise states](/img/javascript/23/promise.png)

1. `Pending` - The promise is pending if the result is not ready. That is, it is waiting for something to complete (for example, the completion of an asynchronous operation).
2. `Fulfilled` - Promise resolved if result is available. That is, something completed its execution (for example, an asynchronous operation) and everything went well.
3. `Rejected` - Promise was rejected if an error occurred during execution.

## Create a promise

![Plus](https://media.giphy.com/media/Yqo5mjWTLGlVOIP8Dc/giphy.gif)

A `Promise` object is created using the new keyword and its own constructor.
The Promise constructor takes one argument, a callback, also known as an execution function⚙️, which takes 2 callbacks, `resolve` and` reject`.

The executive function is executed immediately after the promise is created. A promise is made fulfilled by calling `resolve` and rejected by calling `reject`.

```jsx
const promise = new Promise((resolve, reject) => {
  if (allWentWell) {
    resolve('Everything went great!')
  } else {
    reject('Something went wrong')
  }
})
```

`resolve` and `reject` take one argument, which can be a string, number, boolean expression, array, or object.

To provide a function with promises functionality, you just need to return a `Promise` object in it:

```jsx
function myAsyncFunction(url) {
  return new Promise((resolve, reject) => {
    // function code
  })
}
```

## Using a promise

![Help](https://media.giphy.com/media/iigqhSTOKmb6wDObGb/giphy.gif)

Promises are used with the `then()` and `catch()` methods.

### then

The `then` method is used to run functions on a positive or negative promise.

![Launch](https://media.giphy.com/media/1n4FT4KRQkDvK0IO4X/giphy.gif)

The syntax for the `then` method is:

```jsx
promise.then(
  function (result) {
    /* handle successful execution */
  },
  function (error) {
    /* will handle the error */
  }
)
```

The first 1️⃣ argument of the `then` method is a function⚙️ that is executed when the promise is passed to the" completed successfully "state and receives the result.

The second argument to `then` is a function⚙️ that is executed when a promise enters the completed with error state and receives an error.

![Error](https://media.giphy.com/media/iJCo9daAP0xugHhhfb/giphy.gif)

An example of the `then` method:

```jsx
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve('done!'), 1000)
})

// resolve will run the first function passed to .then
promise.then(
  result => alert(result), // displays "done!" in one second
  error => alert(error) // will not be triggered
)
```

And in case of an error  in a promise, the second will be executed:

```jsx
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error('Whoops!')), 1000)
})

// reject will run the second function passed to .then
promise.then(
  result => alert(result), // will not be triggered
  error => alert(error) // prints "Error: Whoops!" one second later
)
```

If you need to display only the result of a successful execution, then only one function can be passed to `then`:

```jsx
let promise = new Promise(resolve => {
  setTimeout(() => resolve('done!'), 1000)
})

promise.then(alert) // will print "done!" one second later
```

### catch

![Catch](https://media.giphy.com/media/fxeeuml8GaESfmuE4z/giphy.gif)

To catch errors, the `catch` method is used. It can be used instead of the `then` method to display error messages.

The syntax for the catch method is:

```jsx
let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Error!')), 1000)
})

promise.catch(alert) // will print "Error: Error!" one second later
```

### promise.all

This method takes an array of promises and returns a new promise that will be fulfilled when all the promises within the array are fulfilled or rejected as soon as a promise is encountered that is rejected.

![Return](https://media.giphy.com/media/Y08bx6Fea1BafzTlvc/giphy.gif)

For example:

```jsx
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise1 completed')
  }, 2000)
})
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise2 completed')
  }, 1500)
})
Promise.all([promise1, promise2])
  .then(data => console.log(data[0], data[1]))
  .catch(error => console.log(error))
```

Here, the argument inside `then()` is an array that contains the values of the promises in the same order in which they were passed to `Promise.all()`.

<!-- ### promise.race

![Bomerang](https://media.giphy.com/media/g0yLXvb7Ffn9rilMIm/giphy.gif)

Этот метод принимает массив промисов и возвращает один    новый промис, который будет выполненным, как только встретится выполненный промис в массиве или же отклоняется, если отклоненный промис встречается раньше.

Например:

```jsx
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise1 выполнен')
  }, 1000)
})
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise2 отклонен')
  }, 1500)
})
Promise.race([promise1, promise2])
  .then(data => console.log(data)) // Promise1 выполнен
  .catch(error => console.log(error))
```

Тут мы имеем два промиса, где один выполняется через `1` секунду, а другой отклоняется через `1.5` секунды. Как только первый 1️⃣ промис выполнен, возвращенный из `Promise.race()` промис будет иметь статус выполненного не дожидаясь статуса второго промиса.

Здесь data, которая передается в `then()` является значением первого, выполненного, промиса.

По итогу, `Promise.race()` дожидается первого промиса и берет его статус как статус возвращаемого промиса. -->

 [![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Problems?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Write to [Discord](https://discord.gg/6GDAfXn) chat.

## Questions:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

What is the name of the method that is called when the promise is successful?

1. `reject`
2. `resolve`

What method can be used to check the fulfillment of all promises in the array?

1. `promise.all`
2. `promise.race`

What method is used to catch errors in promises?

1. `then`
2. `catch`

In order to understand how much you learned this lesson, take the test on the [mobile application](http://onelink.to/njhc95) of our school on this topic.

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Links:

1.  [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise)
2.  [Learn JavaScript](https://learn.javascript.ru/promise)
3.  [Understanding Promises](https://blog.bitsrc.io/understanding-promises-in-javascript-c5248de9ff8f?gi=1e459ca846d9)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/FELiX-RN"><img src="https://avatars0.githubusercontent.com/u/72006627?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Philipp Dvinyaninov</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=FELiX-RN" title="Documentation">  </a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)
