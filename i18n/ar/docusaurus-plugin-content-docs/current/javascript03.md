---
id: javascript03
title: المتغيرات
sidebar_label: المتغيرات
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/03.jpg)

## المتغيرات

المتغيرات  (المتغيرات التي يتم اختصارها كـ `var`) عبارة عن حاوية للقيم مثل الأرقام المستخدمة بالإضافة إلى ➕، أو سلسلة نصية يمكننا استخدامها كجزء من جملة.

![Container](https://media.giphy.com/media/0T0FUiZl51VPCLsqLR/giphy.gif)

<!-- ## Video

<YouTube videoId="gCqxA_JOtmw" /> -->

## إعلان متغير

![Announcement](https://media.giphy.com/media/cYaBD8kxE4PZudHBRA/giphy.gif)

لاستخدام متغير ، يجب عليك أولاً إنشاؤه ، أو بشكل أكثر دقة ، تعريف متغير. للقيام بذلك ، نقدم الكلمة الأساسية `var` متبوعة بالاسم الذي تريد منحه للمتغير الخاص بك. التعليمات أدناه تنشئ (بعبارة أخرى: تعلن أو تحدد) متغيرًا باسم "message":

```jsx live
function learnJavaScript() {
  var message = ''

  return message
}
```

هنا نقوم بإنشاء متغير  `message`.حاليا⏱️ لا يحتوي على قيمة ، لكي نكون أكثر دقة ، يحتوي المتغير على سلسلة فارغة.

## تخصيص قيمة لمتغير

![Memory](https://media.giphy.com/media/3o6ZtafpgSpvIaKhMI/giphy.gif)

بمجرد المتغير أعلن ، يمكن تعيين قيمة له. للقيام بذلك ، اكتب  اسم المتغير, متبوعة بعلامة التساوي`=`, متبوعة بالقيمة التي تريد تعيينها. على سبيل المثال :

```jsx live
function learnJavaScript() {
  var message
  message = 'My name is ...'
  // We can access it using the variable name
  return message
}
```

في "RESULT" ، القيمة التي عينتها للمتغير  عاد في وحدة التحكم. يلعب حول🎮 بقيم المتغير , على سبيل المثال ، أكمل التعبير باسمك.

للإيجاز ، يمكنك الجمع بين إعلان المتغير  والكتابة في سطر واحد :

```jsx live
function learnJavaScript() {
  var message = 'Hello!' // define a variable and assign a value to it
  return message
}
```

## تحديث متغير

![Update](https://media.giphy.com/media/FP47IFqWyXfdKYU6VG/giphy.gif)

من خصائص المتغيرات  هو أن معناها يمكن أن يتغير.
عندما يتم إسناد قيمة إلى متغير , يمكنك تغيير (تحديث) تلك القيمة ببساطة عن طريق تحديد قيمة مختلفة. دعنا نلقي نظرة على مثال بسيط:

```jsx live
function learnJavaScript() {
  var message = 'Bob' // now message Bob
  message = true // and now the message is true
  message = 35 // and as a result message 35

  return message
}
```

ميزة أخرى للمتغيرات  هي أنها يمكن أن تحتوي على أي شيء تقريبًا ، وليس فقط سلاسل وأرقام. المتغيرات يمكن أن تحتوي أيضًا على بيانات معقدة وحتى وظائف كاملة. سوف تتعلم المزيد عن هذا أثناء دراستك للدورة أكثر

::: نصيحة ملاحظة!
نقول أن المتغيرات تحتوي على قيم. هذا فارق مهم. المتغيرات ليست القيم نفسها! إنها حاويات للقيم. تخيل أنها مثل صناديق الكرتون الصغيرة حيث يمكنك تخزين الأشياء.
:::

![Variables](https://mdn.mozillademos.org/files/13506/boxes.png)

![Hello World](https://media.giphy.com/media/26his8ERHOSxKuWw8/giphy.gif)

## قواعد التسمية المتغيرة

![Rules](https://media.giphy.com/media/XK8I8Am1gSe17MiJ2m/giphy.gif)

يمكنك تسمية المتغير  ما شئت ، ولكن هناك قيود. بشكل عام ، يجب أن تلتزم فقط بالأحرف اللاتينية (0-9 ، a-z ، A-Z) والشرطة السفلية.

- لا ينصح باستخدام الرموز الأخرى لأنها قد تسبب أخطاء أو تكون غير مفهومة للجمهور الدولي.
- لا تستخدم الشرطة السفلية في بداية أسماء المتغيرات - يستخدم هذا في بعض تكوينات JavaScript للإشارة إلى أشياء محددة.
- لا تستخدم الأرقام في بداية المتغيرات. هذا غير صالح وسيؤدي إلى خطأ.
- من المقبول عمومًا التمسك بما يسمى "حالة الجمل السفلية" (حالة الجمل - تسمى هكذا بسبب "الحدبات" التي تشكل الأحرف الأولى من الكلمات) ، حيث يمكنك لصق عدة كلمات باستخدام أحرف صغيرة للكلمة الأولى بأكملها ، ثم الحروف الكبيرة للكلمات اللاحقة. لقد استخدمنا هذا لأسماء المتغيرات الخاصة بنا في هذه المقالة.
- اصنع أسماء متغيرات حدسي حول البيانات التي تحتوي عليها. لا تستخدم فقط أحرفًا / أرقامًا مفردة أو عبارات طويلة كبيرة.
- المتغيرات  حساسة لحالة الأحرف ، لذا فإن `myage` و` myAge` متغيران مختلفان.
- أخيرًا وليس آخرًا - تحتاج أيضًا إلى تجنب استخدام كلمات JavaScript المحجوزة كأسماء متغيرات  - بهذا نعني الكلمات التي تشكل بناء جملة JavaScript الفعلي! وبالتالي ، لا يمكنك استخدام كلمات مثل var و function و let و for لأسماء المتغيرات. تتعرف المستعرضات عليها على أنها أجزاء مختلفة من التعليمات البرمجية ، وبالتالي تحدث أخطاء.

## قائمة الكلمات المحجوزة

![Reserved](https://media.giphy.com/media/3o6Mb3eci7bVDKBR2o/giphy.gif)

لا يمكننا استدعاء المتغيرات  بهذه الكلمات ، حيث إنها محفوظة بلغة Java Script.
`break`, `case`, `catch`, `class`, `const`, `continue`, `debugger`, `default`, `delete`, `do`, `else`, `export`, `extends`, `finally`, `for`, `function`, `if`, `import`, `in`, `instanceof`, `new`, `return`, `super`, `switch`, `this`, `throw`, `try`, `typeof`, `var`, `void`, `while`, `with`, `yield`

## كتابة فضفاضة

![Freedom](https://media.giphy.com/media/6901DbEbbm4o0/giphy.gif)

جافا سكريبت هي "لغة مكتوبة بحرية ” مما يعني أنه على عكس بعض اللغات الأخرى  لا تحتاج إلى تحديد نوع البيانات التي سيحتويها المتغير (مثل الأرقام والسلاسل والمصفوفات وما إلى ذلك).

على سبيل المثال ، إذا قمت بتعريف متغير  وتعيين قيمة مقتبسة له ، سيعالج المتصفح المتغير as a string :

```jsx live
function learnJavaScript() {
  var myString = 'Hello'
  // It will still be a string, even if it contains numbers, so be careful:
  var myNumber = '500' // oops, it's still a string

  myNumber = 500 // that's better, now it's number. Remove this line and look at the data type.

  return typeof myNumber
}
```

## تم إيقاف الكلمة الرئيسية "var"

![Old](https://media.giphy.com/media/3orieJI3IdkKWIsAGA/giphy.gif)

عادة لا يتم استخدام "var" في البرامج النصية الحديثة ، ولكن لا يزال من الممكن إخفاؤها في النصوص القديمة. هذا يرجع إلى حقيقة أنه لا يتصرف بشكل لا لبس فيه ، لذلك بدلاً من "var" سنستخدم "let" للمتغيرات const و "const" للثوابت - الثوابت.
 انتهى الاستراحة ، دعنا ننتقل إلى الدرس التالي!

## مشاكل؟

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

اكتب ل [Discord](https://discord.gg/6GDAfXn) محادثة.

## أسئلة:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

لمن يفعل `console.log` الأمر يحتوي على معلومات؟

1. مستخدم
2. مطور
3. مترجم جافا سكريبت

ما هي المتغيرات؟

1. حاويات للقيم
2. قيم متغيرة
3. حروف لاتينية

ماذا يمكن أن تحتوي المتغيرات؟

1. فقط السلاسل والأرقام
2. أرقام ، سلاسل ، بيانات معقدة ، وظائف
3. فقط البيانات والوظائف المعقدة

كيف تكتب أمرًا لتعيين متغير؟
1. `var`
2. `var` [اسم المتغير] =
3. `var` [اسم المتغير]

كيف أقوم بتحديث متغير؟

1. لا يمكن تحديث المتغير
2. حدد قيمة مختلفة للمتغير
3. قم بتعيين أمر مخصص

ما هو مفقود في قواعد تسمية المتغيرات؟

1. لا تستخدم الأرقام في بداية المتغيرات
2. استخدم الشرطة السفلية في بداية المتغيرات
3. التزم بالأحرف اللاتينية

كيف أكتب قيمة المتغير بحيث يتعامل المتصفح مع المتغير كسلسلة؟

1. بدون اقتباسات
2. في اقتباسات
3.بين قوسين

ما الكلمة الرئيسية التي لا نستخدمها لتحديد المتغيرات؟

1. `let`
2. `const`
3. `var`

لفهم مقدار ما تعلمته في هذا الدرس ، قم بإجراء اختبار في مدرستنا [mobile application](http://onelink.to/njhc95) حول هذا الموضوع.

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## الروابط

1. [MDN web docs](https://developer.mozilla.org/ru/docs/Learn/JavaScript/Первые_шаги/Variables)
2. [Code for Teens: The Perfect Beginner's Guide to Programming, Volume 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)
3. [JavaScript.ru](https://learn.javascript.ru/types)

## المساهمون ✨

الشكر يعود إلى هؤلاء الأشخاص الرائعين([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">  </a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>
  
</table>

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)
