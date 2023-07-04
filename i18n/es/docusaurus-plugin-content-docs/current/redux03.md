---
id: redux-03
title: Header
sidebar_label: Header
---

## Header
В данном уроке мы адаптируем наш прошлый Header под этот курс. Если кто не помнит Header'ом называют "шапку" сайта, верхнюю часть веб-страницы. Погнали! 

## Видео

[![redux](/img/redux/03.gif)](https://youtu.be/ycNdEtBMooA)

## Добавим импорт иконок
Добавляем строчки в файл Header.js:
```jsx
import from MaterialCommunityIcons from 'react-native-init/MaterialCommunityIcons'
```
И
```jsx
import { w, BLUE } from '../../../constants'//добавляем импорт BLUE
```
## Правка кода
Заменяем всё написанное так же в Header.js на это 
```jsx
import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { w, BLUE } from '../../../constants'

const Header = ({
  iconLeft,
  iconRight,
  colorLeft,
  colorRight,
  title,
  onPressLeft,
  onPressRight
}) => {
  const { container, textStyle, iconLeftStyle, iconRightStyle } = styles
  return (
    <View style={container}>
      {iconLeft &&
        <TouchableOpacity onPress={onPressLeft}>
          <Ionicons name={iconLeft} style={iconLeftStyle} color={colorLeft} />
        </TouchableOpacity>
      }
      <Text numberOfLines={1} ellipsizeMode="tail" style={textStyle}>{title}</Text>
      {iconRight &&
        <TouchableOpacity onPress={onPressRight}>
         <MaterialCommunityIcons name={iconRight} style={[ iconRightStyle, { color: colorRight}]} />
        </TouchableOpacity>
     }
     <Text numberOfLines={1} ellipsizeMode="tail" style={textStyle}>{title}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    paddingHorizontal: 20,
    backgroundColor: BLUE,
    position: 'relative',
    ...ifIphoneX({
      height: 122
    }, {
      height: 90
    })
  },
  textStyle: {
    color: '#fff',
    fontSize: 28,
    width: w - 75,
    fontFamily: 'AvenirNext-DemiBold',
    ...ifIphoneX({
      paddingTop: 75 
    }, {
      paddingTop: 40
    })
  },
  iconLeftStyle: {
    ...ifIphoneX({
      paddingTop: 75 
    }, {
      paddingTop: 40
    }),
    fontSize: 35
  },
  iconRightStyle: {
    ...ifIphoneX({
      paddingTop: 75 
    }, {
      paddingTop: 44
    }),
    fontSize: 30,
    marginRight: 3
  }
})

export { Header }
```

## Правим HomeScreen

В файл HomeScreen.js вставляем данный текст, советую посмотреть изменения. Этим уже мы изменим HomeScreen, что достаточно логично
```jsx
import React, {Component} from 'react'
import { View } from 'react-native'
import { Header, Layout, ImageCard } from '../components/uikit'
import {
  STARGATE_DETAILS
} from '../routes'
import { BLUE, WHITE } from '../../constants'

const url = 'https://api.tvmaze.com/search/shows?q=stargate'

export default class Main extends Component {
  state = {
    title: 'STAR GATE',
    data: []
  }

  componentDidMount = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      useState({ data })
    } catch (e) {
      throw e
    }
  }

  onGoBack = (someDataFromChildren) => {
    console.log('someDataFromChildren', someDataFromChildren)
  }

  render() {
    const { title, data } = this.state
    const { navigation } = this.props
    console.log('this.state', this.state)
    return (
      <View>
        <Header 
          title={title} 
          colorRight={'#fff'}
          iconRight="magnify" 
          onPress={() => navigation.openDrawer()}
        />
        <Layout>
          { data.map(item => (
            <ImageCard
              data={item.show}
              key={item.show.id}
              onPress={() => navigation.navigate(STARGATE_DETAILS, ({ show: item.show, onGoBack: this.onGoBack}))}
            />
          ))}
        </Layout>
      </View>
    )
  }
}
```

## Правка DetailsScreen

```jsx
import React, { PureComponent } from 'react'
import { View, ScrollView, Text, StyleSheet } from 'react-native'
import { Header, ImageBigCard } from '../components/uikit'
import { WHITE, BLUE, w } from '../../constants'

export default class DelailsScreen extends PureComponent {
  componentWillUnmount() {
    const { onGoBack } = this.props.navigation.state.params
    onGoBack && onGoBack('Hello from children')
  }

  render() {
    const { show } = this.props.navigation.state.params
    const { image, name, summary} = show
    const { navigation } = this.props
    const data = { image, name }
    const { container, sub, h1, h2 } = styles 
    return (
      <View style={container}>
        <Header
          detail
          title={name}
          onPress={() => navigation.goBack()}
          iconLeft='ios-arrow-back'
          headerColor={BLUE}
          colorLeft={WHITE}
        />
        <ScrollView>
          <View style={sub}>
            <ImageBigCard data={data} />
            <Text style={h1}>{name.toUpperCase()}</Text>
            <Text style={h2}>{summary.replace(/<[^>]+>/g, '')}</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE
  },
  sub: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 150,
    backgroundColor: WHITE
  },
  cover: {
    width: w,
    height: w * 1.5,
    borderRadius: 10
  },
  h1: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 30,
    padding: 15,
    textAlign: 'center'
  },
  h2: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 15,
    textAlign: 'center',
    color: 'grey',
    paddingHorizontal: 15
  }
})
```

В данном уроке мы изменили иконки и в соответствии к этому поправили код, относящийся к хедеру.
[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)