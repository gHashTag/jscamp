---
id: reactnative03
title: Props - parameters
sidebar_label: Props - parameters
---

import YouTube from 'react-youtube'

Most of the components can be customized when they are created with various parameters. These creation options are named - `props`.

Your own components can also use `props`. This allows you to create a single component that will be used in many different places in your application, with slightly different properties in each place. To get their values, refer to `props.YOUR_PROP_NAME` in your functional components or `this.props.YOUR_PROP_NAME` in your class components. 

Here's an example:

```SnackPlayer name=index.js
import * as React from 'react'
import { Text } from 'react-native'

const HelloWorld = (props) => (
  <Text>Hello world {props.name}!</Text>
)

const App = () => (
  <>
    <HelloWorld name='Luk' />
    <HelloWorld name='John' />
    <HelloWorld name='Ivan' />
  </>
)

export default App
```

Using `name` as `props` allows us to customize the greeting component so that we can reuse that component for each of our greetings. This example also uses the JSX `HelloWorld` component. The ability to do this is what makes React so awesome.

### Only for reading

A component declared as a function or class should never modify its `props` properties. Consider this `sum` function:

```jsx
const sum = (a, b) => a + b
```

Such functions are called "clean". Because they don't change their arguments and always return the same result for the same arguments.

In contrast, the following function is not clean because it changes its arguments:

```jsx
const count => (account, amount) => account += amount
```

React is very flexible, but it has one strict rule:

:::tip
All React components should act as pure functions with respect to their `props` properties.
:::

## Questions

What are the parameters for creating a component called?

1. `prop`
2. `props`

A component declared as a function or class should never modify its `props` properties?

1. `true`
2. `false`

Should all React components work as pure functions with respect to their `props` properties?

1. `true`
2. `false`

To see how well you learned this lesson, take the test in the [mobile application](http://onelink.to/njhc95) of our school on this topic or in the [telegram bot](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

## Links:

1. [React Native - official website](https://reactnative.dev/docs/tutorial)
2. [Learn React](https://learn-reactjs.ru/basics/components-and-props)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">  💲</a></td>
  </tr>
</table>

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)
