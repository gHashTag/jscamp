---
id: javascript19
title: Array iteration methods(map, filter, reduce)
sidebar_label: map, filter, reduce
---

![@serverSerrverlesskiy](/img/javascript/headers/22.jpg)

The JavaScript language has a clear preference for arrays over other data structures. They have a lot of convenient specific tricks, for example, a whole set of iterating methods: `map`,` filter`, `reduce`.

## map

![Create](https://media.giphy.com/media/ffd0F6WNcRJMQ/giphy.gif)

The `map ()` method creates🏗️ a new с array with the result of calling the specified function⚙️ for each element of the array.

### Syntax

![Book](https://media.giphy.com/media/s6OiiampNcye4/giphy.gif)

```javascript
let new_array = arr.map(function callback( currentValue[, index[, array]]) {
    // Returns the item for new_array
}[, thisArg])
```

The `map` method calls the passed `callback` function once for each element, in the order of their occurrence, and constructs a new array from the results of its call. The `callback` function is called only for array indices that have assigned values, including `undefined`. It is not called for missing array elements (that is, for indices that were never specified, deleted, or never assigned a value).

The function⚙️ `callback` is called with three arguments:

- the value of the element,
- element index
- and the array through which the passage is carried out.

If the `thisArg` parameter was passed to the `map` method, it will be used as the `this` value when `callback` is called. Otherwise, the `this` value will be `undefined`. Ultimately, the value of `this` as seen from the `callback` function is determined according to the usual rules for defining `this` as seen from a function.

The `map` method does not modify the array for which it was called (although the function⚙️ can do that!).

The range of elements processed by the `map` method is set before the first call to the `callback` function. Items added to the array after the start of the `map` method will not be visited by the `callback` function. If the existing elements of the array are modified by the `callback` function, their values ​​passed to the function will be the values ​​at the time when the `map` method visits them. Deleted items will not be visited.

### Examples:

![Math](https://media.giphy.com/media/xT1Ra5h24Eliux3UVq/giphy.gif)

#### simple example

You have an array with many objects, each representing a different person👨. There can be a lot of data here: name, age, hair color and favorite character from the cinema, but at the moment all this is not required - you only want to get an array of passport numbers of these people in order to give them all conference passes.

```jsx live
function learnJavaScript() {
  const friends = [
    { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
    { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
    { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
    { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
    { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
    { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' }
  ]
  let passports = friends.map(friend => friend.passport + ' ')
  return passports
}
```

#### In certain cases, you may need to display an array of objects with the selected keys as a string 👇:

```jsx live
function learnJavaScript() {
  const users = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
  ]

  let result = users.map(({ id, age, group }) => `\n${id} ${age} ${group}`).join('')

  return result
}
```

#### Creating an array of Fahrenheit values from an array of Celsius values:

![Thermometer](https://media.giphy.com/media/W23dJLsAW5knUU27Fv/giphy.gif)

An example with processing each element of an array with a given formula 👇:

```jsx live
function learnJavaScript() {
  let celsius = [-15, -5, 0, 10, 16, 20, 24, 32]

  let fahrenheit = celsius.map(t => t * 1.8 + 32 + ' ')

  return fahrenheit
}
```

<!-- ### Отображение массива чисел на массив квадратных корней

Отображение таблицы пользователей в виде читаемой строки только с указанными ключами
Следующий код📟 берёт массив чисел и создаёт 🆕 новый массив, содержащий квадратные корни чисел из первого массива.

```jsx live
function learnJavaScript() {
  var numbers = [1, 4, 9]
  var roots = numbers.map(Math.sqrt) + ' '
  return roots
}
``` -->

#### Displaying an array of numbers using a function that takes an argument 👇:

```jsx live
function learnJavaScript() {
  const numbers = [1, 4, 9]

  const doubles = numbers.map(num => num * 2 + ' ')

  return doubles
}
```

<!-- ![Wow](https://media.giphy.com/media/1ym5LJ17vp77BL8X5O/giphy.gif)

#### Обобщённое использование `map`

Этот пример показывает, как использовать `map` на объекте строки `String` для получения массива байт в кодировке `ASCII`, представляющего значения символов 👇 :

```jsx live
function learnJavaScript() {
  var map = Array.prototype.map
  var a =
    map.call('Hello World', function (x) {
      return x.charCodeAt(0)
    }) + ' '
  return a
}
```

#### Использование `map` для переворачивания строки

```jsx live
function learnJavaScript() {
  var str = '12345'
  result = [].map
    .call(str, function (x) {
      return x
    })
    .reverse()
    .join('')
  return result
}
``` -->

## filter

![filter](https://media.giphy.com/media/xT5LMGupUKCHb7DnFu/giphy.gif)

The `filter ()` method creates 🆕 a new array with all the elements that have passed the check specified in the passed function⚙️.

The result of a filter is always an array. If a function⚙️ for an element returns🔄 `true` ✅ (or any" true "value), this element is included in the result, otherwise it is not included.

### Syntax

![write](https://media.giphy.com/media/6Do13TV1OfOF2/giphy.gif)

```javascript
let newArray = arr.filter(function callback(element[, index, [array]])[, thisArg])
```

### Description

![m](https://media.giphy.com/media/DQaeCdCqhHWx3n4dvH/giphy.gif)

The `filter()` method calls the passed `callback` function once for each element present in the array and constructs a new array with all values ​​for which the `callback` function returned `true` or a value that becomes `true` ✅ when cast to `boolean`. The `callback` function is called only for array indices that have assigned values; it is not called for indexes that have been dropped or have never been assigned values. Array elements that have not been checked by the `callback` function are simply skipped and not included in the 🆕 new array.

The function⚙️ `callback` is called with three arguments:

- the value of the element;
- element index;
- the array through which the passage is carried out.

If the `thisArg` parameter was passed to the `filter()` method, it will be used as the `this` value when the function is called. Otherwise, the `this` value will be `undefined`. Ultimately, the value of `this` as seen from a function⚙️ is determined according to the usual rules for defining `this` as seen from a function⚙️.

The `filter()` method does not modify the array on which it was called.

The range of elements processed by the `filter()` method is set before the first call to the `callback` function. Items added to the array after the start of the `filter()` method will not be visited by the `callback` function. If the existing array elements change, the values ​​passed to the `callback` function will be the values ​​at the time when the`filter()`method visits them. Deleted items will not be visited.

### Example

![math](https://media.giphy.com/media/3orieN7HEHI0tw8x5C/giphy.gif)

#### Filtering out all small values

The following example uses `filter()` to create a filtered array with all elements greater than or equal to `value`, and all elements less than `value` removed.

```jsx live
function learnJavaScript() {
  const isBigEnough = value => value >= 10

  let filtered = [12, 5, 8, 130, 44].filter(isBigEnough) + ' '

  return filtered
}
```

![Wow](https://media.giphy.com/media/M33UV4NDvkTHa/giphy.gif)

## reduce

![count](https://media.giphy.com/media/xUPGcqaVH1cDeKZTBS/giphy.gif)

The reduce method also runs in the context of an array and calls a function⚙️ for each element, but it also accumulates the results of all calls into a single value. This behavior can be controlled.

reduce is not meant to modify the elements of a collection like map. Its task is to calculate the "sum" of all elements in one way or another, and return it.

The resulting value can be anything: a number, a string, an object, an array - it all depends on the problem that the JavaScript developer is solving.

The reduce method takes 2 parameters:

- a function, like `map`, which will be called sequentially for each element of the collection;
  is the initial value of the accumulator.

The function⚙️ also has 2 arguments:

- the first is the accumulated value (accumulator);
- directly an element of the array.

### Syntax

```javascript
array.reduce(function callback[, initialValue])
```

### Description

![describe](https://media.giphy.com/media/3orieVr84udUl4wbQs/giphy.gif)

The reduce () method executes the callback function once for each element in the array, excluding voids, taking four arguments: the initial value (or the value from a previous callback), the value of the current element, the current index, and the array to iterate over.

The first time the function is called⚙️, the accumulator and currentValue parameters can take one of two values. If the `initialValue` argument is passed in the call to reduce (), then the value of `accumulator` will be equal to the value of `initialValue` and the value of `currentValue` will be equal to the first value in the array. If no initialValue is specified, accumulator will be equal to the first value in the array, and currentValue will be equal to the second value in the array.

If the array is empty and no `initialValue` argument is specified, a `TypeError` exception will be thrown. If the array consists of only one element (regardless of its position in the array) and the `initialValue` argument is not specified, or if the `initialValue` argument is specified, but the array is empty, then this value will be returned, without calling the function⚙️ `callback` ...

### Initial battery value

![hatchng](https://media.giphy.com/media/xT1R9Qy80qNb8oQGGc/giphy.gif)

Let's figure out the initial value. In the example, it is equal to `0`, since we are calculating the numerical value - the sum of the ages. In place of zero, there can be any other number / string (empty or not) / object / array - whatever value you start accumulating from. For example, let's combine the names of all friends in one line 👇:

```jsx live
function learnJavaScript() {
  const friends = [
    { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
    { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
    { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
    { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
    { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
    { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' }
  ]

  const names = friends.reduce((accumulator, friend) => `${accumulator} ${friend.name}, `, 'Friends: ')

  return names
}
```

Here, the initial value was the string `" Friends: "`, to which the names of all friends were gradually added.

If you do not specify the original value explicitly, the first 1️⃣ element of the array becomes implicitly. In this case, the function⚙️ for it is no longer called.

### Example

#### Sum all values in an array:

```jsx live
function learnJavaScript() {
  const initialValue = 0

  const sum = [1, 2, 3].reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  }, initialValue)

  return sum
}
```

And the same thing in one line of code:

```jsx live
function learnJavaScript() {
  const sum = [1, 2, 3].reduce((x, y) => x + y)

  return sum
}
```

<!-- #### Сглаживание массива массивов:

![transform](https://media.giphy.com/media/dVleMgtOlPE6Q/giphy.gif)

Код📟 решает задачу преобразования массива массивов в один плоский массив. Результат первой итерации будет равен: `[…[], …[1, 2, 3]]` что означает, что он преобразуется в `[1, 2, 3]` — это значение мы предоставляем как `acc` на второй итерации и так далее.

```jsx live
function learnJavaScript() {
  const nested = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]

  const flat = nested.reduce((acc, it) => [...acc, ...it], [])

  return flat + ' '
}
```

#### Разворачивание массива массивов:

```jsx live
function learnJavaScript() {
  const flattened = [
    [0, 1],
    [2, 3],
    [4, 5]
  ].reduce(function (a, b) {
    return a.concat(b) + ' '
  })

  return flattened
}
``` -->

## chaining

![unity](https://media.giphy.com/media/jTf2Io0LtBXGZddOVE/giphy.gif)

JavaScript programming supports the convenient `chaining` pattern - combining multiple functions⚙️ into one chain with sequential transmission of the result.

All three parsed methods are called in the context of an array, and two 2️⃣ of them also return an array. Thus, it is very easy to combine them.

For example, let's calculate the total age of all boys 👇:

```jsx live
function learnJavaScript() {
  const friends = [
    { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
    { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
    { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
    { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
    { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
    { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' }
  ]
  let totalBoysYears = friends
    .filter(friend => friend.sex === 'm')
    .reduce((accumulator, friend) => accumulator + friend.age, 0)
  return totalBoysYears
}
```

Or we can collect the girls' passport numbers to buy them plane tickets to Las Vegas 👇:

```jsx live
function learnJavaScript() {
  const friends = [
    { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
    { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
    { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
    { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
    { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
    { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' }
  ]
  let girlsPassports = friends.filter(friend => friend.sex === 'f').map(friend => friend.passport) + ' '
  return girlsPassports
}
```

## Conclusion

With these great features⚙️ the code📟 becomes easier to read. So, below is a list of articles that go into more detail on this topic.

## Problems?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Write to [Discord](https://discord.gg/6GDAfXn) chat.

## Questions:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

A function to be called for each element of an array?

1. `currentValue`
2. `array`
3. `callback`

A method that creates a new array with the result of calling the specified function for each element of the array:

1. `map`
2. `filter`
3. `reduce`

The resulting value of the reduce method can be:

1. Number
2. Array
3. Anything

Summing all values ​​in an array is achieved by the method:

1. `map`
2. `filter`
3. `reduce`

Optional parameter or value used as `this` when calling the `callback` function:

1. `array`
2. `index`
3. `thisArg`

A method that creates a new array with all the elements that passed the validation specified in the passed function:

1. `map`
2. `filter`
3. `reduce`

Combining several functions into one chain with sequential transfer of the result:

1. unity
2. chaining
3. merger

In order to understand how much you learned this lesson, take the test in the [mobile application](http://onelink.to/njhc95) of our school on this topic or in our [telegram bot](https://t.me/javascriptcamp_bot).

![Sumerian school](/img/app.jpg)

## Links

1. [Simplify your JavaScript - use map, reduce and filter](https://proglib.io/p/javascript-map-reduce-filter)
2. [15 useful javascript examples of map, reduce and filter](https://webdevblog.ru/15-poleznyh-javascript-primerov-map-reduce-i-filter)
3. [Array.prototype.map()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
4. [Array.prototype.filter()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
5. [Array.prototype.reduce()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/AlisaNasibullina"><img src="https://avatars3.githubusercontent.com/u/74646904?s=460&v=4" width="200px;" alt=""/><br /><sub><b>AlisaNasibullina</b></sub></a><br /><a href="#mentoring-KoDim-React" title="Mentoring">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
