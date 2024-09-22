---
id: javascript20
title: Деструктуризация массивов и объектов
sidebar_label: Деструктуризация массивов и объектов
---

![@serverSerrverlesskiy](/img/javascript/headers/30.jpg)

Деструктуризация в JavaScript это синтаксис присваивания, который позволяет удобно, в одну строку, извлечь данные из массивов и объектов.

## Деструктуризация объектов

![object](https://media.giphy.com/media/3o85xx7Yll3UyNVQf6/giphy.gif)

```jsx live
function learnJavaScript() {
  // Создаём объект `fruit`
  let fruit = {
    title: 'banana',
    group: 'tropical',
    quantity: 5
  }

  // Деструктуризация объекта `fruit`
  let { title, group, quantity } = fruit

  // Выводим на экран `title`
  return title
}
```

Свойства `title`, `group` и `quantity`, повторяют структуру объекта `fruit` и копируют свои значения в идентичные переменные  находящиеся в `{...}`. Поэтому, если вы поменяете переменные  в `{...}` местами, то код будет так же прекрасно работать, попробуйте в примере выше поменять переменные  местами.

### Вложенный объект

![bookmark](https://media.giphy.com/media/3og0IDyqVFNH7qFpAI/giphy.gif)

Мы также можем деструктурировать вложенный объект.

```jsx live
function learnJavaScript() {
  let fruit = {
    title: 'banana',
    group: 'tropical',
    quantity: {
      store: 5,
      storeHaus: 99
    }
  }

  let {
    title,
    quantity: { store: s1, storeHaus: s2 }
  } = fruit

  return title + ', ' + parseFloat(s1 + s2)
}
```

### Другие названия

Если вам нужно использовать названия переменных  отличные от названия свойств, то будет работать такой синтаксис:

```jsx live
function learnJavaScript() {
  let fruit = {
    title: 'banana',
    group: 'tropical',
    quantity: 5
  }
  // title -> a; group -> b; quantity -> c
  let { title: a, group: b, quantity: c } = fruit

  return a
}
```

### Дефолтные значения

Если в `{...}` вы напишете переменную  свойства, которой не будут найдены, то ей присвоится значение `undefined`. Для назначения переменной  дефолтного значение, это значение ей можно присвоить. Если вы попытаетесь присвоить значение переменной  свойства которой будут найдены, то ей присвоится значение свойства. Рассмотрим на примере.

![Dafault](https://media.giphy.com/media/3oEduLzte7jSNmq4z6/giphy.gif)

```jsx live
function learnJavaScript() {
  let fruit = {
    title: 'banana'
  }
  let { title = 'lime', group, quantity = 5 } = fruit

  return title + ', ' + group + ', ' + quantity
}
```

В `title` выводится значение свойства, а не то, что мы ей присваиваем. Свойства `group` в объекте `fruit` не существует, а переменной  никаких значений мы не присваивали. Свойства `quantity` также не существует, но переменной  мы присвоили значение `5`.

### Остаток

![octatok](https://media.giphy.com/media/hvddF1vHatFIgQspUB/giphy.gif)

Если вам нужно получить из объекта одну переменную  , а оставшиеся сгруппировать в другой объект, то используйте `...` перед переменной  из которой будет создан объект с оставшимися свойствами.

```jsx live
function learnJavaScript() {
  let fruit = {
    title: 'banana ',
    group: 'tropical ',
    quantity: 5
  }
  let { group, ...prop } = fruit

  return prop.title + group
}
```

## Деструктуризация массивов

Деструктуризация массива происходит так же, как и у объекта. Единственная разница в том, что значения элементов массива будут присваиваться переменным  в порядке определения элементов.

![Take](https://media.giphy.com/media/IuBlckSD7dQv6/giphy.gif)

```jsx live
function learnJavaScript() {
  // Создаем массив `fruit`
  let fruit = ['banana', 'tropical', 5]

  // Деструктурируем массив `fruit`
  let [title, group, quantity] = fruit

  // Выводим на экран
  return `${title}, ${group}, ${quantity}`
}
```

### Остаток

По аналогии с объектами работает остаток.

```jsx live
function learnJavaScript() {
  let fruit = ['banana ', 'tropical ', 5]

  let [name, ...prop] = fruit

  return `${name}, ${prop}`
}
```

### Копия массива

Пример создания копии массива.

![Copia](https://media.giphy.com/media/GI1KnTxySlrCE/giphy.gif)

```jsx live
function learnJavaScript() {
  let fruit = ['banana ', 'tropical ', 5]

  let _fruit = [...fruit]

  return _fruit
}
```

### Объединение массивов

![add](https://media.giphy.com/media/3gMrhfFtWHq9XxtqPy/giphy.gif)

Пример объединения массивов в один.

```jsx live
function learnJavaScript() {
  let name = ['banana '],
    prop = ['tropical ', 5],
    fruit = [...name, ...prop]

  return fruit
}
```

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Проблемы?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Пишите в [Telegram](https://t.me/neuro_coder_group) или [ВКонтакте](https://vk.com/neurocoder), а также подписывайтесь на наши [новости](https://t.me/neuro_coder_ai)

## Вопросы

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

Деструктуризация - это?

1. Функция
2. Синтаксис
3. Объект

Обязательно ли, при деструктуризации объекта, ставить переменные в том же порядке, в каком они находятся в объекте?

1. Да
2. Нет

Что присвоится переменной, если в объекте не будет найдено идентичного свойства?

1. `error`
2. `undefined`
3. `unknown`

Важен ли порядок элементов в объекте, при его деструктуризации?

1. Да
2. Нет

Для того чтобы понять насколько вы усвоили этот урок пройдите тест в [мобильном приложении](http://onelink.to/njhc95) в нашей школы по этой теме.

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Ссылки

1. [Learn JavaScript](https://learn.javascript.ru/destructuring-assignment)
2. [MDN Web Docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
3. [Деструктуризация в ES6](https://medium.com/@stasonmars/деструктуризация-в-es6-полное-руководство-b865bb71f376)

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

