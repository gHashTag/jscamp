---
id: javascript26
title: الوعد - حساب مؤجل وغير متزامن
sidebar_label: يعد
---

![@serverSerrverlesskiy](/img/javascript/headers/27.jpg)

الوعد هو كائن يحتوي على القيمة المستقبلية لعملية غير متزامنة. على سبيل المثال ، إذا طلبت بعض البيانات من خادم ، فإن الوعد يعدنا بتلقي هذه البيانات التي يمكننا استخدامها في المستقبل.

![math](https://media.giphy.com/media/4JVTF9zR9BicshFAb7/giphy.gif)

في البداية ، الوعد له مكانة `pending`, ثم يكون له واحد من: `fulfilled` ("مكتملة بنجاح") أو`rejected` (" اكتمل بخطأ🙅‍♂️ ").

![promise states](/img/javascript/23/promise.png)

1. `Pending` - الوعد معلق إذا كانت النتيجة غير جاهزة. أي أنه ينتظر اكتمال شيء ما (على سبيل المثال ، إكمال عملية غير متزامنة).
2. `Fulfilled` - حل الوعد إذا توفرت النتيجة. أي أن شيئًا ما أكمل تنفيذه (على سبيل المثال ، عملية غير متزامنة) وسار كل شيء على ما يرام.
3. `Rejected` - تم رفض الوعد إذا حدث خطأ أثناء التنفيذ.

## ابتكر وعدًا

![Plus](https://media.giphy.com/media/Yqo5mjWTLGlVOIP8Dc/giphy.gif)

أ`Promise` يتم إنشاء الكائن باستخدام الكلمة الأساسية الجديدة والمُنشئ الخاص بها.
يأخذ مُنشئ الوعد وسيطًا واحدًا ، وهو رد نداء ، يُعرف أيضًا باسم دالة التنفيذ ، والتي تأخذ استعادتي نداء `resolve` و` reject`.

يتم تنفيذ الوظيفة التنفيذية فور إنشاء الوعد. الوعد يتم الوفاء به عن طريق الاتصال `resolve` ورفض الاتصال `reject`.

```jsx
const promise = new Promise((resolve, reject) => {
  if (allWentWell) {
    resolve('Everything went great!')
  } else {
    reject('Something went wrong')
  }
})
```

`resolve` و `reject` خذ وسيطة واحدة ، والتي يمكن أن تكون سلسلة أو رقمًا أو تعبيرًا منطقيًا أو مصفوفة أو كائنًا.

لتوفير وظيفة بوظيفة الوعود ، ما عليك سوى إرجاع ملف `Promise` كائن فيه:

```jsx
function myAsyncFunction(url) {
  return new Promise((resolve, reject) => {
    // function code
  })
}
```

## باستخدام الوعد

![Help](https://media.giphy.com/media/iigqhSTOKmb6wDObGb/giphy.gif)

وعود تستخدم مع `then()` و `catch()` أساليب.

### ومن بعد

ال `then` تستخدم الطريقة لتشغيل الدوال بوعد إيجابي أو سلبي.

![Launch](https://media.giphy.com/media/1n4FT4KRQkDvK0IO4X/giphy.gif)

بناء الجملة لملف`then` الطريقة هي:

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

الأول 1️⃣ حجة `then` الطريقة هي وظيفة يتم تنفيذها عند تمرير الوعد إلى حالة "تم بنجاح" وتلقي النتيجة.

الحجة الثانية ل `then` هي وظيفة يتم تنفيذها عندما يدخل الوعد في حالة اكتمال مع وجود خطأ ويتلقى خطأ🙅‍♂️.

![Error](https://media.giphy.com/media/iJCo9daAP0xugHhhfb/giphy.gif)

مثال على `then` طريقة:

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

وفي حالة وجود خطأ 🙅‍♂️ في الوعد ، يتم تنفيذ الثاني:

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

إذا كنت بحاجة إلى عرض نتيجة التنفيذ الناجح فقط ، فيمكن تمرير وظيفة واحدة فقط إليها`then`:

```jsx
let promise = new Promise(resolve => {
  setTimeout(() => resolve('done!'), 1000)
})

promise.then(alert) // will print "done!" one second later
```

### قبض على

![Catch](https://media.giphy.com/media/fxeeuml8GaESfmuE4z/giphy.gif)

للقبض على الأخطاء🙅‍♂️, ال `catch` الطريقة المستخدمة. يمكن استخدامه بدلاً من ملف `then` طريقة عرض رسائل الخطأ.


صيغة طريقة catch هي:

```jsx
let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Error!')), 1000)
})

promise.catch(alert) // will print "Error: Error!" one second later
```

### الوعد. الكل

تأخذ هذه الطريقة مجموعة من الوعود وتعيد وعدًا جديدًا سيتم الوفاء به عندما يتم الوفاء بجميع الوعود داخل المصفوفة أو رفضها بمجرد الوفاء بوعد تم رفضه.

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

هنا ، الحجة في الداخل `then()` هي مصفوفة تحتوي على قيم الوعود بنفس الترتيب الذي تم تمريرها إليه `Promise.all()`.

<!-- ### promise.race

![Bomerang](https://media.giphy.com/media/g0yLXvb7Ffn9rilMIm/giphy.gif)

Этот метод принимает массив промисов и возвращает🔄 один 🆕 новый промис, который будет выполненным, как только встретится выполненный промис в массиве или же отклоняется, если отклоненный промис встречается раньше.

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

Тут мы имеем два промиса, где один выполняется через `1` секунду, а другой отклоняется через `1.5` секунды. Как только первый 1️⃣ промис выполнен, возвращенный🔄 из `Promise.race()` промис будет иметь статус выполненного не дожидаясь статуса второго промиса.

Здесь data, которая передается в `then()` является значением первого, выполненного, промиса.

По итогу, `Promise.race()` дожидается первого промиса и берет его статус как статус возвращаемого🔄 промиса. -->

## مشاكل؟

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

اكتب ل [Discord](https://discord.gg/6GDAfXn)محادثة.

## أسئلة:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

ما اسم الطريقة التي تسمى عند نجاح الوعد؟

1. `reject`
2. `resolve`

ما هي الطريقة التي يمكن استخدامها للتحقق من الوفاء بجميع الوعود في المصفوفة؟

1. `promise.all`
2. `promise.race`

ما هي الطريقة التي تستخدم للقبض على الأخطاء في الوعود؟

1. `then`
2. `catch`

لفهم مقدار ما تعلمته في هذا الدرس ، قم بإجراء الاختبار في [mobile application](http://onelink.to/njhc95) من مدرستنا في هذا الموضوع.

![Sumerian school](/img/app.jpg)

## الروابط:

1.  [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise)
2.  [Learn JavaScript](https://learn.javascript.ru/promise)
3.  [Understanding Promises](https://blog.bitsrc.io/understanding-promises-in-javascript-c5248de9ff8f?gi=1e459ca846d9)

## المساهمون ✨

الشكر يعود إلى هؤلاء الأشخاص الرائعين ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/FELiX-RN"><img src="https://avatars0.githubusercontent.com/u/72006627?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Philipp Dvinyaninov</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=FELiX-RN" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
