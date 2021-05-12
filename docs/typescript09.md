---
id: typescript09
title: Declarations
sidebar_label: Declarations
---

Declarations are a very important part of _TypeScript_ due to which static typing is projected onto dynamic _JavaScript_.

## Declaration

Since the development of programs in _TypeScript_ uses libraries written in _JavaScript_, the `tsc` compiler, whose main task is type checking, feels like it is blindfolded. Despite the fact that with each new version type inference is getting better and better at understanding _JavaScript_, it is still far from ideal. In addition, parsing the _JavaScript_ code adds a load on the processor, which is sometimes not enough precious time when developing modern applications.

_TypeScript_ solved this problem by connecting to the project the declarations it generated in advance or manually created by developers. Declarations are placed in files with the extension `.d.ts` and consist only of type declarations that completely repeat the program until the moment of compilation, when it was deprived of all typing features. Their operation is very similar to the operation of files with the extension `.h` in languages _C/C++_.

```jsx
// Файл Animal.ts
export default class Animal {
   public name: string = 'animal';
   public voice(): void {}
}

// Файл Animal.d.ts
declare module "Animal" {
   export default class Animal {
       name: string;
       voice(): void;
   }
}
```

## Payment

Now you are on a stripped-down version of the site, after subscribing to [Patreon](https://www.patreon.com/javascriptcamp), you will get full access to the training course, as well as access to our server's private channels in [Discord](https://discord.gg/6GDAfXn).

Download our [mobile application](http://onelink.to/njhc95) or get tested in our [JavaScript telegram bot](https://t.me/javascriptcamp_bot), and also subscribe to [our news](https://t.me/javascriptapp).

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)


[![Sumerian school](/img/app.jpg)](http://onelink.to/njhc95)

 

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr> 
    <td align="center"><a href="https://github.com/IIo3iTiv"><img src="https://avatars1.githubusercontent.com/u/72025062?v=4?s=200" width="200px;" alt=""/><br /><sub><b>IIo3iTiv</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=IIo3iTiv" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
  </tr>
</table>

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
