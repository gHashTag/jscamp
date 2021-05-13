---
id: reactnative04
title: Layout of components - Flexbox
sidebar_label: Layout of components - Flexbox
---

This is a new technology that already has fairly broad browser support. Flexbox provides tools to quickly create complex, flexible layouts, and features that were difficult in traditional CSS techniques. This article explains all the basics of this technology.

A component can specify the layout of its children using the Flexbox algorithm. Flexbox is designed to provide a consistent layout across different screen sizes.

Typically you will use a combination of `flexDirection`, `alignItems` and `justifyContent` to achieve the correct layout.

Before we continue, I suggest you play the game [Flexbox Froggy](https://flexboxfroggy.com/#ru). The task of the game is to move frogs onto lily leaves using the `flexbox` property.

![flexbox foggy](https://media-exp1.licdn.com/dms/image/C5612AQHTOPvO_L9DjA/article-inline_image-shrink_1000_1488/0/1549509849465?e=1619049600&v=beta&t=v5FfGyN3yTfpz7cjhQeX5Nj0jpy8Fu6j-6BE09lrLcg)

> Flexbox works in React Native just like it does CSS on the web, with a few exceptions. The defaults are different: `flexDirection` defaults to column instead of row, `alignContent` defaults to `flex-start` instead of `stretch`, `flexShrink` defaults to `0` instead of `1`, parameter `flex` only supports one number.

## Flex

flex will determine how your items will "fill" the available space along your main axis. The space will be split based on the flex property of each item.

In the following example, red, yellow, and green `View` are children in the container view set to `flex: 1`. The red view uses `flex: 1`, the yellow view uses `flex: 2`, and the green view uses `flex: 3`. 1 + 2 + 3 = 6, which means that the red view will take up 1/6 of the space, the yellow 2/6 of the space and the green 3/6 of the space.

```SnackPlayer name=index.js
import React from "react"
import { StyleSheet, Text, View } from "react-native"

const Flex = () => {
  return (
    <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"
    }]}>
      <View style={{ flex: 1, backgroundColor: "red" }} />
      <View style={{ flex: 2, backgroundColor: "darkorange" }} />
      <View style={{ flex: 3, backgroundColor: "green" }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
})

export default Flex
```

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
