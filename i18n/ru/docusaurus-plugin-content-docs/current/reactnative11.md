---
id: reactnative11
title: Dimensions 
sidebar_label: Dimensions
---

import YouTube from 'react-youtube'

  <YouTube videoId="-mGB0-07YM8" />

`useWindowDimensions` автоматически обновляет значения ширины и высоты при изменении размера экрана. Вы можете получить ширину и высоту окна приложения следующим образом:

```jsx
const windowWidth = useWindowDimensions().width
const windowHeight = useWindowDimensions().height
```

## Пример

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

Обычно это необходимо, для того чтобы сделать свойства динамическими.

## Вопросы

Как называется хук для определения значения ширины и высоты при изменении размера экрана?

1. `useDimensions`
2. `winDimensions`
3. `useWindowDimensions`

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

## Проблемы?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Пишите в [Discord](https://discord.gg/6GDAfXn) или телеграмм [чат](https://t.me/jscampapp), а также подписывайтесь на наши [новости](https://t.me/javascriptapp)

![JavaScript Camp](/img/bandlink.png)

## Done ✅

Чтобы узнать, насколько хорошо вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме или в [боте Telegram](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

## Ссылки:

1. [React Native](https://reactnative.dev/docs/usewindowdimensions)

