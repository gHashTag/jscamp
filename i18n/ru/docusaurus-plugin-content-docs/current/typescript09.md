---
id: typescript09
title: Декларации
sidebar_label: Декларации
---

Декларации это очень важная часть TypeScript благодаря которой статическая типизация проецируется на динамический JavaScript.

![Space](https://media.giphy.com/media/RkHrSGDmPCb7QSwDYz/giphy.gif)

## Declaration

Поскольку при разработке программ на TypeScript используются библиотеки написанные на JavaScript, компилятор `tsc`, чьей главной задачей является проверка типов, чувствует себя будто у него завязаны глаза. Несмотря на то, что с каждой новой версией вывод типов все лучше и лучше учится разбирать JavaScript, но до идеала ещё далеко. Кроме того, разбор JavaScript кода добавляет нагрузку на процессор, драгоценного время которого при разработке современных приложений, порой и так не достаточно.

TypeScript решил эту проблему за счет подключения к проекту заранее сгенерированных им или создаваемых вручную разработчиками деклараций. Декларации размещаются в файлах с расширением `.d.ts` и состоят только из объявлений типов полностью повторяющих программу до момента компиляции при которой она была лишена всех признаков типизации. Их действие во многом похоже на работу файлов с расширением `.h` в языках C/C++.

```ts
// Файл Animal.ts
export default class Animal {
  public name: string = 'animal'
  public voice(): void {}
}

// Файл Animal.d.ts
declare module 'Animal' {
  export default class Animal {
    name: string
    voice(): void
  }
}
```

## Установка декларации

Если декларация распространяется отдельно от библиотеки, то она скорее всего, попадет в огромный репозиторий на `github` под названием `DefinitelyTyped` содержащий огромное количество деклараций. Чтобы было проще ориентироваться в этом множестве, помимо сайта [TypeSearch](https://www.typescriptlang.org/dt/search?search=) выступающего в роли поисковика, был создан менеджер деклараций под названием `Typed`. Но о нем мы говорить не будем поскольку он применяется при работе с `TypeScript` версии меньше чем `v2.0`, поэтому речь пойдет о его развитии в образе команды пакетного менеджера `npm`, а именно `@types`.

Для того чтобы установить требующуюся декларацию, в терминале необходимо выполнить команду часть которой состоит их директивы `@types` после которой, через косую черту `/`, следует имя библиотеки.

```jsx
npm i -D @types/name
```

![install](https://media.giphy.com/media/Y4D7k6czAciiJfQh4s/giphy.gif)

## Создание декларации

Помимо того, что декларацию можно написать руками, её также можно сгенерировать автоматически, при условии что код написан на TypeScript. Для того, чтобы _tsc_ при компиляции генерировал декларации, нужно активировать опцию компилятора `--declaration`.

Будет не лишним напомнить, что декларацию нужно генерировать только тогда, когда библиотека полностью готова. Точкой входа самого компилятора, служит конфигурационный файл который ему был установлен при запуске. Это означает, что если проект находится в директории `src`, то в декларации путь будет указан как `src/libname` вместо требуемого `lib`.

```ts
// Ожидается
declare module 'libname' {
  // ...
}

// Есть
declare module 'src/libname' {
  // ...
}
```

![create](https://media.giphy.com/media/Kc1TPDRWHydtU8wDzJ/giphy.gif)

## Пример

Рассмотрим, как мы можем использовать заголовочные файлы, на примере использования глобальных переменных. К примеру на веб-странице определена JS переменная.

![sample](https://media.giphy.com/media/dZpNUpORnh1ZAmxKiT/giphy.gif)

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
      let globalVar = 'Hello TypeSript !'
    </script>
    <script src="app.js"></script>
  </body>
</html>
```

Получить доступ к этой переменной мы хотим в коде TypeScript в файле `app.ts`.

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

При запуске приложения компилятор TS не сможет скомпилировать программу, так как для кода TS глобальная переменная пока не существует. В этом случае нам надо подключать определение глобальной переменной с помощью декларативных файлов. Для этого добавим в проект новый файл, который назовем `globals.d.ts` и который будет иметь следующее содержимое.

```jsx
declare let globalVar: string
```

С помощью ключевого слова declare в программу на TS подключается определение глобальной переменной. Также изменем файл `app.ts`.

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

С помощью директивы `reference` в начале файла подключается заголовочный файл `globals.d.ts`. С помощью параметра `path` указывается путь к заголовочному файлу.

Структура проекта:

- app.ts
- globals.d.ts
- index.html

При запуске файла `index.html` в консоле разработчика вы увидите фразу `Hello TypeScript!`.

## Вопросы

![question](https://media.giphy.com/media/Uq4ucFb5FLDStK6CUk/giphy.gif)

Как называется очень важная часть TypeScript благодаря которой статическая типизация проецируется на динамический JavaScript?

1. декларации
2. интроспекция
3. интерфейс

Где размещаются декларации?

1. `.d.ts`
2. `.h`
3. `.js`

С помощью какой команды устанавливается декларация?

1. `npm install -D @t/name`,
2. `npm install -D @d/name`,
3. `npm install -D @types/name`

Каким синтаксисом нужно воспользоваться для создания декларации?

1. `declare 'libname' { ... }`
2. `module 'lib' { ... }`
3. `declare module 'libname' { ... }`

Теперь мы готовы с вами изучать TypeScript, но для того чтобы понять на сколько вы усвоили этот урок пройдите тест в [мобильном приложении](http://onelink.to/njhc95) в нашей школы по этой теме.

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Ссылки

1. [TypeScriptLang](https://www.typescriptlang.org/docs/handbook/modules.html)
2. [Модули](http://typescript-lang.ru/docs/Modules.html)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr> 
    <td align="center"><a href="https://github.com/IIo3iTiv"><img src="https://avatars1.githubusercontent.com/u/72025062?v=4?s=200" width="200px;" alt=""/><br /><sub><b>IIo3iTiv</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=IIo3iTiv" title="Documentation">  </a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
  </tr>
</table>

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)
