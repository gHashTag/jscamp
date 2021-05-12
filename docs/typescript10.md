---
id: typescript10
title: Modules
sidebar_label: Modules
---

The concept of modules first appeared in the _ECMAScript 2015_ standard. Modules allow you to split a complex application into separate files, each of which contains strictly defined functionality, and then, using import, to put them together. Variables, classes, functions declared in a module are not available from outside this module, unless they are exported using the `export` command. And in order to use the exported parts in another module, you need to import them using the `import` command.

## Export

Any declaration can be exported using the `export` keyword.

[Playground Link](https://www.typescriptlang.org/play?#code/PTAEloQQuEEQRBH4QQ+EEAIgghEFLQrCCPYHhB2F4QPeQThAAoAGwFMAXUAMwCcBXASyoC5QBnK+5gOwDmoALygA5ACMAhnxlSxAGhKgVoACYUAbswDGFDt16CR4zgFsp9KgAcAFgHs+FRctUT79sh3eeKMkzyMFCQUAB7W9lagAN50TKwK6lq6FIk+ZKBSnKDMnABCHhkAviQkIBAwCCigkPB40MiADCB4yIDSICHhkTQ6jtygFCYATAB0AOwAjAAcg5NTMwAsAKwAnAAMS4MAzIubAGyrM6PzE9uDu7uDi6ul5VBwSKiAIiCAwiB4kIBiIIAcIJ8dEVG0jD4OiozEcXEYZgAFKEFABPDh8CESCj0ACUCKRKJirhU9GojHofFAoVAAGpQLCSCUymA7lVUJ8WphHugiNBGr8ujk+FQUbQpHpQAAxeI0aI40CyMz6Lg8fgCJSqLgAdwo1CcnE4GLMyPoircjgoWtA6T8fCpN1plQeNUA3CCNaDszlRHRkLLZACCfGYFgy4qVZnsmgokLUuSoMj0AEk+ABZago42InVY0SrVHYpVKnp8Ti+YZkewCSEAAy9PqkGUDwbUoAAJNEw9xIxQY-HefROEUzMMS6iANwSkrU27W6qAJhBoOhAMwg8FA0EQjUA7CDPZ1iuIsKiJVLgsyJEWbxLl32gIpAA)

```jsx
// Экспорт переменной
let fruit: string = 'banana',
  device: string = 'smartphone',
  bool: boolean = true
export { fruit, device, bool as isBool }

// Экспорт константы
export const e = 2.7182818284590452353602874713526625

// Экспорт функции
export function sum(x, y: number): number {
  return x + y
}

// Экспорт интерфейса
export interface Fruit {
  name: string;
  sweetness: number;
  bones: boolean;
}

// Экспорт класса
export class Animal {
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`)
  }
}

// Экспорт всего сразу
export { fruit, e, sum, Fruit, Animal }
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
