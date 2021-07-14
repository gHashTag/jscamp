---
id: redux-05
title: Boilerplate
sidebar_label: Boilerplate
---

## Redux Boilerplate

Первым делом создаём папку ./src/actions и файл index.js в ней. Как мы помним Actions является действиями пользователя. А для тех, кто забыл напомнит вот эта картинка
![redux](https://thumbs.gfycat.com/SociableCraftyAlpaca-max-1m..)]

## Написание кода файла ./src/action/index.js

```jsx
import { 
SEARCH_CHANGE,
MOVIES_FETCHED,
MOVIES_FAILED
} from '../types'

export const searchChanged = (text) => {
return {
type: SEARCH_CHANGE,
payload: text
}
} 

export const getMovies = (text) => async (dispatch) => {
function onSuccess(success) {
dispatch({ type: MOVIES_FETCHED, payload: success })
return success
}
function onError(error) {
dispatch({ type: MOVIES_FAILED, error })
return error
}
try {
const URL = `https://api.tvmaze.com/search/shows?q=${text}`
const res = await fetch(URL, {
method: 'GET'
})
const success = await res.json()
return onSuccess(success)
} catch (error) {
return onError(error)
}
```

## Правка HomeScreen

```jsx=./src/screen1/HomeScreen.js
import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'
import { 
searchChanged,
getMovies
} from '../actions'
import { Header, Layout, ImageCard, Search } from '../components/uikit'
import {
STARGATE_DETAILS
} from '../routes'

const url = 'https://api.tvmaze.com/search/shows?q=stargate'

class HomeScreen extends Component {
state = {
data: [],
visibleSearchbar: false
}

componentDidMount = async () => {
try {
const response = await fetch(url)
const data = await response.json()
this.setState({ data })
} catch (e) {
throw e
}
}

onSearchChange = (text) => {
this.props.searchChanged(text)
this.props.getMovies(text)
}

render() {
const { visibleSearchbar } = this.state
const { navigation, movie, data } = this.props
//console.log('this.props', this.props)
return (
<View>
{ visibleSearchbar ?
<Search
colorRight={'#fff'}
iconRight="magnify"
placeholder="Search"
onChangeText={this.onSearchChange}
value={movie}
onPressRight={() => this.setState({ visibleSearchbar: false })}
onBlur={() => this.setState({ visibleSearchbar: false })}
/> :
<Header
title={movie ? movie : 'Search'} 
colorRight={'#fff'}
iconRight="magnify"
onPressRight={() => this.setState({ visibleSearchbar: true })}
/> 
}
<Layout>
{ data.map(item => (
<ImageCard
data={item.show}
key={item.show.id}
onPress={() => navigation.navigate(STARGATE_DETAILS, ({ show: item.show }))}
/>
))}
</Layout>
</View>
)
}
}

const mapStateToProps = state => {
return {
movie: state.search.movie,
data: state.search.data
}
}

export default connect(mapStateToProps, { searchChanged, getMovies })(HomeScreen)
```

## Правим App.js

Установим необходимые библиотеки

```jsx
yarn add redux-devtools-extension
```
```jsx
yarn add redux-thunk
```

```jsx=./App.js
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
## Создание Reducers

Для начал создадим ./src/reducer и в ней файл index.js
```jsx
import { combineReducers } from 'redux'
import SearchReducer from './SearchReducer'

export default combineReducers({
search: SearchReducer
})
```
Далее создаём SearchReducer.js в той же папке
```jsx
import { 
SEARCH_CHANGE,
MOVIES_FETCHED,
MOVIES_FAILED
} from '../types'

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
default: return state
}
}
```