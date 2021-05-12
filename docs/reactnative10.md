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

## Payment

Now you are on a stripped-down version of the site, after subscribing to [Patreon](https://www.patreon.com/javascriptcamp), you will get full access to the training course, as well as access to our server's private channels in [Discord](https://discord.gg/6GDAfXn).

Download our [mobile application](http://onelink.to/njhc95) or get tested in our [JavaScript telegram bot](https://t.me/javascriptcamp_bot), and also subscribe to [our news](https://t.me/javascriptapp).

[![Become a Patron!](/Img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)


[![Sumerian school](/img/app.jpg)](http://onelink.to/njhc95)

![JavaScript Camp](/img/bandlink.png)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">📖💲</a></td>
  </tr>
</table>

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
