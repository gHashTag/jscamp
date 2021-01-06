---
id: javascript14
title: Регулярные выражения
sidebar_label: Регулярные выражения
---

![@serverSerrverlesskiy](/img/javascript/headers/13.jpg)

**Регулярные выражения** (англ. _regular expressions_) — формальный язык👅 поиска и осуществления манипуляций с строками в тексте 📜 , основанный на использовании метасимволов. Регулярные выражения позволяют:

- **Искать** текст в строке;
- **Заменять** подстроки в строке;
- **Извлекать** информацию из строки.

![search](https://media.giphy.com/media/l46Cy1rHbQ92uuLXa/giphy.gif)

JavaScript, наряду с Perl, это один из языков👅 программирования в котором поддержка регулярных выражений встроена непосредственно в язык👅.

## Сложность использования

![the complexity of using](https://media.giphy.com/media/5XYsIwzY00ONq/giphy.gif)

Недостаток регулярных выражений в том, что часто они выглядят странно и даже пугающе. Особенно это касается более сложных шаблонов.

```jsx
let regExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
```

## Определение регулярных выражения

![search](https://media.giphy.com/media/RMwYOO5e8pr1lhL8K7/giphy.gif)

Определение регулярного выражения, это создание🏗️ шаблона, на основе которого будет происходить работа со строками. В JavaScript регулярные выражения - это объект, который может быть определён двумя способами.

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

Определение регулярных выражений с использованием литералов. Для регулярных выражений литералами выступают слеши `/ ... /`, они играют ту же роль, что и скобки `' ... '` при создании🏗️ строк.

```jsx
let regExp = /шаблон/
```

Если вы решили создавать🏗️ регулярные выражения при помощи литералов, то стоит учитывать, что такой метод создания🏗️ _не допускает динамическое изменение_ задаваемых значений. Происходит это из-за того, что литералы регулярных выражения вызывают _предварительную компиляцию_ при анализе скрипта.

  </TabItem>
  <TabItem value="construction">

Определение регулярных выражений с использованием конструктора.

```jsx
let regExp = new RegExp('шаблон')
```

Компиляция регулярного выражения созданного🏗️ с использованием конструктора происходит в момент выполнения скрипта. Такой способ создания🏗️ стоит использовать, если ваше регулярное выражение создаётся🏗️ из динамически сгенерированной строки.

  </TabItem>
</Tabs>

## Использование

![pressing the button](https://media.giphy.com/media/12hhLP67q6PqCs/giphy.gif)

Использование регулярных выражений рассмотрим на примере:

```jsx
let regExp = /banana/
```

Этим кодом📟 мы создали🏗️ просто регулярное выражение, которое ищет строку `banana`. Для тестирования регулярного выражения можно использовать метод `.test(string)`, результатом работы метода является `boolean` значение.

```jsx live
function learnJavaScript() {
  let regExp = /banana/,
    str = 'fanana ranana banana'
  return regExp.test(str) ? 'Нашёл' : 'Нету'
}
```

В примере регулярное выражение ищет подстроку `banana` в строке `str`.

## Флаги

![Flag](https://media.giphy.com/media/ihRmRCxJuIi3pCORTL/giphy.gif)

Флаги используются для расширения осуществляемого регулярными выражениями поиска.

- `g` - при поиске ищет все совпадения;
- `i` - поиск не зависит от регистра `[Z-z]`;
- `m` - многострочный режим;
- `s` - включает режим **dotall**, при котором точка `.` может соответствовать символу перевода строки;
- `y` - выполняет поиск начиная с символа, который находится на позиции свойства **lastindex** текущего регулярного выражения;
- `u` - включает поддержку **Unicode**.

Использование флагов при разных способах создания🏗️ шаблона регулярного выражения
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

Попробуйте убрать флаг `i` из примера.
</TabItem>
</Tabs>

## Символьные классы

![table of symbols](https://media.giphy.com/media/H0kxiS2RJF2HC/giphy.gif)

**Символьный класс** - это специальное обозначение, которое соответствует любому символу из определённого набора. Символьный класс обозначается обратным слэшем `\`, символ последующий после слэша будет считаться специальным символом. Специальные символы используются для создания🏗️ более сложных шаблонов.

Наиболее часто используемые специальные символы регулярных выражений в JavaScript:

#### `.` - соответствует любому символу

```jsx live
function learnJavaScript() {
  let regExp = /b.n/ // На месте точки может находиться любой символ
    ,str = 'banana'
  return regExp.test(str) ? 'Нашёл' : 'Нету'
}
```

#### `\d` - соответствует цифре от 0 до 9

```jsx live
function learnJavaScript() {
  let regExp = /b\dn/ 
  ,str = 'b4nana'
  return regExp.test(str) ? 'Нашёл' : 'Нету'
}
```

#### `\w` - соответствует букве латинского алфавита, цифре и подчёркиванию `_`

```jsx live
function learnJavaScript() {
  let regExp = /b\wn/ 
  ,str = 'b_nana'
  return regExp.test(str) ? 'Нашёл' : 'Нету'
}
```

#### `\s` - соответствует одиночному символу пустого пространства (пробел, табуляция, перевод строки)

```jsx live
function learnJavaScript() {
  let regExp = /b\sn/ 
  ,str = 'b nana'
  return regExp.test(str) ? 'Нашёл' : 'Нету'
}
```

#### `\0` - соответствует `null`

#### `\n` - соответствует символу перевода строки

#### `\t` - соответствует символу горизонтальной табуляции

#### `\v` - соответствует символу вертикальной табуляции

#### `\r` - соответствует символу возврата каретки

#### `\xhh` - соответствует символам кода hh (две шестнадцатеричные цифры)

#### `\uhhhh` - соответствует символам кода hhhh (четыре шестнадцатеричные цифры)

### Обратные символьные классы

![antimatter](https://media.giphy.com/media/9zXG9hZsLAa3x4xEaV/giphy.gif)

Для некоторых символьных классов существует обратный класс, который обозначается такой же буквой, но в верхнем регистре. Этот класс выдаёт противоположное значение исходному, символьному классу.

#### `\D` - всё, что не соответствует `\d`

```jsx live
function learnJavaScript() {
  let regExp = /b\Dn/ 
  ,str = 'b4nana'
  return regExp.test(str) ? 'Нашёл' : 'Нету'
}
```

#### `\W` - всё, что не соответствует `\w`

```jsx live
function learnJavaScript() {
  let regExp = /b\Wn/ 
  ,str = 'b_nana'
  return regExp.test(str) ? 'Нашёл' : 'Нету'
}
```

#### `\S` - всё, что не соответствует `\s`

```jsx live
function learnJavaScript() {
  let regExp = /b\Sn/ 
  ,str = 'b nana'
  return regExp.test(str) ? 'Нашёл' : 'Нету'
}
```

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

Используя такой шаблон `/banana/` вы будете искать `banana` во всей строке. Если нужно проверить на полное совпадение строки с шаблоном нужно использовать якоря `/^banana$/`. Метод `.test()` вернёт `true` ✅ только в том случае, если вся строка это `banana`.

## Экранирование

![screen](https://media.giphy.com/media/l4pThMAKS4BOtz8d2/giphy.gif)

Если вам нужно в шаблоне использовать символ, который является специальным, то его нужно **экранировать**. Для экранирования используют обратный слеш `\`.

```jsx live
function learnJavaScript() {
  let regExp = /banana\./,
    str = 'lime orange banana.'
  return regExp.test(str) ? 'Нашёл' : 'Нету'
}
```

## Диапазоны и наборы

![search range](https://media.giphy.com/media/xT9IgFLfWUZigjoem4/giphy.gif)

Для поиска определенных символов из диапазона или набора их нужно указать в квадратных скобках `[...]`. К примеру, нужно найти в строке цифру 1️, 5 или 8. Такому набору будет соответствовать шаблон: `[158]`. Результатом будет один символ из набора. Если же нужно найти любую цифру от 0️⃣ до 9️⃣, то легче использовать диапазон `[0-9]`, можно заметить, что такой диапазон соответствует специальному символу `\d`.

```jsx live
function learnJavaScript() {
  let regExp = /[ban]/
  let str = '$bcd'
  return regExp.test(str) ? 'Нашёл' : 'Нету'
}
```

Так же мы можем задать исключающий диапазон символов, то есть те символы, которые не должны присутствовать в строке. Исключающий диапазон обозначается символом `^` в начале диапазона `[^...]`. К примеру, шаблон, исключающий любые цифры9️⃣:

```jsx
let regExp = /[^0-9]/ // Аналог regExp = /\D/
```

## Квантификаторы

![Indicate](https://media.giphy.com/media/TdF2rSnG3Gd6spXPA9/giphy.gif)

Квантификаторы используются для указания количества повторений определенных символов или целых наборов символов.

Квантификаторы в JavaScript:

#### `{n}` - указывает на **n** количество повторений шаблона или его части.

```jsx live
function learnJavaScript() {
  let regExp = /[0-9]{5}/ // аналог regExp = /\d{5}/
  let str = '#$g99823'
  return regExp.test(str) ? 'Нашёл' : 'Нету'
}
```

Квантификатор `{n}` допускает и другие варианты использования:

- `{n, m} `в такой формате будут искаться повторения от n до m раз;
- `{n,}` в таком формате ищутся повторения от n до большего количества раз;

### Сокращенные квантификаторы

![abbrevited](https://media.giphy.com/media/3ohzdCzdBKMbyWarrW/giphy.gif)

Сокращенные формы записи 🖊️ для востребованных квантификаторов:

1. `+` - **один или более**, тоже самое что и {1, }
2. `*` - **ноль или один**, тоже самое что и {0, 1}
3. `?` - **ноль или более**, тоже самое что и {0, }

## Группировка

![group](https://media.giphy.com/media/l1J9Llv1ztqa8cjZe/giphy.gif)

Часть шаблона можно заключить в скобки `(...)` создав🏗️ **скобочную группу**. Квантификаторы, используемые после скобок, применяются ко всей группе, а также совпавшую группу можно поместить в отдельный массив.

```jsx
let regExp = /(\w+)\s(\w+)/
// Строка "lime banana" будет соответствовать заданному шаблону
```

## Альтернация (или)

![or](https://media.giphy.com/media/8YvipzLdVHNKczrJEr/giphy.gif)

`Альтернация` – термин в регулярных выражениях, которому в русском языке👅 соответствует слово **«ИЛИ»**.

В регулярных выражениях она обозначается символом вертикальной черты `|`.

```jsx live
function learnJavaScript() {
  let regExp = /lime\s(orange|banana)/
  let str = 'lime banana'
  return regExp.test(str) ? 'Нашёл' : 'Нету'
}
```

## Методы класса String

### match

![search](https://media.giphy.com/media/xGdvlOVSWaDvi/giphy.gif)

`str.match(regExp)` ищет совпадения шаблона `regExp` в строке `str`. <!-- Три режима работы метода: 1. Без флага `g`, метод возвращает первое совпадение в виде массива со скобочными группами, а так же свойствами `index` и `input`. `index` - позиция на которой было найдено совпадение. `input` - исходная строка, в которой осуществлялся поиск. 2. С флагом `g`, метод возвращает массив всех совпадений, без скобочных групп и других деталей. 3. Если совпадений нет, то возвращается `null`. -->

```jsx live
function learnJavaScript() {
  let str = 'lime banana orange'
  let regExp = /banana/
  let res = str.match(regExp)
  return res[0]
}
```

### split

![break](https://media.giphy.com/media/vtm4qejJIl1ERPIrbA/giphy.gif)

`str.split(regExp)` разбивает строку `str` в массив по разделителю `regExp`.

```jsx live
function learnJavaScript() {
  let str = 'lime, banana, orange',
    regExp = /, /,
    res = str.split(regExp)
  return res[1]
}
```

### search

![return](https://media.giphy.com/media/u9lzgxCYP7MfC/giphy.gif)

`str.search(regExp)` возвращать🔄 позицию первого совпадения шаблона `regExp` в строке `str`, если в строке ничего не было найдено, то вернётся `-1`. У этого метода есть **ограничение**, он умеет возвращать🔄 только позицию **первого** совпадения.

```jsx live
function learnJavaScript() {
  let str = 'lime banana orange',
    regExp = /banana/,
    res = str.search(regExp)
  return res
}
```

### replace

![find](https://media.giphy.com/media/xiE8nWte9xWCWfFMxG/giphy.gif)

`str.replace(regExp, rep)` находит шаблон `regExp` в строке `str` и заменяет его на `rep`.

```jsx live
function learnJavaScript() {
  let str = 'lime banana orange',
    regExp = /orange/,
    res = str.replace(regExp, 'pear')
  return res
}
```

## Метод класса RegExp

### exec

![accept](https://media.giphy.com/media/l1Kuf6wyO6IRdigWk/giphy.gif)

Метод `exec()` принимает параметром строку, а возвращает🔄 массив с результатами. У этого методу присутствуют свойства:

- `index` - номер позиции, на которой было найдено соответствие;
- `input` - исходная строка, в которой осуществлялся поиск.

```jsx live
function learnJavaScript() {
  let str = 'lime BANANA orange',
    regExp = /[A-Z]+/,
    res = regExp.exec(str)
  return res[0]
}
```

### test

![test](https://media.giphy.com/media/gw3IWyGkC0rsazTi/giphy.gif)

Метод `test()` принимает параметров строку, а возвращает🔄 `boolean` значение, обозначающее нахождение шаблона в строке.

```jsx live
function learnJavaScript() {
  let str = 'lime banana1 orange',
    regExp = /\w+\d/
  return regExp.test(str) ? 'Нашёл' : 'Нету'
}
```

## Вопросы

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

Для того чтобы понять насколько вы усвоили этот урок пройдите тест в [мобильном приложении](http://onelink.to/njhc95) в нашей школы по этой теме.

![Sumerian school](/img/app.png)

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

Какой шаблон будет искать все совпадения в строке?

1. `/\w+/i`;
2. `new RegExp('banana', 'm')`;
3. `/banana/g`.

Каким образом в шаблоне обозначается специальный символ?

1. Обратным слешем `\`
2. Фигурными скобками `{}`
3. Слешем `/`

Чему соответствует специальный символ `.`?

1. Символу табуляции
2. Любому символу
3. Цифре от 0 до 9

Как проверить полное совпадение строки с шаблоном?

1. `/^(\w*)/`
2. `/(\w*)$/`
3. `/^(\w*)$/`

Что будет искать в строке шаблон: `/[az]/`?

1. Символы от `a` до `z`;
2. Строку `az`;
3. Символ `a` или `z`.

Чему соответствует квантификатор `?`?

1. **ноль или более**
2. **ноль или один**
3. **один или более**

Какому символу соответствует альтернация?

1. `*`
2. `/`
3. `|`

## Ссылки

1. [Learn JavaScript](https://learn.javascript.ru/regular-expressions)
2. [MDN Web Docs](https://learn.javascript.ru/regular-expressions)
3. [JS RegExp](https://tuhub.ru/frontend/js-regexp)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr> 
    <td align="center"><a href="https://github.com/IIo3iTiv"><img src="https://avatars1.githubusercontent.com/u/72025062?v=4?s=200" width="200px;" alt=""/><br /><sub><b>IIo3iTiv</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=IIo3iTiv" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

[![Become a Patron!](/img/logo/patreon.png)](https://www.patreon.com/bePatron?u=31769291)
