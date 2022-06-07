---
id: reactnative11
title: Dimensions 
sidebar_label: Dimensions
---

import YouTube from 'react-youtube'

`useWindowDimensions` automatically updates the width and height values when the screen is resized. You can get the width and height of the application window like this:

```jsx
const windowWidth = useWindowDimensions().width
const windowHeight = useWindowDimensions().height
```

## Example

```SnackPlayer name=index.js
import React from "react"
import { View, StyleSheet, Text, useWindowDimensions } from "react-native"

const App = () => {
  const window = useWindowDimensions()
  return (
    <View style={styles.container}>
      <Text>{`Window Dimensions: height - ${window.height}, width - ${window.width}`}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default App
```

This is usually necessary in order to make the properties dynamic.

## Questions

What is the name of the hook for determining the value of the width and height when the screen is resized?

1. `useDimensions`
2. `winDimensions`
3. `useWindowDimensions`

To see how well you learned this lesson, take the test in the [mobile application](http://onelink.to/njhc95) of our school on this topic or in the [telegram bot](https://t.me/javascriptcamp_bot).

![JS Camp](/img/app.jpg)

## Links:

1. [React Native](https://reactnative.dev/docs/usewindowdimensions)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">📖💲</a></td>
  </tr>
</table>

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
