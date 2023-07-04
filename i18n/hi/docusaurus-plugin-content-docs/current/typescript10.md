---
id: typescript10
title: Модули
sidebar_label: Модули
---

Концепция модулей впервые появилась в стандарте _ECMAScript 2015_. Модули позволяют разбить сложное приложение на отдельные файлы, в каждом из которых содержится строго определенный функционал, а после, с помощью импортирования, собрать их воедино. Переменные, классы, функции, объявленные в модуле, не доступны извне этого модуля, если они не экспортируются с помощью команды `export`. А для того, чтобы использовать экспортированные части в другом модуле, нужно их импортировать, воспользовавшись командой `import`.

## Экспорт

Любое объявление можно экспортировать с помощью ключевого слова `export`.

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

## Экспорт по умолчанию

С помощью ключевого слова `default` можно делать экспорт по умолчанию.

[Playground Link](https://www.typescriptlang.org/play?#code/KYDwDg9gTgLgBAE2AMwIYFcA28DGnUDOBcAqgcFHAN4BQc9cOEAdgTFOjjNABRjoAjTAEsccZqgC2wAJTUAvjXlA)

```jsx
export default class User {
    constructor(public name) {}
}
```

## Импорт

Подключить экспортируемую функциональность модуля можно с помощью ключевого слова `import`.

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

## Реэкспорт

В модуле можно выполнить реэкспорт функционала какого-то другого модуля при помощи конструкции `export .. from`. При этом локально импорт не производится и переменная не создается.

[Playground Link](https://www.typescriptlang.org/play?#code/KYDwDg9gTgLgBAbzgITgQwM5wEZwL5wBmUEAtnAOQB0A9BgMZQCWYMGFA3EA)

```jsx
export { B as b } from './scripts'
```

## Вопросы



Теперь мы готовы с вами изучать _TypeScript_, но для того чтобы понять на сколько вы усвоили этот урок пройдите тест в [мобильном приложении](http://onelink.to/njhc95) в нашей школы по этой теме.

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

## Ссылки

1. [TypeScriptLang](https://www.typescriptlang.org/docs/handbook/modules.html)
2. [Модули](http://typescript-lang.ru/docs/Modules.html)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr> 
    <td align="center"><a href="https://github.com/IIo3iTiv"><img src="https://avatars1.githubusercontent.com/u/72025062?v=4?s=200" width="200px;" alt=""/><br /><sub><b>IIo3iTiv</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=IIo3iTiv" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
  </tr>
</table>

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)
