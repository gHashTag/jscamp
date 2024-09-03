---
id: javascript01
title: مرحبا بالعالم
sidebar_label: مرحبا بالعالم
---

import YouTube from 'react-youtube'

[![@serverSerrverlesskiy](/img/javascript/headers/01.jpg)](https://www.instagram.com/serverserverlessky/)

## Java Script

في السابق ، كان لإنشاء ملف بدء التشغيل الرقمي ، كان هناك حاجة إلى فريق من:

- مطور iOS  ,
- الروبوت المطور ,
- المطور الخلفي  ,
- مطور للويب     
  و
- قائد الفريق       من الذى
  في كل مكان على القمة
  وفي شيء واحد تمامًا -
  أنه    اشخاص!

![Hello World](https://media.giphy.com/media/jTICSwJwDz3wa1PQmk/giphy.gif)

اليوم ، بفضل Java Script ، من الممكن استبدال     المطورين مع مطور Java Script واحد باستخدام مجموعة التكنولوجيا التي نقوم بتدريسها في مدرستنا

Java Script هي لغة برمجة تجعل من الممكن تنفيذ السلوكيات المعقدة على صفحات الويب والمزيد. في Java Script ، يمكنك كتابة المواقع  , الخوادم والجوال  وسطح المكتب    بالإضافة إلى تطبيقات الواقع المعزز والافتراضي.

JavaScript هي أول لغات البرمجة الأكثر شيوعًا بين المطورين الأوروبيين. تم الحصول على هذه البيانات من قبل مؤلفي [research](https://www.oreilly.com/programming/free/files/2016-european-software-development-salary-survey.pdf) من شركة O'Reilly نتيجة لمسح شمل أكثر من 1300 مبرمج من 27 دولة.

## بناء الجملة

![Hello World](https://media.giphy.com/media/1n67EigjECnOUc6rhS/giphy.gif)

JavaScript ، مثل العديد من لغات البرمجة الأخرى , له تركيب صارم  . بناء الجملة    هو قسم من قواعد النحو الذي يدرس الجمل وكيفية دمج الكلمات في جملة. أجهزة الكمبيوتر     ️ ليسوا أذكياء مثل البشر : لا يمكنهم "مجرد فهم"  ماذا تقصد. الآلة   v  معها بشكل صارم في أشكال التعبير التي تتوقعها منك. هذا الشكل المتوقع من التعبير يسمى    بناء الجملة.

## بيئة العمل

![first](https://media.giphy.com/media/9CffOPMLx0Hf2/giphy.gif)

1️⃣ أولاً ، أنت بحاجة إلى كمبيوتر مكتبي أو كمبيوتر محمول.

2️⃣ ثانيًا ، يجب أن يكون الكمبيوتر مثبتًا عليه نظام تشغيل: Windows MacOS أو Linux.

3️⃣ ثالثًا ، يجب تثبيت متصفح على الكمبيوتر ، في دروسنا سنستخدم Google Chrome ، ولكن يمكن استخدام الآخرين. Chrome ، الذي ليس على دراية ، هو متصفح ، أي برنامج لعرض صفحات الويب.

إذا لم يكن لديك Google Chrome مثبتًا بعد ، فيمكنك تنزيله [here](https://www.google.com/intl/com/chrome/?brand=CHBD&gclid=CjwKCAjwtNf6BRAwEiwAkt6UQlNVpi-CLILLC8x3U0PcR5d3xmP3MQVD2T2) أي متصفح آخر (Firefox أو Safari أو Edge أو Internet Explorer) بمجرد الكتابة "قم بتنزيل Chrome" في شريط البحث واتبع الإرشادات الإضافية.

بعد تنزيل Google Chrome وتثبيته ، افتحه وأدخل    في شريط العنوان:
```
about:blank
```

اضغط دخول.
وسيفتح المتصفح صفحة فارغة جديدة.

![about blank](/img/javascript/00.png)

## وحدة تحكم المتصفح

![Code](https://media.giphy.com/media/AOSwwqVjNZlDO/giphy.gif)

حان الوقت للتعرف على إحدى أدوات المطور الرئيسية - وحدة تحكم المتصفح.

في الأساس ، يمكن أخذ دورتنا مباشرة على موقعنا الإلكتروني ، لكن في بعض الأحيان سنحتاج إلى استخدام وحدة تحكم المتصفح ، لذلك سنتعرف عليها الآن.

### افتح وحدة التحكم
بما أنك الآن مبرمج طموح     ️, يمكنك استخدامه أيضا! لإحضار وحدة التحكم ، ما عليك سوى الضغط على 🔘 `CTRL, SHIFT (أو COMMAND و OPTION إذا كان لديك جهاز Mac) و J` مفاتيح معا.

سيؤدي الضغط على مجموعة المفاتيح إلى فتح ملف   شريط القوائم وسترى قوس زاوية في الزاوية اليسرى العليا من الصفحة. بالمناسبة ، إذا قمت بتحريك المؤشر إلى حافة المنطقة حيث يتحول إلى سهم مزدوج ، ثم بالضغط مع الاستمرار على الزر الأيسر ، يمكنك تمديد نافذة وحدة التحكم. تأكد من القيام بذلك حتى يكون لديك مساحة أكبر لحقن الكود الخاص بك.

![console](/img/javascript/01.png)

إذا كان الجمع `CTRL + SHIFT + J` أو `COMMAND + OPTION + J` لسبب ما لا يعمل ، يمكنك الدخول إلى وحدة التحكم عن طريق النقر بزر الماوس الأيمن على مساحة فارغة على الصفحة , حدد فحص (عرض الكود) ثم انقر فوق وحدة التحكم على شريط القوائم.

![Inspect](/img/javascript/02.png)

## برنامج أهلاً بالعالم

"Hello، world! "- (Hello world!) برنامج يخرج عبارة" Hello، world! "على الشاشة أو أي جهاز آخر

عادة ما يكون هذا هو المثال الأول لبرنامج في كتاب برمجة ، وبالنسبة للعديد من الطلاب ، هذه هي التجربة الأولى في تعلم لغة جديدة .

الآن بعد أن تم فتح نافذة الكونسول أمامك وقمت بمدها بطريقة مريحة ، انقر بالماوس على يمين قوس الزاوية`>`.

![not equal](https://media.giphy.com/media/jPfQcPdmI9bTXpa7hi/giphy.gif)

مؤشر وامض يظهر على السطر ، مما يشير إلى أنه يمكنك البدء في الكتابة. سوف تكتب الآن الأسطر الأولى من التعليمات البرمجية. أدخل النص التالي (بما في ذلك علامات الاقتباس):

```
"مرحبا بالعالم!"
```

![Hello world!](/img/javascript/03.png)
![Hello World](https://media.giphy.com/media/xiOgHgY2ceKhm46cAj/giphy.gif)

اضغط دخول. ستعيد وحدة التحكم النص الخاص بك في السطر التالي : "مرحبا بالعالم!" أو "مرحبا بالعالم!" باللغة الإنجليزية. من خلال وحدة تحكم المتصفح ، نتواصل مباشرة مع محرك JavaScript - هذا برنامج من هذا القبيل ، أو بعبارة أخرى مترجم فوري ينفذ تعليمات برمجية مكتوبة بلغة JavaScript.
![Hello world!](/img/javascript/04.png)

الآن يمكنك أن تفخر بأنك كتبت ونفذت أول كود JavaScript بيديك!

ثم اضغط على المفتاح\_ سهم للاعلى ⬆️ (سهم للاعلى) and you will see your text  "مرحبا بالعالم!" أو "أهلاً بالعالم!" باللغة الإنجليزية. بعد ذلك ، حرك المؤشر إلى بداية السطر واكتب النص التالي بدلاً من ذلك:

```javascript
var hello = 'Hello world!'
```

واضغط على ENTER. سترى الإجابة في وحدة التحكم: "غير محدد". كل شيء يسير حسب الخطة! اكتب الآن:
```javascript
hello
```

واضغط على ENTER. إذا فعلت كل شيء بشكل صحيح ، ستعيد وحدة التحكم رسالة في السطر "مرحبا بالعالم!". هنا أنشأنا متغيرًا وخصصنا له قيمة.
![Hello world!](/img/javascript/05.png)

وبالطبع ، هذا هو الحد الأدنى الذي يمكن القيام به في وحدة تحكم المتصفح. بالإضافة إلى!
لنجرب الإضافة: ➕

```javascript
2 + 2
// Console response: 4
```

جمع وطرح: ➕ ➖

```javascript
6 + 4 - 5
// Console response: 5
```

عمليه الضرب: ✖️

```javascript
5 * 5
// Console response: 25
```

قسم: ➗

```javascript
25 / 5
// Console response: 5
```

وأي عمليات حسابية أخرى ...

## محرر مباشر

![Live editor](https://media.giphy.com/media/l1KVcrdl7rJpFnY2s/giphy.gif)

يتم تنفيذ شفرة JavaScript بواسطة محرك JavaScript للمستعرض. من خلال وحدة التحكم ، نصل إليها مباشرة. علاوة على ذلك ، من أجل عدم كتابة الدورة التدريبية بالكامل في المتصفح والانتقال عبر النوافذ من موقعنا إلى وحدة تحكم المتصفح والعكس ، سنكتب الكود في `Live Coding` الوضع الصحيح على موقعنا. للقيام بذلك ، حاول إضافة كلمة مرحبًا ، كلمة العالم في النافذة التالية`LIVE EDITOR`. في`RESULT`, يجب ان تحصل على` Hello World` .

```jsx live
function learnJavaScript() {
  var hello = 'Hello'

  return hello
}
```

حاول الآن اللعب بالعمليات الحسابية:

```jsx live
function learnJavaScript() {
  var sum = 5 + 5

  return sum
}
```

 [![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Problems?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

اكتب ل[Discord](https://discord.gg/6GDAfXn) محادثة.

## أسئلة

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

ما عنوان URL (العنوان) الذي أحتاجه لإدخاله في شريط عناوين Chrome لفتح علامة تبويب متصفح فارغة تمامًا؟
1.blank
2.about.blank
3.about: blank

ما هو اختصار لوحة المفاتيح لفتح وحدة التحكم في Chrome؟
1. Ctrl + Shift + P
2. Ctrl + Shift + J
3. Ctrl + P

ما هو رمز عملية الجمع؟

1.`+ /`

2.`+ \`

3.`+`

ما هو رمز عملية الطرح؟

1.`/`

2.`- \`

3.` -`

ما هو رمز عملية الضرب؟

1.`×`

2.`* /`

3.`*`

ما هو رمز عملية القسمة؟

1.`/`

2.`\`

3.`% `

<!-- 8. Как называется редактор кода, который мы рекомендуем для прохождения нешего курса?
9. Как называется плагин для вывода занчений онлайн в редакторе кода?
10. Что такое Node.js? -->

نحن الآن جاهزون لدراسة Java Script معك ، ولكن لفهم مقدار ما تعلمته في هذا الدرس ، قم بإجراء الاختبار في [mobile application](http://onelink.to/njhc95) في مدرستنا حول هذا الموضوع.

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## الروابط

1. [MDN web docs](https://developer.mozilla.org/en/docs/Learn/JavaScript)
2. [Code for Teens: The Perfect Beginner's Guide to Programming, Volume 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)

## المساهمون ✨

الشكر يذهب إلى هؤلاء الأشخاص الرائعين ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">  </a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>
  
</table>

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

<!--
Код JavaScript выполняется JavaScript-движком браузера. Через консоль мы обращаемся к нему напрямую. Далее, для того чтобы не писать весь обучающий курс в браузере, мы настроим рабочее окружение, установив Node.js, VS Code и наиполезнейщий плагин Quokka.js
## Node.js

Node или Node.js — программная платформа, основанная на движке V8 (транслирующем JavaScript в машинный код), превращающая JavaScript из узкоспециализированного языка в язык общего назначения. Node.js добавляет возможность JavaScript взаимодействовать с устройствами ввода-вывода через свой API (написанный на C++), подключать другие внешние библиотеки, написанные на разных языках, обеспечивая вызовы к ним из JavaScript-кода. Установите его, [скачав](https://nodejs.org/en/) с официального сайта, после распаковки следуйте инструкции по установке.

![Node.js](/img/javascript/09.png)

## Редактор кода

Консоль разработчика прекрасна, но как только нам нужно написать код более, чем в одну строчку, то на помощь разработчику приходит еще один важный инструмент - редактор кода.

Как и браузеров, редакторов кода много и есть из чего выбрать. Мы же в этом курсе будем использовать VS Code, скачать который можно [здесь](https://code.visualstudio.com).

## Плагин Quokka.js

Для того чтобы писать код и смотреть результат его выполнения в одном месте, вместо того, чтобы прыгать по окнам и тратить свое драгоценное время, мы поставим плагин Quokka.js. Поэтому, после того, как скачали и установили VS Code, вам необходимо открыть и установить плагин. Который, как и другие плагины, можно найти и установить в левом боковом меню, набрав в поисковом запросе Quokka.js.

![Quokka.js](/img/javascript/06.png)

После установки расширения нажмите `Ctrl(или же COMMAND, если у вас Mac) + Shift + P`, чтобы отобразить палитру команд редактора, а затем введите Quokka, чтобы увидеть список доступных команд. Далее выберите и запустите команду «Новый файл JavaScript файл».

![Quokka.js](/img/javascript/07.png)

И после проверяем работу команд.

![Quokka.js](/img/javascript/08.png) -->
