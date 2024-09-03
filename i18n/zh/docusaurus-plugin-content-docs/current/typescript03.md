---
id: typescript03
title: Функции
sidebar_label: Функции
---

Функции — это одна из фундаментальных основ любого приложения на языке JavaScript. С помощью них строятся уровни абстракции, сокрытие информации и модули. Язык `TypeScript` немного расширяет возможности функций по сравнению с JavaScript, делая работу с ними еще удобнее.

## Описание функции

Типичное описание функции в TypeScript с определением типа передаваемых параметров и типа возвращаемого значения:

```javascript
// определение функции
function add(a: number, b: number): number {
  return a + b
}
// вызов функции
let result1 = add(1, 2)
console.log(result1)
```

Либо мы можем опредить функцию как переменную и затем через переменной вызывать данную функцию:

```javascript
let add = function (a: number, b: number): number {
  return a + b
}
let result1 = add(1, 2)
```

### Параметры функции

Функция может иметь параметры, которые указываются после названия функции в скобках через запятую. Через двоеточие после имени формального параметра указывается его тип:

```javascript
// определение функции
function add(a: number, b: number) {
  let result = a + b
  console.log(result)
}
// вызов функции
add(20, 30) // 50
add(10, 15) //25
```

Однако поскольку параметры имеют тип `number,` то при вызове функции `add("1", "2")` компилятор TS выдаст `ошибку,` так как параметры должны иметь тип number, а не тип string.

При этом функция может не только использовать передаваемые параметры, но и `глобальные переменные,` определенные во вне:

```javascript
let koef: number = 1.5

function add(a: number) {
  let result = a * koef
  console.log(result)
}

add(20) // 30
add(10) //15
```

### Результат функции

Функция может возвращать значение определенного типа, который еще называется типом функции. Возвращаемый тип функции ставится после списка параметров через двоеточие:

```javascript
function add(a: number, b: number): number {
  return a + b
}
let result1 = add(1, 2)
```

В данном случае функция будет возвращать значение типа `number.`

Если функция `ничего не возвращает,` то указывается тип `void:`

```javascript
function add(a: number, b: number): void {
  console.log(a + b)
}
add(10, 20)
```

В принципе мы можем и не указывать тип, тогда он будет выводиться неявно на основе возвращаемого значения:

```javascript
function add(a: number, b: number) {
  return a + b
}
let result = add(10, 20)
```

### Необязательные параметры

В typescript при вызове в функцию должно передаваться ровно столько значений, сколько в ней определено параметров:

```javascript
function getName(firstName: string, lastName: string) {
  return firstName + ' ' + lastName
}

let name1 = getName('Иван', 'Кузнецов')
let name2 = getName('Иван', 'Михайлович', 'Кузнецов') //ошибка, много параметров
let name3 = getName('Иван') //ошибка, мало параметров
```

Чтобы иметь возможность передавать различное число значений в функцию, в TS некоторые параметры можно объявить как `необязательные.` Необязательные параметры должны быть помечены вопросительным знаком `?.` Причем необязательные параметры должны идти `после обязательных:`

```javascript
function getName(firstName: string, lastName?: string) {
  if (lastName) return firstName + ' ' + lastName
  else return firstName
}

let name1 = getName('Иван', 'Кузнецов')
console.log(name1) // Иван Кузнецов
let name2 = getName('Вася')
console.log(name2) // Вася
```

Во втором случае, когда в функцию передается только имя, второй используемый параметр будет иметь неопределенное значение или `"undefined".` Поэтому с помощью условной конструкции `:?` проверяется наличие значения для этого параметра.

### Значения параметров по умолчанию

Параметры позволяют задать начальное значение по умолчанию. И если для такого параметра не передается значение, то он использует значение `по умолчанию:`

```javascript
function getName(firstName: string, lastName: string = 'Иванов') {
  return firstName + ' ' + lastName
}

let name1 = getName('Иван', 'Кузнецов')
console.log(name1) // Иван Кузнецов
let name2 = getName('Вася')
console.log(name2) // Вася Иванов
```

Причем в качестве значения можно передавать результат другого выражения:

```javascript
function defaultSurname(): string {
  return 'Smith'
}

function getName(firstName: string, lastName: string = defaultSurname()) {
  return firstName + ' ' + lastName
}

let name1 = getName('Tom')
console.log(name1) // Tom Smith
```

## Неопределенный набор параметров `...Rest`

Если же необходимо, чтобы функция принимала набор однотипных параметров, то используется `знак многоточия,` после которого идет массив:

```javascript
function addNumbers(firstNumber: number, ...numberArray: number[]): number {
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

TypeScript поддерживает возможность перегрузки функций, то есть мы можем определить несколько версий функции, которые будут иметь одно и то же имя, но разные типы параметров или разное количество параметров. Для перегрузки вначале опеределяем все версии функции, которые не будут иметь никакой логики. А потом определяем версию функции `с общей сигнатурой,` которая подходит под все ранее определенные варианты. И в этой `общей версии` уже определяем конкретную `логику функции.`

Например, нам надо объединить два значения, но если они представляют строки, то просто их конкатенировать, а если числа - то сложить. Тогда мы могли бы использовать следующую функцию:

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

```javascript
let result3 = add(true, false)
console.log(result3)
```

то мы получили бы ошибку, так как две версии функции позволяют принимать в качестве параметров либо две строки, либо два числа. И в этом случае нам надо было бы добавить еще одну версию функции для логических значений тоже:

```javascript
function add(x: boolean, y: boolean): boolean
```

## Вопросы:

1. Язык `TypeScript`:

- расширяет возможности функций
- уменьшает возможности функций
- описывает дополнительные переменные
- описывает дополнительные функции

2. Параметры функции могут быть:

- любого типа
- только number
- только number или string
- все кроме типа boolean

Возвращаемый тип функции ставится после списка параметров через двоеточие

3. У функции указывается тип `void` если она:

- ничего не возвращает
- возвращает тип number
- возвращает тип string
- возвращает тип boolean

4. Необязательные параметры в функции должны быть помечены знаком:

- ?
- &
- !
- @

5. Параметры позволяют задать начальное значение по умолчанию в формате:

- firstName: string="Tom"
- firstName:: number=100
- firstName: string=true
- firstName= number=>100

6. Параметры типа `any` означают:

- любой тип данных
- вещественнный тип
- логический тип
- строковый тип

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

Для того чтобы понять насколько вы усвоили этот урок пройдите тест в [мобильном приложении](http://onelink.to/njhc95) в нашей школы по этой теме.

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

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
     <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
     <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
 
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)
