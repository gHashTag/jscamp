---
id: javascript18
title: Операторы Rest и Spread
sidebar_label: Операторы Rest и Spread
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/19.jpg)

Многие встроенные функции⚙️ JavaScript поддерживают произвольное количество аргументов.

Например:

`Math.max(arg1, arg2, ..., argN)` – вычисляет максимальное число из переданных аргументов.

`Math.min(arg1, arg2, ..., argN)` - возвращает минимальное значение из переданных аргументов.

В этой статье мы узнаем, как сделать то же самое с нашими собственными функциями⚙️ и как передавать таким функциям⚙️ параметры в виде массива.

## Видео

<YouTube videoId="9Qt7c5lEF_4" />

## Остаточные параметры `(...rest)`

![Parametrs](https://media.giphy.com/media/3osxYoufeOGOA7xiX6/giphy.gif)

Вызывать функцию⚙️ можно с любым количеством аргументов независимо от того, как она была определена.

Например  :

```jsx live
function learnJavaScript() {
  let summa = (a, b, c) => {
    return a + b + c
  } // Сумма 3-х чисел

  return summa(1, 2, 3, 4, 5, 6, 7)
}
```

Лишние аргументы не вызовут ошибку, но конечно посчитаются только первые три.

### Концепция ES6

![Idea](https://media.giphy.com/media/3o6Mbj2w67HnPQKgcE/giphy.gif)

Начиная со стандарта ES6 появилась концепция, как `...rest` - остаточные параметры.

```jsx
let goFun = (...rest) => {
  // Алгоритм
}
```

Свободные параметры могут быть обозначены через три точки `...`. Буквально это значит: "собери оставшиеся параметры и положи их в массив".

Например, соберём все аргументы в массив `args` :

```jsx live
function learnJavaScript() {
  let sumAll = (...args) => {
    // args — имя массива передаваемых аргументов
    let sum = 0
    for (let arg of args) if (typeof arg === 'number') sum += arg // sum - соберется сумма всех числовых аргументов
    return sum
  }
  return sumAll(1, 2, 3, 4, 5, 6, 7, 'React', 'Native')
}
```

Ответ уже 28 и без ошибок! Подробуйте изменить аргументы или размерность массива.

### Несколько параметров

Мы можем положить первые несколько параметров в переменные  , а остальные – собрать в массив.
Это означает то, что вы просто можете вставить `...rest`, но только вместо последнего параметра функции.

![paste](https://media.giphy.com/media/3o6ZtafpgSpvIaKhMI/giphy.gif)

```jsx
let goFun = (first, second, ...rest) => {
  // Алгоритм
}
```

В примере ниже первые два2️⃣ аргумента функции станут именем и фамилией, а третий и последующие превратятся в массив `titles[i]`  :

```jsx live
function learnJavaScript() {
  let free = ''
  let showName = (firstName, lastName, ...titles) => {
    free = firstName + ' ' + lastName // Имя + Фамилия
    return titles[0] + ' ' + titles[1]
  }
  // Оставшиеся параметры пойдут в массив titles = ["React", "Native"]
  // titles[0]  // React
  // titles[1]  // Native

  let result = showName('Юлий', 'Цезарь', 'React', 'Native')

  return free + ' или ' + result
}
```

### Возможные ошибки

![error](https://media.giphy.com/media/xTiN0L7EW5trfOvEk0/giphy.gif)

Остаточные параметры должны располагаться в конце, поэтому нельзя писать  что-либо после них.
Это вызовет `ошибку`:

```jsx
function f(arg1, ...rest, arg2) {   // arg2 после ...rest ?
  // Ошибка!
}
```

:::note Запомни
`...rest` должен всегда быть последним.
:::

<!-- ### Опасный "arguments"

![dangerous](https://media.giphy.com/media/xT5LMAvRY92qUXj7dC/giphy.gif)

Все аргументы функции⚙️ находятся в псевдомассиве `arguments` под своими порядковыми номерами.

Но доступ через массив `arguments[]` можно найти только в старом коде . Не применяйте его!

:::note Внимание
Cтрелочные функции⚙️ не имеют `arguments[]` как и собственного `this.`
:::

Если мы обратимся к `arguments` из стрелочной функции⚙️, то получим аргументы внешней "классической" функции⚙️. Соответственно, для более удобной работы с аргументами лучше использовать только остаточные параметры `...rest`. -->

## Оператор расширения `...spread`

![operators](https://media.giphy.com/media/3o6Mbfd5fQszubehmE/giphy.gif)

Мы узнали, как получить массив из списка параметров, но иногда нужно сделать противоположное - запихнуть массив в вызываемую функцию⚙️.

Например, есть встроенная функция⚙️ `Math.max`. Она возвращает наибольшее число из списка:

```jsx live
function learnJavaScript() {
  return Math.max(3, 5, 1, 17, 14, 8, 2, 11)
}
```

### Не так все просто

![Index_finger](https://media.giphy.com/media/4ZcYCubFNk8AUHcZVw/giphy.gif)

Допустим, у нас есть массив чисел `[3, 5, 1]`. Как вызвать для него `Math.max`?

Просто так их не вставишь — `Math.max` ожидает получить список чисел, а не один массив.

```jsx live
function learnJavaScript() {
  let arr = [3, 5, 1, 17, 14, 8, 2, 11]
  return Math.max(arr) // NaN - значение будет не определено
}
```

Конечно, мы можем вводить числа вручную: `Math.max(arr[0], arr[1], arr[2]).`

Но, во-первых, это плохо выглядит, а, во-вторых, мы не всегда знаем, сколько будет аргументов. Их может быть как очень много, так и не быть совсем.

### Вхождение параметров

![Transform](https://media.giphy.com/media/xT4uQr9H3EDL7Ha2hq/giphy.gif)

Тут нам поможет оператор расширения `...spread`. Он похож на остаточные параметры – тоже использует `...`, но делает совершенно противоположное.

Когда функционал⚙️ `...spread` используется при вызове функции⚙️, он преобразует массив-объект `arr` в список аргументов.

Для `Math.max`  :

```jsx live
function learnJavaScript() {
  let arr = [3, 5, 1, 17, 14, 8, 2, 11]

  return Math.max(...arr) // оператор ...arr преобразует массив `arr` в список аргументов
}
```

Этим же способом мы можем передать несколько итерируемых объектов  :

```jsx live
function learnJavaScript() {
  let arr1 = [1, 2, 34, 41]
  let arr2 = [8, 3, 18, 17]
  let arr3 = [2, 4, 16, 38]

  return 'Max = ' + Math.max(...arr1, ...arr2, ...arr3)
}
```

Круто! Очень гибкий подход к программированию. Можно также комбинировать оператор расширения с обычными значениями.

### Слияния массивов

![Merger](https://media.giphy.com/media/rytLWOErAX1F6/giphy.gif)

Оператор расширения `...spread` можно использовать и для слияния массивов  :

```jsx live
function learnJavaScript() {
  let arr1 = [3, 5, 7]
  let arr2 = [4, 2, 8]

  let merged = [100, ...arr1, 500, ...arr2]
  let str = 'Массив: ' + merged

  return <b>{str}</b>
}
```

### Преобразование в строку

![Transform](https://media.giphy.com/media/RLVHPJJv7jY1q/giphy.gif)

Функционал⚙️ оператора расширения `...spread` работает с любым перебираемым объектом.

Например, оператор расширения подойдёт для превращения строки в массив символов  :

```javascript
let str = 'Привет, Alex!'
let result = [...str]
```

![spread](/img/javascript/13.jpg)

Посмотрим, что происходит. Под капотом оператор расширения использует итераторы, чтобы перебирать элементы. Так же, как это делает `for..of`.

Цикл `for..of` перебирает строку как последовательность символов, поэтому из `...str` получается "П", "р", "и", "в", "е", "т"...
Получившиеся символы собираются в массив при помощи стандартного объявления массива `[...str].`

Для этой задачи мы можем использовать и `Array.from`. Он тоже преобразует перебираемый объект (такой как строка) в массив  :

```javascript
let str = 'Привет'
Array.from(str) // "П", "р", "и", "в", "е", "т"
// Array.from преобразует перебираемый объект в массив
```

![spread](/img/javascript/14.jpg)

Результат аналогичен `[...str].` Но между `Array.from(obj)` и `[...obj]` есть разница:

- `Array.from` работает как с псевдомассивами, так и с итерируемыми объектами.
- Оператор расширения `...spread` работает `только` с итерируемыми объектами.

Поэтому `Array.from` — более универсальный метод.

## Итого

![Elipsis](https://media.giphy.com/media/UWXLULrP5KGDC/giphy.gif)

Когда мы видим `"..."` в коде , это могут быть как остаточные параметры `...rest`, так и оператор расширения `...spread`.

Как отличить их друг от друга:

- Если `...` располагается в конце списка аргументов функции, то это "остаточные параметры". Он собирает остальные неуказанные аргументы и делает из них массив.
- Если `...` встретился в вызове функции или где-либо ещё, то это "оператор расширения". Он извлекает элементы из массива для инициализации работы функции.

Полезно запомнить:

- Остаточные параметры используются, чтобы создавать новые функции с неопределённым числом аргументов.
- С помощью оператора расширения можно вставить массив в функцию, которая по умолчанию работает с обычным списком аргументов.
- Вместе эти конструкции помогают легко преобразовывать наборы значений в массивы и обратно.

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Проблемы?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Пишите в [Telegram](https://t.me/neuro_coder_group) или [ВКонтакте](https://vk.com/neurocoder), а также подписывайтесь на наши [новости](https://t.me/neuro_coder_ai)

<!-- ![JavaScript Camp](/img/bandlink.png) -->

## Вопросы

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

Если `...` располагается в конце списка аргументов функции, то мы имеет дело с:

1. Остаточным параметром
2. Оператором расширения
3. Случайными показателями

Для создания функции с неопределённым числом аргументов используют:

1. Остаточные параметры `...rest`
2. Оператор расширения `...spread`
3. Внешние функции вызова

Объединить два массива в один можно используя:

1. Оператор расширения `...rest`
2. Оператор расширения `...spread`

Для того чтобы понять, на сколько вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме или в нашем [телеграм боте](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Ссылки

1. [MDN web doc. Статья "spread syntax"](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/spread_syntax)
2. [Статья "Остаточные параметры и оператор расширения"](https://learn.javascript.ru/rest-parameters-spread-operator)
3. [Статья "Оператор spread и rest"](https://medium.com/@stasonmars/%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80-spread-%D0%B8-rest-%D0%BF%D0%B0%D1%80%D0%B0%D0%BC%D0%B5%D1%82%D1%80%D1%8B-%D0%B2-javascript-22eb33cb0825)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/KoDim-React"><img src="https://avatars1.githubusercontent.com/u/72087863?v=4?s=200" width="200px " alt=""/><br /><sub><b>Dmitriy K.</b></sub></a><br /><a href="#mentoring-KoDim-React" title="Mentoring">  </a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px " alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->


<!--
Например:
```jsx
function showName() {
  console.log( arguments.length )
  console.log( arguments[0] )
  console.log( arguments[1] )

  // Объект arguments можно перебирать
  // for (let arg of arguments) console.log(arg)
}

// Вывод: 2, Юлий, Цезарь
showName("Юлий", "Цезарь")

// Вывод: 1, Илья, undefined (второго аргумента нет)
showName("Илья")
```
Раньше в языке не было остаточных параметров, и получить все аргументы функции можно было только с помощью arguments. Этот способ всё ещё работает, мы можем найти его в старом коде.
Но у него есть один недостаток. Хотя arguments похож на массив, и его тоже можно перебирать, это всё же не массив. Он не поддерживает методы массивов, поэтому мы не можем, например, вызвать arguments.map(...).
К тому же, arguments всегда содержит все аргументы функции — мы не можем получить их часть. А остаточные параметры позволяют это сделать.
Соответственно, для более удобной работы с аргументами лучше использовать остаточные параметры.
-->
