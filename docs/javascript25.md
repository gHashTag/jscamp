---
id: javascript25
title: Параметры по умолчанию
sidebar_label: Параметры по умолчанию
---

Параметры по умолчанию позволяют задавать параметрам функции значения по умолчанию в случае, если функция вызвана без аргументов, или если параметру явным образом передано значение `undefined`.

В `JavaScript` параметры функции, которым при ее вызове не передаются значения, принимают по умолчанию значение `undefined`. Однако в некоторых случаях может быть полезно задать иное значение по умолчанию. Именно для таких случаев предназначены параметры по умолчанию.

## Синтаксис

```jsx live
function learnJavaScript() {
  const multiply = (a, b = 1) => {
    //Значение по умолчанию у b равно 1
    return a * b
  }
  return multiply(5, 2) //Если b будет undefined, то ему присвоиться значение по умолчанию
}
```

### Передача других "ложных" значений

Если формальному параметру при вызове передано любое значение, отличное от `undefined`, в том числе одно из "ложных" значений, таких как false, 0, "", '', ``, null, NaN, то в этом случае значение по умолчанию присвоено параметру не будет. В этом случае нужно самому прописывать код который будет отлавливать эти "ложные значения".

## Примеры

В параметрах по умолчанию можно использовать значения предыдущих (расположеннных левее в списке) параметров:

```jsx live
function learnJavaScript() {
  const greet = (name, greeting, message = greeting + ' ' + name) => {
    return [name, greeting, message]
  }

  return greet('David ', 'Hi ')
}
```

Пример функции с параметрами по умолчанию и без них:

```jsx live
function learnJavaScript() {
  const withDefaults = (a = 1, b = 3, c = 2) => {
    //Функия с параметрами по умолчанию
    return [a, b, c]
  }
  const withoutDefaults = (a, b, c) => {
    //Функция без параметров по умолчанию
    if (a == undefined) {
      a = 1
    }
    if (b == undefined) {
      b = 3
    }
    if (c == undefined) {
      c = 2
    }
    return [a, b, c]
  }

  return withDefaults()
}
```

Результат будет тот же, но без параметров по умолчанию код может стать заметно больше.

## Вопросы:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

Для того чтобы понять, на сколько вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме.

![Sumerian school](/img/app.png)

Если параметрам функции не передано значение, какое значение они принимают по умолчанию?
1. null
2. undefined
3. NaN

## Ссылки:

1.  [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Default_parameters)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/FELiX-RN"><img src="https://avatars0.githubusercontent.com/u/72006627?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Philipp Dvinyaninov</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=FELiX-RN" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![Become a Patron!](/img/logo/patreon.png)](https://www.patreon.com/bePatron?u=31769291)
