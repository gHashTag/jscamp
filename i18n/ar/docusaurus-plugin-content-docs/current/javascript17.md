---
id: javascript17
title: المصفوفات
sidebar_label: المصفوفات
---

![@serverSerrverlesskiy](/img/javascript/headers/18.jpg)

لتخزين المجموعات المرتبة ، توجد بنية بيانات خاصة تسمى "مصفوفة".

![Storage](https://media.giphy.com/media/3orif6FORJ98Z11xzq/giphy.gif)

`Array` - مجموعة مرتبة من البيانات ، تحتوي على العناصر الأولى والثانية والثالثة ، إلخ. على سبيل المثال ، نحتاج إليها لتخزينها قائمة بشيء ما: المستخدمون ، المنتجات ، عناصر الموقع ، إلخ.

## خلق

![create](https://media.giphy.com/media/3oEduXdm2gjnrsJBOo/giphy.gif)

يوجد 2️⃣ خيارات للإنشاء مصفوفة فارغة:

```javascript
let arr = new Array(5)
// new Array(5) - creates an array with no elements (which cannot be accessed just like that), but with a given length.
let arr = []
```

البديل الثاني2️⃣ بناء الجملة   دائمًا تقريبًا. بين قوسين ، يمكننا الإشارة إلى القيم الأولية للعناصر:


```jsx live
function learnJavaScript() {
  let fruits = ['Apple', 'Orange', 'Plum']

  return fruits.toString()
}
```

يتم ترقيم عناصر المصفوفة بدءًا من الصفر0️⃣.

يمكننا الحصول على عنصر بتحديد رقمه بين قوسين مربعين :

```jsx live
function learnJavaScript() {
  let fruits = ['Apple', 'Orange', 'Plum']

  return fruits[0]
}
```

يمكننا استبدال  جزء:

```javascript
fruits[2] = 'Plum' // now ["Apple", "Orange", "Plum"]
```

... Or add    a new one to the existing array :

```jsx live
function learnJavaScript() {
  let fruits = ['Apple', 'Orange', 'Plum']
  fruits[2] = 'Pear'
  fruits[3] = 'Lemon' // теперь ["Apple", "Orange", "Pear", "Lemon"]

  return fruits
}
```

## الطول

يتم تضمين العدد الإجمالي للعناصر في المصفوفة في`.length` منشأه:

```jsx live
function learnJavaScript() {
  let fruits = ['Apple', 'Orange', 'Plum']

  return fruits.length
}
```

يتم تحديث خاصية `length` تلقائيًا عندما تتغير المصفوفة. لكي نكون دقيقين ، ليس عدد العناصر في المصفوفة ، بل هو أكبر فهرس رقمي زائد واحد.

![Update](https://media.giphy.com/media/FP47IFqWyXfdKYU6VG/giphy.gif)

على سبيل المثال ، العنصر الحقيقي الوحيد الذي يحتوي على فهرس كبير يعطي أكبر طول ممكن للصفيف :

```jsx live
function learnJavaScript() {
  let fruits = []
  fruits[155] = 'Apple'

  return fruits.length // 156
}
```

لاحظ أننا عادة لا نستخدم المصفوفات بهذه الطريقة.

هناك حقيقة أخرى مثيرة للاهتمام حول خاصية "length" وهي إمكانية الكتابة فوقها.

إذا زدنا يدويا➕ لا شيء مثير للاهتمام يحدث. ولكن إذا قللناها ، ستصبح المصفوفة أقصر. هذه العملية لا رجوع عنها ، كما يمكننا أن نفهم من المثال:

```jsx live
function learnJavaScript() {
  let arr = [1, 2, 3, 4, 5]

  arr.length = 2 // shorten to two elements
  //console.log( arr )  // [1, 2]

  arr.length = 5 // return length as it was
  //console.log( arr[3] )  // undefined: values are not restored!

  return 'The real array was shortened:' + arr
}
```

لذا فإن أبسط طريقة لمسح المصفوفة هي باستخدام `arr.length = 0`.

## أنواع العناصر

![Storage](https://media.giphy.com/media/2sYaePC3iVWYBNxaVj/giphy.gif)

يمكن أن تخزن المصفوفة عناصر من أي نوع - رقم أو قيمة منطقية أو سلاسل أو كائنات أو وظائف كاملة:

على سبيل المثال :

```jsx live
function learnJavaScript() {
  let arr = [
    'Apple',
    { name: 'Nikita' },
    true,
    function () {
      return 'Hello'
    }
  ]
  // get the element with index 1 {object} and then read its property
  let x = arr[1].name // name Nikita
  // get the element with index 3 (function) and execute it
  let result1 = arr[3] // The function itself
  let result2 = arr[3]() // 'Hello'

  return 'Value of 4th element at 3rd index:' + result2
  // + '. The function itself: '+ result1
}
```

ملحوظة `result1 = arr [3]` تحتوي على نص الوظيفة ، و "result2 = arr [3] ()` the result of the executed function is `() `نحن نديرها.

## طرق "دفع / فرقعة"

![binarycode](https://media.giphy.com/media/fV0oSDsZ4UgdW/giphy.gif)

`Stack` هو نوع من استخدام المصفوفات كهياكل بيانات.

انها تدعم اثنين 2️⃣ أنواع العمليات:

- `push` يضيف أ➕ عنصر حتى النهاية.

![Add](https://media.giphy.com/media/Yqo5mjWTLGlVOIP8Dc/giphy.gif)

- `pop` يزيل ➖ العنصر الأخير.

![Delete](https://media.giphy.com/media/VD4Bt6FyYWcWj0LzDK/giphy.gif)

وبالتالي ، يتم دائمًا إضافة عناصر جديدة أو إزالتها من "النهاية".

عادةً ما يكون أحد الأمثلة على المكدس عبارة عن هرم: توضع حلقات جديدة في الأعلى وتؤخذ أيضًا من الأعلى.

`Queue` هو أحد الاستخدامات الأكثر شيوعًا للمصفوفة. في علوم الكمبيوتر ، هذه مجموعة مرتبة من العناصر

## طرق العمل مع نهاية المصفوفة:

### يدفع

![Add to](https://media.giphy.com/media/21ODeWspDCgZNAoCIp/giphy.gif)

يضيف ان ➕ عنصر في نهاية المصفوفة :

```jsx live
function learnJavaScript() {
  let fruits = ['Apple', 'Orange']

  fruits.push('Pear')

  return 'Array: ' + fruits // Apple, Orange, Pear
}
```

### البوب

![Delete](https://media.giphy.com/media/26ybwwiZmci3DJdYs/giphy.gif)

يزيل ➖ آخر عنصر من المصفوفة ويعيده:

```jsx live
function learnJavaScript() {
  let fruits = ['Apple', 'Orange', 'Pear']

  let delFruits = fruits.pop() // remove the "Pear" and return it to the delFruits variable

  return 'Removed item = ' + delFruits + '. Array left: ' + fruits // Apple, Orange
}
```

## طرق العمل مع بداية المصفوفة:

![start](https://media.giphy.com/media/QJvwBSGaoc4eI/giphy.gif)

### تحول

يزيل ➖ الأول من المصفوفة ويعيده :

![delete](https://media.giphy.com/media/4Z1XJumqDgvI9b1VZJ/giphy.gif)

```jsx live
function learnJavaScript() {
  let fruits = ['Apple', 'Orange', 'Pear']

  fruits.shift() // remove the Apple

  return fruits
}
```

### نزل

يضيف ان➕ عنصر في بداية المصفوفة:

![Plus](https://media.giphy.com/media/LgC9OQ53v5mFi/giphy.gif)

```jsx live
function learnJavaScript() {
  let fruits = ['Apple', 'Orange', 'Pear']

  fruits.unshift('Apricot')

  return fruits
}
```

يمكن أن تضيف أساليب "push" و "unshift" ➕ عدة عناصر في وقت واحد :

```jsx live
function learnJavaScript() {
  let fruits = ['Apple']

  fruits.push('Orange', 'Pear')
  fruits.unshift('Pineapple', 'Lemon')

  return 'In an array ' + fruits.length + ' elements. ' + ' Array: ' + fruits // ["Pineapple", "Lemon", "Apple", "Orange", "Pear"]
}
```

## المصفوفة الداخلية

![cupboard](https://media.giphy.com/media/b90TnygrKqYqk/giphy.gif)

المصفوفة هي نوع خاص من الأشياء. الأقواس المربعة المستخدمة للوصول إلى خاصية arr [0] هي أساسًا الصيغة المعتادة للوصول إلى المفتاح ، مثل obj `[key]` ، حيث يكون obj arr والمفتاح هو فهرس رقمي.

تقوم المصفوفات بتوسيع الكائنات لأنها توفر طرقًا خاصة للعمل مع مجموعات البيانات المرتبة ، بالإضافة إلى خاصية length. "لكنهم لا يزالون قائمين على منشأة.

ضع في اعتبارك أنه في JavaScript ، المصفوفة هي كائن وبالتالي تتصرف ككائن.

على سبيل المثال ، يتم نسخ المصفوفة حسب المرجع:

```jsx live
function learnJavaScript() {
  let fruits = ['Lemon']

  let copy = fruits // copied by reference (two variables refer to the same array)

  copy.push('Pear') // arrays are changed by reference with one command

  return '1 array:' + fruits + '2 array:' + copy // Lemon, Pear - now two elements
}
```

ما يجعل المصفوفات مميزة حقًا هو تمثيلها الداخلي. يحاول محرك JavaScript تخزين عناصر المصفوفة في منطقة متجاورة من الذاكرة ، واحدة تلو الأخرى. هناك تحسينات أخرى تجعل المصفوفات سريعة جدًا.

لكنهم جميعًا يصبحون غير فعالين إذا توقفنا عن العمل مع مصفوفة باعتبارها "مجموعة منظمة من البيانات" وبدأنا استخدامها ككائن عادي.

على سبيل المثال ، يمكننا تقنيًا القيام بما يلي:

```javascript
let fruits = [] // create an empty array

fruits[99999] = 5 // create a property with a redundant index much larger than the required array length

fruits.age = 25 // create a property with an arbitrary name
```

هذا ممكن لأن المصفوفة مبنية على كائن. يمكننا تعيين أي خصائص لها.

::: note احتمال إساءة استخدام مصفوفة!

- إضافة خاصية غير رقمية (اختبار الفهرس) ، على سبيل المثال: arr.test = 5
- إنشاء "ثقوب" ، على سبيل المثال: إضافة arr [0] ، ثم arr [1000] (لا يوجد شيء بينهما)
- تعبئة المصفوفة بترتيب عكسي ، على سبيل المثال: arr [1000] ، arr [999] ، إلخ.

:::

ضع في اعتبارك المصفوفة كهيكل خاص يسمح لك بالعمل مع البيانات المرتبة. إذا كنت بحاجة إلى مفاتيح عشوائية ، فمن الممكن تمامًا أن يكون الكائن العادي {} أكثر ملاءمة.

## كفاءة

![Fast](https://media.giphy.com/media/3oriNYQX2lC6dfW2Ji/giphy.gif)

طرق الدفع / الفرقعة سريعة ، وطرق التغيير / إلغاء التغيير بطيئة.

لماذا يكون العمل مع نهاية المصفوفة أسرع من العمل مع بدايته؟ دعونا نرى ما يحدث في وقت التشغيل:

```javascript
fruits.shift() // remove the first element from the beginning
```

لا يكفي مجرد انتزاع وإزالة العنصر 0. تحتاج أيضًا إلى إعادة ترقيم باقي العناصر.

يجب أن تقوم عملية التحول بثلاثة أشياء:

- إزالة العنصر بالفهرس 0

![Delete](https://media.giphy.com/media/VIzs0jgs8KmgVeTknN/giphy.gif)

- انقل جميع العناصر إلى اليسار ، وأعد ترقيمها ، واستبدل "1" بـ "0" ، و "2" بـ "1" ، إلخ.

![Move](https://media.giphy.com/media/jSQcEjcwG53WooptHz/giphy.gif)

- قم بتحديث ملف`length` منشأه

كلما زاد عدد العناصر التي تحتوي عليها المصفوفة ، كلما طالت مدة نقلها ، زادت عمليات الذاكرة.

لكن ماذا عن إزالة البوب؟ لا يحتاج إلى تحريك أي شيء. لإزالة عنصر في نهاية مصفوفة ، تقوم طريقة pop بمسح الفهرس وتقليل الطول. تبقى العناصر المتبقية بنفس المؤشرات.

```javascript
fruits.pop() // remove one element from the end
```

طريقة البوب لا تحتاج إلى النقل. هذا هو السبب في أنها تعمل بسرعة كبيرة.

ال `push` الطريقة تعمل بنفس الطريقة.

## التكرار على العناصر

![Object](https://media.giphy.com/media/26gs9kSN6d5PxSsQU/giphy.gif)

إحدى أقدم الطرق للتكرار على عناصر المصفوفة هي ملف`for ()` حلقة فوق المؤشرات الرقمية:

```jsx live
// prettier-ignore
function learnJavaScript() {
   let result = ''
   let arr = ['Apple', 'Orange', 'Kiwi']

   for (let i = 0; i < arr.length; i++) // iterate over elements through for ()
   result += arr[i] + ', '

   return result // Apple, Orange, Kiwi
}
```

ولكن يمكن استخدام إصدار آخر من الحلقة للمصفوفات ،`for..of` :

```jsx live
function learnJavaScript() {
  let result = ''
  let fruits = ['Apple', 'Orange', 'Plum']

  for (let fruit of fruits) {
    // iterate over values through `for..of`
    result += fruit + ', '
  }
  return result // Apple, Orange, Plum
}
```

ال `for..of` الحلقة لا توفر الوصول إلى رقم العنصر الحالي ، فقط قيمته ، ولكن في معظم الحالات يكون هذا أكثر من كافٍ ، كما أنه أقصر.

<!-- ## Псевдомассивы

![Spiderman](https://media.giphy.com/media/l36kU80xPf0ojG0Erg/giphy.gif)

В браузере и других программных средах также существуют так называемые "псевдомассивы" – объекты, которые выглядят, как массив. То есть, у них есть свойство `length` и индексы, но они также могут иметь дополнительные нечисловые свойства и методы, которые нам обычно не нужны. Тем не менее, цикл `for..in` выведет и их. Поэтому, если нам приходится иметь дело с объектами, похожими на массив, такие "лишние" свойства могут стать проблемой.

Технически, так как массив является объектом, можно использовать и вариант `for..in` для правильного массива  :

```jsx live
function learnJavaScript() {
  let result = ''
  let arr = ['Яблоко', 'Апельсин', 'Груша', 'Лимон']

  for (let key in arr) {
    // проходит по элементам через `for..in`
    result += arr[key] + ' '
  }
  return result // Яблоко, Апельсин, Груша, Лимон
}
```

Цикл `for..in` оптимизирован под произвольные объекты, не массивы, и поэтому в 10-100 раз медленнее. Увеличение ➕ скорости выполнения может стать проблемой.

В целом, не следует использовать цикл `for..in` для массивов. Так же существуют скрытые недостатки этого способа:

- цикл `for..in` выполняет перебор всех свойств объекта, а не только цифровых. -->

## المصفوفات متعددة الأبعاد

![Matryoschka](https://media.giphy.com/media/XuPaGVKyJ6eyI/giphy.gif)

يمكن أن تحتوي المصفوفات على عناصر هي أيضًا صفائف. يمكن استخدام هذا لإنشاء مصفوفات متعددة الأبعاد ، على سبيل المثال ، لتخزينها  المصفوفات:

```jsx live
function learnJavaScript() {
  let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]

  return matrix[1][1] // 5, central element
}
```

## مجموع

![remember](https://media.giphy.com/media/l4pTfqyI6TCjUW4Yo/giphy.gif)

المصفوفة هي نوع خاص من الكائنات مصممة للعمل مع مجموعة مرتبة من العناصر.

إعلان:

```javascript
// square brackets (usually)
let arr = [item1, item2 ...]

// new Array (very rare)
let arr = new Array (item1, item2 ...)
```

الاتصال `new Array (number)` ينشئ مصفوفة بالطول المحدد ، لكن بدون عناصر.

تعكس خاصية length طول المصفوفة.

يمكننا استخدام المصفوفة كمصفوفة deque باستخدام العمليات التالية:

- `push (... items)` يضيف ➕ عناصر إلى نهاية المصفوفة.
- `pop ()` يزيل ➖عنصر في نهاية المصفوفة وإعادته.
- `shift ()` يزيل ➖ العنصر في بداية المصفوفة وإعادته.
- `unshift (... items)` يضيف ➕ عناصر إلى بداية المصفوفة.

لتكرار عناصر المصفوفة:

- `for (let i = 0 i < arr.length i ++)` - يعمل بشكل أسرع ومتوافق مع المتصفحات القديمة.
- `for (let item of arr)` - النحو الحديث   فقط لقيم العناصر (لا يمكن الوصول إلى المؤشرات).
- `for (let i in arr)` - لا تستخدم أبدا للمصفوفات!

## مشاكل؟

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

اكتب ل[Discord](https://discord.gg/6GDAfXn) محادثة.

## أسئلة:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

المصفوفة هي ...

1. نوع فرعي من الكائنات مع "جمع مرتب للبيانات"
2. الوظيفة الداخلية
3. نوع فرعي من الكائنات مع "جمع بيانات غير مرتب"

يتم إنشاء مصفوفة فارغة:

1. `let arr1 = []`
2. `let arr2 = {}`
3. `let arr3 = ()`

يمكن تحديد طول المصفوفة بواسطة الخاصية:

1. `pop ()`
2. `push ()`
3. `length`

يمكن للمصفوفة تخزين العناصر:

1. أي نوع
2. رقمي
3. سلسلة

إضافة عنصر في نهاية المصفوفة:

1. `push () `
2. `pop () `
3. `shift () `

إزالة عنصر في بداية المصفوفة:

1. `pop () `
2. `shift () `
3. `unshift () `

لفهم مقدار ما تعلمته في هذا الدرس ، قم بإجراء الاختبار على [تطبيق الهاتف المحمول] (http://onelink.to/njhc95) الخاص بمدرستنا حول هذا الموضوع.

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## الروابط

1. [Article "Arrays"](https://learn.javascript.ru/array)
2. [MDN web doc. Article "Arrays"](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array)
3. [JavaScript Arrays](https://basicweb.ru/javascript/js_array.php)
4. [Code for Teens: The Perfect Beginner's Guide to Programming, Volume 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)

## المساهمون✨

الشكر يعود إلى هؤلاء الأشخاص الرائعين([emoji key](https://allcontributors.org/docs/en/emoji-key)):

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
### toString
Массивы по-своему реализуют метод toString, который возвращает список элементов, разделённых запятыми.

Например:
```javascript
let arr = [1, 2, 3]

console.log( arr )  // 1,2,3
console.log( String(arr) === '1,2,3' )  // true
```

Давайте теперь попробуем следующее:
```javascript
console.log( [] + 1 )  // "1"
console.log( [1] + 1 )  // "11"
console.log( [1,2] + 1 )  // "1,21"
```

Массивы не имеют ни Symbol.toPrimitive, ни функционирующего valueOf, они реализуют только преобразование toString, таким образом, здесь [] становится пустой строкой, [1] становится "1", а [1,2] становится "1,2".

Когда бинарный оператор плюс "+" добавляет что-либо к строке, он тоже преобразует это в строку, таким образом:
```javascript
console.log( "" + 1 )  // "1"
console.log( "1" + 1 )  // "11"
console.log( "1,2" + 1 )  // "1,21"
```
-->
