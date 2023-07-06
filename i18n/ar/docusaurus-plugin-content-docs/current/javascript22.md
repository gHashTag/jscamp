---
id: javascript22
title: وظائف ذات ترتيب أعلى
sidebar_label: وظائف ذات ترتيب أعلى
---

![@serverSerrverlesskiy](/img/javascript/headers/21.jpg)

تسمح وظائف الترتيب الأعلى بأن يكون JavaScript مناسبًا لـ[functional programming](https://en.wikipedia.org/wiki/Higher-order_function).
تستخدم هذه الوظائف على نطاق واسع في JavaScript. إذا كنت قد قمت ببرمجتها في JavaScript ولو قليلاً ، فمن المحتمل أنك استخدمتها ، ربما دون أن تدرك ذلك.

لفهم هذا المفهوم تمامًا ، يجب أولاً فهم البرمجة الوظيفية ومفهوم وظائف الدرجة الأولى.


## ما هي البرمجة الوظيفية؟

> البرمجة الوظيفية هي فرع من الرياضيات المنفصلة ونموذج البرمجة ، حيث يتم تفسير عملية الحساب على أنها حساب قيم الوظائف بالمعنى الرياضي للأخير (على عكس الوظائف مثل الإجراءات الفرعية في البرمجة الإجرائية). [Wikipedia]

### وظائف من الدرجة الأولى

![First_class](https://media.giphy.com/media/l2Jecm1l0wnJ2kQDu/giphy.gif)

إذا كنت تتعلم JavaScript بالفعل ، فربما تكون قد سمعت أن JavaScript يعامل الدوال ⚙️ ككائنات من الدرجة الأولى. الوظائف في JavaScript هي كائنات ، تمامًا كما هو الحال في لغات البرمجة الوظيفية الأخرى.
في JavaScript ، تعتبر الوظائف نوعًا خاصًا من الكائنات. هؤلاء هم `Function` شاء. على سبيل المثال:

```jsx live
function learnJavaScript() {
  let greeting = () => 'Hello, World!'

  return greeting()
}
```

نحن نعرف الآن ما هي وظائف الدرجة الأولى. يمكنك البدء بوظائف ذات ترتيب أعلى.

## وظائف ذات ترتيب أعلى

![Higher](https://media.giphy.com/media/WS4yajVBkb3lIwDIKd/giphy.gif)

هذه هي الدوال - التي تأخذ دالة - كوسيطة أو عودة دالة كإخراج.

على سبيل المثال ، تم تضمين هذه الوظائف ذات الترتيب الأعلى في اللغة:`map()` `filter()` و`reduce()`

###مثال رقم 1. قم بتغيير الأرقام ". دفع"

![Edit_number](https://media.giphy.com/media/xT5LMMneIRG1UJquOI/giphy.gif)

لنفترض أن لدينا مجموعة من الأرقام. نريد إنشاء ملف   المصفوفة التي ستحتوي على القيم المضاعفة لأول واحد. دعونا نرى كيف يمكننا حل هذه المشكلة باستخدام دالة الترتيب الأعلى وبدونها.

#### بدون وظيفة ترتيب أعلى:

```jsx live
function learnJavaScript() {
  const arr1 = [1, 2, 3, 4]
  const arr2 = []

  for (let i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i] * 2) // the arr2 array grows in a loop
  }

  return arr2 // 2, 4, 6, 8 only without spaces
}
```

مع وظيفة الترتيب الأعلى `map`, خيار وحدة التحكم هو:

```jsx live
function learnJavaScript() {
  const arr1 = [1, 2, 3, 4]
  const arr2 = arr1.map(function (item) {
    // Old variant
    return item * 2 + ' '
  })
  return arr2
}
```

يمكننا كتابتها بشكل أقصر باستخدام صيغة "وظيفة السهم":

```jsx live
function learnJavaScript() {
  const arr1 = [1, 2, 3, 4, 5]
  const multTwo = item => item * 2 + ' '

  const arr2 = arr1.map(multTwo) // Algorithm in 1 line

  return arr2
}
```

### مثال# 2. القيم المحسوبة "خريطة"

![Math](https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif)

لنفترض أن لدينا مصفوفة تحتوي على سنوات ميلاد أشخاص مختلفين. نحتاج إلى إنشاء مصفوفة تخزن أعمارهم.

على سبيل المثال: بدون وظيفة ذات ترتيب أعلى (كلاسيكي - من خلال`for()` and `push()` الحلقات)

```jsx live
function learnJavaScript() {
  const birthYear = [1975, 1997, 2002, 1995, 1985]
  const ages = []
  for (let i = 0; i < birthYear.length; i++) {
    let ageNew = 2020 - birthYear[i] + ' ' // The current value of the new array
    ages.push(ageNew) // push the new value into the ages [] array
  }

  return ages // [ 45, 23, 18, 25, 35 ] only without spaces
}
```

مع وظيفة الترتيب الأعلى `map`:

```jsx live
function learnJavaScript() {
  const birthYear = [1975, 1997, 2002, 1995, 1985]
  let ages = birthYear.map(year => 2020 - year + ' ') // 1-line algorithm via arrow function
  return ages // [ 45, 23, 18, 25, 35 ]
}
```

نحن نعيد تحميل ملفات    مجموعة جديدة في سطر واحد من التعليمات البرمجية.

### مثال رقم 3. بفحص الشرط "()`

![Check](https://media.giphy.com/media/Rd6sn03ncIklmprvy6/giphy.gif)

لدينا مصفوفة تحتوي على كائنات ذات خصائص: الاسم والعمر. نحتاج إلى إنشاء - مصفوفة تحتوي فقط على البالغين (أي عمر أكبر من أو يساوي 18).

بدون وظيفة ذات ترتيب أعلى (كلاسيكية - من خلال`for ()` and `push ()` الحلقات):

```jsx live
function learnJavaScript() {
  const persons = [
    { name: 'Niki', age: 16 },
    { name: 'Mark', age: 18 },
    { name: 'John', age: 27 },
    { name: 'Jane', age: 14 },
    { name: 'Tony', age: 24 }
  ]

  const fullAge = []
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].age >= 18) {
      fullAge.push(persons[i])
    }
  }

  return fullAge.length // number of persons over 18 years old
}
```

مع وظيفة ذات ترتيب أعلى `filter` بشرط مدمج:

```jsx live
function learnJavaScript() {
  const persons = [
    { name: 'Niki', age: 34 },
    { name: 'Mark', age: 18 },
    { name: 'John', age: 27 },
    { name: 'Jane', age: 14 },
    { name: 'Tony', age: 24 }
  ]
  const fullAge = persons.filter(person => person.age >= 18) // Algorithm with a condition in 1 line

  return fullAge.length // number of persons over 18 years old
}
```

## إنشاء دالة الترتيب الأعلى الخاصة بك

![Create](https://media.giphy.com/media/3ohzdWsUVRcZC2L7Ms/giphy.gif)

حتى الآن ، نظرنا في الوظائف ذات الترتيب الأعلى المضمنة في اللغة. الآن دعونا ننشئ مثل هذه الوظيفة بأنفسنا
⚙️.
تخيل أن JavaScript لا يحتوي على ملف`map` طريقة. يمكننا كتابتها بأنفسنا عن طريق إنشاء دالة ذات رتبة أعلى.

لنفترض أن لدينا مصفوفة سلسلة نصية ونريد تحويلها إلى مصفوفة من الأرقام ، حيث يمثل كل عنصر طول العناصر من المصفوفة الأصلية.

```jsx live
function learnJavaScript() {
  // Source array
  const strArray = ['English', 'JavaScript', 'React', 'TypeScript', 'AWS']
  // higher order function mapForEach () takes a formal (hypothetical) function fn and a formal array arr
  let mapFor = (arr, fn) => {
    const newArray = []
    for (let i = 0; i < arr.length; i++) {
      newArray.push(fn(arr[i])) // We apply the hidden function fn () to each element
    }
    return newArray // Returning a new array
  }
  // The main conversion code - mapForEach() is called with specific parameter values
  const lenArray = mapFor(strArray, item => item.length + ' ')

  return 'Word length: ' + lenArray // [ 7, 10, 5, 10, 3 ]
}
```

في المثال أعلاه ، أنشأنا وظيفة الترتيب الأعلى الخاصة بنا `mapFor()`, الذي يأخذ مجموعة `arr` ووظيفة رد الاتصال`fn`. تتكرر هذه الوظيفة عبر هذه المجموعة وتستدعي وظيفة رد الاتصال`fn` داخل `newArray.push()` لكل تكرار ، حساب عدد الأحرف في كلمات المصفوفة ، يتم وصف خوارزمية الحساب الخاصة بها في شكل المتغير الثاني .

::: إعادة الاتصال علما
وظيفة رد الاتصال هي وظيفة يتم تمريرها إلى وظيفة أخرى كوسيطة ، والتي يتم استدعاؤها بعد ذلك عند الانتهاء من إجراء ما.

:::

ال `callback` وظيفة⚙️ `fn` يأخذ العنصر الحالي من المصفوفة ويعود طول العنصر الحالي الذي تم تخزينه الآن في`newArray`. بعد`For()` الحلقة تكتمل ، `newArray` إرجاع طول العناصر في `lenArray`.

<!-- Поэксперементируйте, используя стрелочные функции:

```jsx
function learnJavaScript() {
  let name = ''
  // Для наглядности функцию преобразования вынесем в отдельную переменную
  let say = secret => 'Hello, ' + secret + ' !' // Основной расчетный алгорим (можно сортировку встроить и многое другое)
  // userInput() - функция высшего порядка
  let userInput = fn => {
    // в качестве параметра функция, пока еще не известно какая (неизведанный алгоритм)
    name = 'Jane' // какое-либо действие
    return fn(name) // только теперь запускаем callback-функцию переданную в параметре с конкретным значением `name`
  }
  return userInput(say) // say - функция callback (обратного вызова), становиться ясно какая функция передается в качестве параметра без скобок
}
```

Обратите внимание на синтаксис  :

при передаче функции⚙️ say в качестве параметра скобки `()` не указываются, т.к. в параметре функция⚙️ не вызывается, а передается целиком. Функция⚙️ `say` является аргументом функции⚙️ `userInput().` -->

تذكر أن أي خوارزمية ، مهما كانت صغيرة ، تتكون من 3 مراحل:

- المرحلة 1 - تهيئة المتغيرات  والوظائف
- المرحلة 2 - وظيفة الرتبة الأعلى (المنطق)
- المرحلة 3 - اختتام الجواب.

<!-- Модернизированный пример:

```jsx live
function learnJavaScript() {
  // 1 этап - Инициализация переменных и функций
  let name = ''
  let say = secret => 'Твое имя содержит ' + secret.length + ' символа.'
  // 2 этап - Функция высшего порядка
  let userInput = fn => {
    name = 'Jane'
    return fn(name)
  }
  return userInput(say) // 3 этап - Ответ
}
``` -->

## استنتاج

<!-- ![The and](https://media.giphy.com/media/xT1XH3yj7ujmm2h40o/giphy.gif) -->

لقد تعلمنا ما هي الوظائف ذات الترتيب الأعلى وألقينا نظرة على العديد منها المضمنة بالفعل في اللغة . تعلمنا أن نخلقها بأنفسنا.

دون الخوض في التفاصيل ، وظائف ذات ترتيب أعلى⚙️ يمكن أن يقال على النحو التالي: هذه هي الوظائف⚙️ يمكن أن تأخذ دالة كوسيطة وحتى إرجاع دالة⚙️.

## مشاكل؟

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Write to [Discord](https://discord.gg/6GDAfXn) chat.

## أسئلة:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

وظائف الدرجة الأولى:

1. مرافق من الدرجة الأولى
2. مرافق من الدرجة الخامسة
3. مرافق من الدرجة الأولى

وظيفة الترتيب الأعلى:

1. تأخذ دالة كوسيطة أو تُرجع دالة كإخراج
2. تأخذ وظيفة كوسيطة فقط
3. إرجاع دالة فقط كناتج

وظيفة الترتيب الأعلى:

1. من غير الواقعي أن تصنع نفسك
2. يمكن استخدامها فقط من خلال طريقة مضمنة
3. يمكنك إنشاء نفسك

لفهم مقدار ما تعلمته في هذا الدرس ، قم بإجراء الاختبار في [mobile application](http://onelink.to/njhc95) من مدرستنا في هذا الموضوع.

[![EnglishMoji!](/img/logo/englishmoji.png)](https://link-to.app/xvh7Ush9kl)

## الروابط:

1. [Exploring Higher-Order Functions in JavaScript](https://medium.com/nuances-of-programming/%D0%B8%D0%B7%D1%83%D1%87%D0%B0%D0%B5%D0%BC-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8-%D0%B2%D1%8B%D1%81%D1%88%D0%B5%D0%B3%D0%BE-%D0%BF%D0%BE%D1%80%D1%8F%D0%B4%D0%BA%D0%B0-%D0%B2-javascript-c23daf53a5c0)
2. [Article "Higher-order functions in JavaScript"](https://habr.com/ru/post/261723/)
3. [Expressive Javascript. Article "Higher-order functions"](https://eloquent-javascript.karmazzin.ru/chapter5)
4. [Code for Teens: The Perfect Beginner's Guide to Programming, Volume 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)

## المساهمون✨

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

[![EnglishMoji!](/img/logo/englishmoji.png)](https://link-to.app/xvh7Ush9kl)

<!--
## Array.prototype.reduce
Метод `reduce` выполняет `callback-функцию` для `каждого элемента` вызываемого массива, что в результате приводит к одному выходному значению.

Метод reduce принимает два параметра:
1) reducer-функцию (callback)
2) и опционально initialValue.

Reducer-функция (callback) принимает 4 параметра: accumulator, currentValue, currentIndex, sourceArray.
Если параметр initialValue предусмотрен, тогда accumulator будет равен initialValue
, а currentValue равен первому элементу в массиве.
Если параметр initialValue не предусмотрен, тогда accumulator будет равен первому элементу массива, а currentValue – второму.
Пример №1
Допустим, нам нужно суммировать массив чисел:
С функцией высшего порядка reduce
const arr = [5, 7, 1, 8, 4]
const sum = arr.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue
})
// prints 25
console.log(sum)
Reducer-функция вызывается для каждого элемента массива, а результат возвращённый reducer хранится в accumulator . В currentValue содержится текущее значение массива. Конечный результат хранится в переменной sum .
Мы можем задать начальное значение этой функции:
const arr = [5, 7, 1, 8, 4]
const sum = arr.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue
}, 10)
// prints 35
console.log(sum)
Без функции высшего порядка
const arr = [5, 7, 1, 8, 4]
let sum = 0
for(let i = 0 ; i < arr.length ; i++) {
  sum = sum + arr[i]
}
// prints 25
console.log(sum)
Обратите внимание, как использование функции высшего порядка сделало наш код чище, лаконичнее и менее многословным.
-->
