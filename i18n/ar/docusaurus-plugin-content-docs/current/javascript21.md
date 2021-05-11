---
id: javascript21
title: إنهاء
sidebar_label: إنهاء
---

![@serverSerrverlesskiy](/img/javascript/headers/20.jpg)

الإغلاق هو وظيفة - لها حق الوصول إلى وظيفة خارجية - حتى بعد انتهاء الوظيفة الخارجية. يلزم الإغلاق لتوفير وظيفة داخلية مع إمكانية الوصول إلى نطاق وظيفة خارجية️ ، ولكن في نفس الوقت وصول قريب من البيئة الخارجية إلى متغيرات الوظيفة الداخلية⚙️.

![Snake](https://media.giphy.com/media/3oFzmdjqH15YebLQ52/giphy.gif)

متطلبات إنشاء الإغلاق:

1. وظيفة خارجية تسمى في الكود.
2. تحتوي الوظيفة الخارجية على الوظيفة الداخلية.
3. نتيجة لذلك ، تقوم الوظيفة الخارجية بإرجاع الوظيفة الداخلية.

دعنا نفكر في إنشاء إغلاق باستخدام مثال:

```jsx live
function learnJavaScript() {
  const getFruit = () => {
    let fruit = 'Banana',
      show = () => {
        return fruit
      }
    return show
  }
  let showFruit = getFruit()
  return showFruit()
}
```

1. في المثال ، أنشأنا وظيفة خارجية `getFruit`;
2. داخل `getFruit` خلق وظيفة داخلية`show`.
3. ترجع الدالة getFruit دالة العرض كنتيجة لذلك.
4. علاوة على ذلك في الكود ، قمنا بتعيين نتيجة`getFruit` وظيفة للمتغير`showFruit`.
5. لأن نتيجة `getFruit` هي وظيفة ، إذن `showFruit` لا يصبح متغير🔔, لكن وظيفة.
6. نتيجة البناء كله هي المتغير `fruit`, نتيجة البناء كله هي المتغير `getFruit`, أصبحت مغلقة. الآن يمكننا فقط معرفة قيمة هذا المتغير🔔, لا يمكننا تغييره.

## أمثلة على

![Math](https://media.giphy.com/media/xT1Ra5h24Eliux3UVq/giphy.gif)

دعونا نلقي نظرة على المزيد من الأمثلة للفهم.

### عداد

العداد هو أبسط مثال للنظر في كيفية عمل الإغلاق.

<!-- ![Counter](https://media.giphy.com/media/QSNvClMu5zWJW/giphy.gif) -->

```jsx live
function learnJavaScript() {
  const makeCounter = () => {
    let x = 0
    return () => {
      return ++x
    }
  }
  const counter = makeCounter()
  return counter()
}
```

### عداد محسن

![Counter](https://media.giphy.com/media/3o6Zt6fzS6qEbLhKWQ/giphy.gif)

ونتيجة لذلك ، لن يكون لدينا وظيفة واحدة ⚙️ ، بل عدة وظائف في وقت واحد.

```jsx live
function learnJavaScipt() {
  let makeCounter = () => {
    let x = 0
    return {
      inc: () => {
        return ++x
      },
      dec: () => {
        return --x
      },
      val: () => {
        return x
      }
    }
  }

  let counter = makeCounter()
  counter.inc() // 1
  counter.inc() // 2
  counter.inc() // 3
  counter.inc() // 4
  counter.dec() // 3
  return counter.val()
}
```

### إغلاق في حلقة

![circle](https://media.giphy.com/media/u5s2ezDicmyuA/giphy.gif)

```jsx live
function learnJavaScript() {
  let res = []
  for (let i = 0; i < 5; i++) {
    res[i] = () => {
      return i
    }
  }
  return res[2]()
}
```

### تذكر العبارة

![l](https://media.giphy.com/media/l4pTfqyI6TCjUW4Yo/giphy.gif)

```jsx live
function learnJavaScript() {
  let phrase = x => {
    return y => {
      return x + ' ' + y
    }
  }

  hello = phrase('Hello')
  return hello('World')
}
```

## مجموع

تعتبر عمليات الإغلاق من أهم مفاهيم JavaScript الأساسية التي يجب على كل مطور JS فهمها. يعد فهم عمليات الإغلاق بمثابة نقطة انطلاق لكتابة تطبيقات فعالة وعالية الجودة.

## مشاكل؟

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

اكتب ل [Discord](https://discord.gg/6GDAfXn) محادثة.

## أسئلة:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

ما هو الإغلاق؟

1. البناء
2. الوظيفة
3. المفهوم

ما هو الختام على ماذا؟

1. وظيفة على النطاق
2. المتغيرات في وظيفة

ماذا عليك أن تفعل للوصول إلى متغير مغلق؟

1. سوف أصفه وأستخدمه
2. كان متوفرا
3. يمكن فقط عرض المتغير

لفهم مقدار ما تعلمته في هذا الدرس ، قم بإجراء الاختبار في [mobile application](http://onelink.to/njhc95) من مدرستنا في هذا الموضوع.

![Sumerian school](/img/app.jpg)

## الروابط

1. [Learn JavaScript](https://learn.javascript.ru/closures)
2. [MDN Web Docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures)
3. [Замыкания JavaScript](https://medium.com/@stasonmars/понимаем-замыкания-в-javascript-раз-и-навсегда-c211805b6898)

## المساهمون✨

الشكر يعود إلى هؤلاء الأشخاص الرائعين ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr> 
    <td align="center"><a href="https://github.com/IIo3iTiv"><img src="https://avatars1.githubusercontent.com/u/72025062?v=4?s=200" width="200px;" alt=""/><br /><sub><b>IIo3iTiv</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=IIo3iTiv" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
