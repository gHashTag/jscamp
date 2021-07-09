---
id: redux-03
title: Header
sidebar_label: Header
---

##Header
В данном уроке мы адаптируем наш прошлый header под этот курс. Погнали!

##Добавим импорт иконок
Добавляем строчки:
```jsx
import from MaterialCommunityIcons from 'react-native-init/MaterialCommunityIcons'
```
И
```jsx
import { w, BLUE } from '../../../constants'//добавляем импорт BLUE
```
##Правка кода
Заменяем всё написанное на это
```jsx
import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { BLUE, W } from '../../../constants'

const Header = ({
iconLeft,
iconRight,
colorLeft,
colorRight,
title
}) => {
const { container, textStyle, iconLeftStyle, rightIconStyle } = styles
return (
<View style={container}>
{iconLeft &&
<TouchableOpacity onPress={onPress}>
<Ionicons name={iconLeft} style={iconLeftStyle} color={colorLeft} />
</TouchableOpacity>
}
<Text numberOfLines={1} ellipsizeMode="tail" style={textStyle}>{title}</Text>
{iconRight && 
<TouchableOpacity onPress={onPressRight}>
<MaterialCommunityIcons name={iconRight} style={[rightIconStyle, { color: colorRight }]} />
</TouchableOpacity>
}
</View>
)
}

const styles = StyleSheet.create({
container: {
flexDirection: 'row',
justifyContent: 'space-between',
shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },
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
width: W - 75,
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
rightIconStyle: {
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

##Правим HomeScreen
```jsx
import React, { Component } from 'react'
import { View } from 'react-native'
import {BLUE} from '../../constants' 
import { Header, Layout, ImageCard } from '../components/uikit' 
import {
STARGATE_DETAILS
} from '../routes'

const url = 'https://api.tvmaze.com/search/shows?q=stargate'

class HomeScreen extends Component {
state = {
title: 'STAR GATE', 
data: []
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
const { navigation, movie, data } = this.props
//console.log('this.props', this.props)
return (
<View style={container}>
<Header
detail
title={title} 
colorRight={'fff'} 
iconRight="magnify"
iconLeft='ios-arrow-back' 
headerColor={BLUE} 
colorLeft={WHITE} 
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
Мы изменили иконки и соответственно поправили код.