---
id: javascript04
title: أنواع البيانات
sidebar_label: أنواع البيانات
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/04.jpg)

## الكتابة الديناميكية

JavaScript هي لغة مكتوبة بشكل فضفاض أو ديناميكي. هذا يعني أنك لست بحاجة إلى تحديد نوع المتغير🔔 مقدما.

![Dinamics](https://media.giphy.com/media/26uf759LlDftqZNVm/giphy.gif)

سيتم تحديد النوع تلقائيًا أثناء تنفيذ البرنامج. هذا يعني أيضًا أنه يمكنك استخدام متغير واحد 🔔 للتخزين 📦 أنواع مختلفة من البيانات👇:

```jsx live
function learnJavaScript() {
  let foo = 42 // now foo is of type number
  foo = 'bar' //and now foo is of type string
  return typeof foo
}
```

<!-- ## Video

<YouTube videoId="1zXZCVbNbkQ" /> -->

## نوع من

لفهم نوع البيانات المتضمن في المتغير ، يتم استخدام عامل التشغيل "typeof". يُرجع عامل التشغيل `typeof` نوع الوسيطة.
له صيغتان ، مع أقواس وبدون:

- بناء جملة المشغل: `typeof x`

- بناء جملة الوظيفة: `typeof (x)`

إنها تعمل بنفس الطريقة ، لكن الصيغة الأولى أقصر.

نتيجة "typeof" سلسلة تحتوي على النوع.

```jsx live
function learnJavaScript() {
  let num = 9
  return typeof num
}
```

##أنواع البيانات

![Data types](https://media.giphy.com/media/NPXkCN2FutVO1Nt4P9/giphy.gif)

يحدد معيار JavaScript 9 أنواع بيانات. تعرف على كل منهم من خلال الإخراج إلى وحدة التحكم ثم سأخبرك عن كل منهم بمزيد من التفصيل.

```javascript
let one = { firstName: 'John', lastName: 'Smith' } // object

let two = () => {} // function

let three 'bar' // string

let four = 42 // number

let five = 19241924124n // bigint

let six = true // boolean

let seven = null // null

let eight // undefined

let nine = Symbol() // symbol
```

## شاء

![cupboard](https://media.giphy.com/media/l2Sq0NFJlJC5Dqb7y/giphy.gif)

في مصطلحات الكمبيوتر ، الكائن هو قيمة في الذاكرة يمكن الرجوع إليها بواسطة معرف. في JavaScript ، يمكن اعتبار الكائن على أنه مجموعة من الخصائص. إنها مثل خزانة لتخزين أنواع أخرى من البيانات.
## المهام

![Function](https://media.giphy.com/media/FuSJ5C7SSHlZCxjC6q/giphy.gif)

الدالات ⚙️ `الوظيفة` هي كائنات عادية لها القدرة الإضافية على استدعاؤها للتنفيذ.
## القيم البدائية

![Primitive](https://media.giphy.com/media/rBdWc61BPFVYc/giphy.gif)

جميع أنواع البيانات في JavaScript ، باستثناء الكائنات ، غير قابلة للتغيير (لا يمكن تعديل القيم ، فقط الكتابة فوقها بقيمة كاملة جديدة). على سبيل المثال ، على عكس لغة C ، حيث يمكن تصحيح سلسلة حرفًا بحرف ، في JavaScript يتم إعادة إنشاء السلاسل بالكامل فقط. تسمى قيم هذه الأنواع "القيم الأولية".
## سلاسل النص

![text](https://media.giphy.com/media/26n6AaCcCajAyZx04/giphy.gif)

في JavaScript ، يتم استخدام النوع "سلسلة" لتمثيل البيانات النصية.

## أعداد

![Numbers](https://media.giphy.com/media/xT5LMMneIRG1UJquOI/giphy.gif)

يمثل نوع البيانات الرقمية "رقم" كلاً من قيم الأعداد الصحيحة وأرقام الفاصلة العائمة.

##بيجينت

![giant](https://media.giphy.com/media/LZGipmRpX6uwE/giphy.gif)

في JavaScript ، لا يمكن أن يحتوي النوع "number" على أرقام أكبر من (253-1) (أي 9007199254740991) ، أو أقل من - (253-1) للأرقام السالبة. هذا القيد الفني يرجع إلى تمثيلهم الداخليn.

بالنسبة لمعظم الحالات ، هذا كافٍ. لكن في بعض الأحيان نحتاج إلى أرقام ضخمة حقًا ، كما هو الحال في التشفير أو عند استخدام "طابع زمني" بالميكروثانية.
تمت إضافة النوع `bigInt` إلى JavaScript للسماح بأعداد صحيحة عشوائية الطول.

## نوع البيانات المنطقية

النوع المنطقي `boolean` يمثل كيانًا منطقيًا وله قيمتان 2️⃣: `true` ✅

![true](https://media.giphy.com/media/ap6wcjRyi8HoA/giphy.gif)

and `false` ❎

![False](https://media.giphy.com/media/HNOVuT5AvCK1fgvp1m/giphy.gif)

يستخدم هذا النوع عادةً لتخزين قيم 📦 نعم / لا: صحيح يعني "نعم ، صحيح" وخطأ ❎ يعني "لا ، خطأ".

##لا شيء

![Null](https://media.giphy.com/media/26hkhPJ5hmdD87HYA/giphy.gif)

نوع البيانات هذا له قيمة واحدة فقط: `null`. تم تحديد هذه القيمة بشكل خاص على أنها بدائية ، لأنها بالفعل بدائية مرئية في السلوك. ولكن في نفس الوقت ، يتم توريث جميع الكائنات الأخرى من `null`, لذلك ، على الرغم من حقيقة أن`null` إرجاع قيمة أولية ، نوعه هو كائن.
على سبيل المثال ، يمكنك تعيينه إلى القيمة الافتراضية.
## غير معرف

![Unndefined](https://media.giphy.com/media/PkKzNQjwPy7GvxZbfe/giphy.gif)

المتغير 🔔 الذي لم يتم تعيين قيمة له سيكون له القيمة `undefined`.

### الاختلافات بين null و undefined

![Spiderman](https://media.giphy.com/media/l36kU80xPf0ojG0Erg/giphy.gif)

`null` هي القيمة المحددة لغياب الكائن ، بينما` undefined` يدل على الغموض. على سبيل المثال ، يمكنك التحقق من ذلك في وحدة تحكم المتصفح:

```javascript
let TestVar
console.log(TestVar) // undefined
console.log(typeof TestVar) // undefined
```

`null` هي قيمة الإسناد. يمكن إسنادها إلى متغير 🔔 كتمثيل بدون قيمة:
```javascript
let TestVar = null
console.log(TestVar) // null
console.log(typeof TestVar) // object
```

يتضح من الأمثلة السابقة أن`undefined` و `null` نوعان مختلفان: `undefined` هو النوع نفسه (غير محدد) ، و` null` هو كائن.

```javascript
null === undefined // false
null == undefined // true
null === null // true
```

## نوع البيانات رمز

![Symbol](https://media.giphy.com/media/QvSGhHq8CrVzq/giphy.gif)

Tنوع "الرمز" هو قيمة بدائية فريدة وغير قابلة للتغيير ويمكن استخدامها كمفتاح لخاصية كائن. نادرًا ما يتم استخدام هذا النوع في العمل الحقيقي حتى أننا لن نفكر فيه في هذه الدورة.
## مشاكل؟

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

اكتب ل[Discord](https://discord.gg/6GDAfXn) محادثة.

## أسئلة:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

ما هو عامل التشغيل "typeof" المستخدم؟

1. لتحديد نوع البيانات
2. لإخراج نوع البيانات إلى وحدة التحكم
3. لإدخال متغير جديد

كم عدد أنواع البيانات التي يحددها معيار JavaScript؟

1.7
2.9
3.5

ما نوع البيانات التي تحتوي على مجموعة من الخصائص؟
1. `function`
2. `string`
3. `object`

هل يمكن تعديل سلسلة حرفًا بحرف في JavaScript؟
1. نعم
2. ربما في حالات خاصة
3. لا ، يتم إعادة إنشاء الخطوط بالكامل فقط
ما نوع البيانات الذي يجعل من الممكن العمل مع أعداد صحيحة بطول عشوائي؟
1. `number`
2. `string`
3. `bigint`

أي قيمة ليست من النوع`boolean`?

1. `false`
2. `null`
3. `true`

ما نوع البيانات الذي يحتوي على قيمة يمكن استخدامها كمفتاح لخاصية كائن؟

1.` undefined` 2.` symbol` 3.` null`

لفهم مقدار ما تعلمته في هذا الدرس ، قم بإجراء اختبار في مدرستنا[mobile application](http://onelink.to/njhc95) حول هذا الموضوع.

![Sumerian school](/img/app.jpg)

##الروابط

1. [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Data_structures)
2. [Code for Teens: The Perfect Beginner's Guide to Programming, Volume 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)
3. [JavaScript.ru](https://learn.javascript.ru/types)

## المساهمون ✨

الشكر يعود إلى هؤلاء الأشخاص الرائعين([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>
  
</table>

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
