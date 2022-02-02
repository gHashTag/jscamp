---
id: javascript15
title: تبديل حالة البناء
sidebar_label: تبديل حالة البناء
---

![@serverSerrverlesskiy](/img/javascript/headers/14.jpg)

يتم استخدام إنشاء المفتاح لمقارنة قيمة المساواة مع الخيارات المختلفة.

في هذه الحالة ، يتم تضمين المساواة بمعنى المساواة الصارمة للمشغل `` === '' ، ولا يمكن مقارنتها بتعبير عادي أو بطريقة أخرى. بمعنى ، يجب أن تكون القيم من نفس النوع حتى يتم الاحتفاظ بالمساواة.

![comparison](https://media.giphy.com/media/icJA0VF7ntoEL18Jez/giphy.gif)

إذا تطابق الشرط ، فإن كتلة التعليمات البرمجية📟 المرتبطة المقابلة `case` يتم تنفيذ. إذا لم يتطابق أي من الشروط ، فسيكون الرمز المحدد في ملف `default`كتلة ، إن وجدت ، يتم تنفيذها. للخروج من البناء ، استخدم`break` أمر. إذا لم تحدده ، فسيتم تنفيذ كتلة التعليمات البرمجية تلقائيًا في التالي `case`, إلخ. لذلك نستخدمها `break` في نصوصنا ، حتى لا نشغل المترجم الفوري`cases`, وبالتالي تقليل أداء البرنامج النصي.

## بناء الجملة

![Syntax](https://media.giphy.com/media/yR4xZagT71AAM/giphy.gif)

أ`switch` يحتوي البناء على واحد أو أكثر` case` كتل واختياري `default` منع.

تبدو هكذا:

```jsx
switch (n) {
  case 1:
    // code block 1;
    break
  case 2:
    // code block 2;
    break
  // .......
  // other case options
  // .......
  default:
  // code block if none of the conditions match;
}
```

`n` -هذا هو[boolean](https://jscamp.app/docs/javascript08) شرط.

## أمثلة على

![Math](https://media.giphy.com/media/xT1Ra5h24Eliux3UVq/giphy.gif)

لنفكر في أبسط مثال👇:

```jsx live
function learnJavaScript() {
  let a = 4
  let str
  switch (a) {
    case 3:
      str = 'Not enough'
      break
    case 4:
      str = 'To the point!'
      break
    case 5:
      str = 'brute force'
      break
    default:
      str = "I don't know such values"
  }
  return str
}
```

هنا`switch` بيان سوف يقارن بالتسلسل` a` مع كل الخيارات من`case`.
أولا `3`, ثم - حيث لا يوجد تطابق -`4`. تم العثور على تطابق ، سيتم تنفيذ هذا الخيار ، من السطر`str = 'To point!'` وبعد ذلك ، إلى أقرب`break`, مما يقطع التنفيذ.

![Wow](https://media.giphy.com/media/3oriO13KTkzPwTykp2/giphy.gif)

تأمل هذا المثال👇:

```jsx live
function learnJavaScript() {
  let a = 'Apples'
  let str
  switch (a) {
    case 'Apples':
      str = 'I love ' + a
      break
    case 'Oranges':
      str = 'I love ' + a
      break
    case 'Bananas':
      str = 'I love ' + a
      break
    default:
      str = 'I like other fruits'
  }
  return str
}
```

هنا `switch` بيان سوف يقارن بالتسلسل `a` مع كل الخيارات من `case`. لكن هذه ليست مقارنة بين الأرقام ، ولكن بين الأوتار. يمكن القيام بذلك مع أي نوع بيانات ، طالما تتم مقارنة أنواع البيانات نفسها.

## استبدال "if"

أيضًا ، يتم استخدام "Switch" لاستبدال "if" المتعددة.

على سبيل المثال ، يمكنك استبدال هذا الرمز👇:

```jsx live
function learnJavaScript() {
  let number = 2
  let str
  if (number === 0) {
    str = 'You entered the number 0'
  }

  if (number === 1) {
    str = 'You entered the number 1'
  }

  if (number === 2 || number === 3) {
    str = 'You entered the number 2, maybe 3'
  }
  return str
}
```

على هذا 👇:

```jsx live
function learnJavaScript() {
  let number = 2
  let str
  switch (number) {
    case 0:
      str = 'You entered the number 0'
      break

    case 1:
      str = 'You entered the number 1'
      break

    case 2:
    case 3:
      str = 'You entered the number 2, maybe 3'
      break
  }
  return str
}
```

ستكون النتيجة هي نفسها ، لكن الكود سيصبح أكثر قابلية للقراءة وأسهل في العمل به.

## مشاكل؟

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

اكتب ل [Discord](https://discord.gg/6GDAfXn) محادثة.

## أسئلة:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

هل من الممكن استخدام`switch` لمقارنة شيء مع التعبيرات العادية؟

1. Yes
2. No

ما عامل المقارنة يفعل `switch` استعمال؟

1. `=`
2. `===`
3. `==`

الكلمة الأساسية التي توقف عملية المقارنة فيها `switch`?

1. `break`
2. `stop`
3. `default`

لفهم مقدار ما تعلمته في هذا الدرس ، قم بإجراء الاختبار في[mobile application](http://onelink.to/njhc95) من مدرستنا في هذا الموضوع.

![JS Camp](/img/app.jpg)

## الروابط

1.  [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/switch)
2.  [Learn JavaScript](https://learn.javascript.ru/switch)
3.  [Справочник JavaScript](https://javascript.ru/switch)

## المساهمون ✨

الشكر يعود إلى هؤلاء الأشخاص الرائعين([emoji key](https://allcontributors.org/docs/en/emoji-key)):

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
