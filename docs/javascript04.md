---
id: javascript04
title: Data types
sidebar_label: Data types
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/04.jpg)

## Dynamic typing

JavaScript is a loosely typed or dynamic language. This means that you do not need to define the type of the variable  in advance.

![Dinamics](https://media.giphy.com/media/26uf759LlDftqZNVm/giphy.gif)

The type will be determined automatically during program execution. It also means that you can use one variable  to store  different types of data :

```jsx live
function learnJavaScript() {
  let foo = 42 // now foo is of type number
  foo = 'bar' //and now foo is of type string
  return typeof foo
}
```

<!-- ## Video

<YouTube videoId="1zXZCVbNbkQ" /> -->

## typeof

In order to understand the data type contained in a variable, the `typeof` operator is used. The `typeof` operator returns the type of the argument.
It has two syntaxes, with brackets and without:

- Operator syntax: `typeof x`

- Function syntax: `typeof (x)`

They work the same, but the first syntax is shorter.

The result of `typeof` is a string containing the type.

```jsx live
function learnJavaScript() {
  let num = 9
  return typeof num
}
```

## Data types

![Data types](https://media.giphy.com/media/NPXkCN2FutVO1Nt4P9/giphy.gif)

The JavaScript standard defines 9 data types. Get to know each of them by outputting to the console and then I will tell you about each of them in more detail.

```javascript
let one = { firstName: 'John', lastName: 'Smith' } // object

let two = () => {} // function

let three = 'bar' // string

let four = 42 // number

let five = 19241924124n // bigint

let six = true // boolean

let seven = null // null

let eight // undefined

let nine = Symbol() // symbol
```

## Objects

![cupboard](https://media.giphy.com/media/l2Sq0NFJlJC5Dqb7y/giphy.gif)

In computer terminology, an object is a value in memory that can be referenced by an identifier. In JavaScript, an object can be thought of as a collection of properties. It's like a closet for storing other types of data.

## Functions

![Function](https://media.giphy.com/media/FuSJ5C7SSHlZCxjC6q/giphy.gif)

Functions⚙️ `function` are ordinary objects that have the additional ability to be called for execution.

## Primitive values

![Primitive](https://media.giphy.com/media/rBdWc61BPFVYc/giphy.gif)

All data types in JavaScript, except for objects, are immutable (values cannot be modified, only overwritten with a new full value). For example, unlike the C language, where a string can be corrected character by character, in JavaScript the strings are re-created only completely. Values of these types are called "primitive values".

## Text strings

![text](https://media.giphy.com/media/26n6AaCcCajAyZx04/giphy.gif)

In JavaScript, the type `string` is used to represent text data.

## Numbers

![Numbers](https://media.giphy.com/media/xT5LMMneIRG1UJquOI/giphy.gif)

The numeric data type `number` represents both integer values and floating point numbers.

## BigInt

![giant](https://media.giphy.com/media/LZGipmRpX6uwE/giphy.gif)

In JavaScript, the `number` type cannot contain numbers greater than (253-1) (i.e. 9007199254740991), or less than - (253-1) for negative numbers. This technical limitation is due to their internal representation.

For most cases, this is sufficient. But sometimes we need really gigantic numbers, like in cryptography or when using a "timestamp" with microseconds.

The `bigInt` type was added to JavaScript to allow for arbitrary length integers.

## Boolean data type

The boolean type `boolean` represents a logical entity and has two 2️⃣ values: `true` 

![true](https://media.giphy.com/media/ap6wcjRyi8HoA/giphy.gif)

and `false` 

![False](https://media.giphy.com/media/HNOVuT5AvCK1fgvp1m/giphy.gif)

This type is usually used to store  yes / no values: true  means “yes, right,” and false  means “no, wrong”.

## Null

![Null](https://media.giphy.com/media/26hkhPJ5hmdD87HYA/giphy.gif)

This data type has only one value: `null`. This value is specially designated as a primitive, since it is indeed a visible primitive in behavior. But at the same time, all other Objects are inherited from `null`, therefore, despite the fact that `null` returns a primitive value, its type is an object.
For example, you can assign it to the default value.

## Undefined

![Unndefined](https://media.giphy.com/media/PkKzNQjwPy7GvxZbfe/giphy.gif)

A variable  that has not been assigned a value will have the value `undefined`.

### Differences between null and undefined

![Spiderman](https://media.giphy.com/media/l36kU80xPf0ojG0Erg/giphy.gif)

`null` is the definite value of the absence of an object, while` undefined` denotes ambiguity. For example, you can check this in the browser console:

```javascript
let TestVar
console.log(TestVar) // undefined
console.log(typeof TestVar) // undefined
```

`null` is an assignment value. It can be assigned to a variable  as a representation with no value:

```javascript
let TestVar = null
console.log(TestVar) // null
console.log(typeof TestVar) // object
```

It is clear from the previous examples that `undefined` and `null` are two 2️⃣ different types: `undefined` is the type itself (undefined), and` null` is an object.

```javascript
null === undefined // false
null == undefined // true
null === null // true
```

## Data type Symbol

![Symbol](https://media.giphy.com/media/QvSGhHq8CrVzq/giphy.gif)

The `Symbol` type is a unique and immutable primitive value that can be used as a key for a property of an object. This type is so rarely used in real work that we will not even consider it in this course.

 [![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

## Problems?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Write to [Discord](https://discord.gg/6GDAfXn) chat.

## Questions:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

What is the `typeof` operator used for?

1. To determine the data type
2. To output the data type to the console
3. To enter a new variable

How many data types does the JavaScript standard define?

1.7
2.9
3.5

What data type contains a set of properties?

1. `function`
2. `string`
3. `object`

Can a string be adjusted character by character in JavaScript?

1. Yes
2. Possibly in special cases
3. No, the lines are re-created only completely

What data type makes it possible to work with integers of arbitrary length?

1. `number`
2. `string`
3. `bigint`

Which value is not of type `boolean`?

1. `false`
2. `null`
3. `true`

Which data type has a value that can be used as a key for an object property?

1.` undefined` 2.` symbol` 3.` null`

In order to understand how much you learned this lesson, take the test in the [mobile application](http://onelink.to/njhc95) of our school on this topic or in our [telegram bot](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

## Links

1. [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Data_structures)
2. [Code for Teens: The Perfect Beginner's Guide to Programming, Volume 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)
3. [JavaScript.ru](https://learn.javascript.ru/types)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">  </a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>
  
</table>

