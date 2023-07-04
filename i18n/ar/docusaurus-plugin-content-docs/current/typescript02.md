---
id: typescript02
title: Data types
sidebar_label: Data types
---


As you already know, `TypeScript` is a statically typed language. A `statically typed language` is a programming language that has a type system. Why are types needed? `Data types` are used to add static constraints to programmatic items such as functions, variables and properties. This allows the compiler and development tools to provide more thorough validation and support during development. Although JavaScript is a dynamically typed language, types are still there, but the assignment happens at runtime, not at compile time. All JavaScript types are present in TypeScript, but TypeScript works with them differently and adds its own types.

## Types in TypeScript

All types in _TypeScript_ are subtypes of the main type, which is the type `Any`. The `Any` type is the only one that can represent any JavaScript value without any restrictions. All other types impose certain _constraints_ on their values.

### Any

The `Any` type is used when we do not know what type this or that variable should have. This variable can be obtained from some dynamic content, such as if some third-party library were used. In such cases, you should abandon the type checking and allow such variables to be checked at compile time. In order to do this, you need to specify the variable type Any using the keyword `any`.

```jsx
let variable: any
```

[Example](https://www.typescriptlang.org/play?#code/DYUwLgBAlgzgggOwJ4C4IENkCgDGB7BGPUAOmDwHMAKWRJCAaggHIAaCQIhBAOEEH4QNZxhDBIADiDwAzaPGQBKLLWQQAvCxhgATlAQUAjM1wEipctUX0mbTr36DhYydLrzzKiABZDhYiDKUaMhYs7Nx8LHai4lLmLoFuAN4Avl7GvqYBdIJWobZM9lFOckA)

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

The Boolean type is a boolean type and is represented by the values true and false. It is declared using the boolean keyword.

[Example](https://www.typescriptlang.org/play?#code/DYUwLgBAlgzgagQwE4EYBcEBGB7boEB2EAvBAGYLAwgA0AUBI9PMgEwkRhICuIdAxtgIw8IAHTBsAcwAUsRKggBqCAHIaEQEQggDhBA-CAZVyzgE8ADiGxlmClAEoBQkaAnS5LJOxXqteg0bBmFlbybLZAA)

```jsx
let isVar1: boolean = false,
  isVar2 = true
console.log(isVar1 + ', Тип: ' + typeof isVar1)
console.log(isVar2 + ', Тип: ' + typeof isVar2)
```

### Number

In _TypeScript_, as in JavaScript, all derivatives of number are 64-bit double precision floating point numbers. In addition to decimal and hexadecimal formats, binary and octal, introduced in ECMAScript 2015, are supported.

[Example](https://www.typescriptlang.org/play?#code/DYUwLgBAlgzgcgVwLYCEoDsBcF3IEYgBOEAvBAAx7nkCMNtdANBAPQsRroCGhAngFAQh0eMgDyAYzDZcSAsTLkA9gDYA7MzYRJYLsEHDYiJABEQEmfiKkIAVlub2ZiVCR6DQo8gASIAB425H4AzGqs7L5+-BJK6DBKoAB0wEoA5gAU6V5IkRAA1BR+AGYAlPkQAOTMgEQggBwggPwg2BXlYLwADiBKRSLGkSVAA)

```jsx
let isNumBin: number = 0b00110111, // Binary
  isNumOct: number = 0o67, // Octal
  isNumDec: number = 55, // Decimal
  isNumHex = 0x37 // Hex
console.log(isNumHex + 0xf + ', type: ' + typeof isNumHex)
```

### String

The _String_ type is a sequence of characters encoded in _Unicode UTF-16_. Strings can be enclosed in single quotes, double quotes, and backticks (the initiators of so-called template strings).

[Example](https://www.typescriptlang.org/play?#code/DYUwLgBAlgzgagQwE4EYBcEZiVAdgcwgF4IByQQRBAhEEAEQQPhBAuEEAYQUgGgCgJPp5kAmYiACJALCDVAwiCBmEEaB5EAhU6TQWwDGAe1wxVoAHTBV+ABSxEqCAGoyLCICIQQBwggfhAMpcxDABPAA4hVAM24mUAEoVdU0dPUNjPhdWGwcnF3cvX38+QKA)

```jsx
let isVar1: string = 'строка',
  isVar2 = 'другая строка'
console.log(isVar1 + ', Тип: ' + typeof isVar1)
console.log(isVar2 + ', Тип: ' + typeof isVar2)
```

### Symbol

The `Symbol` type provides unique identifiers that can be used as keys for object properties. Values of type Symbol implement the _'Symbol 'global object, which has a set of methods and properties that can be called as functions.

```jsx
let secretKey = Symbol(),
  obj = {}
obj[secretKey] = 'секретное сообщение'
obj[Symbol.toStringTag] = 'тест'
```

### Void

The `Void` type is the opposite of _any_, that is, the absence of any types. It is most commonly used as the return type of functions that do not return any value.

[Example](https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABAGwKYEMBOYAqBPAB1QGUJMYCoAKASgC5EA3OGAE0QG8AoRXxCBAGc4aAHTI4AcyoAiQLQggIRBADCCJAIiCBhEEC8IIC4QQGIggDhBA8iCJN+wOIggVhBAzCCA+EBMXEgJhAbgdhBHgARAlgSRAlFhQEIZGi4AXy40KEQYQQA1LABGRABeFAxsfCJSckpaLgEwYTEJaWi4zESAakQAcgAaREAiEH1AfhAGasQqqEJUOGAo2ITgoA)

```jsx
function learnTypeScript(): void {
  console.log('Эта функция ничего не возвращает!')
}
let isVar1 = learnTypeScript()
console.log(isVar1 + ', Тип: ' + typeof isVar1)
```

### Never

The type `Never` represents a type whose value never occurs. For example, never is a type returned by a function that always throws exceptions or never exits (for example, an infinite loop). Variables can also be of this type, for example, to never be true.

```jsx
function error(message: string): never {
  throw new Error(message)
}
```

### Null/Undefined

In TypeScript, `null` and` undefined` are subtypes. Subtypes are types that can be assigned to any other type, such as string or number.

[Example](https://www.typescriptlang.org/play?#code/DYUwLgBAlgzgymATlAdgcwFwRk1aIC8EKArsMADQBQEt0MAciQLYBGIiWpbHhEJKACYgAZqhCDqdegCEA9nNABDFFlYLlKPqXJUAxnJQxFIAHTA5aABSwmPRBADUEAOQUIgIhBAHCCB+ECwunCDAATwAHEDkRejt2RABKIA)

```jsx
let isString: string = null,
  isNumber: number = undefined,
  isBoolean: boolean = null
console.log(isNumber + ', Тип: ' + typeof isNumber)
```

## Structures

Usually in _TypeScript_ do not separate the concepts of type and structure, because structure is also a type. But since a structure is a composite data type that consists of different types grouped under one, we have separated such types into a separate part.

### Array (array)

The `Array` type is used to indicate the elements of an array. There are two ways to define an array:
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue = "one"
values = {[
{label: '[]', value: 'one'},
{label: 'Array<elemType>', value: 'two'},
]}>
<TabItem value = "one">

In the first method, you specify the type of the elements of the array, followed by `[]`, which denotes an array of that type.

[Example](https://www.typescriptlang.org/play?#code/DYUwLgBAlgzgggJwQeQGYGUwIFwRlqAOwHMBtAXQgF4JSByfBI4gRjoBoIGCSAmO8uwBQEUdHhI0AOQCuAW1yF5AIxAIK1Wi069OAZk4AWTgFZyQgMYB7QjCugAdMCvEAFLEQpUsuaUOUAai5OQCIQQA4QQH4QXDoIILAATwAHECtUcU9peQBKIA)

```jsx
let isArrOfStr: string[] = ['string1', 'string2'],
  isArrOfNum: number[] = [1, 2, 3, 4, 5]
console.log(isArrOfNum[4] + ', Тип: ' + typeof isArrOfNum)
```

</TabItem>
<TabItem value = "two">

Another method of using type is: Array &lt;elemType&gt;.

[Example](https://www.typescriptlang.org/play?#code/DYUwLgBAlgzgggJwQeQGYGUwIFwUQgQwE8AeGLKAOwHMA+CAXggG0BychK6gRlYBoI7CjQBMrALp8AUBFnR4SNADkArgFtc+YiUrqARiAT0mzbgJECAzAIAsAgKzipAYwD2lGK9AA6YK+oAFLD4yurMNuIQANSCAoBEIIAcIID8ILis0RBgRAAOIK6o8iGoqmoAlEA)

```jsx
let isArrOfStr: Array<string> = ['string1', 'string2'],
  isArrOfNum: Array<number> = [1, 2, 3, 4, 5]
console.log(isArrOfNum[4] + ', Тип: ' + typeof isArrOfNum)
```

</TabItem>
</Tabs>

### Tuple (кортеж)

The `Tuple` type or tuple is an array, each of whose elements can be specified with its own type. Typically this structure is used to provide a set of data, such as a record in a database.

[Example](https://www.typescriptlang.org/play?#code/DYUwLgBAlgzgKgVwA6gFwQNozAJygOwHMAaCAIwHsLQBDfAXQgF5MBybPIgRldIDMawGCHoAoAMYV8MaiAB0wCoQAUsRChAYADIwDUEXhEBEIIA4QQPwg6VhH1gAnkhAU+0eMlDb6ASglSZoBUqqrhoYXHoGpKYWBtYQdg5OLuruYZ5AA)

```jsx
let isTuple: [string, boolean] = ['string1', false]
console.log(isTuple[0] + ', Тип: ' + typeof isTuple[0])
console.log(isTuple[1] + ', Тип: ' + typeof isTuple[1])
```

### Enum (enumeration)

The `Enum` type is used to declare an enumeration - a separate type that consists of a set of named constants called a list of enumerators. Enums came to _TypeScript_ from _C # _. For example, for your convenience, you can create an enum of days. By default, the first enumerator is 0, and the value of each subsequent enumerator is incremented by one.

[Example](https://www.typescriptlang.org/play?#code/KYOwrgtgBAlgzgUXBAgiGECGAbKBvAY0wBcAaKAJ0wCNqYyoALAewrmHIBNmBzcx0OQLMA7uTgDgABwC+AKGEg4zbMAB02XgAp4SSGgw41VWvSgBqKAHJygIhBAHCCB+EABc1i1GIBPKcGYAzWERkAyxsYxo6YgBKBWYlFXVNHh0g-XRQgG0ARgBddxsoBxc3Sy8ff0C9VHScbJyY0EhK5AB1YGAAa3wAWTioAF4oAGYAFnIAFTAOKDbOCcYwcgAxChhyAGUSDbAQeUVlVQ1tXVb2jozRvMsrKFYS5sg2zrVJ4Hy7J1cb0u9fAJPHmcokA)

```jsx
enum isEnumAnimal {cat, rabbit, horse, dog, hen, cow, sheep}
console.log(isEnumAnimal.rabbit + ', Тип: ' + typeof isEnumAnimal.rabbit)
console.log(isEnumAnimal[1] + ', Тип: ' + typeof isEnumAnimal[1])
enum isEnumWeek {Mon = 34, Tue, Wed, Thu, Fri, Sat, Sun}
console.log(isEnumWeek[34] + ' or ' + isEnumWeek.Tue + ', Тип: ' + typeof isEnumWeek)
```

## Working with types

To begin with, you should tell the main points for working with types in TypeScript.

### Type annotations

In TypeScript, type annotation or type indication is performed using the colon operator `: type` followed by a type identifier. TypeScript is a statically typed language, so once an identifier is associated with a type, the type will change. **impossible**.

[Example](https://clck.ru/SkhTJ)

```jsx
// let variable: type = value
let isNumber: number = 777, // явно
  anotNumber = 888, // неявно
  isString: string = 'string1', // явно
  anotString = 'string2' // неявно
console.log('isNumber - ' + typeof isNumber + '\n anotNumber - ' + typeof anotNumber)
```

You can also assign a type to a variable through the construction `Union`.

### typeof (Request type)

The mechanism of `type query` _ (Type Queries) _ allows you to get a type associated with a value by its _identifier_ and then use it as a normal type. The type is requested by the `typeof` operator, followed by an identifier referencing the value. The type request can also be located in the places where the type is specified.

```jsx
let isVar1: string
let isVar2: typeof isVar1
```

[Example](https://www.typescriptlang.org/play?#code/DYUwLgBAlgzgymATlAdgcwFwRk1aIC8EA5DsusQFAgoCuAttDAKJ30CCKU9AhsBAG8AxjzAAaCIh4AjaVHEQAFgHtEMEAF9KQ5ShjLQAOmDK0ACmKwE5fAFoSEANQQwATwAOIZQDMm1vACU2rr6RibmlixsnNx8EPbETi4eXr6wrAwxvMABQA)

```jsx
let isString: string = 'string'
enum isEnumAnimal {cat, rabbit, horse}
console.log('isString - ' + typeof isString)
console.log('isEnumAnimal - ' + typeof isEnumAnimal)
```

### Associations

`Associations` _(Union)_ - it is a powerful mechanism that allows you to create a logical condition from many existing types, according to which data can belong to only one of the specified types. A union is specified using the forward slash operator `|`, on either side of which are data types.

```jsx
let variable = type1 | type2 | type3
```

A variable that has been assigned a merged type can be assigned a value belonging to one of the merged types.

[Example](https://www.typescriptlang.org/play?#code/DYUwLgBAlgzgqgOygewQLgjMAnKCDmEAPhAgK4C2ARiNsRFcsqAIYIBQsiKCEAvBACM7AMaoYzEADpgyfAAouSVBADUEAOQAaCICIQQBwggfhAMGtRDABPAA4hkAM2jxlCAJScnPfhDstgMEKLikjJyih4q6tp6RiZmljb2jtyobkqeAhoAEiDAshqBCBKgIQppEZo6Bsaacda2DmWuQA)

```jsx
let isUnion: string | number | boolean
isUnion = 1
console.log(isUnion + ', Тип: ' + typeof isUnion)
isUnion = false
console.log(isUnion + ', Тип: ' + typeof isUnion)
isUnion = 'Hello'
console.log(isUnion + ', Тип: ' + typeof isUnion)
```

### Crossing

`Crossing` _(Intersection)_ — mechanism TypeScript, which allows many types of data to be treated as a _uniform whole_. Intersections are specified using the `&` ampersand operator, with data types on either side.
```jsx
let variable: type1 & type2 & type3
```

A variable that has been assigned the type intersection of `type1` and` type2` and `type3` must be assigned a value belonging to types type1 and type2 and type3 **simultaneously**. In other words, the value must have all the required attributes of each type that defines the intersection.

### Type aliases

For any type, you can create its alias and use it in the future. The type alias is declared using the keyword `type`.

```jsx
type isAlias = type
```

[Example](https://www.typescriptlang.org/play?#code/C4TwDgpgBAlgzgQQDYwIZygXinYAnGAOwHMoAfKQgVwFsAjCPcqOge1aQlUIChPhYcAGqo8ALkHI0cHvBFNsARh4BjVoTgcIAOiStiACjmioAaigByADRRARCCAOEED8IBItmooSKwBmg+QEpZYRNsL1QkOAhVdU1OXX0jIKZzazsnFzcPCG9fUQDjBUsACQgkPQsojS04w3y3FIdnSwzwLJ98vyA)

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

Type `assertion` represents a model for converting a variable's value to a specific type. Usually, in some situations, one variable can represent some kind of wide type, for example, _any_, which in fact allows values of different types. However, in this case, we need to use the variable as a value of a strictly defined type. And in this case, we can lead to this type. There are two forms of casting.

<Tabs
defaultValue = 'one'
values = {[
{label: 'Keyword as', value: 'one'},
{label: 'Operator <>', value: 'two'}
]}>
<TabItem value = 'one'>

The first form is to use the operator `as`:

[Example](https://clck.ru/SkgoF)

```jsx
let isAny: any = 777
let isNumber = isAny as number
console.log(isNumber + ', Тип: ' + typeof isNumber)
```

</TabItem>
<TabItem value = 'two'>

The second form is to use `angle brackets`.

[Example](https://clck.ru/Skgqh)

```jsx
let isAny: any = 777
let isNumber = <number> isAny
console.log(isNumber + ', Тип: ' + typeof isNumber)
```

However, when working with _JSX_ in TypeScript, only `as - syntax` is allowed, since JSX is embedded in XML as syntax. And since XML uses angle brackets, it creates **conflict** when using type assertions with angle brackets in JSX.

</TabItem>
</Tabs>

## Questions

Now we are ready to learn TypeScript with you, but in order to understand how much you learned this lesson, take the test in the [mobile application](http://onelink.to/njhc95) in our school on this topic.

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

## Links

1. [TypeScript Lang](https://www.typescriptlang.org/)
2. [Sprivochnik TypeScript](https://xsltdev.ru/typescript/)
3. [Сanonium](https://canonium.com/category/typescript)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr> 
    <td align="center"><a href="https://github.com/IIo3iTiv"><img src="https://avatars1.githubusercontent.com/u/72025062?v=4?s=200" width="200px;" alt=""/><br /><sub><b>IIo3iTiv</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=IIo3iTiv" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
  </tr>
</table>

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)
