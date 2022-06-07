---
id: javascript13
title: المعلمات الافتراضية
sidebar_label: المعلمات الافتراضية
---

![@serverSerrverlesskiy](/img/javascript/headers/25.jpg)

تسمح لك المعلمات الافتراضية بتعيين القيم الافتراضية لمعلمات الوظيفة إذا تم استدعاء الوظيفة بدون وسيطات ، أو إذا تم تمرير القيمة صراحةً للمعلمة`undefined`.

![Teacher](https://media.giphy.com/media/3ohc10nduj1irsuzgA/giphy.gif)

في JavaScript ، يتم تعيين معلمات الوظيفة التي لم يتم تمرير القيم عند استدعائها إلى`undefined`. ومع ذلك ، قد يكون من المفيد في بعض الحالات تعيين قيمة افتراضية مختلفة. هذا هو المكان المقصود من الخيارات الافتراضية.

## بناء الجملة

![book](https://media.giphy.com/media/l0HlOBZcl7sbV6LnO/giphy.gif)

```jsx live
function learnJavaScript() {
  const multiply = (a, b = 1) => {
    // The default value b is 1
    return a * b
  }
  // If b is undefined, then it will be assigned a default value
  return multiply(5, 2) // remove the comma, second argument and get 5 + 1
}
```

### تمرير قيم "خاطئة" أخرى

![basketball](https://media.giphy.com/media/3oEdv5e5Zd2gsczAhG/giphy.gif)

إذا كانت أي قيمة بخلاف `undefined` يتم تمريرها إلى المعلمة الرسمية أثناء المكالمة ، بما في ذلك إحدى القيم "false" مثل false ❎,` 0`, `" "`, `''`, `null`,`NaN`, ثم في هذه الحالة لن يتم تعيين القيمة الافتراضية للمعامل. في هذه الحالة ، تحتاج إلى كتابة الرمز بنفسك الذي سيلتقط هذه "القيم الخاطئة".

## أمثلة على

![Math](https://media.giphy.com/media/xT1Ra5h24Eliux3UVq/giphy.gif)

في المعلمات الافتراضية ، يمكنك استخدام قيم المعلمات السابقة (الموجودة على اليسار في القائمة):

```jsx live
function learnJavaScript() {
  const greet = (name, greeting, message = greeting + ' ' + name) => {
    return [name, greeting, message]
  }

  return greet('David ', 'Hi ')
}
```

مثال على وظيفة مع أو بدون معلمات افتراضية👇:

```jsx live
function learnJavaScript() {
  const withDefaults = (a = 1, b = 3, c = 2) => {
    // Function with default parameters
    return [a, b, c]
  }
  const withoutDefaults = (a, b, c) => {
    // Function without default parameters
    if (a == undefined) {
      a = 1
    }
    if (b == undefined) {
      b = 3
    }
    if (c == undefined) {
      c = 2
    }
    return [a, b, c]
  }

  return withDefaults()
}
```

ستكون النتيجة هي نفسها ، لكن بدون المعلمات الافتراضية ، ستكون الشفرة📟 يمكن أن تصبح أكبر بشكل ملحوظ.

## مشاكل؟

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

اكتب ل [Discord](https://discord.gg/6GDAfXn) محادثة.

## أسئلة:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

إذا لم يتم تمرير أي قيمة إلى معلمات الوظيفة⚙️ ، فما هي قيمتها الافتراضية؟

1. `null`
2. `undefined`
3. `NaN`

هل المعلمات الافتراضية "تلتقط" قيمًا خاطئة؟
1. نعم
2. لا

هل من الممكن استخدام قيم المعلمات الموجودة على يسار القائمة في المعلمات الافتراضية؟

1. نعم
2. لا

لفهم مقدار ما تعلمته في هذا الدرس ، قم بإجراء الاختبار في[mobile application](http://onelink.to/njhc95) من مدرستنا في هذا الموضوع.

![JS Camp](/img/app.jpg)

## الروابط

1.  [MDN web docs](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Default_parameters)

## المساهمون✨

الشكر يعود إلى هؤلاء الأشخاص الرائعين ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/FELiX-RN"><img src="https://avatars0.githubusercontent.com/u/72006627?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Philipp Dvinyaninov</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=FELiX-RN" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
