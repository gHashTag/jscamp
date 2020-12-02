---
id: javascript28
title: Регулярные выражения
sidebar_label: Регулярные выражения
---

**Регулярные выражения** (англ. _regular expressions_) — формальный язык поиска и осуществления манипуляций с строками в тексте, основанный на использовании метасимволов. Регулярные выражения позволяют:
* **Искать** текст в строке;
* **Заменять** подстроки в строке;
* **Извлекать** информацию из строки.

JavaScript, наряду с Perl, это один из языков программирования в котором поддержка регулярных выражений встроена непосредственно в язык.

## Сложность использования

Недостаток регулярных выражений в том, что часто они выглядят странно и даже пугающе. Особенно это касается более сложных шаблонов. 

```jsx 
function escapeRegExp(string){
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
```

## Определение регулярных выражения

В JavaScript регулярные выражения это объект, который может быть определён двумя способами.
<<<<<<< HEAD

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

  Определение регулярных выражений с использованием литералов. Для регулярных выражений литералами выступают слэши `/ ... /`, они играют ту же роль, что и `' ... '` при создании строк.

  ```js
    let regExp = /шаблон/
  ```

  Если вы решили создавать регулярные выражения при помощи литералов, то стоит учитывать, что такой метод создания _не допускает динамическое изменение_ задаваемых значений. Происходит это из-за того, что литералы регулярных выражения вызывают _предварительную компиляцию_ при анализе скрипта. 

  </TabItem>
  <TabItem value="construction">
  Определение регулярных выражений с использованием конструктора.

  ```js
    let regExp = new RegExp('шаблон')
  ```
  Компиляция регулярного выражения созданного с использованием конструктора происходит в момент выполнения скрипта. Такой способ создания стоит использовать, если ваше регулярное выражение создаётся их динамически сгенирированной строки.

  </TabItem>
</Tabs>

## Использование

Использование регулярных выражений расмотрим на примере:
```jsx
  let regExp = /banana/
```

Этим кодом мы создали просто регулярное выражение, которое ищет строку `banana`. Для тестирования регулярного выражения можно использовать его метод `RegExp.test(string)`, результатом работы метода является `boolean` значение.

```jsx live
function learnJavaScript() {
  let regExp = /banana/,
  str = 'fanana ranana banana'

  if ( regExp.test(str) ) {
    return 'Нашёл'
  } else {
    return 'Нету'
  }
}
```

В примере регулярное выражение ищет подстроку `banana` в строке `str`.

## Флаги

Флаги используются для расширения осуществяылемого регулярными выражениями поиска. 

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
    let regExp = /шаблон/флаг
  ```
  Обратите внимание, что флаги являются **неотъемлемой частью** регулярного выражения. Флаги не могут быть добавлены или удалены позднее. Так же флаги можно компбинировать.

  ```jsx live
    function learnJavaScript() {
      let regExp = /banana/i,
      str = 'faNana RanaNA BaNanA'

      if ( regExp.test(str) ) {
        return 'Нашёл'
      } else {
        return 'Нету'
      }
    }
  ```

  Попробуйте убрать флаг `i` из примера.
  </TabItem>
  <TabItem value="construction">

   ```jsx
    let regExp = new RegExp('шаблон', 'флаг')
   ``` 

   Обратите внимание, что флаги являются **неотъемлемой частью** регулярного выражения. Флаги не могут быть добавлены или удалены позднее. Так же флаги можно компбинировать.

  ```jsx live
    function learnJavaScript() {
      let regExp = new RegExp('banana', 'i'),
      str = 'faNana RanaNA BaNanA'

      if ( regExp.test(str) ) {
        return 'Нашёл'
      } else {
        return 'Нету'
      }
    }
  ```

  Попробуйте убрать флаг `i` из примера.
  </TabItem>
</Tabs>

## Специальные символы

Для создания более сложных регшулярных выражений используются специальные символы:
- `^` - начало строки;
```jsx live
  function learnJavaScript() {
    let regExp = /^banana/,
    str = 'lime banana orange'

    if ( regExp.test(str) ) {
      return 'Нашёл'
    } else {
      return 'Нету'
    }
  }
```
Попробуйте поменять `lime` и `banana` местами.
=======
>>>>>>> gh-pages