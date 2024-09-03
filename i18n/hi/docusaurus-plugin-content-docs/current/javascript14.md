---
id: javascript14
title: Регулярные выражения
sidebar_label: Регулярные выражения
---

![@serverSerrverlesskiy](/img/javascript/headers/13.jpg)

Регулярные выражения (англ. _regular expressions_) — формальный язык  поиска и осуществления манипуляций со строками в тексте  , основанный на использовании метасимволов.

Регулярные выражения позволяют:

- Искать текст в строке
- Заменять подстроки в строке
- Извлекать информацию из строки

![search](https://media.giphy.com/media/l46Cy1rHbQ92uuLXa/giphy.gif)

JavaScript, наряду с Perl, это один из языков  программирования в котором поддержка регулярных выражений встроена непосредственно в язык .

## Сложность использования

![the complexity of using](https://media.giphy.com/media/5XYsIwzY00ONq/giphy.gif)

Недостаток регулярных выражений в том, что часто они выглядят странно и даже пугающе. Особенно это касается более сложных шаблонов.

```jsx
let regExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
```

## Определение регулярных выражения

![search](https://media.giphy.com/media/RMwYOO5e8pr1lhL8K7/giphy.gif)

Определение регулярного выражения, это создание шаблона, на основе которого будет происходить работа со строками. В JavaScript регулярные выражения - это объект, который может быть определён двумя способами.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="literal"
values={[
{label: 'Литерал', value: 'literal'},
{label: 'Конструкция', value: 'construction'},
]
}>
<TabItem value="literal">

Определение регулярных выражений с использованием литералов. Для регулярных выражений литералами выступают слеши `/ ... /`, они играют ту же роль, что и скобки `' ... '` при создании строк.

```jsx
let regExp = /шаблон/
```

Если вы решили создавать регулярные выражения при помощи литералов, то стоит учитывать, что такой метод создания _не допускает динамическое изменение_ задаваемых значений. Происходит это из-за того, что литералы регулярных выражения вызывают _предварительную компиляцию_ при анализе скрипта.

  </TabItem>
  <TabItem value="construction">

Определение регулярных выражений с использованием конструктора.

```jsx
let regExp = new RegExp('шаблон')
```

Компиляция регулярного выражения созданного с использованием конструктора происходит в момент выполнения скрипта. Такой способ создания стоит использовать, если ваше регулярное выражение создаётся из динамически сгенерированной строки.

  </TabItem>
</Tabs>

## Использование

![pressing the button](https://media.giphy.com/media/12hhLP67q6PqCs/giphy.gif)

Использование регулярных выражений рассмотрим на примере:

```jsx
let regExp = /banana/
```

Этим кодом мы создали простое регулярное выражение, которое ищет строку `banana`. Для тестирования регулярного выражения можно использовать метод `.test(string)`, результатом работы метода является `boolean` значение.

```jsx live
function learnJavaScript() {
  let regExp = /banana/,
    str = 'fanana ranana banana'
  return regExp.test(str) ? 'Нашёл' : 'Нету'
}
```

В примере регулярное выражение ищет подстроку `banana` в строке `str`.

## Якоря

![anchor](https://media.giphy.com/media/3ohze1LSWrEGCML02Y/giphy.gif)

Якоря привязывают шаблон к началу или концу строки. Для привязки к началу строки используется - `^`, а к концу - `$`.

```jsx live
function learnJavaScript() {
  let regExp = /^banana/,
    str = 'lime banana orange'
  return regExp.test(str) ? 'Нашёл' : 'Нету'
}
```

Используя такой шаблон `/banana/` вы будете искать `banana` во всей строке. Если нужно проверить на полное совпадение строки с шаблоном нужно использовать якоря `/^banana$/`. Метод `.test()` вернёт `true`  только в том случае, если вся строка это `banana`.

## Флаги

![Flag](https://media.giphy.com/media/ihRmRCxJuIi3pCORTL/giphy.gif)

Флаги используются для расширения осуществляемого регулярными выражениями поиска.

- `g` - при поиске ищет все совпадения;
- `i` - поиск не зависит от регистра `[Z-z]`;
- `m` - многострочный режим;
- `s` - включает режим **dotall**, при котором точка `.` может соответствовать символу перевода строки;
- `y` - выполняет поиск начиная с символа, который находится на позиции свойства **lastindex** текущего регулярного выражения;
- `u` - включает поддержку **Unicode**.

Использование флагов при разных способах создания шаблона регулярного выражения
<Tabs
defaultValue="literal"
values={[
{label: 'Литерал', value: 'literal'},
{label: 'Конструкция', value: 'construction'},
]
}>
<TabItem value="literal">

```jsx
let regExp = /шаблон/флаг // prettier-ignore
```

Обратите внимание, что флаги являются **неотъемлемой частью** регулярного выражения. Флаги не могут быть добавлены или удалены позднее. Также флаги можно комбинировать.

```jsx live
function learnJavaScript() {
  let regExp = /banana/i,
    str = 'faNana RanaNA BaNanA'
  return regExp.test(str) ? 'Нашёл' : 'Нету'
}
```

Попробуйте убрать флаг `i` из примера.
</TabItem>
<TabItem value="construction">

```jsx
let regExp = new RegExp('шаблон', 'флаг')
```

Обратите внимание, что флаги являются **неотъемлемой частью** регулярного выражения. Флаги не могут быть добавлены или удалены позднее. Также флаги можно комбинировать.

```jsx live
function learnJavaScript() {
  let regExp = new RegExp('banana', 'i'),
    str = 'faNana RanaNA BaNanA'
  return regExp.test(str) ? 'Нашёл' : 'Нету'
}
```

Попробуйте убрать флаг `i` из примера. Теперь поиск зависит от регистра.
</TabItem>
</Tabs>

## Итого

Тема очень обширная и нечасто используемая нами в разработке, поэтому если интересно, то подробней можно познакомиться с ней [здесь,](https://learn.javascript.ru/regular-expressions)[ здесь](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular_Expressions)[ и здесь.](https://tuhub.ru/frontend/js-regexp)

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Проблемы?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Пишите в [Discord](https://discord.gg/6GDAfXn) или телеграмм [чат](https://t.me/neuro_coder_group), а также подписывайтесь на наши [новости](https://t.me/javascriptapp)
s

## Вопросы

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

Для чего нужны регулярные выражения?

1. Cоздание шаблонов
2. Манипуляции со строками
3. Редактирования строк

Какой символ используется для литерального создания регулярного выражения?

1. Слеш `/`
2. Обратный слеш `\`
3. Квадратные скобки `[]`

В каком способе создания регулярного выражения не допускается дальнейшее динамическое изменение задаваемых значений?

1. В литеральном
2. В конструкторе
3. При любом способе динамическое изменение допустимо

Для того чтобы понять насколько вы усвоили этот урок пройдите тест в [мобильном приложении](http://onelink.to/njhc95) в нашей школы по этой теме.

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Ссылки

1. [Learn JavaScript](https://learn.javascript.ru/regular-expressions)
2. [MDN Web Docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular_Expressions)
3. [JS RegExp](https://tuhub.ru/frontend/js-regexp)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr> 
    <td align="center"><a href="https://github.com/IIo3iTiv"><img src="https://avatars1.githubusercontent.com/u/72025062?v=4?s=200" width="200px;" alt=""/><br /><sub><b>IIo3iTiv</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=IIo3iTiv" title="Documentation">  </a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

