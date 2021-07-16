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

В прошлом уроке, если вы не забыли мы подключили библиотек redux-thunk

## Добавление actions

```jsx=../src/types.js
export const SEARCH_CHANGE = ‘SEARCH_CHANGE'
export const MOVIES_FETCHED = ‘MOVIES_FETCHED'
export const MOVIES_FAILED = ‘MOVIES_FAILED'
```

```jsx=../src/actions/index.js
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
}
```
## Правка SearchReducer.js

```jsx=../src/reducers/SeachReducers.js
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

## Правка HomeScreen.js

```jsx=../src/components/uikit/HomeScreen.js
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

## Правка ImageCard.js

```jsx=../src/components/ImageCard.js
import React from 'react'
import { TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native'
import { W } from '../../../constants'

const ImageCard = ({ data, onPress}) => {
const { container, sub, h1, cover } = styles
const { image, name } = data
const img = image === null ? 'https://fcrmedia.ie/wp-content/themes/fcr/assets/images/defau..' : `https${image.medium.slice(4)}`
return (
<TouchableOpacity onPress={onPress}>
<View style={container}>
<View style={sub}>
<Image style={cover} source={{ uri: img }} />
</View>
<Text
style={h1}>{name.toUpperCase()}</Text>
</View>
</TouchableOpacity>
)
}

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
shadowOffset: { width: 0, height: 5},
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

export { ImageCard }
```