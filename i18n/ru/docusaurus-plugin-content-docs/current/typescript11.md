---
id: typescript11
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

## Оплата

Сейчас ты находишся на урезанной версии сайта, после оформления подписки на [Patreon](https://www.patreon.com/javascriptcamp), ты получишь полный доступ к обучающему курсу, а также доступ к серетным каналам нашего сервера в [Discord](https://discord.gg/6GDAfXn).  

Качай наше [мобильное приложение](http://onelink.to/njhc95) или пройди тестирование в нашем [JavaScript телеграм боте](https://t.me/javascriptcamp_bot), а также подпишись на [наши новости](https://t.me/javascriptapp).


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
