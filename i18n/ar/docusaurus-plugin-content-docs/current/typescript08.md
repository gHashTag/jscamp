---
id: typescript08
title: Interfaces
sidebar_label: Interfaces
---


One of the basic tenets of _TypeScript_ is that typing is based on the structure of objects. This type of typing is called `implicit` or` duck '- an object is classified as a particular type (class, interface) if it has (implements) all its properties and methods. Interfaces in TS are used just to describe the types you need.

## Simple example

The best way to learn how interfaces work is to start with a simple example:

[Playground Link](https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABAcxgNwKYDEBOIZSIAUweBAXIgN6JgCGAthpQM5Q4xjKIC+AlNQBQiEYggIWcADYYAdFLjIiAcgDi6DIihxETRMsQBqRKXxRZ9Jn0E9BgmYQYBPXGZaIAvNVqNm+gEJ09PTKADSILADuGBhQYBgsLJQA7OEARggJlMB0UiyatqiYrgREziVQLHxAA)

```jsx
function giveFruit(fruit: { name: string }) {
  console.log('Give to me ' + fruit.name)
}

let myFruits = { name: 'Banana', sweetness: 7, bones: false }
giveFruit(myFruits)
```

The `giveFruit ()` function has a single parameter that requires the passed object to have a property named `name` of type` string`. Note that our object actually has more properties than required, but the compiler only checks to see if at least those required are present and match the required types.

Let's write the same example to test the _name_ property with the _string_ type, but using interfaces.

[Playground Link](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgGJQK7DMg3gKGSORDgFsIAuZAZzClAHMAaQ4mgdwgjBAhprUQGMgCNorYslEB7PoOkyZAGwhwQ+AL758MDCARhgc5I2AA3COiw4AFDEzZq17AEo8bIgjk0VEAHTKMoy2AOQA4hYoYDLIFMihyADUyA42-qQUrlo6qjhkAJ4uYDTIALx4JORUCQBC6g2hzLRcPPIKAOzNsvLU8Mo0KNpmlsW2hcU0rkA)

```jsx
interface Fruit {
  name: string;
  sweetness: number;
  bones: boolean;
}

function giveFruit(fruit: Fruit) {
  console.log('Give to me ' + fruit.name)
}

