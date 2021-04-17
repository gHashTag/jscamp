---
id: javascript12
title: نطاق الكتلة
sidebar_label: نطاق الكتلة
---

![@serverSerrverlesskiy](/img/javascript/headers/12.jpg)

النطاق هو جزء من برنامج يتوفر فيه متغير للاستخدام. عند إنشاء ملفات🏗️ `.js` ملف ، نقوم بإنشائه🏗️ نطاق الملف بأكمله المراد إنشاؤه🏗️ النطاق الداخلي ، يجب التصريح عنه بأقواس مجعدة `{...}`.

![file](https://media.giphy.com/media/3o6Ztk7NosfLVRqcpy/giphy.gif)

```jsx
// First scope
let fruit = 'Banana'
{
  // Second scope
  let fruit = 'Apple'
  {
    // Third scope
    let fruit = 'Lime'
  }
}
```

في هذا المثال ، أنشأنا🏗️ ثلاثة متغيرات في نطاقات مختلفة ،التي لها نسختها الخاصة من`fruit` متغير ، لذلك لا توجد أخطاء🙅‍♂️ تحدث ، ولكن إذا حاولت إنشاء🏗️ متغيرين بنفس الاسم في نفس النطاق ، سيحدث خطأ🙅 ‍♂️.

```jsx
// First scope
let fruit = 'Banana'
{
  // Second scope
  let fruit = 'Apple'
  let fruit = 'Lime' // An error will occur here
}
```

عند إنشاء ملفات🏗️ بنيات مختلفة ، يمكنك أيضًا إنشاء نطاق لهذا البناء ، نظرًا لأنك تستخدم كتلة من الأقواس المتعرجة`{...}`.

```jsx
if (true) {
  // Scope of the conditional operator
}

for (let i = 0; i > 5; i++) {
  // Scope of the cycle
}

function test() {
  // Function scope
}
```

في هذه الأمثلة ، كل بناء له نطاقه الخاص.

## النطاق العالمي

![Global](https://media.giphy.com/media/l0MYPsBLOYyFqSDte/giphy.gif)

عندما نقول النطاق العالمي ، فإننا نعني أن جميع النطاقات الأخرى هي أطفال لهذا النطاق. يحتوي النطاق العام على متغيرات تم الإعلان عنها خارج جميع الوظائف والكتل.

```jsx
// Global scope
let fruit = 'Banana'
```

متغير🔔 تم إنشاؤه في النطاق العالمي يسمى `global variable` 🔔. المتغير الشامل 🔔 يمكن استخدامها في جميع نطاقات الأطفال.

```jsx live
function learnFavaScript() {
  // The variable fruit is global
  let fruit = 'Banana'
  function showFruit() {
    // Therefore, we can use it inside a function
    return fruit
  }
  return showFruit()
}
```

## النطاق المحلي

![Local](https://media.giphy.com/media/VFwRCi6WKBUk08fliV/giphy.gif)

النطاق المحلي يحتوي على متغيرات تم التصريح عنها🗣️ في جزء محدد من الكود📟. على سبيل المثال ، ستكون المتغيرات التي تم إنشاؤها داخل حلقة محلية.

```jsx
for (let i = 0; i > 5; i++) {
  // Variable i is local
}
```

المتغيرات المحلية🔔 يمكن استخدامها فقط داخل الكتلة التي تم الإعلان عنها فيها.

```jsx
function learnFavaScript() {
  function showFruit() {
    // The variable fruit is local
    let fruit = 'Banana'
  }
  // Therefore, we cannot use it outside the function.
  return fruit
}

// ReferenceError: fruit is not defined
```

## أمثلة

![Math](https://media.giphy.com/media/xT1Ra5h24Eliux3UVq/giphy.gif)

نحن نستخدم متغيرين 🔔 بنفس الاسم في نطاقات مختلفة. ال`otherFruit()` ترجع الدالة أ🔔 `fruit` متغير من النطاق الذي تمت تهيئته فيه كـ` Lime`

```jsx live
function learnJavaScript() {
  let fruit = 'Banana'
  function otherFruit() {
    let fruit = 'Lime'
    return fruit
  }
  return otherFruit() + ' and ' + fruit
}
```

إذا أزلنا `let` من`otherFruit()`وظيفة ، ثم بدلاً من إنشاء متغير🔔 نحن نكتبه 🖊️.

```jsx live
function learnJavaScript() {
  let fruit = 'Banana'
  function otherFruit() {
    fruit = 'Lime'
    return fruit
  }
  return otherFruit() + ' and ' + fruit
}
```

ماذا لو حاولنا استدعاء متغير محلي 🔔 في نطاق الوالدين؟ يحدث خطأ بسبب حقيقة أننا نحاول في النطاق العالمي استدعاء متغير🔔, الذي لم نخلقه.

```javascript
function learnJavaScript() {
  let num
  for (let i = 0; i != 5; i++) {
    num += i
  }
  return i
}

//ReferenceError: i is not defined
```

![Primer](https://media.giphy.com/media/M33UV4NDvkTHa/giphy.gif)

## إنكار فار

![eye](https://media.giphy.com/media/PKl9JTqnoiKtO/giphy.gif)

في المقالة[Change](https://react-native-village.github.io/docs/javascript03) قلنا لك أننا لن نستخدم`var`, tله مرتبط بالنطاق.

1. إذا قمت بإنشاء متغيرين في نفس النطاق 🔔 بنفس الاسم باستخدام الكلمة الأساسية `let` or `const`, يحذرنا المترجم الفوري من ذلك من خلال عرض خطأ.

```jsx
function learnJavaScript() {
  let fruit = 'Banana'
  let fruit = 'Lime'
  return fruit
  // SyntaxError: Identifier 'fruit' has already been declared
}
```

ولكن ، إذا قمت بإنشاء متغيرات بنفس الاسم باستخدام `var`, سوف يعيد تعيينها.

```jsx live
function learnJavaScript() {
  var fruit = 'Banana'
  var fruit = 'Lime'
  return fruit
}
```

خطأ🙅‍♂️ لا يحدث ، لأن`var` قام بالكتابة فوق المتغير` fruit`

2. بعد إنشاء متغير عالمي🔔 مع`var`, يمكننا تغييره من النطاق المحلي عن طريق إنشاء متغير آخر🔔 بنفس الاسم مع`var`. نطاق `var` يقتصر على وظيفة أو نص.

```jsx live
function learnJavaScript() {
  var fruit = 'Lime'
  {
    var fruit = 'Banana'
  }
  return fruit
}
```

3. المتغيرات 🔔 تم إنشاؤها باستخدام`var` تعتبر معلنة منذ بداية تنفيذ البرنامج النصي ، بغض النظر عن مكان الإعلان.

```jsx live
function learnJavaScript() {
  fruit = 'Banana'
  var fruit
  return fruit
}
```

4. لم يكن لدى JavaScript نطاقات كتلة قبل ES6. أولئك. أي متغير تم إنشاؤه باستخدام الكلمة الأساسية `var` داخل كتلة سيكون مرئيًا خارجه.

```javascript
if (true) {
  var fruit = 'Apple' // the variable will be visible outside the given block
}
console.log(fruit) // "Apple"
```

![javascript](/img/javascript/28.jpg)

```javascript
if (true) {
  let fruit = 'Apple' // the variable will not be visible outside the given block
}
console.log(fruit) // "Apple"
```

![javascript](/img/javascript/29.jpg)

نظرًا للأسباب المذكورة ، قرر المطورون عدم استخدام `var`

## مشاكل؟

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

اكتب ل[Discord](https://discord.gg/6GDAfXn) محادثة.

## أسئلة:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

متى نقوم بإنشاء النطاق الأول؟

1. عند إنشاء دورة
2. عند إنشاء ملف
3. عند إنشاء كتلة

عند إنشاء بيان شرطي ، هل تم إنشاء نطاق جديد؟

1. نعم
2. لا

أين يتم إنشاء المتغير المحلي؟

1. في جزء معين من الكود
2. خارج كل الكتل

لفهم مقدار ما تعلمته في هذا الدرس ، قم بإجراء الاختبار في [mobile application](http://onelink.to/njhc95) من مدرستنا في هذا الموضوع.

![Sumerian school](/img/app.jpg)

## الروابط

1. [JavaScript Scope](https://css-tricks.com/javascript-scope-closures/)
2. [Learn JavaScript](https://learn.javascript.ru/closure)
3. [MDN Web Docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)

## المساهمون ✨

الشكر يعود إلى هؤلاء الأشخاص الرائعين ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr> 
    <td align="center"><a href="https://github.com/IIo3iTiv"><img src="https://avatars1.githubusercontent.com/u/72025062?v=4?s=200" width="200px;" alt=""/><br /><sub><b>IIo3iTiv</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=IIo3iTiv" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
