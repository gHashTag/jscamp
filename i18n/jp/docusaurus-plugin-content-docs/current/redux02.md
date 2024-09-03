---
id: redux-02
title: StargateBasic
sidebar_label: StargateBasic
---


## What we will learn

We will learn how to create a store, how to access the state and how to update it.

## Installation
To install the project repository, enter in the console:

```jsx
git clone https://github.com/gHashTag/stargate1.git
```
Next in the project folder:
```jsx
yarn // or we use npm install
```
And then:
```jsx
npx react-native run-android // or run-ios
```

#### After these steps you should get this result:
![redux](/img/redux/appView-02.png)

## Review

Consider the folder `src/store/movieSlice`:

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
Here a "Slice" of our repository is created, there we specify its name, initial state, and the functions-reducers for changing the state. After that, we export our movieSlice, reducer and actions from the slice for further use.

After that, we need to create our Store and wrap the application in `<Provider>` in order for the application to have access to the state →

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

Done! Now we can get the status from the store anywhere in the app.

## Access to the state

Now let's use the state in `src/screens/HomeScreen`:

```jsx
// ...other imports
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

As we can see, you need to use the user Selector hook from the react-redux library to access any state in components.

## State change

The only way to update the state is to call the `dispatch()` method, which returns the `useDispatch()` hook and pass the action object. The repository will start its reducer function and store the new state value inside.

We previously defined the redirectors in `src/store/movieSlice`, so let's use them.

### Removal

I implemented the removal of the movie card in `src/components/ImageCard` via Alert:

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

As we can see, actions are passed to the `dispatch` function, and the action, in turn, can take the payload argument (in this case, id).

### Add to the list

Adding to the state is similar.
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
    dispatch(createNew(form)) // passing the payload
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

## Result

We learned how to use redux in practice!

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)