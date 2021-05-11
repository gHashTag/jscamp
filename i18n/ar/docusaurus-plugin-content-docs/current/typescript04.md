---
id: typescript04
title: Function types
sidebar_label: Function types
---


Like JavaScript, functions in `TypeScript` can be named or anonymous. This allows you to choose the most convenient approach for developing your application, whether it is building a list of functions in the API, or nesting one function within another. ...

## Function type

Each function has a type, just like regular variables. A function type actually represents a combination of parameter types and return types. For example, take the following function:

```javascript
function sum(x: number, y: number): number {
  return x + y
}
```

It is of type `(x: number, y: number) => number;`, that is, it takes two number parameters and returns a value of type number. Parameter names in a function type do not have to match the names of a specific function. The return type is preceded by an equal sign with an arrow.

And just like defining variables of a specific type, you can define variables that have a function type:

```javascript
let op: (x: number, y: number) => number
```

That is, the variable `op` represents any function that takes two numbers and returns a number. For example:

```javascript
function sum(x: number, y: number): number {
  return x + y
}
function subtract(a: number, b: number): number {
  return a - b
}

let op: (x: number, y: number) => number

op = sum
console.log(op(2, 4)) // Работает как сложение = 6

op = subtract
console.log(op(6, 4)) // Сейчас как вычитание = 2
```

Here, at the beginning, the variable `op` points to the function` sum. `And accordingly, calling op (2, 4) will actually represent a call to sum (2, 4). And then `op` points to a function `subtract.`

## Callback functions

A function type can be used like a variable type, but it can also be used to define the type of a parameter of another function:

```javascript
function mathOp(x: number, y: number, operation: (a: number, b: number) => number): number {
  let result = operation(x, y)
  return result
}
let operationFunc: (x: number, y: number) => number

operationFunc = function (a: number, b: number): number {
  return a + b
}
console.log(mathOp(10, 20, operationFunc)) // Сложение = 30

operationFunc = function (a: number, b: number): number {
  return a * b
}
console.log(mathOp(10, 20, operationFunc)) // Умножение = 200
```

Here, in the `mathOp` function, the third parameter is just a function that takes two parameters of type number and returns a number. In fact, this way we can pass callback functions, for example, when generating events when another function is triggered in response to some action.

## Arrow functions

You can use arrow functions or `arrow functions' to define functions in` TypeScript`. Arrow functions represent expressions like `(parameters) => function body.` For example:

```javascript
let sum = (x: number, y: number) => x + y

let result = sum(15, 35) // 50
console.log(result)
```

The parameter type can be omitted:

```jsx live
function learnJavaScript() {
  let sum = (x, y) => x + y

  let result = sum(15, 35) // 50
  return result
}
```

If the arrow function requires no parameters, empty parentheses are used. If only one parameter is passed, then the parentheses can be omitted:

```jsx live
function learnJavaScript() {
  let square = x => x * x
  let hello = () => 'Hello world'

  return hello() + ' ' + square(7)
}
```

If the function body represents multiple expressions, rather than just one expression, as in the example above, then you can again enclose all expressions in curly braces:

```javascript
let sum = (x: number, y: number) => {
  x *= 2
  return x + y
}

let result = sum(15, 35) // 65
console.log(result)
```

Arrow functions can be passed to a function instead of a parameter, which is a function:

```javascript
function mathOp(x: number, y: number, operation: (a: number, b: number) => number): number {
  let result = operation(x, y)
  return result
}
console.log(mathOp(10, 20, (x, y) => x + y)) // 30
console.log(mathOp(10, 20, (x, y) => x * y)) // 200
```

## Functional types

Add types for functions `add` and `myAdd:`

```javascript
function add(x: number, y: number): number {
  return x + y
}

let myAdd = function (x: number, y: number): number {
  return x + y
}
```

As you can see, we added types not only to the parameters passed to the function, but also to the value returned by the function.

Now let's describe the full type of this function:

```javascript
let myAdd: (baseValue: number, increment: number) => number = function (x: number, y: number): number {
  return x + y
}
```

A functional type has two parts: the argument types and the return type. The return type is determined after `=>.` If the function does not return any value, it must be specified `void.`

## Questions:

1. Functions in `TypeScript` can be:

- named and anonymous
- archived and unpacked
- for Windows and MaC OS
- typical and not typical

2. The function is of type as:

- return type
- integer
- line only
- return value

3. Functions can be passed to a function instead of a parameter:

- Can
- You can't
- Only in the module
- Mac OS only

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

In order to understand how much you learned this lesson, take the test in the [mobile application](http://onelink.to/njhc95) in our school on this topic.

![Sumerian school](/img/app.jpg)

## Links:

1. [Article "Function type and arrow functions", metanit.com](https://metanit.com/web/typescript/2.3.php)
2. [Article "Functions in language TypeScript", medium.com](https://medium.com/@sergey.bakaev/%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8-%D0%B2-%D1%8F%D0%B7%D1%8B%D0%BA%D0%B5-typescript-1cb853e09020)
3. [Article "Types of functions", typescript-lang.ru](http://typescript-lang.ru/docs/Functions.html)

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
