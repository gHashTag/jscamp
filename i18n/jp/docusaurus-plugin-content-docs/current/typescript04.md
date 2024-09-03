---
id: typescript04
title: Типы функций
sidebar_label: Типы функций
---

Как и в JavaScript, функции в TypeScript могут быть как именованные, так и анонимные. Это позволяет вам выбрать наиболее удобный подход для разработки вашего приложения, будь то выстраивание списка в функций в API, либо вкладывая одну функцию в другую.

## Тип функции

Каждая функция имеет тип, как и обычные переменные. Тип функции фактически представляет комбинацию типов параметров и типа возвращаемого значения. Например, возьмем следующую функцию:

```ts
let sum = (x: number, y: number): number => x + y
```

Она имеет тип `(x:number, y:number) => number`, то есть принимает два параметра `number` и возвращает значение типа `number`. Названия параметров в типе функции необязательно должны соответствовать названиям конкретной функции. А перед типом возвращаемого значения ставится знак равно со стрелкой.

И подобно тому, как определяются переменные определенного типа, можно определять переменные, которые имеют тип функции:

```ts
let op: (x: number, y: number) => number
```

То есть переменная `op` представляет любую функцию, которая принимает два числа и которая возвращает число.

[Пример](https://www.typescriptlang.org/play?ssl=12&ssc=50&pln=1&pc=1#code/DYUwLgBAzgrgthAvBAFADwFwQHbwEYgBOANBAJ5a5wGECUl+RSAfBGhANTkBQ3oksPGEIBDAMaRkKEQ2pFSeWTXo5GhFhBEQAtBDy8+4CAHsADlnRL55K3Q1UavM0mjxuY49ijHQAOmDGAOYoZigATKQALLS0EAD0cRCABCCADCCAjCCAfCCAQiApgKwgWRCAXCAphRCAgiCA3CAZgGwguYC8IIAcILkuAGxOpi6CwuJg7p7efgHBoS1RMfGJgIQguYCcIIDiICllRSUQgEwggNIgcw05jc3IYUA)

```ts
let sum = (x: number, y: number): number => x + y

let subtract = (a: number, b: number): number => a - b

let op: (x: number, y: number) => number

op = sum
console.log(op(2, 4)) // Работает как сложение = 6

op = subtract
console.log(op(6, 4)) // Сейчас как вычитание = 2
```

Здесь вначале переменная `op` указывает на функцию `sum.` И соответственно вызов `op(2, 4)` фактически будет представлять вызов `sum(2, 4)`. А затем `op` указывает на функцию `subtract.`

## Функции обратного вызова

Тип функции можно использовать как тип переменной, но он также может применяться для определения типа параметра другой функции:

[Пример](https://www.typescriptlang.org/play?ssl=14&ssc=62&pln=1&pc=1#code/DYUwLgBAtghmAWB5ADhAvBAFADwFwQDsBXKAIxACcAaCAT32LMpoHtlK4BLFg-TGBiXLUIpQUwoBKdAD5CQypPHDZEAN4AoCBFCQKIAM5FgkDGw5huBHDVqStEfWCIUCjw8bAaAvho26IcwouHgAxIgIAYz48eQlbZUVVRmE-IJCCcKj0bX5EkTE44SUiylUYCABqUT9IngMWUAA6YBYAc0xYBBRMAEYABhoAJkHA9mDLMIjIyWkAejmIQEIQQG4QQD4QQDYQQFYQQF4QQA4QLZyAZn608YysyJy80oL8kpSytDkKgCoajTqCBubWjq6kMg+qMRqxzpNMtNZhAFhBAMQggB4QHabXYHHIjfpAA)

```ts
let mathOp = (x: number, y: number, operation: (a: number, b: number) => number): number => {
  let result = operation(x, y)
  return result
}

let operationFunc: (x: number, y: number) => number

operationFunc = (a: number, b: number): number => a + b

console.log(mathOp(10, 20, operationFunc)) // Сложение = 30

operationFunc = (a: number, b: number): number => a * b

console.log(mathOp(10, 20, operationFunc)) // Умножение = 200
```

Здесь в функции `mathOp` третий парметр как раз представляет функцию, которая принимает два параметра типа `number` и возвращает число. Фактически тем самым мы можем передавать функции обратного вызова, например, при генерации событий, когда в ответ на некоторое действие срабатывает другая функция.

<!-- ## Стрелочные функции

Для определения функций в `TypeScript` можно использовать стрелочные функции или `arrow functions.` Стрелочные функции представляют выражения типа `(параметры) => тело функции.` Например:

```javascript
let sum = (x: number, y: number) => x + y

let result = sum(15, 35) // 50
console.log(result)
```

Тип параметров можно опускать:

```jsx live
function learnJavaScript() {
  let sum = (x, y) => x + y

  let result = sum(15, 35) // 50
  return result
}
```

Если стрелочная функция не требует параметров, то используются пустые круглые скобки. Если передается только один параметр, то скобки можно опустить:

```jsx live
function learnJavaScript() {
  let square = x => x * x
  let hello = () => 'Hello world'

  return hello() + ' ' + square(7)
}
```

Если тело функции представляет множество выражений, а не просто одно выражение, как в примере выше, тогда можно опять же заключить все выражения в фигурные скобки:

```javascript
let sum = (x: number, y: number) => {
  x *= 2
  return x + y
}

let result = sum(15, 35) // 65
console.log(result)
```

Стрелочные функции можно передавать в функцию вместо параметра, который представляет собой функцию:

```javascript
function mathOp(x: number, y: number, operation: (a: number, b: number) => number): number {
  let result = operation(x, y)
  return result
}
console.log(mathOp(10, 20, (x, y) => x + y)) // 30
console.log(mathOp(10, 20, (x, y) => x * y)) // 200
``` -->
<!--
## Функциональные типы

Добавим типы для функций `add` и `myAdd:`

```javascript
function add(x: number, y: number): number {
  return x + y
}

let myAdd = function (x: number, y: number): number {
  return x + y
}
```

Как видно, мы добавили типы не только к параметрам, передаваемым в функцию, но и на возвращаемое функцией значение.

Теперь опишем полный тип этой функции:

```javascript
let myAdd: (baseValue: number, increment: number) => number = function (x: number, y: number): number {
  return x + y
}
```

Функциональный тип состоит из двух частей: типов аргументов и типом возвращаемого значения. Тип возвращаемого значения определяется после `=>.` В том случае, если функция не возвращает никакого значения, должно быть указано `void.` -->

## Вопросы:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

Функции в `TypeScript` могут быть:

1. Именованные и анонимные
2. Архивные и распакованные
3. Под Windows и MaC OS
4. Типичные и не типичные

Функция имеет тип как:

1. Тип возвращаемого значения
2. Целое число
3. Только строка
4. Возвращаемое значение

Функции можно передавать в функцию вместо параметра:

1. Можно
2. Нельзя
3. Только в модуле
4. Только в Mac OS

Для того чтобы понять насколько вы усвоили этот урок пройдите тест в [мобильном приложении](http://onelink.to/njhc95) в нашей школы по этой теме.

![Sumerian school](/img/app.jpg)

## Ссылки:

1. [Статья "Тип функции и стрелочные функции", metanit.com](https://metanit.com/web/typescript/2.3.php)
2. [Статья "Функции в языке TypeScript", medium.com](https://medium.com/@sergey.bakaev/%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8-%D0%B2-%D1%8F%D0%B7%D1%8B%D0%BA%D0%B5-typescript-1cb853e09020)
3. [Статья "Типы функций", typescript-lang.ru](http://typescript-lang.ru/docs/Functions.html)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/KoDim-React"><img src="https://avatars1.githubusercontent.com/u/72087863?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy K.</b></sub></a><br /><a href="#mentoring-KoDim-React" title="Mentoring">  </a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
     <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
     <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
 
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)
