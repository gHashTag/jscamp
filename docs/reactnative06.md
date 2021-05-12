---
id: reactnative06
title: Click Events - Buttons
sidebar_label: Click Events - Buttons
---

import YouTube from 'react-youtube'

A surface on the screen that is clicked as an event that triggers a response from the associated action.

## Button

A basic button component that should render well on any platform. Maintains the minimum level of customization.

If this button is not suitable for your application, you can create your own button using [TouchableOpacity](https://reactnative.dev/docs/touchableopacity) or [TouchableWithoutFeedback](https://reactnative.dev/docs/touchablewithoutfeedback). Check out the source code for this button component for inspiration. Or take a look at the wide range of [community made](https://js.coach/?menu%5Bcollections%5D=React%20Native&page=1&query=button) button components .

```SnackPlayer name=index.js
import React from 'react'
import { Button } from 'react-native'

const App = (props) => (
  <Button title="Press me" onPress={() => {}} />
)

export default App
```

## Props

### onPress

A handler to be called when the user clicks the button.

| Type                               |
| ---------------------------------- |
| function([PressEvent](pressevent)) |

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
