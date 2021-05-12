---
id: typescript08
title: Interfaces
sidebar_label: Interfaces
---


One of the basic tenets of _TypeScript_ is that typing is based on the structure of objects. This type of typing is called `implicit` or` duck '- an object is classified as a particular type (class, interface) if it has (implements) all its properties and methods. Interfaces in TS are used just to describe the types you need.

## Simple example

The best way to learn how interfaces work is to start with a simple example:

[Playground Link](https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABAcxgNwKYDEBOIZSIAUweBAXIgN6JgCGAthpQM5Q4xjKIC+AlNQBQiEYggIWcADYYAdFLjIiAcgDi6DIihxETRMsQBqRKXxRZ9Jn0E9BgmYQYBPXGZaIAvNVqNm+gEJ09PTKADSILADuGBhQYBgsLJQA7OEARggJlMB0UiyatqiYrgREziVQLHxAA)

```jsx
function giveFruit(fruit: { name: string }) {
  console.log('Give to me ' + fruit.name)
}

let myFruits = { name: 'Banana', sweetness: 7, bones: false }
giveFruit(myFruits)
```

The `giveFruit ()` function has a single parameter that requires the passed object to have a property named `name` of type` string`. Note that our object actually has more properties than required, but the compiler only checks to see if at least those required are present and match the required types.

Let's write the same example to test the _name_ property with the _string_ type, but using interfaces.

[Playground Link](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgGJQK7DMg3gKGSORDgFsIAuZAZzClAHMAaQ4mgdwgjBAhprUQGMgCNorYslEB7PoOkyZAGwhwQ+AL758MDCARhgc5I2AA3COiw4AFDEzZq17AEo8bIgjk0VEAHTKMoy2AOQA4hYoYDLIFMihyADUyA42-qQUrlo6qjhkAJ4uYDTIALx4JORUCQBC6g2hzLRcPPIKAOzNsvLU8Mo0KNpmlsW2hcU0rkA)

```jsx
interface Fruit {
  name: string;
  sweetness: number;
  bones: boolean;
}

function giveFruit(fruit: Fruit) {
  console.log('Give to me ' + fruit.name)
}

let myFruits = { name: 'Banana', sweetness: 7, bones: false }
giveFruit(myFruits)
```

The `Fruit` interface is the name we can now use to describe the requirement in the previous example. It still represents the presence of a single property named _name_ of type _string_. Please note that we did not need to explicitly indicate that the object we pass to the giveFruit () function inherits this interface, as it might in other languages. Only the sample is important here. If the object that we pass to the function meets the listed requirements, then everything is allowed.

It's worth noting that type checking does not ** require ** that these properties be in any order, but only that the properties required by the interface are present and of the required type.

## Payment

Now you are on a stripped-down version of the site, after subscribing to [Patreon](https://www.patreon.com/javascriptcamp), you will get full access to the training course, as well as access to our server's private channels in [Discord](https://discord.gg/6GDAfXn).

Download our [mobile application](http://onelink.to/njhc95) or get tested in our [JavaScript telegram bot](https://t.me/javascriptcamp_bot), and also subscribe to [our news](https://t.me/javascriptapp).

[![Become a Patron!](/Img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)


[![Sumerian school](/img/app.jpg)](http://onelink.to/njhc95)

![JavaScript Camp](/img/bandlink.png)

## Links

1. [TypeScriptLang](https://www.typescriptlang.org/docs/handbook/interfaces.html)
2. [Interfaces](https://metanit.com/web/typescript/3.3.php)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr> 
    <td align="center"><a href="https://github.com/IIo3iTiv"><img src="https://avatars1.githubusercontent.com/u/72025062?v=4?s=200" width="200px;" alt=""/><br /><sub><b>IIo3iTiv</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=IIo3iTiv" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
  </tr>
</table>

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
