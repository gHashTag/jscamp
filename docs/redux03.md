---
id: redux-03
title: StargateQuery
sidebar_label: StargateQuery
---

## What we will learn

We will learn how to extract data using RTK(Redux ToolKit)

## What is RTK Query

RTK Query is an advanced data sampling and caching tool designed to simplify typical cases of loading data into a web application.


## Installation
To install the project repository, enter in the console:

```jsx
git clone https://github.com/gHashTag/stargate2.git
```
Next in the project folder:
```jsx
yarn // or we use npm install
```
And then:
```jsx
npx react-native run-android // or run-ios
```
## Creating a service

In the folder `src/store/movie Api` you will see the following:

```js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.tvmaze.com/search/'
  }),
  endpoints: build => ({
    getMovie: build.query({
      query: name => `shows?q=${name}`
    })
  })
})

export const { useGetMovieQuery } = movieApi
```
Here we use the movie search engine from https://api.tvmaze.com , in order to get information about them by the link (to better understand, you can click on the link: http://api.tvmaze.com/search/shows?q=stargate. You will see an array of data in which information about movies)

## Adding a service to the Store

The RTKQ service generates a "fragment reducer" that should be included in the Redux root reducer. And there is also a special middleware that processes data sampling. Both should be added to the Redux store.

```js
import { configureStore } from '@reduxjs/toolkit'
import { movieApi } from './movieApi'

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer
  },
  middleware: getMiddleware => getMiddleware().concat(movieApi.middleware)
})
```
After that, your app should be wrapped in `<Provider store={store}>`

## Almost done

Now you can use the generated `useGetMovieQuery` hook in your components!

```js
import React, { useState } from 'react'
import { View, FlatList, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { EmptyList, Header, ImageCard, Loading, Search } from '../../components'
import { nanoid } from 'nanoid/non-secure'
import { useGetMovieQuery } from '../../store/movieApi'

export function HomeScreen({ navigation }) {
  const [visibleSearch, setVisibleSearch] = useState(false)
  const [filterText, setFilterText] = useState('stargate')

  const { data, error, isLoading } = useGetMovieQuery(filterText) // passing the search text
  function onSearch(text) {
    setFilterText(text ? text : 'stargate')
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {visibleSearch ? (
        <Search
          colorRight={'#fff'}
          iconRight="magnify"
          placeholder="Search"
          value={filterText}
          onSubmit={onSearch}
          onBlur={() => setVisibleSearch(false)}
        />
      ) : (
        <Header
          title={'Search'}
          colorRight={'#fff'}
          iconRight="magnify"
          onPressRight={() => setVisibleSearch(true)}
        />
      )}
      {isLoading ? (
        <Loading />
      ) : data.length === 0 ? (
        <EmptyList />
      ) : (
        <FlatList
          data={data.filter(a => (a?.show?.image?.original ? true : false))}
          numColumns={2}
          ListHeaderComponent={<View style={{ height: 20 }} />}
          ListFooterComponent={<View style={{ height: 100 }} />}
          contentContainerStyle={{ alignItems: 'center' }}
          keyExtractor={() => nanoid()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <ImageCard
              data={item}
              onPress={() => navigation.navigate('DETAIL_SCREEN', { data: item.show })}
            />
          )}
        />
      )}
    </SafeAreaView>
  )
}
```

## Result

We learned how to take remote data from the server using Redux ToolKit Query!

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)