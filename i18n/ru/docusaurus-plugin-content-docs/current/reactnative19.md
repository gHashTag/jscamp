---
id: reactnative19
title: Практика - Stargate
sidebar_label: Практика - Stargate
---

import YouTube from 'react-youtube'

В этом уроке мы закрепим полученную теорию и создадим мобильное приложение которое получает фильмы с сервера и отображает их на экране.

![star gate](https://github.com/react-native-village/react-native-init/raw/master/stargate/init.gif)

Первое, что мы сделаем это сверстаем хедер. Компонент состоит из компонента `View` и `Text`. Вставьте этот код в файл `index.js`.

:::note
Обратите внимание, что название файла куда нужно писать код я пишу сверху в `LiveEditor`.
:::

```SnackPlayer name=index.js
import * as React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#30d0fe', // определяет цвет фона элемента
    justifyContent: 'center', // выравниваем дочерний элемент с текстом по центру
    paddingLeft: 22, // отступ слева
    shadowColor: '#000', // цвет тени
    shadowOffset: { width: 0, height: 2 }, //(iOS) Устанавливает смещение тени
    shadowOpacity: 0.2, // определяет прозрачность рамки
    elevation: 2, // (Android) Это добавляет тень к элементу и влияет на z-порядок перекрывающихся видов
    height: 90 // высота
  },
  textStyle: {
    color: '#fff', // цвет шрифта
    fontSize: 28 // размер шрифта
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
<!-- 
## State - useState

Теперь получим данные в хедер из состояния компонента `state` используя для этого хук `useState`

```SnackPlayer name=index.js
import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#30d0fe',
    justifyContent: 'center',
    paddingLeft: 22,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    height: 90
  },
  textStyle: {
    color: '#fff',
    fontSize: 28
  }
})

const App = () => {
  const [title, setTitle] = useState('STAR GATE')

  const { viewStyle, textStyle } = styles
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{title}</Text>
    </View>
  )
 }



export default App
```

## Архитектура приложения

Если мы все будем писать в одном файле `index.js`, то в скором времени нам сложно будет поддерживать приложение, так как количество кода на одной странице достигнет критического предела, что сломает ваш мозг.

Поэтому важно с самого начала создать удобную организационную структуру компонентов.

В общем я организую свои проекты так:

- `src/components` - это строительные блоки из которых строится приложение - UIKit.
- `src/screens` - это экраны на которых собирается приложение.
- `src/logic` - это слой бизнес логики и store.

## components

Исходя из архитектуры нашего проекта создаем папку `src`, в ней папку `components`, далее `Header` c файлом `index.js`. Где вспоминаем тему по [props](https://www.jscamp.app/docs/reactnative03) и передаем в хедер `title`

```jsx title="src/components/Header/index.js"
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#30d0fe',
    justifyContent: 'center',
    paddingLeft: 22,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    height: 90
  },
  textStyle: {
    color: '#fff',
    fontSize: 28
  }
})

const Header = ({ title }) => {
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{title}</Text>
    </View>
  )
}

export { Header }
```

### Точка входа

Чтобы не плодить лапшу из импортов:

```jsx
import Header from './src/components/Header'
import Card from './src/components/Card'
import Storage from './src/components/Storage'
```

Намного изящней импортировать их в одной строке, например так:

```jsx
import { Header, Card, Storage } from './src/components'
```

Для этого мы создаем в папке `./src/components` файл куда будет добавлять по аналогии с компонентом `Header` другие компоненты:

```jsx title="src/components/index.js"
export * from './Header'
```

## Импортируем код из UI Kit

Теперь можно импортировать компонент `Header` и проверить как все работает:

```jsx title="index.js"
import React from 'react'
import { Header } from './src/components' // здесь импортируем

const App = () => (
  <>
    <Header title="STAR GATE" />
  </>
)

