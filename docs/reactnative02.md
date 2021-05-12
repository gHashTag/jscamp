---
id: reactnative02
title: Basic components
sidebar_label:  Basic components
---

import YouTube from 'react-youtube'

## Text

We've already seen this [React component](https://reactnative.dev/docs/text) for displaying text. `Text` supports nesting, styling and touch processing.

## Image

[React Component](https://reactnative.dev/docs/image) for displaying various types of images, including network images, static resources, temporary local images, and images from local disk.

```SnackPlayer name=index.js
import * as React from 'react'
import { Image } from 'react-native'

const App = () => (
  <Image style={{ width: 100, height: 100 }}
    source={{
      uri: 'https://reactnative.dev/img/tiny_logo.png',
    }}
  />
)

export default App
```

The height and width of a component determine its size on the screen. There are three ways to work with sizes: fixed sizes, flexible sizes, percentage sizes. More details about them [here](https://reactnative.dev/docs/height-and-width).

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
