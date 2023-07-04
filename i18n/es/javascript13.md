---
id: javascript13
title: Default parameters
sidebar_label: Default parameters
---

![@serverSerrverlesskiy](/img/javascript/headers/25.jpg)

Default parameters allow you to set default values for function parameters if the function is called without arguments, or if the parameter is explicitly passed the value `undefined`.

![Teacher](https://media.giphy.com/media/3ohc10nduj1irsuzgA/giphy.gif)

In JavaScript, function parameters⚙️ that are not passed values when called are defaulted to `undefined`. However, in some cases it may be useful to set a different default value. This is where the default options are intended.

## Syntax

![book](https://media.giphy.com/media/l0HlOBZcl7sbV6LnO/giphy.gif)

```jsx live
function learnJavaScript() {
  const multiply = (a, b = 1) => {
    // The default value b is 1
    return a * b
  }
  // If b is undefined, then it will be assigned a default value
  return multiply(5, 2) // remove the comma, second argument and get 5 + 1
}
```

### Passing other "false" values

![basketball](https://media.giphy.com/media/3oEdv5e5Zd2gsczAhG/giphy.gif)

If any value other than `undefined` is passed to the formal parameter during the call, including one of the" false "values such as false ❎,` 0`, `" "`, `''`, `null`,`NaN`, then in this case the default value will not be assigned to the parameter. In this case, you need to write the code yourself that will catch these "false values".

## Examples of

![Math](https://media.giphy.com/media/xT1Ra5h24Eliux3UVq/giphy.gif)

In the default parameters, you can use the values of the previous (located to the left in the list) parameters:

```jsx live
function learnJavaScript() {
  const greet = (name, greeting, message = greeting + ' ' + name) => {
    return [name, greeting, message]
  }

  return greet('David ', 'Hi ')
}
```

An example of a function with and without default parameters 👇:

```jsx live
function learnJavaScript() {
  const withDefaults = (a = 1, b = 3, c = 2) => {
    // Function with default parameters
    return [a, b, c]
  }
  const withoutDefaults = (a, b, c) => {
    // Function without default parameters
    if (a == undefined) {
      a = 1
    }
    if (b == undefined) {
      b = 3
    }
    if (c == undefined) {
      c = 2
    }
    return [a, b, c]
  }

  return withDefaults()
}
```

The result will be the same, but without default parameters, the code📟 can become noticeably larger.

 [![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

## Problems?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Write to [Discord](https://discord.gg/6GDAfXn) chat.

## Questions:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

If no value is passed to function parameters⚙️, what is their default value?

1. `null`
2. `undefined`
3. `NaN`

Are the default parameters "catching" false values?

1. Yes
2. No

Is it possible to use the values of the parameters located to the left of the list in the default parameters?

1. Yes
2. No

In order to understand how much you learned this lesson, take the test on the [mobile application](http://onelink.to/njhc95) of our school on this topic.

![Sumerian school](/img/app.jpg)

## Links

1.  [MDN web docs](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Default_parameters)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/FELiX-RN"><img src="https://avatars0.githubusercontent.com/u/72006627?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Philipp Dvinyaninov</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=FELiX-RN" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)