export default App
```

## useEffect

Что если нам нужно отобразить данные с сервера?
Для этого мы используем хук `useEffect` в связке с `useState`, где мы:

1. Получаем данные с сервера через `fetch` в хуке `useEffect`
2. Передаем данные в хук `useState`

```jsx title="index.js"
import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Header } from './src/components'

const App = () => {
  const [data, setData] = useState('')

  useEffect(async () => {
    try {
      const response = await fetch('https://s3.eu-central-1.wasabisys.com/ghashtag/RNForKids/00-Init/data.json')
      const json = await response.json()
      setData(json)
    } catch (e) {
      console.log(e)
    }
  }, [])
  
  console.log(`data`, data)

  return (
    <View>
      <Header title="STAR GATE" />
    </View>
  )
}

export default App
```

Открываем [Debbuger](https://www.jscamp.app/docs/reactnative18), где видим полученные данные.

![data](/img/rn/data.jpg)

## ImageCard
Мы получили данные и теперь мы сверстаем компонет карточку `ImageCard` под отображение фильма.

```jsx title="src/components/ImageCard/index.js"
import React from 'react'
import { Image, View, Text, StyleSheet, Dimensions } from 'react-native'

const w = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    width: w / 2.4,
    top: 20
  },
  sub: {
    shadowColor: '#000',
    borderRadius: 10,
    backgroundColor: 'white',
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4
  },
  h1: {
    paddingVertical: 10,
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center'
  },
  cover: {
    width: w / 2.4,
    height: w * 0.63,
    borderRadius: 10
  }
})

const ImageCard = ({ data }) => {
  const { container, sub, h1, cover } = styles
  const { image, name } = data
  return (
    <View style={container}>
      <View style={sub}>
        <Image style={cover} source={{ uri: image }} />
      </View>
      <Text style={h1}>{name.toUpperCase()}</Text>
    </View>
  )
}

export { ImageCard }
```

![imageCard](/img/rn/imageCard.jpg)

## Flatlist

Вспоминаем из прошлых уроков компонент [FlatList](https://www.jscamp.app/docs/reactnative08) благодаря которому мы создаем список наших фильмов.

```jsx title="index.js"
import React, { useState, useEffect } from 'react'
import { View, FlatList, StyleSheet, Text } from 'react-native'
import { Header, ImageCard } from './components'

const App = () => {
  const [data, setData] = useState([])

  useEffect(async () => {
    try {
      const response = await fetch('https://s3.eu-central-1.wasabisys.com/ghashtag/RNForKids/00-Init/data.json')
      const json = await response.json()
      console.log(`json`, json)
      setData(json)
    } catch (e) {
      console.log(e)
    }
  }, [])

  return (
    <FlatList
      ListHeaderComponent={<Header title="STAR GATE" />}
      columnWrapperStyle={{ justifyContent: 'space-around' }}
      numColumns={2}
      data={data}
      renderItem={({ item }) => <ImageCard data={item} />}
      keyExtractor={item => item.id.toString()}
    />
  )
}

export default App
```

Из нового в нем мы видим свойства:

### ListHeaderComponent
Для отображения хэдера в списке используется свойство `ListHeaderComponent`, в которое мы передаем компонент `Header`.

### numColumns
Количество колонок.

### columnWrapperStyle
Это свойство стилизации обертки списка.

### keyExtractor
Используется для извлечения уникального ключа для данного элемента по указанному индексу. Ключ используется для кеширования и в качестве клавиши реагирования для отслеживания переупорядочения элементов. 
Эти уникальные ключи позволяют VirtualizedList (на которых построен FlatList) отслеживать элементы и действительно важны с точки зрения эффективности.

![imageCard](/img/rn/flatlist.jpg)

## Проблемы?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Пишите в [Discord](https://discord.gg/6GDAfXn) или телеграмм [чат](https://t.me/jscampapp), а также подписывайтесь на наши [новости](https://t.me/javascriptapp)

  -->

## Done ✅

Чтобы узнать, насколько хорошо вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме или в [боте Telegram](https://t.me/javascriptcamp_bot).

![Sumerian school](/img/app.jpg)

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)

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
