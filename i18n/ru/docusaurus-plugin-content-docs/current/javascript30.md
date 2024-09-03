---
id: javascript30
title: Задачи по JavaScript
sidebar_label: Практика
---

import YouTube from 'react-youtube'

Теория это хорошо, но без практики как лететь с одним крылом, поэтому в этом разделе мы будем решать задачи по JavaScript. Задачи мы взяли с сайта [Codewars](https://www.codewars.com/r/e67HyQ) - это сайт, где вы можете прокачать свои способности не только по JavaScript, но и по другим языкам программирования.

## Найдите числа, которые делятся на заданное число

Завершите функцию, которая принимает два аргумента и возвращает все числа, которые делятся на данный делитель. Первый аргумент - это массив чисел, а второй - делитель.

### Пример

```jsx
divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]
```

### Практика

```jsx live
function learnJavaScript() {
  const divisibleBy = (numbers, divisor) => {
    return ''
  }
  return divisibleBy([1, 2, 3, 4, 5, 6], 2)
}
```

### Ответ

Смотрите ответ только в том случае, если не смогли решить задачу сами.

<YouTube videoId="eFtGZcUyZoc" />

## В два раза старше

Ваша функция принимает два аргумента:

- текущий возраст отца (лет)
- текущий возраст сына (лет)

Подсчитайте, сколько лет назад отец был вдвое старше сына (или через сколько лет он будет вдвое старше).

### Практика

```jsx live
function learnJavaScript() {
  const twiceAsOld = (dadYearsOld, sonYearsOld) => {
    return ''
  }
  return twiceAsOld(36, 7)
}
```

### Ответ

<YouTube videoId="uAeHGNYvSKU" />

## Считайте нечетные числа ниже `n`

Если задано число `n`, вернуть количество положительных нечетных чисел меньше `n`, ЛЕГКО!

### Пример

```jsx
oddCount(7) //=> 3, i.e [1, 3, 5]
oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]
```

### Практика

```jsx live
function learnJavaScript() {
  const oddCount = n => {
    return ''
  }
  return oddCount(15023)
}
```

### Ответ

<YouTube videoId="E1W-EQY_RLw" />

## Преобразуйте строку в число!

Нам нужна функция, которая может преобразовывать строку в число. Какие способы добиться этого вы знаете?

Примечание: не волнуйтесь, все входные данные будут строками, и каждая строка является вполне допустимым представлением целого числа.

### Пример

```jsx
stringToNumber('1234') == 1234
stringToNumber('605') == 605
stringToNumber('1405') == 1405
stringToNumber('-7') == -7
```

### Практика

```jsx live
function learnJavaScript() {
  const stringToNumber = str => {
    return str
  }
  return stringToNumber('999')
}
```

### Ответ

<YouTube videoId="zSr7bA2BnI4" />

## Итого

Весь видео плейлист по этой теме можно посмотреть на нашем [YouTube канале](https://www.youtube.com/playlist?list=PLth6QPteH5guJiD0Ifa7_byNUW3GYdvNR).

На татами в [Codewars](https://www.codewars.com/r/e67HyQ) оденься в кимоно.

JavaScript теперь твое главное звено!

<YouTube videoId="GAbsjQF9i0c" />


[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Проблемы?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Пишите в [Discord](https://discord.gg/6GDAfXn) или телеграмм [чат](https://t.me/jscampapp), а также подписывайтесь на наши [новости](https://t.me/javascriptapp)

![JavaScript Camp](/img/bandlink.png)
