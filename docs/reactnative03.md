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

## Payment

Now you are on a stripped-down version of the site, after subscribing to [Patreon](https://www.patreon.com/javascriptcamp), you will get full access to the training course, as well as access to our server's private channels in [Discord](https://discord.gg/6GDAfXn).

Download our [mobile application](http://onelink.to/njhc95) or get tested in our [JavaScript telegram bot](https://t.me/javascriptcamp_bot), and also subscribe to [our news](https://t.me/javascriptapp).

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)


[![Sumerian school](/img/app.jpg)](http://onelink.to/njhc95)

 

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">📖💲</a></td>
  </tr>
</table>

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
