---
id: javascript20
title: Destructuring arrays and objects
sidebar_label: Destructuring
---

![@serverSerrverlesskiy](/img/javascript/headers/30.jpg)

Destructuring in JavaScript is an assignment syntax that allows you to conveniently extract data from arrays and objects in one line.

## Object destructuring

![object](https://media.giphy.com/media/3o85xx7Yll3UyNVQf6/giphy.gif)

```jsx live
function learnJavaScript() {
  // Create a `fruit` object
  let fruit = {
    title: 'banana',
    group: 'tropical',
    quantity: 5
  }

  // Destructuring the `fruit` object
  let { title, group, quantity } = fruit

  // Display `title`
  return title
}
```

The properties `title`,` group` and `quantity` repeat the structure of the object` fruit` and copy their values into identical variables 🔔 found in `{...}`. Therefore, if you swap the variables 🔔 in `{...}`, then the code will work just as well, try swapping the variables 🔔 in the example above.

### Nested object

![bookmark](https://media.giphy.com/media/3og0IDyqVFNH7qFpAI/giphy.gif)

We can also destructure the nested object.

```jsx live
function learnJavaScript() {
  let fruit = {
    title: 'banana',
    group: 'tropical',
    quantity: {
      store: 5,
      storeHaus: 99
    }
  }

  let {
    title,
    quantity: { store: s1, storeHaus: s2 }
  } = fruit

  return title + ', ' + parseFloat(s1 + s2)
}
```

### Other names

If you need to use variable names 🔔 other than property names, the following syntax will work:

```jsx live
function learnJavaScript() {
  let fruit = {
    title: 'banana',
    group: 'tropical',
    quantity: 5
  }
  // title -> a; group -> b; quantity -> c
  let { title: a, group: b, quantity: c } = fruit

  return a
}
```

### Default values

If in `{...}` you write a property variable 🔔 which will not be found, then it will be assigned the value `undefined`. To assign a default value to a variable 🔔, you can assign that value to it. If you try to assign a value to a variable 🔔 whose properties are found, then the property value will be assigned to it. Let's look at an example.

![Dafault](https://media.giphy.com/media/3oEduLzte7jSNmq4z6/giphy.gif)

```jsx live
function learnJavaScript() {
  let fruit = {
    title: 'banana'
  }
  let { title = 'lime', group, quantity = 5 } = fruit

  return title + ', ' + group + ', ' + quantity
}
```

The `title` contains the property value, not what we assign to it. The `group` property does not exist in the` fruit` object, and we have not assigned any values to the variable 🔔. The property `quantity` also does not exist, but we assigned the value` 5` to the variable 🔔.

### Remainder

![octatok](https://media.giphy.com/media/hvddF1vHatFIgQspUB/giphy.gif)

If you need to get one variable 🔔 from an object, and group the rest into another object, then use `...` before the variable 🔔 from which the object with the remaining properties will be created.

```jsx live
function learnJavaScript() {
  let fruit = {
    title: 'banana ',
    group: 'tropical ',
    quantity: 5
  }
  let { group, ...prop } = fruit

  return prop.title + group
}
```

## Destructuring arrays

Destructuring of an array is the same as for an object. The only difference is that the values of the array elements will be assigned to the variables 🔔 in the order in which the elements are defined.

![Take](https://media.giphy.com/media/IuBlckSD7dQv6/giphy.gif)

```jsx live
function learnJavaScript() {
  // Create an array `fruit`
  let fruit = ['banana', 'tropical', 5]

  // Destruct the `fruit` array
  let [title, group, quantity] = fruit

  // Display
  return `${title}, ${group}, ${quantity}`
}
```

### Remainder

By analogy with objects, the remainder works.

```jsx live
function learnJavaScript() {
  let fruit = ['banana ', 'tropical ', 5]

  let [name, ...prop] = fruit

  return `${name}, ${prop}`
}
```

### Copy of array

An example of creating a copy of an array.

![Copia](https://media.giphy.com/media/GI1KnTxySlrCE/giphy.gif)

```jsx live
function learnJavaScript() {
  let fruit = ['banana ', 'tropical ', 5]

  let _fruit = [...fruit]

  return _fruit
}
```

### Concatenating arrays

![add](https://media.giphy.com/media/3gMrhfFtWHq9XxtqPy/giphy.gif)

An example of combining arrays into one.

```jsx live
function learnJavaScript() {
  let name = ['banana '],
    prop = ['tropical ', 5],
    fruit = [...name, ...prop]

  return fruit
}
```

 [![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

## Problems?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Write to [Discord](https://discord.gg/6GDAfXn) chat.

## Questions:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

Destructuring is it?

1. Function
2. Syntax
3. Object

Is it necessary, when destructuring an object, to put variables in the same order as they are in the object?

1. Yes
2. No

What will be assigned to a variable if no identical property is found in the object?

1. `error`
2. `undefined`
3. `unknown`

Is the order of elements in an object important when it is destructed?

1. Yes
2. No

In order to understand how much you learned this lesson, take the test in the [mobile application](http://onelink.to/njhc95) of our school on this topic or in our [telegram bot](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

## Links

1. [Learn JavaScript](https://learn.javascript.ru/destructuring-assignment)
2. [MDN Web Docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
3. [Destructuring in ES6](https://medium.com/@stasonmars/деструктуризация-в-es6-полное-руководство-b865bb71f376)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr> 
    <td align="center"><a href="https://github.com/IIo3iTiv"><img src="https://avatars1.githubusercontent.com/u/72025062?v=4?s=200" width="200px;" alt=""/><br /><sub><b>IIo3iTiv</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=IIo3iTiv" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)
