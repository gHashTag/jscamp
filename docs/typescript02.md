---
id: typescript02
title: Data types
sidebar_label: Data types
---


As you already know, `TypeScript` is a statically typed language. A `statically typed language` is a programming language that has a type system. Why are types needed? `Data types` are used to add static constraints to programmatic items such as functions, variables and properties. This allows the compiler and development tools to provide more thorough validation and support during development. Although JavaScript is a dynamically typed language, types are still there, but the assignment happens at runtime, not at compile time. All JavaScript types are present in TypeScript, but TypeScript works with them differently and adds its own types.

## Types in TypeScript

All types in _TypeScript_ are subtypes of the main type, which is the type `Any`. The `Any` type is the only one that can represent any JavaScript value without any restrictions. All other types impose certain _constraints_ on their values.

### Any

The `Any` type is used when we do not know what type this or that variable should have. This variable can be obtained from some dynamic content, such as if some third-party library were used. In such cases, you should abandon the type checking and allow such variables to be checked at compile time. In order to do this, you need to specify the variable type Any using the keyword `any`.

```jsx
let variable: any
```

[Example](https://www.typescriptlang.org/play?#code/DYUwLgBAlgzgggOwJ4C4IENkCgDGB7BGPUAOmDwHMAKWRJCAaggHIAaCQIhBAOEEH4QNZxhDBIADiDwAzaPGQBKLLWQQAvCxhgATlAQUAjM1wEipctUX0mbTr36DhYydLrzzKiABZDhYiDKUaMhYs7Nx8LHai4lLmLoFuAN4Avl7GvqYBdIJWobZM9lFOckA)

```jsx
let isAny: any
console.log(isAny + ', Тип: ' + typeof isAny)
isAny = 'string1'
console.log(isAny + ', Тип: ' + typeof isAny)
isAny = 4
console.log(isAny + ', Тип: ' + typeof isAny)
isAny = {}
console.log(isAny + ', Тип: ' + typeof isAny)
```

## Payment

Now you are on a stripped-down version of the site, after subscribing to [Patreon](https://www.patreon.com/javascriptcamp), you will get full access to the training course, as well as access to our server's private channels in [Discord](https://discord.gg/6GDAfXn).

Download our [mobile application](http://onelink.to/njhc95) or get tested in our [JavaScript telegram bot](https://t.me/javascriptcamp_bot), and also subscribe to [our news](https://t.me/javascriptapp).

[![Become a Patron!](/Img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)


[![Sumerian school](/img/app.jpg)](http://onelink.to/njhc95)

![JavaScript Camp](/img/bandlink.png)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr> 
    <td align="center"><a href="https://github.com/IIo3iTiv"><img src="https://avatars1.githubusercontent.com/u/72025062?v=4?s=200" width="200px;" alt=""/><br /><sub><b>IIo3iTiv</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=IIo3iTiv" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
  </tr>
</table>

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
