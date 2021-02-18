---
id: typescript09
title: Declarations
sidebar_label: Declarations
---

Declarations are a very important part of _TypeScript_ due to which static typing is projected onto dynamic _JavaScript_.

## Declaration

Since the development of programs in _TypeScript_ uses libraries written in _JavaScript_, the `tsc` compiler, whose main task is type checking, feels like it is blindfolded. Despite the fact that with each new version type inference is getting better and better at understanding _JavaScript_, it is still far from ideal. In addition, parsing the _JavaScript_ code adds a load on the processor, which is sometimes not enough precious time when developing modern applications.

_TypeScript_ solved this problem by connecting to the project the declarations it generated in advance or manually created by developers. Declarations are placed in files with the extension `.d.ts` and consist only of type declarations that completely repeat the program until the moment of compilation, when it was deprived of all typing features. Their operation is very similar to the operation of files with the extension `.h` in languages _C/C++_.

```jsx
// Файл Animal.ts
export default class Animal {
   public name: string = 'animal';
   public voice(): void {}
}

// Файл Animal.d.ts
declare module "Animal" {
   export default class Animal {
       name: string;
       voice(): void;
   }
}
```

## Installation declaration

If the declaration is distributed separately from the library, then it will most likely end up in a huge repository on `github` called` DefinitelyTyped` containing a huge number of declarations. To make it easier to navigate in this set, in addition to the site [TypeSearch](https://www.typescriptlang.org/dt/search?search=) acting as a search engine, a declaration manager called `Typed` was created. But we will not talk about it since it is used when working with `TypeScript` versions less than` v2.0`, so we will talk about its development in the image of the package manager team _npm_, namely _@types_.

In order to set the required declaration, in the terminal it is necessary to execute the command, part of which consists of their directive `@ types`, followed by the name of the library, separated by a slash`/`.

```jsx
npm i -D @types/name
```

## Creating a declaration

In addition to the fact that the declaration can be written by hand, it can also be generated automatically, provided that the code is written in _TypeScript_. In order for _tsc_ to generate declarations during compilation, you need to activate the compiler option `--declaration`.

It will not be superfluous to remind you that the declaration needs to be generated only when the library is completely ready. The entry point of the compiler itself is the configuration file that was installed for it at startup. This means that if the project is in the `src` directory, then in the declaration the path will be specified as` src / libname` instead of the required `lib`.

```jsx
// Ожидается
declare module 'libname' {
  // ...
}

// Есть
declare module 'src/libname' {
  // ...
}
```

## Example

Let's see how we can use header files, using the example of using global variables. For example, a _JS_ variable is defined on a web page.

```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8" />
    <title>TypeScript HTML</title>
  </head>

  <body>
    <h1>TypeScript HTML</h1>
    <div id="content"></div>
    <script>
      let gVar = 'Hello TypeSript !'
    </script>
    <script src="app.js"></script>
  </body>
</html>
```

We want to access this variable in the TypeScript code in the file `app.ts`.

```jsx
class Utility {
  static displayGlobalVar() {
    console.log(globalVar)
  }
}

window.onload = () => {
  Utility.displayGlobalVar()
}
```

When the application is launched, the _TS_ compiler will not be able to compile the program, since the global variable does not yet exist for the _TS_ code. In this case, we need to include the definition of a global variable using declarative files. To do this, add a new file to the project, which we will call `globals.d.ts` and which will have the following content.

```jsx
declare let gVar: string
```

Using the declare keyword, the definition of a global variable is included in the TS program. Let's also change the file `app.ts`.

```jsx
// <reference path="globals.d.ts" />

class Utility {
  static displayGlobalVar() {
    console.log(gVar)
  }
}
window.onload = () => {
  Utility.displayGlobalVar()
}
```

Using the `reference` directive at the beginning of the file, the header file` globals.d.ts` is included. The path parameter specifies the path to the header file.

Project structure:

- app.ts
- globals.d.ts
- index.html

When you run the `index.html` file in the developer console, you will see the phrase `Hello TypeScript !`.

## Questions

Now we are ready to explore with you _TypeScript_, but in order to understand how much you learned this lesson, take the test in the [mobile application](http://onelink.to/njhc95) in our school on this topic.

![Sumerian school](/img/app.png)

## Links

1. [TypeScriptLang](https://www.typescriptlang.org/docs/handbook/modules.html)
2. [Modules](http://typescript-lang.ru/docs/Modules.html)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr> 
    <td align="center"><a href="https://github.com/IIo3iTiv"><img src="https://avatars1.githubusercontent.com/u/72025062?v=4?s=200" width="200px;" alt=""/><br /><sub><b>IIo3iTiv</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=IIo3iTiv" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
  </tr>
</table>

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
