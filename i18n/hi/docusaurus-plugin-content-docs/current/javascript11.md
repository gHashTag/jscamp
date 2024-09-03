---
id: javascript11
title: Преобразование и приведение типов
sidebar_label: Преобразование и приведение типов
---

![@serverSerrverlesskiy](/img/javascript/headers/09.jpg)

## Приведение типов (type coercion)

Это автоматическое или неявное преобразование значений из одного типа данных в другой (например, строки в число). Преобразование типа похоже на приведение типа, потому что они оба преобразуют значения из одного типа данных в другой с одним ключевым🗝️ различием — приведение типа является неявным, тогда как преобразование типа может быть неявным или явным.

![transformation](https://media.giphy.com/media/xT4uQr9H3EDL7Ha2hq/giphy.gif)

Примеры  :

```jsx live
function learnJavaScript() {
  const value1 = '5'
  const value2 = 9
  let sum = value1 + value2

  return sum
}
```

В приведённом выше примере JavaScript приводит число `9` в строку, а затем объединяет два 2️⃣ значения вместе, в результате получается строка `59`. JavaScript имел выбор между строкой или числом и решил использовать строку.

Компилятор мог привести строку `5` к числу и вернуть сумму `14`, но он этого не сделал. Чтобы получить этот результат, вам нужно явно преобразовать строку `5` в число, используя метод `Number()` :

```jsx live
function learnJavaScript() {
  const value1 = '5'
  const value2 = 9
  let sum = Number(value1) + value2

  return sum
}
```

## Преобразование типов (type conversion)

![Transformation](https://media.giphy.com/media/l2SpMMVivErM0Q7jG/giphy.gif)

Означает передачу данных из одного типа данных в другой. Неявное преобразование происходит, когда компилятор автоматически присваивает (назначает) типы данных, но исходный код также может явно требовать преобразования для завершения.

### Строковое преобразование

![Transformation](https://media.giphy.com/media/RLVHPJJv7jY1q/giphy.gif)

Строковое преобразование происходит, когда требуется представление чего-либо в виде строки. Например, мы можем использовать функцию `String(value)`, чтобы преобразовать значение к строке  :

```jsx live
function learnJavaScript() {
  let value = true // boolean

  value = String(value)
  return typeof value
}
```

Преобразование происходит очевидным образом. `true`  становится `"true"` 

### Численное преобразование

![Transformation](https://media.giphy.com/media/4H5nOUqX7FywOGpCF7/giphy.gif)

Численное преобразование происходит в математических функциях⚙️ и выражениях.

```jsx live
function learnJavaScript() {
  let value = '6' / '2'

  return value
}
```

Мы можем использовать функцию `Number(value)`, чтобы явно преобразовать `value` к числу  :

```jsx live
function learnJavaScript() {
  let str = '123'
  let num = Number(str)

  return typeof num
}
```

Явное преобразование часто применяется, когда мы ожидаем получить число из строкового контекста, например из текстовых  полей форм.

Если строка не может быть явно приведена к числу, то результатом преобразования будет `NaN` (англ. Not-a-Number, "не число"). Например :

```jsx live
function learnJavaScript() {
  let age = Number('Любая строка вместо числа')

  return age
}
```

### Правила численного преобразования:

| Значение         |                                                                           Преобразуется в…                                                                           |
| ---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| `undefined`      |                                                                                `NaN`                                                                                 |
| `null `          |                                                                                 `0`                                                                                  |
| `true` / `false` |                                                                              `1` / `0`                                                                               |
| `string`         | Пробельные символы по краям обрезаются. Далее, если остаётся пустая строка, то получаем 0, иначе из непустой строки «считывается» число. При ошибке результат NaN. |

Примеры:

```javascript
Number('   123   ') // 123
Number('123z') // NaN (ошибка чтения числа на месте символа "z")
Number(true) // 1
Number(false) // 0
Number(null) // 0
Number(undefined) // NaN
```

Учтите, что `null` и `undefined` ведут себя по-разному. Так, `null` становится нулём, тогда как `undefined` приводится к `NaN`.

### Логическое преобразование

![Transformation](https://media.giphy.com/media/JjAdpCxrdro7m/giphy.gif)

Логическое преобразование самое простое. Происходит в логических операциях, но также может быть выполнено явно с помощью функции⚙️ `Boolean(value)`.

### Правила логического преобразования:

Значения, которые интуитивно "пустые", вроде `0`, пустой строки, `null`, `undefined`и `NaN`, становятся `false`. Все остальные значения становятся `true`.

```javascript
Boolean(1) // true
Boolean(0) // false
Boolean('Привет!') // true
Boolean('') // false
```

:::caution Заметим, что строчка с нулём "0" — это true
Некоторые языки  (к примеру, PHP) воспринимают строку `"0"` как `false`. Но в JavaScript, если строка не пустая, то она всегда `true`

:::

```javascript
Boolean('0') // true
Boolean(' ') // пробел это тоже true (любая непустая строка это true)
```

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Проблемы?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Пишите в [Discord](https://discord.gg/6GDAfXn) или телеграмм [чат](https://t.me/neuro_coder_group), а также подписывайтесь на наши [новости](https://t.me/javascriptapp)

## Вопросы:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

Какую функцию нужно использовать для строкового преобразования?

1.  `String(value)`
2.  `Boolean(value)`
3.  `Number(value)`

Что такое приведение типов?

1.  Передача данных из одного типа в другой
2.  Преобразование значений из одного типа данных в другой
3.  Представление чего-либо в виде строки

Какое ключевое различие между приведением типов и преобразованием типов?

1. Приведение типа явное, а преобразование типа неявное
2. Приведение типа неявное, а преобразование типа явное
3. Приведение типа неявное, а преобразование типа может быть и явным и неявным

В каком случае результатом преобразования будет `NaN`?

1.  Когда строка не может быть явно приведена к числу
2.  Когда число не может быть явно приведено к строке
3.  Когда в коде есть ошибка

Чем становятся «пустые» значения при преобразовании?

1.  `null`
2.  `true`
3.  `false`

Для того чтобы понять, на сколько вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме.

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Ссылки:

1. [MDN web docs - Приведение типов](https://developer.mozilla.org/ru/docs/Словарь/Type_coercion)
2. [ для подростков: прекрасное руководство по программированию для начинающих, том 1: Javascript - Jeremy Moritz ](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)
3. [JavaScript.ru](https://learn.javascript.ru/ifelse#blok-else)
4. [Арифметические действия с целыми числами](https://maths-public.ru/arithmetic/actions)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">  </a><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>
  
</table>

