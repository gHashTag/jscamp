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

В первом случае вместо параметра `T` будет испльзоваться тип `number`, поэтому в функцию мы можем передать число. Во втором случае вместо `T` используется тип `string`, поэтому во втором случае можно передать строку. Таким образом, мы можем передать в функцию объекты различных типов, но при этом сохраняется строгая типизация, каждый вариант обобщенной функции может принимать объекты только определенного типа.

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

<!--
## Обобщенные классы и интерфейсы

Кроме обобщенных функций и массивов также бывают обобщенные классы и интерфейсы:

[Пример](https://www.typescriptlang.org/play?#code/MYGwhgzhAECqEFMBOAeAKgPmgbwFDWgAckBLANzABcFoB9EgEwC5o19pgB7AOwkqQCuwSpyQAKRizQBKHOwKUAFiQgA6eg2gBeaI3YBfdgHMElAJIMx0qXIIEkpgUm7QlK9XoKHDuEKdecALba0NwIAO5wiKjcAoEARsgYYgDM0rhcvJx+qiCcRmIigaom5pbSsgD0ldCATCCAfCCA7CC1gAIggAwggJIgbYCsIIBCIKFxiUi4vv5gICTANDphkfDIKHyk3EbJAORkEABma+mZENkIufli45NHpRZWVTUNze1dfdBLJCtAA)

```typescript
class User<T> {
  private _id: T
  constructor(id: T) {
    this._id = id
  }
  getId(): T {
    return this._id
  }
}

let tom = new User<number>(3)
console.log(tom.getId()) // возвращает number

let alice = new User<string>('vsf')
console.log(alice.getId()) // возвращает string
```

Только в данном случае надо учитывать, что если мы типизировали объект определенным типом, то сменить данный тип уже не получится. То есть в следующем случае второе создание объекта не будет работать, так как объект tom уже типизирован типом number:

[Пример](https://www.typescriptlang.org/play?#code/MYGwhgzhAECqEFMBOAeAKgPmgbwFDWgAckBLANzABcFoB9EgEwC5o19pgB7AOwkqQCuwSpyQAKRizQBKHOwKUAFiQgA6eg2gBeaI3YBfdgHMElAJIMx0qXIIEkpgUm7QlK9XoKHDuEKdecALba0NwIAO5wiKjcAoEARsgYYgDM0rhcvJx+qiCcRmIigaom5pbS6bhFIWGR8MgofKTcRskA5GQQAGZtsgD0fdCAfCCAEiCAHCCAjCCAXCCADCBAA)

```typescript
let tom = new User<number>(3)
console.log(tom.getId())
tom = new User<string>('vsf') // ошибка
```

Все то же самое и с интерфейсами:

```typescript
interface IUser<T> {
  getId(): T
}

class User<T> implements IUser<T> {
  private _id: T
  constructor(id: T) {
    this._id = id
  }
  getId(): T {
    return this._id
  }
}
```

## Ограничения обобщений

Иногда необходимо использовать обобщения, однако принимать любой тип в функцию или класс вместо параметра `T` нежелательно. Например, пусть имеется следующий интерфейс и классы его реализующие:

```typescript
interface IUser {
  getInfo()
}
class User implements IUser {
  _id: number
  _name: string
  constructor(id: number, name: string) {
    this._id = id
    this._name = name
  }
  getInfo() {
    console.log('id: ' + this._id + '; name: ' + this._name)
  }
}

class Employee extends User {
  _company: string
  constructor(id: number, name: string, company: string) {
    super(id, name)
    this._company = company
  }

  getInfo() {
    console.log('id: ' + this._id + '; name: ' + this._name + '; company:' + this._company)
  }
}
```

Теперь пусть у нас будет класс, выводящий информацию о пользователях:

```typescript
class UserInfo<T extends IUser> {
  getUserInfo(user: T): void {
    user.getInfo()
  }
}
```

В методе `getUserInfo` мы хотим использовать функцию `getInfo()`, предполагая, что в качестве параметра будет передаваться объект `IUser`. Но чтобы нельзя было передать объекты любого типа, а только объекты `IUser`, устанавливается ограничения с помощью ключевого слова extends.

И затем мы можем использовать класс, передавая подходящие объекты:

```typescript
let tom = new User(3, 'Tom')
let alice = new Employee(4, 'Alice', 'Microsoft')
let userStore = new UserInfo()
userStore.getUserInfo(tom)
userStore.getUserInfo(alice)
```

## Ключевое слово new

Чтобы создать новый объект в коде обобщений, нам надо указать, что обобщенный тип T имеет конструктор. Это означает, что вместо параметра type:T нам надо указать type: {new(): T;}. Например, следующий обобщенный интерфейс работать не будет:

```typescript
function UserFactory<T>(): T {
  return new T() // ошибка компиляции
}
```

Чтобы интерфейс начал работать, используем слово new:

```typescript
function userFactory<T>(type: { new (): T; }); T {

    return new type()
}


class User {

    constructor() {
        console.log("создан объект User")
    }
}

let user : User = userFactory(User)
``` -->

## Ссылки:

1.  [TypeScript документация](https://www.typescriptlang.org/docs/handbook/generics.html)
2.  [Metanit](https://metanit.com/web/typescript/3.5.php)
3.  [Canonium](https://canonium.com/articles/typescript-generics)

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

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)
