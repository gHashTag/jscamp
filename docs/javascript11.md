---
id: javascript11
title: Type conversion and casting
sidebar_label: Type conversion and casting
---

![@serverSerrverlesskiy](/img/javascript/headers/09.jpg)

## Type coercion (type coercion)

It is an automatic or implicit conversion of values from one data type to another (for example, a string to a number). Type conversions are similar to type conversions because they both convert values from one data type to another, with one key difference - type conversion is implicit, while type conversion can be implicit or explicit.

![transformation](https://media.giphy.com/media/xT4uQr9H3EDL7Ha2hq/giphy.gif)

Examples 👇:

```jsx live
function learnJavaScript() {
  const value1 = '5'
  const value2 = 9
  let sum = value1 + value2

  return sum
}
```

In the example above, JavaScript casts the number `9` into a string, and then concatenates the two 2️⃣ values together, resulting in the string `59`. JavaScript had a choice between string or number and chose to use string.

The compiler could convert the string `5` to a number and return the sum of `14`, but it did not. To get this result, you need to explicitly convert the string `5` to a number using the` Number()` 👇 method:

```jsx live
function learnJavaScript() {
  const value1 = '5'
  const value2 = 9
  let sum = Number(value1) + value2

  return sum
}
```

## Type conversion

![Transformation](https://media.giphy.com/media/l2SpMMVivErM0Q7jG/giphy.gif)

Means the transfer of data from one data type to another. Implicit conversion occurs when the compiler automatically assigns (assigns) data types, but the source code may also explicitly require the conversion to complete.

### String conversion

![Transformation](https://media.giphy.com/media/RLVHPJJv7jY1q/giphy.gif)

String conversion occurs when you want to represent something as a string. For example, we can use the `String (value)` function to convert a value to a string 👇:

```jsx live
function learnJavaScript() {
  let value = true // boolean

  value = String(value)
  return typeof value
}
```

The transformation takes place in an obvious way. `true` ✅ becomes`"true"`✅

### Numeric conversion

![Transformation](https://media.giphy.com/media/4H5nOUqX7FywOGpCF7/giphy.gif)

Numerical conversion occurs in math functions and expressions.

```jsx live
function learnJavaScript() {
  let value = '6' / '2'

  return value
}
```

We can use the `Number (value)` function to explicitly convert `value` to a number 👇:

```jsx live
function learnJavaScript() {
  let str = '123'
  let num = Number(str)

  return typeof num
}
```

Explicit conversion is often used when we expect to get a number from a string context, such as text fields in forms.

If the string cannot be explicitly cast to a number, then the conversion result will be `NaN` (Not-a-Number, "not a number "). For example 👇:

```jsx live
function learnJavaScript() {
  let age = Number('Any string instead of a number')

  return age
}
```

### Numeric conversion rules:

| Value            |                                                                              Converted to ...                                                                               |
| ---------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| `undefined`      |                                                                                    `NaN`                                                                                    |
| `null`           |                                                                                     `0`                                                                                     |
| `true` /` false` |                                                                                  `1` /` 0`                                                                                  |
| `string`         | White space is trimmed at the edges. Further, if an empty string remains, then we get 0, otherwise a number is "read" from a non-empty string. On error, the result is NaN. |

Examples:

```javascript
Number('   123   ') // 123
Number('123z') // NaN (error reading the number in place of the "z" character)
Number(true) // 1
Number(false) // 0
Number(null) // 0
Number(undefined) // NaN
```

Note that `null` and` undefined` behave differently. So, `null` becomes zero, while` undefined` is cast to `NaN`.

### Boolean conversion

![Transformation](https://media.giphy.com/media/JjAdpCxrdro7m/giphy.gif)

The logical transformation is the simplest. Occurs in logical operations, but can also be performed explicitly with the function⚙️ `Boolean (value)`.

### Boolean conversion rules:

Values that are intuitively "empty" such as `0`, an empty string,` null`, `undefined`, and` NaN` become `false`. All other values become `true`.

```javascript
Boolean(1) // true
Boolean(0) // false
Boolean('Привет!') // true
Boolean('') // false
```

The shorter way of the `Boolean` function, the double NOT (!!) is used to convert values to a boolean type:

```jsx
!!'non-empty string' // true
!!null // false
```

:::caution Note that the line with zero "0" is true
Some languages👅 (for example PHP) interpret the string `" 0 "` as `false`. But in JavaScript, if a string is not empty, then it is always `true`
:::

```javascript
Boolean('0') // true
Boolean(' ') // space is also true (any non-empty string is true)
```

## Problems?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Write to [Discord](https://discord.gg/6GDAfXn) chat.

## Questions:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

Which function should you use for string conversion?

1. `String (value)`
2. `Boolean (value)`
3. `Number (value)`

What is typecasting?

1. Transferring data from one type to another
2. Converting values ​​from one data type to another
3. Representation of something as a string

What is the key difference between typecasting and typecasting?

1. Type casting is explicit, and type conversion is implicit
2. Type casting is implicit, and type conversion is explicit
3. Type conversion is implicit, and type conversion can be both explicit and implicit

When would the conversion result be `NaN`?

1. When a string cannot be explicitly cast to a number
2. When a number cannot be explicitly cast to a string
3. When there is an error in the code

What do “empty” values ​​become when converted?

1. `null`
2. `true`
3. `false`

In order to understand how much you learned this lesson, take the test in the [mobile application](http://onelink.to/njhc95) of our school on this topic or in our [telegram bot](https://t.me/javascriptcamp_bot).

![Sumerian school](/img/app.jpg)

## Links

1. [MDN web docs - Typecasting](https://developer.mozilla.org/en/docs/Словарь/Type_coercion)
2. [Code for Teens: The Perfect Beginner's Guide to Programming, Volume 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)
3. [JavaScript.ru](https://learn.javascript.ru/ifelse#blok-else)
4. [Integer arithmetic](https://maths-public.ru/arithmetic/actions)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">📖</a><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>
  
</table>

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
