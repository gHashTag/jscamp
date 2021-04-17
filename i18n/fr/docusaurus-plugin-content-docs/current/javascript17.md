---
id: javascript17
title: Arrays
sidebar_label: Arrays
---

![@serverSerrverlesskiy](/img/javascript/headers/18.jpg)

To store ordered collections, there is a special data structure called an `Array`.

![Storage](https://media.giphy.com/media/3orif6FORJ98Z11xzq/giphy.gif)

`Array` - an ordered collection of data, which contains the 1st, 2nd, 3rd elements, etc. For example, we need it to store 📦 a list of something: users, products, site elements, etc.

## Creation

![create](https://media.giphy.com/media/3oEduXdm2gjnrsJBOo/giphy.gif)

There are 2️⃣ options for creating🏗️ an empty array:

```javascript
let arr = new Array(5)
// new Array(5) - creates an array with no elements (which cannot be accessed just like that), but with a given length.
let arr = []
```

The second variant 2️⃣ syntax📖 is almost always used. In parentheses, we can indicate the initial values of the elements:

```jsx live
function learnJavaScript() {
  let fruits = ['Apple', 'Orange', 'Plum']

  return fruits.toString()
}
```

The array elements are numbered starting from zero 0️⃣.

We can get an element by specifying its number in square brackets 👇:

```jsx live
function learnJavaScript() {
  let fruits = ['Apple', 'Orange', 'Plum']

  return fruits[0]
}
```

We can replace the 🖊️ element:

```javascript
fruits[2] = 'Plum' // now ["Apple", "Orange", "Plum"]
```

... Or add 🆕 a new one to the existing array 👇:

```jsx live
function learnJavaScript() {
  let fruits = ['Apple', 'Orange', 'Plum']
  fruits[2] = 'Pear'
  fruits[3] = 'Lemon' // теперь ["Apple", "Orange", "Pear", "Lemon"]

  return fruits
}
```

## length

The total number of elements in the array is contained in its `.length` property:

```jsx live
function learnJavaScript() {
  let fruits = ['Apple', 'Orange', 'Plum']

  return fruits.length
}
```

The `length` property is automatically updated when the array changes. To be precise, it is not the number of elements in the array, but the largest numeric index plus one.

![Update](https://media.giphy.com/media/FP47IFqWyXfdKYU6VG/giphy.gif)

For example, the only real element with a large index gives the largest possible length to the array 👇:

```jsx live
function learnJavaScript() {
  let fruits = []
  fruits[155] = 'Apple'

  return fruits.length // 156
}
```

Note that we usually don't use arrays this way.

Another interesting fact about the `length` property is that it can be overwritten.

If we manually increase ➕ it, nothing interesting happens. But if we decrease it, the array will become shorter. This process is irreversible, as we can understand from the example 👇:

```jsx live
function learnJavaScript() {
  let arr = [1, 2, 3, 4, 5]

  arr.length = 2 // shorten to two elements
  //console.log( arr )  // [1, 2]

  arr.length = 5 // return length as it was
  //console.log( arr[3] )  // undefined: values are not restored!

  return 'The real array was shortened:' + arr
}
```

So the simplest way to clear the array is with `arr.length = 0`.

## Item types

![Storage](https://media.giphy.com/media/2sYaePC3iVWYBNxaVj/giphy.gif)

An array can store 📦 elements of any type - number, boolean value, strings, objects, or entire functions:

For example 👇:

```jsx live
function learnJavaScript() {
  let arr = [
    'Apple',
    { name: 'Nikita' },
    true,
    function () {
      return 'Hello'
    }
  ]
  // get the element with index 1 {object} and then read its property
  let x = arr[1].name // name Nikita
  // get the element with index 3 (function) and execute it
  let result1 = arr[3] // The function itself
  let result2 = arr[3]() // 'Hello'

  return 'Value of 4th element at 3rd index:' + result2
  // + '. The function itself: '+ result1
}
```

Note `result1 = arr [3]` contain the text of the function, and `result2 = arr [3] ()` the result of the executed function is `()` we run it.

## Methods `push / pop`

![binarycode](https://media.giphy.com/media/fV0oSDsZ4UgdW/giphy.gif)

`Stack` is a variant of using arrays as data structures.

It supports two 2️⃣ types of operations:

- `push` adds a ➕ element to the end.

![Add](https://media.giphy.com/media/Yqo5mjWTLGlVOIP8Dc/giphy.gif)

- `pop` removes ➖ the last element.

![Delete](https://media.giphy.com/media/VD4Bt6FyYWcWj0LzDK/giphy.gif)

Thus, new elements are always added or removed from the "end".

An example of a stack is usually a pyramid: new rings are placed on top and also taken from above.

`Queue` is one of the most common uses for an array. In computer science, this is an ordered collection of elements

## Methods for working with the end of an array:

### push

![Add to](https://media.giphy.com/media/21ODeWspDCgZNAoCIp/giphy.gif)

Adds an ➕ element to the end of an array 👇:

```jsx live
function learnJavaScript() {
  let fruits = ['Apple', 'Orange']

  fruits.push('Pear')

  return 'Array: ' + fruits // Apple, Orange, Pear
}
```

### pop

![Delete](https://media.giphy.com/media/26ybwwiZmci3DJdYs/giphy.gif)

Removes ➖ the last element from an array and returns it 👇:

```jsx live
function learnJavaScript() {
  let fruits = ['Apple', 'Orange', 'Pear']

  let delFruits = fruits.pop() // remove the "Pear" and return it to the delFruits variable

  return 'Removed item = ' + delFruits + '. Array left: ' + fruits // Apple, Orange
}
```

## Methods for working with the beginning of an array:

![start](https://media.giphy.com/media/QJvwBSGaoc4eI/giphy.gif)

### shift

Removes ➖ the first from the array and returns 🔄 it:

![delete](https://media.giphy.com/media/4Z1XJumqDgvI9b1VZJ/giphy.gif)

```jsx live
function learnJavaScript() {
  let fruits = ['Apple', 'Orange', 'Pear']

  fruits.shift() // remove the Apple

  return fruits
}
```

### unshift

Adds an ➕ element to the beginning of the array:

![Plus](https://media.giphy.com/media/LgC9OQ53v5mFi/giphy.gif)

```jsx live
function learnJavaScript() {
  let fruits = ['Apple', 'Orange', 'Pear']

  fruits.unshift('Apricot')

  return fruits
}
```

The `push` and` unshift` methods can add ➕ several elements at once 👇:

```jsx live
function learnJavaScript() {
  let fruits = ['Apple']

  fruits.push('Orange', 'Pear')
  fruits.unshift('Pineapple', 'Lemon')

  return 'In an array ' + fruits.length + ' elements. ' + ' Array: ' + fruits // ["Pineapple", "Lemon", "Apple", "Orange", "Pear"]
}
```

## Internal Array

![cupboard](https://media.giphy.com/media/b90TnygrKqYqk/giphy.gif)

An array is a special kind of object. The square brackets used to access the arr [0] property are essentially the usual syntax for key access, such as obj `[key]`, where obj is arr and the key is a numeric index.

Arrays extend objects because they provide special methods for working with ordered collections of data, as well as a length property. “But they are still facility based.

Keep in mind that in JavaScript, an array is an object and therefore behaves like an object.

For example, an array is copied by reference 👇:

```jsx live
function learnJavaScript() {
  let fruits = ['Lemon']

  let copy = fruits // copied by reference (two variables refer to the same array)

  copy.push('Pear') // arrays are changed by reference with one command

  return '1 array:' + fruits + '2 array:' + copy // Lemon, Pear - now two elements
}
```

What really makes arrays special is their internal representation. The JavaScript engine tries to store the elements of an array in a contiguous region of memory, one after the other. There are other optimizations that make arrays very fast.

But they all become ineffective if we stop working with an array as an "ordered collection of data" and start using it like a regular object.

For example, we can technically do the following:

```javascript
let fruits = [] // create an empty array

fruits[99999] = 5 // create a property with a redundant index much larger than the required array length

fruits.age = 25 // create a property with an arbitrary name
```

This is possible because the array is based on an object. We can assign any properties to it.

:::note Possible misuse of an array!

- Adding a non-numeric property (index test), for example: arr.test = 5
- Creation of "holes", for example: adding arr [0], then arr [1000] (there is nothing in between)
- Filling the array in reverse order, for example: arr [1000], arr [999], etc.

:::

Consider an array as a special structure that allows you to work with ordered data. If you need arbitrary keys, it is quite possible that a regular {} object is better suited.

## Efficiency

![Fast](https://media.giphy.com/media/3oriNYQX2lC6dfW2Ji/giphy.gif)

The push / pop methods are fast, and the shift / unshift methods are slow.

Why is it faster to work with the end of an array than with its beginning? Let's see what happens at runtime:

```javascript
fruits.shift() // remove the first element from the beginning
```

It is not enough to simply grab and remove item 0. You also need to re-number the rest of the elements.

The shift operation has to do 3 things:

- Remove element with index 0

![Delete](https://media.giphy.com/media/VIzs0jgs8KmgVeTknN/giphy.gif)

- Move all the elements to the left, re-number them, replacing `1` with `0`, `2` with `1`, etc.

![Move](https://media.giphy.com/media/jSQcEjcwG53WooptHz/giphy.gif)

- Update the `length` property

The more elements the array contains, the longer it will take to move them, the more memory operations.

But what about removing pop? He doesn't need to move anything. To remove an element at the end of an array, the pop method clears the index and decrements the length. The rest of the elements remain with the same indices.

```javascript
fruits.pop() // remove one element from the end
```

The pop method does not need to be moved. That is why it runs very quickly.

The `push` method works the same way.

## Iterating over elements

![Object](https://media.giphy.com/media/26gs9kSN6d5PxSsQU/giphy.gif)

One of the oldest ways to iterate over array elements is a `for ()` loop over numeric indices 👇:

```jsx live
// prettier-ignore
function learnJavaScript() {
   let result = ''
   let arr = ['Apple', 'Orange', 'Kiwi']

   for (let i = 0; i < arr.length; i++) // iterate over elements through for ()
   result += arr[i] + ', '

   return result // Apple, Orange, Kiwi
}
```

But another version of the loop is possible for arrays, `for..of` 👇:

```jsx live
function learnJavaScript() {
  let result = ''
  let fruits = ['Apple', 'Orange', 'Plum']

  for (let fruit of fruits) {
    // iterate over values through `for..of`
    result += fruit + ', '
  }
  return result // Apple, Orange, Plum
}
```

The `for..of` loop does not provide access to the number of the current element, only its value, but in most cases this is more than enough, and it is also shorter.

<!-- ## Псевдомассивы

![Spiderman](https://media.giphy.com/media/l36kU80xPf0ojG0Erg/giphy.gif)

В браузере и других программных средах также существуют так называемые "псевдомассивы" – объекты, которые выглядят, как массив. То есть, у них есть свойство `length` и индексы, но они также могут иметь дополнительные нечисловые свойства и методы, которые нам обычно не нужны. Тем не менее, цикл `for..in` выведет и их. Поэтому, если нам приходится иметь дело с объектами, похожими на массив, такие "лишние" свойства могут стать проблемой.

Технически, так как массив является объектом, можно использовать и вариант `for..in` для правильного массива 👇 :

```jsx live
function learnJavaScript() {
  let result = ''
  let arr = ['Яблоко', 'Апельсин', 'Груша', 'Лимон']

  for (let key in arr) {
    // проходит по элементам через `for..in`
    result += arr[key] + ' '
  }
  return result // Яблоко, Апельсин, Груша, Лимон
}
```

Цикл `for..in` оптимизирован под произвольные объекты, не массивы, и поэтому в 10-100 раз медленнее. Увеличение ➕ скорости выполнения может стать проблемой.

В целом, не следует использовать цикл `for..in` для массивов. Так же существуют скрытые недостатки этого способа:

- цикл `for..in` выполняет перебор всех свойств объекта, а не только цифровых. -->

## Multidimensional arrays

![Matryoschka](https://media.giphy.com/media/XuPaGVKyJ6eyI/giphy.gif)

Arrays can contain elements that are also arrays. This can be used to create омер multidimensional arrays, for example, to store 📦 matrices:

```jsx live
function learnJavaScript() {
  let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]

  return matrix[1][1] // 5, central element
}
```

## Total

![remember](https://media.giphy.com/media/l4pTfqyI6TCjUW4Yo/giphy.gif)

An array is a special type of object designed to work with an ordered set of elements.

Announcement🗣️:

```javascript
// square brackets (usually)
let arr = [item1, item2 ...]

// new Array (very rare)
let arr = new Array (item1, item2 ...)
```

The call `new Array (number)` creates an array with the given length, but no elements.

The length property reflects the length of the array.

We can use an array as a deque using the following operations:

- `push (... items)` adds ➕ items to the end of the array.
- `pop ()` removes ➖element at the end of the array and returns it.
- `shift ()` removes ➖ the element at the beginning of the array and returns it.
- `unshift (... items)` adds ➕ items to the beginning of the array.

To iterate over the elements of an array:

- `for (let i = 0 i < arr.length i ++)` - works fastest, compatible with older browsers.
- `for (let item of arr)` - modern syntax📖 only for item values ​​(no access to indices).
- `for (let i in arr)` - never use for arrays!

## Problems?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Write to [Discord](https://discord.gg/6GDAfXn) chat.

## Questions:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

An array is ...

1. Subtype of objects with "ordered collection of data"
2. Internal function
3. Subtype of objects with "unordered data collection"

An empty array is created:

1. `let arr1 = []`
2. `let arr2 = {}`
3. `let arr3 = ()`

The length of the array can be determined by the property:

1. `pop ()`
2. `push ()`
3. `length`

The array can store elements:

1. Any type
2. Numeric
3. String

Adding an element at the end of the array:

1. `push () `
2. `pop () `
3. `shift () `

Removing an element at the beginning of an array:

1. `pop () `
2. `shift () `
3. `unshift () `

In order to understand how much you learned this lesson, take the test on the [mobile application](http://onelink.to/njhc95) of our school on this topic.

![Sumerian school](/img/app.jpg)

## Links

1. [Article "Arrays"](https://learn.javascript.ru/array)
2. [MDN web doc. Article "Arrays"](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array)
3. [JavaScript Arrays](https://basicweb.ru/javascript/js_array.php)
4. [Code for Teens: The Perfect Beginner's Guide to Programming, Volume 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/KoDim-React"><img src="https://avatars1.githubusercontent.com/u/72087863?v=4?s=200" width="200px " alt=""/><br /><sub><b>Dmitriy K.</b></sub></a><br /><a href="#mentoring-KoDim-React" title="Mentoring">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px " alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)

<!--
### toString
Массивы по-своему реализуют метод toString, который возвращает список элементов, разделённых запятыми.

Например:
```javascript
let arr = [1, 2, 3]

console.log( arr )  // 1,2,3
console.log( String(arr) === '1,2,3' )  // true
```

Давайте теперь попробуем следующее:
```javascript
console.log( [] + 1 )  // "1"
console.log( [1] + 1 )  // "11"
console.log( [1,2] + 1 )  // "1,21"
```

Массивы не имеют ни Symbol.toPrimitive, ни функционирующего valueOf, они реализуют только преобразование toString, таким образом, здесь [] становится пустой строкой, [1] становится "1", а [1,2] становится "1,2".

Когда бинарный оператор плюс "+" добавляет что-либо к строке, он тоже преобразует это в строку, таким образом:
```javascript
console.log( "" + 1 )  // "1"
console.log( "1" + 1 )  // "11"
console.log( "1,2" + 1 )  // "1,21"
```
-->
