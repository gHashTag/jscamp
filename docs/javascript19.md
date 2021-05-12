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

## Payment

Now you are on a stripped-down version of the site, after subscribing to [Patreon](https://www.patreon.com/javascriptcamp), you will get full access to the training course, as well as access to our server's private channels in [Discord](https://discord.gg/6GDAfXn).

Download our [mobile application](http://onelink.to/njhc95) or get tested in our [JavaScript telegram bot](https://t.me/javascriptcamp_bot), and also subscribe to [our news](https://t.me/javascriptapp).

[![Become a Patron!](/Img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)


[![Sumerian school](/img/app.jpg)](http://onelink.to/njhc95)

![JavaScript Camp](/img/bandlink.png)

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
