---
id: typescript00
title: Introduction to TypeScript
sidebar_label: Introduction
---


`JavaScript` was originally created to make web pages _live_. Due to its ease of use, it gained _popularity_ and began to be used on almost all platforms. JavaScript code is built on `scripts`, which are supposed to be _not big and fast_. The developers did not think that JavaScript would be used to write applications with a lot of code. In this connection, large applications written in JavaScript have _problems_. Here are some of them:

1. Due to the interpretability of the language, you can find out about the error only after executing the code;
2. The complexity of using the practices of object-oriented programming;
3. Dynamic typing.

To solve such problems, a programming language was created `TypeScript`.

## TypeScript

`TypeScript` - a programming language introduced by Microsoft in 2012 and positioned as a web application development tool that extends JavaScript. TypeScript is backward compatible with JavaScript and compiles to the latter. In fact, once compiled, a TypeScript program can be executed in any modern browser or shared with the Node.js server framework. TypeScript code looks almost the same as JS code, and if you have experience in frontend development, learning TypeScript is easy enough. Especially considering that you can write JS code directly in TS scripts.

## History

The development of TypeScript began at the end of 2012. Although it originated in the company _Microsoft_, and its actual creator is the programmer `Anders Hejlsberg`, also known as the creator of such languages ​​as _Delphi, C # _, but this project immediately began to develop as _OpenSource_. And from the very beginning, the new language began to spread rapidly due to its flexibility and productivity. A lot of projects that were written in JavaScript began to be ported to TypeScript. The popularity and relevance of the ideas of the new language has led to the fact that a number of these ideas will subsequently become part of the new JavaScript standard. And the new version of one of the most popular web frameworks - _Angular 2/4/5 / 6_ is written entirely in TypeScript jointly by Microsoft and Google.

## Benefits TypeScript

TypeScript brings many conveniences to the world of JavaScript, let's take a look at its main features.

### Strong typing

`TypeScript` is a strongly typed and compiled programming language. JavaScript is dynamically typed. `Strong typing` is one of the options for working with data types, which means that the following conditions are met:

- The data object always has a strictly defined type;
- A variable can only be assigned strictly the same data type as the variable;
- Operations require parameters of strictly defined types;
- Implicit type conversion is not allowed.

Example JavaScript:

```jsx live
function learnTypeScript() {
  let fruit = 'banana'
  fruit = 777
  fruit = (a, b) => a + b
  return fruit(1, 0)
}
```

The variable `fruit` can be either a string, a number, or a function. No error occurs. In a strongly typed language, such code will fail compilation.

[Example TypeScript](https://www.typescriptlang.org/play?#code/DYUwLgBAZgTgrgSzALgM5hggdgcwgXggHIAjAQywrKICgJ7p4kCIA2dmgYwHstVvQAOmDccACliIwASiA)

```jsx
let fruit: string = 'banana'
fruit = 666
console.log(fruit)
```

The syntax `: string` before` fruit` means that the variable is assigned the type `string (string)`. In the next line, we assign a number to it, which is not allowed.

### Compilation

One of the annoyances you can run into when developing in JavaScript is a typo or accidental redefinition of a global variable. That can be found only at the stage of program execution. And this clearly does not save development time.

TypeScript checks the code for errors during compilation, which will obviously speed up the identification of such troubles.

### OOP

TypeScript implements many of the concepts that are inherent in object-oriented languages, such as inheritance, polymorphism, encapsulation and access modifiers, and so on.

### Large programs

TypeScript makes it faster and easier to write large, complex programs, and thus easier to maintain, develop, scale, and test than in standard JavaScript.

### OpenSource

TypeScript is being developed as an OpenSource project and, like many projects, is hosted on github. In addition, it is cross-platform, which means that we can use both Windows and MasOS or Linux for development.

## Cons of TypeScript

Developers love this language, and some large projects are already switching to it. For example, the popular Angular.JS framework. But this is still not enough for it to become as popular as JavaScript. This is because it is more expensive and time-consuming to develop a TypeScript web application.

Especially if you need to use some library or framework that is not ported to TS. In this case, developers will have to independently describe the signatures (indicate data types) of all functions and methods - a rather lengthy process, given the size of modern libraries.

Also, the threshold for entering TypeScript is higher - in order to take advantage of its benefits, it is important to know data types and object-oriented programming.

## Whether to use TypeScript

Now that you know what TypeScript is, I'll try to tell you when you need to and in which you shouldn't use it.

My reasoning is very simple: TypeScript should always be used if you know that the project will grow and need to be maintained. Should I translate already written projects? - I cannot give you an exact answer, usually in such projects it is difficult to find time for refactoring, and even more so for switching to TypeScript. However, it is still worth thinking about it, because you get typing and the ability to use modern standards.

In the event that you know in advance that the project has certain frameworks of the code base and they are small, then the implementation of TypeScript will only bring you support for modern ECMAScript capabilities. However, remember that you can always switch from JavaScript to TypeScript, but on the contrary, you will have to manually delete all types, or use the generated files.

## Questions

Now we are ready to learn TypeScript with you, but in order to understand how much you learned this lesson, take the test in the [mobile application](http://onelink.to/njhc95) в нашей школы по этой теме.

![Sumerian school](/img/app.jpg)

## Links

1. [TypeScript Lang](https://www.typescriptlang.org/)
2. [Thoughts out loud about TypeScript](https://habr.com/ru/post/272055/)
3. [The basics TypeScript](https://habr.com/ru/company/ruvds/blog/344502/)
4. [Сanonium](https://canonium.com/articles/typescript-introduction)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr> 
    <td align="center"><a href="https://github.com/IIo3iTiv"><img src="https://avatars1.githubusercontent.com/u/72025062?v=4?s=200" width="200px;" alt=""/><br /><sub><b>IIo3iTiv</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=IIo3iTiv" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
  </tr>
</table>

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
