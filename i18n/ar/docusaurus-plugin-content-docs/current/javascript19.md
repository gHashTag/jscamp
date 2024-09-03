---
id: javascript19
title: طرق تكرار الصفيف (خريطة ، عامل تصفية ، تقليل)
sidebar_label: خريطة ، تصفية ، تقليل
---

![@serverSerrverlesskiy](/img/javascript/headers/22.jpg)

لغة JavaScript لها تفضيل واضح للمصفوفات على هياكل البيانات الأخرى. لديهم الكثير من الحيل المحددة والمريحة ، على سبيل المثال ، مجموعة كاملة من طرق التكرار: `map`,` filter`, `reduce`.

## خريطة

![Create](https://media.giphy.com/media/ffd0F6WNcRJMQ/giphy.gif)

ال `map ()` طريقة تخلق مصفوفة с جديدة نتيجة استدعاء الوظيفة المحددة ⚙️ لكل عنصر من عناصر المصفوفة.

### بناء الجملة

![Book](https://media.giphy.com/media/s6OiiampNcye4/giphy.gif)

```javascript
let new_array = arr.map(function callback( currentValue[, index[, array]]) {
    // Returns the item for new_array
}[, thisArg])
```

ال `map` طريقة استدعاء تمرير `callback` تعمل مرة واحدة لكل عنصر ، بترتيب حدوثها ، وتقوم ببناء مصفوفة جديدة من نتائج استدعائها. يتم استدعاء وظيفة "callback" فقط لفهارس المصفوفة التي تم تعيين قيم لها ، بما في ذلك "undefined". لا يتم استدعاؤه لعناصر الصفيف المفقودة (أي للفهارس التي لم يتم تحديدها أو حذفها أو تعيين قيمة لها مطلقًا).

يتم استدعاء الدالة ⚙️ `رد الاتصال` بثلاث وسيطات:

- قيمة العنصر ،
- فهرس العنصر
- والمصفوفة التي يتم من خلالها المرور.

إذا كان `thisArg` تم تمرير المعلمة إلى `map` الطريقة ، سيتم استخدامها على أنها`this` قيمة متى`callback` يسمى. وإلا فإن `this` ستكون القيمة`undefined`. في النهاية ، قيمة`this` كما رأينا من `callback` يتم تحديد الوظيفة وفقًا للقواعد المعتادة للتعريف `this` كما رأينا من وظيفة.

لا يعدل التابع "map" المصفوفة التي تم استدعاؤها (على الرغم من أن الوظيفة ⚙️ يمكنها القيام بذلك!).

نطاق العناصر التي تتم معالجتها بواسطة ملف`map` تم تعيين الطريقة قبل المكالمة الأولى إلى`callback` وظيفة. تمت إضافة العناصر إلى المصفوفة بعد بداية ملف`map` الطريقة لن يتم زيارتها من قبل `callback` وظيفة. إذا تم تعديل العناصر الموجودة في المصفوفة بواسطة`callback` function, their values ​​passed to the function will be the values ​​at the time when the `map` طريقة زياراتهم. العناصر المحذوفة لن تتم زيارتها.

### أمثلة:

![Math](https://media.giphy.com/media/xT1Ra5h24Eliux3UVq/giphy.gif)

#### مثال بسيط

لديك مصفوفة تحتوي على العديد من العناصر ، كل منها يمثل شخصًا مختلفًا. يمكن أن يكون هناك الكثير من البيانات هنا: الاسم والعمر ولون الشعر والشخصية المفضلة من السينما ، ولكن في الوقت الحالي كل هذا غير مطلوب - ما عليك سوى الحصول على مجموعة من أرقام جوازات السفر لهؤلاء الأشخاص لمنحهم جميع تصاريح المؤتمر.

```jsx live
function learnJavaScript() {
  const friends = [
    { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
    { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
    { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
    { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
    { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
    { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' }
  ]
  let passports = friends.map(friend => friend.passport + ' ')
  return passports
}
```

#### في بعض الحالات ، قد تحتاج إلى عرض مصفوفة من الكائنات ذات المفاتيح المحددة كسلسلة:

```jsx live
function learnJavaScript() {
  const users = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
  ]

  let result = users.map(({ id, age, group }) => `\n${id} ${age} ${group}`).join('')

  return result
}
```

#### إنشاء مصفوفة قيم فهرنهايت من مصفوفة قيم مئوية:

![Thermometer](https://media.giphy.com/media/W23dJLsAW5knUU27Fv/giphy.gif)

مثال لمعالجة كل عنصر من عناصر المصفوفة باستخدام صيغة معينة:

```jsx live
function learnJavaScript() {
  let celsius = [-15, -5, 0, 10, 16, 20, 24, 32]

  let fahrenheit = celsius.map(t => t * 1.8 + 32 + ' ')

  return fahrenheit
}
```

<!-- ### Отображение массива чисел на массив квадратных корней

Отображение таблицы пользователей в виде читаемой строки только с указанными ключами
Следующий код берёт массив чисел и создаёт    новый массив, содержащий квадратные корни чисел из первого массива.

```jsx live
function learnJavaScript() {
  var numbers = [1, 4, 9]
  var roots = numbers.map(Math.sqrt) + ' '
  return roots
}
``` -->

#### عرض مصفوفة من الأرقام باستخدام دالة تأخذ وسيطة:

```jsx live
function learnJavaScript() {
  const numbers = [1, 4, 9]

  const doubles = numbers.map(num => num * 2 + ' ')

  return doubles
}
```

<!-- ![Wow](https://media.giphy.com/media/1ym5LJ17vp77BL8X5O/giphy.gif)

#### Обобщённое использование `map`

Этот пример показывает, как использовать `map` на объекте строки `String` для получения массива байт в кодировке `ASCII`, представляющего значения символов  :

```jsx live
function learnJavaScript() {
  var map = Array.prototype.map
  var a =
    map.call('Hello World', function (x) {
      return x.charCodeAt(0)
    }) + ' '
  return a
}
```

#### Использование `map` для переворачивания строки

```jsx live
function learnJavaScript() {
  var str = '12345'
  result = [].map
    .call(str, function (x) {
      return x
    })
    .reverse()
    .join('')
  return result
}
``` -->

## منقي

![filter](https://media.giphy.com/media/xT5LMGupUKCHb7DnFu/giphy.gif)

ال`filter ()` طريقة تخلق   مصفوفة جديدة تحتوي على جميع العناصر التي اجتازت الاختبار المحدد في الوظيفة التي تم تمريرها.

دائمًا ما تكون نتيجة المرشح مصفوفة. إذا تم إرجاع دالة لعنصر ما `true`  (أو أي قيمة "حقيقية") ، يتم تضمين هذا العنصر في النتيجة ، وإلا فلن يتم تضمينه.

### بناء الجملة

![write](https://media.giphy.com/media/6Do13TV1OfOF2/giphy.gif)

```javascript
let newArray = arr.filter(function callback(element[, index, [array]])[, thisArg])
```

### وصف

![m](https://media.giphy.com/media/DQaeCdCqhHWx3n4dvH/giphy.gif)

ال`filter()` طريقة استدعاء تمرير `callback` تعمل مرة واحدة لكل عنصر موجود في المصفوفة وتقوم ببناء مصفوفة جديدة مع جميع القيم التي من أجلها `callback` عادت الوظيفة`true`أو القيمة التي تصبح`true`  عند الإرسال إلى`boolean`. ال`callback` يتم استدعاء الوظيفة فقط لمؤشرات المصفوفة التي تم تعيين قيم لها ؛ لا يتم استدعاؤه للفهارس التي تم إسقاطها أو التي لم يتم تعيين قيم لها مطلقًا. يتم ببساطة تخطي عناصر المصفوفة التي لم يتم التحقق منها بواسطة دالة "رد الاتصال" ولا يتم تضمينها في ملف    مجموعة جديدة.

الوظيفة⚙️ `callback` يسمى بثلاث حجج:

- قيمة العنصر ؛
- مؤشر العنصر ؛
- المصفوفة التي يتم المرور من خلالها.

إذا كان`thisArg` تم تمرير المعلمة إلى`filter()` الطريقة ، سيتم استخدامها على أنها `this` الطريقة ، سيتم استخدامها على أنها`this` ستكون القيمة`undefined`. في النهاية ، قيمة`this` كما يُرى من دالة يتم تحديدها وفقًا للقواعد المعتادة للتعريف`this` كما رأينا من وظيفة⚙️.

إن "filter()` الطريقة لا تعدل المصفوفة التي تم استدعاؤها.

نطاق العناصر التي تتم معالجتها بواسطة ملف `filter()` تم تعيين الطريقة قبل المكالمة الأولى إلى `callback` وظيفة. تمت إضافة العناصر إلى المصفوفة بعد بداية ملف`filter()` الطريقة لن يتم زيارتها من قبل `callback` وظيفة. إذا تغيرت عناصر الصفيف الموجودة ، فإن القيم التي تم تمريرها إلى`callback` ستكون الوظيفة هي القيم في الوقت الذي يكون فيه`filter()`طريقة زياراتهم. العناصر المحذوفة لن تتم زيارتها.

### مثال

![math](https://media.giphy.com/media/3orieN7HEHI0tw8x5C/giphy.gif)

#### تصفية جميع القيم الصغيرة

يستخدم المثال التالي `filter()` لإنشاء مصفوفة تمت تصفيتها تحتوي على جميع العناصر أكبر من أو تساوي`value`، وجميع العناصر الأقل من`value` إزالة.

```jsx live
function learnJavaScript() {
  const isBigEnough = value => value >= 10

  let filtered = [12, 5, 8, 130, 44].filter(isBigEnough) + ' '

  return filtered
}
```

![Wow](https://media.giphy.com/media/M33UV4NDvkTHa/giphy.gif)

## يقلل

![count](https://media.giphy.com/media/xUPGcqaVH1cDeKZTBS/giphy.gif)

تعمل طريقة التقليل أيضًا في سياق مصفوفة وتستدعي دالة لكل عنصر ، ولكنها أيضًا تجمع نتائج جميع الاستدعاءات في قيمة واحدة. يمكن التحكم في هذا السلوك.

لا يُقصد بتقليل تعديل عناصر مجموعة مثل الخريطة. مهمتها هي حساب "مجموع" جميع العناصر بطريقة أو بأخرى ، وإعادتها.

يمكن أن تكون القيمة الناتجة أي شيء: رقم ، سلسلة ، كائن ، مصفوفة - كل هذا يتوقف على المشكلة التي يحلها مطور JavaScript.

تأخذ طريقة التخفيض معلمتين:

-وظيفة ، مثل`map`, والتي سيتم استدعاؤها بالتسلسل لكل عنصر من عناصر المجموعة ؛
   هي القيمة الأولية للمجمع.

تحتوي الوظيفة أيضًا على وسيطتين:

- الأول هو القيمة المتراكمة (المجمع) ؛
- عنصر المصفوفة مباشرة.

### بناء الجملة

```javascript
array.reduce(function callback[, initialValue])
```

### وصف

![describe](https://media.giphy.com/media/3orieVr84udUl4wbQs/giphy.gif)

ينفّذ أسلوب الحد () وظيفة رد النداء مرة واحدة لكل عنصر في المصفوفة ، باستثناء الفراغات ، وأخذ أربع وسيطات: القيمة الأولية (أو القيمة من رد الاتصال السابق) ، وقيمة العنصر الحالي ، والفهرس الحالي ، و مجموعة لتكرار أكثر.


في المرة الأولى التي يتم فيها استدعاء الوظيفة ، يمكن أن تأخذ معلمات المُراكم والقيمة الحالية إحدى القيمتين. إذا كان`initialValue` يتم تمرير الوسيطة في الاستدعاء لتقليل () ، ثم قيمة `accumulator` ستكون مساوية لقيمة "initialValue" وقيمة `currentValue` ستكون مساوية للقيمة الأولى في المصفوفة. إذا لم يتم تحديد قيمة initialValue ، فسيكون المجمع مساويًا للقيمة الأولى في المصفوفة ، وستكون القيمة الحالية مساوية للقيمة الثانية في المصفوفة.


إذا كانت المصفوفة فارغة ولا `initialValue` حجة محددة ، أ`TypeError` سيتم طرح استثناء. إذا كانت المصفوفة تتكون من عنصر واحد فقط (بغض النظر عن موقعه في المصفوفة) و `initialValue` لم يتم تحديد الحجة ، أو إذا كان`initialValue` تم تحديد الوسيطة ، لكن المصفوفة فارغة ، سيتم إرجاع هذه القيمة دون استدعاء الوظيفة⚙️ `callback` ...

### القيمة الأولية للبطارية

![hatchng](https://media.giphy.com/media/xT1R9Qy80qNb8oQGGc/giphy.gif)

دعنا نحسب القيمة الأولية. في المثال يساوي`0`, لأننا نحسب القيمة العددية - مجموع الأعمار. بدلاً من الصفر ، يمكن أن يكون هناك أي رقم / سلسلة أخرى (فارغة أو لا) / كائن / مصفوفة - مهما كانت القيمة التي تبدأ في التراكم منها. على سبيل المثال ، دعنا نجمع أسماء جميع الأصدقاء في سطر واحد :

```jsx live
function learnJavaScript() {
  const friends = [
    { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
    { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
    { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
    { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
    { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
    { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' }
  ]

  const names = friends.reduce((accumulator, friend) => `${accumulator} ${friend.name}, `, 'Friends: ')

  return names
}
```

هنا ، كانت القيمة الأولية هي السلسلة `" Friends: "`, التي أضيفت إليها أسماء جميع الأصدقاء تدريجياً.

إذا لم تحدد القيمة الأصلية بشكل صريح ، فإن الأول 1️⃣ يصبح عنصر المصفوفة ضمنيًا. في هذه الحالة ، لم يعد يتم استدعاء الوظيفة الخاصة بها.

### مثال

#### جمع كل القيم في المصفوفة:

```jsx live
function learnJavaScript() {
  const initialValue = 0

  const sum = [1, 2, 3].reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  }, initialValue)

  return sum
}
```

ونفس الشيء في سطر واحد من التعليمات البرمجية:

```jsx live
function learnJavaScript() {
  const sum = [1, 2, 3].reduce((x, y) => x + y)

  return sum
}
```

<!-- #### Сглаживание массива массивов:

![transform](https://media.giphy.com/media/dVleMgtOlPE6Q/giphy.gif)

Код решает задачу преобразования массива массивов в один плоский массив. Результат первой итерации будет равен: `[…[], …[1, 2, 3]]` что означает, что он преобразуется в `[1, 2, 3]` — это значение мы предоставляем как `acc` на второй итерации и так далее.

```jsx live
function learnJavaScript() {
  const nested = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]

  const flat = nested.reduce((acc, it) => [...acc, ...it], [])

  return flat + ' '
}
```

#### Разворачивание массива массивов:

```jsx live
function learnJavaScript() {
  const flattened = [
    [0, 1],
    [2, 3],
    [4, 5]
  ].reduce(function (a, b) {
    return a.concat(b) + ' '
  })

  return flattened
}
``` -->

## تسلسل

![unity](https://media.giphy.com/media/jTf2Io0LtBXGZddOVE/giphy.gif)

تدعم برمجة JavaScript ملفات `chaining` نمط - الجمع بين وظائف متعددة في سلسلة واحدة مع الإرسال المتسلسل للنتيجة.

يتم استدعاء جميع التوابع الثلاثة التي تم تحليلها في سياق مصفوفة ، ويعيد اثنان منها 2️⃣ أيضًا مصفوفة. وبالتالي ، من السهل جدًا الجمع بينهما.

على سبيل المثال ، لنحسب العمر الإجمالي لجميع الأولاد :

```jsx live
function learnJavaScript() {
  const friends = [
    { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
    { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
    { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
    { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
    { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
    { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' }
  ]
  let totalBoysYears = friends
    .filter(friend => friend.sex === 'm')
    .reduce((accumulator, friend) => accumulator + friend.age, 0)
  return totalBoysYears
}
```

أو يمكننا جمع أرقام جوازات سفر الفتيات لشراء تذاكر طيران إلى لاس فيغاس :

```jsx live
function learnJavaScript() {
  const friends = [
    { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
    { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
    { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
    { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
    { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
    { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' }
  ]
  let girlsPassports = friends.filter(friend => friend.sex === 'f').map(friend => friend.passport) + ' '
  return girlsPassports
}
```

## استنتاج

مع هذه الميزات الرائعة⚙️ الكود يصبح أسهل للقراءة. لذلك ، فيما يلي قائمة بالمقالات التي تتناول المزيد من التفاصيل حول هذا الموضوع.

## مشاكل؟

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Write to [Discord](https://discord.gg/6GDAfXn) chat.

## مشاكل؟

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

دالة يجب استدعاؤها لكل عنصر من عناصر المصفوفة؟

1. `currentValue`
2. `array`
3. `callback`

طريقة تنشئ مصفوفة جديدة بنتيجة استدعاء الوظيفة المحددة لكل عنصر من عناصر المصفوفة:

1. `map`
2. `filter`
3. `reduce`

يمكن أن تكون القيمة الناتجة لطريقة التخفيض:

1. رقم
2. صفيف
3. أي شيء

يتم جمع كل القيم في المصفوفة بالطريقة التالية:

1. `map`
2. `filter`
3. `reduce`

يتم استخدام المعلمة الاختيارية أو القيمة كملف `this` عند استدعاء `callback` وظيفة:

1. `array`
2. `index`
3. `thisArg`

طريقة تنشئ مصفوفة جديدة بكل العناصر التي اجتازت التحقق المحدد في الدالة التي تم تمريرها:

1. `map`
2. `filter`
3. `reduce`

الجمع بين عدة وظائف في سلسلة واحدة مع النقل المتسلسل للنتيجة:

1. الوحدة
2. التسلسل
3. الاندماج

لفهم مقدار ما تعلمته في هذا الدرس ، قم بإجراء الاختبار في[mobile application](http://onelink.to/njhc95) من مدرستنا في هذا الموضوع.

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## الروابط

1. [Simplify your JavaScript - use map, reduce and filter](https://proglib.io/p/javascript-map-reduce-filter)
2. [15 useful javascript examples of map, reduce and filter](https://webdevblog.ru/15-poleznyh-javascript-primerov-map-reduce-i-filter)
3. [Array.prototype.map()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
4. [Array.prototype.filter()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
5. [Array.prototype.reduce()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

## المساهمون✨

الشكر يعود إلى هؤلاء الأشخاص الرائعين ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/AlisaNasibullina"><img src="https://avatars3.githubusercontent.com/u/74646904?s=460&v=4" width="200px;" alt=""/><br /><sub><b>AlisaNasibullina</b></sub></a><br /><a href="#mentoring-KoDim-React" title="Mentoring">  </a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)
