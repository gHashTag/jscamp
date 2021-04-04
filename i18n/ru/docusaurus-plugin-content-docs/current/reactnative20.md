---
id: reactnative20
title: Selector
sidebar_label: Selector
---

Бывает, что нужно выбрать одно из множества. Для этого я предлагаю решение.

![selector](https://miro.medium.com/max/4800/1*egojVEXa1_MOTvg521DsOg.gif)

```jsx
import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const data = [
  {
    id: 1,
    title: 'gold'
  },
  {
    id: 2,
    title: 'pink'
  },
  {
    id: 3,
    title: 'green'
  }
]

const numbers = ['one', 'two', 'three']

const App = () => {
  const [value, setValue] = useState({
    one: true,
    two: false,
    three: false
  })

  const _onChangeState = number => () => {
    const defaultObject = numbers.reduce((acc, el) => ({ ...acc, [el]: false }), {})
    setValue({ ...defaultObject, [numbers[number - 1]]: true })
  }

  return (
    <View style={styles.container}>
      {data.map(({ id, title }) => {
        const check = value[numbers[id - 1]]
        return (
          <TouchableOpacity key={id} onPress={_onChangeState(id)}>
            <Text style={check ? styles[title] : styles.default}>{`${check}`}</Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gold: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 40,
    backgroundColor: 'gold',
    alignSelf: 'center',
    width: 300
  },
  pink: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 40,
    backgroundColor: 'pink',
    width: 300
  },
  green: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 40,
    backgroundColor: 'green',
    width: 300
  },
  default: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 40,
    width: 300
  }
})

export default App
```

## Done ✅

Чтобы узнать, насколько хорошо вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме или в [боте Telegram](https://t.me/javascriptcamp_bot).

![Sumerian school](/img/app.jpg)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">📖💲</a></td>
  </tr>
</table>

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
