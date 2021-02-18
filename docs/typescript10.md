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

## Default export

Using the keyword `default` you can export by default.

[Playground Link](https://www.typescriptlang.org/play?#code/KYDwDg9gTgLgBAE2AMwIYFcA28DGnUDOBcAqgcFHAN4BQc9cOEAdgTFOjjNABRjoAjTAEsccZqgC2wAJTUAvjXlA)

```jsx
export default class User {
    constructor(public name) {}
}
```

## Import

You can connect the exported functionality of the module using the keyword `import`.

[Playground Link](https://www.typescriptlang.org/play?#code/PTAEgwQQeEEfhBD4QQBEEEIgpr0BwglCsIPAUASwFsAHAewCcAXUAb1AEEAaUAIVAF9QAzMkg0AcgB0wAM4BjMniIUR-HDhAQYCZIBYQQNwggeRBQgWRBAXCCBBEDhJADCApYoQMIgkWOsDiICcC8IGkByIPmLkqAVREBTMlw8fELAAK5+ZLLyilDGyAagqvCWgMwgGKAYmI6YkO6klDT0oACGIiVMrBzcvALC4pLSUQpgsSqggEwgBpiAoiCgNqqW6piAnCB5nqAAVCVl9VIygTUhs41yADa+VMWgALygyzKCdEA)

```jsx
// Импорт пример
import { A, B } from './scripts'

// Импорт для экспорта по умолчанию
import User from './users'

// Импорт с другим именем
import { A as a, B } from './scripts'

// Импорт всех модулей
import * as scripts from './scripts'
let a = scripts.A
```

## Re-export

In a module, you can re-export the functionality of some other module using the `export .. from` construction. In this case, no import is performed locally and the variable is not created.

[Playground Link](https://www.typescriptlang.org/play?#code/KYDwDg9gTgLgBAbzgITgQwM5wEZwL5wBmUEAtnAOQB0A9BgMZQCWYMGFA3EA)

```jsx
export { B as b } from './scripts'
```

## Questions

Now we are ready to study _TypeScript_ with you, but in order to understand how much you learned this lesson, take the test in the [mobile application](http://onelink.to/njhc95) in our school on this topic.

![Sumerian school](/img/app.png)

## Links

1. [TypeScriptLang](https://www.typescriptlang.org/docs/handbook/modules.html)
2. [Modules](http://typescript-lang.ru/docs/Modules.html)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr> 
    <td align="center"><a href="https://github.com/IIo3iTiv"><img src="https://avatars1.githubusercontent.com/u/72025062?v=4?s=200" width="200px;" alt=""/><br /><sub><b>IIo3iTiv</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=IIo3iTiv" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
  </tr>
</table>

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
