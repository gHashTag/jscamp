---
id: reactnative19
title: Practice - Stargate
sidebar_label: Practice - Stargate
---

import YouTube from 'react-youtube'

In this lesson, we will consolidate the obtained theory and create a mobile application that receives movies from the server and displays them on the screen.

![star gate](https://github.com/react-native-village/react-native-init/raw/master/stargate/init.gif)

The first thing we do is lay out the header. The component consists of the component `View` and` Text`. Paste this code into your `index.js` file.

:::note
Please note that I write the name of the file where the code should be written at the top in the `LiveEditor`.
:::

```SnackPlayer name=index.js
import * as React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#30d0fe', // defines the background color of an element
    justifyContent: 'center', // align the child with the text to the center
    paddingLeft: 22, // left indent
    shadowColor: '#000', // shadow color
    shadowOffset: { width: 0, height: 2 }, //(iOS) Sets the shadow offset
    shadowOpacity: 0.2, // defines the transparency of the frame
    elevation: 2, // (Android) This adds a drop shadow to the element and affects the z-order of overlapping views.
    height: 90 // height
  },
  textStyle: {
    color: '#fff', // font color
    fontSize: 28 // font size
  }
})

const App = () => {
  const { viewStyle, textStyle } = styles
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>STAR GATE</Text>
    </View>
  )
 }

export default App
```

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
