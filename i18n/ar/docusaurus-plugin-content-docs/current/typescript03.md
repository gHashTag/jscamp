---
id: typescript03
title: Functions
sidebar_label: Functions
---

Functions are one of the fundamental foundations of any JavaScript application. With the help of them, levels of abstraction, information hiding and modules are built. The `TypeScript` language slightly expands the capabilities of functions in comparison with JavaScript, making them even more convenient to work with.

## Function description

A typical description of a function in TypeScript with the definition of the type of the passed parameters and the type of the return value:

```javascript
// определение функции
function add(a: number, b: number): number {
  return a + b
}
// вызов функции
let result1 = add(1, 2)
console.log(result1)
```

Or we can define the function as a variable and then call this function through the variable:

```javascript
let add = function (a: number, b: number): number {
  return a + b
}
let result1 = add(1, 2)
```

### Function parameters

A function can have parameters that are specified after the function name in brackets separated by commas. A colon after the name of a formal parameter indicates its type:

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

However, since the parameters are of the `number` type, when calling the `add (" 1 "," 2 ")` function, the TS compiler will generate an `error,` since the parameters must be of the number type, not the string type.

In this case, the function can not only use the passed parameters, but also `global variables` defined outside:

```javascript
let koef: number = 1.5

function add(a: number) {
  let result = a * koef
  console.log(result)
}

add(20) // 30
add(10) //15
```

### Function result

A function can return a value of a specific type, which is also called a function type. The return type of the function is placed after the parameter list, separated by a colon:

```javascript
function add(a: number, b: number): number {
  return a + b
}
let result1 = add(1, 2)
```

In this case, the function will return a value of type `number.`

If the function `returns nothing,` then the type is specified `void:`

```javascript
function add(a: number, b: number): void {
  console.log(a + b)
}
add(10, 20)
```

In principle, we can not specify the type, then it will be inferred implicitly based on the return value:

```javascript
function add(a: number, b: number) {
  return a + b
}
let result = add(10, 20)
```

### Optional parameters

In typescript, when calling a function, exactly as many values must be passed as there are defined parameters:

```javascript
function getName(firstName: string, lastName: string) {
  return firstName + ' ' + lastName
}

let name1 = getName('Иван', 'Кузнецов')
let name2 = getName('Иван', 'Михайлович', 'Кузнецов') //ошибка, много параметров
let name3 = getName('Иван') //ошибка, мало параметров
```

In order to be able to pass a different number of values to a function, in TS, some parameters can be declared as `optional.` Optional parameters must be marked with a question mark `?.` And optional parameters must go after the required ones: `

```javascript
function getName(firstName: string, lastName?: string) {
  if (lastName) return firstName + ' ' + lastName
  else return firstName
}

let name1 = getName('Ivan', 'Kuznecov')
console.log(name1) // Ivan Kuznecov
let name2 = getName('Vasya')
console.log(name2) // Vasya
```

In the second case, when only the name is passed to the function, the second used parameter will have an undefined value or `" undefined ". Therefore, the presence of a value for this parameter is checked using the`:? `Conditional construction.

### Default parameter values

The parameters allow you to set the initial default value. And if no value is passed for such a parameter, then it uses the `default value:`

```javascript
function getName(firstName: string, lastName: string = 'Иванов') {
  return firstName + ' ' + lastName
}

let name1 = getName('Ivan', 'Kuznecov')
console.log(name1) // Ivan Kuznecov
let name2 = getName('Vasya')
console.log(name2) // Vasya
```

Moreover, as a value, you can pass the result of another expression:

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

## Undefined set of parameters `...Rest`

If it is necessary for a function to accept a set of parameters of the same type, then an ellipsis sign is used, followed by an array:

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

## Overloading functions

TypeScript supports function overloading, which means that we can define multiple versions of a function that have the same name, but different types of parameters or a different number of parameters. For overloading, we first define all versions of the function that will not have any logic. And then we define the version of the function `with a common signature,` which fits all previously defined options. And in this `general version` we already define the specific` logic of the function.

For example, we need to concatenate two values, but if they represent strings, then just concatenate them, and if they are numbers, then add them. Then we could use the following function:

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

The first version of the add function takes two strings and returns a string, the second version takes two numbers and returns a number. Common to them will be a function that takes parameters of type `any` and returns a result of type` any.`

But if we would apply the same function to boolean values:

```javascript
let result3 = add(true, false)
console.log(result3)
```

then we would get an error, since the two versions of the function allow us to take either two strings or two numbers as parameters. And in this case, we would need to add another version of the function for booleans too:

```javascript
function add(x: boolean, y: boolean): boolean
```

## Questions:

1. Language `TypeScript`:

- expands the possibilities of functions
- reduces the possibilities of functions
- describes additional variables
- describes additional functions

2. Function parameters can be:

- any type
- only number
- only number or string
- everything except boolean type

The return type of the function is placed after the parameter list, separated by a colon

3. The function is of the type `void` if it:

- returns nothing
- returns type number
- returns type string
- returns the boolean type

4. Optional parameters in the function must be marked with the sign:

-?
- &
-!
- @

5. Parameters allow you to set the initial default value in the format:

- firstName: string = "Tom"
- firstName :: number = 100
- firstName: string = true
- firstName = number => 100

6. Parameters of type `any` mean:

- any data type
- real type
- boolean type
- string type

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

In order to understand how much you learned this lesson, take the test in the [mobile application](http://onelink.to/njhc95) in our school on this topic.

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Links:

1. [Foundations of TypeScript. Functions](https://metanit.com/web/typescript/2.2.php)
2. [Article "TypeScript — Functions"](https://coderlessons.com/tutorials/veb-razrabotka/izuchite-mashinopis/typescript-funktsii)
3. [Article "TypeScript — Script functions"](https://webformyself.com/typescript-funkcii-skripta/)

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
