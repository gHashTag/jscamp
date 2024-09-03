---
id: javascript23
title: الطبقات
sidebar_label: الطبقات
---

![@serverSerrverlesskiy](/img/javascript/headers/23.jpg)

يستخدم JavaScript نموذج الوراثة النموذجي: كل كائن يرث الحقول (الخصائص) وأساليب كائن النموذج الأولي.

## صف دراسي

الكلمة `class` يستخدم لتحديد فئة:

```jsx
class MyClass {
  // class methods
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}
```

تسمى هذه الصيغة بإعلان الفئة.

![Class](https://media.giphy.com/media/cYaBD8kxE4PZudHBRA/giphy.gif)

::: note الأساليب في الفصل ليست مفصولة بفواصل
يختلف بناء جملة الفئة عن حرفية الكائن. لا توجد فواصل مطلوبة داخل الفصول الدراسية.

:::

قد لا يكون للفصل اسم. يمكن استخدام تعبير فئة لتعيين فئة إلى متغير :

```jsx
const UserClass = class {
  // class body
}
```

يمكن تصدير الفئات كوحدات نمطية. فيما يلي مثال على التصدير الافتراضي:

```jsx
export default class User {
  // class body
}
```

وإليك مثال على تصدير مسمى:

```jsx
export class User {
  // class body
}
```

يصبح الفصل مفيدًا عندما تقوم بإنشاء مثيل له. المثيل هو كائن يحتوي على البيانات والسلوك الموصوف بواسطة
صف دراسي.

ال `new` ينشئ عامل التشغيل مثيلًا لفئة في JavaScript مثل هذا: `instance = new Class()`.

على سبيل المثال ، يمكنك إنشاء ملفات مثيل لفئة المستخدم👤 باستخدام `new` المشغل أو العامل:

```jsx
const myUser = new User()
```

`new User()` يُنشئ مثيلاً لـ`User` صف دراسي👤.

## التهيئة: المنشئ ()

![spangeBob](https://media.giphy.com/media/3oriNZoNvn73MZaFYk/giphy.gif)

`constructor (...)` هي طريقة خاصة في جسم الفئة تقوم بتهيئة مثيل. هذا هو المكان الذي يمكنك فيه تعيين القيم الأولية للحقول أو إجراء أي تعديلات على الكائنات.

في المثال التالي ، يعيّن المُنشئ القيمة الأولية لملف`name` مجال:

```jsx
class User {
  constructor(name) {
    this.name = name
  }
}
```

ال `constructor` التابع `User` الفصل يأخذ معلمة واحدة ، `name`, والذي يستخدم لتعيين القيمة الأولية لـ`this.name` مجال.

داخل المنشئ ، قيمة`this` يساوي المثيل المنشأ حديثًا.

تصبح الوسائط المستخدمة لإنشاء مثيل للفئة معلمات للمُنشئ:

```jsx live
function learnJavaScript() {
  class User {
    constructor(name) {
      name // => 'Jon Snow'
      this.name = name
    }
  }

  const user = new User('Jon Snow') // Here you can change the value
  return user.name
}
```

ال `name` المعلمة داخل المنشئ هي `Jon Snow`.

إذا لم تقم بتعريف مُنشئ لفئة ، فسيتم إنشاء مُنشئ افتراضي. المُنشئ الافتراضي هو دالة فارغة⚙️ لا تقوم بتعديل المثيل.

يمكن أن يكون هناك طريقة واحدة فقط تسمى `constructor` في الفصل.

## نبذ الطبقات

![rejection](https://media.giphy.com/media/l2SpUoAPo0CBOkyxq/giphy.gif)

نظرًا لأننا ندرس في مسار مدرستنا تطوير تطبيقات الهاتف المحمول باستخدام المكتبة[React](https://reactjs.org), اين الابتكار[React Hooks](https://en.reactjs.org/docs/hooks-intro.html) يسمح لك باستخدام ميزات الحالة وميزات React الأخرى دون كتابة فئات. لذلك ، ليس من المنطقي الحديث عن الفصول بعد الآن ، لأننا تخلينا عنها.

## مشاكل؟

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

اكتب ل [Discord](https://discord.gg/6GDAfXn) محادثة.

## أسئلة:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

ما هي الكلمة الأساسية لتعريف الفئة؟

1. `constructor()`
2. `class`
3. `this`

هل الطرق داخل الفصل مفصولة بفاصلة؟

1. نعم
2. لا

كم العدد `constructor()` يمكن أن يكون هناك في فئة واحدة؟

1. غير محدود
2. ما يصل إلى عشرة
3. واحد فقط

<!-- Что такое геттеры и сеттеры?

1. Это поля
2. Это методы имитирующие поля
3. Это свойства поля

Наследуются ли частные поля и методы родительского класса, дочерним классом?

1. Да
2. Нет

Когда вызывается родительскй конструктор в дочернем классе?

1. Перед this
2. После this -->

لفهم مقدار ما تعلمته في هذا الدرس ، قم بإجراء الاختبار في[mobile application](http://onelink.to/njhc95) من مدرستنا في هذا الموضوع.

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

<!--
## Геттеры и сеттеры

![Math](https://media.giphy.com/media/uWzbH8xJGIwOBPfzhc/giphy.gif)

Геттеры и сеттеры — это вычисляемые свойства. Это методы, имитирующие поля, но позволяющие читать и записывать  данные.

Геттеры используются для получения данных, а сеттеры — для их изменения.

Пример:

```jsx
class User {
  #nameValue

  constructor(name) {
    this.name = name
  }

  get name() {
    return this.#nameValue
  }

  set name(name) {
    if (name === '') {
      throw new Error('Имя пользователя не может быть пустым')
    }
    this.#nameValue = name
  }
}

const user = new User('Печорин')
user.name // вызывается геттер, Печорин
user.name = 'Бэла' // вызывается сеттер

user.name = '' // Имя пользователя не может быть пустым
```

## Наследование: extends

![Throne](https://media.giphy.com/media/l1KVcMMxJJpks23cs/giphy.gif)

Классы в JavaScript поддерживают наследование с помощью ключевого🗝️ слова `extends`.

В выражении `class Child extends Parent { }` класс `Child` наследует от класса `Parent` конструктор, поля и методы.

Создадим дочерний класс `ContentWriter`, расширяющий родительский класс `User` 👤:

```jsx
class User {
  name

  constructor(name) {
    this.name = name
  }

  getName() {
    return this.name
  }
}

class ContentWriter extends User {
  posts = []
}

const writer = new ContentWriter('Лермонтов')

writer.name // Лермонтов
writer.getName() // Лермонтов
writer.posts // []
```

`ContentWriter` наследует от `User` конструктор, метод `getName()` и поле `name`. В самом `ContentWriter` определяется новое поле `posts`.

Обратите внимание, что частные поля и методы родительского класса не наследуются дочерними классами.

### Родительский конструктор: super() в constructor()

![parents](https://media.giphy.com/media/QWMjLXYuRpl5cvCQ9r/giphy.gif)

Для того, чтобы вызвать конструктор родительского класса в дочернем классе, следует использовать специальную функцию⚙️ `super()`, доступную в конструкторе дочернего класса.

Пусть конструктор `ContentWriter` вызывает родительский конструктор и инициализирует поле `posts`  :

```jsx live
function learnJavaScript() {
  class User {
    name

    constructor(name) {
      this.name = name
    }

    getName() {
      return this.name
    }
  }

  class ContentWriter extends User {
    posts = []

    constructor(name, posts) {
      super(name)
      this.posts = posts
    }
  }

  const writer = new ContentWriter('Лермонтов', ['Герой нашего времени'])
  writer.name // Лермонтов
  writer.posts // ['Герой нашего времени']

  return writer.name //name можно заменить на posts и посмотреть результат
}
```

`super(name)` в дочернем классе `ContentWriter` вызывает конструктор родительского класса `User`.

Обратите внимание, что в дочернем конструкторе перед использованием ключевого🗝️ слова `this` вызывается `super()`. Вызов `super()` "привязывает" родительский конструктор к экземпляру.

![super](https://media.giphy.com/media/10mTnPIEHNZpAs/giphy.gif)

```jsx
class Child extends Parent {
  constructor(value1, value2) {
    // не работает!
    this.prop2 = value2
    super(value1)
  }
}
```

## Пример

![math](https://media.giphy.com/media/3orieN7HEHI0tw8x5C/giphy.gif)

```jsx
class Animal { //Создание класса Animal. Классы называют с большой буквы

static type = 'ANIMAL' //При помощи ключевого слова static можно объявлять переменные внутри класса. Их можно вызвать только самим классом, т.е. Animal.type

  constructor(options) { //Конструктор принимает объект options
    this.name = options.name // Инициализация полей класса
    this.age = options.age
    this.hasTail = options.hasTail
  }

  voice() { //Метод для класса Animal. Можно вызвать у объекта cat как cat.voice()
    alert('I am Animal!')
  }
}

get ageInfo(){ //Создание геттера ageInfo
  return this.age * 7 //Если вызвать геттер у объекта cat, то получиться 5 * 7 = 35
}

set ageInfo(newAge) { //Создание сеттера ageInfo.
  this.age = newAge // Если выполнить у объекта cat команду cat.ageInfo = 8, то полю age присвоится значение 8
}

const cat = new Animal({ //Создание объекта при помощи класса Animal
  name: 'Cat',
  age: 5,
  hasTail: true
})
```

![Wow](https://media.giphy.com/media/3oriO13KTkzPwTykp2/giphy.gif) -->

<!-- ## Вопросы:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

Для того чтобы понять, на сколько вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме.

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder) -->

<!-- Сколько методов constructor() может находится в одном классе?

1. Неограниченно
2. До десяти
3. Только один

Что такое геттеры и сеттеры?

1. Это поля
2. Это методы имитирующие поля
3. Это свойства поля

Наследуются ли частные поля и методы родительского класса, дочерним классом?

1. Да
2. Нет

Когда вызывается родительскй конструктор в дочернем классе?

1. Перед this
2. После this -->

## الروابط:

1.  [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes)
2.  [Learn JavaScript](https://learn.javascript.ru/class)

## المساهمون✨

الشكر يعود إلى هؤلاء الأشخاص الرائعين ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/FELiX-RN"><img src="https://avatars0.githubusercontent.com/u/72006627?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Philipp Dvinyaninov</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=FELiX-RN" title="Documentation">  </a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)
