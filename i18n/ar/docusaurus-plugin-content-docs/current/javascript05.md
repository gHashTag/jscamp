---
id: javascript05
title: أخطاء
sidebar_label: أخطاء
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/05.jpg)

سترتكب أخطاء بالتأكيد ، مثلنا مثل بقيتنا في الكود. أخطاء البرامج تسمى البق. خطأ - يعني خطأ في برنامج💾 أو في النظام ، مما ينتج عنه البرنامج سلوك غير متوقع ونتيجة لذلك. معظم أخطاء البرامج arise from errors صنعه مطورو البرامج في كود المصدر الخاص به أو في تصميمه.

![error](https://media.giphy.com/media/1VT3UNeWdijUSMpRL4/giphy.gif)

بمعنى "خطأ تقني بعيد المنال" ، تم استخدام كلمة "خطأ" قبل ظهور أجهزة الكمبيوتر بوقت طويل من قبل موظفي شركات التلغراف والهاتف فيما يتعلق بمشاكل المعدات الكهربائية ومعدات الراديو. في عام 1878 ، كتب توماس إديسون:

> "كان هذا هو الحال مع جميع اختراعاتي. 1️⃣ الخطوة الأولى هي الحدس ، الذي يأتي مثل الفلاش ، ثم تنشأ الصعوبات - الجهاز يرفض العمل ، وهنا تظهر الأخطاء - كما تسمى هذه الأخطاء والصعوبات الصغيرة - ويستغرق الأمر شهورًا من الملاحظة الدقيقة والبحث والجهد قبل ذلك. يتعلق الأمر بالنجاح التجاري أو الفشل. "

التصحيح هو عملية البحث عن الأخطاء وإصلاحها في نص.

[Wikipedia](https://ru.wikipedia.org/wiki/Программная_ошибка)

<!-- ## Video

<YouTube videoId="xJtVop2fAxg" /> -->

## أكثر الأخطاء شيوعًا

![Teacher](https://media.giphy.com/media/27c3zdaY6eeIAwp7Qi/giphy.gif)

أتمنى أن تكون قد واجهت بالفعل أخطائك الأولى في عملية كتابة التعليمات البرمجية. لماذا الامل؟ لأن الأخطاء هم مدرسونا الذين يظهرون لنا الأخطاء التي ارتكبناها في التعليمات البرمجية الخاصة بنا وجهاز كمبيوتر    ️, أو بالأحرى مترجم الشفرات, ببساطة لا يستطيع فهمنا. اخطاء عند كتابة الكود يحدث كل يوم تقريبًا. الحيلة هي أن تكون قادرًا على قراءة رسالة الخطأ أن الجهاز سوف يعطيك من أجل العثور بسرعة على عيب في الكود المكتوب وإصلاحه. كلما تعلمت JavaScript ، زادت تقديرك لرسائل الخطأ - غالبًا ما يعرضون بدقة شديدة المكان الذي أخطأت فيه.
زوجان من أكثر أنواع الأخطاء شيوعًا في الكود :

## خطأ في بناء الجملة

![Error](https://media.giphy.com/media/TqiwHbFBaZ4ti/giphy.gif)

`Syntax Error` - انتهاك قواعد اللغة  على سبيل المثال ، أدخل تسعة زائد فاصلة منقوطة`9 +;` :

```jsx live
function learnJavaScript() {
  var error = 9

  return error
}
```

Reply: `SyntaxError: Unexpected token;`

خطأ في بناء الجملة يعني ببساطة أن هناك خطأ في نص الجملة. بمعنى آخر ، ما كتبته ليس صحيحًا من حيث JavaScript. لا يستطيع المترجم قراءة الجملة ولا يعرف ماذا يفعل بها. `Unexpected token;` يعني أن المترجم قد قرأ شيئًا لم يتوقع قراءته على الإطلاق: في حالتنا ، فاصلة منقوطة `؛`.

دعونا نخطئ مرة أخرى!
لنقم بإدخال خمسة زائد ثلاثة في وحدة التحكم وقوسًا في نهاية "5 + 3)".

```jsx live
function learnJavaScript() {
  var error = 5

  return error
}
```

لديك قوس إغلاق ``) `` ، لكن لا يوجد قوس فتح '' ("! لكن الأقواس دائمًا ما تكون في أزواج - لا يمكن أن يكون هناك إغلاق ، ولكن لا يوجد قوس فتح ، والعكس صحيح.
## المرجع خطأ

![Error](https://media.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif)

`ReferenceError` هو اسم غير صالح! يمثل الكائن "ReferenceError" خطأً يحدث عند الوصول إلى متغير غير موجود. على سبيل المثال ، أدخل خمسة بالإضافة إلى تبديل "5 + بالتناوب":
```jsx live
function learnJavaScript() {
  var error = 5

  return error
}
```

لدينا الآن خطأ في المرجع "ReferenceError". ربما لاحظت بالفعل ما هو الأمر هنا؟ دعنا نقرأ رسالة الخطأ بعناية (بعد كل شيء ، هذا هو سبب عرضه!). تقول: متغير  لم يتم تعريفه` - لم يتم تعيين المتغير ، وهنا تكمن مشكلتنا! أولاً ، علينا أن نعلن عن المتغير - بطريقة ما ، قل بهذه الطريقة:
```jsx live
function learnJavaScript() {
  var test = 5
  var error = 5 + test

  return error
}
```

## خطأ مطبعي

يمثل كائن TypeError خطأ يتم طرحه عندما لا تكون القيمة من النوع المتوقع. نطبق طريقة `toUpperCase` ، والتي سنتعلم المزيد عنها لاحقًا ، على النوع غير المحدد ، وهذا غير مسموح به لأن هذه الطريقة تحول السلسلة إلى أحرف كبيرة. تحقق من هذا الخطأ في وحدة تحكم المتصفح ، فهو لا يعمل في "المحرر المباشر".
```javascript
var foo = undefined
foo.toUpperCase()
```

![TypeError](/img/javascript/25.jpg)

## المصدر المفتوح

يمكننا أيضًا ارتكاب أخطاء ، لذلك إذا وجدت خطأً في الموقع أو ترجمة غير صحيحة ، يمكنك بسهولة المساعدة في إصلاح الخطأ على الموقع. للقيام بذلك ، انقر فوق الزر "تحرير هذه الصفحة" في أسفل كل صفحة.
## مشاكل؟

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Write to [Discord](https://discord.gg/6GDAfXn) chat.

## أسئلة:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

ماذا يعني "خطأ في بناء الجملة"؟

1. ترتيب خاطئ للإشارات
2. مخالفة قواعد اللغة
3. أقواس غير مناسبة

ماذا يعني "خطأ مرجعي"؟
1. متغير غير معلن
2. خطأ نحوي
3. اسم خاطئ

لفهم مقدار ما تعلمته في هذا الدرس ، قم بإجراء الاختبار في[mobile application](http://onelink.to/njhc95) من مدرستنا في هذا الموضوع.
[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## الروابط

1. [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Data_structures)
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
