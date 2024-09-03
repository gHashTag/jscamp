---
id: javascript27
title: جلب API
sidebar_label: جلب API
---

![@serverSerrverlesskiy](/img/javascript/headers/28.jpg)

ال ** تسمح Fetch API ** لجافا سكريبت بالاتصال بالخادم باستخدام طلبات HTTP وهي بديل أفضل لفئة XMLHttpRequest. يتم تنفيذ الاستعلامات بواسطة `fetch()` الطريقة التي تعود [Promise](https://jscamp.app/docs/javascript24).

![Exchange](https://media.giphy.com/media/OPQiZUC381IJ8Sh7UY/giphy.gif)

## بناء الجملة

![Book](https://media.giphy.com/media/l0HlOBZcl7sbV6LnO/giphy.gif)

```jsx
fetch(url, { options })
```

- `url` - URL لإرسال الطلب ؛
- `options` - طلب المعلمات.

بتحديد`fetch()` طريقة بدون `options`, ستتلقى طلب GET لجلب البيانات من `URL`.

## طلب المعلمات

![Option](https://media.giphy.com/media/AazZSBdhIdH9K/giphy.gif)

الحجة الثانية ل `{options}` يقبل طلب المعلمات. قائمة المعلمات:

1. `method` - طريقة الطلب(GET, POST, PUT, DELETE, HEAD);
2. `headers` - رؤوس HTTP
3. `body` - نص الطلب (يُستخدم للطريقة: POST / PUT) ؛
4. `cache` - وضع التخزين المؤقت (الافتراضي ، إعادة التحميل ، عدم التخزين المؤقت);
5. `mode` - وضع الطلب (cors، no-cors، same-origin);
6. `redirect` - يحدد كيفية التعامل مع عمليات إعادة التوجيه (متابعة ، خطأ ، دليل);
7. `referrer` - طلب المُحيل ؛
8. `signal` - AbortSignal ، طلب المقاطعة;
9. `credentials` - إرسال ملفات تعريف الارتباط مع الطلب - mit، same-origin.

```jsx
fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
  mode: 'no-cors'
})
```

## تلقي الرد

![Bascketball](https://media.giphy.com/media/l0MYwdebx8o0XI56E/giphy.gif)

إرجاع طريقة `fetch ()` [Promise](https://jscamp.app/docs/javascript24) كائن من فئة "Response" ، والتي لها الخصائص التالية:

1. `status` - كود الاستجابة
2. `statusText` - رسالة نصية  المقابلة لرمز الاستجابة ؛
3. `ok` - قيمة منطقية تشير إلى نجاح رمز الاستجابة (صواب: 200-299) ؛;
4. `headers` - كائن برؤوس استجابة ، حيث يكون المفتاح هو اسم الرأس ، وقيمة المفتاح هي قيمة الرأس المقابلة للمفتاح ؛
5. `url` - عنوان URL الذي تم إرسال الطلب إليه ؛
6. `body` - بيانات الاستجابة بتنسيق "ReadableStream"
7. `bodyUsed` - قيمة منطقية تشير إلى قراءة البيانات.

```javascript
fetch('https://jsonplaceholder.typicode.com/users').then(response => console.log(response))
```

## التعامل مع الاستجابة

![Download](https://media.giphy.com/media/ECoFRCrMgVoQg/giphy.gif)

البيانات المرسلة في التنسيق `ReadableStream`. يمكن استخدام الطرق التالية لتغيير التنسيق:

1. `text()` - يحول الإجابة إلى سلسلة ؛
2. `json()` - تحويل الاستجابة بتنسيق JSON ؛
3. `blob()` - يحول الاستجابة إلى كائن Blob ؛
4. `formData()` - يتم تحويل الاستجابة إلى مثيل FormData؛
5. `arrayBuffer()` - يحول الاستجابة إلى كائن ArrayBuffer.

مثال على تحويل استجابة إلى تنسيق JSON.

```jsx
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
```

## معالجة الخطأ

![Error](https://media.giphy.com/media/DHBGehJ3FSZEygszX3/giphy.gif)

يمكننا معرفة ما إذا كان `fetch()` hكما اكتمل مع وجود خطأ باستخدام خصائص "الحالة" و "موافق".

```jsx
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      console.log('Something went wrong ... Status:' + response.status)
    } else {
      return response.json()
    }
  })
  .then(data => console.log(data))
```

With help `.catch()`

```jsx
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error))
```

## طلب أمثلة

![Math](https://media.giphy.com/media/xT1Ra5h24Eliux3UVq/giphy.gif)

```javascript
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data[0].name + ' and ' + data[2].name))
  .catch(error => console.log(error))
```

نفس الشيء ، باستخدام ملف `async / await` بناء الجملة ، والتي سنتعرف عليها بمزيد من التفصيل في المقالة التالية.

```javascript
let response = await fetch('https://jsonplaceholder.typicode.com/users')
let data = await response.json()
console.log(data[0].name + ' and ' + data[2].name)
```

## مشاكل؟

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

اكتب ل[Discord](https://discord.gg/6GDAfXn) محادثة.

## أسئلة:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

ما الذي تعيده طريقة `fetch ()`؟

1. الوظيفة
2. الكائن
3. وعد

بالنظر إلى معلمة URL فقط في fetch () ، ما هو الطلب الذي نحصل عليه؟

1. "مشاركة"
2. "احصل"
3. "وضع"

ما هي المعلمة المحددة رؤوس HTTP؟

1. "إعادة التوجيه"
2. "رؤوس"
3. "أوراق الاعتماد"

ما الطريقة التي يجب أن تستخدمها لتحويل الاستجابة إلى سلسلة؟

1. `blob ()`
2. `json ()`
3. "نص ()`

ماذا تعني الخاصية "ok" لكائن من الفئة "Response"؟

1. رمز الاستجابة
2. نجاح رمز الاستجابة
3. قراءة البيانات من طلب

لفهم مقدار ما تعلمته في هذا الدرس ، قم بإجراء الاختبار في [mobile application](http://onelink.to/njhc95) من مدرستنا في هذا الموضوع.

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## الروابط

1. [Learn JavaScript](https://learn.javascript.ru/fetch)
2. [MDN Web Docs](https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch)
3. [JS Tutorial](https://www.javascripttutorial.net/javascript-fetch-api/)

## المساهمون ✨

الشكر يعود إلى هؤلاء الأشخاص الرائعين([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr> 
    <td align="center"><a href="https://github.com/IIo3iTiv"><img src="https://avatars1.githubusercontent.com/u/72025062?v=4?s=200" width="200px;" alt=""/><br /><sub><b>IIo3iTiv</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=IIo3iTiv" title="Documentation">  </a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)
