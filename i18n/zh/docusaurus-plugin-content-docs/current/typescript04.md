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

## Payment

Now you are on a stripped-down version of the site, after subscribing to [Patreon](https://www.patreon.com/javascriptcamp), you will get full access to the training course, as well as access to our server's private channels in [Discord](https://discord.gg/6GDAfXn).

Download our [mobile application](http://onelink.to/njhc95) or get tested in our [JavaScript telegram bot](https://t.me/javascriptcamp_bot), and also subscribe to [our news](https://t.me/javascriptapp).

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)


[![Sumerian school](/img/app.jpg)](http://onelink.to/njhc95)

 

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
