---
id: javascript08
title: صحيحة أو خاطئة؟
sidebar_label: صحيحة أو خاطئة؟
---

![@serverSerrverlesskiy](/img/javascript/headers/08.jpg)

سيكون هناك الكثير من الأشياء الجديدة في هذا الفصل ، لكن لا ينبغي أن يكون الأمر صعبًا للغاية: بعد كل شيء ، بشكل عام ، كل شيء يدور حول فكرة بسيطة - صحيحة أم خاطئة؟

حتى الآن ، تعاملنا دائمًا مع أنواع البيانات البدائية فقط - مع الأرقام والسلاسل.
هل صادفت مصطلح "بدائي" في البرمجة من قبل؟ إذا لم يكن الأمر كذلك ، فسأشرح: تعني كلمة "بدائي" (يقولون أيضًا "بسيط") أن نوع البيانات هذا ليس كائنًا (سنعود إلى هذه النقطة) ولا يحتوي على طرق عمل مضمنة (ذلك هو ، وظائف⚙️).

![True](https://media.giphy.com/media/peBw21sPZnlqE/giphy.gif)

يُطلق على نوع البيانات الذي ستحتاج إليه بالتأكيد اسم منطقي أو منطقي. دائمًا ما يكون للنوع المنطقي القيمة أيضًا`true`  - صواب أو` false`  - خاطئة. وفقط بهذه الطريقة ، ولا شيء غير ذلك! إنه إما يكذب أو يقول الحقيقة - إما أن يختفي ، أو أن الضوء مضاء أو مطفأ ، أو موجود أو لا. إما أن تقوم بأداء واجبك أو لم تفعله. اثنين فقط 2️⃣ القيم هي "صحيح"  أو "خطأ".

## عوامل المساواة

![Operator](https://media.giphy.com/media/9r1n7HzkPT9sM1Wp0G/giphy.gif)

`true`  or `false` .تكون القيم المنطقية مفيدة عندما نحتاج إلى مقارنة شيء ما في JavaScript. عندما تدعو الحاجة ، فإننا ندعو فورا عوامل المقارنة
الآن سوف ندرس بالتسلسل جميع عوامل المقارنة الثمانية ، ولكن الشيء هو أنه نتيجة لكل منهم ، فإننا لا نهتم
سنبقى دائمًا مع قيمة منطقية - إما

### يساوي `==`

![Justice](https://media.giphy.com/media/3o85xDf6hr7ajhVL9K/giphy.gif)

يقوم عامل التشغيل equals أولاً بتحويل المعاملات إلى نفس النوع ، ثم يقوم بتطبيق مقارنة صارمة. إذا كان كلا المعاملين عبارة عن كائنات ، فإن JavaScript يقارن المراجع الداخلية المتساوية إذا كانت تشير إلى نفس الكائن في الذاكرة.

بناء الجملة  :

```javascript
x == y
```

أمثلة:

```javascript
1 == 1 // true
'1' == 1 // true
1 == '1' // true
3 == 5 // false
0 == false // true
'foo' == 'bar' // false
```

أدخل الأمثلة واحدًا تلو الآخر في ملف `bool` متغير لدينا `LIVE EDITOR`

```jsx live
function learnJavaScript() {
  let bool = 1 == 1
  return bool.toString()
}
```

### لا يساوي `! = `

![Equals](https://media.giphy.com/media/xT8qBit7YomT80d0M8/giphy.gif)

يعود عامل التشغيل لا يساوي `true`  إذا كانت المعاملات غير متساوية. إنه مشابه لعامل المساواة ، حيث يتم تحويل المعاملات إلى نفس النوع قبل المقارنة. إذا كان كلا المعاملين عبارة عن كائنات ، فإن JavaScript يقارن المراجع الداخلية غير المتساوية إذا كانت تشير إلى كائنات مختلفة في الذاكرة.

بناء الجملة  :

```javascript
x != y
```

Examples:

```javascript
1! = 2 // true
1! = '1' // false
1! = '1' // false
1! = True // false
0! = False // false
'foo'! = 'bar' // true
```

أدخل الأمثلة واحدًا تلو الآخر في ملف `bool` متغير لدينا`LIVE EDITOR`

```jsx live
function learnJavaScript() {
  let bool = 1 != 2
  return bool.toString()
}
```

### يساوي بدقة `===`

![equality](https://media.giphy.com/media/4W0ZwRP8y7pQtcUMyQ/giphy.gif)

يعود العامل صحيحًا إذا كانت المعاملات متساوية تمامًا. على عكس عامل التشغيل equals ، فإن هذا العامل لا يلقي المعاملات إلى نفس النوع.

بناء الجملة  :

```javascript
x === y
```

أمثلة:

```javascript
3 === 3 // true
3 === '3' // false
'foo' === 'foo' // true
```

يتأكد المشغل من تطابق القيمة والنوع تمامًا. في حالة "3 === '3'` ، تكون القيمة ، بالطبع ، متطابقة ، لكن النوع ليس كذلك: الأول رقم ، والثاني عبارة عن سلسلة.

أدخل الأمثلة واحدًا تلو الآخر في ملف `bool` متغير لدينا`LIVE EDITOR`

```jsx live
function learnJavaScript() {
  let bool = 3 === 3
  return bool.toString()
}
```

### بدقة لا يساوي `! == `

![ruler](https://media.giphy.com/media/tPK9Fyl1gyIkU6XbZv/giphy.gif)

يعود عامل التشغيل غير المتكافئ بشكل صارم إلى القيمة الصحيحة إذا كانت المعاملات غير متساوية أو تختلف أنواعها عن بعضها البعض.

بناء الجملة  :

```javascript
x !== y
```

Examples:

```javascript
3 !== '3' // true
4 !== 3 // true
```

أدخل الأمثلة واحدًا تلو الآخر في ملف  `bool` متغير لدينا `LIVE EDITOR`

```jsx live
function learnJavaScript() {
  let bool = 3 !== 3
  return bool.toString()
}
```

لماذا لا تستخدم `== 'و`! = `؟ ولكن لأنه ، بشكل عام ، لا توجد مثل هذه الحاجة. كلما أمكنك استخدامها ، يمكنك دائمًا استخدام كلٍّ من '=== `و'! == `. إذا كنت تريد المزيد من المرونة في الإجابة (على سبيل المثال ، بحيث يتم قبول كل من `1` و` 1 'أو `صحيح` على حد سواء ), ثم يمكنك ببساطة تضمين خيارات الإجابة المطلوبة في الكود نفسه (بدون تغيير هذا `===`).

::: info فقط افهم القاعدة
لم أستعمل أبدا `==` أو`! =`
:::

## عوامل المقارنة

### المزيد '> `

![not equal](https://media.giphy.com/media/jPfQcPdmI9bTXpa7hi/giphy.gif)

يعود العامل الأكثر صحيحًا إذا كانت قيمة المعامل الأيسر أكبر من قيمة المعامل الأيمن.

بناء الجملة  :

```javascript
x > y
```

أمثلة:

```javascript
4 > 3 // true
1 > 5 // false
```

أدخل الأمثلة واحدة تلو الأخرى في المتغير  `bool` في `LIVE EDITOR`

```jsx live
function learnJavaScript() {
  let bool = 4 > 3
  return bool.toString()
}
```

### أقل '<`

![small](https://media.giphy.com/media/82tNeaMTlEsdW/giphy.gif)

يُرجع العامل أقل من صحيحًا إذا كانت قيمة المعامل الموجود على اليسار أقل من قيمة المعامل الموجود على اليمين.

بناء الجملة  :

```javascript
x < y
```

أمثلة:

```javascript
3 < 4 // true
5 < 2 // false
```

أدخل الأمثلة واحدًا تلو الآخر في ملف  `bool` متغير لدينا `LIVE EDITOR`

```jsx live
function learnJavaScript() {
  let bool = 3 < 4
  return bool.toString()
}
```

### أكبر من أو يساوي `> =`

![comparison operator](https://media.giphy.com/media/icJA0VF7ntoEL18Jez/giphy.gif)

عامل التشغيل أكبر من أو يساوي ، ويعيد صحيحًا إذا كانت قيمة المعامل الموجود على اليسار أكبر من أو تساوي قيمة المعامل الموجود على اليمين.

بناء الجملة  :

```javascript
x >= y
```

أمثلة:

```javascript
4 >= 3 // true
3 >= 3 // true
```

أدخل الأمثلة في  `bool` متغير واحدًا تلو الآخر:

```jsx live
function learnJavaScript() {
  let bool = 4 >= 3
  return bool.toString()
}
```

### أصغر من أو يساوي `<=`

![less](https://media.giphy.com/media/UQbDc6dyK6WjpCXMvt/giphy.gif)

عامل التشغيل أصغر من أو يساوي ، ويعيد صحيحًا إذا كانت قيمة المعامل الموجود على اليسار أقل من أو تساوي قيمة المعامل الموجود على اليمين.

بناء الجملة  :

```javascript
x <= y
```

أمثلة:

```javascript
3 <= 4 // true
3 <= 3 // true
```

أدخل الأمثلة في  `bool` متغير واحدًا تلو الآخر:

```jsx live
function learnJavaScript() {
  let bool = 3 < 4
  return bool.toString()
}
```

## بنيات شرطية

![boolean](https://media.giphy.com/media/12W5Sg2koWYnwA/giphy.gif)

يجب أن تفكر ، "حسنًا ، كل هذا المنطق المنطقي كان بسيطًا جدًا ... ربما تكون عديمة الفائدة إلى حد ما ولا يتم استخدامها كثيرًا." لا يهم كيف هو! تُستخدم القيم المنطقية في البرمجة أكثر من كل الوقت وغالبًا في شكل شروط (أو تعبيرات).

### ما هو "الشرطي"؟

![thoughtful](https://media.giphy.com/media/IyyGGEMZhZIZwAxnUS/giphy.gif)

سؤال جيد! الشرط هو عبارة تُستخدم لتشغيل كتل معينة من التعليمات البرمجية وفقًا لشرط معين. يعرض الشرط (على سبيل المثال ، عند مقارنة `x === y`) دائمًا قيمة منطقية - إما` true` أو`false` . وفقًا لذلك ، إذا كانت القيمة "صواب" , ثم يجب تشغيل الكود ، وإلا يجب تخطي كتلة التعليمات البرمجية. لنلقِ نظرة على بعض الأمثلة.

### التعبيرات الشرطية مع `if`

![Instruction manual](https://media.giphy.com/media/2mDSs3gPUyrcMqtheg/giphy.gif)

ال `if` ينفذ البناء` instruction1`, إذا كانت الحالة `true` , إذا كانت الحالة` false` , من ثم`instruction2` يتم تنفيذ.

بناء الجملة  :

```javascript
if (condition) {
  instructions1
} else {
  instructions2
}
```

`condition` -
تعبير إما صحيح أو خطأ.

`instruction1` -
يتم تنفيذ التعليمات إذا كانت قيمة `condition` صحيح . يمكن أن يكون أي عبارة ، بما في ذلك "if" المتداخلة. يمكن استخدام العبارة الفارغة عند عدم الحاجة إلى اتخاذ أي إجراء.

`instruction2` -
تعليمات للتنفيذ إذا كانت قيمة `condition` هو زائف. يمكن أن يكون أي بيان ، بما في ذلك جملة `if`.يمكن أيضًا تجميع التعليمات في كتلة. تغيير السنة في  `whatIsTheYearNow` متغير ولاحظ الإخراج.

```jsx live
function learnJavaScript() {
  let whatIsTheYearNow = 2021

  if (whatIsTheYearNow === 2021) {
    whatIsTheYearNow = true
  } else {
    whatIsTheYearNow = false
  }

  return whatIsTheYearNow.toString()
}
```

### "if" ليس فقط مع القيم المنطقية

![No](https://media.giphy.com/media/ftqLysT45BJMagKFuk/giphy.gif)

يمكن أن تعمل التعبيرات الشرطية ليس فقط مع القيم المنطقية ، أي مع تلك التي ليست بالضبط "صواب"  أو "خطأ"  لذلك ، بشكل عام ، يمكننا استخدامها بأمان بين قوسين ، بالإضافة إلى القيم المنطقية.

- كل الأعداد الصحيحة ما عدا الصفر - `true` 
- سلسلة بها واحدة على الأقل`true` حرف 
- السلسلة الفارغة هي`false` 

لنجربها ، أدخل القيم في ملف `bool`  عامل:

```jsx live
function learnJavaScript() {
  let bool = 1

  if (bool) {
    bool = true
  } else {
    bool = false
  }

  return bool.toString()
}
```

### عوامل المقارنة في تعبيرات `if`

![made for each other](https://media.giphy.com/media/6yxIP39EMwP7IlIA28/giphy.gif)

لقد تعاملنا حتى الآن مع المقارنات أو الشروط الشرطية مع "if" ، لكننا حتى الآن لم نستخدمها معًا ، وقد صُنعت فقط لبعضها البعض!

```jsx live
function learnJavaScript() {
  let year = 2021

  let output

  if (year < 2020) {
    output = 'less than 2020'
  } else {
    output = 'more than 2020'
  }
  return output
}
```

### تعدد شروط "else if"

في بعض الأحيان ، تحتاج إلى التحقق من عدة متغيرات للحالة. يتم ذلك باستخدام كتلة "else if". قم بتغيير السنة وانظر الناتج.

```jsx live
function learnJavaScript() {
  let year = 2021

  let output

  if (year < 2020) {
    output = 'less than 2020'
  } else if (year > 2020) {
    output = 'more than 2020'
  } else {
    output = 'equals 2020'
  }
  return output
}
```

### عامل التشغيل الشرطي (الثلاثي) '؟ `

![question mark](https://media.giphy.com/media/wH4rY2nPnEnp6/giphy.gif)

عامل تشغيل JavaScript الوحيد الذي يقبل ثلاثة معاملات: `condition` متبوعة بعلامة استفهام`؟ `، ثم` التعبير` ، الذي يتم تنفيذه إذا كان الشرط صحيحًا ، متبوعًا بنقطتين `:` ، وأخيرًا ، `التعبير` الذي إذا كان الشرط خاطئًا. غالبًا ما يتم استخدامه كاختصار لعبارة "if".

بناء الجملة  :

```javascript
cحالة ؟ التعبير 1: التعبير 2
```

المعلمات:

`condition` - تعبير يأخذ القيمة `true`  أو `false` .

`expression1`,` expression2` - التعبيرات التي يمكن أن تكون قيمها من أي نوع.

مثال:

```jsx live
function learnJavaScript() {
  let age = 20
  let output = age > 18 ? 'Yes' : 'No'

  return output
}
```

## مشاكل؟

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

اكتب ل[Discord](https://discord.gg/6GDAfXn) محادثة.

## أسئلة:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

ما الصيغة المستخدمة في عامل المساواة؟

1. `x == y`
2. `x = y`
3. `x - y`

في هذه الحالة لا يرجع عامل التشغيل "صواب"؟

1. إذا كانت المعاملات غير متساوية
2. إذا كانت المعاملات متساوية
3. إذا كان كلا المعاملين كائنات

كيف يساوي عامل التشغيل مختلفًا عن يساوي تمامًا؟

1. لا تساوي بشكل صارم المعامِلات من النوع نفسه
2. يساوي بدقة المعاملات إلى نفس النوع
3. يضمن بدقة أن القيمة متطابقة ، لكن النوع ليس كذلك

ما هي صيغة المشغل بدقة لا تساوي؟

1. `!= `
2. `!== `
3. `==! `

في هذه الحالة يقوم العامل بإرجاع خطأ أكثر؟

1. إذا كانت قيمة المعامل الأيسر أكبر من قيمة المعامل الأيمن
2. إذا كانت قيمة المعامل الأيمن أكبر من قيمة المعامل الأيسر
3. إذا كانت قيم المعامل هي نفسها

ما هي صيغة المعامل أكبر من أو يساوي؟

1. `> = `
2. `> => `
3. `> <= `

في أي مثال سيعود عامل التشغيل الأصغر من أو المتساوي صحيحًا؟

1. `4 <= 5`
2. `5 <= 4`
3. `3 <= 2`

ما هو الشرط؟

1. تعليمات
2. التعبير
3. القيمة

ما الكتلة المستخدمة للتحقق من المتغيرات المتعددة للشرط؟

1. `else if`
2. `if`
3. `for`

أي عامل يأخذ 3 معاملات؟

1. عامل التشغيل الشرطي (الثلاثي)
2. أكبر من أو يساوي
3. أقل من أو يساوي

## الروابط

1. [MDN web docs - Comparison Operators](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Операторы_сравнения)
2. [Code for Teens: The Perfect Beginner's Guide to Programming, Volume 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)

## المساهمون ✨

الشكر يعود إلى هؤلاء الأشخاص الرائعين([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">  </a><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>
  
</table>

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)
