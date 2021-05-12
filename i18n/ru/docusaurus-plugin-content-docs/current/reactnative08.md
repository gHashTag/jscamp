---
id: reactnative08
title: FlatList - список
sidebar_label: FlatList - список
---

import YouTube from 'react-youtube'

React Native предоставляет набор компонентов для представления списков данных. Как правило, вам нужно использовать либо [FlatList](https://reactnative.dev/docs/flatlist), либо [SectionList](https://reactnative.dev/docs/sectionlist).

Компонент `FlatList` отображает прокручиваемый список изменяющихся, но схожих по структуре данных. Он хорошо работает с длинными списками данных, количество элементов которых может со временем меняться. В отличие от более общего `ScrollView`, `FlatList` отображает только те элементы, которые в данный момент отображаются на экране, а не все элементы сразу.

Компоненту `FlatList` требуются два свойства: `data` и `renderItem`.

- `data` - источник информации для списка.

- `renderItem` берет один элемент из источника и возвращает отформатированный компонент для рендеринга.

В этом примере создается базовый `FlatList` жестко закодированных данных. Каждый элемент в реквизитах данных отображается как текстовый компонент. Затем компонент `FlatListBasics` отображает `FlatList` и все текстовые компоненты.

<!-- ```SnackPlayer name=index.js
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

Подробнее о компоненте [FlatList](https://reactnative.dev/docs/flatlist)


## Проблемы?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Пишите в [Discord](https://discord.gg/6GDAfXn) или телеграмм [чат](https://t.me/jscampapp), а также подписывайтесь на наши [новости](https://t.me/javascriptapp)

 

## Вопросы

Компонент `FlatList` отображает прокручиваемый список изменяющихся, но схожих по структуре данных?

1. `true`
2. `false`

Как называется свойство `FlatList`, являющееся источником информации для списка?

1. `list`
2. `data`
3. `renderItem`

Как называется свойство `FlatList`, которое берет один элемент из источника и возвращает отформатированный компонент для рендеринга?

1. `list`
2. `data`
3. `renderItem`

## Done ✅

Чтобы узнать, насколько хорошо вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме или в [боте Telegram](https://t.me/javascriptcamp_bot).

![Sumerian school](/img/app.jpg)

## Ссылки:

1. [React Native](https://reactnative.dev/docs/platform-specific-code)

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291) -->

## Оплата

Сейчас ты находишся на урезанной версии сайта, после оформления подписки на [Patreon](https://www.patreon.com/javascriptcamp), ты получишь полный доступ к обучающему курсу, а также доступ к серетным каналам нашего сервера в [Discord](https://discord.gg/6GDAfXn).  

Качай наше [мобильное приложение](http://onelink.to/njhc95) или пройди тестирование в нашем [JavaScript телеграм боте](https://t.me/javascriptcamp_bot), а также подпишись на [наши новости](https://t.me/javascriptapp).

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)


[![Sumerian school](/img/app.jpg)](http://onelink.to/njhc95)

 

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):


<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">📖 💵</a></td>
  </tr>
</table>
