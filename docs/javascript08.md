---
id: javascript08
title: True or False?
sidebar_label: True or False?
---

![@serverSerrverlesskiy](/img/javascript/headers/08.jpg)

There will be a lot of new things in this chapter, but it shouldn't be very difficult: after all, in general, everything revolves around a simple idea - true or false?

Until now, we have always dealt only with primitive data types - with numbers and strings.
Have you come across the term "primitive" in programming before? If not, I'll explain: "primitive" (they also say "simple") means that this data type is not an object (we'll come back to this point) and does not have built-in methods of work (that is, functions⚙️).

![True](https://media.giphy.com/media/peBw21sPZnlqE/giphy.gif)

The data type that you will definitely need is called boolean, or boolean. Boolean type always has the value either `true` ✅ - true, or` false` ❎ - false. And only this way, and nothing else! He is either lying or telling the truth - pan or disappear, the light is on or off, or there is or not. You either did your homework or you didn't. Only two 2️⃣ values are `true` ✅ or` false`.

## Equality operators

![Operator](https://media.giphy.com/media/9r1n7HzkPT9sM1Wp0G/giphy.gif)

Boolean values come in handy when we need to compare something in JavaScript. When the need arises, we immediately call the comparison operators.
Now we will sequentially study all eight comparison operators, but the thing is that as a result of each of them, we do not care
we will always be left with a boolean value - either `true` ✅ or `false` ❎.

### Equals `==`

![Justice](https://media.giphy.com/media/3o85xDf6hr7ajhVL9K/giphy.gif)

The equals operator first converts the operands to the same type, and then applies strict comparison. If both operands are objects, then JavaScript compares internal references that are equal if they refer to the same object in memory.

Syntax📖:

```javascript
x == y
```

Examples:

```javascript
1 == 1 // true
'1' == 1 // true
1 == '1' // true
3 == 5 // false
0 == false // true
'foo' == 'bar' // false
```

Enter the examples one by one into the 🔔 `bool` variable of our `LIVE EDITOR`

```jsx live
function learnJavaScript() {
  let bool = 1 == 1
  return bool.toString()
}
```

### Not equal to `!=`

![Equals](https://media.giphy.com/media/xT8qBit7YomT80d0M8/giphy.gif)

The not equal operator returns🔄 `true` ✅ if the operands are not equal. It is similar to the equality operator, converting the operands to the same type before comparing. If both operands are objects, JavaScript compares internal references that are not equal if they refer to different objects in memory.

Syntax📖:

```javascript
x != y
```

Examples:

```javascript
1! = 2 // true
1! = '1' // false
1! = '1' // false
1! = True // false
0! = False // false
'foo'! = 'bar' // true
```

Enter the examples one by one into the 🔔 `bool` variable of our `LIVE EDITOR`

```jsx live
function learnJavaScript() {
  let bool = 1 != 2
  return bool.toString()
}
```

### Strictly equal to `===`

![equality](https://media.giphy.com/media/4W0ZwRP8y7pQtcUMyQ/giphy.gif)

The operator returns true if the operands are strictly equal. Unlike the equals operator, this operator does not cast operands to the same type.

Syntax📖:

```javascript
x === y
```

Examples:

```javascript
3 === 3 // true
3 === '3' // false
'foo' === 'foo' // true
```

The operator makes sure that both the value and the type are strictly identical. In the case of `3 === '3'`, the value is, of course, identical, but the type is not: the first is a number, and the second is a string.

Enter the examples one by one into the 🔔 `bool` variable of our `LIVE EDITOR`

```jsx live
function learnJavaScript() {
  let bool = 3 === 3
  return bool.toString()
}
```

### Strictly not equal to `! ==`

![ruler](https://media.giphy.com/media/tPK9Fyl1gyIkU6XbZv/giphy.gif)

The strictly not equal operator returns true if the operands are not equal or their types differ from each other.

Syntax📖:

```javascript
x !== y
```

Examples:

```javascript
3 !== '3' // true
4 !== 3 // true
```

Enter the examples one by one into the 🔔 `bool` variable of our `LIVE EDITOR`

```jsx live
function learnJavaScript() {
  let bool = 3 !== 3
  return bool.toString()
}
```

Why not use `==` and `! =`? But because, in general, there is never such a need. Whenever you can use them, you can always use both the strict `===` and `! ==`. If you want more flexibility in the answer (say, so that both `1` and `'1'` or `true` are equally accepted ✅), then you can simply include the desired answer options in the code itself (without changing this `===`).

:::info Just understand the rule
Never use `==` or `! =`
:::

## Comparison Operators

### More `>`

![not equal](https://media.giphy.com/media/jPfQcPdmI9bTXpa7hi/giphy.gif)

The more operator returns true if the value of the left operand is greater than that of the right one.

Syntax📖:

```javascript
x > y
```

Examples:

```javascript
4 > 3 // true
1 > 5 // false
```

Enter the examples one by one into the variable 🔔 `bool` in `LIVE EDITOR`

```jsx live
function learnJavaScript() {
  let bool = 4 > 3
  return bool.toString()
}
```

### Less `<`

![small](https://media.giphy.com/media/82tNeaMTlEsdW/giphy.gif)

The less than operator returns true if the value of the operand on the left is less than the value of the operand on the right.

Syntax📖:

```javascript
x < y
```

Examples:

```javascript
3 < 4 // true
5 < 2 // false
```

Enter the examples one by one into the 🔔 `bool` variable of our `LIVE EDITOR`

```jsx live
function learnJavaScript() {
  let bool = 3 < 4
  return bool.toString()
}
```

### Greater than or equal to `>=`

![comparison operator](https://media.giphy.com/media/icJA0VF7ntoEL18Jez/giphy.gif)

The operator is greater than or equal to, returns true if the value of the operand on the left is greater than or equal to the value of the operand on the right.

Syntax📖:

```javascript
x >= y
```

Examples:

```javascript
4 >= 3 // true
3 >= 3 // true
```

Enter the examples in the 🔔 `bool` variable one by one:

```jsx live
function learnJavaScript() {
  let bool = 4 >= 3
  return bool.toString()
}
```

### Less than or equal to `<=`

![less](https://media.giphy.com/media/UQbDc6dyK6WjpCXMvt/giphy.gif)

The operator is less than or equal, returns true if the value of the operand on the left is less than or equal to the value of the operand on the right.

Syntax📖:

```javascript
x <= y
```

Examples:

```javascript
3 <= 4 // true
3 <= 3 // true
```

Enter the examples in the 🔔 `bool` variable one by one:

```jsx live
function learnJavaScript() {
  let bool = 3 < 4
  return bool.toString()
}
```

## Conditional constructs

![boolean](https://media.giphy.com/media/12W5Sg2koWYnwA/giphy.gif)

You must be thinking, "Well, all this boolean logic thing was very simple ... They are probably pretty useless and not used often." No matter how it is! Boolean values are used in programming more than all the time and most often in the form of conditionals (or expressions).

### What is a "conditional"?

![thoughtful](https://media.giphy.com/media/IyyGGEMZhZIZwAxnUS/giphy.gif)

Good question! A conditional is a clause that is used to run certain blocks of code📟 according to a given condition. The condition (for example, when comparing `x === y`) always returns a boolean value - either` true` ✅ or `false` ❎. Accordingly, if the value is `true` ✅, then the code should be run, otherwise the code block should be skipped. Let's look at some examples.

### Conditional Expressions with `if`

![Instruction manual](https://media.giphy.com/media/2mDSs3gPUyrcMqtheg/giphy.gif)

The `if` construction executes` instruction1`, if the condition is `true` ✅, if the condition is` false` ❎, then `instruction2` is executed.

Syntax📖:

```javascript
if (condition) {
  instructions1
} else {
  instructions2
}
```

`condition` -
An expression that is either true or false.

`instruction1` -
An instruction executed if the value of `condition` is true ✅. Can be any statement, including a nested `if`. An empty statement can be used when no action is required.

`instruction2` -
An instruction to execute if the value of `condition` is false. Can be any statement, including a nested `if`. Instructions can also be grouped into a block. Change the year in the 🔔 `whatIsTheYearNow` variable and note the output.

```jsx live
function learnJavaScript() {
  let whatIsTheYearNow = 2021

  if (whatIsTheYearNow === 2021) {
    whatIsTheYearNow = true
  } else {
    whatIsTheYearNow = false
  }

  return whatIsTheYearNow.toString()
}
```

### `if` not only with boolean values

![No](https://media.giphy.com/media/ftqLysT45BJMagKFuk/giphy.gif)

Conditional expressions can work not only with boolean values, that is, with those that are not exactly `true` ✅ or` false` ❎ So, in general, we can safely use them in parentheses, as well as boolean values.

- All integers, except zero - `true` ✅
- A string with at least one `true` character ✅
- An empty string is `false` ❎

Let's try it, enter values into the 🔔 `bool` 👇 variable:

```jsx live
function learnJavaScript() {
  let bool = 1

  if (bool) {
    bool = true
  } else {
    bool = false
  }

  return bool.toString()
}
```

### Comparison Operators in `if` Expressions

![made for each other](https://media.giphy.com/media/6yxIP39EMwP7IlIA28/giphy.gif)

So far we have dealt with comparisons or conditionals with `if`, but so far we have not used them together, and they are just made for each other!

```jsx live
function learnJavaScript() {
  let year = 2021

  let output

  if (year < 2020) {
    output = 'less than 2020'
  } else {
    output = 'more than 2020'
  }
  return output
}
```

### Multiple `else if` conditions

Sometimes, you need to check several variants of a condition. This is done using the `else if` block. Change the year and see the output.

```jsx live
function learnJavaScript() {
  let year = 2021

  let output

  if (year < 2020) {
    output = 'less than 2020'
  } else if (year > 2020) {
    output = 'more than 2020'
  } else {
    output = 'equals 2020'
  }
  return output
}
```

### Conditional (ternary) operator `?`

![question mark](https://media.giphy.com/media/wH4rY2nPnEnp6/giphy.gif)

The only JavaScript operator that accepts three operands: `condition` followed by a question mark `?`, Then `expression`, which is executed if the condition is true, followed by a colon `:`, and finally, `expression` which is executed if the condition is false. It is often used as a shorthand for an `if` statement.

Syntax📖:

```javascript
condition ? expression1 : expression2
```

Parameters:

`condition` - An expression that takes the value `true` ✅ or `false` ❎.

`expression1`,` expression2` - Expressions whose values can be of any type.

Example 👇:

```jsx live
function learnJavaScript() {
  let age = 20
  let output = age > 18 ? 'Yes' : 'No'

  return output
}
```

 [![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

## Problems?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Write to [Discord](https://discord.gg/6GDAfXn) chat.

## Questions:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

What syntax is used in the equal operator?

1. `x == y`
2. `x = y`
3. `x - y`

In which case does the not equal operator return `true`?

1. If the operands are not equal
2. If the operands are equal
3. If both operands are objects

How is the operator equal to different from strictly equal?

1. Strictly equal does not cast operands to the same type
2. Strictly equalizes operands to the same type
3. Strictly ensures that the value is identical, but the type is not

What is the syntax for the operator strictly not equal?

1. `!= `
2. `!== `
3. `==! `

In which case does the operator return more false?

1. If the value of the left operand is greater than that of the right
2. If the value of the right operand is greater than that of the left
3. If the values ​​of the operand are the same

What is the syntax for the operator greater than or equal?

1. `> = `
2. `> => `
3. `> <= `

In which example will the less than or equal operator return true?

1. `4 <= 5`
2. `5 <= 4`
3. `3 <= 2`

What is a condition?

1. Instruction
2. Expression
3. Value

Which block is used to check multiple variants of a condition?

1. `else if`
2. `if`
3. `for`

Which operator takes 3 operands?

1. Conditional (ternary) operator
2. Greater than or equal
3. Less than or equal

## Links

1. [MDN web docs - Comparison Operators](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Операторы_сравнения)
2. [Code for Teens: The Perfect Beginner's Guide to Programming, Volume 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">📖</a><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>
  
</table>

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)
