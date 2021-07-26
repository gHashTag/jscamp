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
import { TouchableOpacity, TextInput, View, StyleSheet } from 'react-native'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { BLUE, W } from '../../../constants'

const SearchBar = ({
iconRight,
onPressRight,
onChangeText,
placeholder,
value,
onBlur,
colorRight
}) => {
const { container, sub, inputStyle, rightButtonStyle, searchStyle } = styles
return (
<View style={container}>
<View style={sub}>
<TextInput
style={inputStyle}
onChangeText={onChangeText}
placeholder={placeholder}
value={value}
onBlur={onBlur}
/>
<TouchableOpacity onPress={onPressRight}>
<View style={searchStyle}>
<MaterialCommunityIcons name={iconRight} style={[rightButtonStyle, { color: colorRight }]} />
</View>
</TouchableOpacity>
</View>
</View>
)
}

const styles = StyleSheet.create({
container: {
flexDirection: 'row',
justifyContent: 'center',
shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.2,
elevation: 2,
backgroundColor: BLUE,
position: 'relative',
...ifIphoneX({
height: 122
}, {
height: 90
})
},
sub: {
justifyContent: 'space-between',
marginTop: 40,
alignItems: 'center',
flexDirection: 'row',
width: W - 35,
backgroundColor: '#fff',
height: 40,
borderRadius: 20
},
inputStyle: {
fontSize: 18,
height: 23,
width: W - 90,
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
rightButtonStyle: {
marginTop: 2,
fontSize: 30
}
})

export { SearchBar }
```
Код самого файла SearchBar мы поправили, теперь нужно поменять экспорты в общем index.js. Просто добавим строчку. 
```jsx
export * from './Search' 
```

## Правка HomeScreen
Далее, чтобы SearchBar у нас отображался нужно порефакторить код HomeScreen. Сначало мы добавим импорт SearchBar, потом опять-таки добавим нужное и уберём лишнее. 
```jsx
import React, { Component, useEffect, useState } from 'react'
import { View } from 'react-native' 
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
useState({ data })
} catch (e) {
throw e
}
}

onSearchChange = (text) => {
props.searchChanged(text)
}

render() {
const { visibleSearchbar } = useState
const { navigation, data } = props
return (
<View>
{ visibleSearchbar ?
<Search
colorRight={'#fff'}
iconRight="magnify"
placeholder="Search"
onChangeText={useEffect.onSearchChange}
value={movie}
onPressRight={() => useState({ visibleSearchbar: false })}
onBlur={() => useState({ visibleSearchbar: false })}
/> :
<Header
title={movie ? movie : 'Search'} 
colorRight={'#fff'}
iconRight="magnify"
onPressRi
ght={() => useState({ visibleSearchbar: true })}
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
}
}

export default (HomeScreen)
```
В данном уроке мы создали SearchBar.
[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)