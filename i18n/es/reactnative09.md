---
id: reactnative09
title: ScrollView
sidebar_label: ScrollView
---

import YouTube from 'react-youtube'

If the screen has ceased to fit all the elements, then the time has come for the `ScrollView` component.

```SnackPlayer name=index.js
import React from 'react'
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native'

const App = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
      </Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'gold',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
})

export default App
```

More about the [ScrollView](https://reactnative.dev/docs/scrollview#reference) component.

## Questions

If all the elements have ceased to fit on the screen, then in which component do they need to be wrapped?

1. `View`
2. `Flatlist`
3. `ScrollView`

To see how well you learned this lesson, take the test in the [mobile application](http://onelink.to/njhc95) of our school on this topic or in the [telegram bot](https://t.me/javascriptcamp_bot).

![Sumerian school](/img/app.jpg)

## Links:

1. [React Native](https://reactnative.dev/docs/platform-specific-code)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">📖💲</a></td>
  </tr>
</table>

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)
