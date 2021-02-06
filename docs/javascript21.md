---
id: javascript21
title: Closure
sidebar_label: Closure
---

![@serverSerrverlesskiy](/img/javascript/headers/20.jpg)

A closure is a function⚙️ that has access to an external function⚙️ even after the external function️ has terminated. A closure is needed to provide an internal function with access to the scope of an external function️, but at the same time close access from the external environment to the variables of the internal function⚙️.

![Snake](https://media.giphy.com/media/3oFzmdjqH15YebLQ52/giphy.gif)

Requirements for creating a closure:

1. An external function that is called in the code.
2. The outer function contains the inner function.
3. As a result, the outer function returns the inner one.

Let's consider creating a closure using an example:

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

1. In the example, we have created an external function `getFruit`;
2. Inside `getFruit` created an internal function `show`.
3. The getFruit function returns the show function as a result.
4. Further in the code, we assigned the result of the `getFruit` function to the variable `showFruit`.
5. Because the result of `getFruit` is a function, then `showFruit` becomes not a variable🔔, but a function.
6. The result of the whole construction is the variable `fruit`, which is inside the function `getFruit`, it became closed. Now we can only find out the value of this variable🔔, we cannot change it.

## Examples of

![Math](https://media.giphy.com/media/xT1Ra5h24Eliux3UVq/giphy.gif)

Let's look at more examples for understanding.

### Counter

A counter is the simplest example to consider how a closure works.

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

### Improved counter

![Counter](https://media.giphy.com/media/3o6Zt6fzS6qEbLhKWQ/giphy.gif)

As a result, we will have not one function⚙️, but several at once.

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

### Closure in a loop

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

### Remember the phrase

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

## Total

Closures are one of the most important fundamental JavaScript concepts that every JS developer should understand. Understanding closures is one stepping stone to writing efficient, high-quality applications.

## Problems?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Channel in [Discord](https://discord.gg/6GDAfXn) after paying on [Patreon](https://www.patreon.com/javascriptcamp).

## Questions:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

Что такое замыкание?

1. Конструкция
2. Функция
3. Концепция

Что на чём замыкается?

1. Функция на область видимости
2. Переменные в функции

Что нужно сделать, чтобы получить доступ к замкнутой переменной?

1. Опишу её и воспользуюсь
2. Она доступна
3. Переменную можно только просмотреть

In order to understand how much you learned this lesson, take the test on the [mobile application](http://onelink.to/njhc95) of our school on this topic.

![Sumerian school](/img/app.png)

## Links

1. [Learn JavaScript](https://learn.javascript.ru/closures)
2. [MDN Web Docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures)
3. [Замыкания JavaScript](https://medium.com/@stasonmars/понимаем-замыкания-в-javascript-раз-и-навсегда-c211805b6898)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

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
