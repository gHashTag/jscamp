---
id: javascript06
title: سلاسل
sidebar_label: سلاسل
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/06.jpg)

في JavaScript ، أي بيانات نصية هي سلاسل. ومع ذلك ، لا تنس أنه يمكن أيضًا كتابة الأرقام في سلسلة. من بين جميع أنواع البيانات ، من المحتمل أن تستخدم السلاسل أكثر من غيرها. دعنا نحلل جميع الخيارات لإنشاء سطر جديد.
<!-- ## Video

<YouTube videoId="ocQTm9K2vdo" /> -->

## اقتباسات مفردة أو مزدوجة
![quotation marks](https://media.giphy.com/media/7cSTvZ4hI6ABZkcTwk/giphy.gif)

يتم استخدام علامات الاقتباس "الفردية" أو "المزدوجة" لإنشاء سلاسل.

```jsx
let single = 'Hello World'
let double = "Hello World" // prettier-ignore
```

يمكنك استخدام كلاهما ، الشيء الرئيسي هو أنه إذا بدأت سطرًا بسطر واحد ، على الرغم من أنه قد يكون هناك زوجي في الداخل ، فيجب أيضًا استكماله بخط واحد. وبالتالي ، مع اقتباسات مزدوجة.
```jsx
let double = "Don't you think so, d'Artagnan?"
let single = '"I think so, indeed!" - cried he.'
```

## شرطة مائلة للخلف

![shielding](https://media.giphy.com/media/3og0IPizf4zPR6VMt2/giphy.gif)

إذا تم استخدام نفس علامات الاقتباس داخل السلسلة كما في الخارج ، فيجب أن يتم تخطيها بشرطة مائلة للخلف - ما يسمى بـ "حرف الهروب". يتم إلحاقه ➕ قبل علامة الاقتباس المرفقة `` \ '' بحيث لا تشير إلى نهاية السطر.
```jsx live
// prettier-ignore
function learnJavaScript() {
  let backticks = 'It\'s not complicated'
  return backticks
}
```

لاحظ أن الشرطة المائلة للخلف "\" تُستخدم فقط لقراءة الجملة بشكل صحيح بواسطة المترجم ، لكنها لا تُكتب  إلى السلسلة بعد قراءتها. عند حفظ سلسلة في الذاكرة الرئيسية ، لا تتم إضافة الحرف \ `إليها. يمكنك أن ترى هذا بوضوح في النتائج.

## العودة يقتبس

![Dollar](https://media.giphy.com/media/26BoCwvDEWXnGlLyM/giphy.gif)

عند كتابة سلسلة ، يمكنك الاستغناء عن الشرطة المائلة للخلف باستخدام علامات الاقتباس \ `back \`.

تعمل علامات الاقتباس المفردة والمزدوجة بشكل أساسي بنفس الطريقة ، وإذا كنت تستخدم علامات الاقتباس الخلفية ، فيمكننا إدراج تعبيرات JavaScript عشوائية في مثل هذه السلسلة عن طريق لفها بعلامة الدولار بأقواس متعرجة `` $ {...} `:

```jsx live
function learnJavaScript() {
  const sum = (a, b) => a + b // this is a function, we'll get to know it later in the course
  return `1 + 2 = ${sum(1, 2)}`
}
```

ميزة أخرى من backticks هي أنها يمكن أن تمتد لأكثر من سطر واحد.

```jsx live
function learnJavaScript() {
  let guestList = `Guests:
    * John
    * Pete
    * Mary
   `
  return guestList
}
```

يمكن أيضًا إنشاء سلاسل متعددة الأسطر بعلامات اقتباس مفردة ومزدوجة ، باستخدام ما يسمى بحرف "تغذية السطر" ، والذي تتم كتابته كـ `\ n`. تبدأ جميع الأحرف الخاصة ، في Java Script ، بشرطة مائلة للخلف "\" صحيح ، يمكننا التحقق من ذلك في وحدة تحكم المتصفح (لا يتم عرض "المحرر المباشر" بشكل صحيح).

```jsx
let guestList = 'Guests:\n * John\n * Pete\n * Mary'

guestList // multi-line guest list
```

![console](/img/javascript/12.png)

## الأوتار غير قابلة للتغيير

![Tree](https://media.giphy.com/media/YxlUxrYGw2w9y/giphy.gif)

لا يمكن تغيير محتوى سلسلة في JavaScript. لا يمكنك أخذ الرمز في المنتصف واستبداله. بمجرد إنشاء سلسلة - إنه هكذا إلى الأبد.
يمكنك إنشاء سلسلة جديدة وكتابتها على نفس المتغير بدلاً من القديم.

```jsx live
function learnJavaScript() {
  let str = 'Hi'
  str = 'P' + str[1] // replace string
  return str
}
```

## طرق السلسلة الشعبية

### طول سلسلة

![Length](https://media.giphy.com/media/Y1GK5MEiRa3OSVsxHK/giphy.gif)

The `length` property returns the number of code values in the string.

```jsx live
function learnJavaScript() {
  let str = 'My\n'.length
  return str
}
```

الرجاء ملاحظة أن `\ n` هو حرف خاص واحد ، لذلك كل شيء صحيح هنا: طول السلسلة هو 3.
### الوصول إلى الرموز
![Door](https://media.giphy.com/media/xUA7aLpVxPVEoEPXji/giphy.gif)

هنالك اثنان 2️⃣ طرق للوصول إلى حرف معين في سلسلة. الطريقة الأولى تستخدم `charAt ()` طريقة. الأول 1️⃣ الحرف في الموضع صفر:
```jsx live
function learnJavaScript() {
  let str = 'cat'.charAt(2)
  return str
}
```

يمكنك أيضًا الحصول على رمز باستخدام الأقواس المربعة:

```jsx live
function learnJavaScript() {
  let str = 'cat'[2]
  return str
}
```

الأقواس المربعة هي الطريقة الحديثة للحصول على شخصية ، بينما`charAt` موجود بشكل رئيسي لأسباب تاريخية.
### تغيير حالة الأحرف

![Capital letter](https://media.giphy.com/media/3orifcBbnezczHmU8g/giphy.gif)

لتحويل أحرف سلسلة إلى أحرف كبيرة ، استخدم الامتداد `toUpperCase ()` طريقة.

```jsx live
function learnJavaScript() {
  let str = 'Interface'.toUpperCase()
  return str
}
```

to lowercase `toLowerCase ()`

```jsx live
function learnJavaScript() {
  let str = 'Interface'.toLowerCase()
  return str
}
```

### سلسل (متسلسل) سلسلة

![Chain](https://media.giphy.com/media/l3q2EOu4nu1D8uJKU/giphy.gif)

لإنشاء سلسلة من السلاسل الموجودة ، استخدم علامة الجمع `+` لسلسلة السلاسل.
```jsx
let name = 'Mary '
let activity = 'drink tea'
let bio = 'Our guest ' + name + activity + '.'
bio // Our guest Mary drink tea.
```

<!-- Теперь попробуйте построить строку сами.

```jsx live
function learnJavaScript() {
  let name = 'John'
  let age = '15'
  let country = 'USA'
  let enjoyment = 'trevel'
  let slogan = '"Don\'t worry, be happy!"'
  let bio =
    'My name is ' +
    name +
    '. I am ' +
    age +
    " years old. I'm from " +
    country +
    '. I like ' +
    enjoyment +
    ', and my slogan for life: ' +
    slogan +
    '.'
  bio
  return bio
}
```

И `+=` for assignment with union.

```jsx live
function learnJavaScript() {
  let str = '123'
  str += 456
  return str
}
``` -->

لذلك تعرفنا على أكثر أنواع البيانات شيوعًا في JavaScript والطرق الأكثر استخدامًا لها.

## مشاكل؟

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

اكتب ل [Discord](https://discord.gg/6GDAfXn) محادثة.

## أسئلة:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

كيف لا تتم كتابة السلاسل في JavaScript؟

1. في اقتباسات واحدة
2. في الخطوط المائلة العكسية
3. في الاقتباسات 

لماذا لا تستخدم الشرطة المائلة للخلف في سلسلة؟

1. للتدريع
2. لكتابة أحرف خاصة
3. لإنهاء الخط

ابحث عن الخط الذي يحتوي على الخطأ

1. let str = \ `It's not complicated \`
2. let str = "أعتقد ذلك بالفعل!" - بكى ".
3. let str = شعاري: "لا تقلق ، كن سعيدا!"

حدد "سطر تغذية الأحرف"

1. `\ n`
2. `\`
3. `\ *`

ما هي الرسالة`'sport' [3]` إرجاع؟

1. `o`
2. `r`
3. لن يعود أي شيء

كيف أقوم بتغيير حرف في سلسلة JavaScript؟

1. تغيير الخط
2. احصل على الرمز واستبدله
3. أنشئ سطرًا جديدًا واكتبه على نفس المتغير بدلاً من المتغير القديم

ما هي الطريقة المستخدمة لكتابة الأحرف الكبيرة؟

1. "واجهة". toUpperCase () `
2. '' Interface '[0] .toLowerCase () `
3. "واجهة". toLowerCase () `

ما هو الحرف المستخدم لسلسلة السلاسل؟

1. `=`
2. `+`
3. `+ =`

لفهم مقدار ما تعلمته في هذا الدرس ، قم بإجراء الاختبار في[mobile application](http://onelink.to/njhc95) من مدرستنا في هذا الموضوع.
[![EnglishMoji!](/img/logo/englishmoji.png)](https://link-to.app/xvh7Ush9kl)

## الروابط

1. [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Data_structures)
2. [Code for Teens: The Perfect Beginner's Guide to Programming, Volume 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)
3. [JavaScript.ru](https://learn.javascript.ru/types)

## المساهمون ✨

الشكر يعود إلى هؤلاء الأشخاص الرائعين([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/Alena-Maitri"><img src="https://avatars1.githubusercontent.com/u/72432063?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Alena Yanbukhtina</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=Alena-Maitri" title="Documentation">  </a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![EnglishMoji!](/img/logo/englishmoji.png)](https://link-to.app/xvh7Ush9kl)