let myFruits = { name: 'Banana', sweetness: 7, bones: false }
giveFruit(myFruits)
```

The `Fruit` interface is the name we can now use to describe the requirement in the previous example. It still represents the presence of a single property named _name_ of type _string_. Please note that we did not need to explicitly indicate that the object we pass to the giveFruit () function inherits this interface, as it might in other languages. Only the sample is important here. If the object that we pass to the function meets the listed requirements, then everything is allowed.

It's worth noting that type checking does not ** require ** that these properties be in any order, but only that the properties required by the interface are present and of the required type.

## Optional properties

Not all interface properties may be required. Some exist under certain conditions or may not exist at all. Interfaces with optional properties are written similarly to other interfaces, where each optional property is denoted by a `?` At the end of the property name in the declaration.

[Playground Link](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgGJQK7DMg3gKGSORDgFsIAuZAZzClAHMAaQ4mgdwgjBAhprUQGMgCNorYslEB7PoOkyZAGwhwQk4ghUyoAfiEjxUfAF98+VTlHrb1dFhwBePGylFSFagHIAQrdJvTXdaLh55BQB2YPdZeWp4ZRoIGKltZV1qAAYAD1RUAFEARgBmAFZkMwsrZDgABzrVe0xsZBcCEI9yKmRvAEEG1SC3d05uXn4FMtTiOP5qegwIMyA)

```jsx
interface Fruit {
  name: string;
  sweetness: number;
  bones: boolean;
  color?: number;
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

Optional properties are popular when creating templates such as "option bags" in which you pass an object to a function that has only a couple of properties filled in.

## Only for reading

Some properties can be set read-only, and they will receive a value when the object is created. This can be achieved by placing the _readonly_ keyword in front of the property name.

```jsx
interface Point {
  readonly x: number;
  readonly y: number;
}

let a1: Point = { x: 10, y: 40 }
console.log('Точка [' + a1.x + '; ' + a1.y + ']')
```

You can create a variable of type `Point` by assigning an object literal to it. After that, the values of the `x` and` y` properties cannot be changed.

## Extra properties

In our first example of using the interfaces, _TypeScript_ allowed us to pass `{name: string; sweetness: number, bones: boolean} `where only` {name: string; } `. We also learned about optional properties, and how they can be useful when passing arguments to functions. Let's look at an example.

```jsx
interface Fruit {
  name: string;
  sweetness?: number;
  bones?: boolean;
  color?: number;
}

function addFruit(x: Fruit): { name: string, color: number } {
  // ...
}

let banana = addFruit({ name: 'banana', colour: 0xffe135 })
// error: 'colour' not expected in type 'Fruit'
```

Note that the argument passed to `addFruit ()` is written as `color` instead of` color`. In pure _JavaScript_, things like this don't throw errors, but they don't work the way the developer would like.

We can say that this program is correct from the point of view of types, since the types of the `sweetness` properties are compatible, there is no` color`, and the presence of the additional `color` property does not matter.

However, _TypeScript_ makes the assumption that there is a bug in this piece of code. Object literals are processed by it in a special way, and are _checked for extra properties_. This check is done when literals are either assigned to other variables or passed as arguments. If the literal contains any properties that are not in the target type, it will be considered an error.

There are several ways to get around this error. ** The first ** of which is the use of casting:

[Playground Link](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgGJQK7DMg3gKGSORDgFsIAuZAZzClAHMAaQ4mgdwgjBAhpoB+aiAxkARtFbFk4gPZ8h1eXIA2EOCGnEEauVGEkxkqPgC++fDAwgEYYAuRwAJs-RYwACgAe1d9gBKalwScipaeiZmZF1VfRFjaDM8NiIAejTkADoc80t1HHFNYuQAXidXfy8Q0gpqAHIi0lJ66Ni5DChqAAZvVFQAUQBGAGYAVmRkuBo0TECgA)

```jsx
let banana = addFruit({ name: 'banana', colour: 0xFFE135 } as Fruit)
```

**Second way** - adding a string index, it is better to use it when you are sure that the object can have additional properties.

[Playground Link](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgGJQK7DMg3gKGSORDgFsIAuZAZzClAHMBuQ4hAewBsOoB+aiAxkARtFbFkAbQAOUDjIBy5KrXpMAutTggAnqwC++fDAwgEYYBxDI4AEzvosYABQAPak+wBKarhIq1HQMIIwANMicPFCCwmJQBnhsRAD0KcgAdFn4RvhcEDgiOsXIALy2Dl6u-qQU1ADkRaSk9RFRHBgxyAAMbqioAKIAjADMAKzIBt5AA)

```jsx
interface Fruit {
  name: string;
  color?: number;
  [propName: string]: any;
}
```

In this example, the `Fruit` interface can have any number of properties. If it is not `name` or` color`, then the type of the property _doesn't matter_.

**Third way** - assign the object to another variable. Due to the assignment of an object to another variable, it will not pass the check for redundant properties, the compiler will not generate errors.

[Playground Link](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgGJQK7DMg3gKGSORDgFsIAuZAZzClAHMAaQ4mgdwgjBAhpoB+aiAxkARtFbFk4gPZ8h1eXIA2EOCGnEEauVGEkxkqPgC++fDAwgEYYAuRwAJs-RYwACgAe1d9gBKalwScipaeiZmZF1VfRFjaDM8NiIAejTkADoc80t1HDkAB3sFGmQAXjxQimoAcnFNJrro2LkMKGoABm9UVABRAEYAZgBWZDNtIkbSUkqnV38vYtKQGgCgA)

```jsx
let options = { name: 'banana', colour: 0xffe135 },
  banana = addFruit(options)
```

Keep in mind that for simple code, you shouldn't bypass property validation data. For more complex object literals that contain methods, state parameters, etc., it is worth keeping these methods of bypassing checks in memory, but nevertheless, most of the errors associated with checking unnecessary properties are, as a rule, actually errors. If you get this error, it might be worth revisiting the type declaration.

## Function types

In addition to describing properties, interfaces also allow you to describe the types of functions.

To describe the type of function in the interface, you need to define the call signature in it. It's like declaring a function with only a parameter list and a return type. Each parameter in the list must have a name and type.

```jsx
interface SearchFunc {
  (source: string, subString: string): boolean;
}
```

Having defined such an interface once, we can use it just like all other interfaces. The example below shows how to define a variable with a function type and assign a value to it.

[Playground Link](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgMoTlBALAYgVxAWQG8AoZS5ACgGcB7fLCALmVrClAHMAad-ACNUnHmw5cQ3AJRtB9egBsMIANxkAvmTLKwyALYBPdJhxsTWPIQTqyRizmQBeZDGthg9EHUbNxoqX5aIRFJbn8w6VIKKl1kKAhgxT0XBiYkADpaDEs6EICZdSpkYBgaBKSUlwBaAEYo8mLihLAmEFc4RWyiqi1iiC6URqbKFrbkTnwIHsotLTIELwZlDMV6bmp7HJxqAHJBOBBDuGRFYH0UOAAHK+Vd-n3jo93paSA)

```jsx
let mySearch: SearchFunc
mySearch = function (source: string, subString: string) {
  let result = source.search(subString)
  if (result == -1) {
    return false
  } else {
    return true
  }
}
```

The parameter names do not need to be the same for the function to pass type checking. For example, we could write the previous example like this:

[Playground Link](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgMoTlBALAYgVxAWQG8AoZS5ACgGcB7fLCALmVrClAHMAad-ACNUnHmw5cQ3AJRtB9egBsMIANxkAvmTLKwyALYBPdJhxsTWPIQTqyRizmQBeZDGthg9EHSzjRU-lohP0kZOQVlOBBSCipdZCgIIMU9F1osADpaDEs6IWl1KmRgGBpE5NSXAFoARmkYoqLEsCZo+EVswqotIogOlHJGqmbW5E58CC7KLS0yBC8GZQzFem5qexycagByQSj95EVgfRQ4AAcz5W3+Xf2QOG3paSA)

```jsx
let mySearch: SearchFunc
mySearch = function (src: string, sub: string): boolean {
  let result = src.search(sub)
  if (result == -1) {
    return false
  } else {
    return true
  }
}
```

The function parameters are checked one after the other, and the types of the parameters in the corresponding positions are compared in pairs. If you don't want to specify types for arguments, then TypeScript can infer types from context based on the fact that a function is assigned to a variable whose type is SearchFunc. In the following example, the return type of a function is also inferred based on the values ​​it returns (false and true). If the function returned numbers or strings, the compiler would warn during type checking that the return type does not match the type specified in the SearchFunc interface.

[Playground Link](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgMoTlBALAYgVxAWQG8AoZS5ACgGcB7fLCALmVrClAHMAad-ACNUnHmw5cQ3AJRtB9egBsMIANxkAvmTLKwyALYBPdJhxsTWPIQTajFnMgC8yGNbDB6IOln60h00goqXWQoCD9FPWdaLAA6WgxLOn8gymAYGjCIqOcAWgBGAPIqEtCIMCYQFzhFBNTkLRKIWpRi0sowiqgqznwIeq0tMgRPBmVYxXpuajtEnGoAckE4EBW4ZEVgfRQ4AAdd5QX+JbXVhelpIA)

```jsx
let mySearch: SearchFunc
mySearch = function (src, sub) {
  let result = src.search(sub)
  if (result == -1) {
    return false
  } else {
    return true
  }
}
```

## Indexed types

Similar to how we can use interfaces to describe the types of functions, we can also describe the types that we can _ "index" _, for example, `a [10]` or `ageMap [" daniel "]`. Indexed types have an index signature, which describes the types that we can use to index an object, along with the corresponding return types when indexing. Let's see an example:

[Playground Link](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgMpiqA5gQSlOAT2QG8AoZZAbVABMIAPALmRAFcBbAI2gF0WAzhmwBuMgF8yZADYQwyDoTwFCLdJhC58RMYuVFkAXmoAiAEIB7LiYA0yEwDEoEWid5iZchYXWDhmo299QioABncpBAsQAQtZADppCywACj1tEPCASiA)

```jsx
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray
myArray = ['Bob', 'Fred']

let myStr: string = myArray[0]
```

Here we have a `StringArray` interface that has an index signature. This signature says that when `StringArray` is indexed by _number_, _string_ is returned.

## Class types

In _TypeScript_, perhaps one of the most common uses of interfaces in languages like _C # _ and _Java_ is to explicitly enforce a class to enforce a specific contract.

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

### Static and instance classes

When working with classes and interfaces, it is useful to remember that a class has two types: _static_ and _example_. You may notice that if you create an interface with a constructor signature and try to create a class that implements that interface, you get the error:

[Playground Link](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgMIBsD2CDWrMgDOYUArgmJlMgN4BQyjyIEA7sgBQAWmpUAXM1IBbAEbQANMmGhSkQSBHioASgDcdAL506CdHEKE0WXMmDCADugjCI4Ixmx4CxMhSq0GTAPTfkAUSgoKi9GBD4oOzAAFXMIQQAROEgNJmQEFxJySihuBSVJaXyxaBVabU0gA)

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

This is because when a class implements an interface, only the instance side of the class is checked. Since the constructor is on the static side, it is not included in this check.

Instead, you will need to work directly with the static side of the class. In the following example, we define two interfaces: `ClockConstructor` for the constructor and` ClockInterface` for instance methods. Then, for convenience, we define a `createClock` constructor function that creates instances of the type that is passed to it:

[Playground Link](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgMIBsD2CDWrMgDOYUArgmJlMgN4BQyjyIEA7sgBQAWmpUAXM1IBbAEbQANMmGhSkQSBHioASkEZsOAJLho8JAG46AXzp1QkWIhQbcOy-pT0myMMFwc1yAG6ZgAEyNTOhhSEApgAmQEKAg4SFscDgYmCip1LFx8IhJySigJFMYePgUlSSLpWXkhMWg6L0T7PWtaStiwPhBmNmj87l4CqsVIFSCzBHQ4QkJkABFgAHNgMDh0RORgYQAHdAhhCHBZpt0rJDaXBAJiMjSobjK6oeFH5RVaUxc3D3fnF1Trpg9gA6LCLDgAInEEG2yGh2whY0qpmCk2mswAgiA1phFhstrt9ocwMdMtpTo4LgCcrd+lxXpJpAzVB9Kt8kr9KpdASCwZD2a5NIijC4UWY9mBkP4lis1sgALzRWLxCCJDgLZardZkqQARgATHqAOxIiXIODYsEKpVxBJkjhYnF4nXII1SADM+qR0s1a2B7M8dAtTv97g5QA)

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

Since the first parameter to createClock is of type ClockConstructor, in createClock _ (AnalogClock, 7, 32) _ it checks if AnalogClock has the correct constructor signature.

## Extending interfaces

Like classes, interfaces can extend each other. This allows you to copy elements from one interface to another, which gives you more flexibility in how you partition your interfaces into reusable components.

[Playground Link](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgMoAs4AcUG8BQyRyCA9gDalQBcyAzmFKAOYDc+AvvvqJLIigAKEEKkakA1nkLEcIAOrAAJmHS0QAVwC2AI2jsu+APRHkgHhBAvCCA+EEBsIIFYQQIIggIRBATCB2L1u8kACIIAYQB4ASIIAcIN7uQXY84NDwSGgAjhpwUCgQAB6QIEp0aJg4ADTIwqLiUsgExPTKEAAyIsyq6tp6UAbc5BBg9AlJKAC8ZRzIcNmo3cnsdGMQAHRklFDI-QBEOuQaEEsTU9N0VbUg9eiLyACMAAxbicnTcooqR-0ArNMXQA)

```jsx
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

// множественное расширение
interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
```

## Hybrid types

As we mentioned earlier, interfaces can describe more complex types found in the real world of _JavaScript_. Due to the dynamic and flexible nature of _JavaScript_, you may accidentally come across an object that works as a combination of some of the types described above.

One such example is an object that acts as a function and an object with additional properties:

[Playground Link](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgMIHsCu5rIN4BQyxyAFAM5hxRgBcyImAtgEbQCU9lUoA5gNxESoSFABucADb1GraIJLIoEchDClOyMemAATQQF8CBGNgRhg6EMl5qM2URvr2cUfEOKS1yBFlfIAXmRTEHNLawoqGhlmNih2fANkOHI0P1EFEl8HaAA6EWgJSUDkAEYAJgBmTOJs11zlVTASkLCrMgS8AxqlNUwoazqMgiMCL2aEEtswF0d2QQRSUoAGeYIEBpU1DQX81yKSgFZc5f4gA)

```jsx
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = function (start: number) {} as Counter;
    counter.interval = 123;
    counter.reset = function () {};
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
```

## Extending Classes with Interfaces

When an interface type extends a class type, it inherits the class variables, but not their implementations. It is as if the interface has declared all the class variables without providing an implementation. Interfaces even inherit _private_ and _protected_ base class variables. This means that when you create an interface that extends the _private_ or _protected_ class with fields, that type of interface can only be implemented by that class or its subclass.

This is useful when you have a large inheritance hierarchy but want to indicate that your code only works with subclasses that have certain properties. Subclasses should not be related other than inheriting from the base class. For example:

[Playground Link](https://www.typescriptlang.org/play?#code/MYGwhgzhAEDCD2A7ALgJ3iaBvAUNf0ADqgJYBuYyAptBMpVQFzRiICeA3DgL444koqqAGZhgNAMpUQVYPQBGMhCnSYqAD2qIAJjGVoM2PAQjTZyABQBKZmXgltXXjlCQYAIQCuyZEmgatXTgkA0wSAFtCGXCqFBgpGTkwRSp9VSMCWjM5a2xeZ1coaAAVAPd4dX9NWKC0w1xM00TLKzyePkKYAElwsABzVJD0iKiqGLjoBPNkpSH6nAB6BbhwIoByHv7BlQw16AFgeFRUcxA2fcjo2OQYAWoRMRo1qaSUupA1gDoStkIqGAAFmAyDRTIQwKgGNBtLJwJDkCQkDB4MIWERSBRqOj4H9UMhzms6AwvnxMsRyFCidRmKxOMZ8E1zLksPkgA)

```jsx
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() {}
}

class TextBox extends Control {
    select() {}
}

class ImageControl implements SelectableControl {
    private state: any;
    select() {}
}
```

In the above example, the `SelectableControl` contains all the members of the` Control`, including the `private state` property. Since `state` is a _private_ field, only descendants of` Control` can implement `SelectableControl`. This is because only descendants of a `Control` element will have a private element created in the same declaration, which is a requirement for compatibility of private members.

## Questions

Now we are ready to study _TypeScript_ with you, but in order to understand how much you learned this lesson, take the test in the [mobile application](http://onelink.to/njhc95) в нашей школы по этой теме.

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Links

1. [TypeScriptLang](https://www.typescriptlang.org/docs/handbook/interfaces.html)
2. [Interfaces](https://metanit.com/web/typescript/3.3.php)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr> 
    <td align="center"><a href="https://github.com/IIo3iTiv"><img src="https://avatars1.githubusercontent.com/u/72025062?v=4?s=200" width="200px;" alt=""/><br /><sub><b>IIo3iTiv</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=IIo3iTiv" title="Documentation">  </a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
  </tr>
</table>

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)
