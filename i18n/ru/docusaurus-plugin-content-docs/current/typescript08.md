---
id: typescript08
title: Интерфейсы
sidebar_label: Интерфейсы
---

Одним из основных принципов TypeScript является то, что типизация основана на структуре объектов. Такой способ типизации называют `неявной` или `«утиной»` — объект относят к тому или иному типу (классу, интерфейсу), если он имеет (реализует) все его свойства и методы. Интерфейсы в TS применяются как раз для того, чтобы описывать нужные вам типы.

![Utka](https://media.giphy.com/media/rtRflhLVzbNWU/giphy.gif)

## Простой пример

Лучший способ узнать, как работают интерфейсы - начасть с простого примера:

[Пример](https://www.typescriptlang.org/play?ssl=5&ssc=20&pln=1&pc=1#code/DYUwLgBA5glgbiAYgJwK40gXggCgGZoYBcEA3hAHYCGAtiCQM5jIwVQQC+AlBJgHwQAxgHsKDYaAB0wYVBwByAOLwQEMMIh0I8iAGoIBdGEnU6XAFCXQkGgE8URhrzKVa9bQCEq1avIA0EAwA7iDgFCAMDCQA7AEARqIRJHhUwAyqHOawCA4YOHa5YAxcQA)

```ts
let giveFruit = (fruit: { name: string }) => console.log('Give to me ' + fruit.name)

let myFruits = { name: 'Banana', sweetness: 7, bones: false }
giveFruit(myFruits)
```

Функция `giveFruit()` имеет единственный параметр, который требует, чтобы переданный объект имел свойство с именем `name` типа `string`. Обратите внимание, что наш объект на самом деле имеет больше свойств, чем требуется, но компилятор только проверяет, присутствуют ли хотя бы те, которые необходимы, и соответствуют требуемым типам.

Напишем тот же пример, для проверки свойства `name` с типом `string`, но при помощи интерфейсов.

[Пример](https://www.typescriptlang.org/play?ssl=10&ssc=20&pln=1&pc=1#code/JYOwLgpgTgZghgYwgAgGJQK7DMg3gKGWRDgFsIAuZAZzClAHNCaB3CCMECa6qkDUgCNozQQHsuvZOLEAbCHBD4AvvnzycDYADcI6LDgC8yABQxM2KvuwBKZIYB8yBBOpyIAOlliGJgOQA4jooYGLI5Mh+yADUyOYGHiTkNmoa4QCe1mDU9njEZJSRAEKKpX4ANKzsnNxSAOyV4pJU8LLUKKpaulkmpJkW2TZAA)

<!-- ```ts
interface Fruit {
  name: string
  sweetness: number
  bones: boolean
}

let giveFruit = (fruit: Fruit) => console.log('Give to me ' + fruit.name)

let myFruits = { name: 'Banana', sweetness: 7, bones: false }
giveFruit(myFruits)
```

Интерфейс `Fruit` - это имя, которое мы теперь можем использовать для описания требования в предыдущем примере. Обратите внимание, что нам не нужно было явно указывать, что объект, который мы передаем в функцию `giveFruit()`, наследует этот интерфейс, как это может быть в других языках. Здесь важен только образец. Если объект, который мы передаем функции, соответствует перечисленным требованиям, то всё позволено.

Стоит отметить, что проверка типов не требует, чтобы эти свойства имели какой-либо порядок, а только то, что свойства, необходимые для интерфейса, присутствуют и имеют требуемый тип.

![Interface](https://media.giphy.com/media/kv7mW8wf26Z73lFZI0/giphy.gif)

## Необязательные свойства

Не все свойства интерфейса могут быть обязательными. Некоторые существуют при определенных условиях или могут вообще отсутствовать. Интерфейсы с необязательными свойствами записываются аналогично другим интерфейсам, где каждое необязательное свойство обозначается знаком `?` в конце имени свойства в декларации.

[Пример](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgGJQK7DMg3gKGWRDgFsIAuZAZzClAHNCaB3CCMECa6qkDUgCNozQQHsuvZOLEAbCHBDMEcsVAD8fAcKj4AvvnzycgxWarosOALx5mJclQDkAITMknAGmbU2HSVIA7N5E4pJU8LLUECHIKrJqVAAMAB4wMBAAjADMAKz6hsbIcAAOJfIWmNjItgREDpTITgCCZfJePn6c3FK5sWHcVHQYEPpAA)

```jsx
interface Fruit {
  name: string
  sweetness: number
  bones: boolean
  color?: number
}

let banana: Fruit = {
  name: 'Banana',
  sweetness: 7,
  bones: false,
  color: 0xffe135
}

let apple: Fruit = {
  name: 'Apple',
  sweetness: 5,
  bones: true
}
```

Необязательные свойства популярны при создании шаблонов, таких как «option bags», в которых вы передаете объект в функцию, у которого заполнены только пара свойств.

![Questions](https://media.giphy.com/media/WUURy2lKOj6BdhCbbd/giphy.gif)

## Только для чтения

Некоторые свойства могут быть заданы только для чтения, а значение они получат при создании объекта. Этого можно добиться, поместив ключевое слово _readonly_ перед именем свойства.

[Пример](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgAoHtRmQbwFDLJQRwAm6IANgJ7IAeAXMiAK4C2ARtAUSeVbWpNWnbgF88eShGxwAjEwxZkAXlz0mcgAwAaZEOQAWLcgl4EFAM7ppAOkroA5gAoA5ICIQQHwggcRBAXCCAGEGQAbVdkAGpkeVs6cORXAG442KjaCNcAXVcASiA)

```jsx
interface Point {
  readonly x: number;
  readonly y: number;
}

let a1: Point = { x: 10, y: 40 }

console.log('Точка [' + a1.x + '; ' + a1.y + ']')
```

Можно создать переменную c типом `Point`, присвоив ей литерал объекта. После этого значения свойств `x` и `y` изменять будет нельзя.

![readonly](https://media.giphy.com/media/kAsj9dvOV9nZeFtSe2/giphy.gif)

## Лишние свойства

В нашем первом примере использования интерфейсов TypeScript позволил передать `{ name: string; sweetness: number, bones: boolean }` там, где ожидалось всего лишь `{ name: string }`. Также мы узнали о необязательных свойствах, и о том, как они могут быть полезны при передаче аргументов в функции. Рассмотрим пример.

[Пример](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgGJQK7DMg3gKGWRDgFsIAuZAZzClAHMBuQmgdwgjBAmuoH4qIDKQBG0FkVEB7HgKozpAGwhwQk5AmXSog4iPFQWAX3z4YGEAjDBZyOABMH6LGAAUADyovsASiq4xGSUNHSMADSa2lBCBtDIxnisAPTJyAB0mfim+Co4omqFyAC89k4+7oEk5FQA5AUkJLWRWkrSGDHIAAweMDAQAIwAzACsCb74qcjQUDp1re1QtcTSOBAeAA4Q1hAOyKDIYACeW8i1FbVAA)

```ts
interface Fruit {
  name: string
  sweetness?: number
  bones?: boolean
  color?: number
}

function addFruit(x: Fruit): { name: string; color: number } {
  // ...
}

let banana = addFruit({ name: 'banana', colour: 0xffe135 })
// error: 'colour' not expected in type 'Fruit'
```

Обратите внимание, что аргумент, передаваемый в `addFruit()`, записан как `colour` вместо `color`. В чистом JavaScript подобные вещи не выдают ошибок, но и не работают так, как хотел бы разработчик.

Можно сказать, что данная программа корректна с точки зрения типов, так как типы свойств `sweetness` совместимы, `color` отсутствует, а наличие дополнительного свойства `colour` не имеет никакого значения.

Однако TypeScript делает предположение, что в этом куске кода есть ошибка. Литералы объектов обрабатываются им по-особенному, и проходят проверку на наличие лишних свойств. Эта проверка делается, когда литералы либо присваиваются другим переменным, либо передаются в качестве аргументов. Если в литерале есть какие-либо свойства, которых нет в целевом типе, то это будет считаться ошибкой.

Обойти такую ошибку можно несколькими способами.

### Первый способ

![One](https://media.giphy.com/media/WtIBjvQ2tYJvyKWtjO/giphy.gif)

Использование приведение типов:

[Пример](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgGJQK7DMg3gKGSORDgFsIAuZAZzClAHMAaQ4mgdwgjBAhpoB+aiAxkARtFbFk4gPZ8h1eXIA2EOCGnEEauVGEkxkqPgC++fDAwgEYYAuRwAJs-RYwACgAe1d9gBKalwScipaeiZmZF1VfRFjaDM8NiIAejTkADoc80t1HHFNYuQAXidXfy8Q0gpqAHIi0lJ66Ni5DChqAAZvVFQAUQBGAGYAVmRkuBo0TECgA)

```jsx
let banana = addFruit({ name: 'banana', colour: 0xFFE135 } as Fruit)
```

### Второй способ

![two](https://media.giphy.com/media/Sx9hhGMoX7ALGKfpMV/giphy.gif)

Добавление строкового индекса, его лучше использовать тогда, когда вы уверены, что объект может иметь дополнительные свойства.

[Пример](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgGJQK7DMg3gKGSORDgFsIAuZAZzClAHMBuQ4hAewBsOoB+aiAxkARtFbFkAbQAOUDjIBy5KrXpMAutTggAnqwC++fDAwgEYYBxDI4AEzvosYABQAPak+wBKarhIq1HQMIIwANMicPFCCwmJQBnhsRAD0KcgAdFn4RvhcEDgiOsXIALy2Dl6u-qQU1ADkRaSk9RFRHBgxyAAMbqioAKIAjADMAKzIBt5AA)

```jsx
interface Fruit {
  name: string
  color?: number
  [propName: string]: any
}
```

В данном примере интерфейс `Fruit` может иметь любое количество свойств. Если это не `name` или `color`, то тип свойства не имеет значения.

### Третий способ

![three](https://media.giphy.com/media/SVTMh6GCBqHS9RXTP6/giphy.gif)

Присвоить объект другой переменной. Из-за присваивания объекта другой переменной он не будет проходить проверку на избыточные свойства, компилятор не выдаст ошибки.

[Пример](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgGJQK7DMg3gKGSORDgFsIAuZAZzClAHMAaQ4mgdwgjBAhpoB+aiAxkARtFbFk4gPZ8h1eXIA2EOCGnEEauVGEkxkqPgC++fDAwgEYYAuRwAJs-RYwACgAe1d9gBKalwScipaeiZmZF1VfRFjaDM8NiIAejTkADoc80t1HDkAB3sFGmQAXjxQimoAcnFNJrro2LkMKGoABm9UVABRAEYAZgBWZDNtIkbSUkqnV38vYtKQGgCgA)

```jsx
let options = { name: 'banana', colour: 0xffe135 },
  banana = addFruit(options)
```

Стоит иметь ввиду, что для простого кода не стоит обходить данные проверки свойств. Для более сложных литералов объектов, которые содержат в себе методы, параметры состояния и т.д., стоит держать в памяти данные способы обхода проверок, но все же большинство ошибок, связанных с проверкой лишних свойств, как правило, на самом деле являются ошибками. Если у вас возникает такая ошибка, возможно стоит пересмотреть объявление типа.

## Типы функций

![function](https://media.giphy.com/media/Zdgd7q3pw9GXzYXaf6/giphy.gif)

Помимо описания свойств, интерфейсы также позволяют описывать типы функций.

Для описания типа функции в интерфейсе, в нем нужно определить сигнатуру вызова. Это похоже на объявление функции только со списком параметров и типом возвращаемого значения. Каждый параметр в списке должен иметь имя и тип.

```ts
interface SearchFunc {
  (source: string, subString: string): boolean
}
```

Определив такой интерфейс один раз, мы можем его использовать также как и все другие интерфейсы. Пример ниже показывает, как определить переменную с типом функции и присвоить ей значение.

[Пример](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgMoTlBALAYgVxAWQG8AoZZACgGcB7fLCALmRrClAHMAaN-AEaoO3Vu04guASlYC6dADYYQZAL5kySsMgC2AT3SYcrQ1jyEEG-aZzIAvMhgWwwOiGr1GSMSMl8agsISXD7BUqQUyFrIUBABCtoOnkwAdDQYZrSBvtKRwDDUsfGJDgC0AIzh5JSUsWCM7vAK6ZGqyBDNKNU1dQ3IHPgQrWoaCG70SikKdFxU1hk4VADkAnAga3BRwDoocAAOe0pLfCsb60tSUkA)

```ts
interface SearchFunc {
  (source: string, subString: string): boolean
}

let mySearch: SearchFunc

mySearch = function (source: string, subString: string) {
  let result = source.search(subString)
  if (result == -1) {
    return false
  } else {
    return true
  }
}

console.log(mySearch('banana lime apple', 'banana'))
```

Имена параметров не обязательно должны совпадать, чтобы функция прошла проверку на соответствие типов. Мы, к примеру, могли бы записать предыдущий пример — вот так:

[Пример](https://www.typescriptlang.org/play?ssl=17&ssc=53&pln=1&pc=1#code/JYOwLgpgTgZghgYwgAgMoTlBALAYgVxAWQG8AoZS5ACgGcB7fLCALmVrClAHMAad-ACNUnHmw5cQ3AJRtB9egBsMIANxkAvmTLKwyALYBPdJhxsTWPIQTqyRizmQBeGrSzjRU-rSEfJMuQVlOBBnAD5SCipdZCgIH0U9FzcEADpaDEs6IWl1KmRgGBo4hKSXAFoARmlI-Py4sCZQ+EUMvKotfIhWlHI6qgam5E58CHbKLS0yBHoQBmVUxXpuantMnGoAckEQ3eRFYH0UOAAHE+VN-m3dkDhN6WkgA)

```ts
interface SearchFunc {
  (source: string, subString: string): boolean
}

let mySearch: SearchFunc

mySearch = (src: string, sub: string): boolean => {
  let result = src.search(sub)
  if (result == -1) {
    return false
  } else {
    return true
  }
}

console.log(mySearch('banana lime apple', 'banana'))
```

Параметры функций проверяются друг за другом, и типы параметров, находящихся на соответствующих позициях, сравниваются попарно. Если вы не хотите указывать типы для аргументов, то TypeScript сможет вывести типы из контекста, основываясь на том, что функция присваивается переменной, тип которой — SearchFunc. В следующем примере тип возвращаемого значения функции тоже выводится: это делается на основании значений, которые она возвращает `false` и `true`. Если бы функция возвращала числа или строки, то компилятор во время проверки типов предупредил бы, что тип возвращаемого значения не совпадает с типом, указанным в интерфейсе SearchFunc.

[Пример](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgMoTlBALAYgVxAWQG8AoZS5ACgGcB7fLCALmVrClAHMAad-ACNUnHmw5cQ3AJRtB9egBsMIANxkAvmTLKwyALYBPdJhxsTWPIQTajFnMgC8NWln60h0pwD5SFKrrIUBAeinrOrggAdLQYlnSe-pTAMDTBoeHOALQAjF7kVIVBEGBMIMjwirFJyFqFEFUoBUWUwaVQ5Zz4EDVaWmQI9CAMylGK9NzUdnE41ADkgnAgS3DIisD6KHAADtvKc-wLK8tz0tJAA)

```jsx
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc

mySearch = (src, sub) => {
  let result = src.search(sub)
  if (result == -1) {
    return false
  } else {
    return true
  }
}

console.log(mySearch('banana lime apple', 'banana'))
```

## Индексируемые типы

Аналогично тому, как мы можем использовать интерфейсы для описания типов функций, мы также можем описывать типы, в которые мы можем «индексировать», например, `a[10]` или `ageMap["daniel"]`. Индексируемые типы имеют сигнатуру индекса, которая описывает типы, которые мы можем использовать для индексации объекта, вместе с соответствующими типами возврата при индексации.

[Пример](https://www.typescriptlang.org/play?ssl=10&ssc=24&pln=1&pc=1#code/JYOwLgpgTgZghgYwgAgMpiqA5gQSlOAT2QG8AoZZAbVABMIAPALmRAFcBbAI2gF0WAzhmxkAvmTIAbCGGQdCeAoRbpMIXPiJl5iosgC81AEQAhAPZcjAGmRGAYlAi0jvCdNnzVg4eoNyFmoRUAAyuZAhmIAJm0gB0kmZYABQ6gSG8AJRAA)

```ts
interface StringArray {
  [index: number]: string
}

let myArray: StringArray
myArray = ['Bob', 'Fred']

let myStr: string = myArray[0]

console.log(myArray[0])
```

Здесь у нас есть интерфейс `StringArray`, у которого есть сигнатура индекса. Эта сигнатура говорит о том, что, когда `StringArray` индексируется _числом_, возвращается _строка_. -->

<!--
## Типы классов

В _TypeScript_ также возможно одно из наиболее распространенных применений интерфейсов в таких языках, как _C#_ и _Java_, - явное принудительное принудительное соблюдение классом определенного контракта.

```jsx
interface ClockInterface {
  currentTime: Date; // переменные
  setTime(d: Date): void; // методы
}

class Clock implements ClockInterface {
  currentTime: Date = new Date()
  setTime(d: Date) {
    this.currentTime = d
  }
  constructor(h: number, m: number) {}
}
```

### Статические и экземплярные классы

При работе с классами и интерфейсами полезно помнить, что класс имеет два типа: _статические_ и _экземпларные_. Вы можете заметить, что если вы создаете интерфейс с сигнатурой конструктора и пытаетесь создать класс, реализующий этот интерфейс, вы получаете ошибку:

[Пример](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgMIBsD2CDWrMgDOYUArgmJlMgN4BQyjyIEA7sgBQAWmpUAXM1IBbAEbQANMmGhSkQSBHioASgDcdAL506CdHEKE0WXMmDCADugjCI4Ixmx4CxMhSq0GTAPTfkAUSgoKi9GBD4oOzAAFXMIQQAROEgNJmQEFxJySihuBSVJaXyxaBVabU0gA)

```jsx
interface ClockConstructor {
    new (hour: number, minute: number);
}

class Clock implements ClockConstructor {
    // Error
    currentTime: Date;
    constructor(h: number, m: number) {}
}
```

Это потому, что, когда класс реализует интерфейс, проверяется только сторона экземпляра класса. Поскольку конструктор находится в статической стороне, он не включен в эту проверку.

Вместо этого вам нужно будет работать непосредственно со статической стороной класса. В следующем примере мы определяем два интерфейса: `ClockConstructor` для конструктора и `ClockInterface` для методов экземпляра. Затем для удобства мы определяем функцию конструктора `createClock`, которая создает экземпляры типа, который передается ей:

[Пример](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgMIBsD2CDWrMgDOYUArgmJlMgN4BQyjyIEA7sgBQAWmpUAXM1IBbAEbQANMmGhSkQSBHioASkEZsOAJLho8JAG46AXzp1QkWIhQbcOy-pT0myMMFwc1yAG6ZgAEyNTOhhSEApgAmQEKAg4SFscDgYmCip1LFx8IhJySigJFMYePgUlSSLpWXkhMWg6L0T7PWtaStiwPhBmNmj87l4CqsVIFSCzBHQ4QkJkABFgAHNgMDh0RORgYQAHdAhhCHBZpt0rJDaXBAJiMjSobjK6oeFH5RVaUxc3D3fnF1Trpg9gA6LCLDgAInEEG2yGh2whY0qpmCk2mswAgiA1phFhstrt9ocwMdMtpTo4LgCcrd+lxXpJpAzVB9Kt8kr9KpdASCwZD2a5NIijC4UWY9mBkP4lis1sgALzRWLxCCJDgLZardZkqQARgATHqAOxIiXIODYsEKpVxBJkjhYnF4nXII1SADM+qR0s1a2B7M8dAtTv97g5QA)

```jsx
interface ClockConstructor {
  new(hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
  tick(): void;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute)
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log('beep beep')
  }
}

class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log('tick tock')
  }
}

let digital = createClock(DigitalClock, 12, 17)
let analog = createClock(AnalogClock, 7, 32)
```

Поскольку первый параметр `createClock` имеет тип `ClockConstructor`, в createClock _(AnalogClock, 7, 32)_ он проверяет, имеет ли `AnalogClock` правильную сигнатуру конструктора. -->

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
