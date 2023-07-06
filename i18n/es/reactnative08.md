---
id: reactnative08
title: FlatList - list
sidebar_label: FlatList - list
---

import YouTube from 'react-youtube'

React Native provides a set of components for representing lists of data. Typically, you need to use either [FlatList](https://reactnative.dev/docs/flatlist) or [SectionList](https://reactnative.dev/docs/sectionlist).

The `FlatList` component displays a scrollable list of data that is changing but similar in structure. It works well with long lists of data, the number of elements of which can change over time. Unlike the more general `ScrollView`, `FlatList` only displays the items that are currently displayed on the screen, not all items at once.

The `FlatList` component requires two properties: `data` and `renderItem`.

- `data` - source of information for the list.

- `renderItem` takes one item from the source and returns a formatted component to render.

This example creates a basic `FlatList` of hardcoded data. Each item in the data props is displayed as a text component. The `FlatListBasics` component then displays the `FlatList` and all text components.

```SnackPlayer name=index.js
import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  )
}

export default FlatListBasics
```

More about the component [FlatList](https://reactnative.dev/docs/flatlist)

## Questions

Does the `FlatList` component display a scrollable list of data that is changing but similar in structure?

1. `true`
2. `false`

What is the name of the `FlatList` property that is the source of information for the list?

1. `list`
2. `data`
3. `renderItem`

What is the name of the `FlatList` property that takes one item from the source and returns a formatted component to render?

1. `list`
2. `data`
3. `renderItem`

To see how well you learned this lesson, take the test in the [mobile application](http://onelink.to/njhc95) of our school on this topic or in the [telegram bot](https://t.me/javascriptcamp_bot).

![Sumerian school](/img/app.jpg)

## Links:

1. [React Native](https://reactnative.dev/docs/platform-specific-code)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">  💲</a></td>
  </tr>
</table>

[![EnglishMoji!](/img/logo/englishmoji.png)](https://link-to.app/xvh7Ush9kl)
