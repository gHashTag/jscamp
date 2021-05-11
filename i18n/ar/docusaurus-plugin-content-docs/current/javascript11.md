---
id: javascript11
title: اكتب التحويل والصب
sidebar_label: اكتب التحويل والصب
---

![@serverSerrverlesskiy](/img/javascript/headers/09.jpg)

## اكتب الإكراه (نوع الإكراه)

إنه تحويل تلقائي أو ضمني للقيم من نوع بيانات إلى آخر (على سبيل المثال ، سلسلة إلى رقم). تشبه تحويلات النوع تحويلات النوع لأن كلاهما يقوم بتحويل القيم من نوع بيانات إلى آخر ، مع اختلاف رئيسي واحد - تحويل النوع ضمني ، بينما يمكن أن يكون تحويل النوع ضمنيًا أو صريحًا.

![transformation](https://media.giphy.com/media/xT4uQr9H3EDL7Ha2hq/giphy.gif)

أمثلة👇:

```jsx live
function learnJavaScript() {
  const value1 = '5'
  const value2 = 9
  let sum = value1 + value2

  return sum
}
```

في المثال أعلاه ، تضع JavaScript الرقم `9` في سلسلة ، ثم تربط القيمتين 2️⃣ معًا ، مما ينتج عنه السلسلة` 59`. كان لجافا سكريبت الاختيار بين سلسلة أو رقم واختار استخدام سلسلة.

يمكن للمترجم تحويل السلسلة `5` إلى رقم وإرجاع مجموع` 14` ، لكنه لم يفعل. للحصول على هذه النتيجة ، تحتاج إلى تحويل السلسلة `5` صراحةً إلى رقم باستخدام` Number()` 👇 طريقة:

```jsx live
function learnJavaScript() {
  const value1 = '5'
  const value2 = 9
  let sum = Number(value1) + value2

  return sum
}
```

## اكتب التحويل

![Transformation](https://media.giphy.com/media/l2SpMMVivErM0Q7jG/giphy.gif)

يعني نقل البيانات من نوع بيانات إلى آخر. يحدث التحويل الضمني عندما يقوم المحول البرمجي تلقائيًا بتعيين (تعيين) أنواع البيانات ، ولكن قد تتطلب شفرة المصدر أيضًا صراحة اكتمال التحويل.

### سلسلة التحويل

![Transformation](https://media.giphy.com/media/RLVHPJJv7jY1q/giphy.gif)

Sيحدث تحويل tring عندما تريد تمثيل شيء ما كسلسلة. على سبيل المثال ، يمكننا استخدام `String (value)` وظيفة لتحويل قيمة إلى سلسلة 👇:

```jsx live
function learnJavaScript() {
  let value = true // boolean

  value = String(value)
  return typeof value
}
```

يحدث التحول بطريقة واضحة. `true` ✅ يصبح`"true"`✅

### التحويل الرقمي

![Transformation](https://media.giphy.com/media/4H5nOUqX7FywOGpCF7/giphy.gif)

يحدث التحويل العددي في وظائف وتعبيرات الرياضيات.

```jsx live
function learnJavaScript() {
  let value = '6' / '2'

  return value
}
```

يمكننا استخدام `Number (value)` وظيفة لتحويل صراحة `value` إلى رقم 👇:

```jsx live
function learnJavaScript() {
  let str = '123'
  let num = Number(str)

  return typeof num
}
```

غالبًا ما يتم استخدام التحويل الصريح عندما نتوقع الحصول على رقم من سياق سلسلة ، مثل الحقول النصية في النماذج.

إذا تعذر تحويل السلسلة بشكل صريح إلى رقم ، فستكون نتيجة التحويل "NaN" (ليس رقمًا ، "وليس رقمًا"). علي سبيل المثال👇:

```jsx live
function learnJavaScript() {
  let age = Number('Any string instead of a number')

  return age
}
```

### قواعد التحويل الرقمي:

| قيمة           |                                                                              تم التحويل إلى ...                                                                               |
| ---------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| `undefined`      |                                                                                    `NaN`                                                                                    |
| `null`           |                                                                                     `0`                                                                                     |
| `true` /` false` |                                                                                  `1` /` 0`                                                                                  |
| `string`         | يتم قطع المساحة البيضاء عند الحواف. علاوة على ذلك ، إذا بقيت سلسلة فارغة ، فسنحصل على 0 ، وإلا فسيتم "قراءة" الرقم من سلسلة غير فارغة. عند حدوث خطأ ، تكون النتيجة هي NaN. |

أمثلة:

```javascript
Number('   123   ') // 123
Number('123z') // NaN (error reading the number in place of the "z" character)
Number(true) // 1
Number(false) // 0
Number(null) // 0
Number(undefined) // NaN
```

لاحظ أن `null` و` undefined` تتصرف بشكل مختلف. وبالتالي، `null` يصبح صفرا ، بينما` undefined` يلقي ل `NaN`.

### التحويل المنطقي

![Transformation](https://media.giphy.com/media/JjAdpCxrdro7m/giphy.gif)

التحول المنطقي هو الأبسط. تحدث في عمليات منطقية ، ولكن يمكن إجراؤها أيضًا بوضوح مع الوظيفة ⚙️`Boolean (value)`.

### قواعد التحويل المنطقية:

القيم التي تكون "فارغة" حدسيًا مثل "0" ، سلسلة فارغة ،` null`, `undefined`, و` NaN` أصبح`false`. تصبح جميع القيم الأخرى`true`.

```javascript
Boolean(1) // true
Boolean(0) // false
Boolean('Привет!') // true
Boolean('') // false
```

:::تنبيه لاحظ أن السطر الذي يحتوي على صفر "0" صحيح
بعض اللغات👅 (على سبيل المثال PHP) فسر السلسلة `" 0 "` as `false`. لكن في JavaScript ، إذا لم تكن السلسلة فارغة ، فهي دائمًا`true`
:::

```javascript
Boolean('0') // true
Boolean(' ') // space is also true (any non-empty string is true)
```

## مشاكل؟

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

اكتب ل [Discord](https://discord.gg/6GDAfXn) محادثة.

## أسئلة:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

ما الوظيفة التي يجب أن تستخدمها لتحويل السلسلة؟

1. `String (value)`
2. `Boolean (value)`
3. `Number (value)`

ما هو التلبيس؟

1. نقل البيانات من نوع إلى آخر
2. تحويل القيم من نوع بيانات إلى نوع آخر
3. تمثيل الشيء كسلسلة

ما هو الفرق الرئيسي بين التلبيس والتلبيس؟

1. تحويل النوع صريح ، وتحويل النوع ضمني
2. نوع الصب ضمني ، وتحويل النوع صريح
3. تحويل النوع ضمني ، ويمكن أن يكون تحويل النوع صريحًا وضمنيًا

`NaN`?متى تكون نتيجة التحويل

1. عندما لا يمكن تحويل سلسلة بشكل صريح إلى رقم
2. عندما لا يمكن تحويل رقم بشكل صريح إلى سلسلة
3. عندما يكون هناك خطأ في الكود

ماذا تصبح القيم "الفارغة" عند تحويلها؟

1. `null`
2. `true`
3. `false`

لفهم مقدار ما تعلمته في هذا الدرس ، قم بإجراء الاختبار في[mobile application](http://onelink.to/njhc95) من مدرستنا في هذا الموضوع.

![Sumerian school](/img/app.jpg)

## الروابط

1. [MDN web docs - Typecasting](https://developer.mozilla.org/en/docs/Словарь/Type_coercion)
2. [Code for Teens: The Perfect Beginner's Guide to Programming, Volume 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)
3. [JavaScript.ru](https://learn.javascript.ru/ifelse#blok-else)
4. [Integer arithmetic](https://maths-public.ru/arithmetic/actions)

## المساهمون✨

الشكر يعود إلى هؤلاء الأشخاص الرائعين([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">📖</a><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>
  
</table>

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
