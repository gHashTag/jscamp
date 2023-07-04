---
id: typescript07
title: Generalizations
sidebar_label: Generalizations
---


TypeScript is a strongly typed language, but sometimes you need to build functionality so that it can use any data type. In some cases, we could use the any type:

```typescript
function getId(id: any): any {
  return id
}
let result = getId(5)
console.log(result)
```

However, in this case, we cannot use the result of the function as an object of the same type that was passed to the function. For us, this is type any. If instead of the number 5, an object of some class were passed to the function, and then we would have to use this object, for example, call functions on it, then this would be problematic. And to concretize the return type, we can use generics:

```typescript
function getId<T>(id: T): T {
  return id
}
```

With the expression `<T>` we indicate that the function getId is typed with a specific type T. When the function is executed, a specific type will be substituted for T. Moreover, at the compilation stage, the specific type is not known. And the function will return an object of this type. For example:

```typescript
function getId<T>(id: T): T {
  return id
}
let result1 = getId<number>(5)
console.log(result1)
let result2 = getId<string>('abc')
console.log(result2)
```

In the first case, instead of the T parameter, the number type will be used, so we can pass a number to the function. In the second case, instead of T, the string type is used, so in the second case, you can pass a string. Thus, we can pass objects of different types to the function, but at the same time strict typing is preserved, each version of a generic function can only accept objects of a certain type.

Similarly, you can also use generic arrays:

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

In this case, regardless of the type of data passed in the array, all its elements will be combined into one common string.

## Generic Classes and Interfaces

In addition to generic functions and arrays, there are also generic classes and interfaces:

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

Only in this case, we must take into account that if we typed an object with a certain type, then changing this type will no longer work. That is, in the following case, the second object creation will not work, since the tom object is already typed with the number type:

```typescript
let tom = new User<number>(3)
console.log(tom.getId())
tom = new User<string>('vsf') // ошибка
```

It's the same with interfaces:

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

## Generalization constraints

Sometimes you need to use generics, but you don't want to accept any type in a function or class instead of the T parameter. For example, suppose you have the following interface and classes that implement it:

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

Now let's have a class that displays information about users:

```typescript
class UserInfo<T extends IUser> {
  getUserInfo(user: T): void {
    user.getInfo()
  }
}
```

In the getUserInfo method, we want to use the getInfo () function, assuming an IUser object will be passed as a parameter. But so that you cannot pass objects of any type, but only IUser objects, constraints are set using the extends keyword.

And then we can use the class by passing in the appropriate objects:

```typescript
let tom = new User(3, 'Tom')
let alice = new Employee(4, 'Alice', 'Microsoft')
let userStore = new UserInfo()
userStore.getUserInfo(tom)
userStore.getUserInfo(alice)
```

## The new keyword

To create a new object in generic code, we need to indicate that the generic type T has a constructor. This means that instead of the type: T parameter, we need to specify type: {new (): T;}. For example, the following generic interface will not work:

```typescript
function UserFactory<T>(): T {
  return new T() // ошибка компиляции
}
```

To make the interface work, use the word new:

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
```

## Links:

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
    <td align="center"><a href="https://github.com/FELiX-RN"><img src="https://avatars0.githubusercontent.com/u/72006627?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Philipp Dvinyaninov</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=FELiX-RN" title="Documentation">  </a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)
