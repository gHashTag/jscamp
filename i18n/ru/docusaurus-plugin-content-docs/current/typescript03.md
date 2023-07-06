---
id: typescript03
title: Функции
sidebar_label: Функции
---

Функции — это одна из фундаментальных основ любого приложения на языке JavaScript. С помощью них строятся уровни абстракции, сокрытие информации и модули. Язык `TypeScript` немного расширяет возможности функций по сравнению с JavaScript, делая работу с ними еще удобнее.

## Описание функции

Типичное описание функции в TypeScript с определением типа передаваемых параметров и типа возвращаемого значения:

[Пример](https://www.typescriptlang.org/play?#code/PTAEj4QR+EEARBFYQQWEFobhBaF4QQHCC1IERBDCIKwLhBAxEHXQCgAbAUwBdQBDAE0dAF5QAKegLlADsArgFsARlQBOAGlAjeg0RICUc4WPFsAfKADeZUKHG0B4vg1ABqGWQC+ZMiFCAmEEDSIIHYQcI5z5ipSrQNUAM4CFDQAjGwMzBxh0gBMimQAxgD2fIEp1AB0FCkA5hyGwaFhikA)

```javascript
// определение функции
let add = (a: number, b: number): number => {
  return a + b
}
// вызов функции
let result1 = add(1, 2)
console.log(result1)
```

Либо мы можем опредить функцию как переменную и затем через переменной вызывать данную функцию:

[Пример](https://www.typescriptlang.org/play?#code/DYUwLgBAhgJjEF4IDMCuA7AxmAlge3QgAooAuCdVAWwCMQAnAGghvMtoYEo3q76IA3gCgIEeuFT1CUCAGoWQgL5DQkcQGdUwMAEZE0OER3MATJyA)

```javascript
let add = function (a: number, b: number): number {
  return a + b
}
let result1 = add(1, 2)
```

### Параметры функции

Функция может иметь параметры, которые указываются после названия функции в скобках через запятую. Через двоеточие после имени формального параметра указывается его тип:

[Пример](https://www.typescriptlang.org/play?ssl=9&ssc=17&pln=1&pc=1#code/PTAEj4QR+EEARBFYQQWEFobhBaF4QQHCC1IERBDCIKwLhBAxEHXQCgAbAUwBdQBDAE0dAF5QAKegLlADsArgFsARlQBOAGlAjeg0RICUbAHygA3mVChqdcVQDOAinXb1QAahlbQAYwD2fA-eoA6CvYDmHfUZOKyAF8yMhBQQCYQQGkQQHYQcHCcfGJSMiZGDgAmAAZpAGZM5TCAVkyU5g4ARmzQcsKC4HTCoA)

```javascript
// определение функции
let add = (a: number, b: number) => {
  let result = a + b
  console.log(result)
}

// вызов функции
add(20, 30) // 50
add(10, 15) //25
```

Однако поскольку параметры имеют тип `number,` то при вызове функции `add("1", "2")` компилятор TS выдаст ошибку, так как параметры должны иметь тип `number`, а не тип `string`.

При этом функция может не только использовать передаваемые параметры, но и глобальные переменные, определенные во вне:

[Пример](https://www.typescriptlang.org/play?#code/DYUwLgBA1g9iBmAuCA7ArgWwEYgE4QF4IBGAOgFYAoS0SAQwBMHCIAKO5dbPASkID4IAb0oQItCLhABnNMEhE6EAFTQ48URADGMFNJihSwGAHNWU2fJ6UAvtUYNWAJgAMfAPTuIAZheUHrMRuEJ7E5EA)

```ts
let koef: number = 1.5

let add = (a: number) => {
  let result = a * koef
  console.log(result)
}

add(20) // 30
add(10) //15
```

### Результат функции

Функция может возвращать значение определенного типа, который еще называется типом функции. Возвращаемый тип функции ставится после списка параметров через двоеточие:

[Пример](https://www.typescriptlang.org/play?ssl=6&ssc=21&pln=1&pc=1#code/DYUwLgBAhgJjEF4IAooC4IDsCuBbARiAE4A0E+GOBxAlJXoUYgHzQQDU5AUD6JESADO2YGACMiaHGRiyAJho8AxgHtMglaAB0wFQHNkA4aLE0gA)

```ts
let add = (a: number, b: number): number => a + b

let result1 = add(1, 2)

console.log(result1)
```

В данном случае функция будет возвращать значение типа `number`.

Если функция ничего не возвращает, то указывается тип `void:`

```javascript
let add = (a: number, b: number): void => {
  console.log(a + b)
}

add(10, 20)
```

В принципе мы можем и не указывать тип, тогда он будет выводиться неявно на основе возвращаемого значения:

```javascript
let add = (a: number, b: number) => a + b

let result = add(10, 20)
```

### Необязательные параметры

В TypeScript при вызове в функцию должно передаваться ровно столько значений, сколько в ней определено параметров:

[Пример](https://www.typescriptlang.org/play?#code/DYUwLgBA5uByCGBbEEC8EAUAzAlgJwGcwFkAuCIvHAOygBoJh4iSRzKaoBKNAPggDeAKAgQ84AK55qEXIWJIUAaggByNRBVMWioQF8hQ0JGqKAjGmhxFGVYAwQQEwggBhBAvCCqGqwFgggYRBA7CAvAVhBAMRBAPhAHVS4jcAhTZAAmSxgFZFtHV3c1QBwQQA4QQFEQJ0BOEEBuEDDswHEQDK8-QNDwngB6epDACRBswEYQQC4QJwZAHhAXEMBmEBCIQH4QJ0ABECcegMAhEHGwqJNFAGZE6xT7ZzcGptbO7ogepxLRianZ+YcgA)

```ts
let getName = (firstName: string, lastName: string) => {
  return firstName + ' ' + lastName
}

let name1 = getName('Иван', 'Кузнецов')
let name2 = getName('Иван', 'Михайлович', 'Кузнецов') //ошибка, много параметров
let name3 = getName('Иван') //ошибка, мало параметров
```

Чтобы иметь возможность передавать различное число значений в функцию, в TS некоторые параметры можно объявить как необязательные. Необязательные параметры должны быть помечены вопросительным знаком `?`. Причем необязательные параметры должны идти после обязательных:

[Пример](https://www.typescriptlang.org/play?#code/DYUwLgBA5uByCGBbEEC8EAUAzAlgJwGcwFkAuCIvHAOygBoJh4iSQB+cymqASjQD4IAbwBQECDiyYmLJCD55wAVzzUIuQsTkQA1BADkB3Y2ZbkYiCGAEUisCrUbZ5gL4iRoSNTkBGNNDg5DH1ADBBAJhBABhBAXhB9Bn1ALBBAYRBAdhAowFYQQDEQQD4QMP0eEQBjAHtqAiLQADpgIqgMb2QfPgB6Johw6Igk1Myc908IepAAJn8YMxBgwCQQCMBBEEB5EDzCkrLK6trBoebW6fmgA)

```ts
let getName = (firstName: string, lastName?: string) => {
  if (lastName) return firstName + ' ' + lastName
  else return firstName
}

let name1 = getName('Иван', 'Кузнецов')
console.log(name1) // Иван Кузнецов

let name2 = getName('Вася')
console.log(name2) // Вася
```

Во втором случае, когда в функцию передается только имя, второй используемый параметр будет иметь неопределенное значение или `undefined`. Поэтому с помощью условной конструкции `?` проверяется наличие значения для этого параметра.

### Значения параметров по умолчанию

Параметры позволяют задать начальное значение по умолчанию. И если для такого параметра не передается значение, то он использует значение по умолчанию:

[Пример](https://www.typescriptlang.org/play?#code/DYUwLgBA5uByCGBbEEC8EAUAzAlgJwGcwFkAuCIvHAOygBoJh4iSRzKao0IByQDBBATCCAGEEC8IID4QATwCUaAHwRchYkhQBqXhvVMWKgFC7QkaioCM3GMuQZ+wkTwY9AWCCBhEEDsICMCsIIDEQCdN0BjAHtqAkDQADpgQKgMY2QTGQB6RIhBUQgXd28JfUMIOJAAJnM4FWtAJBAhQEEQQHkQPyCQsJBI6NiVQqSUytrU2wkgA)

```ts
let getName = (firstName: string, lastName: string = 'Иванов') => firstName + ' ' + lastName

let name1 = getName('Иван', 'Кузнецов')
console.log(name1) // Иван Кузнецов

let name2 = getName('Вася')
console.log(name2) // Вася Иванов
```

Причем в качестве значения можно передавать результат другого выражения:

[Пример](https://www.typescriptlang.org/play?#code/DYUwLgBAJiBmCGBXYYDKiBOA7eBbEEAvBABQCUAXBAM5gYCWWA5kQHwQDkqu9YAFhwBQg0JCbgAcngLESsehlpT8VWg2YAaCMHhLpquoxbEYCZGkw585MmwjzFYZQQDUnd25178w0RCsgAIxEEOJO0iQcACoA9rgcZIIAxjFY1DGgAHTAMUwkAYG2APRFELG4ENy8fEA)

```ts
let defaultSurname = (): string => 'Smith'

let getName = (firstName: string, lastName: string = defaultSurname()) => firstName + ' ' + lastName

let name1 = getName('Tom')
console.log(name1) // Tom Smith
```

## Неопределенный набор параметров `...Rest`

Если же необходимо, чтобы функция принимала набор однотипных параметров, то используется знак многоточия, после которого идет массив:

[Пример](https://www.typescriptlang.org/play?#code/DYUwLgBAhgJjByBXAtgIxAJwM4QLwQAoAzAS2zCTUwC4IA7FdDAGggDoOGqMBBDDKAE9aXJgG0AugEoRjTHgB8EAN4AoCBFCQMILImCR8pcpSbqIRAPYZCWiCTwQADAG57EADz05vfkLagdADmYAAWbiQA1JFSKuYaOnoGEJH4oph8AoJiJBLmAL6q5jpgiBh0EIn6YKqFqnZcAIyOsAg+WAQAzKwA7KwAHFKqAMaWdFiWoAGWQQRNsQD0CxCN-UUNKABMLXCmmB3dEH0Q-awAnKwALEOj45Mg07Ncm4vLnY1AA)

```javascript
let addNumbers = (firstNumber: number, ...numberArray: number[]): number => {
  let result = firstNumber
  for (let i = 0; i < numberArray.length; i++) {
    result += numberArray[i]
  }

  return result
}

let num1 = addNumbers(3, 7, 8)
console.log(num1) // 18

let num2 = addNumbers(3, 7, 8, 9, 4)
console.log(num2) // 31
```

## Перегрузка функций

TypeScript поддерживает возможность перегрузки функций, то есть мы можем определить несколько версий функции, которые будут иметь одно и то же имя, но разные типы параметров или разное количество параметров. Для перегрузки вначале опеределяем все версии функции, которые не будут иметь никакой логики. А потом определяем версию функции с общей сигнатурой, которая подходит под все ранее определенные варианты. И в этой общей версии уже определяем конкретную логику функции.

Например, нам надо объединить два значения, но если они представляют строки, то просто их конкатенировать, а если числа - то сложить. Тогда мы могли бы использовать следующую функцию:

[Пример](https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABAQwCaoBQA8BciDOUATjGAOYA0iAnnoSeQJR3GlkBQoksCK62eMCAC2AIwCmRKrURCxk5rJESi7dgHp1iQHgggRhBAkiCAGEEDyIIkBMIIFYQQAIggQRBAHCCmbiQFwggPhBAvCDOrFwEIg714CcIIiA3CCugMwgdm4BnODQ8EhomLgoYNTSeMipipnUiADe7IhFiETiUCBESFiIANQ07AC+agA2ZSXi+CDNUACMiAC8fJgArFQALIzsEAj4cK0AdM1wZBilnd09jMWaiACc7K1Q7etQAEwDQxgARMNXVFdjV5PTYLMLSytrXWdbRTvDYyAA)

```javascript
function add(x: string, y: string): string
function add(x: number, y: number): number

// Общая версия с конкретной логикой
function add(x: any, y: any): any {
    return x + y
}

let result1 = add(5, 4)
console.log(result1)   // 9

let result2 = add("5", "4")
console.log(result2)   // 54
```

Первая версия функции `add` принимает две строки и возвращает строку, вторая версия принимает два числа и возвращает число. Общей для них будет функция, которая принимает параметры типа `any` и возвращает результат также типа `any.`

Но если бы мы ту же функцию применили бы к логическим значениям:

[Пример](https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABAQwCaoBQA8BciDOUATjGAOYA0iAnnoSeQJR3GlkBQoksCK62eMCAC2AIwCmRKrURCxk5rJESi7dgHp1iQHgggRhBAkiCAGEEDyIIkBMIIFYQQAIggQRBAHCCmbiQFwggPhBAvCDOrFwEIg714CcIIiA3CCugMwgdm4BnODQ8EhomLgoYNTSeMipipnUiADe7IhFiETiUCBESFiIANQ07AC+agA2ZSXi+CDNUADMiAC8fJjEIOJUwMjN+OKM7BAI+HCtAHTNcGQYpZ3dPYxAA)

```javascript
let result3 = add(true, false)
console.log(result3)
```

то мы получили бы ошибку, так как две версии функции позволяют принимать в качестве параметров либо две строки, либо два числа. И в этом случае нам надо было бы добавить еще одну версию функции для логических значений тоже:

```javascript
function add(x: boolean, y: boolean): boolean
```

## Вопросы:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

Язык `TypeScript`:

1. Расширяет возможности функций
2. Уменьшает возможности функций
3. Описывает дополнительные переменные
4. Описывает дополнительные функции

У функции указывается тип `void` если она:

1. Ничего не возвращает
2. Возвращает тип `number`
3. Возвращает тип `any`

Необязательные параметры в функции должны быть помечены знаком:

1. `?`
2. `&`
3. `!`

Параметры позволяют задать начальное значение по умолчанию в формате:

1. firstName: string="Tom"
2. firstName:: number=100
3. firstName: string=true

Параметры типа `any` означают:

1. Строковый тип
2. Вещественнный тип
3. Любой тип данных

Для того чтобы понять насколько вы усвоили этот урок пройдите тест в [мобильном приложении](http://onelink.to/njhc95) в нашей школы по этой теме.

[![EnglishMoji!](/img/logo/englishmoji.png)](https://link-to.app/xvh7Ush9kl)

## Ссылки:

1. [Основы TypeScript. Функции](https://metanit.com/web/typescript/2.2.php)
2. [Статья "TypeScript — Функции"](https://coderlessons.com/tutorials/veb-razrabotka/izuchite-mashinopis/typescript-funktsii)
3. [Статья "TypeScript — Функции скрипта"](https://webformyself.com/typescript-funkcii-skripta/)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/KoDim-React"><img src="https://avatars1.githubusercontent.com/u/72087863?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy K.</b></sub></a><br /><a href="#mentoring-KoDim-React" title="Mentoring">  </a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
  </tr>
 
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![EnglishMoji!](/img/logo/englishmoji.png)](https://link-to.app/xvh7Ush9kl)
