---
id: redux-03
title: StargateQuery
sidebar_label: StargateQuery
---

## 我们将学到什么

我们将学习如何使用RTK（Redux ToolKit）提取数据

## 什么是RTK查询

RTK Query是一种高级数据采样和缓存工具，旨在简化将数据加载到web应用程序的典型案例。


## 安装工程
要安装项目存储库，请在控制台中输入:

```jsx
git clone https://github.com/gHashTag/stargate2.git
```
项目文件夹中的下一个:
```jsx
yarn // 或者我们使用 npm install
```
然后:
```jsx
npx react-native run-android // 或 run-ios
```
## 创建服务

在文件夹`src/store/movie Api`中，您将看到以下内容:

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
在这里，我们使用电影搜索引擎从https://api.tvmaze.com ，以便通过链接获取有关它们的信息（为了更好地理解，您可以点击链接：http://api.tvmaze.com/search/shows?q=stargate。你会看到一组数据，其中有关电影的信息）

## 向商店添加服务

RTKQ服务生成一个应该包含在Redux根reducer中的"片段reducer"。 并且还有一个特殊的中间件处理数据采样。 两者都应该添加到Redux商店。

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
在您的应用程序应包装在 `<Provider store={store}>` 

## 快完成了

现在可以使用生成的钩子了 `useGetMovieQuery` 在它的组件！

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

  const { data, error, isLoading } = useGetMovieQuery(filterText) // передаем текст поиска
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

## 结果

我们学习了如何使用Redux ToolKit查询从服务器获取远程数据！

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)