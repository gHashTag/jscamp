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
## Payment

Now you are on a stripped-down version of the site, after subscribing to [Patreon](https://www.patreon.com/javascriptcamp), you will get full access to the training course, as well as access to our server's private channels in [Discord](https://discord.gg/6GDAfXn).

Download our [mobile application](http://onelink.to/njhc95) or get tested in our [JavaScript telegram bot](https://t.me/javascriptcamp_bot), and also subscribe to [our news](https://t.me/javascriptapp).

[![Become a Patron!](/Img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)


[![Sumerian school](/img/app.jpg)](http://onelink.to/njhc95)

![JavaScript Camp](/img/bandlink.png)

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
