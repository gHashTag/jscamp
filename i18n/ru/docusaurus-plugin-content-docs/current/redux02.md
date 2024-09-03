---
id: redux-02
title: StargateBasic
sidebar_label: StargateBasic
---


## Чему мы научимся

Мы узнаем как создать store, как получить доступ к состоянию и как обновлять его.

## Установка
Для установки репозитория проекта необходимо ввести в консоль:

```jsx
git clone https://github.com/gHashTag/stargate1.git
```
Далее в папке проекта:
```jsx
yarn // либо используем npm install
```
И потом:
```jsx
npx react-native run-android // или run-ios
```

#### После этих шагов вы должны получить такой результат:
![redux](/img/redux/appView-02.png)

## Обзор

Рассмотрим папку `src/store/movieSlice`:

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
Тут создается "Срез" нашего хранилища, там мы указываем его название, первоначальное состояние, и функции-редьюсеры для изменения состояния. После экспортируем наш movieSlice, reducer и actions из среза для дальнейшего использования.

После этого мы должны создать наш Store и обернуть приложение в `<Provider>` для того чтобы приложение имело доступ к состоянию →

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

Готово! Теперь мы можем получить состояние из store в любом месте приложения.

## Доступ к состоянию

Теперь давайте используем состояние в `src/screens/HomeScreen`:

```jsx
// ...другие импорты
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

Как мы видим нужно использовать useSelector хук из библиотеки react-redux для доступа к любому состоянию в компонентах.

## Изменение состояния

Единственный способ обновить состояние — вызвать `dispatch()` метод, который возвращает хук `useDispatch()` и передать объект действия. Хранилище запустит свою функцию редуктора и сохранит новое значение состояния внутри.

Мы ранее определили редьюсеры в `src/store/movieSlice`, что же давайте их используем.

### Удаление

Я реализовал удаление кино-карточки в `src/components/ImageCard` через Alert:

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

  return // Component
}
```


![redux](/img/redux/appDelItem-02.png)

Как мы видим, в функцию `dispatch` передаются действия(actions), а действие в свою очередь может принимать payload аргумент(в данном случае id).

### Добавление

Добавление в состояние аналогично.
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
    dispatch(createNew(form)) // передаем payload
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

## Итог

Мы узнали как использовать redux на практике!

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)