---
id: javascript18
title: Rest and Spread
sidebar_label: Rest and Spread
---

![@serverSerrverlesskiy](/img/javascript/headers/19.jpg)

Many built-in JavaScript functions support an arbitrary number of arguments.

For example:

`Math.max (arg1, arg2, ..., argN)` - calculates the maximum number of the passed arguments.

`Math.min (arg1, arg2, ..., argN)` - returns the minimum value of the passed arguments.

In this article, we will learn how to do the same with our own functions and how to pass parameters to such functions as an array.

## Remaining parameters `(... rest)`

![Parametrs](https://media.giphy.com/media/3osxYoufeOGOA7xiX6/giphy.gif)

You can call a function⚙️ with any number of arguments, regardless of how it was defined.

For example 👇:

```jsx live
function learnJavaScript() {
  let summa = (a, b, c) => {
    return a + b + c
  } // Sum of 3 numbers

  return summa(1, 2, 3, 4, 5, 6, 7)
}
```

Extra arguments will not cause an error, but of course only the first three will be counted.

### ES6 concept

![Idea](https://media.giphy.com/media/3o6Mbj2w67HnPQKgcE/giphy.gif)

Starting with the ES6 standard, a concept has appeared like `... rest` - residual parameters.

```jsx
let goFun = (...rest) => {
  // Algorithm
}
```

Free parameters can be indicated with three dots `...`. It literally means: "collect the remaining parameters and put them in an array."

For example, let's collect all the arguments into an array `args`👇:

```jsx live
function learnJavaScript() {
  let sumAll = (...args) => {
    // args — name of the array of passed arguments
    let sum = 0
    for (let arg of args) if (typeof arg === 'number') sum += arg // sum - will collect the sum of all numeric arguments
    return sum
  }
  return sumAll(1, 2, 3, 4, 5, 6, 7, 'React', 'Native')
}
```

The answer is already 28 and no errors🙅‍♂️! Try changing the arguments or the dimension of the array.

### Multiple parameters

We can put the first few parameters in variables 🔔, and collect the rest into an array.
This means that you can simply insert `... rest`, but only instead of the last parameter of the function.

![paste](https://media.giphy.com/media/3o6ZtafpgSpvIaKhMI/giphy.gif)

```jsx
let goFun = (first, second, ...rest) => {
  // Algorithm
}
```

In the example below, the first two 2️⃣ arguments to the function will become the first and last name, and the third and subsequent arguments will become the array `titles [i]` 👇:

```jsx live
function learnJavaScript() {
  let free = ''
  let showName = (firstName, lastName, ...titles) => {
    free = firstName + ' ' + lastName // First name + Last name
    return titles[0] + ' ' + titles[1]
  }
  // The rest of the parameters will go to the titles = ["React", "Native"] array
  // titles [0] // React
  // titles [1] // Native

  let result = showName('Julius', 'Caesar', 'React', 'Native')

  return free + ' or ' + result
}
```

### Possible mistakes

![error](https://media.giphy.com/media/xTiN0L7EW5trfOvEk0/giphy.gif)

Residual parameters must be at the end, so you cannot write 🖊️ anything after them.
This will throw an error:

```jsx
function f(arg1, ...rest, arg2) {   // arg2 после ...rest ?
  // Mistake!
}
```

:::note Remember
`... rest` must always be last.

:::

<!-- ### Опасный "arguments"

![dangerous](https://media.giphy.com/media/xT5LMAvRY92qUXj7dC/giphy.gif)

Все аргументы функции⚙️ находятся в псевдомассиве `arguments` под своими порядковыми номерами.

Но доступ через массив `arguments[]` можно найти только в старом коде📟 . Не применяйте его!

:::note Внимание
Cтрелочные функции⚙️ не имеют `arguments[]` как и собственного `this.`
:::

Если мы обратимся к `arguments` из стрелочной функции⚙️, то получим аргументы внешней "классической" функции⚙️. Соответственно, для более удобной работы с аргументами лучше использовать только остаточные параметры `...rest`. -->

## Spread operator `... spread`

![operators](https://media.giphy.com/media/3o6Mbfd5fQszubehmE/giphy.gif)

We learned how to get an array from a parameter list, but sometimes you need to do the opposite - stuff the array into the called function⚙️.

For example, there is a built-in function ⚙️ `Math.max`. It returns the largest number in the list:

```jsx live
function learnJavaScript() {
  return Math.max(3, 5, 1, 17, 14, 8, 2, 11)
}
```

### Not so simple

![Index_finger](https://media.giphy.com/media/4ZcYCubFNk8AUHcZVw/giphy.gif)

Let's say we have an array of numbers `[3, 5, 1]`. How to call `Math.max` for it?

You can't just insert them - `Math.max` expects to get a list of numbers, not a single array.

```jsx live
function learnJavaScript() {
  let arr = [3, 5, 1, 17, 14, 8, 2, 11]
  return Math.max(arr) // NaN - значение будет не определено
}
```

Of course, we can enter numbers manually: `Math.max (arr[0], arr[1], ar[2]).`

But, firstly, it looks bad, and, secondly, we do not always know how many arguments there will be. There can be a lot of them, or not at all.

### Occurrence of parameters

![Transform](https://media.giphy.com/media/xT4uQr9H3EDL7Ha2hq/giphy.gif)

The `...spread` operator will help us here. It is similar to residual parameters - it also uses `...`, but does the exact opposite.

When the `...spread` functionality is used in a function call, it converts the `arr` array object to an argument list.

For `Math.max` 👇:

```jsx live
function learnJavaScript() {
  let arr = [3, 5, 1, 17, 14, 8, 2, 11]

  return Math.max(...arr) // the ... arr operator converts the array `arr` to an argument list
}
```

In the same way, we can pass multiple iterables 👇:

```jsx live
function learnJavaScript() {
  let arr1 = [1, 2, 34, 41]
  let arr2 = [8, 3, 18, 17]
  let arr3 = [2, 4, 16, 38]

  return 'Max = ' + Math.max(...arr1, ...arr2, ...arr3)
}
```

Cool! A very flexible approach to programming. You can also combine the spread operator with normal values.

### Merging Arrays

![Merger](https://media.giphy.com/media/rytLWOErAX1F6/giphy.gif)

The spread operator `... spread` can also be used to merge arrays 👇:

```jsx live
function learnJavaScript() {
  let arr1 = [3, 5, 7]
  let arr2 = [4, 2, 8]

  let merged = [100, ...arr1, 500, ...arr2]
  let str = 'Массив: ' + merged

  return <b>{str}</b>
}
```

### Converting to string

![Transform](https://media.giphy.com/media/RLVHPJJv7jY1q/giphy.gif)

The `... spread` operator functionality works with any iterable object.

For example, the spread operator is suitable for converting a string into an array of characters 👇:

```javascript
let str = 'Hey, Alex!'
let result = [...str]
```

![spread](/img/javascript/13.jpg)

Let's see what happens. Under the hood, the spread operator uses iterators to iterate over the elements. Just like `for..of` does.

The `for..of` loop iterates over the string as a sequence of characters, so from` ... str` it turns out "P", "p", "and", "in", "e", "t" ...
The resulting characters are collected into an array using the standard array declaration🗣️ `[... str] .`

We can also use `Array.from` for this task. It also converts an iterable (such as a string) to an array 👇:

```javascript
let str = 'Hello'
Array.from(str) // "H", "e", "l", "l", "o"
// Array.from converts an iterable to an array
```

![spread](/img/javascript/14.jpg)

The result is the same as `[...str]`. But there is a difference between `Array.from(obj)` and `[...obj] `:

- `Array.from` works with both pseudo-arrays and iterables.
- The `... spread` operator works `only` with iterable objects.

Therefore, `Array.from` is a more general method.

## Total

![Elipsis](https://media.giphy.com/media/UWXLULrP5KGDC/giphy.gif)

When we see `"..."` in code код, it can be either the residual parameters `...rest` or the extension operator` ...spread`.

How to distinguish them from each other:

- If `...` is located at the end of the function argument list, then these are "residual parameters". It collects the rest of the unspecified arguments and makes an array of them.
- If `...` occurs in a function call or elsewhere, it is an "extension operator". It extracts elements from an array to initialize the function.

It is useful to remember:

- Residual parameters are used to create new functions with an undefined number of arguments.
- Using the spread operator, you can insert an array into a function that, by default, works with a regular list of arguments.
  “Together, these constructs make it easy to convert sets of values ​​to and from arrays.

 [![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

## Problems?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Write to [Discord](https://discord.gg/6GDAfXn) chat.

## Questions:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

If `...` is located at the end of the function argument list, then we are dealing with:

1. Residual parameter
2. Expansion operator
3. Random indicators

To create a function with an undefined number of arguments, use:

1. Residual parameters `...rest`
2. The spread operator `...spread`
3. External call functions

You can combine two arrays into one using:

1. Expansion operator
2. The `Array.from` operator
3. Residual parameter

In order to understand how much you learned this lesson, take the test in the [mobile application](http://onelink.to/njhc95) of our school on this topic or in our [telegram bot](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

## Links

1. [MDN web doc. Spread syntax article](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/spread_syntax)
2. [Residual Parameters and the Spread Operator article](https://learn.javascript.ru/rest-parameters-spread-operator)
3. [The article "The spread and rest operator"](https://medium.com/@stasonmars/%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80-spread-%D0%B8-rest-%D0%BF%D0%B0%D1%80%D0%B0%D0%BC%D0%B5%D1%82%D1%80%D1%8B-%D0%B2-javascript-22eb33cb0825)

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
Например:
```jsx
function showName() {
  console.log( arguments.length )
  console.log( arguments[0] )
  console.log( arguments[1] )

  // Объект arguments можно перебирать
  // for (let arg of arguments) console.log(arg)
}

// Вывод: 2, Юлий, Цезарь
showName("Юлий", "Цезарь")

// Вывод: 1, Илья, undefined (второго аргумента нет)
showName("Илья")
```
Раньше в языке не было остаточных параметров, и получить все аргументы функции можно было только с помощью arguments. Этот способ всё ещё работает, мы можем найти его в старом коде.
Но у него есть один недостаток. Хотя arguments похож на массив, и его тоже можно перебирать, это всё же не массив. Он не поддерживает методы массивов, поэтому мы не можем, например, вызвать arguments.map(...).
К тому же, arguments всегда содержит все аргументы функции — мы не можем получить их часть. А остаточные параметры позволяют это сделать.
Соответственно, для более удобной работы с аргументами лучше использовать остаточные параметры.
-->
