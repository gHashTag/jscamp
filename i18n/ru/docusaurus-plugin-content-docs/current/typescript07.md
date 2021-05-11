---
id: typescript07
title: Обобщения
sidebar_label: Обобщения
---

TypeScript является строго типизированным языком, однако иногда надо построить функционал так, чтобы он мог использовать данные любых типов. В некоторых случаях мы могли бы использовать тип `any`a:

[Пример](https://www.typescriptlang.org/play?#code/DYUwLgBA5uCSAmEC8EAUBLeAuCBDAdgJ4CUOBhyAfBJgFC2iQBOIAzgK7CQoxgKoBWYrQDGAe3ysxoAHTAxUVCw5diQA)

```typescript
let getId = (id: any): any => id

let result = getId(5)

console.log(result)
```

Однако в этом случае мы не можем использовать результат функции как объект того типа, который передан в функцию. Для нас это тип `any`. Если бы вместо числа `5` в функцию передавался бы объект какого-нибудь класса, и нам потом надо было бы использовать этот объект, например, вызывать у него функции, то это было бы проблематично. И чтобы конкретизировать возвращаемый тип, мы можем использовать обобщения:

```typescript
function getId<T>(id: T): T {
  return id
}
```

С помощью выражения `<T>` мы указываем, что функция `getId` типизирована определенным типом `T`. При выполнении функции вместо `Т` будет подставляться конкретный тип. Причем на этапе компиляции конкретный тип не известен. И возвращать функция будет объект этого типа.

[Пример](https://www.typescriptlang.org/play?ssl=8&ssc=21&pln=1&pc=1#code/GYVwdgxgLglg9mABAcwKZQJIBMA8AVAPgAoYsAuRPASgr0QG8AoRRAJ3RFaVMYF9GANujaoAziAFQAjIgC8KdNhxgQAWwBGqVsQCsVRhASi4QgHQC4yIu3GSp+wcJsSoAJjkLMuUVFYwwyMQA5ACG6hBB+oZgxmYWVs6SrlRAA)

```typescript
function getId<T>(id: T): T {
  return id
}

let result1 = getId<number>(5)
console.log(result1)

let result2 = getId<string>('abc')
console.log(result2)
```

<!-- В первом случае вместо параметра `T` будет испльзоваться тип `number`, поэтому в функцию мы можем передать число. Во втором случае вместо `T` используется тип `string`, поэтому во втором случае можно передать строку. Таким образом, мы можем передать в функцию объекты различных типов, но при этом сохраняется строгая типизация, каждый вариант обобщенной функции может принимать объекты только определенного типа.

Подобным образом еще можно использовать обобщенные массивы:

[Пример](https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABAcwKZQMpQE4zMgHgBUA+ACgENtkAuRAQW2woE9iSBKOgZxz2UQBvAFCJEAG3SJsqbiHFREAXkQByVaMTA42RGUmKYyxAAYA3IiMFEVZADpJ+KAAsLMANTuOQzWJjA9IxJTbxk5BUR3FVUAGg0xMTD5RSibagBtGABdOyg4LFx8Mg5NAF9NCARuOEkHOGQyJIUSxPQQbCQmqGFy4QNpWWTjNEw+fAIwEABbACNUbHJ0gEYYxAAmVYBmABZVgFYsksqwatrxesbB5qA)

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

В данном случае вне зависимости от типа данных, переданных в массиве, все его элементы соединятся в одну общую строку.

## Вопросы

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

Для чего используется тип `any`?

1. Принимает любые типы
2. Принимает любые числа
3. Принимает любые символы

Можно ли использовать результат функции как объект того типа, который передан в функцию?

1. `true`
2. `false`

С помощью какого выражения мы указываем, что функция будет типизирована определенным типом, при выполнении которой вместо него будет подставляться конкретный тип?

1.  `t`
2.  `T`
3.  `<T>` 

## Ссылки:

1.  [TypeScript документация](https://www.typescriptlang.org/docs/handbook/generics.html)
2.  [Metanit](https://metanit.com/web/typescript/3.5.php)
3.  [Canonium](https://canonium.com/articles/typescript-generics)

-->
## Оплата

Сейчас ты находишся на урезанной версии сайта, после оформления подписки на [Patreon](https://www.patreon.com/javascriptcamp), ты получишь полный доступ к обучающему курсу, а также доступ к серетным каналам нашего сервера в [Discord](https://discord.gg/6GDAfXn).  

Качай наше [мобильное приложение](http://onelink.to/njhc95) или пройди тестирование в нашем [JavaScript телеграм боте](https://t.me/javascriptcamp_bot), а также подпишись на [наши новости](https://t.me/javascriptapp).


[![Sumerian school](/img/app.jpg)](http://onelink.to/njhc95)

![JavaScript Camp](/img/bandlink.png)

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
