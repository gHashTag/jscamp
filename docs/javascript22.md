---
id: javascript22
title: Higher order functions
sidebar_label: Higher order functions
---

![@serverSerrverlesskiy](/img/javascript/headers/21.jpg)

Higher-order functions allow JavaScript to be suitable for [functional programming](https://en.wikipedia.org/wiki/Higher-order_function).
Such functions are widely used in JavaScript. If you've programmed in JavaScript even a little, you've probably used them, perhaps without even realizing it.

To fully understand this concept, you should first understand functional programming and the concept of first class functions.

## What is functional programming?

> Functional programming is a branch of discrete mathematics and a programming paradigm, in which the computation process is interpreted as the calculation of the values ​​of functions in the mathematical sense of the latter (as opposed to functions as subroutines in procedural programming). [Wikipedia]

### First class functions

![First_class](https://media.giphy.com/media/l2Jecm1l0wnJ2kQDu/giphy.gif)

If you are already learning JavaScript, you may have heard that JavaScript treats functions⚙️ as first-class objects. Functions in JavaScript are objects, just like in other functional programming languages.
In JavaScript, functions⚙️ are a special type of object. These are `Function` objects. For example:

```jsx live
function learnJavaScript() {
  let greeting = () => 'Hello, World!'

  return greeting()
}
```

We now know what first-class functions are. You can start with higher-order functions.

## Higher order functions

![Higher](https://media.giphy.com/media/WS4yajVBkb3lIwDIKd/giphy.gif)

These are functions⚙️ that take a function⚙️ as an argument or return🔄 a function⚙️ as output.

For example, these higher-order functions are built into the language: `map()` `filter()` and `reduce()`

### Example # 1. Change the numbers `.push`

![Edit_number](https://media.giphy.com/media/xT5LMMneIRG1UJquOI/giphy.gif)

Let's say we have an array of numbers. We want to create a new🆕 array that will contain the doubled values of the first one. Let's see how we can solve this problem with and without a higher-order function.

#### Without higher order function:

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

With the higher-order function `map`, the console option is:

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

We can write it even shorter using the "arrow function" syntax:

```jsx live
function learnJavaScript() {
  const arr1 = [1, 2, 3, 4, 5]
  const multTwo = item => item * 2 + ' '

  const arr2 = arr1.map(multTwo) // Algorithm in 1 line

  return arr2
}
```

### Example # 2. Computed values `.map`

![Math](https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif)

Let's say we have an array that contains the birth years of different people. We need to create an array that will store their age.

For example: without a higher-order function⚙️ (classic - through the `for()` and `push()` loops)

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

With the higher order function `map`:

```jsx live
function learnJavaScript() {
  const birthYear = [1975, 1997, 2002, 1995, 1985]
  let ages = birthYear.map(year => 2020 - year + ' ') // 1-line algorithm via arrow function
  return ages // [ 45, 23, 18, 25, 35 ]
}
```

We reflash 🆕 a new array in one line of code📟.

### Example # 3. With condition check `.filter()`

![Check](https://media.giphy.com/media/Rd6sn03ncIklmprvy6/giphy.gif)

We have an array that contains objects with properties: name and age. We need to create🏗️ an array that will only contain adults (ie, age greater than or equal to 18).

Without a higher-order function (classic - through the `for ()` and `push ()` loops):

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

With a higher-order function `filter` with a built-in condition:

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

## Creating your own higher-order function

![Create](https://media.giphy.com/media/3ohzdWsUVRcZC2L7Ms/giphy.gif)

So far, we've looked at higher-order functions that are built into the language. Now let's create such a function ourselves⚙️.
Imagine JavaScript doesn't have a built-in `map` method. We can write it ourselves by creating a higher-order function.

Let's say we have a string array and we want to convert it to an array of numbers, where each element represents the length of the elements from the original array.

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

In the example above, we have created our own higher-order function `mapFor()`, which takes an array `arr` and a callback function`fn`. This function loops through this array and calls the callback function `fn` inside the `newArray.push()` for each iteration, calculating the number of characters in the words of the array, the calculation algorithm of which is described 🖊️ in the form of the 2nd variable 🔔.

::: note callback
A callback function is a function passed to another function as an argument, which is then called upon completion of an action.

:::

The `callback` function⚙️ `fn` takes the current element of the array and returns🔄 the length of the current element, which is now stored in `newArray`. After the `For()` loop completes, `newArray` returns the length of the elements in `lenArray`.

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

Обратите внимание на синтаксис📖:

при передаче функции⚙️ say в качестве параметра скобки `()` не указываются, т.к. в параметре функция⚙️ не вызывается, а передается целиком. Функция⚙️ `say` является аргументом функции⚙️ `userInput().` -->

Remember, any algorithm, no matter how small, consists of 3 stages:

- Stage 1 - Initialization of variables 🔔 and functions
- Stage 2 - Higher order function (logic)
- Stage 3 - Conclusion of the answer.

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

## Conclusion

<!-- ![The and](https://media.giphy.com/media/xT1XH3yj7ujmm2h40o/giphy.gif) -->

We learned what higher-order functions are and took a look at several of them already built into the language👅. We learned to create them on our own.

Without going into details, higher-order functions⚙️ can be said as follows: these are functions⚙️ that can take a function⚙️ as an argument and even return a function⚙️.

 [![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

## Problems?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Write to [Discord](https://discord.gg/6GDAfXn) chat.

## Questions:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

First class functions:

1. First class facilities
2. Facilities of the fifth class
3. Top class facilities

Higher order function:

1. Takes a function as an argument or returns a function as output
2. Only takes a function as an argument
3. Only returns a function as output

Higher order function:

1. It is unrealistic to create yourself
2. Can only be used via built-in method
3. You can create yourself

In order to understand how much you learned this lesson, take the test in the [mobile application](http://onelink.to/njhc95) of our school on this topic or in our [telegram bot](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

## Links:

1. [Exploring Higher-Order Functions in JavaScript](https://medium.com/nuances-of-programming/%D0%B8%D0%B7%D1%83%D1%87%D0%B0%D0%B5%D0%BC-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8-%D0%B2%D1%8B%D1%81%D1%88%D0%B5%D0%B3%D0%BE-%D0%BF%D0%BE%D1%80%D1%8F%D0%B4%D0%BA%D0%B0-%D0%B2-javascript-c23daf53a5c0)
2. [Article "Higher-order functions in JavaScript"](https://habr.com/ru/post/261723/)
3. [Expressive Javascript. Article "Higher-order functions"](https://eloquent-javascript.karmazzin.ru/chapter5)
4. [Code for Teens: The Perfect Beginner's Guide to Programming, Volume 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/KoDim-React"><img src="https://avatars1.githubusercontent.com/u/72087863?v=4?s=200" width="200px " alt=""/><br /><sub><b>Dmitriy K.</b></sub></a><br /><a href="#mentoring-KoDim-React" title="Mentoring">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px " alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

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
