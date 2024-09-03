---
id: redux-05
title: Boilerplate
sidebar_label: Boilerplate
---

## Redux Boilerplate

В данном уроке мы научимся создавать стандартный BoilerPlate шаблон для проектов Redux.
Первым делом создаём папку ./src/actions и файл index.js в ней. Как мы помним Actions является действиями пользователя. А для тех, кто забыл напомнит вот эта картинка
![redux](https://thumbs.gfycat.com/SociableCraftyAlpaca-max-1mb.gif)

## Видео

[![redux](/img/redux/05.gif)](https://youtu.be/qXfb62ik0_k)

## Написание кода файла ./src/action/index.js

```jsx
import SEARCH_CHANGE from '../types'

export const searchChanged = (text) => {
    console.log('text', text)
 return {
     type: SEARCH_CHANGE ,
     payload: text
 }
}
```

## Правка HomeScreen

```jsx title="./src/screen1/HomeScreen.js"
import React, {Component, useState} from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { searchChanged } from '../actions'
import { Header, Layout, ImageCard, SearchBar } from '../components/uikit'
import {
  STARGATE_DETAILS
} from '../routes'

const url = 'https://api.tvmaze.com/search/shows?q=stargate'
class HomeScreen extends Component {
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
    this.props.searchChanged(text)
  }
  
  render() {
    const { title, data, visibleSearchBar } = this.state
    const { navigation, movie } = this.props
    //console.log('this.props', this.props)
    return (
      <View>
        {
          visibleSearchBar ?
          <SearchBar
           colorRight={'#fff'}
           iconRight="magnify"
           placeholder="Search"
           onChangeText={this._onChangeText}
           value={movie}
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

const mapStateToProps = state => {
  return {
    movie: state.search.movie
  }
}

export default connect(mapStateToProps, { SearchChanged })(HomeScreen) 
```

## Cоздание и написание App.js

Создадим файл App.js.

Установим необходимые библиотеки

```jsx
yarn add redux-devtools-extension
```
```jsx
yarn add redux-thunk
```
Если вылезли ошибки, то пропишите заново/найдите их решение и опять-таки пропишите. Если всё прошло успешно, то погнали!

```jsx title="./App.js"
import React from 'react'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './src/reducers'
import Screen from './src/screen1'

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(ReduxThunk)
))

const App = () => { 
    return (
        <Provider store={store}>
            <Screen />
        </Provider>
    )
}

export default App
```

И соответственно поправим корневой index.js
 
```jsx
/** @format */

import {AppRegistry} from 'react-native'
import App from './App'
import {name as appName} from './app.json'

AppRegistry.registerComponent(appName, () => App)
```

## Создание Reducers

Для начала создадим ./src/reducers и в ней файл index.js
```jsx
import { combineReducers } from 'redux'
import SearchReducer from './SearchReducer'

export default combineReducers({
    search: SearchReducer
})
```
Далее создаём SearchReducer.js в той же папке
```jsx
import SEARCH_CHANGE from '../types'

const INITIAL_STATE = {
    movie: ''
}
export default (state = INITIAL_STATE, action) => {
    console.log('action', action)
    switch(action.type) {
        case SEARCH_CHANGE:
            return {
                ...state,
                movie: action.payload
            }
            default: return state
    }
}
```
## Cоздаём types.js

В папке src создаём файл types.js и пишем

```jsx
export const SEARCH_CHANGE = 'SEARCH_CHANGE'
```

В данном уроке мы научились создавать Boilerplate шаблон для проектов Redux.
[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)