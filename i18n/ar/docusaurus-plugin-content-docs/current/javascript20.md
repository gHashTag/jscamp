---
id: javascript20
title: تدمير المصفوفات والأشياء
sidebar_label: التدمير
---

![@serverSerrverlesskiy](/img/javascript/headers/30.jpg)

التدمير في JavaScript هو صيغة مهمة تسمح لك باستخراج البيانات بسهولة من المصفوفات والكائنات في سطر واحد.

## تدمير الكائن

![object](https://media.giphy.com/media/3o85xx7Yll3UyNVQf6/giphy.gif)

```jsx live
function learnJavaScript() {
  // Create a `fruit` object
  let fruit = {
    title: 'banana',
    group: 'tropical',
    quantity: 5
  }

  // Destructuring the `fruit` object
  let { title, group, quantity } = fruit

  // Display `title`
  return title
}
```

الخصائص `title`,` group` و `quantity` كرر بنية الكائن "ثمار" وانسخ قيمها إلى متغيرات متطابقة🔔 عثر عليه في `{...}`. لذلك ، إذا قمت بتبديل المتغيرات 🔔 في`{...}`, ثم سيعمل الرمز أيضًا ، حاول تبديل المتغيرات🔔 in the example في الاعلى.

### كائن متداخل

![bookmark](https://media.giphy.com/media/3og0IDyqVFNH7qFpAI/giphy.gif)

يمكننا أيضًا تدمير الكائن المتداخل.

```jsx live
function learnJavaScript() {
  let fruit = {
    title: 'banana',
    group: 'tropical',
    quantity: {
      store: 5,
      storeHaus: 99
    }
  }

  let {
    title,
    quantity: { store: s1, storeHaus: s2 }
  } = fruit

  return title + ', ' + parseFloat(s1 + s2)
}
```

### اسماء اخرى

إذا كنت بحاجة إلى استخدام أسماء المتغيرات🔔 بخلاف أسماء الخصائص ، سيعمل بناء الجملة التالي:

```jsx live
function learnJavaScript() {
  let fruit = {
    title: 'banana',
    group: 'tropical',
    quantity: 5
  }
  // title -> a; group -> b; quantity -> c
  let { title: a, group: b, quantity: c } = fruit

  return a
}
```

### Default values

إذا كان في`{...}` تكتب متغير خاصية🔔 التي لن يتم العثور عليها ، ثم سيتم تعيين القيمة لها`undefined`. لتعيين قيمة افتراضية لمتغير🔔, يمكنك تخصيص هذه القيمة لها. إذا حاولت تعيين قيمة لمتغير🔔 التي تم العثور على خصائصها ، ثم سيتم تعيين قيمة الخاصية لها. لنلقي نظرة على مثال.

![Dafault](https://media.giphy.com/media/3oEduLzte7jSNmq4z6/giphy.gif)

```jsx live
function learnJavaScript() {
  let fruit = {
    title: 'banana'
  }
  let { title = 'lime', group, quantity = 5 } = fruit

  return title + ', ' + group + ', ' + quantity
}
```

ال `title` يحتوي على قيمة الخاصية ، وليس ما نخصصه لها. ال `group` الخاصية غير موجودة في كائن "الفاكهة" ، ولم نقم بتعيين أي قيم للمتغير 🔔. الملكية `quantity` أيضًا غير موجود ، لكننا قمنا بتعيين القيمة` 5` للمتغير🔔.

### بقية

![octatok](https://media.giphy.com/media/hvddF1vHatFIgQspUB/giphy.gif)

إذا كنت بحاجة إلى الحصول على متغير واحد 🔔 من كائن ، وجمع الباقي في كائن آخر ، ثم استخدم`...` قبل المتغير 🔔 من خلالها سيتم إنشاء الكائن مع الخصائص المتبقية.

```jsx live
function learnJavaScript() {
  let fruit = {
    title: 'banana ',
    group: 'tropical ',
    quantity: 5
  }
  let { group, ...prop } = fruit

  return prop.title + group
}
```

## تدمير المصفوفات

تدمير المصفوفة هو نفسه بالنسبة للكائن. الاختلاف الوحيد هو أنه سيتم تخصيص قيم عناصر المصفوفة للمتغيرات 🔔 بالترتيب الذي يتم به تعريف العناصر.

![Take](https://media.giphy.com/media/IuBlckSD7dQv6/giphy.gif)

```jsx live
function learnJavaScript() {
  // Create an array `fruit`
  let fruit = ['banana', 'tropical', 5]

  // Destruct the `fruit` array
  let [title, group, quantity] = fruit

  // Display
  return `${title}, ${group}, ${quantity}`
}
```

### بقية

بالقياس مع الأشياء ، يعمل الباقي.

```jsx live
function learnJavaScript() {
  let fruit = ['banana ', 'tropical ', 5]

  let [name, ...prop] = fruit

  return `${name}, ${prop}`
}
```

### نسخة من المصفوفة

مثال على إنشاء نسخة من المصفوفة.

![Copia](https://media.giphy.com/media/GI1KnTxySlrCE/giphy.gif)

```jsx live
function learnJavaScript() {
  let fruit = ['banana ', 'tropical ', 5]

  let _fruit = [...fruit]

  return _fruit
}
```

### المصفوفات المتسلسلة

![add](https://media.giphy.com/media/3gMrhfFtWHq9XxtqPy/giphy.gif)

مثال على دمج المصفوفات في واحد.

```jsx live
function learnJavaScript() {
  let name = ['banana '],
    prop = ['tropical ', 5],
    fruit = [...name, ...prop]

  return fruit
}
```

## مشاكل؟

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

اكتب ل [Discord](https://discord.gg/6GDAfXn) محادثة.

## أسئلة:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

التدمير هو؟

1. الوظيفة
2. النحو
3. الكائن

هل من الضروري ، عند إتلاف كائن ، وضع المتغيرات في نفس الترتيب كما هي في الكائن؟

1. نعم
2. لا

ما الذي سيتم تخصيصه للمتغير إذا لم يتم العثور على خاصية مماثلة في الكائن؟

1. `error`
2. `undefined`
3. `unknown`

هل ترتيب العناصر في كائن مهم عند تدميره؟

1. نعم
2. لا

In order to understand how much you learned this lesson, take the test on the [mobile application](http://onelink.to/njhc95) of our school on this topic.

![JS Camp](/img/app.jpg)

##الروابط

1. [Learn JavaScript](https://learn.javascript.ru/destructuring-assignment)
2. [MDN Web Docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
3. [Destructuring in ES6](https://medium.com/@stasonmars/деструктуризация-в-es6-полное-руководство-b865bb71f376)

## المساهمون✨

الشكر يعود إلى هؤلاء الأشخاص الرائعين([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr> 
    <td align="center"><a href="https://github.com/IIo3iTiv"><img src="https://avatars1.githubusercontent.com/u/72025062?v=4?s=200" width="200px;" alt=""/><br /><sub><b>IIo3iTiv</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=IIo3iTiv" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
