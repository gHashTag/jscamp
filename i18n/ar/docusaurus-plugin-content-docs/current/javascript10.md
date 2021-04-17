---
id: javascript10
title: شاء
sidebar_label: شاء
---

![@serverSerrverlesskiy](/img/javascript/headers/11.jpg)

الأشياء مثل خزانة📦 لتخزين ونقل أنواع أخرى من البيانات.
تم تصميم JavaScript حول نموذج بسيط. يعتمد المفهوم على أشياء بسيطة. الكائن عبارة عن مجموعة من الخصائص ، وتتكون كل خاصية من اسم (مفتاح) وقيمة مرتبطة بهذا الاسم. يمكن أن تكون قيمة الخاصية دالة ، والتي يمكن تسميتها طريقة لكائن ، أو أي نوع آخر.

![Object](https://media.giphy.com/media/xTiTnFEfyt0vqhQzDi/giphy.gif)

في هذه المقالة ، سنغطي أهم الخصائص الأساسية لكائنات JavaScript ، وإنشاء الخصائص وتعديلها وتعدادها.

الكائن في JavaScript عبارة عن مصفوفة ارتباطية بسيطة أو ، بعبارة أخرى ، "تجزئة". يخزن أي مفتاح: مطابقات القيمة وله عدة طرق قياسية.

الكائنات في JavaScript ، مثل الكائنات في الحياة الواقعية (شخص👨, حافلة ، مبنى ، إلخ) لها عدة أسماء (مفتاح) المعلمات (العمر والاسم ولون الشعر والحالة) بقيم محددة (15, John, black, 'true') ✅:

```javascript
let obj = {
  age: 15,
  name: 'John',
  color: 'black',
  student: true
}
```

طريقة الكائن في JavaScript هي ببساطة دالة تضاف إلى مصفوفة ترابطية.

```jsx live
function learnJavaScript() {
  let obj = {
    // properties: values
    age: 15,
    name: 'John',
    // method: function
    say: () => 'Hello!'
  }
  return obj.say()
}
```

### خلق الكائن

![Object](https://media.giphy.com/media/2YaKpvYQEcl1WuJJTl/giphy.gif)

في الكمبيوتر🖥️ يمكننا تمثيل`object` كخزانة بخصائص الأسماء(`access keys`) وقعت عليه. داخل الخزانة📦 أدراج🧰 - البيانات (معلومات محددة) وحتى الأشياء الأصغر ، قياسا على الأشياء. من السهل العثور على أو حذف أو إضافة (كتابة) قيمة جديدة إليها بواسطة "المفتاح".

![obj01](/img/javascript/12/01.png)

هذان خياران 2️⃣ للإنشاء🏗️ كائن فارغ:

```javascript
// equivalent records
let obj = {}
let person = new Object()
```

نادرًا ما يتم استخدام الخيار الثاني في الممارسة.

![obj00](/img/javascript/12/00.png)

## الخلق المتقدم

![Extended](https://media.giphy.com/media/2XflxzlJfoSDycf3BBu/giphy.gif)

يمكن تحديد الخصائص مباشرة عند إنشاء كائن ، من خلال قائمة الأقواس المربعة مثل {..., `key: value,` ...} وإنشاء كائنات معقدة:

```jsx live
function learnJavaScript() {
  const obj = {
    age: 15,
    name: 'John',
    color: 'black',
    passport: {
      serial: 5721,
      number: 258963,
      date: '27.10.2015'
    },
    student: true
  }

  return obj.passport.date
}
```

المخلوق🏗️ يحتوي الكائن على خمس خصائص ذات قيم محددة ، أحدها بيانات جواز السفر ، وهو كائن مدمج. لاحظ كيف يتم استدعاء الخصائص أو الأساليب البعيدة للكائن. حاول إعادة رقم جواز سفرك.

## إضافة الخصائص

![Adding](https://media.giphy.com/media/3CZ2iGe1ByKfhZxaD7/giphy.gif)

هنالك اثنان 2️⃣ بناء الجملة لإضافة خصائص إلى كائن. 1️⃣ الأول فترة ، والثاني أقواس مربعة:

```javascript
// equivalent records
obj.age = 15
obj['age'] = 15
```

```jsx live
function learnJavaScript() {
  let obj = {
    name: 'John'
  }

  obj.age = 15

  return obj.age
}
```

تستخدم الأقواس المربعة بشكل أساسي عندما يكون ملف `properties' name is in a`متغير` 🔔:

```javascript
let nameProp = 'age'
obj[nameProp] = 15
```

هنا ، من خلال المتغير 🔔 `nameProp`، قمنا بتعيين اسم العقار`"age"`, وهو المفتاح في المصفوفة الترابطية التي تحتوي على` value 15`.

```jsx live
function learnJavaScript() {
  let obj = {
    name: 'John'
  }

  let nameProp = 'age'
  obj[nameProp] = 15

  return obj.age
}
```

## الوصول إلى الخصائص

![Door](https://media.giphy.com/media/l378znZcUM7b6VDyM/giphy.gif)

يتم الوصول إلى العقار عن طريق الوصول إليه 👇:

```jsx live
function learnJavaScript() {
  let obj = {} // object is empty
  obj.age = 17 // equivalent to obj ['age'] = 17 or immediately obj = {age: 17}

  let result1 = obj.age // Option 1
  let result2 = obj['age'] // Option 2

  return result1 + 'or' + result2
}
```

إذا لم يكن للكائن مثل هذه الخاصية ، تكون النتيجة `undefined`.تحقق من ذلك في وحدة تحكم المتصفح الخاص بك.

```javascrript
let obj = {}
obj.nokey
```

![nokey](/img/javascript/15.jpg)

لن يكون هناك أي خطأ🙅‍♂️ عند الوصول إلى عقار غير موجود ، القيمة الخاصة `undefined` سيعود ببساطة. إذا لم يكن هناك `return` الكلمة الأساسية داخل الوظيفة ، ثم ` undefined` ستعود القيمة أيضًا - عدم وجود شيء ما.

<!-- ## Проверка глобальной переменной

![Planet](https://media.giphy.com/media/LW5vBvAb48Oe9OoEKT/giphy.gif)

В JavaScript нельзя проверить существование глобальной переменной 🔔 простым `if(проверяемаяПеременная)`:

```javascript
    if (x) { ... }
```

Если `x` не определен, то конструкция if(x) вызовет `ошибку`.

Распространенное решение - использовать `typeof()`:

```javascript
    if (typeof(x) != 'undefined') { ... }  // или typeof(x)
``` -->

<!--
Однако зная, что глобальная переменная в Javascript - всего лишь свойство объекта `window` - мы можем записать проще:

```javascript
    if (window.x) { ... }   // правильный аналог if(x)
    // или
    if (window.x !== undefined) // аналог typeof x ..
```
-->

<!-- :::note Cвойства объектов
Все свойства объектов - public (общественные), т.е при определении свойства никак нельзя ограничить доступ к свойству.
:::

В JavaScript есть специальные способы для создания🏗️ `private` свойств, связанные с `замыканиями`. Они рассмотрены вместе с наследованием объектов далее по курсу. -->

## إزالة الخصائص

![Delete](https://media.giphy.com/media/5xaOcLwEvFOizxHVyVy/giphy.gif)

يحذف ➖ عامل تشغيل الخاصية `delete`. حاول إزالة رقم جواز السفر من المثال السابق:

قم بإنشاء الكائن من المثال السابق في وحدة التحكم.

```javascript
const obj = {
  age: 15,
  name: 'John',
  color: 'black',
  passport: {
    serial: 5721,
    number: 258963,
    date: '27.10.2015'
  },
  student: true
}
```

الآن قم بإزالة الملف المتداخل `passport` موضوع

```javascript
delete obj.passport
```

الآن إذا أشرت إليها ، فستكون النتيجة`undefined`

```javascript
obj.passport
```

![delete obj](/img/javascript/16.jpg)

## طرق الكائن

![Description](https://media.giphy.com/media/3ohzAqLk7azQ0O6RvW/giphy.gif)

كما هو الحال مع اللغات الأخرى👅, كائنات جافا سكريبت لها `methods`.

على سبيل المثال ، لنقم بإنشاء ملف `sport` الكائن على الفور مع` run` طريقة:

```jsx live
function learnJavaScript() {
  let sport = {
    run: n => 'John' + 'ran' + n + 'meters!'
  }

  return sport.run(300)
}
```

### مضيفا طريقة

![Add](https://media.giphy.com/media/5ns6077LTlGACuwRQR/giphy.gif)

تعد إضافة طريقة إلى كائن موجود أمرًا بسيطًا ، فقم بتعيين الوظيفة ⚙️ `function (n) {...}` الى `sport.run` منشأه.

```jsx live
function learnJavaScript() {
  let sport = {}

  sport.run = n => 'The athlete ran' + n + 'meters and it was' + 'Nikita'

  return sport.run(350)
}
```

<!-- :::note Обратите внимание
Очень часто методы используют в своих расчетах свойства своего же объекта.
::: -->

هذا لا يتعلق بالفئات ، والتشكيل ، وما شابه. بسيط - يمكنك إضافة طريقة جديدة أو حذف طريقة موجودة إلى أي كائن في أي وقت.
<!--
```jsx live
function learnJavaScript() {
  var sport = {
    name: 'Nikita',
    age: 18
  }

  sport.run = (n, str) => {
    if (str === 'men') return 'Спортсмен пробежал ' + n + ' метров и это был ' + sport.name
    if (str === 'women') return 'Спортсменка пробежала ' + n + ' метров и это была ' + sport.name
    if (str !== 'men' || str !== 'women') return 'Человек пробежал ' + n + ' метров.'
  }

  return sport.run(350, 'women')
}
```

Подумайте, чем можно заменить множественный `if()`. JavaScript - очень динамический язык👅. -->

## التكرار من خلال خصائص الكائن

![enumeration](https://media.giphy.com/media/h5FIFDs6rXLpWlWWZJ/giphy.gif)

للتكرار على جميع خصائص الكائن ، يوجد نوع خاص من `for .. in` يستخدم البناء:

```javascript
for(let key in obj) {
   // key - property name
   // obj [key] - property value
  ...
}
```

For example 👇:

```jsx live
function learnJavaScript() {
  let result = ''

  const obj = {
    age: 15,
    b: 'true',
    color: 'red'
  }

  for (let key in obj) {
    result += key + ':' + obj[key] + ' '
  }

  return result
}
```

وسرا ، بصراحة ، أي متغير تقريبًا🔔 هو كائن صغير في بيئة جافا سكريبت. لذا ، لا تخف من استخدامها.

## مشاكل؟

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

اكتب ل[Discord](https://discord.gg/6GDAfXn) محادثة.

## أسئلة:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

يتم إنشاء كائن فارغ باستخدام الأمر:

1. `let obj = {}`
2. `function obj()`
3. `let x = 10`

تتطابق مخازن الكائن مع:

1. المفتاح: القيمة
2. الاسم: اللقب
3. المتغير = القيمة

بناء الجملة لتعيين قيمة لمفتاح معين (خاصية):

1. `color () = "green" `
2. `obj.color =" red "`
3. `function color () =>" yellow "`

طريقة الكائن في JavaScript هي

1. مجرد وظيفة مضافة إلى مجموعة ترابطية
2. وظيفة خارجية
3. وصف متغير خارج الكائن

التكرار من خلال خصائص الكائن

1. `for (let i = 0; i <= 100; i ++) {sum + = i} `
2. `for (let key in obj) {}`
3. `while (condition) {} `

لفهم مقدار ما تعلمته في هذا الدرس ، قم بإجراء الاختبار في [mobile application](http://onelink.to/njhc95) من مدرستنا في هذا الموضوع.

![Sumerian school](/img/app.jpg)

## الروابط

1. [MDN web doc. Developer.mozilla.org - Статья "Типы данных JavaScript и структуры данных"](https://developer.mozilla.org/ru/docs/Web/JavaScript/Data_structures)
2. [MDN web doc. Developer.mozilla.org - Статья "Инициализация объектов"](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Object_initialize)
3. [Статья "Object Types"](https://www.javascript.express/types/object_types)
4. [Статья "Объекты", сайт Learn.javascript.ru](https://learn.javascript.ru/object)
5. [Code for Teens: The Perfect Beginner's Guide to Programming, Volume 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)

## ✨المساهمون

الشكر يعود إلى هؤلاء الأشخاص الرائعين ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/KoDim-React"><img src="https://avatars1.githubusercontent.com/u/72087863?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy K.</b></sub></a><br /><a href="#mentoring-KoDim-React" title="Mentoring">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)

<!--

<!--
Это уже выходит за рамки текущей статьи, но вообще - существует еще одна форма перебора свойств, которая более надежна, особенно если используется библиотека типа prototype.

```javascript
for (prop in object) {
  if (!object.hasOwnProperty(prop)) continue
  //...
}
```
Эта форма отфильтровывает свойства, которые принадлежат не самому объекту, а его прототипу. Поэтому она работает, даже если в прототип Object добавлены новые свойства.

Более элегантный вариант записи:

```javascript
for (prop in object)
  if (object.hasOwnProperty(prop)) {
    //...
  }
```

### Доступ к объекту из метода

Обычно хочется, чтобы метод не просто вызывался из объекта, но имел доступ к самому объекту, мог менять находящиеся в нем данные.

Для этого используется ключевое слово this:

В отличие от многих языков, this никак не привязано к объекту, а обозначает просто объект, вызвавший эту функцию.
Например,

```javascript
function thisObj() {
  let vasya = { name: 'Вася' }
  let petya = { name: 'Петя' }

  let sayName = function () {
    console.log('Я - ' + (this.name ? this.name : 'безымянный'))
  }
  vasya.sayName = sayName

  // один и тот же метод в двух объектах
  petya.sayName = vasya.sayName

  // тут - this будет petya
  petya.sayName() // Я - Петя

  // тут - this будет vasya
  vasya.sayName() // Я - Вася

  // а тут - вызывается метод глобального объекта window, у которого нет имени
  sayName() // Я - безымянный
}

thisObj()
```
-->
