---
id: javascript07
title: أعداد
sidebar_label: أعداد
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/07.jpg)

هنالك اثنان 2️⃣ أنواع الأرقام في JavaScript الحديث:

### "رقم"

يتم تخزين الأرقام العادية في JavaScript بتنسيق 64 بت IEEE-754 ، وتسمى أيضًا أرقام الفاصلة العائمة ذات الدقة المزدوجة. هذه هي الأرقام التي سنستخدمها في أغلب الأحيان. لا تعتبر الأعداد الصحيحة نوعًا منفصلاً من الأرقام. بالإضافة إلى أرقام الفاصلة العائمة ، يشتمل نوع البيانات الرقمية أيضًا على ثلاث قيم للأحرف: "Infinity" و "-Infinity" و "NaN" (غير رقم).

![Numbers](https://media.giphy.com/media/JtBZm3Getg3dqxK0zP/giphy.gif)

### "كبيرة"

`Number`.تجعل الأرقام من الممكن العمل مع الأعداد الصحيحة ذات الطول التعسفي. نادرًا ما تكون هناك حاجة إليها ويتم استخدامها في الحالات التي تحتاج فيها إلى العمل بقيم خارج الحد الأقصى لقيمة عدد صحيح آمن

أي رقم ، حتى الكسر العشري الذي يحتوي على الكثير من المنازل العشرية ، لا يتم اقتباسه مطلقًا.

يمكنك استخدام أربعة أنواع من القيم الحرفية الرقمية: عشري ، وثنائي ، وثماني ، وست عشري. نظرًا لأنه نادرًا ما يتم استخدام الثلاثة الأخيرة ، فسوف نحذف وصفها التفصيلي,لكن الفضوليين يمكنهم التعرف عليهم[here](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Numbers_and_dates).

:::caution
كن حذرًا عند استخدام الأصفار البادئة! هذا يعني أنك لست بحاجة إلى وضع الصفر قبل الرقم العشري.
:::

```jsx
1234567890
42

0888 // 888 is treated as decimal
0777 // treated as non-strict octal (511 decimal)
```

## عمليات حسابية
![Arithmetic operation](https://media.giphy.com/media/gEvab1ilmJjA82FaSV/giphy.gif)

يمكن استخدام عددين صحيحين أو أكثر لتكوين عدد صحيح جديد. هناك طرق عديدة لتكوين عدد صحيح جديد. تسمى طريقة تكوين رقم جديد من رقمين أو أكثر بالحساب.
بشكل عام ، هناك العديد من العمليات الحسابية ، ولكن هناك أربع عمليات أساسية فقط: الجمع والطرح والضرب والقسمة. يطلق عليهم أساسيات ، لأن جميع الإجراءات الأخرى يتم إحضارها إليهم.

تستخدم علامة الجمع "+" للتعبير عن الجمع: "4 + 4" الإجابة: "8"

ناقص "–" للطرح: "7 - 6" الإجابة: "1"

تمثل علامة النجمة `*` الضرب: `3 * 4` الإجابة:` 12`

الشرطة المائلة للأمام `/` التقسيم: `15/5` الرد:` 3`

إذا تم تنفيذ أكثر من إجراء واحد في سطر ، فإننا نستخدم - (الأقواس) لفصلهم عن بعضهم البعض وأيضًا لعمل الكود أكثر قابلية للقراءة. لنكتب الجمل التالية في وحدة التحكم. يجب أن تتكون إجابة كل منهم من رقم واحد فقط9️⃣:

```
 3 * (2 + 1)
(3 + 9) / (10 - 6)
(2 + 3 * 4) / (6 + 1)
 2 * (5 - 8 / 2) * (3 + 1)
```

أدخل القيم التالية في`LIVE EDITOR` :

```jsx {2} live
function learnJavaScript() {
  let result = 2 + 3 // here

  return result
}
```

## مهمة مشتركة

![Conbination](https://media.giphy.com/media/l2Sq8jlaqqnqBoGhG/giphy.gif)

عامل التشغيل هو تعيين رمزي لبعض الإجراءات التي يتم تنفيذها باستخدام معاملات في التعبير (على سبيل المثال: `+` ، `-` ،` * `،` / `).

المعامل هو بعض القيمة التي تتم معالجتها في البرنامج. يمكن أن تكون المعاملات من أي نوع بيانات. المعامل الموجود على يسار المشغل هو المعامل الأيسر ، والمعامل الموجود على يمين المشغل هو المعامل الأيمن.

العامل الرئيسي للتخصيص المدمج هو `=` ، ويخصص قيمة المعامل الأيمن إلى المعامل الأيسر. أي - `x = y` يعين القيمة للمتغير  "y" ، إلى المتغير  `x`.

لقد رأيت عدة مرات كيف تقوم بتعيين قيم للمتغيرات باستخدام العوامل الحسابية. على سبيل المثال ، مثل هذا:
```javascript
let sum = 2 + 3 // sum value 7
```

وربما لم يكن لديك الوقت لتنسى أنه في أي وقت يمكنك تغيير قيمة متغير معروف بالفعل :

```jsx live
function learnJavaScript() {
  let sum = 2 + 3
  sum = sum + 3 // now the sum value is 8
  return sum
}
```

التخصيص مع الإضافة `+ =` لزيادة قيمة المتغير بسرعة! وهنا بعض الأمثلة:
```javascript
let value = 5
value += 2 // value is now 7 (same as value = // value + 2)
value += 3 // value is now 10 (same as value = // value + 3)
value = value + value // 20 (or you can just value + = // value)
value += value // 40 (same as value = value + // value)
```

لقد خمنت بالفعل أن مثل هذه الأشياء تعمل مع العمليات الحسابية الأخرى ، أليس كذلك ؟!
```javascript
value -= 25 // value is now 15 (same as value = value - // 25)
value *= 2 // value is now 30 (same as value = // value * 2)
value /= 3 // value is now 10 (same as value = // value / 3)
value // Answer: 10
```

 `LIVE EDITOR`بعد ذلك ، تحقق من جميع الأمثلة المدرجة في:

```jsx live
function learnJavaScript() {
  let value = 0 + 0
  return value
}
```

يمكنك قراءة المزيد حول الواجب المشترك [here](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Assignment_Operators)

## الزيادة والنقصان
![increment](https://media.giphy.com/media/dX9qnaX4OH3avyMcU3/giphy.gif)

عامل التشغيل "++` (زيادة) يزيد من قيمة معامله بمقدار واحد. إذا كانت قيمة المعامل ليست رقمًا ، يقوم عامل التشغيل تلقائيًا بتحويلها إلى رقم ، ويزيدها بمقدار واحد ، ويعيد النتيجة التي تم تعيينها مرة أخرى إلى المعامل:

```jsx live
function learnJavaScript() {
  let increment = 0
  increment++
  return increment
}
```

عامل التشغيل "--` (الإنقاص) يعمل بشكل مشابه لعامل الزيادة ، لكنه لا يزيد من قيمة معامله ، ولكنه على العكس من ذلك ، يقلله بواحد:

```jsx live
function learnJavaScript() {
  let decrement = 6
  decrement--
  return decrement
}
```

## مشغل modulo

![function](https://media.giphy.com/media/seVVu09CPz2upPeU1s/giphy.gif)

تشير النسبة المئوية ``٪ '' إلى باقي القسمة. يُرجع العامل العدد الصحيح المتبقي من قسمة المعامل الأيسر على اليمين. تحصل قيمة العائد دائمًا على علامة المقسوم ، وليس المقسوم عليه. تستخدم الدالة المضمنة modulo ، وهي العدد الصحيح المتبقي من قسمة `let1` على` let2`.

نتيجة "12٪ 5`` 2`

ينتج عن "NaN٪ 2" "NaN"

نتيجة "1٪ 2 "` 1`

نتيجة "2٪ 3 "` 2`

"4٪ 2" نتيجة "0"

"5.5٪ 2" النتيجة` 1.5`

تحقق من جميع الأمثلة المدرجة في`LIVE EDITOR` وستفهم كل شيء على الفور:

```jsx live
function learnJavaScript() {
  let modulo = 12 % 5
  return modulo
}
```

## التقريب

![Balls](https://media.giphy.com/media/6glYLqOQ3dlok/giphy.gif)

تقوم طريقة `Math.round ()` بإرجاع رقم مقرب إلى أقرب عدد صحيح. إذا كان الجزء الكسري من الرقم أكبر من أو يساوي `0.5` ، فسيتم تقريب الوسيطة إلى أقرب عدد صحيح أكبر. إذا كان الجزء الكسري للرقم أقل من `0.5` ، فسيتم تقريب الوسيطة إلى أقرب عدد صحيح أقل.

"نتيجة = Math.round (20.49)` تُرجع 20

"result = Math.round (20.5)` تُرجع القيمة 21

تحقق من ذلك بنفسك:

```jsx live
function learnJavaScript() {
  let result = Math.round(20.49)
  return result
}
```

## مشاكل؟

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Write to [Discord](https://discord.gg/6GDAfXn) chat.

## أسئلة:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

ما تسمى العمليات الحسابية الأساسية؟

1. الجمع والطرح
2. الضرب والقسمة
3. الجمع والطرح والضرب والقسمة

ما هي القراءة الصحيحة لـ `+ =`؟

1. الزيادة
2. التنازل مع الجمع
3. زائد ومتساو

كيف تتم كتابة الزيادة بالعلامة (العلامات)؟

1. `++`
2. ` --`
3. `+`

ما هي علامة باقي القسمة؟

1. `%`
2. `/`
3. `\`

ما القيمة التي ستعيدها `Math.round` عند تطبيق` Math.round (20.62) `؟

1. `22`
2. `20`
3. `21`

لفهم مقدار ما تعلمته في هذا الدرس ، قم بإجراء الاختبار في[mobile application](http://onelink.to/njhc95) من مدرستنا في هذا الموضوع.
[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## الروابط

1. [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Numbers_and_dates)
2. [Code for Teens: The Perfect Beginner's Guide to Programming, Volume 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)
3. [JavaScript.ru](https://learn.javascript.ru/number)
4. [Integer arithmetic](https://maths-public.ru/arithmetic/actions)

## المساهمون ✨

الشكر يعود إلى هؤلاء الأشخاص الرائعين([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">  </a><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>
  
</table>

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)
