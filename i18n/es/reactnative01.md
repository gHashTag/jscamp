---
id: reactnative01
title: React Native Basics
sidebar_label: React Native Basics
---

import YouTube from 'react-youtube'

React Native is similar to React, but it uses native components instead of web components as building blocks. To understand the basic structure of a Reactative application, you need to understand some basic React concepts such as JSX, components, state, and properties. If you're already familiar with React, you still need to learn some React Native-specific things, like native components. This tutorial is intended for any audience, whether you have experience with React or not.

## React Native Components

These are the building blocks of the `react-native` library from which we create the interface for applications.
Components allow you to split the UI into independent, reusable parts and with each of them separately.
Conceptually, components are similar to JavaScript functions.

## Function Components

The easiest way to declare a component is to write a JavaScript function:

```SnackPlayer name=index.js
import * as React from 'react'
import { Text } from 'react-native'

const App = () => (
  <Text>Hello world!</Text>
)

export default App
```

First of all, we need to import React in order to be able to use JSX, which will then be transformed into the native components of each platform.
In line 2, we import the `Text` component from `react-native`
Then we find the `App` function, which is a functional component and returns the `Text` component as its child.
If you're interested, you can play around with the sample code right in the web simulators. Also paste the code into the `index.js` or `App.js` (Expo) file to create a real application on your local machine.

React Native comes with ES2015 support, so you can use this stuff without worrying about the compatibility of import, export, const and from in the example above are all ES2015 functions. ES2015 (also known as ES6) is a collection of JavaScript enhancements that is now part of the official standard, but not yet supported by all browsers, so it is often not yet used in web development.

Another unusual thing about this code example:

```jsx
<Text>Hello world!</Text>
```

This is JSX - the syntax for embedding XML in JavaScript. Many frameworks use a specialized templating language that allows you to embed code into a markup language. In React, the opposite is true. JSX allows you to write your own markup language inside your code. This is similar to HTML on the web, except that instead of web things like `<div>` or `<h1>`, you are using React components. In this case, `<Text>` is the main component that displays some text.

## Why JSX?

React accepts the fact that rendering logic is essentially related to different UI logic: how events are handled, how state changes over time, and how data is prepared for display.
Instead of artificially separating technologies by putting markup and logic in separate files, React [shares responsibilities](https://ru.wikipedia.org/wiki/%D0%A0%D0%B0%D0%B7%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D0%BE%D1%82%D0%B2%D0%B5%D1%82%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D0%B8) with loosely coupled modules called "components" that contain markup and logic together. We'll come back to components in the next section, but if you're not very good at placing markup in JS yet, this talk may convince you otherwise.
React does not require the use of JSX, but most people find it useful as a visual demonstration when working with the user interface inside JavaScript code. It also allows React to show more helpful error and warning messages.

Once compiled, JSX expressions become regular JavaScript function calls and are evaluated to JavaScript objects.
This means that you can use JSX inside the `if` and` for` statements, assign it to variables, take it as arguments, and return it from functions:

```jsx
const getGreeting = user => {
  if (user) {
    return <Text>Привет!</Text>
  }
  return <Text>Hello</Text>
}
```

More on [JSX](https://ru.react.js.org/docs/introducing-jsx.html)

## Class Components

The second method of creating a component through classes has now become less popular due to the fact that the innovation [React Hooks](https://ru.reactjs.org/docs/hooks-intro.html) allows using state and other features of [React](https://ru.reactjs.org) without writing classes, so we abandoned them and this method will no longer be considered in this course.

```SnackPlayer name=index.js
import * as React from 'react'
import { Text } from 'react-native'

class App extends React.Component {
   render() {
     return <Text>Hello world!</Text>
  }
}

export default App
```

## Questions

React Native uses native components instead of React web components as building blocks?

1. `true`
2. `false`

React Native components are the building blocks of the library:

1. react
2. react-native

Conceptually, are components like JavaScript functions?

1. `true`
2. `false`

To be able to use JSX, you need to import and connect libraries

1. React
2. React Native
3. JSX

React Native comes with ES2015 support?

1. `true`
2. `false`

This is JSX - the syntax for embedding \_\_\_ in JavaScript.

1. HTML
2. XML
3. CSS

How many ways are there to create components?

1. 1
2. 2
3. 3

Are function components the preferred way to create components?

1. `true`
2. `false`

To see how well you learned this lesson, take the test in the [mobile application](http://onelink.to/njhc95) of our school on this topic or in the [telegram bot](https://t.me/javascriptcamp_bot).

![Sumerian school](/img/app.jpg)

## Links:

1. [React Native - official website](https://reactnative.dev/docs/tutorial)
2. [Learn React](https://learn-reactjs.ru/basics/components-and-props)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">📖💲</a></td>
  </tr>
</table>

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)
