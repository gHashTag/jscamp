---
id: redux-04
title: SearchBar
sidebar_label: SearchBar
---

## SearchBar
SearchBar из себя будет представлять поле для ввода названия и значок лупы. Он будет помогать ориентироваться по приложению. Из чего можно сделать вывод, что это очень нужная вещь, тем более если библиотека приложения очень большая.

## Видео

[![redux](/img/redux/04.gif)](https://youtu.be/jkKukSinD2I)

## Создаём файл SearchBar'а

Так как SearchBar очень уж похож на Header нужно сделать следующее: создаём копию файла Header.js в той же папке, что и сам Header и называем SearchBar.js.

## Редактируем код SearchBar
Мы создали файл, но чтобы SearchBar был им, а не вторым Header, нужно отредактировать код.

```jsx
import React from 'react'
import { TouchableOpacity, View, TextInput, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { w, BLUE } from '../../../constants'

const SearchBar  = ({
  iconRight,
  colorRight,
  onPressRight,
  onChangeText,
  placeholder,
  value,
  onBlur
}) => {
  const { container, sub, iconRightStyle, inputStyle, searchStyle } = styles
  return (
    <View style={container}>
      <View style={sub}>
       <TextInput
         onChangeText={onChangeText}
         style={inputStyle}
         placeholder={placeholder}
         value={value}
         onBlur={onBlur}
       />
      {iconRight &&
        <TouchableOpacity onPress={onPressRight}>
            <View style={searchStyle}>
         <MaterialCommunityIcons name={iconRight} style={[ iconRightStyle, { color: colorRight}]} />
         </View>
        </TouchableOpacity>
     }
      </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
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
  sub: {
      justifyContent: 'space-beetween',
      marginTop: 40,
      alignItems: 'center',
      flexDirection: 'row',
      width: w - 35,
      backgroundColor: '#fff',
      height: 40,
      borderRadius: 20
  },
  inputStyle: {
      fontSize:18,
      height: 23,
      width: w - 90,
      marginLeft: 15,
      backgroundColor: '#fff'
  },
  searchStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
      height: 40,
      width: 40,
      borderRadius: 20
  },
  iconRightStyle: {
    fontSize: 30,
    marginTop: 2
  }
})

export { SearchBar }
```
Код самого файла SearchBar мы поправили, теперь нужно поменять экспорты в общем index.js. Просто добавим строчку. 
```jsx
export * from './SearchBar' 
```

## Правка HomeScreen
Далее, чтобы SearchBar у нас отображался нужно порефакторить код HomeScreen. Сначало мы добавим импорт SearchBar, потом опять-таки добавим нужное и уберём лишнее. 
```jsx
import React, {Component, useState} from 'react'
import { View } from 'react-native'
import { Header, Layout, ImageCard, SearchBar } from '../components/uikit'
import {
  STARGATE_DETAILS
} from '../routes'

const url = 'https://api.tvmaze.com/search/shows?q=stargate'

export default class Main extends Component {
  state = {
    title: 'STAR GATE',
    data: [],
    visibleSearchBar: false
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
  _onChangeText = text => {
    console.log('text', text)
  }
  
  render() {
    const { title, data, visibleSearchBar } = this.state
    const { navigation } = this.props
    console.log('this.state', this.state)
    return (
      <View>
        {
          visibleSearchBar ?
          <SearchBar
           colorRight={'#fff'}
           iconRight="magnify"
           placeholder="Search"
           onChangeText={this._onChangeText}
           value={'movie'}
           onPressRight={() => useState({ visibleSearchBar: false})}
           onBlur={() => useState({ visibleSearchBar: true })}
          /> :
          <Header 
          title={title} 
          colorRight={'#fff'}
          iconRight="magnify" 
          onPress={() => navigation.openDrawer()}
          onPressRight={() => useState({ visibleSearchBar: true })}
        />
        }
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
В данном уроке мы создали SearchBar.
[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)