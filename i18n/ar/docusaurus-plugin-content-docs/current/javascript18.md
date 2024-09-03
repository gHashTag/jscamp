---
id: javascript18
title: الراحة وانتشار
sidebar_label: الراحة وانتشار
---

![@serverSerrverlesskiy](/img/javascript/headers/19.jpg)

تدعم العديد من وظائف JavaScript المضمنة عددًا عشوائيًا من الوسائط.

على سبيل المثال:

`Math.max (arg1, arg2, ..., argN)` - تحسب الحد الأقصى لعدد الوسائط التي تم تمريرها.

`Math.min (arg1, arg2, ..., argN)` - تُرجع الحد الأدنى لقيمة الوسيطات التي تم تمريرها.

في هذه المقالة ، سوف نتعلم كيفية القيام بنفس الشيء مع وظائفنا وكيفية تمرير المعلمات إلى وظائف مثل المصفوفة.

## المعلمات المتبقية`(... الباقي) `

![Parametrs](https://media.giphy.com/media/3osxYoufeOGOA7xiX6/giphy.gif)

يمكنك استدعاء دالة بأي عدد من المتغيرات ، بغض النظر عن كيفية تعريفها.

على سبيل المثال :

```jsx live
function learnJavaScript() {
  let summa = (a, b, c) => {
    return a + b + c
  } // Sum of 3 numbers

  return summa(1, 2, 3, 4, 5, 6, 7)
}
```

لن تتسبب الحجج الإضافية في حدوث خطأ ، ولكن بالطبع سيتم احتساب الثلاثة الأولى فقط.

### مفهوم ES6

![Idea](https://media.giphy.com/media/3o6Mbj2w67HnPQKgcE/giphy.gif)

بدءًا من معيار ES6 ، ظهر مفهوم مثل`... rest`- المعلمات المتبقية.

```jsx
let goFun = (...rest) => {
  // Algorithm
}
```

يمكن الإشارة إلى المعلمات المجانية بثلاث نقاط`...`. يعني حرفيا: "جمع المعلمات المتبقية ووضعها في مصفوفة."


على سبيل المثال ، دعنا نجمع كل المتغيرات في مصفوفة `args`:

```jsx live
function learnJavaScript() {
  let sumAll = (...args) => {
    // args — name of the array of passed arguments
    let sum = 0
    for (let arg of args) if (typeof arg === 'number') sum += arg // sum - will collect the sum of all numeric arguments
    return sum
  }
  return sumAll(1, 2, 3, 4, 5, 6, 7, 'React', 'Native')
}
```

الجواب بالفعل 28 ولا توجد أخطاء! حاول تغيير الوسيطات أو أبعاد المصفوفة.

### معلمات متعددة

يمكننا وضع المعلمات القليلة الأولى في المتغيرات, وجمع الباقي في مصفوفة.
هذا يعني أنه يمكنك ببساطة إدراج ملفات `... rest`, ولكن فقط بدلاً من المعلمة الأخيرة للوظيفة.

![paste](https://media.giphy.com/media/3o6ZtafpgSpvIaKhMI/giphy.gif)

```jsx
let goFun = (first, second, ...rest) => {
  // Algorithm
}
```

في المثال أدناه ، الأولين 2️⃣ ستصبح وسيطات الوظيفة الاسم الأول والأخير ، وستصبح الوسيطات الثالثة واللاحقة هي المصفوفة `titles [i]` :

```jsx live
function learnJavaScript() {
  let free = ''
  let showName = (firstName, lastName, ...titles) => {
    free = firstName + ' ' + lastName // First name + Last name
    return titles[0] + ' ' + titles[1]
  }
  // The rest of the parameters will go to the titles = ["React", "Native"] array
  // titles [0] // React
  // titles [1] // Native

  let result = showName('Julius', 'Caesar', 'React', 'Native')

  return free + ' or ' + result
}
```

### أخطاء محتملة

![error](https://media.giphy.com/media/xTiN0L7EW5trfOvEk0/giphy.gif)

يجب أن تكون المعلمات المتبقية في النهاية ، لذا لا يمكنك كتابة  أي شيء بعدها.
سيؤدي هذا إلى ظهور خطأ:

```jsx
function f(arg1, ...rest, arg2) {   // arg2 после ...rest ?
  // Mistake!
}
```

::: ملاحظة تذكر
`... rest` يجب أن يكون دائمًا أخيرًا.

:::

<!-- ### Опасный "arguments"

![dangerous](https://media.giphy.com/media/xT5LMAvRY92qUXj7dC/giphy.gif)

Все аргументы функции⚙️ находятся в псевдомассиве `arguments` под своими порядковыми номерами.

Но доступ через массив `arguments[]` можно найти только в старом коде . Не применяйте его!

:::note Внимание
Cтрелочные функции⚙️ не имеют `arguments[]` как и собственного `this.`
:::

Если мы обратимся к `arguments` из стрелочной функции⚙️, то получим аргументы внешней "классической" функции⚙️. Соответственно, для более удобной работы с аргументами лучше использовать только остаточные параметры `...rest`. -->

## عامل الانتشار `... انتشار`

![operators](https://media.giphy.com/media/3o6Mbfd5fQszubehmE/giphy.gif)

لقد تعلمنا كيفية الحصول على مصفوفة من قائمة معلمات ، لكن في بعض الأحيان تحتاج إلى القيام بالعكس - حشو المصفوفة في الوظيفة المسماة.

على سبيل المثال ، هناك وظيفة مضمنة⚙️ `Math.max`. تقوم بإرجاع أكبر رقم في القائمة:

```jsx live
function learnJavaScript() {
  return Math.max(3, 5, 1, 17, 14, 8, 2, 11)
}
```

### ليس بسيط جدا

![Index_finger](https://media.giphy.com/media/4ZcYCubFNk8AUHcZVw/giphy.gif)

لنفترض أن لدينا مجموعة من الأرقام `[3, 5, 1]`. كيف تتصل `Math.max` لذلك؟

لا يمكنك فقط إدراجها -`Math.max` تتوقع الحصول على قائمة أرقام ، وليس مصفوفة واحدة.

```jsx live
function learnJavaScript() {
  let arr = [3, 5, 1, 17, 14, 8, 2, 11]
  return Math.max(arr) // NaN - значение будет не определено
}
```

بالطبع يمكننا إدخال الأرقام يدويًا: `Math.max (arr[0], arr[1], ar[2]).`

لكن ، أولاً ، يبدو سيئًا ، وثانيًا ، لا نعرف دائمًا عدد الحجج الموجودة. يمكن أن يكون هناك الكثير منهم ، أو لا يوجد على الإطلاق.

### حدوث المعلمات

![Transform](https://media.giphy.com/media/xT4uQr9H3EDL7Ha2hq/giphy.gif)

ال`...spread` عامل سيساعدنا هنا. إنه مشابه للمعلمات المتبقية - يستخدم أيضًا `` ... '' ، لكنه يفعل العكس تمامًا.


عندما `...spread` يتم استخدام الوظيفة في استدعاء دالة ، فهي تحول كائن المصفوفة `arr` إلى قائمة وسيطات.

ل`Math.max` :

```jsx live
function learnJavaScript() {
  let arr = [3, 5, 1, 17, 14, 8, 2, 11]

  return Math.max(...arr) // the ... arr operator converts the array `arr` to an argument list
}
```

بالطريقة نفسها ، يمكننا تمرير العديد من العناصر التكرارية :

```jsx live
function learnJavaScript() {
  let arr1 = [1, 2, 34, 41]
  let arr2 = [8, 3, 18, 17]
  let arr3 = [2, 4, 16, 38]

  return 'Max = ' + Math.max(...arr1, ...arr2, ...arr3)
}
```

رائع! نهج مرن للغاية للبرمجة. يمكنك أيضًا دمج عامل الانتشار مع القيم العادية.

### دمج المصفوفات

![Merger](https://media.giphy.com/media/rytLWOErAX1F6/giphy.gif)

عامل الانتشار `... spread` يمكن أيضًا استخدامها لدمج المصفوفات:

```jsx live
function learnJavaScript() {
  let arr1 = [3, 5, 7]
  let arr2 = [4, 2, 8]

  let merged = [100, ...arr1, 500, ...arr2]
  let str = 'Массив: ' + merged

  return <b>{str}</b>
}
```

### التحويل إلى سلسلة

![Transform](https://media.giphy.com/media/RLVHPJJv7jY1q/giphy.gif)

ال`... spread` تعمل وظيفة المشغل مع أي كائن قابل للتكرار.

على سبيل المثال ، عامل الانتشار مناسب لتحويل سلسلة إلى مصفوفة من الأحرف:

```javascript
let str = 'Hey, Alex!'
let result = [...str]
```

![spread](/img/javascript/13.jpg)

دعونا نرى ما سيحدث. تحت غطاء المحرك ، يستخدم عامل الانتشار التكرارات للتكرار على العناصر. تماما مثل`for..of` يفعل.

ال`for..of` حلقة تتكرر عبر السلسلة كسلسلة من الأحرف ، لذا من` ... str` اتضح أن "P" و "p" و "و" in "و" e "و" t "...

يتم جمع الأحرف الناتجة في مصفوفة باستخدام التصريح القياسي للمصفوفة `[... str] .`

يمكننا أيضًا استخدام`Array.from` لهذه المهمة. كما أنه يحول متكررًا (مثل سلسلة نصية) إلى مصفوفة :

```javascript
let str = 'Hello'
Array.from(str) // "H", "e", "l", "l", "o"
// Array.from converts an iterable to an array
```

![spread](/img/javascript/14.jpg)

والنتيجة هي نفسها`[...str]`. لكن هناك فرق بين `Array.from(obj)` و `[...obj] `:

- `Array.from` يعمل مع كل من المصفوفات الزائفة والمتكررة.
- ال `... spread` يعمل المشغل `only` مع كائنات قابلة للتكرار.

لذلك، `Array.from` هي طريقة أكثر عمومية.

## مجموع

![Elipsis](https://media.giphy.com/media/UWXLULrP5KGDC/giphy.gif)

عندما نرى`"..."` في الكود ، يمكن أن تكون إما المعلمات المتبقية`...rest` أو عامل التمديد` ...spread`.

كيف نميزهم عن بعضهم البعض:

- إذا كان `...` موجودًا في نهاية قائمة وسيطات الدالة ، فهذه هي "المعلمات المتبقية". يقوم بجمع بقية الحجج غير المحددة وإنشاء مصفوفة منها.
- إذا حدث `...` في استدعاء دالة أو في مكان آخر ، فهو "عامل تمديد". يستخرج عناصر من مصفوفة لتهيئة الوظيفة.

من المفيد أن تتذكر:

- تُستخدم المعلمات المتبقية لإنشاء وظائف جديدة بعدد غير محدد من الوسائط.
- باستخدام معامل الانتشار ، يمكنك إدراج مصفوفة في دالة تعمل افتراضيًا مع قائمة عادية من الوسائط.

  "معًا ، تجعل هذه التركيبات من السهل تحويل مجموعات القيم من المصفوفات وإليها.

## مشاكل؟

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

اكتب ل[Discord](https://discord.gg/6GDAfXn) محادثة.

## أسئلة:
![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

إذا كان `... 'موجودًا في نهاية قائمة وسيطات الدالة ، فإننا نتعامل مع:

1. المعلمة المتبقية
2. مشغل التوسع
3. مؤشرات عشوائية

لإنشاء دالة بعدد غير محدد من الوسائط ، استخدم:

1. المعلمات المتبقية `...rest`
2. عامل الانتشار`...spread`
3. وظائف المكالمات الخارجية

يمكنك دمج صفيفين في صفيف واحد باستخدام:

1. مشغل التوسع
2. عامل التشغيل "Array.from"
3. المعلمة المتبقية

لفهم مقدار ما تعلمته في هذا الدرس ، قم بإجراء الاختبار في [mobile application](http://onelink.to/njhc95) من مدرستنا في هذا الموضوع.

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## الروابط

1. [MDN web doc. Spread syntax article](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/spread_syntax)
2. [Residual Parameters and the Spread Operator article](https://learn.javascript.ru/rest-parameters-spread-operator)
3. [The article "The spread and rest operator"](https://medium.com/@stasonmars/%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80-spread-%D0%B8-rest-%D0%BF%D0%B0%D1%80%D0%B0%D0%BC%D0%B5%D1%82%D1%80%D1%8B-%D0%B2-javascript-22eb33cb0825)

## المساهمون ✨

الشكر يعود إلى هؤلاء الأشخاص الرائعين ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/KoDim-React"><img src="https://avatars1.githubusercontent.com/u/72087863?v=4?s=200" width="200px " alt=""/><br /><sub><b>Dmitriy K.</b></sub></a><br /><a href="#mentoring-KoDim-React" title="Mentoring">  </a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px " alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

<!--
Например:
```jsx
function showName() {
  console.log( arguments.length )
  console.log( arguments[0] )
  console.log( arguments[1] )

  // Объект arguments можно перебирать
  // for (let arg of arguments) console.log(arg)
}

// Вывод: 2, Юлий, Цезарь
showName("Юлий", "Цезарь")

// Вывод: 1, Илья, undefined (второго аргумента нет)
showName("Илья")
```
Раньше в языке не было остаточных параметров, и получить все аргументы функции можно было только с помощью arguments. Этот способ всё ещё работает, мы можем найти его в старом коде.
Но у него есть один недостаток. Хотя arguments похож на массив, и его тоже можно перебирать, это всё же не массив. Он не поддерживает методы массивов, поэтому мы не можем, например, вызвать arguments.map(...).
К тому же, arguments всегда содержит все аргументы функции — мы не можем получить их часть. А остаточные параметры позволяют это сделать.
Соответственно, для более удобной работы с аргументами лучше использовать остаточные параметры.
-->
