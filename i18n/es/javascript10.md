---
id: javascript10
title: Objects
sidebar_label: Objects
---

![@serverSerrverlesskiy](/img/javascript/headers/11.jpg)

Objects are like a closet📦 for storing and transporting other types of data.
JavaScript is designed around a simple paradigm. The concept is based on simple objects. An object is a collection of properties, and each property consists of a name (key) and a value associated with that name. The property value can be a function⚙️, which can be called a method of an object, or any other type.

![Object](https://media.giphy.com/media/xTiTnFEfyt0vqhQzDi/giphy.gif)

In this article, we'll cover the most basic properties of JavaScript objects, creating and modifying, and enumerating properties.

An object in JavaScript is a simple associative array or, in other words, a "hash". It stores any key: value matches and has several standard methods.

Objects in JavaScript, like objects in real life (a person👨, a bus, a building, etc.) have several named (key🗝️) parameters (age, name, hair color, status) with specific values (15, John, black, 'true') ✅:

```javascript
let obj = {
  age: 15,
  name: 'John',
  color: 'black',
  student: true
}
```

An object method in JavaScript is simply a function️ that is added to an associative array.

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

### Object creation

![Object](https://media.giphy.com/media/2YaKpvYQEcl1WuJJTl/giphy.gif)

In a computer🖥️ we can represent an `object` as a cabinet with names-properties (`access keys`) signed on it. Inside the cabinet📦 drawers🧰 - data (specific information) and even smaller objects, by analogy with things. It is easy to find, delete or add (write) a new value to it by the `key`.

![obj01](/img/javascript/12/01.png)

These are two 2️⃣ options for creating🏗️ an empty object:

```javascript
// equivalent records
let obj = {}
let person = new Object()
```

The second option is very rarely used in practice.

![obj00](/img/javascript/12/00.png)

## Advanced creation

![Extended](https://media.giphy.com/media/2XflxzlJfoSDycf3BBu/giphy.gif)

Properties can be specified directly when creating an object, through a list in curly braces like {..., `key: value,` ...} and create complex objects:

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

The created🏗️ object contains five properties with specific values, one of which is passport data, which is a built-in object. Notice how the call to distant properties or methods of the object goes. Try to return your passport number.

## Adding properties

![Adding](https://media.giphy.com/media/3CZ2iGe1ByKfhZxaD7/giphy.gif)

There are two 2️⃣ syntax for adding properties to an object. 1️⃣ The first is a period, the second is square brackets:

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

Square brackets are mainly used when the `properties' name is in a` variable` 🔔:

```javascript
let nameProp = 'age'
obj[nameProp] = 15
```

Here, through the variable 🔔 `nameProp`, we set the name of the property`"age"`, which is the key in the associative array that contains` value 15`.

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

## Accessing properties

![Door](https://media.giphy.com/media/l378znZcUM7b6VDyM/giphy.gif)

The property is accessed by accessing it 👇:

```jsx live
function learnJavaScript() {
  let obj = {} // object is empty
  obj.age = 17 // equivalent to obj ['age'] = 17 or immediately obj = {age: 17}

  let result1 = obj.age // Option 1
  let result2 = obj['age'] // Option 2

  return result1 + 'or' + result2
}
```

If the object has no such property, the result is `undefined`. Check it in your browser console.

```javascrript
let obj = {}
obj.nokey
```

![nokey](/img/javascript/15.jpg)

There will be no error🙅‍♂️ when accessing a property that does not exist, the special value `undefined` will simply return. If there is no `return` keyword inside the function, then the` undefined` value will also return - the absence of something.

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

## Removing properties

![Delete](https://media.giphy.com/media/5xaOcLwEvFOizxHVyVy/giphy.gif)

Deletes ➖ property operator `delete`. Try to remove the passport number from the previous example:

Create the object from the previous example in the console.

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

Now remove the nested `passport` object

```javascript
delete obj.passport
```

Now if you refer to it, then the result will be `undefined`

```javascript
obj.passport
```

![delete obj](/img/javascript/16.jpg)

## Object Methods

![Description](https://media.giphy.com/media/3ohzAqLk7azQ0O6RvW/giphy.gif)

As with other languages👅, JavaScript objects have `methods`.

For example, let's create a `sport` object right away with the` run` method:

```jsx live
function learnJavaScript() {
  let sport = {
    run: n => 'John' + 'ran' + n + 'meters!'
  }

  return sport.run(300)
}
```

### Adding a method

![Add](https://media.giphy.com/media/5ns6077LTlGACuwRQR/giphy.gif)

Adding a method to an existing object is simple, assign the function⚙️ `function (n) {...}` to the `sport.run` property.

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

This is not about classes, instantiation, and the like. Simple - you can add a new method or delete an existing one to any object at any time.

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

## Looping through object properties

![enumeration](https://media.giphy.com/media/h5FIFDs6rXLpWlWWZJ/giphy.gif)

To iterate over all the properties of an object, a special type of `for .. in` construction is used:

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

And secretly, to be honest, almost any variable 🔔 is a mini-object in the JavaScript environment. So, don't be afraid to use them.

 [![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

## Problems?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Write to [Discord](https://discord.gg/6GDAfXn) chat.

## Questions:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

An empty object is created with the command:

1. `let obj = {}`
2. `function obj()`
3. `let x = 10`

The object stores matches:

1. key: value
2. name: surname
3. variable = value

The syntax for assigning a value to a specific key (property):

1. `color () = "green" `
2. `obj.color =" red "`
3. `function color () =>" yellow "`

An object method in JavaScript is

1. Just a function added to an associative array
2. External function
3. Variable described outside the object

Looping through object properties

1. `for (let i = 0; i <= 100; i ++) {sum + = i} `
2. `for (let key in obj) {}`
3. `while (condition) {} `

In order to understand how much you learned this lesson, take the test on the [mobile application](http://onelink.to/njhc95) of our school on this topic.

![Sumerian school](/img/app.jpg)

## Links

1. [MDN web doc. Developer.mozilla.org - Статья "Типы данных JavaScript и структуры данных"](https://developer.mozilla.org/ru/docs/Web/JavaScript/Data_structures)
2. [MDN web doc. Developer.mozilla.org - Статья "Инициализация объектов"](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Object_initialize)
3. [Статья "Object Types"](https://www.javascript.express/types/object_types)
4. [Статья "Объекты", сайт Learn.javascript.ru](https://learn.javascript.ru/object)
5. [Code for Teens: The Perfect Beginner's Guide to Programming, Volume 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

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

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

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
