---
id: reactnative10
title: React Hooks 
sidebar_label: React Hooks
---

import YouTube from 'react-youtube'

## Application state

In this section, we will talk about such an extremely important element of the application at the present time as the state. React gives us the ability to work with the state of a component. A child component can learn about a change in the parent's state via `props`. But what if the components do not have a common ancestor? The application constantly receives and sends data to the server, how many components can know about it? Is it possible to store application data in some centralized repository so that the desired components can access it? These and many similar questions are not unfounded. They require serious consideration, as they inevitably arise as the application grows.

Nowadays, the requirements for single page JavaScript applications are becoming more and more complex. Because of this, our code needs to have and manage state more than ever. State can include server responses, cached data, and data generated locally but not yet stored on the server. The structure of the state also becomes more and more complex, since we need to manage active routes, selected tabs, spiners, pagination controls, and so on.

Hooks are new in React 16.8 that allow you to use state and other React features without writing classes. These are functions with which you can hook into React state and lifecycle methods from functional components.

:::caution
Hooks don't work inside classes - they give you the ability to use React without classes.
:::

## useState - State hook 📌

The first hook we'll look at is the `useState` function.

```SnackPlayer name=index.js
import React, { useState } from 'react'
import { Text, Button } from 'react-native'

const App = () => {
  // Объявление переменной состояния, которую мы назовём "count"
  const [count, setCount] = useState(0)

  return (
    <>
      <Text>Вы кликнули {count} раз</Text>
      <Button title="Нажми на меня" onPress={() => setCount(count + 1)} />
    </>
  )
}


export default App
```

In this example, `useState` is a hook. We call it to endow our functional component with internal state. React will keep this state between renders. The call to `useState` returns an array with two elements, which contains: the current value of the state (getter) and a function to update it (setter). This function can be used anywhere, for example, in an event handler.
The only argument to useState is the initial state. In the example above, this is `0`, since our counter starts at zero. The original argument value is used only on the first render.

## useEffect - Effect hook ⚡️

You've most likely had the experience of querying data, subscribing, or manually modifying the DOM from a React component before. We regard these operations as "side effects" (or "effects" for short), since they can affect the operation of other components and cannot be performed at render time.
With the `useEffect` hook, you can execute side effects from a functional component.

For example, this component receives data from the server and displays it in the `FlatList` component. In order to see the data in the preview, you need to select the device `iOS` or `Android` as desired.

```SnackPlayer name=index.js
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Text, View } from 'react-native'

const App = () => {
  const [data, setData] = useState([])

  useEffect(async () => {
    let response = await fetch('https://reactnative.dev/movies.json')
    let json = await response.json()
    setData(json.movies)
  }, [])

  return (
    <View style={{flex: 1, padding: 24}}>
      <FlatList
        data={data}
        keyExtractor={({id}, index) => id}
        renderItem={({item}) => (
          <Text>
            {item.title}, {item.releaseYear}
          </Text>
        )}
      />
    </View>
  )
}

export default App
```

## Hook rules

Hooks are regular JavaScript functions, but there are two rules to follow.

### Only use hooks at the top level

Don't call hooks inside loops, conditionals, or nested functions. Instead, always use hooks only inside React functions, before returning any value from them. This rule ensures that the hooks are called in the same sequence each time the component is rendered. This will allow React to properly persist the hook state between multiple calls to `useState` and `useEffect`.

### Only call hooks from React functions

Don't call hooks from regular JavaScript functions. Instead, you can:

-  Call hooks from a functional React component.
-  Call hooks from a custom hook.
  By following this rule, you can ensure that all of the component state logic is clearly visible from the source code.

To follow the rules of hooks, use the [ESLint plugin](https://ru.reactjs.org/docs/hooks-rules.html#eslint-plugin)

Read about how to create a custom hook yourself [here](https://ru.reactjs.org/docs/hooks-custom.html)

## Questions

Functions with which you can hook into React state and lifecycle methods from functional components?

1. Hooks
2. Trailers
3. Hooks

Hooks are an innovation in React that allows you to use state and other React features without writing c version classes:

1. React 16.5
2. React 16.8
3. React 16.9

What is the application state hook called?

1. `useState`
2. `useEffect`
3. `useReduce`

What hook can you use to execute side effects from a functional component?

1. `useState`
2. `useEffect`
3. `useReduce`

Are hooks called from loops, conditionals, or nested functions?

1. `true`
2. `false`

Hooks can only be called from React functions?

1. `true`
2. `false`

To see how well you learned this lesson, take the test in the [mobile application](http://onelink.to/njhc95) of our school on this topic or in the [telegram bot](https://t.me/javascriptcamp_bot).

![Sumerian school](/img/app.jpg)

## Links:
1. [React Native](https://ru.reactjs.org/docs/hooks-intro.html)
2. [Learn React](https://learn-reactjs.ru/training-project/app-state)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">  💲</a></td>
  </tr>
</table>

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)
