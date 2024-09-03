---
id: redux-02
title: StargateBasic
sidebar_label: StargateBasic
---


## 我们将学到什么

我们将学习如何创建商店，如何访问状态以及如何更新它。

## 安装工程
要安装项目存储库，请在控制台中输入:

```jsx
git clone https://github.com/gHashTag/stargate1.git
```
项目文件夹中的下一个:
```jsx
yarn // 或者我们使用 npm install
```
然后:
```jsx
npx react-native run-android // 或 run-ios
```

#### 这些步骤后，你应该得到这个结果:
![redux](/img/redux/appView-02.png)

## 检讨

考虑文件夹 `src/store/movieSlice`:

```js
import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid/non-secure'
import DATA from './data.json'

const initialState = {
  data: DATA
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    createNew: (state, action) => {
      state.data.push({ ...action.payload, id: nanoid() })
    },
    removeById: (state, action) => {
      state.data = state.data.filter(a => a.id !== action.payload)
    }
  }
})

export const { createNew, removeById } = movieSlice.actions

export const movieReducer = movieSlice.reducer
```
在这里，我们创建了存储库的"切片"，在那里我们指定了它的名称，初始状态以及用于更改状态的函数-reducer。 之后，我们从切片中导出我们的movieSlice，reducer和actions以供进一步使用。

之后，我们需要创建我们的商店并将应用程序包装在`<Provider>`中，以便应用程序可以访问状态→

```js
import { configureStore } from '@reduxjs/toolkit'
import { movieReducer } from './movieSlice'

export const store = configureStore({
  reducer: {
    movie: movieReducer
  }
})
```
```jsx
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import Navigation from './src/Navigation'
import { store } from './src/store'

function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </Provider>
  )
}

export default App
```

完成了！ 现在我们可以在应用程序的任何地方从商店获取状态。

## 进入国家

现在让我们使用状态 `src/screens/HomeScreen`:

```jsx
// ...其他进口
import { useSelector } from 'react-redux'

export function HomeScreen({ navigation }) {
  {/* ... */}
  const list = useSelector(state => state.movie.data).filter(a =>
    a.name.toLowerCase().includes(filterText.toLowerCase())
  )
  {/* ... */}
  return (
    <SafeAreaView>
      {/*.....*/}
      <FlatList
        data={list}
        {/*.....*/}
        keyExtractor={item => nanoid()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <ImageCard
            data={item}
            onPress={() => navigation.navigate('DETAIL_SCREEN', { show: item })}
          />
        )}
      />
    </SafeAreaView>
  )
}
```

正如我们所看到的，您需要使用react-redux库中的用户选择器钩子来访问组件中的任何状态。

## 状态变化

更新状态的唯一方法是调用 `dispatch()` 返回钩子的方法 `useDispatch()` 并传递动作对象。 存储库将启动其reducer函数并将新的状态值存储在内部。

我们以前在 `src/store/movieSlice`, 好吧，让我们使用它们。

### 移走

我实现了电影卡的删除 `src/components/ImageCard` 通过 Alert:

```jsx
import React from 'react'
import { useDispatch } from 'react-redux'
import { W } from '../../constants'
import { removeById } from '../../store/movieSlice'

const ImageCard = ({ data, onPress }) => {

  const dispatch = useDispatch()

  function openAlert() {
    function del() {
      dispatch(removeById(id))
    }
    Alert.alert(
      'Confirm action',
      'Are you sure you want to delete this movie?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'Yes', onPress: del }
      ],
      { cancelable: true }
    )
  }

  return // 组件
}
```


![redux](/img/redux/appDelItem-02.png)

正如我们所看到的，动作被传递给`dispatch`函数，而动作反过来可以接受有效负载参数（在这种情况下，id）。

### 增编

加到状态类似。
(src/screens/AddMovieScreen):
```js
import React from 'react'
import { StyleSheet, View, ScrollView, KeyboardAvoidingView } from 'react-native'
import { FormMovie, Header } from '../../components'
import { BLUE, WHITE } from '../../constants'
import { useHeaderHeight } from '@react-navigation/elements'
import { useDispatch } from 'react-redux'
import { createNew } from '../../store/movieSlice'

export function AddMovieScreen({ navigation }) {
  const headerHeight = useHeaderHeight()
  const dispatch = useDispatch()

  function handleSubmit(form) {
    dispatch(createNew(form)) // 我们传送 payload
    navigation.navigate('HOME_SCREEN')
  }

  return (
    <>
      <Header
        title={'Your movie'}
        onPress={() => navigation.goBack()}
        iconLeft="ios-arrow-back"
        headerColor={BLUE}
        colorLeft={WHITE}
      />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={headerHeight}
      >
        <ScrollView>
          <View style={screenCont}>
            <View style={{ height: 50 }} />
            <FormMovie onSubmit={handleSubmit} />
          </View>
          <View style={{ height: 70 }} />
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  )
}
```

## 结果

我们学会了如何在实践中使用redux

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)