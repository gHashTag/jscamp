---
id: javascript15
title: Switch case construct
sidebar_label: Switch case construct
---

![@serverSerrverlesskiy](/img/javascript/headers/14.jpg)

The switch construction is used to compare a value for equality with different options.

In this case, equality is implied in the sense of the operator strict equality `===`, it cannot compare with a regular expression or somehow else. That is, the values must be of the same type for equality to hold.

![comparison](https://media.giphy.com/media/icJA0VF7ntoEL18Jez/giphy.gif)

If the condition matches, then the code block associated with the corresponding `case` is executed. If none of the conditions match, then the code specified in the `default` block, if any, is executed. To exit the construction, use the `break` command. If you do not specify it, the code block is automatically executed in the next `case`, etc. Therefore, we use `break` in our scripts, so as not to run the interpreter over all `cases`, thereby reducing the performance of the script.

## Syntax

![Syntax](https://media.giphy.com/media/yR4xZagT71AAM/giphy.gif)

A `switch` construct has one or more` case` blocks and an optional `default` block.

It looks like this:

```jsx
switch (n) {
  case 1:
    // code block 1;
    break
  case 2:
    // code block 2;
    break
  // .......
  // other case options
  // .......
  default:
  // code block if none of the conditions match;
}
```

`n` - this is [boolean](https://react-native-village.github.io/docs/javascript08) condition.

## Examples of

![Math](https://media.giphy.com/media/xT1Ra5h24Eliux3UVq/giphy.gif)

Let's consider the simplest example :

```jsx live
function learnJavaScript() {
  let a = 4
  let str
  switch (a) {
    case 3:
      str = 'Not enough'
      break
    case 4:
      str = 'To the point!'
      break
    case 5:
      str = 'brute force'
      break
    default:
      str = "I don't know such values"
  }
  return str
}
```

Here the `switch` statement will sequentially compare` a` with all the options from `case`.
First `3`, then - since there is no match - `4`. A match is found, this option will be executed, from the line `str = 'To point!'` And further, to the nearest `break`, which will interrupt the execution.

![Wow](https://media.giphy.com/media/3oriO13KTkzPwTykp2/giphy.gif)

Consider this example :

```jsx live
function learnJavaScript() {
  let a = 'Apples'
  let str
  switch (a) {
    case 'Apples':
      str = 'I love ' + a
      break
    case 'Oranges':
      str = 'I love ' + a
      break
    case 'Bananas':
      str = 'I love ' + a
      break
    default:
      str = 'I like other fruits'
  }
  return str
}
```

Here the `switch` statement will sequentially compare `a` with all the options from `case`. But this is not a comparison of numbers, but of strings. This can be done with any data type, as long as the same data types are compared.

## Replacing `if`

Also, `Switch` is used to replace multiple `if`.

For example, you can replace this code :

```jsx live
function learnJavaScript() {
  let number = 2
  let str
  if (number === 0) {
    str = 'You entered the number 0'
  }

  if (number === 1) {
    str = 'You entered the number 1'
  }

  if (number === 2 || number === 3) {
    str = 'You entered the number 2, maybe 3'
  }
  return str
}
```

On this :

```jsx live
function learnJavaScript() {
  let number = 2
  let str
  switch (number) {
    case 0:
      str = 'You entered the number 0'
      break

    case 1:
      str = 'You entered the number 1'
      break

    case 2:
    case 3:
      str = 'You entered the number 2, maybe 3'
      break
  }
  return str
}
```

The result will be the same, but the code will become more readable and easier to work with.

 [![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

## Problems?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Write to [Discord](https://discord.gg/6GDAfXn) chat.

## Questions:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

Is it possible to use `switch` to compare something with regular expressions?

1. Yes
2. No

What comparison operator does `switch` use?

1. `=`
2. `===`
3. `==`

Which keyword stops the comparison process in `switch`?

1. `break`
2. `stop`
3. `default`

In order to understand how much you learned this lesson, take the test on the [mobile application](http://onelink.to/njhc95) of our school on this topic.

![Sumerian school](/img/app.jpg)

## Links

1.  [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/switch)
2.  [Learn JavaScript](https://learn.javascript.ru/switch)
3.  [Справочник JavaScript](https://javascript.ru/switch)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/FELiX-RN"><img src="https://avatars0.githubusercontent.com/u/72006627?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Philipp Dvinyaninov</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=FELiX-RN" title="Documentation">  </a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)
