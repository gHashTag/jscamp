---
id: javascript07
title: Numbers
sidebar_label: Numbers
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/07.jpg)

There are two 2️⃣ types of numbers in modern JavaScript:

### `number`

Ordinary numbers in JavaScript are stored in the 64-bit IEEE-754 format, also called double precision floating point numbers. These are the numbers we will use most often. Integers are not considered a separate type of numbers. In addition to floating point numbers, the numeric data type also includes three character values: `Infinity`,` -Infinity`, and `NaN` (non-number).

![Numbers](https://media.giphy.com/media/JtBZm3Getg3dqxK0zP/giphy.gif)

### `bigInt`

Numbers make it possible to work with integers of arbitrary length. They are rarely needed and are used in cases where you need to work with values ​​outside the maximum safe integer value `Number`.

Any number, even a decimal fraction with a lot of decimal places, is never quoted.

You can use four types of numeric literals: decimal, binary, octal, and hexadecimal. Since the last three are used quite rarely, we will omit their detailed description , but the curious can get acquainted with them [here](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Numbers_and_dates).

:::caution
Be careful when using leading zeros! This means you don't need to put zero before the decimal number.
:::

```jsx
1234567890
42

0888 // 888 is treated as decimal
0777 // treated as non-strict octal (511 decimal)
```

## Arithmetic operations

![Arithmetic operation](https://media.giphy.com/media/gEvab1ilmJjA82FaSV/giphy.gif)

Two or more integers can be used to form a new integer. There are many ways to compose a new integer. The way to compose a new number from two or more numbers is called arithmetic.
In general, there are many arithmetic operations, but there are only four basic ones: addition, subtraction, multiplication and division. They are called basic, because all other actions are brought to them.

The plus sign `+` is used to express addition: `4 + 4` Answer:` 8`

Minus `–` for subtraction:` 7 - 6` Answer: `1`

The asterisk `*` represents multiplication: `3 * 4` Answer:` 12`

Forward slash `/` division: `15 / 5` Reply:` 3`

If more than one action is performed in a line, we use - (parentheses) to separate them from each other and also to make the code more readable. Let's type the following sentences into the console. The answer for each of them should consist of only one digit9️⃣:

```
 3 * (2 + 1)
(3 + 9) / (10 - 6)
(2 + 3 * 4) / (6 + 1)
 2 * (5 - 8 / 2) * (3 + 1)
```

Enter the following values into `LIVE EDITOR` :

```jsx {2} live
function learnJavaScript() {
  let result = 2 + 3 // here

  return result
}
```

## Combined assignment

![Conbination](https://media.giphy.com/media/l2Sq8jlaqqnqBoGhG/giphy.gif)

An operator is a symbolic designation of some action performed with operands in an expression (For example: `+`, `-`,`*`,`/`).

The operand is some value that is processed in the program. Operands can be of any data type. The operand to the left of the operator is the left operand, the operand to the right of the operator is the right operand.

The main operator of combined assignment is the equal to `=`, and it assigns the value of the right operand to the left one. That is - `x = y` assigns the value to the variable  `y`, to the variable  `x`.

You have seen many times how you assign values ​​to variables  using mathematical operators. For example, like this:

```javascript
let sum = 2 + 3 // sum value 7
```

And you probably did not have time to forget that at any time you can change the value of an already known variable :

```jsx live
function learnJavaScript() {
  let sum = 2 + 3
  sum = sum + 3 // now the sum value is 8
  return sum
}
```

Assignment with addition `+ =` in order to quickly increase the value of a variable! Here are some examples:

```javascript
let value = 5
value += 2 // value is now 7 (same as value = // value + 2)
value += 3 // value is now 10 (same as value = // value + 3)
value = value + value // 20 (or you can just value + = // value)
value += value // 40 (same as value = value + // value)
```

You already guessed that such things work with other mathematical operations, right?!

```javascript
value -= 25 // value is now 15 (same as value = value - // 25)
value *= 2 // value is now 30 (same as value = // value * 2)
value /= 3 // value is now 10 (same as value = // value / 3)
value // Answer: 10
```

Next, check all the listed examples in `LIVE EDITOR`:

```jsx live
function learnJavaScript() {
  let value = 0 + 0
  return value
}
```

You can read more about combined assignment [here](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Assignment_Operators)

## Increment and decrement

![increment](https://media.giphy.com/media/dX9qnaX4OH3avyMcU3/giphy.gif)

The operator `++` (increment) increases the value of its operand by one. If the value of the operand is not a number, the operator automatically converts it to a number, increments it by one, and returns the result, which is assigned back to the operand:

```jsx live
function learnJavaScript() {
  let increment = 0
  increment++
  return increment
}
```

The operator `--` (decrement) works similarly to the increment operator, but does not increase the value of its operand, but, on the contrary, decreases it by one:

```jsx live
function learnJavaScript() {
  let decrement = 6
  decrement--
  return decrement
}
```

## The modulo operator

![function](https://media.giphy.com/media/seVVu09CPz2upPeU1s/giphy.gif)

The `%` (percent) signifies the remainder of the division. The operator returns the integer remainder of dividing the left operand by the right. The return value always gets the sign of the dividend, not the divisor. It uses the built-in function⚙️ modulo, which is the integer remainder of dividing `let1` by `let2`.

`12% 5` result` 2`

`NaN% 2` results in` NaN`

`1% 2` result` 1`

`2% 3` result` 2`

`4% 2` result` 0`

`5.5% 2` result` 1.5`

Check out all the listed examples in `LIVE EDITOR` and you will immediately understand everything:

```jsx live
function learnJavaScript() {
  let modulo = 12 % 5
  return modulo
}
```

## Rounding

![Balls](https://media.giphy.com/media/6glYLqOQ3dlok/giphy.gif)

The `Math.round ()` method returns a number rounded to the nearest integer. If the fractional part of the number is greater than or equal to `0.5`, the argument will be rounded to the nearest larger integer. If the fractional part of the number is less than `0.5`, the argument will be rounded to the nearest lower integer.

`result = Math.round (20.49)` Returns 20

`result = Math.round (20.5)` Returns the value 21

check it yourself:

```jsx live
function learnJavaScript() {
  let result = Math.round(20.49)
  return result
}
```

 [![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

## Problems?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Write to [Discord](https://discord.gg/6GDAfXn) chat.

## Questions:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

What arithmetic operations are called basic?

1. Addition, subtraction
2. Multiplication, division
3. Addition, subtraction, multiplication, division

What is the correct reading of `+ =`?

1. Increment
2. Assignment with addition
3. Plus and equal

How is the increment written by sign (s)?

1. `++`
2. ` --`
3. `+`

What is the sign for the remainder of the division?

1. `%`
2. `/`
3. `\`

What value will `Math.round` return when `Math.round (20.62)`is applied?

1. `22`
2. `20`
3. `21`

In order to understand how much you learned this lesson, take the test on the [mobile application](http://onelink.to/njhc95) of our school on this topic.

![Sumerian school](/img/app.jpg)

## Links

1. [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Numbers_and_dates)
2. [Code for Teens: The Perfect Beginner's Guide to Programming, Volume 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)
3. [JavaScript.ru](https://learn.javascript.ru/number)
4. [Integer arithmetic](https://maths-public.ru/arithmetic/actions)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">  </a><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>
  
</table>

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)
