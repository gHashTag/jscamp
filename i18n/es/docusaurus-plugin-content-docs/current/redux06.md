---
id: redux-06
title: Thunk
sidebar_label: Thunk
---

## Redux Thunk

Это middleware, который позволяет нам создовать асинхронные действия, асинхронные action, потому что сам JavaScript у нас синхронный. Соответсвенно, чтобы выполнять асинхронные действия нужно использовать это промежуточное ПО. 

## Видео

[![redux](/img/redux/06.gif)](https://youtu.be/-eE3ySQIV80)

## Установка

В прошлом уроке, если вы не забыли мы подключили библиотек redux-thunk, если вы каким-то образом забыли об этом пункте просто пропишите в терминал

```jsx
yarn add redux-thunk
```

## Добавление actions

```jsx title="../src/types.js"
export const SEARCH_CHANGE = 'SEARCH_CHANGE'
export const MOVIES_FETCHED = 'MOVIES_FETCHED'
export const MOVIES_FAILED = 'MOVIES_FAILED'
```

```jsx title="../src/actions/index.js"
import {
    SEARCH_CHANGE,
    MOVIES_FAILED,
    MOVIES_FETCHED
} from '../types'

export const searchChanged = (text) => {
    console.log('text', text)
 return {
     type: SEARCH_CHANGE ,
     payload: text
 }
}

export const gerMovies = (text) => async (dispatch) => {
    function onSuccess(success) {
        dispatch({ type: MOVIES_FETCHED, payload: success})
    }
    function onError(error){
        dispatch({ type: MOVIES_FAILED, error })
    }
    try{
     const URL = 'https:/appi.tvmaze.com/search/show?q=${text}'
     const res = await fetch(URL, { method: 'GET' })
     const success = await res.json()
     console.log('success', success)
     return onSuccess(success)
    }catch(error) {
     return onError(error)   
    }
}
```
## Правка SearchReducer.js

```jsx title="../src/reducers/SeachReducers.js"
import { SEARCH_CHANGE, MOVIES_FETCHED, MOVIES_FAILED } from '../types'

const INITIAL_STATE = {
  movie: '',
  data: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_CHANGE:
      return {
        ...state,
        movie: action.payload
      }
    case MOVIES_FETCHED:
      return {
        ...state,
        data: action.payload
      }
    case MOVIES_FAILED:
      return {
        ...state
      }
    default:
      return state
  }
}
```

## Правка HomeScreen.js

```jsx title="../src/screen1/HomeScreen.js"
import React, { Component, useState } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { searchChanged, getMovies } from '../actions'
import { Header, Layout, ImageCard, Search } from '../components/uikit'
import { STARGATE_DETAILS } from '../routes'

class HomeScreen extends Component {
  state = {
    visibleSearchbar: false
  }

  onSearchChange = text => {
    this.props.searchChanged(text)
    this.props.getMovies(text)
  }

  render() {
    const { visibleSearchbar } = this.state
    const { navigation, movie, data } = this.props
    //console.log('this.props', this.props)
    return (
      <View>
        {visibleSearchbar ? (
          <Search
            colorRight="#fff"
            iconRight="magnify"
            placeholder="Search"
            onChangeText={this.onSearchChange}
            value={movie}
            onPressRight={() => useState({ visibleSearchbar: false })}
            onBlur={() => useState({ visibleSearchbar: false })}
          />
        ) : (
          <Header
            title={movie || 'Search'}
            colorRight="#fff"
            iconRight="magnify"
            onPressRight={() => useState({ visibleSearchbar: true })}
          />
        )}
        <Layout>
          {data.map(item => (
            <ImageCard
              data={item.show}
              key={item.show.id}
              onPress={() => navigation.navigate(STARGATE_DETAILS, { show: item.show })}
            />
          ))}
        </Layout>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  movie: state.search.movie,
  data: state.search.data
})

export default connect(
  mapStateToProps,
  { searchChanged, getMovies }
)(HomeScreen)
```

## Правка ImageCard.js

Для корректной работы Thunk нужно порефакторить и ImageCard.

```jsx title="../src/components/ImageCard.js"
import React from 'react'
import { TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native'
import { W } from '../../../constants'

const styles = StyleSheet.create({
  container: {
    width: W / 2.4,
    paddingVertical: 10
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
    paddingTop: 10,
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center'
  },
  cover: {
    width: W / 2.4,
    height: W * 0.63,
    borderRadius: 10
  }
})

const ImageCard = ({ data, onPress }) => {
  const { container, sub, h1, cover } = styles
  const { image, name } = data
  const img = image === null ? 'http://fcrmedia.ie/wp-content/themes/fcr/assets/images/default.jpg' : image
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={container}>
        <View style={sub}>
          <Image style={cover} source={{ uri: img }} />
        </View>
        <Text style={h1}>{name.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  )
}

export { ImageCard }
```
В данном уроке мы добавили стороннее ПО Redux Thunk.
[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)