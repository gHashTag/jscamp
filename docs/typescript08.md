---
id: typescript08
title: Интерфейсы
sidebar_label: Интерфейсы
---

Одним из основных принципов TypeScript является то, что типизация основана на структуре (shape) объектов. Такой способ типизации называют неявной или «утиной» — объект относят к тому или иному типу (классу, интерфейсу), если он имеет (реализует) все его свойства и методы. Интерфейсы в TS применяются как раз для того, чтобы описывать нужные вам типы. 

## Пройстой пример

Лучший способ узнать, как работают интерфейсы - начасть с простого примера:

[Playground Link](https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABAcxgNwKYDEBOIZSIAUweBAXIgN6JgCGAthpQM5Q4xjKIC+AlNQBQiEYggIWcADYYAdFLjIiAcgDi6DIihxETRMsQBqRKXxRZ9Jn0E9BgmYQYBPXGZaIAvNVqNm+gEJ09PTKADSILADuGBhQYBgsLJQA7OEARggJlMB0UiyatqiYrgREziVQLHxAA)

```jsx
function giveFruit (fruit: { name: string }) {
    console.log('Give to me ' + fruit.name)
}

let myFruits = { name: 'Banana', sweetness: 7, bones: false }
giveFruit(myFruits)
```

Функция `giveFruit()` имеет единственный параметр, который требует, чтобы переданный объект имел свойство с именем `name` типа `string`. Обратите внимание, что наш объект на самом деле имеет больше свойств, чем требуется, но компилятор только проверяет, присутствуют ли хотя бы те, которые необходимы, и соответствуют требуемым типам.

Напишем тот же пример, для проверки свойства *name* с типом *string*, но при помощи интерфейсов.

[Playground Link](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgGJQK7DMg3gKGSORDgFsIAuZAZzClAHMAaQ4mgdwgjBAhprUQGMgCNorYslEB7PoOkyZAGwhwQ+AL758MDCARhgc5I2AA3COiw4AFDEzZq17AEo8bIgjk0VEAHTKMoy2AOQA4hYoYDLIFMihyADUyA42-qQUrlo6qjhkAJ4uYDTIALx4JORUCQBC6g2hzLRcPPIKAOzNsvLU8Mo0KNpmlsW2hcU0rkA)

```jsx
interface Fruit {
    name: string,
    sweetness: number,
    bones: boolean
}

function giveFruit (fruit: Fruit) {
    console.log('Give to me ' + fruit.name)
}

let myFruits = { name: 'Banana', sweetness: 7, bones: false }
giveFruit(myFruits)
```

Интерфейс `Fruit` - это имя, которое мы теперь можем использовать для описания требования в предыдущем примере. Он по-прежнему представляет наличие единственного свойства с именем *name* типа *string*. Обратите внимание, что нам не нужно было явно указывать, что объект, который мы передаем в функцию `giveFruit()`, наследует этот интерфейс, как это может быть в других языках. Здесь важен только образец. Если объект, который мы передаем функции, соответствует перечисленным требованиям, то всё позволено.

Стоит отметить, что проверка типов **не требует**, чтобы эти свойства имели какой-либо порядок, а только то, что свойства, необходимые для интерфейса, присутствуют и имеют требуемый тип.

## Необязательние свойства

Не все свойства интерфейса могут быть обязательными. Некоторые существуют при определенных условиях или могут вообще отсутствовать. Интерфейсы с необязательными свойствами записываются аналогично другим интерфейсам, где каждое необязательное свойство обозначается знаком `?` в конце имени свойства в декларации.

[Playground Link](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgGJQK7DMg3gKGSORDgFsIAuZAZzClAHMAaQ4mgdwgjBAhprUQGMgCNorYslEB7PoOkyZAGwhwQk4ghUyoAfiEjxUfAF98+VTlHrb1dFhwBePGylFSFagHIAQrdJvTXdaLh55BQB2YPdZeWp4ZRoIGKltZV1qAAYAD1RUAFEARgBmAFZkMwsrZDgABzrVe0xsZBcCEI9yKmRvAEEG1SC3d05uXn4FMtTiOP5qegwIMyA)

```jsx
interface Fruit {
    name: string,
    sweetness: number,
    bones: boolean,
    color?: number
}

let banana: Fruit = {
        name: 'Banana',
        sweetness: 7,
        bones: false,
        color: 0xFFE135 
}

let apple: Fruit = {
        name: 'Apple',
        sweetness: 5,
        bones: true
}
```

Необязательные свойства популярны при создании шаблонов, таких как «option bags», в которых вы передаете объект в функцию, у которого заполнены только пара свойств.

## Только для чтения

Некоторые свойства могут быть заданы только для чтения, а значение они получат при создании объекта. Этого можно добиться, поместив ключевое слово readonly перед именем свойства.

```jsx
interface Point {
  readonly x: number;
  readonly y: number;
}

let a1: Point = { x: 10, y: 40 }
console.log('Точка [' + a1.x + '; ' + a1.y + ']')
```

Можно создать переменную c типом Point, присвоив ей литерал объекта. После этого значения свойств x и y изменять будет нельзя.

## Лишние свойства

В нашем первом примере использования интерфейсов *TypeScript* позволил передать `{ name: string; sweetness: number, bones: boolean }` там, где ожидалось всего лишь `{ name: string; }`. Также мы узнали о необязательных свойствах, и о том, как они могут быть полезны при передаче аргументов в функции. Расмотрим пример.

```jsx
interface Fruit {
    name: string,
    sweetness?: number,
    bones?: boolean,
    color?: number
}

function addFruit(x: Fruit): { name: string, color: number} {
    // ...
}

let banana = addFruit({ name: 'banana', colour: 0xFFE135 })
```

Обратите внимание, что аргумент, передаваемый в `addFruit()`, записан как `colour` вместо `color`. В чистом *JavaScript* подобные вещи не выдают ошибок, но и не работают так, как хотел бы разработчик.

Можно сказать, что данная программа корректна с точки зрения типов, так как типы свойств `sweetness` совместимы, `color` отсутствует, а наличие дополнительного свойства colour не имеет никакого значения.

Однако TypeScript делает предположение, что в этом куске кода есть ошибка. Литералы объектов обрабатываются им по-особенному, и проходят *проверку на наличие лишних свойств*. Эта проверка делается, когда литералы либо присваиваются другим переменным, либо передаются в качестве аргументов. Если в литерале есть какие-либо свойства, которых нет в целевом типе, то это будет считаться ошибкой.


