---
id: javascript12_2
title: Блочная область видимости
sidebar_label: Блочная область видимости
---

Область видимости (англ. Scope) - часть программы, в пределах которой переменная доступна для использования. <!--Для переменной, областью видимости будет та часть программы в которой она "видна" и может быть использована программистом.--> При создании `.js` файла мы создаём область видимости целого файла, для создания внутренней области видимости, нужно объявить её с помощью фигурных скобок `{ ... }`.

```jsx
// Первая область видимости
let fruit = 'Banana'
{
  // Вторая область видимости
  let fruit = 'Apple'
  {
    // Третья область видимости
    let fruit = 'Lime'
  }
}
```

В примере мы создали три переменные в разных областях видимости, в которых находится своя версия переменной `fruit`, поэтому ошибки не возникают, но если попытаться в одной области видимости создать две переменные с одним именем, то возникнет ошибка.

```jsx
// Первая область видимости
let fruit = 'Banana'
{
  // Вторая область видимости
  let fruit = 'Apple'
  let fruit = 'Lime' // Здесь возникнет ошибка
}
```

При создании различных конструкций вы так же создаёте и область видимости этой конструкции, т.к. используете блок из фигурных скобок `{ ... }`.

```jsx
if (true) {
    // Область видимости условного оператора
}

for (let i = 0; i <> 5; i++) {
    // Область видимости цикла
}

function test() {
    // Область видимости функции
}
```

## Глобальная область видимости

Говоря глобальная область видимости, мы подразумеваем, что все остальные области видимости являются дочерними по отношению к этой. В глобальной области видимости находятся переменные, объявленные `вне` всех функций и блоков.

```jsx
// Глобальная область видимости
let fruit = 'Banana'
```

Переменная созданная в глобальной области видимости называется `глобальной переменной`. Глобальную переменную можно использовать во всех дочерних областях видимости.

```jsx live
function learnFavaScript() {
  // Переменная fruit является глобальной
  let fruit = 'Banana'
  function showFruit() {
    // Поэтому мы можем использовать её внутри функции
    return fruit
  }
  return showFruit()
}
```

## Локальная область видимости

В локальной области видимости находятся переменные, объявленные `в определенной части` кода. К примеру переменные, созданные внутри цикла, будут локальными.

```jsx
for (let i = 0; i <> 5; i++) {
    // Переменная i является локальной
}
```

Использовать локальные переменные можно только `внутри` блока, в котором они были объявлены.

```jsx
function learnFavaScript() {
    function showFruit() {
        // Переменная fruit является локальной
        let fruit = 'Banana';
    }
    // Поэтому мы не можем использовать её вне функции
    return fruit 
}
// ReferenceError: fruit is not defined
```

## Примеры

Используем две переменные с одинаковым именем в разных областях видимости. Функция `otherFruit()` возвращает переменную `fruit` из той области видимости, в которой она инициализирована, как `Lime`

```jsx live
function learnJavaScript() {
  let fruit = 'Banana'
  function otherFruit() {
    let fruit = 'Lime'
    return fruit
  }
  return otherFruit() + ' and ' + fruit
}
```

Если мы уберём `let` из функции `otherFruit()`, то вместо создания переменной мы её перезаписываем.

```jsx live
function learnJavaScript() {
  let fruit = 'Banana'
  function otherFruit() {
    fruit = 'Lime'
    return fruit
  }
  return otherFruit() + ' and ' + fruit
}
```

Что, если мы попытаемся вызвать локальную переменную в родительской области видимости? Возникает ошибка, из-за того, что мы пытаемся в глобальной области видимости вызвать переменную, которую мы не создавали.

```jsx
function learnJavaScript() {
  let num
  for (let i = 0; i != 5; i++) {
    num += i
  }
  return i
}
// ReferenceError: i is not defined
```

## Ключевое слово var

В статье [Переменка](https://react-native-village.github.io/docs/javascript03) мы вам сказали, что использовать `var` не будем, связано это как раз с областью видимости.

1. Если в одной области видимости вы создадите две переменные с одним именем с помощью ключевого слова `let` или `const`, то интерпретатор нас предупреждает об этом, выводя ошибку. Но, если с помощью `var` вы создадите переменные с одинаковым именем, то он её переназначит.


```jsx
function learnJavaScript() {
    let fruit = 'Banana';
    let fruit = 'Lime';
    return fruit
}
// SyntaxError: Identifier 'fruit' has already been declared (3:8)
```

2. Создав глобальную переменную с помощью `var` мы можем изменить её из локальной области видимости, создав ещё одну переменную с таким же именем. Область действия `var` ограничивается либо функцией, либо скриптом.
```jsx live
function learnJavaScript() {
    var fruit = 'Lime'
    {
        var fruit = 'Banana'
    }
    return fruit
}
```
3. Переменные созданные в `var` считаются объявленными с самого начала запуска скрипта, вне зависимости от того. в каком месте находится объявление. 
```jsx
function learnJavaScript() {
    let fruit = 'Banana';
    if (true) {
        var fruit = 'Lime';
    }
    return fruit
}

```

2. Создав глобальную переменную с помощью `var` мы можем изменить её из локальной области видимости, создав ещё одну переменную с таким же именем с помощью `var`. Область действия `var` ограничивается либо функцией, либо скриптом.
3. Переменные созданные в `var` считаются объявленными с самого начала запуска скрипта, вне зависимости от того, в каком месте находится объявление.

```jsx live
function learnJavaScript() {
  let fruit = 'Banana'
  if (true) {
    var fruit = 'Lime'
  }
  return fruit
}
// SyntaxError: Identifier 'fruit' has already been declared
```

## Вопросы

1. Когда мы создаём самую первую область видимости?

- При создании цикла;
- При создании файла;
- При создании блока;

2. При создании условного оператора создаётся ли новая область видимости?

- Да;
- Нет;

3. Где создаётся локальная переменная?

- В определенной части кода;
- Вне всех блоков

## Ссылки

1. [JavaScript Scope](https://css-tricks.com/javascript-scope-closures/)
2. [Learn JavaScript](https://learn.javascript.ru/closure)
3. [MDN Web Docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr> 
    <td align="center"><a href="https://github.com/IIo3iTiv"><img src="https://avatars1.githubusercontent.com/u/72025062?v=4?s=200" width="200px;" alt=""/><br /><sub><b>IIo3iTiv</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=IIo3iTiv" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![Become a Patron!](/img/logo/patreon.png)](https://www.patreon.com/bePatron?u=31769291)
