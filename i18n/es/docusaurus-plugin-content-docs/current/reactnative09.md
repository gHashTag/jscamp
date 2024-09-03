---
id: reactnative09
title: ScrollView
sidebar_label: ScrollView
---

import YouTube from 'react-youtube'

Если на экране перестали вмещаться все элементы, значит пришло время компонента `ScrollView`.

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

Подробнее о компоненте [ScrollView](https://reactnative.dev/docs/scrollview#reference)

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Проблемы?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Пишите в [Discord](https://discord.gg/6GDAfXn) или телеграмм [чат](https://t.me/jscampapp), а также подписывайтесь на наши [новости](https://t.me/javascriptapp)

<!-- ![JavaScript Camp](/img/bandlink.png) -->

## Вопросы

Если на экране перестали вмещаться все элементы, то в какой компонент их необходимо обернуть?

1. View
2. Flatlist
3. ScrollView

## Done 


## Ссылки:

1. [React Native](https://reactnative.dev/docs/platform-specific-code)

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)
