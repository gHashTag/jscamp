---
id: javascript22
title: Функции высшего порядка
sidebar_label: Функции высшего порядка
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/21.jpg)

Функции⚙️ высшего порядка позволяют JavaScript быть пригодным для [функционального⚙️ программирования](https://ru.wikipedia.org/wiki/Функциональное_программирование).
Такие функции⚙️ широко используются в JavaScript. Если вы хоть немного программировали на JavaScript, то наверняка использовали их, возможно, даже не догадываясь об этом.

Чтобы в полной мере понять эту концепцию, вам следует сначала разобраться с функциональным⚙️ программированием и концепцией функций⚙️ первого класса.

## Видео

<YouTube videoId="-VqRjaxoKJs" />

## Что такое функциональное программирование?

> Функциона́льное программи́рование — раздел дискретной математики и парадигма программирования, в которой процесс вычисления трактуется как вычисление значений функций в математическом понимании последних (в отличие от функций как подпрограмм в процедурном программировании). [Wikipedia]

### Функции первого класса

![First_class](https://media.giphy.com/media/l2Jecm1l0wnJ2kQDu/giphy.gif)

Если вы уже изучаете JavaScript, то могли слышать, что JavaScript расценивает функции⚙️ как объекты первого класса. В JavaScript функции⚙️ являются объектами, как и в других языках  функционального⚙️ программирования.
В JavaScript функции⚙️ являются особым типом объектов. Это `Function` объекты. Например:

```jsx live
function learnJavaScript() {
  let greeting = () => 'Hello, World !'

  return greeting()
}
```

Теперь мы знаем, что такое функции⚙️ первого класса. Можно приступать к функциям высшего порядка.

## Функции высшего порядка

![Higher](https://media.giphy.com/media/WS4yajVBkb3lIwDIKd/giphy.gif)

Это такие функции⚙️, которые принимают функцию⚙️ в качестве аргумента или возвращают функцию⚙️ в качестве вывода.

Например, эти функции⚙️ высшего порядка встроены в язык : `map()` `filter()` и `reduce()`

### Пример №1. Изменяем числа `.push`

![Edit_number](https://media.giphy.com/media/xT5LMMneIRG1UJquOI/giphy.gif)

Допустим, у нас есть массив из чисел. Мы хотим создать новый   массив, который будет содержать удвоенные значения первого. Давайте посмотрим, как мы можем решить эту задачу с помощью функции⚙️ высшего порядка и без неё.

#### Без функции высшего порядка:

```jsx live
function learnJavaScript() {
  const arr1 = [1, 2, 3, 4]
  const arr2 = []

  for (let i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i] * 2) // массив arr2 растет в цикле
  }

  return arr2 // 2, 4, 6, 8 только без пробелов
}
```

С функцией⚙️ высшего порядка `map` консольный вариант:

```jsx live
function learnJavaScript() {
  const arr1 = [1, 2, 3, 4]
  const arr2 = arr1.map(function (item) {
    // Старый вариант
    return item * 2 + ' '
  })
  return arr2
}
```

Мы можем записать ещё короче, используя синтаксис "стрелочных функций":

```jsx live
function learnJavaScript() {
  const arr1 = [1, 2, 3, 4, 5]
  const multTwo = item => item * 2 + ' '

  const arr2 = arr1.map(multTwo) // Алгоритм в 1 строку

  return arr2
}
```

### Пример №2. Вычисляемые значения `.map`

![Math](https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif)

Допустим, у нас есть массив, который содержит годы рождения разных людей. Нам нужно создать массив, в котором будет храниться их возраст.

Например: без функции⚙️ высшего порядка (классика - через цикл `for( )` и `push( )`)

```jsx live
function learnJavaScript() {
  const birthYear = [1975, 1997, 2002, 1995, 1985]
  const ages = []
  for (let i = 0; i < birthYear.length; i++) {
    let ageNew = 2020 - birthYear[i] + ' ' // Текущее значение нового массива
    ages.push(ageNew) // заносим новое значение в массив ages[]
  }

  return ages // [ 45, 23, 18, 25, 35 ] только без пробелов
}
```

С функцией высшего порядка `map`:

```jsx live
function learnJavaScript() {
  const birthYear = [1975, 1997, 2002, 1995, 1985]
  let ages = birthYear.map(year => 2020 - year + ' ') // Алгоритм в 1 строку через стрелочную функцию
  return ages // [ 45, 23, 18, 25, 35 ]
}
```

Перепрошиваем    новый массив за одну строчку кода .

### Пример №3. С проверкой условия `.filter()`

![Check](https://media.giphy.com/media/Rd6sn03ncIklmprvy6/giphy.gif)

У нас есть массив, который содержит объекты со свойствами: имя и возраст. Нам нужно создать массив, который будет содержать только совершеннолетних (т.е. возраст больший или равный 18).

Без функции высшего порядка (классика - через цикл `for( )` и `push( )` ):

```jsx live
function learnJavaScript() {
  const persons = [
    { name: 'Niki', age: 16 },
    { name: 'Mark', age: 18 },
    { name: 'John', age: 27 },
    { name: 'Jane', age: 14 },
    { name: 'Tony', age: 24 }
  ]

  const fullAge = []
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].age >= 18) {
      fullAge.push(persons[i])
    }
  }

  return fullAge.length // кол-во лиц старше 18 лет
}
```

С функцией высшего порядка `filter` со встроенным условием:

```jsx live
function learnJavaScript() {
  const persons = [
    { name: 'Niki', age: 34 },
    { name: 'Mark', age: 18 },
    { name: 'John', age: 27 },
    { name: 'Jane', age: 14 },
    { name: 'Tony', age: 24 }
  ]
  const fullAge = persons.filter(person => person.age >= 18) // Алгоритм с условием в 1 строку

  return fullAge.length // кол-во лиц старше 18 лет
}
```

## Создание собственной функции высшего порядка

![Create](https://media.giphy.com/media/3ohzdWsUVRcZC2L7Ms/giphy.gif)

До этого мы рассматривали функции⚙️ высшего порядка, встроенные в язык . Теперь давайте сами создадим такую функцию⚙️.
Представьте, что в JavaScript нет встроенного метода `map`. Мы можем самостоятельно написать его, создав функцию⚙️ высшего порядка.

Допустим, у нас есть строчный массив, и мы хотим конвертировать его в массив чисел, в котором каждый элемент представляет длину элементов из оригинального массива.

```jsx live
function learnJavaScript() {
  // Исходный массив
  const strArray = ['English', 'JavaScript', 'React', 'TypeScript', 'AWS']
  // функция высшего порядка mapForEach() принимает к себе формальную (гипотетическую) функцию fn и формальный массив arr
  let mapFor = (arr, fn) => {
    const newArray = []
    for (let i = 0; i < arr.length; i++) {
      newArray.push(fn(arr[i])) // Применяем к каждому элементу скрытую функцию fn()
    }
    return newArray // Возвращем новый массив
  }
  // Основной код преобразования - mapForEach() вызывается с конкретными значениями-параметрами
  const lenArray = mapFor(strArray, item => item.length + ' ')

  return 'Длина слов: ' + lenArray // [ 7, 10, 5, 10, 3 ]
}
```

В примере выше, мы создали свою функцию высшего порядка `mapFor(),` которая принимает массив `arr` и callback-функцию `fn.` Эта функция циклично перебирает данный массив и вызывает callback-функцию `fn` внутри функции `newArray.push()` для каждой итерации, расчитывая количество символов в словах массива, алгоритм расчета которой описан  в виде 2-й переменной  .

:::note callback
Функция⚙️ обратного вызова (callback) — это функция⚙️, переданная в другую функцию⚙️ в качестве аргумента, которая затем вызывается по завершению какого-либо действия.
:::

`Callback`-функция⚙️ `fn` принимает текущий элемент массива и возвращает длину текущего элемента, который теперь хранится в `newArray`. После завершения цикла `For()`, `newArray` возвращает значение длины элементов в `lenArray`.

<!-- Поэксперементируйте, используя стрелочные функции:

```jsx
function learnJavaScript() {
  let name = ''
  // Для наглядности функцию преобразования вынесем в отдельную переменную
  let say = secret => 'Hello, ' + secret + ' !' // Основной расчетный алгорим (можно сортировку встроить и многое другое)
  // userInput() - функция высшего порядка
  let userInput = fn => {
    // в качестве параметра функция, пока еще не известно какая (неизведанный алгоритм)
    name = 'Jane' // какое-либо действие
    return fn(name) // только теперь запускаем callback-функцию переданную в параметре с конкретным значением `name`
  }
  return userInput(say) // say - функция callback (обратного вызова), становиться ясно какая функция передается в качестве параметра без скобок
}
```

Обратите внимание на синтаксис  :

при передаче функции⚙️ say в качестве параметра скобки `()` не указываются, т.к. в параметре функция⚙️ не вызывается, а передается целиком. Функция⚙️ `say` является аргументом функции⚙️ `userInput().` -->

Помните, любой сколь угодно малый алгоритм состоит из 3-х этапов:

- 1 этап - Инициализация переменных  и функций
- 2 этап - Функция высшего порядка (логика)
- 3 этап - Вывод ответа.

<!-- Модернизированный пример:

```jsx live
function learnJavaScript() {
  // 1 этап - Инициализация переменных и функций
  let name = ''
  let say = secret => 'Твое имя содержит ' + secret.length + ' символа.'
  // 2 этап - Функция высшего порядка
  let userInput = fn => {
    name = 'Jane'
    return fn(name)
  }
  return userInput(say) // 3 этап - Ответ
}
``` -->

## Заключение

<!-- ![The and](https://media.giphy.com/media/xT1XH3yj7ujmm2h40o/giphy.gif) -->

Мы узнали, что такое функции высшего порядка и разобрали несколько из них, уже встроенных в язык . Научились создавать их самостоятельно.

Не углубляясь в детали, о функциях⚙️ высшего порядка можно сказать так: это функции⚙️, которые могут принимать функцию⚙️ в качестве аргумента и даже, возвращать функцию⚙️.

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Проблемы?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Пишите в [Telegram](https://t.me/neuro_coder_group) или [ВКонтакте](https://vk.com/neurocoder), а также подписывайтесь на наши [новости](https://t.me/neuro_coder_ai)

<!-- ![JavaScript Camp](/img/bandlink.png) -->

## Вопросы:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

Функции первого класса:

1. Объекты первого класса
2. Объекты пятого класса
3. Объекты высшего класса

Функция высшего порядка:

1. Принимает функцию в качестве аргумента или возвращает функцию в качестве вывода
2. Только принимает функцию в качестве аргумента
3. Только возвращает функцию в качестве вывода

Функцию высшего порядка:

1. Нереально создать самому
2. Можно использовать только через встроенный метод
3. Можно самостоятельно создать самому

Для того чтобы понять, на сколько вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме или в нашем [телеграм боте](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Ссылки:

1. [Изучаем функции высшего порядка в JavaScript](https://medium.com/nuances-of-programming/%D0%B8%D0%B7%D1%83%D1%87%D0%B0%D0%B5%D0%BC-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8-%D0%B2%D1%8B%D1%81%D1%88%D0%B5%D0%B3%D0%BE-%D0%BF%D0%BE%D1%80%D1%8F%D0%B4%D0%BA%D0%B0-%D0%B2-javascript-c23daf53a5c0)
2. [Статья "Функции высшего порядка в JavaScript"](https://habr.com/ru/post/261723/)
3. [Выразительный Javascript. Статья "Функции высшего порядка"](https://eloquent-javascript.karmazzin.ru/chapter5)
4. [Код для подростков: прекрасное руководство по программированию для начинающих, том 1: Javascript - Jeremy Moritz ](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)

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
## Array.prototype.reduce
Метод `reduce` выполняет `callback-функцию` для `каждого элемента` вызываемого массива, что в результате приводит к одному выходному значению.

Метод reduce принимает два параметра:
1) reducer-функцию (callback)
2) и опционально initialValue.

Reducer-функция (callback) принимает 4 параметра: accumulator, currentValue, currentIndex, sourceArray.
Если параметр initialValue предусмотрен, тогда accumulator будет равен initialValue
, а currentValue равен первому элементу в массиве.
Если параметр initialValue не предусмотрен, тогда accumulator будет равен первому элементу массива, а currentValue – второму.
Пример №1
Допустим, нам нужно суммировать массив чисел:
С функцией высшего порядка reduce
const arr = [5, 7, 1, 8, 4]
const sum = arr.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue
})
// prints 25
console.log(sum)
Reducer-функция вызывается для каждого элемента массива, а результат возвращённый reducer хранится в accumulator . В currentValue содержится текущее значение массива. Конечный результат хранится в переменной sum .
Мы можем задать начальное значение этой функции:
const arr = [5, 7, 1, 8, 4]
const sum = arr.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue
}, 10)
// prints 35
console.log(sum)
Без функции высшего порядка
const arr = [5, 7, 1, 8, 4]
let sum = 0
for(let i = 0 ; i < arr.length ; i++) {
  sum = sum + arr[i]
}
// prints 25
console.log(sum)
Обратите внимание, как использование функции высшего порядка сделало наш код чище, лаконичнее и менее многословным.
-->
