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

## Payment

Now you are on a stripped-down version of the site, after subscribing to [Patreon](https://www.patreon.com/javascriptcamp), you will get full access to the training course, as well as access to our server's private channels in [Discord](https://discord.gg/6GDAfXn).

Download our [mobile application](http://onelink.to/njhc95) or get tested in our [JavaScript telegram bot](https://t.me/javascriptcamp_bot), and also subscribe to [our news](https://t.me/javascriptapp).

[![Become a Patron!](/Img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)


[![Sumerian school](/img/app.jpg)](http://onelink.to/njhc95)

![JavaScript Camp](/img/bandlink.png)

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
