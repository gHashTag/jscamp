---
id: javascript14
title: التعبيرات العادية
sidebar_label: التعبيرات العادية
---

![@serverSerrverlesskiy](/img/javascript/headers/13.jpg)

التعبيرات العادية هي لغة رسمية للبحث عن السلاسل ومعالجتها في النص بناءً على استخدام الأحرف الأولية.

تسمح لك التعبيرات العادية بما يلي:

- البحث عن نص في سلسلة
- استبدل سلاسل فرعية في سلسلة
- استخراج المعلومات من سلسلة

![search](https://media.giphy.com/media/l46Cy1rHbQ92uuLXa/giphy.gif)

تعد JavaScript ، جنبًا إلى جنب مع Perl ، إحدى لغات البرمجة التي يتم فيها بناء دعم التعبير العادي مباشرة في اللغة.


## صعوبة في الاستخدام

![the complexity of using](https://media.giphy.com/media/5XYsIwzY00ONq/giphy.gif)

من عيوب التعبيرات العادية أنها غالبًا ما تبدو غريبة وحتى مخيفة. هذا ينطبق بشكل خاص على القوالب الأكثر تعقيدًا.

```jsx
let regExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
```

## تعريف التعبيرات النمطية

![search](https://media.giphy.com/media/RMwYOO5e8pr1lhL8K7/giphy.gif)

تعريف التعبير العادي هو إنشاء قالب يتم على أساسه العمل مع السلاسل. في JavaScript ، التعبيرات النمطية هي كائن يمكن تعريفه بطريقتين.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="literal"
values={[
{label: 'Literal', value: 'literal'},
{label: 'Construction', value: 'construction'},
]
}>
<TabItem value="literal">

تعريف التعبيرات النمطية باستخدام القيم الحرفية. للتعبيرات العادية ، مائلة`/ ... /` هي حرفية ، فهي تلعب نفس دور الأقواس `` ... '' عند إنشاء السلاسل.

```jsx
let regExp = /pattern/
```

إذا قررت إنشاء تعبيرات عادية باستخدام القيم الحرفية ، فيجب أن يوضع في الاعتبار أن طريقة الإنشاء هذه _ لا تسمح بالتغييرات الديناميكية_ في القيم المحددة. هذا يرجع إلى حقيقة أن القيم الحرفية للتعبير العادي تسبب _precompilation_ عند تحليل النص.

  </TabItem>
  
  <TabItem value="construction">

تعريف التعبيرات النمطية باستخدام المنشئ.

```jsx
let regExp = new RegExp('pattern')
```

يحدث تجميع التعبير العادي الذي تم إنشاؤه باستخدام المُنشئ في وقت تنفيذ النص. هذه الطريقة في الإنشاء تستحق الاستخدام إذا كان يتم إنشاء تعبيرك العادي من سلسلة يتم إنشاؤها ديناميكيًا.

  </TabItem>
</Tabs>

## استخدام

![pressing the button](https://media.giphy.com/media/12hhLP67q6PqCs/giphy.gif)

لنلقِ نظرة على استخدام التعبيرات النمطية باستخدام مثال:

```jsx
let regExp = /banana/
```

مع هذا الرمز أنشأنا تعبير عادي بسيط يبحث عن السلسلة`banana`. لاختبار تعبير عادي ، يمكنك استخدام `.test(string)` الطريقة ، نتيجة الطريقة أ `boolean` القيمة.

```jsx live
function learnJavaScript() {
  let regExp = /banana/,
    str = 'fanana ranana banana'
  return regExp.test(str) ? 'Yes' : 'No'
}
```

في المثال ، يبحث التعبير النمطي عن السلسلة الفرعية`banana` في السلسلة` str`.

## المراسي

![anchor](https://media.giphy.com/media/3ohze1LSWrEGCML02Y/giphy.gif)

تربط المراسي نمطًا ببداية السطر أو نهايته. للربط ببداية السطر ، استخدم`^`, وحتى النهاية ، استخدم `$`.

```jsx live
function learnJavaScript() {
  let regExp = /^banana/,
    str = 'lime banana orange'
  return regExp.test(str) ? 'Yes' : 'No'
}
```

باستخدام هذا النمط`/ banana /` سوف تبحث عن `banana` في الخط كله. إذا كنت بحاجة إلى التحقق من وجود تطابق كامل لسلسلة مع قالب ، فأنت بحاجة إلى استخدام المراسي`/ ^ banana $ /`. The `.test ()` طريقة العودة`true`  فقط إذا كان الخط كله` banana`.

## أعلام

![Flag](https://media.giphy.com/media/ihRmRCxJuIi3pCORTL/giphy.gif)

يتم استخدام العلامات لتحسين عمليات البحث عن التعبير العادي.

- `g` - عند البحث ، يبحث عن جميع التطابقات ؛
- `i` - البحث لا يعتمد على الحالة`[Z-z]`;
- `m` - وضع متعدد الخطوط
- `s` - يتحول على **dotall** الوضع ، حيث يمكن أن تتطابق النقطة` .` مع حرف تغذية السطر ؛
- `y` - عمليات البحث بدءًا من الحرف الموجود في موضع ** lastindex **property** من التعبير النمطي الحالي ؛
- `u` - تمكن **Unicode** الدعم.

استخدام العلامات بطرق مختلفة لإنشاء نمط تعبير عادي

<Tabs
defaultValue="literal"
values={[
{label: 'Literal', value: 'literal'},
{label: 'Construction', value: 'construction'},
]
}>
<TabItem value="literal">

```jsx
let regExp = /pattern/anchor // prettier-ignore
```

يرجى ملاحظة أن الأعلام **integral part** من التعبير النمطي. لا يمكن إضافة العلامات أو إزالتها لاحقًا. كما يمكن دمج الأعلام.

```jsx live
function learnJavaScript() {
  let regExp = /banana/i,
    str = 'faNana RanaNA BaNanA'
  return regExp.test(str) ? 'Yes' : 'No'
}
```

حاول إزالة ملف `i` علم من المثال.
</TabItem>
<TabItem value="construction">

```jsx
let regExp = new RegExp('pattern', 'anchor')
```

يرجى ملاحظة أن الأعلام **integral part** من التعبير النمطي. لا يمكن إضافة العلامات أو إزالتها لاحقًا. كما يمكن دمج الأعلام.

```jsx live
function learnJavaScript() {
  let regExp = new RegExp('banana', 'i'),
    str = 'faNana RanaNA BaNanA'
  return regExp.test(str) ? 'Yes' : 'No'
}
```

Try removing the `i` flag from the example. The search is now case sensitive.
</TabItem>
</Tabs>

## مجموع

الموضوع واسع جدًا ونادرًا ما نستخدمه في التطوير ، لذلك إذا كنت مهتمًا ، يمكنك التعرف عليه بمزيد من التفاصيل [here,](https://learn.javascript.ru/regular-expressions) [here](https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions)[and here.](https://tuhub.ru/frontend/js-regexp)

## مشاكل؟

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

اكتب ل [Discord](https://discord.gg/6GDAfXn) محادثة.

## أسئلة:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

ما هي التعبيرات النمطية عنه؟

1. إنشاء القوالب
2. التلاعب بالسلسلة
3. تحرير السلاسل

ما هو الحرف المستخدم لإنشاء تعبير عادي حرفيًا؟

1. شرطة مائلة `` / `
2. شرطة مائلة للخلف '\ `
3. أقواس مربعة `[]`

ما هي طريقة إنشاء تعبير عادي لا يسمح بإجراء تغييرات ديناميكية إضافية على القيم المحددة؟

1. بالمعنى الحرفي
2. في المنشئ
3. مع أي طريقة ، التغيير الديناميكي مسموح به

لفهم مقدار ما تعلمته في هذا الدرس ، قم بإجراء الاختبار في [mobile application](http://onelink.to/njhc95) من مدرستنا في هذا الموضوع.

[![EnglishMoji!](/img/logo/englishmoji.png)](https://link-to.app/xvh7Ush9kl)

## الروابط

1. [Learn JavaScript](https://learn.javascript.ru/regular-expressions)
2. [MDN Web Docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular_Expressions)
3. [JS RegExp](https://tuhub.ru/frontend/js-regexp)

## المساهمون✨

الشكر يعود إلى هؤلاء الأشخاص الرائعين ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr> 
    <td align="center"><a href="https://github.com/IIo3iTiv"><img src="https://avatars1.githubusercontent.com/u/72025062?v=4?s=200" width="200px;" alt=""/><br /><sub><b>IIo3iTiv</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=IIo3iTiv" title="Documentation">  </a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

[![EnglishMoji!](/img/logo/englishmoji.png)](https://link-to.app/xvh7Ush9kl)
