---
id: typescript07
title: Generalizations
sidebar_label: Generalizations
---


TypeScript is a strongly typed language, but sometimes you need to build functionality so that it can use any data type. In some cases, we could use the any type:

```typescript
function getId(id: any): any {
  return id
}
let result = getId(5)
console.log(result)
```

However, in this case, we cannot use the result of the function as an object of the same type that was passed to the function. For us, this is type any. If instead of the number 5, an object of some class were passed to the function, and then we would have to use this object, for example, call functions on it, then this would be problematic. And to concretize the return type, we can use generics:

```typescript
function getId<T>(id: T): T {
  return id
}
```

With the expression `<T>` we indicate that the function getId is typed with a specific type T. When the function is executed, a specific type will be substituted for T. Moreover, at the compilation stage, the specific type is not known. And the function will return an object of this type. For example:

```typescript
function getId<T>(id: T): T {
  return id
}
let result1 = getId<number>(5)
console.log(result1)
let result2 = getId<string>('abc')
console.log(result2)
```

In the first case, instead of the T parameter, the number type will be used, so we can pass a number to the function. In the second case, instead of T, the string type is used, so in the second case, you can pass a string. Thus, we can pass objects of different types to the function, but at the same time strict typing is preserved, each version of a generic function can only accept objects of a certain type.

Similarly, you can also use generic arrays:

```typescript
function getString<T>(arg: Array<T>): string {
  let result = ''
  for (let i = 0; i < arg.length; i++) {
    if (i > 0) result += ','
    result += arg[i].toString()
  }
  console.log(result)
  return result
}

let result = getString<number>([1, 2, 34, 5])
console.log(result)
```

In this case, regardless of the type of data passed in the array, all its elements will be combined into one common string.

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
    <td align="center"><a href="https://github.com/FELiX-RN"><img src="https://avatars0.githubusercontent.com/u/72006627?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Philipp Dvinyaninov</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=FELiX-RN" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
