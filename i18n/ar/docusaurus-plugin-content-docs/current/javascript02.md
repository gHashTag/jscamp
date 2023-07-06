---
id: javascript02
title: تعليقات
sidebar_label: تعليقات
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/02.jpg)

## ما هي التعليقات؟

لدى JavaScript عدة طرق لتحديد التعليقات في التعليمات البرمجية

في بعض الأحيان ، عند الكتابة  الكود ، سوف تحتاج إلى تقديم تفسيرات مخصصة فقط للبشر وليس للكمبيوتر. ربما ستكون رسالة ما إلى نفسك من الماضي (إلى Future Me!) حول هذا الشيء أو ذاك في كود البرنامج. أو ربما يكون مجرد إشارة إلى أنك تحتاج فقط إلى تشغيل كذا وكذا جزء من الكود ، ويجب حذف الباقي. باختصار ، في أي حالة من هذا القبيل ، ستحتاج إلى اللجوء إلى مساعدة التعليقات.
تعليقات تستخدم لإضافة ➕ تلميحات ، ملاحظات, اقتراحات أو تحذيرات. يمكنهم تسهيل قراءة وفهم الكود. يمكن استخدامها أيضًا للوقاية  تنفيذ التعليمات البرمجية (هذه ممارسة شائعة عند تصحيح أخطاء التعليمات البرمجية).

لدى JavaScript عدة طرق لتحديد التعليقات  في الكود.

<!-- ## Video

<YouTube videoId="zCvKMw5QHRw" /> -->

## تعليق سطر واحد

![Slash](https://media.giphy.com/media/bKXMS0NjXoyaY/giphy.gif)

الأول 1️⃣ الطريق`// comment`  في هذه الحالة كل النص  في السطر بعد الشرطة المائلة المزدوجة سيكون تعليقًا . عندما يرى المترجم اثنين 2️⃣ مائلة على التوالي `//`, تدرك على الفور أن كل ما يصل إلى نهاية السطر يمكن تجاهله بأمان. في الوقت الحالي ، تجاهل بناء الجملة   من الكود ، سنتعرف عليه بالتفصيل بعد قليل.

```jsx live
function learnJavaScript() {
  // This is a comment on the line
  var hello = 'Hello world!!!'

  return hello
}
```

## تعليق متعدد الأسطر

![Coments](https://media.giphy.com/media/UevalSWg5twQeqpc8Q/giphy.gif)

الثاني2️⃣ الطريق `/ * * /`, وهو أكثر مرونة من الأول1️⃣. بمجرد أن يرى المترجم`/ *`, تعتقد: "نعم ، حتى أرى`* /`, لا أستطيع الالتفات إلى أي شيء هنا!"
على سبيل المثال ، يمكنك استخدامه في واحد 1️⃣ خط :

```jsx live
function learnJavaScript() {
  /* This is a one-line comment */
  var hello = 'Hello world!!!'

  return hello
}
```

بدلاً من ذلك ، يمكنك عمل تعليق متعدد الأسطر كما هو موضح هنا:

```jsx live
function learnJavaScript() {
  /* This comment spans multiple lines.
      Please note that you do not need to terminate the comment until you have finished */
  var hello = 'Hello world!!!'
  /* Write your comment here */
  return hello
}
```

## التعليق في منتصف الكود

![Among](https://media.giphy.com/media/fnjIiBNo38IHS/giphy.gif)

أيضًا ، إذا كنت ترغب في ذلك ، يمكنك استخدام هذا التعليق  في منتصف سطر من التعليمات البرمجية. على الرغم من أن هذا قد يضعف سهولة قراءة الكود:

```jsx live
function learnJavaScript() {
  var x = ''
  var hello = 'Hello ' + x /* insert the value x */ + '!'

  return hello
}
```

مع التعليق على الكود ، هذا كل ما في الأمر ودعوة للاستراحة.

![Comments](https://media.giphy.com/media/SvuRLwWT0EoeErwPvB/giphy.gif)

## مشاكل؟

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

اكتب ل[Discord](https://discord.gg/6GDAfXn) محادثة.

## أسئلة:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

لمن التعليقات؟

1. شخص
2. وحدة التحكم
3. مترجم جافا سكريبت

ما هي التعليقات التي لا تستخدم؟

1. إضافة النصائح والملاحظات والاقتراحات
2. كجزء من كود البرنامج
3. لمنع تنفيذ التعليمات البرمجية

ما هي طريقة تحديد تعليق في كود JavaScript غير موجود؟

1. `('')`
2. `//`
3. `/ * * /`

كيف يمكنني تعطيل أي عدد من أسطر التعليمات البرمجية؟

1. اكتب تعليقًا في منتصف الكود
2. لف الكود في تعليق
3. استخدم الأمر`console.log`

لفهم مقدار ما تعلمته في هذا الدرس ، قم بإجراء اختبار في مدرستنا[mobile application](http://onelink.to/njhc95) حول هذا الموضوع.

[![EnglishMoji!](/img/logo/englishmoji.png)](https://link-to.app/xvh7Ush9kl)

## الروابط

1. [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Lexical_grammar)
2. [Код для подростков: прекрасное руководство по программированию для начинающих, том 1: Javascript - Jeremy Moritz ](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)
3. [JavaScript.ru](https://learn.javascript.ru/types)

## المساهمون✨

الشكر يعود إلى هؤلاء الأشخاص الرائعين([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">  </a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>
  
</table>

[![EnglishMoji!](/img/logo/englishmoji.png)](https://link-to.app/xvh7Ush9kl)
