---
id: typescript02
title: Типы данных
sidebar_label: Типы данных
---

Как вы уже знаете TypeScript является статически типизированным языком. Статически типизированный язык, это язык программирования, который имеет систему типов. Зачем же нужны типы? Типы данных используются для добавления статических ограничений на программные элементы, такие как функции, переменные и свойства. Это позволяет компилятору и средствам разработки осуществлять более тщательную проверку и поддержку в процессе разработки. Хоть JavaScript является динамически типизируемым языком, типы там всё же присутствуют, но присваивание происходит во время выполнения кода, а не во время компиляции. Все типы JavaSсript присутствуют и в TypeScript, но TypeScript по-другому с ними работает и добавляет свои типы.

![tartNow](https://media.giphy.com/media/Png6VGlhxwPC4xKAJA/giphy.gif)

## Типы в TypeScript

Все типы в TypeScript являются подтипами главного типа, которым является тип `any`. Тип `any` — единственный, который может представлять любое значение JavaScript без всяких ограничений. Все остальные типы накладывают определенные ограничения на свои значения.

### Any

Тип `any` используется, когда мы не знаем какой тип должна иметь та или иная переменная. Эта переменная может быть получена из некоего динамического содержимого, как например, если бы использовалась некая сторонняя библиотека. В таких случаях нужно отказаться от проверки типов и позволить таким переменным проходить проверку во время компиляции. Для того, чтобы это сделать, нужно указать переменной тип `any` с помощью ключевого слова `any`.

```jsx
let variable: any
```

[Пример](https://www.typescriptlang.org/play?#code/DYUwLgBAlgzgggOwJ4C4IENkCgDGB7BGPUAOmDwHMAKWRJCAaggHIAaCQIhBAOEEH4QNZxhDBIADiDwAzaPGQBKLLWQQAvCxhgATlAQUAjM1wEipctUX0mbTr36DhYydLrzzKiABZDhYiDKUaMhYs7Nx8LHai4lLmLoFuAN4Avl7GvqYBdIJWobZM9lFOckA)

```jsx
let isAny: any
console.log(isAny + ', Тип: ' + typeof isAny)
isAny = 'string1'
console.log(isAny + ', Тип: ' + typeof isAny)
isAny = 4
console.log(isAny + ', Тип: ' + typeof isAny)
isAny = {}
console.log(isAny + ', Тип: ' + typeof isAny)
```

### Boolean

Тип `boolean` является логическим типом и представлен значениями `true` и `false`. Объявляется при помощи ключевого слова `boolean`.

[Пример](https://www.typescriptlang.org/play?#code/DYUwLgBAlgzgagQwE4EYBcEBGB7boEB2EAvBAGYLAwgA0AUBI9PMgEwkRhICuIdAxtgIw8IAHTBsAcwAUsRKggBqCAHIaEQEQggDhBA-CAZVyzgE8ADiGxlmClAEoBQkaAnS5LJOxXqteg0bBmFlbybLZAA)

```jsx
let isVar1: boolean = false,
  isVar2 = true
console.log(isVar1 + ', Тип: ' + typeof isVar1)
console.log(isVar2 + ', Тип: ' + typeof isVar2)
```

### Number

В TypeScript, как и в JavaScript, все производные от `number` являются 64-битными числами двойной точности с плавающей запятой. Кроме десятичного и шестнадцатеричного формата, поддерживаются бинарный и восьмеричный, введенные в ECMAScript 2015.

[Пример](https://www.typescriptlang.org/play?#code/DYUwLgBAlgzgcgVwLYCEoDsBcF3IEYgBOEAvBAAx7nkCMNtdANBAPQsRroCGhAngFAQh0eMgDyAYzDZcSAsTLkA9gDYA7MzYRJYLsEHDYiJABEQEmfiKkIAVlub2ZiVCR6DQo8gASIAB425H4AzGqs7L5+-BJK6DBKoAB0wEoA5gAU6V5IkRAA1BR+AGYAlPkQAOTMgEQggBwggPwg2BXlYLwADiBKRSLGkSVAA)

```jsx
let isNumBin: number = 0b00110111, // Binary
  isNumOct: number = 0o67, // Octal
  isNumDec: number = 55, // Decimal
  isNumHex = 0x37 // Hex
console.log(isNumHex + 0xf + ', Тип: ' + typeof isNumHex)
```

### String

Тип `string` представляет собой последовательность символов в кодировке Unicode UTF-16. Строки могут быть заключены в одинарные или двойные кавычки, а также в обратные апострофы (инициаторы так называемых шаблонных строк).

[Пример](https://www.typescriptlang.org/play?#code/DYUwLgBAlgzgagQwE4EYBcEZiVAdgcwgF4IByQQRBAhEEAEQQPhBAuEEAYQUgGgCgJPp5kAmYiACJALCDVAwiCBmEEaB5EAhU6TQWwDGAe1wxVoAHTBV+ABSxEqCAGoyLCICIQQBwggfhAMpcxDABPAA4hVAM24mUAEoVdU0dPUNjPhdWGwcnF3cvX38+QKA)

```jsx
let isVar1: string = 'строка',
  isVar2 = 'другая строка'
console.log(isVar1 + ', Тип: ' + typeof isVar1)
console.log(isVar2 + ', Тип: ' + typeof isVar2)
```

### Symbol

Тип `Symbol` предоставляет уникальные идентификаторы, которые могут быть использованы как ключи для свойств объекта.

Значения типа symbol создаются с помощью вызова конструктора `Symbol`.

```jsx
let sym1 = Symbol()

let sym2 = Symbol('key') // Необязательный строковый ключ
```

### Void

Тип `void` это нечто противоположное `any`, то есть отсутствие каких-либо типов. Чаще всего он используется в качестве возвращаемого типа функций, которые не возвращают никакого значения.

[Пример](https://www.typescriptlang.org/play?#code/DYUwLgBKCGBOB2AVAngBxAZQMawJasgF4IAKASgC4IA3Ae1wBMJCA+CAbwCgIItb4AzrVAA6YLQDmJAOSBaEEBCIIAYQCIBEQQMIggXhBAXCCAxEEAcIIHkQCBr2BxEECsIIGYQQHwgx8xEBMINcDsIA8ACIIsCSIIvPyAhNJknAC+nJx8gsIgYpIkMAgo6Nh4BOQQANQQ0gA0EIBEIHqA-CBU0hkQYGggtABmUCBwSJXJ+GDkZEA)

![Void](https://media.giphy.com/media/PkKzNQjwPy7GvxZbfe/giphy.gif)

```jsx
let learnTypeScript = (): void => {
  console.log('Эта функция ничего не возвращает!')
}

console.log(learnTypeScript() + ', Тип: ' + typeof learnTypeScript())
```

### Never

Тип `never` представляет тип, значение которого никогда не наступает. Например, `never` является типом, который возвращает функция, которая всегда бросает исключения или выход из которой никогда не происходит (например, бесконечный цикл). Переменные также могут иметь данный тип, например, для того, чтобы никогда не принимать значение `true`.

[Пример](https://www.typescriptlang.org/play?#code/DYUwLgBCBO0PbQgXggCgLYgM5YIYHMQAuCLMaASwDt8BKEqkANxmQD4IBvAKAgjAAW8AO4RGogKKwEGbHkK1uAXyA)

```jsx
let error = (message: string): never => {
  throw new Error(message)
}
```

### Null/Undefined

В TypeScript оба типа `undefined` и `null` фактически имеют имена `undefined` и `null` соответственно. Как и `void`, сами по себе они не особо полезны:

```jsx
let u: undefined = undefined
let n: null = null
```

## Структуры

Обычно в TypeScript не разделяют понятия типа и структуры, потому что структура тоже является типом. Но так как структура – это составной тип данных, который состоит из разных типов, сгруппированных под одним, мы выделили такие типы в отдельную часть.

![OneTwoThree](https://media.giphy.com/media/gru4kW0ipfZHnIHeE7/giphy.gif)

### Array (массив)

Тип `Array` используется для указания элементов массива. Определить массив можно двумя способами:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue = "one"
values = {[
{label: '[]', value: 'one'},
{label: 'Array<elemType>', value: 'two'},
]}>
<TabItem value = "one">

В первом методе вы указываете тип элементов массива, за которым следует `[]`, который обозначает массив этого типа.

[Пример](https://www.typescriptlang.org/play?#code/DYUwLgBAlgzgggJwQeQGYGUwIFwRlqAOwHMBtAXQgF4JSByfBI4gRjoBoIGCSAmO8uwBQEUdHhI0AOQCuAW1yF5AIxAIK1Wi069OAZk4AWTgFZyQgMYB7QjCugAdMCvEAFLEQpUsuaUOUAai5OQCIQQA4QQH4QXDoIILAATwAHECtUcU9peQBKIA)

```jsx
let isArrOfStr: string[] = ['string1', 'string2'],
  isArrOfNum: number[] = [1, 2, 3, 4, 5]
console.log(isArrOfNum[4] + ', Тип: ' + typeof isArrOfNum)
```

</TabItem>
<TabItem value = "two">

Другим методом использование типа является: Array &lt;elemType&gt;.

[Пример](https://www.typescriptlang.org/play?#code/DYUwLgBAlgzgggJwQeQGYGUwIFwUQgQwE8AeGLKAOwHMA+CAXggG0BychK6gRlYBoI7CjQBMrALp8AUBFnR4SNADkArgFtc+YiUrqARiAT0mzbgJECAzAIAsAgKzipAYwD2lGK9AA6YK+oAFLD4yurMNuIQANSCAoBEIIAcIID8ILis0RBgRAAOIK6o8iGoqmoAlEA)

```jsx
let isArrOfStr: Array<string> = ['string1', 'string2'],
  isArrOfNum: Array<number> = [1, 2, 3, 4, 5]
console.log(isArrOfNum[4] + ', Тип: ' + typeof isArrOfNum)
```

</TabItem>
</Tabs>

### Tuple (кортеж)

Тип `Tuple` или кортеж представляет собой массив, каждому из элементов которого можно указать свой тип. Обычно такая структура используется для предоставления набора данных, например, записи в базе данных.

[Пример](https://www.typescriptlang.org/play?#code/DYUwLgBAlgzgKgVwA6gFwQNozAJygOwHMAaCAIwHsLQBDfAXQgF5MBybPIgRldIDMawGCHoAoAMYV8MaiAB0wCoQAUsRChAYADIwDUEXhEBEIIA4QQPwg6VhH1gAnkhAU+0eMlDb6ASglSZoBUqqrhoYXHoGpKYWBtYQdg5OLuruYZ5AA)

```jsx
let isTuple: [string, boolean] = ['string1', false]
console.log(isTuple[0] + ', Тип: ' + typeof isTuple[0])
console.log(isTuple[1] + ', Тип: ' + typeof isTuple[1])
```

### Enum (перечисление)

Тип `enum` используется для объявления перечисления — отдельного типа, который состоит из набора именованных констант, называемого списком перечислителей. Перечисления пришли в TypeScript из C#. Например, для вашего удобства вы можете создать `enum` дней. По умолчанию первый перечислитель имеет значение `0`, и значение каждого последующего перечислителя инкрементируется на единицу.

[Пример](https://www.typescriptlang.org/play?#code/KYOwrgtgBAlgzgUXBAgiGECGAbKBvAY0wBcAaKAJ0wCNqYyoALAewrmHIBNmBzcx0OQLMA7uTgDgABwC+AKGEg4zbMAB02XgAp4SSGgw41VWvSgBqKAHJygIhBAHCCB+EABc1i1GIBPKcGYAzWERkAyxsYxo6YgBKBWYlFXVNHh0g-XRQgG0ARgBddxsoBxc3Sy8ff0C9VHScbJyY0EhK5AB1YGAAa3wAWTioAF4oAGYAFnIAFTAOKDbOCcYwcgAxChhyAGUSDbAQeUVlVQ1tXVb2jozRvMsrKFYS5sg2zrVJ4Hy7J1cb0u9fAJPHmcokA)

```jsx
enum isEnumAnimal {cat, rabbit, horse, dog, hen, cow, sheep}
console.log(isEnumAnimal.rabbit + ', Тип: ' + typeof isEnumAnimal.rabbit)
console.log(isEnumAnimal[1] + ', Тип: ' + typeof isEnumAnimal[1])

enum isEnumWeek {Mon = 34, Tue, Wed, Thu, Fri, Sat, Sun}
console.log(isEnumWeek[34] + ' or ' + isEnumWeek.Tue + ', Тип: ' + typeof isEnumWeek)
```

## Работа с типами

Для начала следует рассказать основные моменты для работы с типами в TypeScript.

![Work](https://media.giphy.com/media/co0aGvTixD98tdKmIm/giphy.gif)

### Аннотация типов

В TypeScript аннотация типа или указание типа осуществляется с помощью оператора двоеточия `: type`, после которого следует идентификатор типа. TypeScript является статически типизированным языком, поэтому после того как идентификатор будет связан с типом, изменить тип будет невозможно.

[Пример](https://clck.ru/SkhTJ)

```jsx
// let variable: type = value
let isNumber: number = 777, // явно
  anotNumber = 888, // неявно
  isString: string = 'string1', // явно
  anotString = 'string2' // неявно
console.log('isNumber - ' + typeof isNumber + '\n anotNumber - ' + typeof anotNumber)
```

Так же присвоить тип переменной можно через конструкцию [Union](https://www.jscamp.app/ru/docs/typescript02#объединения).

### typeof (Запрос типа)

Механизм запроса типа `Type Queries` позволяет получить тип, связанный со значением по его идентификатору и в дальнейшим использовать его как обычный тип. Запрос типа осуществляется оператором `typeof`, после которого идет идентификатор, ссылающийся на значение. Запрос типа также может располагаться в местах указания типа.

```jsx
let isVar1: string
let isVar2: typeof isVar1
```

[Пример](https://www.typescriptlang.org/play?#code/DYUwLgBAlgzgymATlAdgcwFwRk1aIC8EA5DsusQFAgoCuAttDAKJ30CCKU9AhsBAG8AxjzAAaCIh4AjaVHEQAFgHtEMEAF9KQ5ShjLQAOmDK0ACmKwE5fAFoSEANQQwATwAOIZQDMm1vACU2rr6RibmlixsnNx8EPbETi4eXr6wrAwxvMABQA)

```jsx
let isString: string = 'string'
enum isEnumAnimal {cat, rabbit, horse}
console.log('isString - ' + typeof isString)
console.log('isEnumAnimal - ' + typeof isEnumAnimal)
```

### Объединения

Объединение `Union` - это мощный механизм, позволяющий создавать из множества существующих типов логическое условие, по которому данные могут принадлежать только к одному из указанных типов. Объединение указывается с помощью оператора прямой черты `|`, по обе стороны которой располагаются типы данных.

![Union](https://media.giphy.com/media/jqHV3IC87AeBsp0PiP/giphy.gif)

```jsx
let variable = type1 | type2 | type3
```

Переменной, которой был присвоен объединенный тип, может быть присвоено значение, принадлежащие к одному из объединенных типов.

[Пример](https://www.typescriptlang.org/play?ssl=9&ssc=50&pln=1&pc=1#code/DYUwLgBAlgzgqgOygewQLgjMAnKCDmEAPhAgK4C2ARiNsRFcsqAIYIBQsiKCEAvBACM7AMaoYzEADpgyfAAouSVBADUEAOQAaCICIQQBwggfhAMGtRDABPAA4hkAM2jxlCAJTtOTnvwh2WwGCCi4pIycoqeKuraekYmZpY29o7cqG4eKbwCGgASIMCyGkEIEqChCkpeUToGxprx1rYOFalAA)

```jsx
let isUnion: string | number | boolean
isUnion = 1
console.log(isUnion + ', Тип: ' + typeof isUnion)

isUnion = false
console.log(isUnion + ', Тип: ' + typeof isUnion)

isUnion = 'Hello'
console.log(isUnion + ', Тип: ' + typeof isUnion)
```

### Пересечение

Пересечение `Intersection` — механизм TypeScript, который позволяет рассматривать множество типов данных как единое целое. Пересечение указывается с помощью оператора амперсанда `&`, по обе стороны которого указываются типы данных.

```jsx
let variable: type1 & type2 & type3
```

Переменной, которой был указан тип пересечение `type1` и `type2` и `type3`, должно быть присвоено значение, принадлежащее к типам `type1` и `type2` и `type3` одновременно. Другими словами, значение должно обладать всеми обязательными признаками каждого типа, определяющего пересечение.

[Пример](https://www.typescriptlang.org/play?ssl=18&ssc=36&pln=2&pc=1#code/PTAEAEFMCdoe2gZwFygEwGYAsBWAUAJYB2ALjAGYCGAxpKAMJwA2C5Ark6AN56ijXMEqRCWjEA5gG48AX0KkKNOvQLRqTOjz7RKAEwJsUoImwC2AIxjS5IUAFoH1NiQd287ItRIE4RULp0AdwAKalV1SFRGFmh2TgAyBnCNAEpuXn5fRGZIADoWcWCAA2iEUEDKRFAAEi4wtQ1cgRiZIpTpPgEibMaC4oAlPQMqiqra+ojcnX1DVvbZPDxbOABrSgBPPADKEK5MmNQAInMmNkhDgBpQaeHULDRQGXmlsDg4AAdELaDgveahUCHaCQXSXa6UAi6Qx3B5PSRAA)

```ts
interface Colorful {
  color: string
}
interface Circle {
  radius: number
}

// ---cut---
function draw(circle: Colorful & Circle) {
  console.log(`Color was ${circle.color}`)
  console.log(`Radius was ${circle.radius}`)
}

// okay
draw({ color: 'blue', radius: 42 })

// oops
draw({ color: 'red', raidus: 42 })
```

### Псевдонимы типов

Для любого типа можно создать его псевдоним и использовать его в дальнейшем. Псевдоним типа объявляется при помощи ключевого слова `type`.

```jsx
type isAlias = type
```

[Пример](https://www.typescriptlang.org/play?#code/C4TwDgpgBAlgzgQQDYwIZygXinYAnGAOwHMoAfKQgVwFsAjCPcqOge1aQlUICgfPgsOADVUeAFxDkaOH3iim2AIx8Axq0JwOEAHRJWxABTyxUANRQA5ABoogIhBAHCCB+EEmXzUUJFYAzIQoCUciKm2N6oSHAQahpanHoGxsFMFjb2zq7unhA+fmKBPCaKVgASEEj6ltGa2vFGhe6pji5WmeDZvoX+QA)

```jsx
type isAlias = string | number | boolean

let isVar: isAlias

isVar = 1

console.log(isVar + ', Тип: ' + typeof isVar)

isVar = false

console.log(isVar + ', Тип: ' + typeof isVar)

isVar = 'Hello'

console.log(isVar + ', Тип: ' + typeof isVar)
```

### Тип Assertions

Тип `assertion` представляет модель преобразования значения переменной к определенному типу. Обычно в некоторых ситуациях одна переменная может представлять какой-то широкий тип, например `any`, который по факту допускает значения различных типов. Однако при этом нам надо использовать переменную как значение строго определенного типа. И в этом случае мы можем привести к этому типу. Есть две формы приведения.

<Tabs
defaultValue = 'one'
values = {[
{label: 'Ключевое слово as', value: 'one'},
{label: 'Оператор <>', value: 'two'}
]}>
<TabItem value = 'one'>

Первая форма заключается в применении оператора `as`:

[Пример](https://clck.ru/SkgoF)

```jsx
let isAny: any = 777
let isNumber = isAny as number
console.log(isNumber + ', Тип: ' + typeof isNumber)
```

</TabItem>
<TabItem value = 'two'>

Вторая форма заключается в использовании `угловых скобок`.

[Пример](https://clck.ru/Skgqh)

```jsx
let isAny: any = 777
let isNumber = <number> isAny
console.log(isNumber + ', Тип: ' + typeof isNumber)
```

Однако при работе с _JSX_ в TypeScript допускается только `as - синтаксис`, поскольку JSX встраивается в XML как синтаксис. А т.к. XML использует угловые скобки, он создает **конфликт** при использовании утверждений типа с угловыми скобками в JSX.

</TabItem>
</Tabs>

## Вопросы

![Question](https://media.giphy.com/media/ifHCnV5Z0cAwwlwNtK/giphy.gif)

Какой самый главный тип данных в TypeScript?

1. Any
2. Never
3. Void
4. Number

В какой кодировке символы типа String?

1. ASCII
2. Unicode UTF-16
3. Windows 1251

Чем является тип Number?

1. 16-битными числами
2. 32-битными числами
3. 48-битными числами
4. 64-битными числами

Для чего переменные могут принимать тип Never?

1. Чтобы возвращать только true
2. Чтобы возвращать только false
3. Чтобы никогда не возвращать true
4. Чтобы никогда не возвращать false

Какая из струткур используется для указания каждому элементу свой тип данных?

1. Array
2. Tuple
3. Enum

С помощью чего происходит аннотация типа?

1. `#`
2. `as`
3. `:`

C помощью чего можно объеденить типы?

1. `|`
2. `\`
3. `&`

С помощью чего указывается пересечение типов?

1. `$`
2. `|`
3. `&`

Теперь мы готовы с вами изучать TypeScript, но для того чтобы понять на сколько вы усвоили этот урок пройдите тест в [мобильном приложении](http://onelink.to/njhc95) в нашей школы по этой теме.

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Ссылки

1. [TypeScript Lang](https://www.typescriptlang.org/)
2. [Спривочник TypeScript](https://xsltdev.ru/typescript/)
3. [Сanonium](https://canonium.com/category/typescript)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr> 
    <td align="center"><a href="https://github.com/IIo3iTiv"><img src="https://avatars1.githubusercontent.com/u/72025062?v=4?s=200" width="200px;" alt=""/><br /><sub><b>IIo3iTiv</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=IIo3iTiv" title="Documentation">  </a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
  </tr>
</table>

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)
